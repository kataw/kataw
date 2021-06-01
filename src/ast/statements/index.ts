import { Block } from './block';
import { BlockStatement } from './block-stmt';
import { BreakStatement } from './break-stmt';
import { ContinueStatement } from './continue-stmt';
import { CaseBlock } from './case-block';
import { CaseClause } from './case-clause';
import { CatchClause } from './catch-stmt';
import { FunctionDeclaration } from './function-declaration';
import { DebuggerStatement } from './debugger-stmt';
import { DefaultClause } from './default-clause';
import { DoWhileStatement } from './do-stmt';
import { WhileStatement } from './while-stmt';
import { WithStatement } from './with-stmt';
import { EmptyStatement } from './empty-stmt';
import { ExpressionStatement } from './expression-stmt';
import { ForInStatement } from './for-in-stmt';
import { ForOfStatement } from './for-of-stmt';
import { ForStatement } from './for-stmt';
import { IfStatement } from './if-stmt';
import { LabelledStatement } from './labelled-stmt';
import { LexicalBinding } from './lexical-binding';
import { LexicalDeclaration } from './lexical-declaration';
import { BindingList } from './binding-list';
import { VariableStatement } from './variable-stmt';
import { TryStatement } from './try-stmt';
import { ThrowStatement } from './throw-stmt';
import { SwitchStatement } from './switch-stmt';
import { ReturnStatement } from './return-stmt';

/**
 * The set of all syntax items which are statements.
 */
export type StatementNode =
  | BindingList
  | Block
  | BlockStatement
  | BreakStatement
  | CaseBlock
  | CaseClause
  | CatchClause
  | ContinueStatement
  | DebuggerStatement
  | DefaultClause
  | DoWhileStatement
  | EmptyStatement
  | ExpressionStatement
  | ForInStatement
  | ForOfStatement
  | ForStatement
  | FunctionDeclaration
  | IfStatement
  | LabelledStatement
  | LexicalBinding
  | LexicalDeclaration
  | ReturnStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | VariableStatement
  | WhileStatement
  | WithStatement;
