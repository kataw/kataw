import { ExpressionStatement } from './expr-stmt';
import { BlockStatement } from './block-stmt';
import { DebuggerStatement } from './debugger-stmt';
import { WhileStatement } from './while-stmt';
import { WithStatement } from './with-stmt';
import { BreakStatement } from './break-stmt';
import { ContinueStatement } from './continue-stmt';
import { LabelledStatement } from './labelled-stmt';
import { DoWhileStatement } from './do-stmt';
import { ForOfStatement } from './for-of-stmt';
import { ForInStatement } from './for-in-stmt';
import { ForStatement } from './for-stmt';
import { ReturnStatement } from './return-stmt';
import { ThrowStatement } from './throw-stmt';
import { TryStatement } from './try-stmt';
import { IfStatement } from './if-stmt';
import { EmptyStatement } from './empty-stmt';
import { VariableStatement } from './variable-stmt';
import { LexicalBinding } from './lexical-binding';
import { CaseClause } from './case-clause';
import { DefaultClause } from './default-clause';
import { BindingList } from './binding-list';
import { SwitchStatement } from './switch-stmt';
import { VariableDeclaration } from './variable-declaration';
import { VariableDeclarationList } from './variable-declarationList';
import { LexicalDeclaration } from './lexical-declaration';
import { FunctionDeclaration } from './function-declaration';
import { ClassDeclaration } from './class-declaration';

export type CaseBlock = DefaultClause | CaseClause;

/**
 * The set of all syntax items which are statements.
 */
export type Statement =
  | ExpressionStatement
  | BlockStatement
  | DebuggerStatement
  | WhileStatement
  | WithStatement
  | BreakStatement
  | ContinueStatement
  | LabelledStatement
  | DoWhileStatement
  | IfStatement
  | ForOfStatement
  | ForInStatement
  | ForStatement
  | ReturnStatement
  | SwitchStatement
  | BindingList
  | CaseClause
  | DefaultClause
  | EmptyStatement
  | ThrowStatement
  | TryStatement
  | VariableStatement
  | VariableDeclaration
  | VariableDeclaration
  | VariableDeclarationList
  | LexicalDeclaration
  | LexicalBinding
  | FunctionDeclaration
  | ClassDeclaration;
