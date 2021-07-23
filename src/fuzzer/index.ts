import { ExpressionNode } from './../ast/expressions/index';
import { createRootNode } from '../ast/root-node';
import { createEmptyStatement, EmptyStatement } from '../ast/statements/empty-stmt';
import { createDebuggerStatement, DebuggerStatement } from '../ast/statements/debugger-stmt';
import { createBlockStatement, BlockStatement } from '../ast/statements/block-stmt';
import { createIfStatement, IfStatement } from '../ast/statements/if-stmt';
import { createThrowStatement, ThrowStatement } from '../ast/statements/throw-stmt';
import { createWhileStatement, WhileStatement } from '../ast/statements/while-stmt';
import { createBreakStatement, BreakStatement } from '../ast/statements/break-stmt';
import { createCaseBlock, CaseBlock } from '../ast/statements/case-block';
import { createDoWhileStatement, DoWhileStatement } from '../ast/statements/do-stmt';
import { createSwitchStatement, SwitchStatement } from '../ast/statements/switch-stmt';
import { createDefaultClause, DefaultClause } from '../ast/statements/default-clause';
import { createCaseClause, CaseClause } from '../ast/statements/case-clause';
import { createLabelledStatement, LabelledStatement } from '../ast/statements/labelled-stmt';
import { createContinueStatement, ContinueStatement } from '../ast/statements/continue-stmt';
import { createBlock, Block } from '../ast/statements/block';
import { createCommaOperator, CommaOperator } from '../ast/expressions/comma-operator';
import { createIdentifier, Identifier } from '../ast/expressions/identifier-expr';
import { createParenthesizedExpression, ParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { createPostfixUpdateExpression, PostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression, PrefixUpdateExpression } from '../ast/expressions/prefix-update-expr';
import { createUnaryExpression, UnaryExpression } from '../ast/expressions/unary-expr';
import { createElison, Elison } from '../ast/expressions/elison';
import { createCallExpression, CallExpression } from '../ast/expressions/call-expr';
import { createNewExpression, NewExpression } from '../ast/expressions/new-expr';
import { createIndexExpression, IndexExpression } from '../ast/expressions/index-expr';
import { createSpreadElement, SpreadElement } from '../ast/expressions/spread-element';
import { createArrayLiteral, ArrayLiteral } from '../ast/expressions/array-literal';
import { createArgumentList, ArgumentList } from '../ast/expressions/argument-list';
import { createElementList, ElementList } from '../ast/expressions/element-list';
import { createStringLiteral, StringLiteral } from '../ast/expressions/string-literal';
import { createNumericLiteral, NumericLiteral } from '../ast/expressions/numeric-literal';
import { createExpressionStatement, ExpressionStatement } from '../ast/statements/expression-stmt';
import { FuzzerContext, rng, repeat, pickRandomOne, createId, createString, getTrueOrFalse } from './common';
import { createToken } from '../ast/token';
import { SyntaxKind, NodeFlags } from '../ast/syntax-node';

export function fuzzScript() {
  const { directives, hasStrictDirective } = fuzzDirectives();
  const context = hasStrictDirective ? FuzzerContext.Strict : FuzzerContext.None;
  return createRootNode(
    directives,
    repeat(/* recurmax */ 3, context, /* times */ 5, pickRandomOne([fuzzStatement])),
    /* isModule */ false,
    'fuzz',
    'fuzzing.js'
  );
}

export function fuzzModule() {
  return createRootNode(
    [],
    repeat(
      /* recurmax */ 3,
      FuzzerContext.Strict | FuzzerContext.Module,
      /* times */ 5,
      pickRandomOne([fuzzStatement])
    ),
    /* isModule */ true,
    'fuzz',
    'fuzzing.js'
  );
}

function fuzzStatement(recurmax: number, context: FuzzerContext) {
  if (recurmax >= 4) return fuzzEmptyStatement();
  return pickRandomOne([
    fuzzDebuggerStatement,
    fuzzEmptyStatement,
    fuzzBlockStatement,
    fuzzExpressionStatement,
    fuzzIfStatement,
    fuzzWhileStatement,
    fuzzDoWhileStatement,
    fuzzLabelledStatement,
    fuzzSwitchStatement,
    fuzzThrowStatement
  ])(recurmax, context);
}

function fuzzExpression(recurmax: number, context: FuzzerContext): ExpressionNode {
  if (recurmax >= 4) return fuzzIdentifier();
  recurmax++;
  return pickRandomOne([
    fuzzIdentifier,
    fuzzFalseKeyword,
    fuzzTrueKeyword,
    fuzzNullLiteral,
    fuzzIndexExpression,
    fuzzThisKeyword,
    fuzzUnaryExpression,
    fuzzPostfixUpdateExpression,
    fuzzPrefixUpdateExpression
  ])(recurmax, context);
}

function fuzzFalseKeyword(): any {
  return createToken(SyntaxKind.FalseKeyword, NodeFlags.None, -1, -1);
}

function fuzzTrueKeyword(): any {
  return createToken(SyntaxKind.TrueKeyword, NodeFlags.None, -1, -1);
}

function fuzzNullLiteral(): any {
  return createToken(SyntaxKind.NullKeyword, NodeFlags.None, -1, -1);
}

function fuzzThisKeyword(): any {
  return createToken(SyntaxKind.ThisKeyword, NodeFlags.None, -1, -1);
}

function fuzzEmptyStatement(): EmptyStatement {
  return createEmptyStatement(-1, -1);
}

function fuzzIdentifier(): Identifier {
  return createIdentifier(createId(), createId(), NodeFlags.None, -1, -1);
}

function fuzzDebuggerStatement(): DebuggerStatement {
  return createDebuggerStatement(createToken(SyntaxKind.DebuggerKeyword, NodeFlags.None, -1, -1), -1, -1);
}

function fuzzExpressionStatement(recurmax: number, context: FuzzerContext): ExpressionStatement {
  recurmax--;
  return createExpressionStatement(
    pickRandomOne([fuzzCommaOperator, fuzzExpression /*, fuzzNewExpression, fuzzCallExpression*/])(recurmax, context),
    -1,
    -1
  );
}

function fuzzCommaOperator(recurmax: number, context: FuzzerContext): CommaOperator {
  return createCommaOperator(repeat(recurmax, context, 2, fuzzExpression), -1, -1);
}

function fuzzParenthesizedExpression(recurmax: number, context: FuzzerContext): ParenthesizedExpression {
  const expr = [fuzzExpression, fuzzCommaOperator];
  return createParenthesizedExpression(pickRandomOne(expr)(recurmax, context), NodeFlags.None, -1, -1);
}

function fuzzUnaryExpression(recurmax: number, context: FuzzerContext): UnaryExpression {
  return createUnaryExpression(
    createToken(
      pickRandomOne([
        SyntaxKind.Add,
        SyntaxKind.Subtract,
        SyntaxKind.TypeofKeyword,
        SyntaxKind.VoidKeyword,
        SyntaxKind.DeleteKeyword
      ]),
      NodeFlags.None,
      -1,
      -1
    ),
    pickRandomOne([
      fuzzIdentifier,
      fuzzCallExpression,
      fuzzNewExpression,
      fuzzParenthesizedExpression,
      fuzzArrayLiteral,
      fuzzPostfixUpdateExpression,
      fuzzPrefixUpdateExpression,
      fuzzNumericLiteral,
      fuzzStringLiteral,
      fuzzThisKeyword,
      fuzzNullLiteral
    ])(recurmax, context),
    -1,
    -1
  );
}
function fuzzPostfixUpdateExpression(recurmax: number, context: FuzzerContext): PostfixUpdateExpression {
  return createPostfixUpdateExpression(
    createToken(pickRandomOne([SyntaxKind.Increment, SyntaxKind.Decrement]), NodeFlags.None, -1, -1),
    pickRandomOne([fuzzIdentifier, fuzzParenthesizedExpression])(recurmax, context),
    -1,
    -1
  );
}

function fuzzPrefixUpdateExpression(recurmax: number, context: FuzzerContext): PrefixUpdateExpression {
  return createPrefixUpdateExpression(
    createToken(pickRandomOne([SyntaxKind.Increment, SyntaxKind.Decrement]), NodeFlags.None, -1, -1),
    pickRandomOne([fuzzIdentifier, fuzzParenthesizedExpression])(recurmax, context),
    -1,
    -1
  );
}

function fuzzCallExpression(recurmax: number, context: FuzzerContext): CallExpression {
  recurmax++;
  return createCallExpression(
    fuzzExpression(recurmax, context),
    fuzzArgumentList(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}

function fuzzNewExpression(recurmax: number, context: FuzzerContext): NewExpression {
  recurmax++;
  return createNewExpression(
    createToken(SyntaxKind.NewKeyword, NodeFlags.None, -1, -1),
    fuzzExpression(recurmax, context),
    fuzzArgumentList(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}

function fuzzArgumentList(recurmax: number, context: FuzzerContext): ArgumentList {
  return createArgumentList(
    repeat(
      recurmax,
      context,
      1,
      pickRandomOne([fuzzExpression, fuzzNewExpression, fuzzCallExpression, fuzzSpreadElement])
    ),
    false,
    NodeFlags.None,
    -1,
    -1
  );
}

function fuzzElison(): Elison {
  return createElison(-1, -1);
}

// SpreadElement :
//   ...AssignmentExpression
function fuzzSpreadElement(recurmax: number, context: FuzzerContext): SpreadElement {
  recurmax--;
  return createSpreadElement(
    createToken(SyntaxKind.Ellipsis, NodeFlags.None, -1, -1),
    pickRandomOne([fuzzExpression, fuzzNewExpression, fuzzCallExpression])(recurmax, context),
    -1,
    -1
  );
}

function fuzzArrayLiteral(recurmax: number, context: FuzzerContext): ArrayLiteral {
  return createArrayLiteral(fuzzElementList(recurmax, context), NodeFlags.None, -1, -1);
}

function fuzzElementList(recurmax: number, context: FuzzerContext): ElementList {
  recurmax++;

  let count = rng(5);

  const result = [];

  while (count-- > 0) {
    result.push(
      pickRandomOne([fuzzExpression, fuzzElison, fuzzNewExpression, fuzzCallExpression, fuzzSpreadElement])(
        recurmax,
        context
      )
    );
  }
  return createElementList(result, false, NodeFlags.None, -1, -1);
}

// StringLiteral
function fuzzStringLiteral(): StringLiteral {
  const text = createString();
  return createStringLiteral(text, text, NodeFlags.None, -1, -1);
}

// NumericLiteral
function fuzzNumericLiteral(): NumericLiteral {
  const text = rng(1e4);
  return createNumericLiteral(text, '"' + text + '"', NodeFlags.None, -1, -1);
}

function fuzzBlockStatement(recurmax: number, context: FuzzerContext): BlockStatement {
  recurmax++;
  return createBlockStatement(fuzzBlock(recurmax, context), NodeFlags.None, -1, -1);
}

function fuzzBlock(recurmax: number, context: FuzzerContext): Block {
  recurmax++;
  return createBlock(repeat(recurmax, context, 3, pickRandomOne([fuzzStatement])), NodeFlags.None, -1, -1);
}

// ThrowStatement :
//   `throw` [no LineTerminator here] Expression `;`
function fuzzThrowStatement(recurmax: number, context: FuzzerContext): ThrowStatement {
  recurmax--;
  return createThrowStatement(
    createToken(SyntaxKind.ThrowKeyword, NodeFlags.None, -1, -1),
    fuzzExpression(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}

// IfStatement :
//  `if` `(` Expression `)` Statement `else` Statement
//  `if` `(` Expression `)` Statement
function fuzzIfStatement(recurmax: number, context: FuzzerContext): IfStatement {
  recurmax--;
  let count = rng(6);
  return count > 3
    ? createIfStatement(
        createToken(SyntaxKind.IfKeyword, NodeFlags.None, -1, -1),
        fuzzExpression(recurmax, context),
        fuzzStatement(recurmax, context),
        createToken(SyntaxKind.ElseKeyword, NodeFlags.None, -1, -1),
        fuzzStatement(recurmax, context),
        NodeFlags.None,
        -1,
        -1
      )
    : createIfStatement(
        createToken(SyntaxKind.IfKeyword, NodeFlags.None, -1, -1),
        fuzzExpression(recurmax, context),
        fuzzStatement(recurmax, context),
        null,
        null,
        NodeFlags.None,
        -1,
        -1
      );
}

// WhileStatement :
//   `while` `(` Expression `)` Statement
function fuzzWhileStatement(recurmax: number, context: FuzzerContext): WhileStatement {
  return createWhileStatement(
    createToken(SyntaxKind.WhileKeyword, NodeFlags.None, -1, -1),
    fuzzExpression(recurmax, context),
    pickRandomOne([fuzzStatement, fuzzBreakStatement, fuzzContinueStatement])(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}
function fuzzBreakStatement(): BreakStatement {
  return createBreakStatement(createToken(SyntaxKind.BreakKeyword, NodeFlags.None, -1, -1), null, -1, -1);
}

// ContinueStatement :
//   `continue` `;`
//   `continue` [no LineTerminator here] LabelIdentifier `;
function fuzzContinueStatement(): ContinueStatement {
  return createContinueStatement(createToken(SyntaxKind.ContinueKeyword, NodeFlags.None, -1, -1), null, -1, -1);
}

function fuzzDoWhileStatement(recurmax: number, context: FuzzerContext): DoWhileStatement {
  return createDoWhileStatement(
    createToken(SyntaxKind.DoKeyword, NodeFlags.None, -1, -1),
    fuzzExpression(recurmax, context),
    createToken(SyntaxKind.WhileKeyword, NodeFlags.None, -1, -1),
    pickRandomOne([fuzzStatement, fuzzBreakStatement, fuzzContinueStatement])(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}

function fuzzSwitchStatement(recurmax: number, context: FuzzerContext): SwitchStatement | EmptyStatement {
  if (recurmax >= 3) return fuzzEmptyStatement();
  return createSwitchStatement(
    createToken(SyntaxKind.SwitchKeyword, NodeFlags.None, -1, -1),
    fuzzExpression(recurmax, context),
    fuzzCaseBlock(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}

function fuzzCaseBlock(recurmax: number, context: FuzzerContext): CaseBlock {
  return createCaseBlock(fuzzSwitchClauses(recurmax, context), -1, -1);
}

function fuzzSwitchClauses(recurmax: number, context: FuzzerContext): (CaseClause | DefaultClause)[] {
  const result = [];
  let count = rng(6);
  recurmax++;
  let seenDefault = false;
  // Prevents duplicate default clauses
  while (count-- > 0) {
    if (!seenDefault) {
      seenDefault = true;
      result.push(fuzzDefaultClause(recurmax, context));
    }
    result.push(fuzzCaseClause(recurmax, context));
  }
  if (result.length === 0) result.push(fuzzCaseClause(recurmax, context));
  return result;
}

function fuzzCaseClause(recurmax: number, context: FuzzerContext): CaseClause {
  return createCaseClause(
    createToken(SyntaxKind.CaseKeyword, NodeFlags.None, -1, -1),
    fuzzExpression(recurmax, context),
    createToken(SyntaxKind.Colon, NodeFlags.None, -1, -1),
    repeat(recurmax, context, 3, fuzzStatement),
    -1,
    -1
  );
}

function fuzzDefaultClause(recurmax: number, context: FuzzerContext): DefaultClause {
  return createDefaultClause(
    createToken(SyntaxKind.DefaultKeyword, NodeFlags.None, -1, -1),
    createToken(SyntaxKind.Colon, NodeFlags.None, -1, -1),
    repeat(recurmax, context, 3, fuzzStatement),
    -1,
    0.1
  );
}

function fuzzLabelledStatement(recurmax: number, context: FuzzerContext): LabelledStatement {
  recurmax++;
  return createLabelledStatement(
    fuzzIdentifier(),
    createToken(SyntaxKind.CaseKeyword, NodeFlags.None, -1, -1),
    fuzzStatement(recurmax, context),
    NodeFlags.None,
    -1,
    -1
  );
}

export function fuzzDirectives(): any {
  const hasStrictDirective = getTrueOrFalse();
  let count = rng(3);
  const directives = [];
  while (count-- > 0) {
    directives.push(fuzzDirective(hasStrictDirective));
  }
  if (count === 0) directives.push(fuzzDirective(hasStrictDirective));
  return { directives, hasStrictDirective };
}

export function fuzzDirective(allowUseStrict: boolean): any {
  const useStrictDirective = getTrueOrFalse();
  let value = allowUseStrict && useStrictDirective ? 'use strict' : createString();
  if (allowUseStrict && !useStrictDirective) value = 'use strict';
  return createStringLiteral(value, value, NodeFlags.None, -1, -1);
}

function fuzzIndexExpression(recurmax: number, context: FuzzerContext): IndexExpression {
  return createIndexExpression(
    pickRandomOne([
      fuzzStringLiteral,
      fuzzFalseKeyword,
      fuzzTrueKeyword,
      fuzzNullLiteral,
      fuzzThisKeyword,
      fuzzArrayLiteral,
      fuzzCallExpression,
      fuzzParenthesizedExpression,
      fuzzIdentifier
    ])(recurmax, context),
    fuzzIdentifier(),
    NodeFlags.None,
    -1,
    -1
  );
}
