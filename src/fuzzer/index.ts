import { ExpressionNode } from './../ast/expressions/index';
import { createRootNode } from '../ast/root-node';
import { createEmptyStatement, EmptyStatement } from '../ast/statements/empty-stmt';
import { createDebuggerStatement, DebuggerStatement } from '../ast/statements/debugger-stmt';
import { createCommaOperator, CommaOperator } from '../ast/expressions/comma-operator';
import { createIdentifier, Identifier } from '../ast/expressions/identifier-expr';
import { createParenthesizedExpression, ParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { createPostfixUpdateExpression, PostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression, PrefixUpdateExpression } from '../ast/expressions/prefix-update-expr';
import { createUnaryExpression, UnaryExpression } from '../ast/expressions/unary-expr';
import { createElison, Elison } from '../ast/expressions/elison';
import { createCallExpression, CallExpression } from '../ast/expressions/call-expr';
import { createNewExpression, NewExpression } from '../ast/expressions/new-expr';
import { createSpreadElement, SpreadElement } from '../ast/expressions/spread-element';
import { createArrayLiteral, ArrayLiteral } from '../ast/expressions/array-literal';
import { createArgumentList, ArgumentList } from '../ast/expressions/argument-list';
import { createElementList, ElementList } from '../ast/expressions/element-list';
import { createExpressionStatement, ExpressionStatement } from '../ast/statements/expression-stmt';
import { FuzzerContext, rng, repeat, pickRandomOne } from './common';
import { createToken } from '../ast/token';
import { SyntaxKind, NodeFlags } from '../ast/syntax-node';

export function fuzzScript() {
  return createRootNode(
    [],
    repeat(/* recurmax */ 2, FuzzerContext.None, /* times */ 1, pickRandomOne([fuzzStatement])),
    /* isModule */ false,
    'fuzz',
    'fuzzing.js'
  );
}

export function fuzzModule() {
  return createRootNode(
    [],
    repeat(/* recurmax */ 2, FuzzerContext.Module, /* times */ 1, pickRandomOne([fuzzStatement])),
    /* isModule */ true,
    'fuzz',
    'fuzzing.js'
  );
}

function fuzzStatement(recurmax: number, context: FuzzerContext) {
  if (recurmax >= 3) return fuzzEmptyStatement();
  return pickRandomOne([fuzzDebuggerStatement, fuzzEmptyStatement, fuzzExpressionStatement])(recurmax, context);
}

function fuzzExpression(recurmax: number, context: FuzzerContext): ExpressionNode {
  if (recurmax >= 3) return fuzzIdentifier();
  recurmax++;
  return pickRandomOne([
    fuzzIdentifier,
    fuzzFalseKeyword,
    fuzzTrueKeyword,
    fuzzNullLiteral,
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
  return createIdentifier('a', 'a', NodeFlags.None, -1, -1);
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
      //fuzzMemberExpression,
      fuzzCallExpression,
      fuzzNewExpression,
      fuzzParenthesizedExpression,
      fuzzArrayLiteral,
      fuzzPostfixUpdateExpression,
      fuzzPrefixUpdateExpression,
      //fuzzObjectLiteral,
      //fuzzNumericLiteral,
      //fuzzFloatingPointLiteral,
      //fuzzStringLiteral,
      //fuzzBigInt,
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
