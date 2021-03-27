/**
 * Types of syntax which can appear in a source file of Kataw.
 */
export const enum SyntaxKind {
  Type = 0xff,
  InPrec = 4,
  PrecStart = 8,
  Precedence = 3840,
  IsAssignOp = 4096,
  IsBinaryOp = 32768,
  IsStatementStart = 8192,
  IsIdentifier = 16384,
  IsExpressionStart = 65536,
  IsPropertyOrCall = 131072,
  IsMember = 262144,
  IsEllipsis = 524288,
  Smi = 1048576,
  IsComma = 2097152,
  IsKeyword = 4194304,
  FutureReserved = 8388608,
  IsInOrOf = 16777216,
  IsSwitchClause = 33554432,
  IsProperty = 67108864,
  IsStartOfType = 134217728,
  IsPatternStart = 268435456,
  IsLessThanOrLeftParen = 536870912,

  // Tokens

  Identifier = 81921,
  NumericLiteral = 67174402,
  StringLiteral = 65536,
  RegularExpression = 65540,
  FalseKeyword = 67174405,
  TrueKeyword = 67174406,
  NullKeyword = 65543,
  TemplateCont = 458760,
  TemplateTail = 458761,
  Arrow = 10, // =>
  LeftParen = 536936459,
  LeftBrace = 268501004,
  Period = 131085,
  Ellipsis = 14, // ...
  RightBrace = 1048591,
  RightParen = 16, // )
  Semicolon = 1056785,
  Comma = 18, // ,
  LeftBracket = 336003091,
  RightBracket = 20, // ]
  Colon = 21, // :
  QuestionMark = 22, // ?
  QuestionMarkQuestionMark = 37143,
  QuestionMarkPeriod = 131096,
  SingleQuote = 25, // '
  DoubleQuote = 26, // "
  Increment = 65563,
  Decrement = 65564,

  /* Assign operators */
  Assign = 4125,
  ShiftLeftAssign = 4126,
  ShiftRightAssign = 4127,
  LogicalShiftRightAssign = 4128,
  ExponentiateAssign = 4129,
  AddAssign = 4130,
  SubtractAssign = 4131,
  MultiplyAssign = 4132,
  DivideAssign = 4133,
  ModuloAssign = 4134,
  BitwiseXorAssign = 4135,
  BitwiseOrAssign = 4136,
  BitwiseAndAssign = 4137,
  LogicalOrAssign = 4138,
  LogicalAndAssign = 4139,
  CoalesceAssign = 4140,

  /* Unary/binary operators */
  TypeofKeyword = 65581,
  DeleteKeyword = 65582,
  VoidKeyword = 65583,
  Negate = 65584,
  Complement = 65585,
  Add = 43570,
  Subtract = 43571,
  InKeyword = 32820,
  InstanceofKeyword = 34869,
  Multiply = 67156790,
  Modulo = 47927,
  Divide = 47928,
  Exponentiate = 52281,
  LogicalAnd = 45882,
  LogicalOr = 41531,
  StrictEqual = 63292,
  StrictNotEqual = 63293,
  LooseEqual = 63294,
  LooseNotEqual = 63295,
  LessThanOrEqual = 63296,
  GreaterThanOrEqual = 63297,
  LessThan = 536870912,
  GreaterThan = 34883,
  ShiftLeft = 39236,
  ShiftRight = 39237,
  LogicalShiftRight = 39238,
  BitwiseAnd = 58951,
  BitwiseOr = 50248,
  BitwiseXor = 54601,

  /* Variable declaration kinds */
  VarKeyword = 8266,
  LetKeyword = 8396875,
  ConstKeyword = 8268,

  /* Other reserved words */
  BreakKeyword = 8269,
  CaseKeyword = 78,
  CatchKeyword = 8271,
  ClassKeyword = 65616,
  ContinueKeyword = 8273,
  DebuggerKeyword = 8274,
  DefaultKeyword = 83,
  DoKeyword = 8276,
  ElseKeyword = 85,
  ExportKeyword = 8278,
  ExtendsKeyword = 87,
  FinallyKeyword = 8280,
  ForKeyword = 8281,
  FunctionKeyword = 65626,
  IfKeyword = 8283,
  ImportKeyword = 65628,
  NewKeyword = 65629,
  ReturnKeyword = 8286,
  SuperKeyword = 65631,
  SwitchKeyword = 8288,
  ThisKeyword = 65633,
  ThrowKeyword = 8290,
  TryKeyword = 8291,
  WhileKeyword = 8292,
  WithKeyword = 8293,

  /* Strict mode reserved words */
  ImplementsKeyword = 8388710,
  PackageKeyword = 8388712,
  PrivateKeyword = 8388713,
  ProtectedKeyword = 8388714,
  PublicKeyword = 8388715,
  StaticKeyword = 8388716,
  YieldKeyword = 8454253,

  /* Contextual keywords */
  AsKeyword = 16494,
  AsyncKeyword = 82031,
  AwaitKeyword = 82032,
  ConstructorKeyword = 16497,
  GetKeyword = 16498,
  SetKeyword = 16499,
  FromKeyword = 16500,
  OfKeyword = 16501,

  //
  UnknownToken = 118,
  //
  ArrayLiteral = 119,
  ExpressionStatement = 120,
  ParenthesizedExpression = 121,

  // top level
  RootNode = 122,
  EndOfFileToken = 1048699,

  BlockStatement = 124,
  AssignmentExpression = 125,
  UnaryExpression = 126,
  PostfixUpdateExpression = 127,
  PrefixUpdateExpression = 128,
  IndexExpression = 129,
  MemberAccessExpression = 130,
  CallExpression = 131,
  CommaOperator = 132,
  BigIntLiteral = 133,
  BooleanLiteral = 134,
  ThisExpression = 135,
  ArrayType = 136,
  UnionType = 137,
  IntersectionType = 138,
  TypeAnnotation = 139,
  AnyKeyword = 16524,
  UndefinedKeyword = 16525,
  BooleanKeyword = 16526,
  UnknownKeyword = 16527,

  GenericType = 144,
  QualifiedType = 145,
  TypeParameter = 146,
  TupleType = 147,
  FunctionType = 148,
  FunctionTypeParameters = 149,
  BreakStatement = 150,
  BindingList = 151,
  CaseBlock = 152,
  WithStatement = 153,
  WhileStatement = 154,
  VariableStatement = 155,
  VariableDeclarationList = 156,
  VariableDeclaration = 157,
  ThrowStatement = 158,
  TryStatement = 159,
  SwitchStatement = 160,
  ReturnStatement = 161,
  LexicalDeclaration = 162,
  LabelledStatement = 163,
  IfStatement = 164,
  ForStatement = 165,
  ForInStatement = 166,
  ForOfStatement = 167,
  EmptyStatement = 168,
  DoWhileStatement = 169,
  DefaultClause = 170,
  DebuggerStatement = 171,
  ContinueStatement = 172,
  Catch = 173,
  CatchParameter = 174,
  CaseClause = 175,
  FunctionDeclaration = 176,
  FunctionExpression = 177,
  ClassDeclaration = 178,
  ClassExpression = 189,
  LexicalBinding = 190,
  InterfaceDeclaration = 191,
  InterfaceExtends = 192,
  ObjectTypeProperty = 193,
  ComputedPropertyName = 194,
  ObjectTypeIndexer = 195,
  ObjectTypeCallProperty = 196,
  ConditionalExpression = 197,
  BinaryExpression = 198,
  TypeKeyword = 16583,
  TypeAlias = 200,
  ArrayBindingPattern = 201,
  BindingElementList = 202,
  BindingElement = 203,
  BindingProperty = 204,
  CoverInitializedName = 205,
  ImportCall = 206,
  ImportMeta = 207,
  AwaitExpression = 208,
  MethodDefinition = 209,
  NewExpression = 210,
  NewTarget = 211,
  ObjectBindingPattern = 212,
  BindingPropertyList = 213,
  FormalParameterList = 214,
  FormalParameter = 215,
  FunctionBody = 216,
  FunctionStatementList = 217,
  PropertyDefinitionList = 218,
  PropertyDefinition = 219,
  ObjectLiteral = 220,
  RegularExpressionLiteral = 221,
  SingleNameBinding = 222,
  SpreadElement = 223,
  SpreadProperty = 224,
  Super = 225,
  TaggedTemplate = 226,
  TemplateExpression = 227,
  TemplateSpan = 228,
  YieldExpression = 229,
  OmittedExpression = 230,

  SymbolKeyword = 16615,
  MixedKeyword = 16616,
  NumberKeyword = 16617,
  ObjectKeyword = 16618,
  StringKeyword = 16619,
  EmptyKeyword = 16620,
  NeverKeyword = 16621,
  BigintKeyword = 16622,
  StringType = 239,
  NumberType = 240,
  ObjectType = 241,
  NullableType = 242,
  TypeofType = 82163,
  ArrayBindingElement = 244,
  DeclareKeyword = 82165,
  OpaqueKeyword = 16630,
  ObjectTypeSpreadProperty = 247,
  ObjectTypeInternalSlot = 248,
  Block = 249,
  EnumKeyword = 4194554,
  PrivateIdentifier = 67125499,
  Decorator = 67117308,
  DummyIdentifier = 253,
  UniqueIdentifier = 254,
  PrologueDirective = 255
}

/**
 * The base type of all types which represent some kind of syntax.
 */
export interface SyntaxNode {
  kind: SyntaxKind;
  flags: NodeFlags;
  start: number;
  end: number;
}

export const enum NodeFlags {
  /**
   * This node has no flags.
   */
  None = 0,

  NewLine = 1 << 0,
  LastIsCR = 1 << 1,
  /**
   * This node has some diagnostics associated with it.
   */
  HasErrors = 1 << 2,
  /**
   * This node was inserted by the compiler.
   */
  Synthetic = 1 << 3,
  /**
   * This node has side effects.
   */
  HasSideEffects = 1 << 4,

  IsConst = 1 << 5,

  DisallowIn = 1 << 6,

  IsStatement = 1 << 7,

  ExpressionNode = 1 << 8,

  ChildLess = 1 << 9,

  Generator = 1 << 10,

  Async = 1 << 11,

  Setter = 1 << 12,
  Getter = 1 << 13,
  Constructor = 1 << 14,
  Declared = 1 << 15
}
