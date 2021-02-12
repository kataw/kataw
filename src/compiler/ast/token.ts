export const enum Token {
  Type = 0xff,

  /* Precedence for binary operators (always positive) */
  PrecStart = 8,
  Precedence = 15 << PrecStart, // 8-11

  IsAccessModifier = 1 << 7,
  /* Attribute names */
  IsIdentifier = 1 << 12,
  Keyword = 1 << 13,
  FutureReserved = 1 << 14,
  IsClassField = 1 << 15,
  IsStatementStart = 1 << 16,
  IsExpressionStart = 1 << 17,
  IsUnaryOp = 1 << 18,
  IsPatternStart = 1 << 19,
  IsAssignOp = 1 << 20,
  IsBinaryOp = 1 << 21,
  IsPropertyOrCall = 1 << 22,
  IsMember = 1 << 23,
  IsInOrOf = 1 << 24,
  IsUpdateOp = 1 << 25,
  IsEllipsis = 1 << 26,
  IsSwitchClause = 1 << 27,
  IsProperty = 1 << 28,
  IsStartOfType = 1 << 29,

  IsComma = 1 << 30,
  IsSemicolon = 1 << 31,

  /* Node types */
  EndOfSource = 0, // Pseudo

  /* Constants/Bindings */
  Identifier = 1 | IsExpressionStart | IsIdentifier | IsStartOfType,
  NumericLiteral = 2 | IsExpressionStart | IsProperty | IsStartOfType,
  BigIntLiteral = 140 | IsExpressionStart | IsProperty | IsStartOfType,
  StringLiteral = 4 | IsExpressionStart | IsStartOfType | IsProperty,
  RegularExpression = 5 | IsExpressionStart,
  FalseKeyword = 6 | Keyword | IsExpressionStart | IsProperty | IsStartOfType,
  TrueKeyword = 7 | Keyword | IsExpressionStart | IsStartOfType | IsProperty | IsStartOfType,
  NullKeyword = 8 | Keyword | IsExpressionStart | IsStartOfType | IsProperty | IsStartOfType,

  /* Template nodes */
  NoSubstitutionTemplateLiteral = 9 | IsMember | IsPropertyOrCall | IsExpressionStart,
  TemplateHead = 10 | IsExpressionStart | IsMember | IsPropertyOrCall,
  TemplateTail = 11 | IsExpressionStart | IsMember | IsPropertyOrCall,
  TemplateCont = 12 | IsExpressionStart | IsMember | IsPropertyOrCall,

  /* Punctuators */
  Arrow = 13, // =>
  LeftParen = 14 | IsExpressionStart | IsPropertyOrCall | Token.IsStartOfType, // (
  LeftBrace = 15 | IsExpressionStart | IsPatternStart, // {
  Period = 16 | IsMember | IsPropertyOrCall, // .
  Ellipsis = 17 | IsEllipsis | IsStartOfType, // ...
  RightBrace = 18 | IsClassField, // }

  RightParen = 19, // )
  Semicolon = 20 | IsStatementStart | IsSwitchClause | IsSemicolon | IsClassField, // ;
  Comma = 21 | IsComma, // ,
  LeftBracket = 22 | IsExpressionStart | IsPatternStart | IsMember | IsPropertyOrCall | IsProperty, // [
  RightBracket = 23, // ]
  Colon = 24 | IsClassField, // :
  QuestionMark = 25 | IsClassField, // ?
  QuestionMarkPeriod = 26 | IsPropertyOrCall, // ?.
  Nullish = 27 | IsBinaryOp | (1 << PrecStart), // ??
  NullishAssign = 28 | IsAssignOp, // ??=
  SingleQuote = 29, // '
  DoubleQuote = 30, // "
  JSXClose = 31, // </
  JSXAutoClose = 32, // />

  /* Update operators */
  Increment = 33 | IsExpressionStart | IsUpdateOp, // ++
  Decrement = 34 | IsExpressionStart | IsUpdateOp, // --

  /* Assign operators */
  Assign = 35 | IsAssignOp | IsClassField, // =
  ShiftLeftAssign = 36 | IsAssignOp, // <<=
  ShiftRightAssign = 37 | IsAssignOp, // >>=
  LogicalShiftRightAssign = 38 | IsAssignOp, // >>>=
  ExponentiateAssign = 39 | IsAssignOp, // **=
  AddAssign = 40 | IsAssignOp, // +=
  SubtractAssign = 41 | IsAssignOp, // -=
  MultiplyAssign = 42 | IsAssignOp, // *=
  DivideAssign = 43 | IsAssignOp, // /=
  ModuloAssign = 44 | IsAssignOp, // %=
  BitwiseXorAssign = 45 | IsAssignOp, // ^=
  BitwiseOrAssign = 46 | IsAssignOp, // |=
  BitwiseAndAssign = 47 | IsAssignOp, // &=
  LogicalAndAssign = 48 | IsAssignOp, // &&=
  LogicalOrAssign = 49 | IsAssignOp, // ||=

  /* Unary/binary operators */
  TypeofKeyword = 50 | Keyword | IsUnaryOp | IsStartOfType,
  DeleteKeyword = 51 | Keyword | IsUnaryOp,
  VoidKeyword = 52 | Keyword | IsUnaryOp | IsStartOfType,
  Negate = 53 | IsUnaryOp | IsPropertyOrCall | IsMember | IsClassField, // !
  Complement = 54 | IsUnaryOp, // ~
  Add = 55 | (10 << PrecStart) | IsBinaryOp | IsUnaryOp, // +
  Subtract = 56 | (10 << PrecStart) | IsBinaryOp | IsUnaryOp, // -
  InKeyword = 57 | (8 << PrecStart) | IsBinaryOp | IsUnaryOp | IsInOrOf | Keyword,
  InstanceofKeyword = 58 | (8 << PrecStart) | IsBinaryOp | IsUnaryOp | Keyword,
  Multiply = 59 | (11 << PrecStart) | IsBinaryOp | IsProperty, // *
  Modulo = 60 | (11 << PrecStart) | IsBinaryOp, // %
  Divide = 61 | (11 << PrecStart) | IsBinaryOp, // /
  Exponentiate = 62 | (12 << PrecStart) | IsBinaryOp, // **
  LogicalAnd = 63 | (3 << PrecStart) | IsBinaryOp, // &&
  LogicalOr = 64 | (2 << PrecStart) | IsBinaryOp, // ||
  StrictEqual = 65 | (7 << PrecStart) | IsBinaryOp, // ===
  StrictNotEqual = 66 | (7 << PrecStart) | IsBinaryOp, // !==
  LooseEqual = 67 | (7 << PrecStart) | IsBinaryOp, // ==
  LooseNotEqual = 68 | (7 << PrecStart) | IsBinaryOp, // !=
  LessThanOrEqual = 69 | (8 << PrecStart) | IsBinaryOp, // <=
  GreaterThanOrEqual = 70 | (8 << PrecStart) | IsBinaryOp, // >=
  LessThan = 71 | (8 << PrecStart) | IsBinaryOp | IsMember | IsPropertyOrCall | IsStartOfType, // <
  GreaterThan = 72 | (8 << PrecStart) | IsBinaryOp, // >
  ShiftLeft = 73 | (9 << PrecStart) | IsBinaryOp, // <<
  ShiftRight = 74 | (9 << PrecStart) | IsBinaryOp, // >>
  LogicalShiftRight = 75 | (9 << PrecStart) | IsBinaryOp, // >>>
  BitwiseAnd = 76 | (6 << PrecStart) | IsBinaryOp | IsStartOfType, // &
  BitwiseOr = 77 | (4 << PrecStart) | IsBinaryOp | IsStartOfType, // |
  BitwiseXor = 78 | (5 << PrecStart) | IsBinaryOp, // ^

  /* Variable declaration kinds */
  VarKeyword = 79 | Keyword | IsStatementStart | IsSwitchClause,
  LetKeyword = 80 | FutureReserved | IsStatementStart | IsSwitchClause,
  ConstKeyword = 81 | Keyword | IsStatementStart | IsSwitchClause,

  /* Other Keyword words */
  BreakKeyword = 82 | Keyword | IsStatementStart | IsSwitchClause,
  CaseKeyword = 83 | Keyword,
  CatchKeyword = 84 | Keyword | IsStatementStart,
  ClassKeyword = 85 | Keyword | IsExpressionStart | IsSwitchClause,
  ContinueKeyword = 86 | Keyword | IsStatementStart | IsSwitchClause,
  DebuggerKeyword = 87 | Keyword | IsStatementStart | IsSwitchClause,
  DefaultKeyword = 88 | Keyword,
  DoKeyword = 89 | Keyword | IsStatementStart | IsSwitchClause,
  ElseKeyword = 90 | Keyword,
  ExportKeyword = 91 | Keyword | IsStatementStart,
  ExtendsKeyword = 92 | Keyword,
  FinallyKeyword = 93 | Keyword | IsStatementStart | IsSwitchClause,
  ForKeyword = 94 | Keyword | IsStatementStart | IsSwitchClause,
  FunctionKeyword = 95 | Keyword | IsExpressionStart | IsSwitchClause,
  IfKeyword = 96 | Keyword | IsStatementStart | IsSwitchClause,
  ImportKeyword = 97 | Keyword | IsExpressionStart | IsSwitchClause,
  NewKeyword = 98 | Keyword | IsExpressionStart | IsStartOfType,
  ReturnKeyword = 99 | Keyword | IsStatementStart | IsSwitchClause,
  SuperKeyword = 100 | Keyword | IsExpressionStart,
  SwitchKeyword = 101 | Keyword | IsStatementStart | IsSwitchClause,
  ThisKeyword = 102 | Keyword | IsExpressionStart | IsIdentifier,
  ThrowKeyword = 103 | Keyword | IsStatementStart | IsSwitchClause,
  TryKeyword = 104 | Keyword | IsStatementStart | IsSwitchClause,
  WhileKeyword = 105 | Keyword | IsStatementStart | IsSwitchClause,
  WithKeyword = 106 | Keyword | IsStatementStart | IsSwitchClause,

  /* Strict mode Keyword words */
  ImplementsKeyword = 107 | FutureReserved,
  InterfaceKeyword = 108 | FutureReserved,
  PackageKeyword = 109 | FutureReserved,
  PrivateKeyword = 110 | FutureReserved | IsAccessModifier,
  ProtectedKeyword = 111 | FutureReserved | IsAccessModifier,
  PublicKeyword = 112 | FutureReserved | IsAccessModifier,
  StaticKeyword = 113 | FutureReserved,
  YieldKeyword = 114 | FutureReserved | IsExpressionStart,

  /* Contextual keywords */
  AsKeyword = 115 | IsBinaryOp | (1 << PrecStart) | IsIdentifier,
  AsyncKeyword = 116 | IsIdentifier | IsExpressionStart,
  AwaitKeyword = 117 | IsIdentifier | IsExpressionStart,
  ConstructorKeyword = 118 | IsIdentifier,
  GetKeyword = 119 | IsIdentifier,
  SetKeyword = 120 | IsIdentifier,
  FromKeyword = 121 | IsIdentifier,
  OfKeyword = 122 | IsIdentifier | IsInOrOf,
  EnumKeyword = 123 | Keyword | IsStatementStart | IsIdentifier,
  RequireKeyword = 124 | IsIdentifier | IsExpressionStart,

  /* Next */
  Pipeline = 125,

  /* Others */
  Unknown = 126,
  EscapedIdentifier = 127,

  AnyKeyword = 128 | IsStartOfType | IsIdentifier,
  StringKeyword = 129 | IsStartOfType | IsIdentifier,
  NumberKeyword = 130 | IsStartOfType | IsIdentifier,
  BooleanKeyword = 131 | IsStartOfType | IsIdentifier,
  SymbolKeyword = 132 | IsStartOfType | IsIdentifier,

  UnknownKeyword = 133 | IsStartOfType | IsIdentifier,
  BigIntKeyword = 134 | IsStartOfType | IsIdentifier,
  UndefinedKeyword = 135 | IsStartOfType | IsIdentifier,
  NeverKeyword = 136 | IsStartOfType | IsIdentifier,
  ObjectKeyword = 137 | IsStartOfType | IsIdentifier,

  JsxText = 138,
  DeclareKeyword = 139 | IsIdentifier | IsExpressionStart,
  TypeKeyword = 140 | IsIdentifier | IsExpressionStart,

  CarriageReturn = 141,
  LineFeed = 142,
  Whitespace = 143,
  EscapeSequence = 144,
  PrivateIdentifier = 145 | IsSemicolon | IsProperty | IsIdentifier,
  IsKeyword = 146 | IsIdentifier,
  AssertsKeyword = 147 | IsStartOfType | IsIdentifier,
  ReadonlyKeyword = 148 | IsStartOfType | IsIdentifier,
  InferKeyword = 149 | IsStartOfType | IsIdentifier,
  UniqueKeyword = 150 | IsStartOfType | IsIdentifier,
  KeyOfKeyword = 151 | IsIdentifier,
  IntrinsicKeyword = 152 | IsIdentifier,
  AbstractKeyword = 153 | IsIdentifier,
  Decorator = 154 | IsProperty | IsStatementStart
}

// Note: this *must* be kept in sync with the enum's order.
//
// It exploits the enum value ordering, and it's necessarily a complete and
// utter hack.
//
// All to lower it to a single monomorphic array access.
export const KeywordDescTable = [
  'end of source',

  /* Constants/Bindings */
  'identifier',
  'number',
  'number',
  'string',
  'regular expression',
  'false',
  'true',
  'null',

  /* Template nodes */
  'no substitution template',
  'template head',
  'template tail',
  'template middle',

  /* Punctuators */
  '=>',
  '(',
  '{',
  '.',
  '...',
  '}',
  ')',
  ';',
  ',',
  '[',
  ']',
  ':',
  '?',
  '?.',
  '??',
  '??=',
  "'",
  '"',
  '</',
  '/>',

  /* Update operators */
  '++',
  '--',

  /* Assign operators */
  '=',
  '<<=',
  '>>=',
  '>>>=',
  '**=',
  '+=',
  '-=',
  '*=',
  '/=',
  '%=',
  '^=',
  '|=',
  '&=',
  '&&=',
  '||=',

  /* Unary/binary operators */
  'typeof',
  'delete',
  'void',
  '!',
  '~',
  '+',
  '-',
  'in',
  'instanceof',
  '*',
  '%',
  '/',
  '**',
  '&&',
  '||',
  '===',
  '!==',
  '==',
  '!=',
  '<=',
  '>=',
  '<',
  '>',
  '<<',
  '>>',
  '>>>',
  '&',
  '|',
  '^',

  /* Variable declaration kinds */
  'var',
  'let',
  'const',

  /* Other Keyword words */
  'break',
  'case',
  'catch',
  'class',
  'continue',
  'debugger',
  'default',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'new',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'while',
  'with',

  /* Strict mode Keyword words */
  'implements',
  'interface',
  'package',
  'private',
  'protected',
  'public',
  'static',
  'yield',

  /* IsIdentifier keywords */
  'as',
  'async',
  'await',
  'constructor',
  'get',
  'set',
  'from',
  'of',
  'enum',
  'pipeline'
];

// Normal object is much faster than Object.create(null), even with typeof check to avoid Object.prototype interference
export const descKeywordTable: { [key: string]: Token } = Object.create(null, {
  this: { value: Token.ThisKeyword },
  function: { value: Token.FunctionKeyword },
  if: { value: Token.IfKeyword },
  return: { value: Token.ReturnKeyword },
  var: { value: Token.VarKeyword },
  else: { value: Token.ElseKeyword },
  for: { value: Token.ForKeyword },
  new: { value: Token.NewKeyword },
  in: { value: Token.InKeyword },
  typeof: { value: Token.TypeofKeyword },
  while: { value: Token.WhileKeyword },
  case: { value: Token.CaseKeyword },
  break: { value: Token.BreakKeyword },
  try: { value: Token.TryKeyword },
  catch: { value: Token.CatchKeyword },
  delete: { value: Token.DeleteKeyword },
  throw: { value: Token.ThrowKeyword },
  switch: { value: Token.SwitchKeyword },
  continue: { value: Token.ContinueKeyword },
  default: { value: Token.DefaultKeyword },
  instanceof: { value: Token.InstanceofKeyword },
  do: { value: Token.DoKeyword },
  void: { value: Token.VoidKeyword },
  finally: { value: Token.FinallyKeyword },
  async: { value: Token.AsyncKeyword },
  await: { value: Token.AwaitKeyword },
  class: { value: Token.ClassKeyword },
  const: { value: Token.ConstKeyword },
  constructor: { value: Token.ConstructorKeyword },
  debugger: { value: Token.DebuggerKeyword },
  export: { value: Token.ExportKeyword },
  extends: { value: Token.ExtendsKeyword },
  false: { value: Token.FalseKeyword },
  from: { value: Token.FromKeyword },
  get: { value: Token.GetKeyword },
  implements: { value: Token.ImplementsKeyword },
  import: { value: Token.ImportKeyword },
  interface: { value: Token.InterfaceKeyword },
  let: { value: Token.LetKeyword },
  null: { value: Token.NullKeyword },
  of: { value: Token.OfKeyword },
  package: { value: Token.PackageKeyword },
  private: { value: Token.PrivateKeyword },
  protected: { value: Token.ProtectedKeyword },
  public: { value: Token.PublicKeyword },
  set: { value: Token.SetKeyword },
  static: { value: Token.StaticKeyword },
  super: { value: Token.SuperKeyword },
  true: { value: Token.TrueKeyword },
  with: { value: Token.WithKeyword },
  yield: { value: Token.YieldKeyword },
  enum: { value: Token.EnumKeyword },
  // eval: { value: Token.Eval },
  as: { value: Token.AsKeyword },
  //arguments: { value: Token.Arguments },
  //target: { value: Token.Target },
  //meta: { value: Token.Meta },
  string: { value: Token.StringKeyword },
  number: { value: Token.NumberKeyword },
  boolean: { value: Token.BooleanKeyword },
  symbol: { value: Token.SymbolKeyword },
  any: { value: Token.AnyKeyword },
  declare: { value: Token.DeclareKeyword },
  type: { value: Token.TypeKeyword },
  readonly: { value: Token.ReadonlyKeyword },
  infer: { value: Token.InferKeyword },
  is: { value: Token.IsKeyword },
  keyof: { value: Token.KeyOfKeyword },
  intrinsic: { value: Token.IntrinsicKeyword },
  unique: { value: Token.UniqueKeyword },
  asserts: { value: Token.AssertsKeyword },
  never: { value: Token.NeverKeyword },
  unknown: { value: Token.UnknownKeyword },
  object: { value: Token.ObjectKeyword },
  bigint: { value: Token.BigIntKeyword },
  undefined: { value: Token.UndefinedKeyword },
  abstract: { value: Token.AbstractKeyword },
  require: { value: Token.RequireKeyword }
});
