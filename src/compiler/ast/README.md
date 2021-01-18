# The Kataw AST specification

Kataw's own AST represents the structure of an ECMAScript program as a tree and conforms both to the ECMAScript® 2021 specs and TypeScript **latest**.

The AST have been designed for performance, and it nearly eliminates the chance of accidentally creating an AST that does not represent an ECMAScript program while also
supporting a *hybrid* definition of *concrete syntax*.

## Node

```js
interface Node {
    kind: NodeKind;
    multiline?: boolean;
    parent: Node | null;
    flags: NodeFlags;
    transformFlags: TransformFlags;
    emitNode: EmitNode | null;
    start: number;
    end: number;
}
```

The `Node` contains all AST nodes represented as `Node` object, which may have any
prototype inheritance.

The `kind` field is a string representing the AST variant type, and contrains a serie of
bitwise masks - allows you to group AST nodes very easily. For example
`kind & NodeKind.IsIdentfier` or `kind & NodeKind.ContainsList`.

The `start` and `end` are default properties representing the start and end values of each `AST node`.

## RootNode

`RootNode` represent both `Module` and `Script`.

The `module` property should be set to `true` if parsing in [`module mode`](https://tc39.es/ecma262/#sec-modules) or `false` if parsing in
[`script mode`](https://tc39.es/ecma262/#sec-scripts).

The current `flags` property keeps track of which context you are currently parsing in, and it's property contains a serie of
bitwise masks that can be parsed by reference. This information isn't known from outside, or exposed through any API.

```js
interface RootNode <: Node {
    kind: NodeKind;
    source: string;
    filename: string;
    statements: [ Statements ];
    jsx: boolean;
    module: boolean;
    diagnostics: [ Diagnostics ];
    parent: Node;
    emitNode: Node;
    detached: boolean;
    incremental: boolean;
    flags: NodeFlags;
    transformFlags: TransformFlags;
}
```

## Node flags

```js
enum NodeFlags {
  None,
  Multiline      = 1 << 0,
  HasErrors      = 1 << 1,
  Synthetic      = 1 << 2,
  HasSideEffects = 1 << 3,
  HasArrayList   = 1 << 4,
  BlockScoped    = 1 << 5,
  OptionalChain  = 1 << 6
}

```

## Node kinds

```js
enum NodeKind {
   None = 0,

  // Numeric literal

  BinaryIntegerLiteral = 1 << 8,
  HexIntegerLiteral = 1 << 9,
  OctalIntegerLiteral = 1 << 10,
  FloatingPointLiteral = 1 << 11,
  ScientificLiteral = 1 << 12,
  NonDecimalIntegerLiteral = 1 << 13,
  ImplicitOctal = 1 << 14,

  // BigInt literal

  BigIntLiteral = 1 << 15,
  DecimalBigIntegerLiteral = 1 << 16,

  // Identifier
  EscapedKeyword = 1 << 17,

  Computed = 1 << 18,

  ContainsList = 1 << 19,
  IsExpression = 1 << 20,
  ArrayOrObjectLiteral = 1 << 21,
  Identifier = 1 << 22,

  IsFunctionDeclaration = 1 << 23,
  IsGenerator = 1 << 24,
  IsAsync = 1 << 25,

  AbstractClassDeclaration = 240,
  AnyKeyword = 1,
  ArgumentList = 2 | ContainsList,
  ArrayAssignmentPattern = 3,
  ArrayBindingPattern = 4,
  ArrayLiteral = 5 | ArrayOrObjectLiteral,
  ArrayType = 6,
  ArrowFunction = 7 | IsExpression,
  ArrowParameters = 8,
  AsExpression = 237,
  Assign = 9,
  AssignToken = 10,
  AssignmentElement = 11,
  AssignmentExpression = 12,
  AssignmentRestElement = 13,
  AssignmentRestProperty = 14,
  AsyncArrowFunction = 15,
  AsyncFunctionDeclaration = 16 | IsFunctionDeclaration | IsAsync,
  AsyncFunctionExpression = 17 | IsAsync,
  AsyncGeneratorDeclaration = 18 | IsFunctionDeclaration | IsAsync | IsGenerator,
  AsyncGeneratorExpression = 19 | IsAsync | IsGenerator,
  AsyncGeneratorMethod = 20 | IsAsync | IsGenerator,
  AsyncMethod = 21 | IsAsync,
  AwaitExpression = 22,
  BigIntKeyword = 212,
  BigIntType = 218,
  BinaryExpression = 23 | IsExpression,
  BindingElement = 24,
  BindingElementList = 25 | ContainsList,
  BindingIdentifier = 26 | Identifier,
  BindingList = 27 | ContainsList,
  BindingProperty = 28,
  BindingPropertyList = 29 | ContainsList,
  BindingRestElement = 30,
  BindingRestProperty = 31,
  Block = 32 | ContainsList,
  BlockStatement = 33,
  BooleanKeyword = 34,
  BooleanLiteral = 35 | IsExpression,
  BooleanType = 36,
  BreakStatement = 37,
  CallChain = 38,
  CallExpression = 39 | IsExpression,
  CallSignatureDeclaration = 40,
  CaseBlock = 41,
  CaseClause = 42,
  Catch = 43,
  ClassDeclaration = 44,
  ClassElement = 45,
  ClassElementList = 46,
  ClassExpression = 47 | IsExpression,
  ClassHeritage = 48,
  ClassProperty = 49,
  ColonToken = 50,
  CommaOperator = 51,
  ComputedPropertyName = 52,
  ConditionalExpression = 53 | IsExpression,
  ConditionalType = 232,
  ConstructSignatureDeclaration = 54,
  ConstructorType = 55,
  ContinueStatement = 56,
  CoverInitializedName = 57,
  DebuggerStatement = 58,
  DefaultClause = 59,
  DoWhileStatement = 60,
  ElementAccessChain = 61,
  ElementAccessExpression = 62 | IsExpression,
  ElementList = 63 | ContainsList,
  Elison = 64 | IsExpression,
  EllipsisToken = 65,
  EmptyStatement = 66,
  EnumDeclaration = 67,
  EnumMembers = 68,
  EnumMembersList = 241,
  EnumType = 222,
  ExportAssignment = 239,
  ExportDeclaration = 69,
  ExportDefault = 70,
  ExportFromClause = 71,
  ExportSpecifier = 72,
  ExportsList = 73 | ContainsList,
  ExpressionStatement = 74,
  ExternalModuleReference = 75,
  FalseType = 220,
  FieldDefinition = 76,
  ForBinding = 77,
  ForInStatement = 78,
  ForOfStatement = 79,
  ForStatement = 80,
  FormalParameter = 81,
  FormalParameterList = 82,
  FunctionBody = 83,
  FunctionDeclaration = 84 | IsFunctionDeclaration,
  FunctionExpression = 85 | IsExpression,
  FunctionStatementList = 86 | ContainsList,
  FunctionType = 87,
  GeneratorDeclaration = 88 | IsFunctionDeclaration | IsGenerator,
  GeneratorExpression = 89 | IsGenerator,
  GeneratorMethod = 90 | IsGenerator,
  HTMLClose = 91,
  HTMLOpen = 92,
  HeritageClause = 93,
  HeritageClauses = 94,
  IdentifierName = 95 | Identifier | IsExpression,
  IdentifierReference = 96 | Identifier | IsExpression,
  IfStatement = 97,
  ImportCall = 98,
  ImportClause = 99,
  ImportDeclaration = 100,
  ImportEqualsDeclaration = 101,
  ImportMeta = 102,
  ImportSpecifier = 103,
  ImportType = 226,
  ImportsList = 104 | ContainsList,
  IndexSignature = 105,
  IndexedAccessType = 209,
  InferType = 231,
  InterfaceDeclaration = 106,
  IntersectionList = 207 | ContainsList,
  JsxAttribute = 107,
  JsxAttributesList = 108 | ContainsList,
  JsxChildrenList = 109 | ContainsList,
  JsxClosingElement = 110,
  JsxClosingFragment = 111,
  JsxElement = 112 | IsExpression,
  JsxFragment = 113,
  JsxIdentifier = 114,
  JsxMemberExpression = 115,
  JsxNamespacedName = 116,
  JsxOpeningElement = 117,
  JsxOpeningFragment = 118,
  JsxSelfClosingElement = 119 | IsExpression,
  JsxSpreadAttribute = 120,
  JsxTagNamePropertyAccess = 121,
  JsxText = 122,
  LabelIdentifier = 123,
  LabelledIdentifier = 124 | Identifier,
  LabelledStatement = 125,
  LexicalBinding = 126,
  LexicalDeclaration = 127,
  MappedType = 227,
  MemberAccessChain = 128,
  MemberExpression = 129,
  MethodDefinition = 130,
  MethodSignature = 131,
  MinusType = 233,
  MultiLine = 132,
  NamedExports = 133,
  NamedImports = 134,
  NamedTupleMember = 229,
  NeverKeyword = 213,
  NewExpression = 135 | IsExpression,
  NewTarget = 136,
  NullKeyword = 221,
  NullLiteral = 137 | IsExpression,
  NumberKeyword = 138,
  NumberLiteral = 217,
  NumberType = 139,
  NumericLiteral = 140 | IsExpression,
  ObjectAssignmentPattern = 141,
  ObjectBindingPattern = 142,
  ObjectKeyword = 214,
  ObjectLiteral = 143 | ArrayOrObjectLiteral,
  ObjectTypeMembers = 228,
  OmittedExpression = 236,
  OptionalChain = 144,
  OptionalExpression = 145,
  OptionalType = 234,
  ParameterDeclaration = 242,
  Parameters = 146,
  ParenthesizedExpression = 147 | IsExpression,
  ParenthesizedType = 148,
  PostfixUpdateExpression = 149 | IsExpression,
  PrefixUpdateExpression = 150 | IsExpression,
  PrivateIdentifier = 151,
  PropertyAccessChain = 152,
  PropertyAccessExpression = 153 | IsExpression,
  PropertyDefinition = 154,
  PropertyDefinitionList = 155,
  PropertyName = 156,
  PropertySignature = 157,
  QualifiedName = 158,
  QuestionMarkToken = 159,
  RegularExpressionLiteral = 160 | IsExpression,
  RestType = 230,
  ReturnStatement = 161,
  RootNode = 162,
  ScriptOrModuleBody = 163 | ContainsList,
  Semicolon = 164,
  SheBang = 165,
  ShorthandProperty = 166,
  SignatureMember = 167,
  SingleLine = 168,
  SingleNameBinding = 169,
  SpreadElement = 170 | IsExpression,
  SpreadProperty = 171,
  StringKeyword = 172,
  StringLiteral = 173 | IsExpression,
  StringType = 174,
  Super = 175 | IsExpression,
  SwitchStatement = 176,
  SymbolKeyword = 177,
  TaggedTemplate = 178,
  TaggedTemplateExpression = 179 | IsExpression,
  TemplateExpression = 180,
  TemplateLiteral = 181,
  TemplateSpan = 182,
  TemplateTail = 183,
  TemplateType = 235,
  ThisExpression = 184 | IsExpression,
  ThisType = 223,
  ThrowStatement = 185,
  TrueType = 219,
  TryStatement = 186,
  TupleType = 224,
  TypeAliasDeclaration = 188,
  TypeAnnotation = 189,
  TypeArguments = 267 | ContainsList,
  TypeAssertion = 238,
  TypeAssertionExpression = 190,
  TypeLiteral = 191,
  TypeOperator = 208,
  TypeParameter = 192,
  TypeParameterList = 193,
  TypePredicate = 225,
  TypeQuery = 194,
  TypeReference = 195,
  TypeofKeyword = 196,
  UnaryExpression = 197 | IsExpression,
  UndefinedKeyword = 215,
  UnionType = 206 | ContainsList,
  UnknownKeyword = 211,
  VariableDeclaration = 199,
  VariableDeclarationList = 200 | ContainsList,
  VariableStatement = 201,
  VoidKeyword = 202,
  WhileStatement = 203,
  WithStatement = 204,
  YieldExpression = 205 | IsExpression
}
```

## Transform flags

```js
enum TransformFlags {
  None                           = 0,
  ES2015                         = 1 << 0,
  ES2016                         = 1 << 1,
  ES2017                         = 1 << 2,
  ES2018                         = 1 << 3,
  ES2019                         = 1 << 4,
  ES2020                         = 1 << 5,
  ESNext                         = 1 << 6,
  Generator                      = 1 << 7,
  HoistedDeclarationOrCompletion = 1 << 8,
  BlockScopedBinding             = 1 << 9,
  BindingPattern                 = 1 << 10,
  ObjectRestOrSpread             = 1 << 11,
  RestOrSpread                   = 1 << 12,
  Jsx                            = 1 << 13,
  Yield                          = 1 << 14,
  Await                          = 1 << 15,
  LexicalThis                    = 1 << 16,
  ComputedPropertyName           = 1 << 17,
  DynamicImport                  = 1 << 18,
  ClassFields                    = 1 << 19,
  PossibleTopLevelAwait          = 1 << 20
}
```
