import { RootNode } from '../ast/rootNode';
import { StatementNode } from '../ast/statements';
import { VariableDeclaration } from '../ast/statements/variable-declaration';
import { FunctionDeclaration } from '../ast/statements/function-declaration';

/* @internal */
export const enum LexicalEnvironmentFlags {
  None = 0,
  InParameters = 1 << 0,
  VariablesHoistedInParameters = 1 << 1
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
  lexicalEnvironmentSuspended: false;
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

export function transform(root: RootNode, transformers: any) {
  return transformers(createTransform())(root);
}
