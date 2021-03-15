import { NodeFlags } from '../ast/node';
import { VariableDeclaration, createVariableDeclaration } from '../ast/statements/variable-declaration';
import { Statement } from '../ast/statements';
import { createVariableStatement } from '../ast/statements/variable-stmt';
import { createVariableDeclarationList } from '../ast/statements/variable-declarationList';
import { FunctionDeclaration } from '../ast/statements/function-declaration';

/**
 * Based on TypeScript source
 *
 * TODO: Re-factor and optimize
 */

/**
 * An interface for transformer context
 */
export interface Context {} // eslint-disable-line @typescript-eslint/no-empty-interface -- fix later(TODO)

/* @internal */
export const enum LexicalEnvironmentFlags {
  None = 0,
  InParameters = 1 << 0,
  VariablesHoistedInParameters = 1 << 1
}

export function createContext(): Context {
  let lexicalEnvironmentVariableDeclarations: VariableDeclaration[];
  let lexicalEnvironmentFunctionDeclarations: FunctionDeclaration[];
  let lexicalEnvironmentVariableDeclarationsStack: VariableDeclaration[][] = [];
  let lexicalEnvironmentFunctionDeclarationsStack: FunctionDeclaration[][] = [];
  let lexicalEnvironmentStatementsStack: Statement[][] = [];
  let lexicalEnvironmentStatements: Statement[];
  let lexicalEnvironmentFlags = LexicalEnvironmentFlags.None;
  let lexicalEnvironmentFlagsStack: LexicalEnvironmentFlags[] = [];
  let lexicalEnvironmentStackOffset = 0;
  let lexicalEnvironmentSuspended = false;

  return {
    setLexicalEnvironmentFlags: function (flags: LexicalEnvironmentFlags, value: boolean): void {
      lexicalEnvironmentFlags = value ? lexicalEnvironmentFlags | flags : lexicalEnvironmentFlags & ~flags;
    },
    getLexicalEnvironmentFlags: function (): LexicalEnvironmentFlags {
      return lexicalEnvironmentFlags;
    },
    startLexicalEnvironment: function () {
      lexicalEnvironmentVariableDeclarationsStack[
        lexicalEnvironmentStackOffset
      ] = lexicalEnvironmentVariableDeclarations;
      lexicalEnvironmentFunctionDeclarationsStack[
        lexicalEnvironmentStackOffset
      ] = lexicalEnvironmentFunctionDeclarations;
      lexicalEnvironmentStackOffset++;
      lexicalEnvironmentVariableDeclarations = undefined!;
      lexicalEnvironmentFunctionDeclarations = undefined!;
      lexicalEnvironmentStatements = undefined!;
      lexicalEnvironmentFlags = LexicalEnvironmentFlags.None;
    },
    suspendLexicalEnvironment: function (): void {
      lexicalEnvironmentSuspended = true;
    },
    resumeLexicalEnvironment: function (): void {
      lexicalEnvironmentSuspended = false;
    },
    endLexicalEnvironment: function (): Statement[] | undefined {
      let statements: Statement[] | undefined;

      if (
        lexicalEnvironmentVariableDeclarations ||
        lexicalEnvironmentFunctionDeclarations ||
        lexicalEnvironmentStatements
      ) {
        if (lexicalEnvironmentFunctionDeclarations) {
          statements = [...lexicalEnvironmentFunctionDeclarations];
        }

        if (lexicalEnvironmentVariableDeclarations) {
          const statement = createVariableStatement(
            createVariableDeclarationList(lexicalEnvironmentVariableDeclarations, NodeFlags.None, -1, -2),
            NodeFlags.None,
            -1,
            -1
          );

          if (!statements) {
            statements = [statement];
          } else {
            statements.push(statement);
          }
        }

        if (lexicalEnvironmentStatements) {
          if (!statements) {
            statements = [...lexicalEnvironmentStatements];
          } else {
            statements = [...statements, ...lexicalEnvironmentStatements];
          }
        }
      }

      // Restore the previous lexical environment.
      lexicalEnvironmentStackOffset--;
      lexicalEnvironmentVariableDeclarations =
        lexicalEnvironmentVariableDeclarationsStack[lexicalEnvironmentStackOffset];
      lexicalEnvironmentFunctionDeclarations =
        lexicalEnvironmentFunctionDeclarationsStack[lexicalEnvironmentStackOffset];
      lexicalEnvironmentStatements = lexicalEnvironmentStatementsStack[lexicalEnvironmentStackOffset];
      lexicalEnvironmentFlags = lexicalEnvironmentFlagsStack[lexicalEnvironmentStackOffset];
      if (lexicalEnvironmentStackOffset === 0) {
        lexicalEnvironmentVariableDeclarationsStack = [];
        lexicalEnvironmentFunctionDeclarationsStack = [];
        lexicalEnvironmentStatementsStack = [];
        lexicalEnvironmentFlagsStack = [];
      }
      return statements;
    },
    hoistVariableDeclaration: function (name: any): void {
      const decl: any = createVariableDeclaration(name, false, null, null, NodeFlags.None, -1, -1);
      if (!lexicalEnvironmentVariableDeclarations) {
        lexicalEnvironmentVariableDeclarations = [decl];
      } else {
        lexicalEnvironmentVariableDeclarations.push(decl);
      }
      if (lexicalEnvironmentFlags & LexicalEnvironmentFlags.InParameters) {
        lexicalEnvironmentFlags |= LexicalEnvironmentFlags.VariablesHoistedInParameters;
      }
    },
    hoistFunctionDeclaration: function (func: FunctionDeclaration): void {
      if (!lexicalEnvironmentFunctionDeclarations) {
        lexicalEnvironmentFunctionDeclarations = [func];
      } else {
        lexicalEnvironmentFunctionDeclarations.push(func);
      }
    },
    addInitializationStatement: function (node: Statement): void {
      if (!lexicalEnvironmentStatements) {
        lexicalEnvironmentStatements = [node];
      } else {
        lexicalEnvironmentStatements.push(node);
      }
    },
    dispose: function () {
      // Release references to external entries for GC purposes.
      lexicalEnvironmentVariableDeclarations = undefined!;
      lexicalEnvironmentVariableDeclarationsStack = undefined!;
      lexicalEnvironmentFunctionDeclarations = undefined!;
      lexicalEnvironmentFunctionDeclarationsStack = undefined!;
    }
  };
}
