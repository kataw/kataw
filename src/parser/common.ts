import { SyntaxNode, SyntaxKind, NodeFlags } from '../ast/syntax-node';
import { nextToken } from './scanner/scanner';
import { DiagnosticSource, DiagnosticKind } from '../diagnostic/diagnostic';
import { TokenSyntaxKind, createToken } from '../ast/token';
import { DiagnosticCode, diagnosticMap } from '../diagnostic/diagnostic-code';

export const enum Tristate {
  False, // There *cannot* be a parenthesized arrow function here.
  True, // We definitely expect a parenthesized arrow function here.
  Unknown // There *might* be a parenthesized arrow function here.
}

export const enum ParseFunctionFlag {
  None = 0,
  IsDefaultModifier = 1 << 0, // Parsed with 'default' modifer in 'eport default'
  DisallowAsyncArrow = 1 << 1, // Disallows async arrows in export declarations
  DisallowGenerator = 1 << 2 // Disallow generators in 'IfStatement' and 'LabelledStatement'
}

export const enum LeftHandSide {
  None = 0,
  NotAssignable = 1 << 0, // The left hand side is not assignable
  DisallowClassExtends = 1 << 1, // Disallow expr on the left side of 'class extends'
  ForStatement = 1 << 2 // Left hand side in 'ForStatement'
}

export const enum ObjectTypeFlag {
  None = 0,
  AllowStatic = 1 << 0, // Allows 'static' modifier if parsed as an declared class
  AllowProto = 1 << 1 // Allows '__proto__' if parsed as an declared class
}

export const enum Context {
  None = 0,
  OptionsNext = 1 << 0,
  OptionsAllowTypes = 1 << 1,
  OptionsDisableWebCompat = 1 << 2,
  TopLevel = 1 << 3,
  InBlock = 1 << 4,
  InStaticBlock = 1 << 5,
  AllowRegExp = 1 << 6,
  DisallowIn = 1 << 7,
  AllowReturn = 1 << 8,
  InGeneratorContext = 1 << 9,
  InAwaitContext = 1 << 10,
  InSwitch = 1 << 11,
  InIteration = 1 << 12,
  NewTarget = 1 << 13,
  Parameters = 1 << 14,
  InForOfAwait = 1 << 15,
  SuperCall = 1 << 16,
  SuperProperty = 1 << 17,
  InConstructor = 1 << 18,
  Strict = 1 << 19,
  Module = 1 << 20,
  InClassBody = 1 << 21,
  InConditionalExpr = 1 << 22,
  InTypes = 1 << 23,
  AllowImportMeta = 1 << 25,
  LexicalContext = 1 << 26
}

export const enum DestructibleKind {
  None = 0,
  MustDestruct = 1 << 0,
  NotDestructible = 1 << 1,
  Assignable = 1 << 2,
  Destructible = 1 << 3,
  DisallowTrailing = 1 << 4,
  CoverInitializedName = 1 << 5,
  EvalOrArguments = 1 << 6,
  YieldContext = 1 << 7
}

export const enum BindingType {
  None = 0,
  Pattern = 1 << 0,
  Assignment = 1 << 1,
  AllowLHS = 1 << 2,
  ArgumentList = 1 << 3,
  Let = 1 << 4,
  Const = 1 << 5,
  Var = 1 << 6,
  CatchIdentifier = 1 << 7,
  CatchPattern = 1 << 8,
  Literal = 1 << 9,
  FunctionLexical = 1 << 10,
  FunctionStatement = 1 << 11,
  Class = 1 << 12,
  Empty = 1 << 13,
  Export = 1 << 14,
  InArrow = 1 << 15
}
export const enum DestuctionKind {
  NORMAL,
  REST,
  FOR
}
/**
 * Scope kinds
 */
export const enum ScopeKind {
  None = 0,
  ForStatement = 1 << 0,
  Block = 1 << 1,
  CatchStatement = 1 << 2,
  SwitchStatement = 1 << 3,
  ArgList = 1 << 4,
  TryStatement = 1 << 5,
  CatchBlock = 1 << 6,
  FunctionBody = 1 << 7,
  FunctionRoot = 1 << 8,
  FunctionParams = 1 << 9,
  ArrowParams = 1 << 10,
  CatchIdentifier = 1 << 11
}

export type OnError = (
  source: DiagnosticSource,
  kind: DiagnosticKind,
  message: string,
  start: number,
  end: number
) => void | undefined;

/**
 * The scope interface.
 */
export interface ScopeState {
  parent: ScopeState | null;
  kind: ScopeKind;
  hasError: boolean;
}

/**
 * The parser interface.
 */
export interface ParserState {
  source: string;
  nodeFlags: NodeFlags;
  curPos: number;
  pos: number;
  token: TokenSyntaxKind;
  tokenPos: number;
  end: number;
  onError: OnError;
  diagnosticStartPos: number;
  destructible: DestructibleKind;
  assignable: boolean;
  tokenValue: any;
  tokenRaw: string;
  labels: any[];
  previousErrorPos: number;
}

export function consumeOpt<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): boolean {
  if (parser.token === token) {
    nextToken(parser, context);
    return true;
  }
  return false;
}

export function consume<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  token: T,
  diagnosticMessage?: DiagnosticCode
): boolean {
  if (parser.token === token) {
    nextToken(parser, context);
    return true;
  }

  if (diagnosticMessage && parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[diagnosticMessage],
      parser.curPos,
      parser.pos
    );
  }
  return false;
}

export function consumeOptToken<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): any {
  if (parser.token === token) {
    const pos = parser.curPos;
    const kind = parser.token;
    const flags = parser.nodeFlags;
    nextToken(parser, context);
    return createToken(kind, flags | NodeFlags.ChildLess, pos, parser.curPos);
  }
  return null;
}

export function consumeToken<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): any {
  const pos = parser.curPos;
  const kind = parser.token;
  const flags = parser.nodeFlags;
  if (parser.token === token) {
    nextToken(parser, context);
    return createToken(kind, flags, pos, parser.curPos);
  }

  return null;
}

export function consumeKeywordAndCheckForEscapeSequence<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  token: T,
  pos: number
): any {
  const kind = parser.token;
  const flags = parser.nodeFlags;
  if (parser.token === token) {
    if (flags & 0b00000000000000000110000000000000) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        pos,
        parser.pos
      );
    }
    nextToken(parser, context);
    return createToken(kind, flags, pos, parser.curPos);
  }
  return null;
}

export function parseSemicolon(parser: ParserState, context: Context): boolean {
  // Check for automatic semicolon insertion according to
  // the rules given in ECMA-262, section 7.9, page 21.
  if (parser.token & SyntaxKind.Smi || parser.nodeFlags & NodeFlags.NewLine) {
    // consume the semicolon if it was explicitly provided.
    return consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);
  }
  if (parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expected_a],
      parser.curPos,
      parser.pos
    );
  }
  return false;
}

export function speculate(parser: ParserState, context: Context, callback: any, rollback: boolean) {
  const { pos, curPos, tokenPos, tokenRaw, token, tokenValue, nodeFlags } = parser;
  const result = callback(parser, context);

  // If our callback returned something 'falsy' or we're just looking ahead,
  // then unconditionally restore us to where we were.
  if (!result || rollback) {
    parser.pos = pos;
    parser.curPos = curPos;
    parser.tokenPos = tokenPos;
    parser.token = token;
    parser.tokenValue = tokenValue;
    parser.nodeFlags = nodeFlags;
    parser.tokenRaw = tokenRaw;
  }
  return result;
}

export function canParseSemicolon(parser: ParserState): number {
  // We can parse out an optional semicolon in ASI cases in the following cases.
  return parser.token & SyntaxKind.Smi || parser.nodeFlags & NodeFlags.NewLine;
}

export function isValidDirective(parser: ParserState): boolean {
  return (
    parser.token === SyntaxKind.NumericLiteral ||
    ((parser.token & (SyntaxKind.IsPropertyOrCall | SyntaxKind.IsBinaryOp | SyntaxKind.IsExpressionStart)) === 0 &&
      !!canParseSemicolon(parser))
  );
}

export function isIterationStatement(t: SyntaxKind): boolean {
  // If encounter 'for', 'while', or 'do', it's an valid iteration statement start
  //
  // Examples:
  //      for(...) {}
  //      while(...) {}
  //      do { } while(...)
  return t === SyntaxKind.ForKeyword || t === SyntaxKind.WhileKeyword || t === SyntaxKind.DoKeyword;
}

export function isCaseOrDefaultClause(t: SyntaxKind): boolean {
  return t === SyntaxKind.DefaultKeyword || t === SyntaxKind.CaseKeyword;
}

export function isStatementNode(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.IsStatement) === NodeFlags.IsStatement;
}

export function isExpressionNode(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ExpressionNode) === NodeFlags.ExpressionNode;
}

export function isChildLess(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ChildLess) === NodeFlags.ChildLess;
}

export function isSingleQuote(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.SingleQuote) === NodeFlags.SingleQuote;
}

export function containsSeparator(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ContainsSeparator) === NodeFlags.ContainsSeparator;
}

export function hasUnicodeEscape(node: SyntaxNode): boolean {
  return (node.flags & (NodeFlags.ExtendedUnicodeEscape | NodeFlags.UnicodeEscape)) !== 0;
}

export function hasExtendedUnicodeEscape(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ExtendedUnicodeEscape) === NodeFlags.ExtendedUnicodeEscape;
}

export function isConstructor(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Constructor) === NodeFlags.Constructor;
}

export function isGenerator(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Generator) === NodeFlags.Generator;
}
export function isAsync(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Async) === NodeFlags.Async;
}

export function isLexical(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Lexical) === NodeFlags.Lexical;
}

export function isDeclared(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Declared) === NodeFlags.Declared;
}
export function isNoneSimpleParamList(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.NoneSimpleParamList) === NodeFlags.NoneSimpleParamList;
}

export function isImplicitOctal(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ImplicitOctal) === NodeFlags.ImplicitOctal;
}
export function isOctalIntegerLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.OctalIntegerLiteral) === NodeFlags.OctalIntegerLiteral;
}
export function isBinaryIntegerLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.BinaryIntegerLiteral) === NodeFlags.BinaryIntegerLiteral;
}
export function isUnterminated(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Unterminated) === NodeFlags.Unterminated;
}
export function hexIntegerLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.HexIntegerLiteral) === NodeFlags.HexIntegerLiteral;
}

export function containsInvalidEscape(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ContainsInvalidEscape) === NodeFlags.ContainsInvalidEscape;
}

export function isAssignOp(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsAssignOp) === SyntaxKind.IsAssignOp;
}

export function isBinaryOp(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsBinaryOp) === SyntaxKind.IsBinaryOp;
}

export function isStatementStart(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsStatementStart) === SyntaxKind.IsStatementStart;
}

export function isIdentifier(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsIdentifier) === SyntaxKind.IsIdentifier;
}

export function isExpressionStart(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsExpressionStart) === SyntaxKind.IsExpressionStart;
}

export function isPropertyOrCall(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsPropertyOrCall) === SyntaxKind.IsPropertyOrCall;
}

export function isEllipsis(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsEllipsis) === SyntaxKind.IsEllipsis;
}

export function isInOrOf(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsInOrOf) === SyntaxKind.IsInOrOf;
}

export function isKeyword(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsKeyword) === SyntaxKind.IsKeyword;
}

export function isFutureReserved(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsFutureReserved) === SyntaxKind.IsFutureReserved;
}

export function isStartOfType(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsStartOfType) === SyntaxKind.IsStartOfType;
}

export function isSemicolon(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsSemicolon) === SyntaxKind.IsSemicolon;
}

export function hasNewLine(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.NewLine) === NodeFlags.NewLine;
}

export function hasDuplicateLabels(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.DuplicateLabels) === NodeFlags.DuplicateLabels;
}

export function isTemplateLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.TemplateLiteral) === NodeFlags.TemplateLiteral;
}

export function isCallExpression(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.IsCallExpression) === NodeFlags.IsCallExpression;
}

export function isMemberExpression(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.IsMemberExpression) === NodeFlags.IsMemberExpression;
}

export function createScope(): ScopeState {
  return {
    kind: ScopeKind.Block,
    parent: null,
    hasError: false
  };
}

export function createParentScope(parent: ScopeState | null, kind: ScopeKind): ScopeState {
  return {
    kind,
    parent,
    hasError: false
  };
}

export function addVarOrBlock(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  name: string,
  bindingType: BindingType
) {
  if (bindingType & BindingType.Var) {
    addVarName(parser, context, scope, name, bindingType);
  } else {
    addBlockName(parser, context, scope, name, bindingType);
  }
}

export function addVarName(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  name: string,
  kind: BindingType
): void {
  if (scope) {
    let currentScope: any = scope;

    while (currentScope && (currentScope.kind & ScopeKind.FunctionRoot) === 0) {
      if (currentScope['#' + name] & (BindingType.Let | BindingType.Const | BindingType.FunctionLexical)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Cannot_redeclare_block_scoped_variable],
          parser.curPos,
          parser.pos
        );
      } else if (currentScope['#' + name] & (BindingType.CatchIdentifier | BindingType.CatchPattern)) {
        if (
          context & (Context.Strict | Context.OptionsDisableWebCompat) ||
          (currentScope['#' + name] & BindingType.CatchIdentifier) === 0
        ) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Cannot_bound_an_already_bound_catch_clause_binding],
            parser.curPos,
            parser.pos
          );
        }
      }

      currentScope['#' + name] = kind;
      currentScope = currentScope.parent;
    }
  }
}

export function addBlockName(parser: ParserState, context: Context, scope: any, name: string, type: BindingType): void {
  if (scope) {
    const value = scope['#' + name];

    if (value) {
      if ((value & BindingType.Empty) === 0) {
        if (type & BindingType.ArgumentList) {
          parser.diagnosticStartPos = parser.curPos;
          scope.hasError = true;
        } else if (
          context & Context.OptionsDisableWebCompat ||
          (value & BindingType.FunctionLexical) === 0 ||
          (context & Context.InBlock) === 0
        ) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Duplicate_identifier],
            parser.curPos,
            parser.pos
          );
        }
      }
    } else {
      const parent = scope.parent;
      if (scope.kind & ScopeKind.FunctionBody && parent['#' + name] && (parent['#' + name] & BindingType.Empty) === 0) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Cannot_redeclare_block_scoped_variable],
          parser.curPos,
          parser.pos
        );
      }

      if (
        scope.kind & ScopeKind.ArrowParams &&
        value &&
        (value & BindingType.Empty) === 0 &&
        type & BindingType.ArgumentList
      ) {
        parser.diagnosticStartPos = parser.curPos;
        scope.hasError = true;
      }

      if (
        scope.kind & ScopeKind.CatchBlock &&
        parent['#' + name] & (BindingType.CatchIdentifier | BindingType.CatchPattern)
      ) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.A_block_scoped_variable_cannot_shadow_a_catch_clause_binding],
          parser.curPos,
          parser.pos
        );
      }
    }
    scope['#' + name] = type;
  }
}
