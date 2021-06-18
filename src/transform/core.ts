import { RootNode } from '../ast/rootNode';
import { NodeFlags, SyntaxKind } from '../ast/syntax-node';
import { createToken } from '../ast/token';
import { StatementNode } from '../ast/statements';
import { VariableDeclaration , createVariableDeclaration } from '../ast/statements/variable-declaration';
import { FunctionDeclaration } from '../ast/statements/function-declaration';
import { createVariableStatement } from '../ast/statements/variable-stmt';

import { createVariableDeclarationList } from '../ast/statements/variable-declarationList';

/* @internal */
export const enum LexicalEnvironmentFlags {
  None = 0,
  InParameters = 1 << 0,
  VariablesHoistedInParameters = 1 << 1
}

export function createNodeArray(elements?: any): any {
  if (elements) {
    if (elements.length !== 0) {
      // Bitwise masks!
      return elements;
    }
  } else {
    elements = [];
  }
  return elements;
}

export function concatenate<T>(array1: T[], array2: T[]): T[] {
  if (!some(array2)) return array1;
  if (!some(array1)) return array2;
  return [...array1, ...array2];
}

export function some<T>(array: readonly T[] | undefined, predicate?: (value: T) => boolean): boolean {
  if (array) {
    if (predicate) {
      for (const v of array) {
        if (predicate(v)) {
          return true;
        }
      }
    } else {
      return array.length > 0;
    }
  }
  return false;
}

export function extractSingleNode(nodes: any[]): Node {
  return singleOrUndefined(nodes);
}

export function singleOrUndefined(array: any[]): any {
  return array && array.length === 1 ? array[0] : undefined;
}

export interface Transform {
  lexicalEnvironmentVariableDeclarations: any; //[] | undefined;
  lexicalEnvironmentFunctionDeclarations: FunctionDeclaration[] | undefined;
  lexicalEnvironmentStatements: StatementNode[] | undefined;
  lexicalEnvironmentVariableDeclarationsStack: VariableDeclaration[][];
  lexicalEnvironmentFunctionDeclarationsStack: any; //FunctionDeclaration[][];
  lexicalEnvironmentStatementsStack: StatementNode[][] | undefined;
  lexicalEnvironmentFlags: LexicalEnvironmentFlags;
  lexicalEnvironmentFlagsStack: LexicalEnvironmentFlags[];
  lexicalEnvironmentStackOffset: 0;
  lexicalEnvironmentSuspended: boolean;
}

export function createTransform(): Transform {
  return {
    lexicalEnvironmentVariableDeclarationsStack: [],
    lexicalEnvironmentFunctionDeclarationsStack: [],
    lexicalEnvironmentStatementsStack: [],
    lexicalEnvironmentStatements: undefined,
    lexicalEnvironmentFunctionDeclarations: undefined,
    lexicalEnvironmentVariableDeclarations: undefined,
    lexicalEnvironmentFlags: LexicalEnvironmentFlags.None,
    lexicalEnvironmentFlagsStack: [],
    lexicalEnvironmentStackOffset: 0,
    lexicalEnvironmentSuspended: false
  };
}

export function startLexicalEnvironment(transform: Transform): void {
  transform.lexicalEnvironmentVariableDeclarationsStack[transform.lexicalEnvironmentStackOffset] =
    transform.lexicalEnvironmentVariableDeclarations;

  transform.lexicalEnvironmentFunctionDeclarationsStack[transform.lexicalEnvironmentStackOffset] =
    transform.lexicalEnvironmentFunctionDeclarations;

  transform.lexicalEnvironmentStackOffset++;
  transform.lexicalEnvironmentVariableDeclarations = undefined!;
  transform.lexicalEnvironmentFunctionDeclarations = undefined!;
  transform.lexicalEnvironmentStatements = undefined!;
  transform.lexicalEnvironmentFlags = LexicalEnvironmentFlags.None;
}

export function endLexicalEnvironment(transform: Transform): StatementNode[] | undefined {
  let statements: StatementNode[] | undefined;

  if (
    transform.lexicalEnvironmentVariableDeclarations ||
    transform.lexicalEnvironmentFunctionDeclarations ||
    transform.lexicalEnvironmentStatements
  ) {
    if (transform.lexicalEnvironmentFunctionDeclarations) {
      statements = [...transform.lexicalEnvironmentFunctionDeclarations];
    }

    if (transform.lexicalEnvironmentVariableDeclarations) {
      const statement = createVariableStatement(
        /* declaredKeyword */ null,
        createToken(SyntaxKind.VarKeyword, NodeFlags.IsStatement | NodeFlags.ChildLess, -1, -1),
        createVariableDeclarationList(transform.lexicalEnvironmentVariableDeclarations, -1, -1),
        NodeFlags.IsStatement,
        -1,
        -1
      );

      if (!statements) {
        statements = [statement];
      } else {
        statements.push(statement);
      }
    }

    if (transform.lexicalEnvironmentStatements) {
      if (!statements) {
        statements = [...transform.lexicalEnvironmentStatements];
      } else {
        statements = [...statements, ...transform.lexicalEnvironmentStatements];
      }
    }
  }
  // Restore the previous lexical environment.
  transform.lexicalEnvironmentStackOffset--;
  transform.lexicalEnvironmentVariableDeclarations =
    transform.lexicalEnvironmentVariableDeclarationsStack[transform.lexicalEnvironmentStackOffset];
  transform.lexicalEnvironmentFunctionDeclarations =
    transform.lexicalEnvironmentFunctionDeclarationsStack[transform.lexicalEnvironmentStackOffset];
  transform.lexicalEnvironmentStatements = (transform.lexicalEnvironmentStatementsStack as any)[
    transform.lexicalEnvironmentStackOffset
  ];
  transform.lexicalEnvironmentFlags = transform.lexicalEnvironmentFlagsStack[transform.lexicalEnvironmentStackOffset];
  if (transform.lexicalEnvironmentStackOffset === 0) {
    transform.lexicalEnvironmentVariableDeclarationsStack = [];
    transform.lexicalEnvironmentFunctionDeclarationsStack = [];
    transform.lexicalEnvironmentStatementsStack = [];
    transform.lexicalEnvironmentFlagsStack = [];
  }
  return statements;
}

export function hoistVariableDeclaration(transform: Transform, name: any): void {
  const decl: any = createVariableDeclaration(name, null, null, null, -1, -1);
  if (!transform.lexicalEnvironmentVariableDeclarations) {
    transform.lexicalEnvironmentVariableDeclarations = [decl];
  } else {
    transform.lexicalEnvironmentVariableDeclarations.push(decl);
  }
  if (transform.lexicalEnvironmentFlags & LexicalEnvironmentFlags.InParameters) {
    transform.lexicalEnvironmentFlags |= LexicalEnvironmentFlags.VariablesHoistedInParameters;
  }
}

export function hoistFunctionDeclaration(transform: Transform, func: FunctionDeclaration): void {
  if (!transform.lexicalEnvironmentFunctionDeclarations) {
    transform.lexicalEnvironmentFunctionDeclarations = [func];
  } else {
    transform.lexicalEnvironmentFunctionDeclarations.push(func);
  }
}

export function addInitializationStatement(transform: Transform, node: StatementNode): void {
  if (!transform.lexicalEnvironmentStatements) {
    transform.lexicalEnvironmentStatements = [node];
  } else {
    transform.lexicalEnvironmentStatements.push(node);
  }
}

export function dispose(transform: Transform) {
  // Release references to external entries for GC purposes.
  transform.lexicalEnvironmentVariableDeclarations = undefined!;
  transform.lexicalEnvironmentVariableDeclarationsStack = undefined!;
  transform.lexicalEnvironmentFunctionDeclarations = undefined!;
  transform.lexicalEnvironmentFunctionDeclarationsStack = undefined!;
}

export function transform(root: RootNode, transformers: any) {
  return transformers(createTransform())(root);
}
