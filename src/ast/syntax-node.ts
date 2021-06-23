/**
 * The base type of all types which represent some kind of syntax.
 */
export interface SyntaxNode {
  kind: SyntaxKind;
  flags: NodeFlags;
  start: number;
  end: number;
}

// DO NOT EDIT THIS CONSTANTS UNLESS YOU KNOW WHAT YOU ARE DOING!!!

export const enum Constants {
  Identifier = 0b00000000100000000100000000000000,
  IdentifierOrKeyword = 0b00000000110000000100000000000000,
  IdentiferOrType = 0b00001000100000000100000000000000,
  VariableDeclarationList = 0b00010000100000000100000000000000,
  IsInOrOf = 0b00010000100000000100000000000000,
  IsEscaped = 0b00000000000000000110000000000000,
  IsGetSetAsync = 0b00000000000000000000011100000000,
  StatementOrExpression = 0b00010000100000011110000000000000,
  FormalParameterList = 0b00010000100010000100000000000000,
  ElementList = 0b00010000101011010100000000000000,
  DelimitedList = 0b00010000101010010100000000000000,
  ArgumentList = 0b00000000101010111100000000000000,
  IsType = 0b00111000100000000100000000000000,
  IsTypeParameter = 0b00111000100000000100000000000000
}

export const enum ExportKind {
  Type,
  Value
}

export enum NodeFlags {
  None = 0,
  NewLine = 1 << 0,
  NoneSimpleParamList = 1 << 1,
  PrototypeField = 1 << 2, // If the parser encountered an error when parsing the code that created this node
  DisallowIn = 1 << 3, // If node was parsed in a context where 'in-expressions' are not allowed
  IsStatement = 1 << 4, // Node is an valid start of an statement
  ExpressionNode = 1 << 5, // Node is an valid start of an expression
  NoChildren = 1 << 6,
  Generator = 1 << 7, // If node was parsed in the 'yield' context created when parsing a generator
  Async = 1 << 8, // If node was parsed in the 'await' context created when parsing an async function
  Setter = 1 << 9, // Node is a setter method
  Getter = 1 << 10, // Node is a getter method
  Constructor = 1 << 11, // Node is a constructor method
  Declared = 1 << 12, // Node has been declared
  ExtendedUnicodeEscape = 1 << 13,
  UnicodeEscape = 1 << 14,
  FloatingPointLiteral = 1 << 15,
  ContainsSeparator = 1 << 16, // e.g. `0b1100_0101`
  ImplicitOctal = 1 << 17,
  OctalIntegerLiteral = 1 << 18, // e.g. `0777`
  BinaryIntegerLiteral = 1 << 19, // e.g. `0b0110010000000000`
  HexIntegerLiteral = 1 << 20, // e.g. `0x00000000`
  IsTypeNode = 1 << 21,
  SingleQuote = 1 << 22,
  ContainsInvalidEscape = 1 << 23, // e.g. `\uhello`
  Const = 1 << 24, // Lexical declaration
  Lexical = 1 << 25, // Lexical declaration
  IgnoreNextNode = 1 << 26,
  TemplateLiteral = 1 << 27,
  IsCallExpression = 1 << 28,
  IsMemberExpression = 1 << 29,
  IsUntionTypeIndention = 1 << 30
}

// DO NOT EDIT ANY OF THIS NUMBERS. IT WILL BREAK THE PARSER!!!!!

/**
 * Types of syntax which can appear in a source file of Kataw.
 */
export enum SyntaxKind {
  Add = 99634,
  AddAssign = 0b00000000000000000001000000100010,
  AnyKeyword = 0b00001000000000000100000010001100,
  ArgumentList = 256,
  ArgumentsIdentifier = 16635,
  BindingElement = 281,
  ArrayBindingPattern = 201,
  ArrayLiteral = 119,
  ArrayType = 136,
  Arrow = 10,
  ArrowFunction = 271, // ]
  AsKeyword = 16494,
  Assign = 4125,
  AssignmentExpression = 125,
  AsyncKeyword = 82031,
  AwaitExpression = 208,
  BinaryExpression = 198,
  BindingElementList = 324,
  BindingList = 151,
  ForBinding = 341,
  ArrowPatameterList = 342,
  BindingProperty = 329,
  BindingPropertyList = 213,
  BitwiseAnd = 134252103,
  BitwiseAndAssign = 4137,
  BitwiseOr = 134251592,
  BitwiseOrAssign = 4136,
  BitwiseXor = 134251849,
  BitwiseXorAssign = 4135,
  RestType = 333,
  OptionalType = 334,
  OptionalIndexedAccess = 332,
  TypeParameterList = 337,
  Block = 249,
  BlockStatement = 124,
  BooleanKeyword = 134234254,
  BooleanType = 321,
  BreakKeyword = 37757005,
  BreakStatement = 150,
  CallChain = 204,
  CallExpression = 131,
  CarriageReturn = 275,
  CaseBlock = 152,
  CaseClause = 175,
  CaseKeyword = 4194382,
  Catch = 173,
  CatchKeyword = 4202575,
  CatchParameter = 174,
  ClassDeclaration = 178,
  ClassElement = 278,
  ClassTail = 277,
  ClassExpression = 189,
  ClassHeritage = 279,
  ClassKeyword = 37822544,
  CoalesceAssign = 4140,
  Colon = 21,
  Comma = 2097170, // =>
  CommaOperator = 132,
  Complement = 65585,
  ComputedPropertyName = 194,
  ConditionalExpression = 197,
  ConstKeyword = 37757004,
  ConstructorKeyword = 16497,
  ContinueKeyword = 37757009,
  ContinueStatement = 172,
  CoverInitializedName = 301,
  DebuggerKeyword = 37757010,
  DebuggerStatement = 171,
  DeclareKeyword = 82165,
  Decorator = 34611453,
  DecoratorList = 207,
  Decrement = 196636,
  DefaultClause = 170,
  DefaultKeyword = 4194387,
  DeleteKeyword = 4259886,
  Divide = 35640,
  DivideAssign = 4133,
  DoKeyword = 4202580,
  DoWhileStatement = 169,
  DoubleQuote = 26,
  DummyIdentifier = 16637, // '
  ElementList = 270,
  Ellipsis = 524302,
  ElseKeyword = 4194389,
  EmptyKeyword = 134234348,
  EmptyStatement = 168,
  EndOfFileToken = 1048699,
  EnumKeyword = 4194554,
  EscapedKeyword = 276,
  EvalIdentifier = 16634,
  Exponentiate = 35897,
  ExponentiateAssign = 4129,
  ExportDeclaration = 257,
  ExportDefault = 258,
  ExportFromClause = 259,
  ExportKeyword = 4202582,
  ExportSpecifier = 291,
  ExportsList = 289,
  ExpressionStatement = 120,
  ExtendsKeyword = 4194391,
  FalseKeyword = 205586437,
  FieldDefinition = 280,
  FinallyKeyword = 37757016,
  ForInStatement = 166,
  ForKeyword = 37757017,
  ForOfStatement = 167,
  ForStatement = 165,
  FormalParameterList = 214,
  FromClause = 325,
  FromKeyword = 16500,
  FunctionBody = 216,
  FunctionDeclaration = 176,
  FunctionExpression = 177,
  FunctionKeyword = 37822554,
  FunctionStatementList = 217,
  FunctionType = 148,
  FunctionTypeParameter = 149,
  FunctionTypeParameterList = 282,
  TypeReference = 144,
  GetKeyword = 16498,
  GreaterThan = 34883,
  GreaterThanOrEqual = 34881,
  HTMLCloseComment = 261,
  HTMLOpenComment = 260,
  Identifier = 134299649,
  IfKeyword = 37757019,
  IfStatement = 164,
  ImplementsKeyword = 8388710,
  ImportCall = 206,
  ImportClause = 262,
  ImportDeclaration = 263,
  ImportKeyword = 37814364,
  ImportMeta = 299,
  ImportSpecifier = 264,
  ImportsList = 265,
  InKeyword = 21006388,
  Increment = 196635,
  IndexExpression = 129,
  IndexExpressionChain = 202,
  InstanceofKeyword = 4229173,
  InterfaceDeclaration = 191,
  InterfaceExtends = 192,
  IntersectionType = 138,
  IsAssignOp = 4096,
  IsBinaryOp = 32768,
  IsComma = 2097152,
  IsEllipsis = 524288,
  IsExpressionStart = 65536,
  IsFutureReserved = 8388608,
  IsIdentifier = 16384,
  IsInOrOf = 16777216,
  IsKeyword = 4194304,
  IsLessThanOrLeftParen = 536870912,
  IsMember = 262144,
  IsPatternStart = 268435456,
  IsProperty = 67108864,
  IsPropertyOrCall = 131072,
  IsSemicolon = 1073741824,
  IsStartOfType = 134217728,
  IsStatementStart = 8192,
  IsSwitchClause = 33554432,
  LabelledStatement = 163,
  Labels = 324,
  LeftBrace = 268501004,
  LeftBracket = 336003091,
  LeftParen = 537067531,
  LessThan = 536971330,
  LessThanOrEqual = 34880,
  LetKeyword = 41951307,
  LexicalBinding = 190,
  LexicalDeclaration = 162,
  LineFeed = 273,
  LogicalAnd = 33594,
  LogicalAndAssign = 4139,
  LogicalOr = 33339,
  LogicalOrAssign = 4138,
  LogicalShiftRight = 35142,
  LogicalShiftRightAssign = 4128,
  LooseEqual = 34622,
  LooseNotEqual = 34623,
  MemberAccessChain = 203,
  MemberAccessExpression = 130,
  Meta = 16595,
  MethodDefinition = 209,
  MixedKeyword = 134234344,
  Modulo = 35639,
  ModuloAssign = 4134,
  MultiLineComment = 320,
  Multiply = 67143222,
  MultiplyAssign = 4132,
  NameSpaceImport = 255,
  NamedExports = 266,
  NamedImports = 267,
  NamespaceExportDeclaration = 268,
  Negate = 65584,
  NeverKeyword = 134234349,
  NewExpression = 210,
  NewKeyword = 138477661,
  NewTarget = 211,
  NullKeyword = 138477575,
  NullLiteral = 269,
  NullableType = 134217970,
  NumberKeyword = 134234345,
  NumberType = 134217968,
  NumericLiteral = 201392130,
  ObjectBindingPattern = 212,
  ObjectKeyword = 134234346,
  ObjectLiteral = 220,
  ObjectType = 134234353,
  ObjectTypeCallProperty = 196,
  ObjectTypeIndexer = 195,
  ObjectTypeInternalSlot = 248,
  ObjectTypeProperty = 193,
  ObjectTypeSpreadProperty = 247,
  OfKeyword = 16793717,
  Elison = 230,
  OpaqueKeyword = 24822,
  OptionalChain = 302,
  OptionalExpression = 205,
  PackageKeyword = 8388712,
  ParenthesizedExpression = 121,
  Period = 131085,
  PostfixUpdateExpression = 127,
  PrecStart = 8,
  Precedence = 3840,
  PrefixUpdateExpression = 128,
  PrivateIdentifier = 67191035,
  PrivateKeyword = 8388713,
  PrologueDirective = 318,
  PropertyDefinition = 219,
  PropertyDefinitionList = 218,
  PropertyList = 272,
  PropertyMethod = 351,
  ProtectedKeyword = 8388714,
  PublicKeyword = 8388715,
  QualifiedType = 145,
  QuestionMark = 134217750,
  QuestionMarkPeriod = 393240,
  QuestionMarkQuestionMark = 33047,
  RegularExpression = 65540,
  RegularExpressionLiteral = 221,
  ReturnKeyword = 37757022,
  ReturnStatement = 161,
  RightBrace = 1048591,
  RightBracket = 20,
  RightParen = 16,
  RootNode = 122,
  Semicolon = 1108353041,
  SemicolonClassElement = 317,
  SetKeyword = 16499,
  ShiftLeft = 35140,
  ShiftLeftAssign = 4126,
  ShiftRight = 35141,
  ShiftRightAssign = 4127,
  SingleLineComment = 315,
  SingleQuote = 25,
  Smi = 1048576,
  SpreadElement = 223,
  SpreadProperty = 224,
  StaticKeyword = 8388716,
  StrictEqual = 34620,
  StrictNotEqual = 34621,
  StringKeyword = 134234347,
  StringLiteral = 201392131,
  StringType = 134217967,
  Subtract = 134318643,
  SubtractAssign = 4131,
  Super = 225,
  SuperKeyword = 4259935,
  SwitchKeyword = 37757024,
  SwitchStatement = 160,
  SymbolKeyword = 134234343,
  TaggedTemplate = 226,
  Target = 16594,
  TemplateCont = 458760,
  TemplateExpression = 227,
  TemplateSpan = 65764,
  TemplateTail = 458761,
  ThisKeyword = 4276321,
  ThrowKeyword = 37757026,
  ThrowStatement = 158,
  TrueKeyword = 24752947,
  TryKeyword = 37757027,
  TryStatement = 159,
  TupleType = 147,
  Type = 0xff,
  TypeAlias = 200,
  TypeAnnotation = 139,
  TypeKeyword = 24775,
  TypeParameter = 146,
  TypeofKeyword = 138477613,
  TypeofType = 134299891,
  UnaryExpression = 126,
  UndefinedKeyword = 134234253,
  UnionType = 137,
  UniqueIdentifier = 254,
  UnknownKeyword = 134234255,
  UnknownToken = 118,
  VarKeyword = 37757002,
  VariableDeclaration = 157,
  VariableDeclarationList = 156,
  VariableStatement = 155,
  VoidKeyword = 138477615,
  WhileKeyword = 37757028,
  WhileStatement = 154,
  Whitespace = 274,
  WithKeyword = 37757029,
  WithStatement = 153,
  YieldExpression = 229,
  YieldKeyword = 8454253,
  ParenthesizedType = 290,
  ArrowFunctionType = 288,
  AwaitKeyword = 82196,
  ClassBody = 303,
  StaticBlock = 305,
  FunctionAnnotation = 306,
  TypeParameterDeclaration = 307,
  TypeInstantiations = 309,
  TypeParameterInstantiation = 310,
  IndexedAccessType = 311,
  OpaqueType = 312,
  Hyphen = 16654,
  SubtractionType = 313,
  BigIntLiteral = 201392400,
  ProtoKeyword = 16873,
  ArrowTypeParameterList = 292,
  ArrowTypeParameter = 284,
  BigIntType = 286
}

export function tokenToString(node: any): string {
  if (!node) return '';
  switch (node.kind) {
    case SyntaxKind.Add:
      return '+';
    case SyntaxKind.AddAssign:
      return '+=';
    case SyntaxKind.AnyKeyword:
      return 'any';
    case SyntaxKind.Arrow:
      return '=>';
    case SyntaxKind.AsKeyword:
      return 'as';
    case SyntaxKind.Assign:
      return '=';
    case SyntaxKind.AsyncKeyword:
      return 'async';
    case SyntaxKind.AwaitKeyword:
      return 'await';
    case SyntaxKind.BitwiseAnd:
      return '=>';
    case SyntaxKind.BitwiseAndAssign:
      return '&=';
    case SyntaxKind.BitwiseOr:
      return '|';
    case SyntaxKind.BitwiseOrAssign:
      return '|=';
    case SyntaxKind.BitwiseXor:
      return '^';
    case SyntaxKind.BitwiseXorAssign:
      return '^=';
    case SyntaxKind.BooleanKeyword:
      return 'boolean';
    case SyntaxKind.BreakKeyword:
      return 'break';
    case SyntaxKind.CaseKeyword:
      return 'case';
    case SyntaxKind.CatchKeyword:
      return 'catch';
    case SyntaxKind.ClassKeyword:
      return 'class';
    case SyntaxKind.CoalesceAssign:
      return '=>';
    case SyntaxKind.Colon:
      return ':';
    case SyntaxKind.Comma:
      return ',';
    case SyntaxKind.Complement:
      return '~';
    case SyntaxKind.ConstKeyword:
      return 'const';
    case SyntaxKind.ConstructorKeyword:
      return 'constructor';
    case SyntaxKind.ContinueKeyword:
      return 'continue';
    case SyntaxKind.DebuggerKeyword:
      return 'debugger';
    case SyntaxKind.DeclareKeyword:
      return 'declare';
    case SyntaxKind.Decorator:
      return '@';
    case SyntaxKind.Decrement:
      return '--';
    case SyntaxKind.DefaultKeyword:
      return 'default';
    case SyntaxKind.DeleteKeyword:
      return 'delete';
    case SyntaxKind.Divide:
      return '/';
    case SyntaxKind.DivideAssign:
      return '/=';
    case SyntaxKind.DoKeyword:
      return 'do';
    case SyntaxKind.Ellipsis:
      return '...';
    case SyntaxKind.ElseKeyword:
      return 'else';
    case SyntaxKind.EmptyKeyword:
      return 'empty';
    case SyntaxKind.EndOfFileToken:
      return 'EndOfSource';
    case SyntaxKind.EnumKeyword:
      return 'enum';
    case SyntaxKind.EvalIdentifier:
      return 'eval';
    case SyntaxKind.Exponentiate:
      return '**';
    case SyntaxKind.ExponentiateAssign:
      return '**=';
    case SyntaxKind.ExportKeyword:
      return 'export';
    case SyntaxKind.ExtendsKeyword:
      return 'extends';
    case SyntaxKind.FalseKeyword:
      return 'false';
    case SyntaxKind.FinallyKeyword:
      return 'finally';
    case SyntaxKind.ForKeyword:
      return 'for';
    case SyntaxKind.FromKeyword:
      return 'from';
    case SyntaxKind.FunctionKeyword:
      return 'function';
    case SyntaxKind.GetKeyword:
      return 'get';
    case SyntaxKind.GreaterThan:
      return '>';
    case SyntaxKind.GreaterThanOrEqual:
      return '>=';
    case SyntaxKind.IfKeyword:
      return 'if';
    case SyntaxKind.ImplementsKeyword:
      return 'implements';
    case SyntaxKind.ImportKeyword:
      return 'import';
    case SyntaxKind.InKeyword:
      return 'in';
    case SyntaxKind.Increment:
      return '++';
    case SyntaxKind.InstanceofKeyword:
      return 'inctanceof';
    case SyntaxKind.LessThan:
      return ' <';
    case SyntaxKind.LessThanOrEqual:
      return '<=';
    case SyntaxKind.LetKeyword:
      return 'let';
    case SyntaxKind.LogicalAnd:
      return '&&';
    case SyntaxKind.LogicalAndAssign:
      return '&&=';
    case SyntaxKind.LogicalOr:
      return '||';
    case SyntaxKind.LogicalOrAssign:
      return '||=';
    case SyntaxKind.LogicalShiftRight:
      return '>>>';
    case SyntaxKind.LogicalShiftRightAssign:
      return '>>>=';
    case SyntaxKind.LooseEqual:
      return '==';
    case SyntaxKind.LooseNotEqual:
      return '!=';
    case SyntaxKind.MixedKeyword:
      return 'mixed';
    case SyntaxKind.Modulo:
      return '%';
    case SyntaxKind.ModuloAssign:
      return '%=';
    case SyntaxKind.Multiply:
      return '*';
    case SyntaxKind.MultiplyAssign:
      return '*=';
    case SyntaxKind.Negate:
      return '!';
    case SyntaxKind.NeverKeyword:
      return 'never';
    case SyntaxKind.NewKeyword:
      return 'new';
    case SyntaxKind.NewTarget:
      return 'target';
    case SyntaxKind.NullKeyword:
      return 'null';
    case SyntaxKind.NumberKeyword:
      return 'number';
    case SyntaxKind.OfKeyword:
      return 'of';
    case SyntaxKind.OpaqueKeyword:
      return 'opaque';
    case SyntaxKind.PackageKeyword:
      return 'package';
    case SyntaxKind.Period:
      return '.';
    case SyntaxKind.PrivateKeyword:
      return 'private';
    case SyntaxKind.ProtectedKeyword:
      return 'protected';
    case SyntaxKind.PublicKeyword:
      return 'public';
    case SyntaxKind.QuestionMark:
      return '?';
    case SyntaxKind.QuestionMarkPeriod:
      return '?.';
    case SyntaxKind.QuestionMarkQuestionMark:
      return '??';
    case SyntaxKind.ReturnKeyword:
      return 'return';
    case SyntaxKind.Semicolon:
      return ':';
    case SyntaxKind.SetKeyword:
      return 'set';
    case SyntaxKind.ShiftLeft:
      return '<<';
    case SyntaxKind.ShiftLeftAssign:
      return '<<=';
    case SyntaxKind.ShiftRight:
      return '>>';
    case SyntaxKind.ShiftRightAssign:
      return '>>=';
    case SyntaxKind.StaticKeyword:
      return 'static';
    case SyntaxKind.StrictEqual:
      return '===';
    case SyntaxKind.StrictNotEqual:
      return '!==';
    case SyntaxKind.StringKeyword:
      return 'string';
    case SyntaxKind.Subtract:
      return '-';
    case SyntaxKind.SubtractAssign:
      return '-=';
    case SyntaxKind.SuperKeyword:
      return 'super';
    case SyntaxKind.SwitchKeyword:
      return 'switch';
    case SyntaxKind.SymbolKeyword:
      return 'symbol';
    case SyntaxKind.Target:
      return 'target';
    case SyntaxKind.ThisKeyword:
      return 'this';
    case SyntaxKind.ThrowKeyword:
      return 'throw';
    case SyntaxKind.TrueKeyword:
      return 'true';
    case SyntaxKind.TryKeyword:
      return 'try';
    case SyntaxKind.TypeKeyword:
      return 'type';
    case SyntaxKind.TypeofKeyword:
      return 'typeof';
    case SyntaxKind.TypeofType:
      return 'typeof';
    case SyntaxKind.UndefinedKeyword:
      return 'undefined';
    case SyntaxKind.UnknownKeyword:
      return 'unknown';
    case SyntaxKind.VarKeyword:
      return 'var';
    case SyntaxKind.VoidKeyword:
      return 'void';
    case SyntaxKind.WhileKeyword:
      return 'while';
    case SyntaxKind.WithKeyword:
      return 'with';
    case SyntaxKind.YieldKeyword:
      return 'yield';
    case SyntaxKind.Meta:
      return 'meta';
    case SyntaxKind.Subtract:
      return '-';
    default:
      return '';
  }
}
