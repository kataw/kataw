/**
 * The base type of all types which represent some kind of syntax.
 */
export interface SyntaxNode {
  kind: SyntaxKind;
  flags: NodeFlags;
  autofix?: AutoFix;
  start: number;
  end: number;
}

export const enum NodeFlags {
  /**
   * This node has no flags.
   */
  None = 0,

  NewLine = 1 << 0,
  NoneSimpleParamList = 1 << 1,
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
  Declared = 1 << 15,
  EscapedKeywordOrIdentifier = 1 << 16,
  ExtendedUnicodeEscape = 1 << 17,
  UnicodeEscape = 1 << 18,
  FloatingPointLiteral = 1 << 19,
  ContainsSeparator = 1 << 20,
  ImplicitOctal = 1 << 21,
  OctalIntegerLiteral = 1 << 22,
  BinaryIntegerLiteral = 1 << 23,
  HexIntegerLiteral = 1 << 24,
  Unterminated = 1 << 25,
  SingleQuote = 1 << 26,
  ContainsInvalidEscape = 1 << 27,
  HasConstructor = 1 << 28,
  Const = 1 << 29
}

/**
 * Types of syntax which can appear in a source file of Kataw.
 */
export const enum SyntaxKind {
  Type = 0xff,

  PrecStart = 8,
  Precedence = 3840, //15 << PrecStart, // 8-11
  IsAssignOp = 4096,
  IsBinaryOp = 32768, //1 << 15 ,
  IsStatementStart = 8192, // << 13,
  IsIdentifier = 16384, // 1 << 14,
  IsExpressionStart = 65536, // 1 << 16,
  IsPropertyOrCall = 131072, // 1 << 17,
  IsMember = 262144, // 1 << 18,
  IsEllipsis = 524288, // 1 << 19,
  Smi = 1048576, //1 << 20,
  IsComma = 2097152, // 1 << 21,
  IsKeyword = 4194304, // 1 << 22,
  IsFutureReserved = 8388608, // 1 << 23,
  IsInOrOf = 16777216, // 1 << 24,
  IsSwitchClause = 33554432, // 1 << 25,
  IsProperty = 67108864, // 1 << 26,
  IsStartOfType = 134217728, //1 << 27,
  IsPatternStart = 268435456, //1 << 28,
  IsLessThanOrLeftParen = 536870912, // 1 << 29,
  IsSemicolon = 1073741824,

  // Tokens

  Identifier = 134299649, // 81921 , // 16385 | IsExpressionStart, // | IsIdentifier,
  NumericLiteral = 201392130, //67174402 , //2 | IsExpressionStart | IsProperty,
  StringLiteral = 201392131, // 67174403 , //3 | IsExpressionStart | IsProperty,
  RegularExpression = 65540, // 4 | IsExpressionStart,
  FalseKeyword = 205586437, // , //  | IsKeyword, // 5 | IsExpressionStart | IsProperty,
  TrueKeyword = 20558643, // 71368710 , // | IsKeyword, // 6 | IsExpressionStart | IsProperty,
  NullKeyword = 138477575, // | IsKeyword, // 7 | IsExpressionStart,
  TemplateCont = 458760, //8 |  IsMember | IsPropertyOrCall | IsExpressionStart | IsPropertyOrCall,
  TemplateTail = 458761, // 9 |  IsMember | IsPropertyOrCall | IsExpressionStart | IsPropertyOrCall,
  Arrow = 10, // =>
  LeftParen = 537067531, // | IsPropertyOrCall , // 536870923 | IsExpressionStart, ///11 | IsLessThanOrLeftParen, // (
  LeftBrace = 268501004, // 12 | IsPatternStart| IsExpressionStart, // {
  Period = 131085, // 13 | IsPropertyOrCall, // .
  Ellipsis = 524302, // 14 | IsEllipsis, // ...
  RightBrace = 1048591, // 15 | Smi, // }
  RightParen = 16, // )
  Semicolon = 1108353041, // | IsSemicolon, // 1056785 | IsSwitchClause, // 1048593 | IsStatementStart, //17| Smi, // ;
  Comma = 2097170, //18 | IsComma, // ,
  LeftBracket = 336003091, // 268435475 | IsPropertyOrCall | IsExpressionStart | IsMember | IsPropertyOrCall | IsProperty, // 19 | IsPatternStart, // [
  RightBracket = 20, // ]
  Colon = 21, // :
  QuestionMark = 134217750, //22 | IsStartOfType, // ?
  QuestionMarkQuestionMark = 37143, //23 | IsBinaryOp | (1 << PrecStart) | (1 << (PrecStart + InPrec)), // 23 | IsBinaryOp | 1 << PrecStart, // ??
  QuestionMarkPeriod = 393240, // | IsMember, // 24 | IsPropertyOrCall, // ?.
  SingleQuote = 25, // '
  DoubleQuote = 26, // "
  Increment = 196635, // | IsPropertyOrCall, //27 | IsExpressionStart, // ++
  Decrement = 196636, // | IsPropertyOrCall, // 28 | IsExpressionStart, // --
  /* Assign operators */
  Assign = 4125, //29 | IsAssignOp, // =
  ShiftLeftAssign = 4126, //30 | IsAssignOp, // <<=
  ShiftRightAssign = 4127, //31 | IsAssignOp, // >>=
  LogicalShiftRightAssign = 4128, //32 | IsAssignOp, // >>>=
  ExponentiateAssign = 4129, //33 | IsAssignOp, // **=
  AddAssign = 4130, //34 | IsAssignOp, // +=
  SubtractAssign = 4131, //35 | IsAssignOp, // -=
  MultiplyAssign = 4132, //36 | IsAssignOp, // *=
  DivideAssign = 4133, //37 | IsAssignOp, // /=
  ModuloAssign = 4134, //38 | IsAssignOp, // %=
  BitwiseXorAssign = 4135, //39 | IsAssignOp, // ^=
  BitwiseOrAssign = 4136, //40 | IsAssignOp, // |=
  BitwiseAndAssign = 4137, //41 | IsAssignOp, // &=
  LogicalOrAssign = 4138, //42 | IsAssignOp, // ||=
  LogicalAndAssign = 4139, //43 | IsAssignOp, // &&=
  CoalesceAssign = 4140, //44 | IsAssignOp, // ??=

  /* Unary/binary operators */
  TypeofKeyword = 138477613, //65581 | IsKeyword, //45 | IsExpressionStart,
  DeleteKeyword = 4259886, // 65582 | IsKeyword, //46 | IsExpressionStart,
  VoidKeyword = 138477615, // 65583 | IsKeyword, //47 | IsExpressionStart,
  Negate = 65584, //48 | IsExpressionStart, // !
  Complement = 65585, //49 | IsExpressionStart, // ~
  Add = 34098, // | IsBinaryOp | (5 << PrecStart), // +
  Subtract = 35379, //35379 | IsBinaryOp | (10 << PrecStart), // -
  InKeyword = 21006388, // 4229172 | IsInOrOf, //52 | IsBinaryOp | (8 << PrecStart) | IsKeyword,
  InstanceofKeyword = 4229173, // 53 | IsBinaryOp | (8 << PrecStart) | IsKeyword,
  Multiply = 67143222, // 54 | IsProperty | IsBinaryOp | (6 << PrecStart), // *
  Modulo = 35639, // 55 | IsBinaryOp | (11 << PrecStart)  | IsBinaryOp, // %
  Divide = 35640, // 56 | IsBinaryOp | (11 << PrecStart)  | IsBinaryOp, // /
  Exponentiate = 35897, // 57 | IsBinaryOp | (12 << PrecStart), // **
  LogicalAnd = 33594, // 58 | IsBinaryOp | (3 << PrecStart), // &&
  LogicalOr = 33339, // 59 | IsBinaryOp | (2 << PrecStart), // ||
  StrictEqual = 34620, // 60 | IsBinaryOp | (7 << PrecStart), // ===
  StrictNotEqual = 34621, // 61 | IsBinaryOp | (7 << PrecStart), // !==
  LooseEqual = 34622, // 62 | IsBinaryOp | (7 << PrecStart), // ==
  LooseNotEqual = 34623, // 63 | IsBinaryOp | (7 << PrecStart), // !=
  LessThanOrEqual = 34880, // 64 | IsBinaryOp | (8 << PrecStart), // <=
  GreaterThanOrEqual = 34881, // 65 | IsBinaryOp | (8 << PrecStart), // >=
  LessThan = 536971330, // 536905794 | IsExpressionStart , // 66 | IsBinaryOp | (8 << PrecStart)  | IsLessThanOrLeftParen, // <
  GreaterThan = 34883, // 67 | IsBinaryOp | (8 << PrecStart), // >
  ShiftLeft = 35140, // 68 | IsBinaryOp | (9 << PrecStart), // <<
  ShiftRight = 35141, // 69 | IsBinaryOp | (9 << PrecStart), // >>
  LogicalShiftRight = 35142, // 70 | IsBinaryOp | (9 << PrecStart), // >>>
  BitwiseAnd = 34375, // 71 | IsBinaryOp | (6 << PrecStart), // &
  BitwiseOr = 134251592, // 72 | IsBinaryOp | (4 << PrecStart), // |
  BitwiseXor = 134251849, // 73 | IsBinaryOp | (5 << PrecStart), // ^

  /* Variable declaration kinds */
  VarKeyword = 37757002, // | IsKeyword, // 8266 | IsSwitchClause, //74 | IsStatement,
  LetKeyword = 41951307, //8396875 | IsSwitchClause, // 8267 | FutureReserved,
  ConstKeyword = 37757004, // | IsKeyword, // 8268 | IsSwitchClause,

  /* Other reserved words */
  BreakKeyword = 37757005, // | IsKeyword, // 8269 | IsSwitchClause, //77 | IsStatementStart,
  CaseKeyword = 4194382, // | IsKeyword,
  CatchKeyword = 4202575, // | IsKeyword, // 79 | IsStatementStart,
  ClassKeyword = 37822544, // | IsStatementStart, // | IsKeyword, // 65616 | IsSwitchClause, //80 | IsExpressionStart,
  ContinueKeyword = 37757009, // | IsKeyword, // 8273 | IsSwitchClause, // 81 | IsStatementStart,
  DebuggerKeyword = 37757010, // | IsKeyword, // 8274 | IsSwitchClause, //82 | IsStatementStart,
  DefaultKeyword = 4194387, // | IsKeyword,
  DoKeyword = 4202580, // | IsKeyword, //84 | IsStatementStart,
  ElseKeyword = 4194389, // | IsKeyword,
  ExportKeyword = 4202582, // | IsKeyword, //86 | IsStatementStart,
  ExtendsKeyword = 4194391, // | IsKeyword,
  FinallyKeyword = 37757016, // | IsKeyword, //8280 | IsSwitchClause, //88 | IsStatementStart,
  ForKeyword = 37757017, // | IsKeyword, // 8281 | IsSwitchClause, // 89 | IsStatementStart,
  FunctionKeyword = 37822554, // | IsStatementStart, // | IsKeyword, // 65626 | IsSwitchClause, // 90 | IsExpressionStart,
  IfKeyword = 37757019, // | IsKeyword, // 8283 | IsSwitchClause, // 91 | IsStatementStart,
  ImportKeyword = 37814364, // | IsKeyword, // 65628 | IsSwitchClause, // 92 | IsExpressionStart,
  NewKeyword = 138477661, // | IsKeyword, // 93 | IsExpressionStart,
  ReturnKeyword = 37757022, // | IsKeyword, // 8286 | IsSwitchClause, // 94 | IsStatementStart,
  SuperKeyword = 4259935, // | IsKeyword, // 95 | IsExpressionStart,
  SwitchKeyword = 37757024, // | IsKeyword, // 8288 | IsSwitchClause, //96 | IsStatementStart,
  ThisKeyword = 4276321, // | IsIdentifier, // | IsKeyword, //97 | IsExpressionStart,
  ThrowKeyword = 37757026, // | IsKeyword, // 8290 | IsSwitchClause, //98 | IsStatementStart,
  TryKeyword = 37757027, // | IsKeyword, // 8291 | IsSwitchClause, // 99 | IsStatementStart,
  WhileKeyword = 37757028, // | IsKeyword, //8292 | IsSwitchClause, // 100 | IsStatementStart,
  WithKeyword = 37757029, // | IsKeyword, //8293 | IsSwitchClause, // 101 | IsStatementStart,

  /* Strict mode reserved words */
  ImplementsKeyword = 8388710, //102 | FutureReserved,
  PackageKeyword = 8388712, //104 | FutureReserved,
  PrivateKeyword = 8388713, //105 | FutureReserved,
  ProtectedKeyword = 8388714, //106 | FutureReserved,
  PublicKeyword = 8388715, //107 | FutureReserved,
  StaticKeyword = 8388716, //108 | FutureReserved,
  YieldKeyword = 8454253, //65645 | FutureReserved, // 109 | IsExpressionStart,

  /* Contextual keywords */
  AsKeyword = 16494, // 110 | IsIdentifier,
  AsyncKeyword = 82031, // 16495 | IsExpressionStart, // 111 | IsIdentifier,
  AwaitKeyword = 82032, // 16496 | IsExpressionStart, // 112 | IsIdentifier,
  ConstructorKeyword = 16497, // 113 | IsIdentifier,
  GetKeyword = 16498, // 114 | IsIdentifier,
  SetKeyword = 16499, // 115 | IsIdentifier,
  FromKeyword = 16500, // 116 | IsIdentifier,
  OfKeyword = 16793717, //16501 | IsInOrOf, // 117 | IsIdentifier,

  //
  UnknownToken = 118,
  //
  ArrayLiteral = 119,
  ExpressionStatement = 120,
  ParenthesizedExpression = 121,

  // top level
  RootNode = 122,
  EndOfFileToken = 1048699, //123 | Smi,
  // synthetic nodes
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
  AnyKeyword = 134234252, //140 | IsIdentifier,
  UndefinedKeyword = 134234253, //141 | IsIdentifier,
  BooleanKeyword = 134234254, //142 | IsIdentifier,
  UnknownKeyword = 134234255, //143 | IsIdentifier,

  GenericType = 144,
  QualifiedType = 145,
  TypeParameter = 146,
  TupleType = 147,
  FunctionType = 148,
  FunctionTypeParameter = 149,
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
  TypeKeyword = 24775, /// | IsStatementStart, // 199  | IsIdentifier
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
  SymbolKeyword = 134234343,
  MixedKeyword = 134234344, //232 | IsIdentifier,
  NumberKeyword = 134234345, //233 | IsIdentifier,
  ObjectKeyword = 134234346, //235 | IsIdentifier,
  StringKeyword = 134234347, //234 | IsIdentifier,
  EmptyKeyword = 134234348, //236 | IsIdentifier,
  NeverKeyword = 134234349, //237 | IsIdentifier,
  BigintKeyword = 134234350, //238,
  StringType = 134217967, // 239 | IsStartOfType,
  NumberType = 134217968,
  ObjectType = 134234353, // | IsIdentifier,
  NullableType = 134217970,
  TypeofType = 134299891, // 243 | IsIdentifier | IsExpressionStart,
  ArrayBindingElement = 244,
  DeclareKeyword = 82165, //245 | IsIdentifier | IsExpressionStart,
  OpaqueKeyword = 24822, // | IsStatementStart, //246 | IsIdentifier ,
  ObjectTypeSpreadProperty = 247,
  ObjectTypeInternalSlot = 248,
  Block = 249,
  EnumKeyword = 4194554, // 250 | IsKeyword,
  PrivateIdentifier = 67109115, //251 | IsProperty,
  Decorator = 34611453, // 252 | IsStatementStart | Semicolon,
  DummyIdentifier = 16637, // 253 | IsIdentifier,
  UniqueIdentifier = 254,
  PrologueDirective = 255,
  ArgumentList = 256,
  ExportDeclaration = 257,
  ExportDefault = 258,
  ExportFromClause = 259,
  ExportSpecifier = 260,
  ExportsList = 261,
  ImportClause = 262,
  ImportDeclaration = 263,
  ImportSpecifier = 264,
  ImportsList = 265,
  NamedExports = 266,
  NamedImports = 267,
  NamespaceExportDeclaration = 268,
  NullLiteral = 269,
  ElementList = 270,
  ArrowFunction = 271,
  PropertyList = 272,
  LineFeed = 273,
  Whitespace = 274,
  CarriageReturn = 275,
  EscapedKeyword = 276,
  ClassElementList = 277,
  ClassElement = 278,
  ClassHeritage = 279,
  FieldDefinition = 280,
  SemicolonClassElement = 281,
  IndexExpressionChain = 202,
  MemberAccessChain = 203,
  CallChain = 204,
  OptionalExpression = 205,
  OptionalChain = 206,
  DecoratorList = 207,
  FunctionTypeParameterList = 208,
  BooleanType = 209
}

export const enum AutoFix {
  Braces = 1 << 0, // Surround the AST node with '{' and '}'
  Parenthesis = 1 << 1, // Surround the AST node with '(' and ')'
  NotFixable = 0,
  Fixable = 1
}
