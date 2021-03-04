/**
 * Properties for every single valid AST Node type.
 */
export interface Node {
  kind: NodeKind;
  flags: NodeFlags;
  intersects: boolean;
  transformFlags: TransformFlags;
  original?: Node | null;
  uniqueId?: number;
  start: number;
  end: number;
}

/**
 * Access modifiers
 */
export const enum AccessModifiers {
  Private = 0,
  Public = 1,
  Protected = 2
}

// Note: this *must* be kept in sync with the enum's order.
//
// It exploits the enum value ordering, and it's necessarily a complete and
// utter hack.
//
// All to lower it to a single monomorphic array access.
export const AccessModifierTypes = [NodeKind.PrivateModifier, NodeKind.PublicModifier, NodeKind.ProtectedModifier];

export const enum NodeFlags {
  /**
   * This node has no flags.
   */
  None,
  /**
   * This node has a line terminator after it
   */
  Multiline = 1 << 0,
  /**
   * This node has some diagnostics associated with it
   */
  HasErrors = 1 << 1,
  /**
   * This node was inserted by the compiler
   */
  Synthetic = 1 << 2,
  /**
   * This node contains '__PROTO___' property
   */
  HasProto = 1 << 3,

  /**
   * This node const either 'let' or 'const' bindings
   */

  BlockScoped = 1 << 4,

  /**
   * This node has been "exported"
   */

  Exported = 1 << 5,

  /**
   * This node has "export default modifier"
   */

  ExportDefault = 1 << 6,

  /**
   * This node const numeric literal values
   */

  BinaryIntegerLiteral = 1 << 7,

  /**
   * This node const numeric literal values
   */

  HexIntegerLiteral = 1 << 8,

  /**
   * This node const numeric literal values
   */

  OctalIntegerLiteral = 1 << 9,

  /**
   * This node const numeric literal values
   */

  FloatingPointLiteral = 1 << 10,

  /**
   * This node const numeric literal values
   */

  ScientificLiteral = 1 << 11,

  /**
   * This node const numeric literal values
   */

  NonDecimalIntegerLiteral = 1 << 12,

  /**
   * This node const numeric literal values
   */

  ImplicitOctal = 1 << 13,

  /**
    This node constains a preceding linebreak
   */

  PrecedingLineBreak = 1 << 14,

  /**
   * This node is an async function (initialized by binding)
   */

  HasAsyncFunctions = 1 << 15,

  /**
   * This node is in strict mode
   */

  Strict = 1 << 16,

  /**
   * This node is in module mode
   */

  Module = 1 << 17,

  /**
   * This node contains a construcor (Methoddefinition)
   */

  Constructor = 1 << 18,

  /**
   * This node has an unterminated string literal or regular expression
   */
  Unterminated = 1 << 19,

  /**
   * This node contains an invalid escape (template rev.)
   */
  ContainsInvalidEscape = 1 << 20,

  /**
   * This node contains extended unicode escape
   */
  ExtendedUnicodeEscape = 1 << 21,

  /**
   * This node contains an unicode escapa
   */
  UnicodeEscape = 1 << 22,

  /**
   * This node has numeric separators
   */
  ContainsSeparator = 1 << 23,

  /**
   * This node has an string literal starting with single quote
   */
  SingleQuote = 1 << 24,

  /**
   * This node has an escaped keyword or identifier
   */
  EscapedKeywordOrIdentifier = 1 << 25,

  /**
   * This node has been decalared (Typescript)
   */
  Declared = 1 << 26,

  /**
   * This node is ambient
   */
  Ambient = 1 << 27,

  /**
   * This node is abstract
   */

  Abstract = 1 << 28,

  /**
   * This node is an parenthesized arrow
   */

  ParenthesizedArrow = 1 << 29
}

/**
 * Transformation flags
 */

export const enum TransformFlags {
  None = 0,
  ES2015 = 1 << 0,
  ES2016 = 1 << 1,
  ES2017 = 1 << 2,
  ES2018 = 1 << 3,
  ES2019 = 1 << 4,
  ES2020 = 1 << 5,
  ESNext = 1 << 6,
  Generator = 1 << 7,
  HoistedDeclarationOrCompletion = 1 << 8,
  BlockScopedBinding = 1 << 9,
  BindingPattern = 1 << 10,
  ObjectRestOrSpread = 1 << 11,
  RestOrSpread = 1 << 12,
  Jsx = 1 << 13,
  Yield = 1 << 14,
  Await = 1 << 15,
  LexicalThis = 1 << 16,
  ComputedPropertyName = 1 << 17,
  DynamicImport = 1 << 18,
  ClassFields = 1 << 19,
  PossibleTopLevelAwait = 1 << 20,
  TypeScript = 1 << 21
}

export const enum UniqueIdentifierFlags {
  None = 0,
  Auto = 1,
  Loop = 2,
  Unique = 3,
  Node = 4,
  KindMask = 7,
  ReservedInNestedScopes = 1 << 3,
  Optimistic = 1 << 4
}

// Every single valid AST Node Kind
// Please keep it sorted alphabetically.
export const enum NodeKind {
  None = 0,

  IsLeftHandSideExpression = 1 << 9,
  IsPropertyNameLiteral = 1 << 10,
  IsBlockScope = 1 << 11,
  IsJSXTagName = 1 << 12,
  IsElementOrPropertyAccess = 1 << 13,
  IsObjectLiteralOrClassExpression = 1 << 14,
  IsArrayOrObjectLiteral = 1 << 15,
  IsExpression = 1 << 16,
  IsIdentifier = 1 << 17,
  IsFunctionDeclaration = 1 << 18,
  IsGenerator = 1 << 19,
  IsAsync = 1 << 20,
  IsStatement = 1 << 21,
  IsChildless = 1 << 22,
  IsFunctionExpression = 1 << 23,
  IsMethod = 1 << 24,
  IsBindingPattern = 1 << 25,
  IsAssignmentPattern = 1 << 26,
  IsArrayBindingElement = 1 << 27,
  IsDeclarationBindingElement = 1 << 28,

  AbstractConstructorType = 1,
  AnyKeyword = 2 | IsChildless,
  ArgumentList = 3,
  ArrayAssignmentPattern = 4,
  ArrayBindingPattern = 5 | IsBindingPattern,
  ArrayLiteral = 6 | IsArrayOrObjectLiteral | IsExpression | IsLeftHandSideExpression | IsAssignmentPattern,
  ArrayType = 7,
  ArrowFunction = 8 | IsExpression | IsBlockScope,
  ArrowParameters = 9 | IsExpression,
  AsExpression = 10 | IsExpression,
  Assign = 11,
  AssignToken = 12,
  AssignmentElement = 13,
  AssignmentExpression = 14 | IsExpression,
  AssignmentRestProperty = 15,
  AsyncArrowFunction = 16 | IsExpression,
  AsyncFunctionDeclaration = 17 | IsFunctionDeclaration | IsAsync | IsBlockScope,
  AsyncFunctionExpression = 18 | IsAsync | IsBlockScope | IsFunctionExpression,
  AsyncGeneratorDeclaration = 19 | IsFunctionDeclaration | IsAsync | IsGenerator | IsBlockScope,
  AsyncGeneratorExpression = 20 | IsAsync | IsGenerator | IsBlockScope | IsFunctionExpression,
  AsyncGeneratorMethod = 21 | IsAsync | IsGenerator | IsBlockScope | IsMethod,
  AsyncMethod = 22 | IsAsync | IsBlockScope | IsMethod,
  AwaitExpression = 23 | IsExpression,
  BigIntKeyword = 24 | IsChildless,
  BigIntLiteral = 25 | IsExpression | IsLeftHandSideExpression,
  BigIntType = 26 | IsChildless,
  BinaryExpression = 27 | IsExpression,
  BindingElement = 28 | IsArrayBindingElement,
  BindingElementList = 29,
  BindingIdentifier = 30 | IsIdentifier,
  BindingList = 31,
  BindingProperty = 32,
  BindingPropertyList = 33,
  BindingRestElement = 34,
  BindingRestProperty = 35,
  Block = 36 | IsBlockScope,
  BlockStatement = 37 | IsStatement | IsBlockScope,
  BooleanKeyword = 38 | IsChildless | IsExpression,
  BooleanLiteral = 39 | IsExpression | IsChildless | IsLeftHandSideExpression,
  BooleanType = 40 | IsChildless,
  BreakStatement = 41 | IsStatement,
  CallChain = 42 | IsExpression,
  CallExpression = 43 | IsExpression | IsLeftHandSideExpression,
  CallSignature = 44,
  CaseBlock = 45 | IsBlockScope,
  CaseClause = 46,
  Catch = 47 | IsBlockScope,
  ClassDeclaration = 48,
  ClassElement = 49,
  ClassElementList = 50,
  ClassExpression = 51 | IsExpression | IsObjectLiteralOrClassExpression | IsLeftHandSideExpression,
  ClassHeritage = 52,
  ClassProperty = 53,
  CommaOperator = 54 | IsExpression,
  ComputedPropertyName = 55 | IsExpression,
  ConditionalExpression = 56 | IsExpression,
  ConditionalType = 57,
  ConstructSignature = 58,
  ConstructorType = 59,
  ContinueStatement = 60 | IsStatement,
  CoverInitializedName = 61 | IsExpression,
  DebuggerStatement = 62 | IsChildless | IsStatement,
  Decorator = 63,
  DecoratorList = 64,
  DefaultClause = 65,
  DoWhileStatement = 66 | IsStatement,
  ElementAccessChain = 67 | IsExpression,
  ElementAccessExpression = 68 | IsExpression | IsElementOrPropertyAccess | IsLeftHandSideExpression,
  ElementList = 69 | IsExpression,
  EmptyStatement = 70 | IsChildless | IsStatement,
  EnumDeclaration = 71,
  EnumMembers = 72,
  EnumMembersList = 73,
  EnumType = 74,
  ExportAssignment = 75,
  ExportDeclaration = 76,
  ExportDefault = 77,
  ExportFromClause = 78,
  ExportSpecifier = 79,
  ExportsList = 80,
  ExpressionStatement = 81 | IsStatement,
  ExternalModuleReference = 82,
  FalseType = 83,
  FieldDefinition = 84,
  ForBinding = 85,
  ForInStatement = 86 | IsStatement | IsBlockScope,
  ForOfStatement = 87 | IsStatement | IsBlockScope,
  ForStatement = 88 | IsStatement | IsBlockScope,
  FormalParameter = 89,
  FormalParameterList = 90,
  FunctionBody = 91,
  FunctionDeclaration = 92 | IsFunctionDeclaration | IsBlockScope,
  FunctionExpression = 93 | IsExpression | IsBlockScope | IsFunctionExpression,
  FunctionStatementList = 94,
  FunctionType = 95,
  GeneratorDeclaration = 96 | IsFunctionDeclaration | IsGenerator | IsBlockScope,
  GeneratorExpression = 97 | IsGenerator | IsBlockScope | IsFunctionExpression,
  GeneratorMethod = 98 | IsGenerator | IsBlockScope | IsMethod,
  HTMLClose = 99,
  HTMLOpen = 100,
  HeritageClause = 101,
  HeritageClauses = 102,
  IdentifierName = 103 | IsIdentifier | IsExpression,
  IdentifierReference = 104 | IsIdentifier | IsExpression,
  IfStatement = 105 | IsStatement,
  ImplementClause = 106,
  ImplementClauses = 107,
  ImportCall = 108 | IsExpression | IsLeftHandSideExpression,
  ImportClause = 109,
  ImportDeclaration = 110,
  ImportEqualsDeclaration = 111,
  ImportMeta = 112 | IsChildless,
  ImportSpecifier = 113,
  ImportType = 114,
  ImportsList = 115,
  IndexSignature = 116 | IsExpression,
  IndexedAccessType = 117,
  InferType = 118,
  InterfaceDeclaration = 119,
  IntersectionType = 120,
  IntrinsicKeyword = 121,
  JsxAttribute = 122,
  JsxAttributesList = 123,
  JsxChildrenList = 124,
  JsxClosingElement = 125 | IsJSXTagName,
  JsxClosingFragment = 126 | IsLeftHandSideExpression,
  JsxElement = 127 | IsExpression | IsLeftHandSideExpression,
  JsxFragment = 128 | IsExpression | IsLeftHandSideExpression,
  JsxIdentifier = 129,
  JsxMemberExpression = 130,
  JsxNamespacedName = 131,
  JsxOpeningElement = 132 | IsJSXTagName,
  JsxOpeningFragment = 133,
  JsxSelfClosingElement = 134 | IsExpression | IsJSXTagName,
  JsxSpreadAttribute = 135,
  JsxTagNamePropertyAccess = 136,
  JsxText = 137,
  LabelIdentifier = 138,
  LabelledIdentifier = 139 | IsIdentifier,
  LabelledStatement = 140 | IsStatement,
  LexicalBinding = 141,
  LexicalDeclaration = 142,
  MappedType = 143,
  MemberExpression = 145 | IsExpression,
  MethodDefinition = 146 | IsExpression | IsBlockScope | IsMethod,
  MethodSignature = 147,
  MinusType = 148,
  Module = 149,
  ModuleBody = 150,
  MultiLine = 151,
  NamedExports = 152,
  NamedImports = 153,
  NamedTupleMember = 154,
  NeverKeyword = 155 | IsChildless,
  NewExpression = 156 | IsExpression | IsLeftHandSideExpression,
  NewTarget = 157 | IsChildless | IsLeftHandSideExpression,
  NonNullExpression = 158 | IsExpression | IsLeftHandSideExpression,
  NullKeyword = 159 | IsChildless,
  NullLiteral = 160 | IsExpression | IsChildless | IsLeftHandSideExpression,
  NumberKeyword = 161,
  NumberLiteral = 162 | IsChildless,
  NumberType = 163,
  NumericLiteral = 164 | IsExpression | IsChildless | IsPropertyNameLiteral | IsLeftHandSideExpression,
  ObjectAssignmentPattern = 165,
  ObjectBindingPattern = 166 | IsBindingPattern,
  ObjectKeyword = 167 | IsChildless,
  ObjectLiteral = 168 |
    IsArrayOrObjectLiteral |
    IsObjectLiteralOrClassExpression |
    IsExpression |
    IsLeftHandSideExpression |
    IsAssignmentPattern,
  ObjectTypeMembers = 169,
  OmittedExpression = 170 | IsChildless | IsExpression | IsArrayBindingElement,
  OptionalChain = 171 | IsExpression,
  OptionalExpression = 172 | IsExpression,
  OptionalType = 173,
  ParameterDeclaration = 174,
  Parameters = 175,
  ParenthesizedExpression = 176 | IsExpression | IsLeftHandSideExpression,
  ParenthesizedType = 177,
  PostfixUpdateExpression = 178 | IsExpression,
  PrefixUpdateExpression = 179 | IsExpression,
  PrivateIdentifier = 180 | IsIdentifier,
  PrivateModifier = 181 | IsChildless,
  PrologueDirective = 182,
  PropertyAccessChain = 183 | IsExpression,
  PropertyAccessExpression = 184 | IsExpression | IsElementOrPropertyAccess | IsLeftHandSideExpression,
  PropertyDefinition = 185 | IsExpression,
  PropertyDefinitionList = 186 | IsExpression,
  PropertyName = 187 | IsExpression,
  PropertySignature = 188,
  ProtectedModifier = 189 | IsChildless,
  PublicModifier = 190 | IsChildless,
  QualifiedName = 191,
  RegularExpressionLiteral = 192 | IsExpression | IsChildless | IsLeftHandSideExpression,
  RestType = 193,
  ReturnStatement = 194 | IsStatement,
  RootNode = 195 | IsBlockScope,
  Script = 196,
  ScriptBody = 197,
  Semicolon = 198 | IsChildless,
  SheBang = 199,
  ShorthandProperty = 200,
  SignatureMember = 201,
  SingleLine = 202,
  SingleNameBinding = 203,
  SpreadElement = 204 | IsExpression,
  SpreadProperty = 205 | IsExpression,
  StringKeyword = 206 | IsChildless,
  StringLiteral = 207 | IsExpression | IsPropertyNameLiteral | IsLeftHandSideExpression,
  StringType = 208,
  Super = 209 | IsExpression | IsChildless | IsLeftHandSideExpression,
  SwitchStatement = 210 | IsStatement,
  SymbolKeyword = 211,
  TaggedTemplate = 212 | IsExpression | IsLeftHandSideExpression,
  TemplateExpression = 213 | IsExpression | IsLeftHandSideExpression,
  TemplateLiteral = 214 | IsExpression | IsLeftHandSideExpression,
  TemplateSpan = 215 | IsExpression | IsLeftHandSideExpression,
  TemplateTail = 216 | IsChildless | IsExpression | IsLeftHandSideExpression,
  TemplateType = 217,
  TemplateTypeSpan = 218,
  ThisExpression = 219 | IsExpression | IsChildless | IsLeftHandSideExpression,
  ThisType = 220 | IsChildless,
  ThrowStatement = 221 | IsStatement,
  TrueType = 222,
  TryStatement = 223 | IsStatement,
  TupleType = 224,
  TypeAliasDeclaration = 225,
  TypeAnnotation = 226,
  TypeArguments = 227,
  TypeAssertion = 228 | IsExpression,
  TypeAssertionExpression = 229 | IsExpression,
  TypeLiteral = 230,
  TypeOperator = 231,
  TypeParameter = 232,
  TypeParameterList = 233,
  TypePredicate = 234,
  TypeQuery = 235,
  TypeReference = 236,
  TypeofKeyword = 237,
  UnaryExpression = 238 | IsExpression,
  UndefinedKeyword = 239 | IsChildless,
  UnionType = 240,
  UniqueIdentifier = 241 | IsIdentifier,
  UnknownKeyword = 242 | IsChildless,
  VariableDeclaration = 243,
  VariableDeclarationList = 244,
  VariableStatement = 245 | IsStatement,
  VoidKeyword = 246 | IsChildless,
  WhileStatement = 247 | IsStatement,
  WithStatement = 248 | IsStatement,
  YieldExpression = 249 | IsExpression,
  DummyIdentifier = 250 | IsIdentifier,
  CatchParameter = 251 | IsStatement,
  NamespaceBlock = 252 | IsStatement,
  NamespaceDeclaration = 253 | IsStatement,

  // Tokens

  Period = 254
}
