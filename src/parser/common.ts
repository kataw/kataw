import { SyntaxNode, SyntaxKind, NodeFlags } from '../ast/syntax-node';
import { nextToken } from './scanner/scanner';
import { DiagnosticSource } from '../diagnostic/diagnostic';
import { TokenSyntaxKind, createToken } from '../ast/token';
import { DiagnosticCode, diagnosticMap } from '../diagnostic/diagnostic-code';

export const enum Context {
  None = 0,
  OptionsNext = 1 << 0,
  OptionsAllowTypes = 1 << 1,
  OptionsDisableWebCompat = 1 << 2,
  AllowRegExp = 1 << 6,
  DisallowIn = 1 << 7,
  AllowReturn = 1 << 8,
  InGeneratorContext = 1 << 9,
  InAwaitContext = 1 << 10,

  InSwitch = 1 << 11,
  InIteration = 1 << 12,
  NewTarget = 1 << 13,
  Parameters = 1 << 14,
  SuperCall = 1 << 16,
  SuperProperty = 1 << 17,
  InConstructor = 1 << 18,
  Strict = 1 << 19,
  Module = 1 << 20,
  InConditionalExpr = 1 << 22,
  InTypes = 1 << 23,
  InClassBody = 1 << 24,
  AllowImportMeta = 1 << 25,
  LexicalContext = 1 << 26,
  InFormalParameter = 1 << 27
}

export const enum DestructibleKind {
  None = 0,
  MustDestruct = 1 << 0,
  NotDestructible = 1 << 1,
  Assignable = 1 << 2,
  Destructible = 1 << 3,
  DisallowTrailing = 1 << 4
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
  Export = 1 << 14
}
export const enum DestuctionKind {
  NORMAL,
  REST,
  FOR
}

export type OnError = (source: DiagnosticSource, message: string, start: number, end: number) => void | undefined;

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
  destructible: DestructibleKind;
  assignable: boolean;
  tokenValue: any;
  originalValue: string;
  tokenRaw: string;
  labels: any[];
}

export function consumeOpt<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): boolean {
  if (parser.token === token) {
    nextToken(parser, context);
    return true;
  }
  return false;
}

export function consume<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): boolean {
  if (parser.token === token) {
    nextToken(parser, context);
    return true;
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
  nextToken(parser, context);
  return null;
}

export function parseSemicolon(parser: ParserState, context: Context): boolean {
  // Check for automatic semicolon insertion according to
  // the rules given in ECMA-262, section 7.9, page 21.
  if (parser.token & SyntaxKind.Smi || parser.nodeFlags & NodeFlags.NewLine) {
    // consume the semicolon if it was explicitly provided.
    return consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);
  }
  parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode.Expected_a], parser.curPos, parser.pos);
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

export function hasErrors(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.HasErrors) === NodeFlags.HasErrors;
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
