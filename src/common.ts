import { SyntaxKind, NodeFlags } from './ast/syntax-node';
import { nextToken } from './scanner/scanner';
import { DiagnosticType } from './diagnostic';
import { DiagnosticCode } from './diagnostic/diagnostic-code';
import { createDiagnosticError } from './diagnostic/diagnostic-error';
import { DiagnosticSource } from './diagnostic/diagnostic-source';
import { TokenSyntaxKind, createToken } from './ast/token';

export const enum Context {
  None = 0,
  AllowRegExp = 1 << 6,
  DisallowIn = 1 << 7,
  AllowReturn  = 1 << 8,
  InGeneratorContext  = 1 << 9,
  InAwaitContext  = 1 << 10,

  InSwitch   = 1 << 11,
  InIteration  = 1 << 12,
  NewTarget  = 1 << 13,
  Parameters = 1 << 14,
  SuperCall = 1 << 16,
  SuperProperty = 1 << 17,
  InConstructor = 1 << 18,
  Strict = 1 << 19,
  Module = 1 << 20,
  OptionsDisableWebCompat = 1 << 21,

}

export const enum DestructibleKind {
  None = 0,
  MustDestruct = 1 << 0,
  NotDestructible = 1 << 1,
  Assignable = 1 << 2,
  Destructible = 1 << 3,
  DisallowTrailing = 1 << 4,
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

}
export const enum DestuctionKind {
  NORMAL,
  REST,
  FOR
}
/**
 * The parser interface.
 */
 export interface ParserState {
  source: string;
  nodeFlags: NodeFlags;
  curPos: number;
  pos: number;
  diagnostics: DiagnosticType[];
  token: TokenSyntaxKind;
  tokenPos: number;
  end: number;
  destructible: DestructibleKind;
  assignable: boolean;
  tokenValue: any;
  tokenRaw: string;
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
  parser.diagnostics.push(createDiagnosticError(
    DiagnosticSource.Parser,
    DiagnosticCode.Unexpected_token,
    parser.curPos,
    parser.pos,
  ));
  return false;
}

export function consumeOptToken<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): any {
  if (parser.token === token) {
    const pos = parser.curPos;
    const kind = parser.token;
  nextToken(parser, context);
  return createToken(kind, pos, parser.curPos);
  }
  return null;
}

export function consumeToken<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): any {
  const pos = parser.curPos;
  const kind = parser.token;
  if (parser.token === token) {
  nextToken(parser, context);
  return createToken(kind, pos, parser.curPos);
  }
  parser.diagnostics.push(createDiagnosticError(
    DiagnosticSource.Parser,
    DiagnosticCode.Unexpected_token,
    parser.curPos,
    parser.pos,
  ));
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
   return consume(parser, context, SyntaxKind.Semicolon);
}


export function isCaseOrDefaultClause(t: SyntaxKind): boolean {
  return t === SyntaxKind.DefaultKeyword || t === SyntaxKind.CaseKeyword;
}

