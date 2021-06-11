import { SyntaxKind, SyntaxNode, NodeFlags } from './syntax-node';

/**
 * A token. This can include single characters, operators and keywords.
 */
export interface SyntaxToken<TokenKind extends TokenSyntaxKind> extends SyntaxNode {
  kind: TokenKind;
}

export type TokenSyntaxKind =
  | SyntaxKind.EndOfFileToken
  | SyntaxKind.LeftBrace
  | SyntaxKind.RightBrace
  | SyntaxKind.LetKeyword
  | SyntaxKind.Colon
  | SyntaxKind.LeftBracket
  | SyntaxKind.RightBracket
  | SyntaxKind.LeftParen
  | SyntaxKind.RightParen
  | SyntaxKind.Decrement
  | SyntaxKind.UnknownToken
  | SyntaxKind.Increment
  | SyntaxKind.DeleteKeyword
  | SyntaxKind.ProtoKeyword
  | SyntaxKind.Negate
  | SyntaxKind.Complement
  | SyntaxKind.PrivateIdentifier
  | SyntaxKind.QuestionMarkPeriod
  | SyntaxKind.TemplateCont
  | SyntaxKind.Target
  | SyntaxKind.Meta
  | SyntaxKind.TemplateTail
  | SyntaxKind.ImplementsKeyword
  | SyntaxKind.FromKeyword
  | SyntaxKind.Add
  | SyntaxKind.Subtract
  | SyntaxKind.EvalIdentifier
  | SyntaxKind.ArgumentsIdentifier
  | SyntaxKind.ConstKeyword
  | SyntaxKind.TypeofKeyword
  | SyntaxKind.VoidKeyword
  | SyntaxKind.GetKeyword
  | SyntaxKind.SetKeyword
  | SyntaxKind.Comma
  | SyntaxKind.Multiply
  | SyntaxKind.YieldKeyword
  | SyntaxKind.Period
  | SyntaxKind.ExtendsKeyword
  | SyntaxKind.QuestionMarkPeriod
  | SyntaxKind.QuestionMarkQuestionMark
  | SyntaxKind.NumericLiteral
  | SyntaxKind.StaticKeyword
  | SyntaxKind.StringLiteral
  | SyntaxKind.NewKeyword
  | SyntaxKind.AsKeyword
  | SyntaxKind.Decorator
  | SyntaxKind.FromKeyword
  | SyntaxKind.SuperKeyword
  | SyntaxKind.TemplateTail
  | SyntaxKind.TemplateSpan
  | SyntaxKind.ImportKeyword
  | SyntaxKind.ThisKeyword
  | SyntaxKind.NullKeyword
  | SyntaxKind.BigIntLiteral
  | SyntaxKind.TrueKeyword
  | SyntaxKind.QuestionMark
  | SyntaxKind.AnyKeyword
  | SyntaxKind.BooleanKeyword
  | SyntaxKind.UndefinedKeyword
  | SyntaxKind.UnknownKeyword
  | SyntaxKind.LessThan
  | SyntaxKind.GreaterThan
  | SyntaxKind.BitwiseOr
  | SyntaxKind.BitwiseAnd
  | SyntaxKind.FalseKeyword
  | SyntaxKind.Arrow
  | SyntaxKind.Ellipsis
  | SyntaxKind.Assign
  | SyntaxKind.Semicolon
  | SyntaxKind.DoKeyword
  | SyntaxKind.ElseKeyword
  | SyntaxKind.IfKeyword
  | SyntaxKind.WhileKeyword
  | SyntaxKind.DefaultKeyword
  | SyntaxKind.CaseKeyword
  | SyntaxKind.AwaitKeyword
  | SyntaxKind.OfKeyword
  | SyntaxKind.InKeyword
  | SyntaxKind.ForKeyword
  | SyntaxKind.ContinueKeyword
  | SyntaxKind.BreakKeyword
  | SyntaxKind.ThrowKeyword
  | SyntaxKind.TryKeyword
  | SyntaxKind.CatchKeyword
  | SyntaxKind.FinallyKeyword
  | SyntaxKind.FunctionKeyword
  | SyntaxKind.DebuggerKeyword
  | SyntaxKind.SwitchKeyword
  | SyntaxKind.WithKeyword
  | SyntaxKind.ReturnKeyword
  | SyntaxKind.TypeKeyword
  | SyntaxKind.VarKeyword
  | SyntaxKind.BooleanKeyword
  | SyntaxKind.EmptyKeyword
  | SyntaxKind.StringKeyword
  | SyntaxKind.NumberKeyword
  | SyntaxKind.NeverKeyword
  | SyntaxKind.ObjectKeyword
  | SyntaxKind.BigIntLiteral
  | SyntaxKind.MixedKeyword
  | SyntaxKind.DeclareKeyword
  | SyntaxKind.ClassKeyword
  | SyntaxKind.OpaqueKeyword
  | SyntaxKind.ExportKeyword
  | SyntaxKind.SymbolKeyword
  | SyntaxKind.RegularExpression
  | SyntaxKind.Multiply
  | SyntaxKind.AsyncKeyword
  | SyntaxKind.Identifier;

export function createToken<T extends TokenSyntaxKind>(
  tokenKind: T,
  flags: NodeFlags,
  start: number,
  end: number
): SyntaxToken<T> {
  return {
    kind: tokenKind,
    flags,
    start,
    end
  };
}
