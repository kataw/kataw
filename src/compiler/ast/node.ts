import { EmitNode } from './emit';

/**
 * Every single valid AST Node type.
 */
export interface Node {
  kind: NodeKind;
  parent: Node | null;
  flags: NodeFlags;
  intersects: boolean;
  transformFlags: TransformFlags;
  emitNode: EmitNode | null;
  original?: Node | null;
  uniqueId?: number;
  start: number;
  end: number;
}

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
   * This code contains chained MemberExpression rooted to a pseudo-OptionalExpression
   */

  OptionalChain = 1 << 5,

  /**
   * This node const numeric literal values
   */

  Scientific = 1 << 6,

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

export const enum TransformFlags {
  /**
   * This node has no flags.
   */
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

  AnyKeyword = 2,
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
  AssignmentRestElement = 15,
  AssignmentRestProperty = 16,
  AsyncArrowFunction = 17,
  AsyncFunctionDeclaration = 18 | IsFunctionDeclaration | IsAsync | IsBlockScope,
  AsyncFunctionExpression = 19 | IsAsync | IsBlockScope | IsFunctionExpression,
  AsyncGeneratorDeclaration = 20 | IsFunctionDeclaration | IsAsync | IsGenerator | IsBlockScope,
  AsyncGeneratorExpression = 21 | IsAsync | IsGenerator | IsBlockScope | IsFunctionExpression,
  AsyncGeneratorMethod = 22 | IsAsync | IsGenerator | IsBlockScope | IsMethod,
  AsyncMethod = 23 | IsAsync | IsBlockScope | IsMethod,
  AwaitExpression = 24 | IsExpression,
  BigIntKeyword = 25 | IsChildless,
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
  CommaOperator = 54,
  ComputedPropertyName = 55,
  ConditionalExpression = 56 | IsExpression,
  ConditionalType = 57,
  ConstructSignature = 58,
  ConstructorType = 59,
  ContinueStatement = 60 | IsStatement,
  CoverInitializedName = 61,
  DebuggerStatement = 62 | IsChildless | IsStatement,
  DefaultClause = 63,
  DoWhileStatement = 64 | IsStatement,
  ElementAccessChain = 65 | IsExpression,
  ElementAccessExpression = 66 | IsExpression | IsElementOrPropertyAccess | IsLeftHandSideExpression,
  ElementList = 67 | IsExpression,
  Elison = 68 | IsExpression | IsChildless | IsArrayBindingElement,
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
  FalseType = 82,
  FieldDefinition = 83,
  ForBinding = 84,
  ForInStatement = 85 | IsStatement | IsBlockScope,
  ForOfStatement = 86 | IsStatement | IsBlockScope,
  ForStatement = 87 | IsStatement | IsBlockScope,
  FormalParameter = 88,
  FormalParameterList = 89,
  FunctionBody = 90,
  FunctionDeclaration = 91 | IsFunctionDeclaration | IsBlockScope,
  FunctionExpression = 92 | IsExpression | IsBlockScope,
  FunctionStatementList = 92,
  FunctionType = 93,
  GeneratorDeclaration = 94 | IsFunctionDeclaration | IsGenerator | IsBlockScope,
  GeneratorExpression = 95 | IsGenerator | IsBlockScope | IsFunctionExpression,
  GeneratorMethod = 96 | IsGenerator | IsBlockScope | IsMethod,
  HTMLClose = 97,
  HTMLOpen = 98,
  HeritageClause = 99,
  HeritageClauses = 100,
  IdentifierName = 101 | IsIdentifier | IsExpression,
  IdentifierReference = 102 | IsIdentifier | IsExpression,
  IfStatement = 103 | IsStatement,
  ImportCall = 104 | IsExpression | IsLeftHandSideExpression,
  ImportClause = 105,
  ImportDeclaration = 106,
  ImportEqualsDeclaration = 107,
  ImportMeta = 108 | IsChildless,
  ImportSpecifier = 109,
  ImportType = 110,
  ImportsList = 111,
  IndexSignature = 112,
  IndexedAccessType = 113,
  InferType = 114,
  InterfaceDeclaration = 115,
  IntersectionType = 116,
  JsxAttribute = 117,
  JsxAttributesList = 118,
  JsxChildrenList = 119,
  JsxClosingElement = 120 | IsJSXTagName,
  JsxClosingFragment = 121 | IsLeftHandSideExpression,
  JsxElement = 122 | IsExpression | IsLeftHandSideExpression,
  JsxFragment = 123 | IsExpression | IsLeftHandSideExpression,
  JsxIdentifier = 124,
  JsxMemberExpression = 125,
  JsxNamespacedName = 126,
  JsxOpeningElement = 127 | IsJSXTagName,
  JsxOpeningFragment = 128,
  JsxSelfClosingElement = 129 | IsExpression | IsJSXTagName,
  JsxSpreadAttribute = 130,
  JsxTagNamePropertyAccess = 131,
  JsxText = 132,
  LabelIdentifier = 133,
  LabelledIdentifier = 134 | IsIdentifier,
  LabelledStatement = 135 | IsStatement,
  LexicalBinding = 136,
  LexicalDeclaration = 137,
  MappedType = 138,
  MemberAccessChain = 139 | IsExpression,
  MemberExpression = 140 | IsExpression,
  MethodDefinition = 141 | IsExpression | IsBlockScope | IsMethod,
  MethodSignature = 142,
  MinusType = 143,
  MultiLine = 144,
  NamedExports = 145,
  NamedImports = 146,
  NamedTupleMember = 147,
  NeverKeyword = 148,
  NewExpression = 149 | IsExpression | IsLeftHandSideExpression,
  NewTarget = 150 | IsChildless | IsLeftHandSideExpression,
  NonNullExpression = 151 | IsExpression | IsLeftHandSideExpression,
  NullKeyword = 152 | IsChildless,
  NullLiteral = 153 | IsExpression | IsChildless | IsLeftHandSideExpression,
  NumberKeyword = 154,
  NumberLiteral = 155 | IsChildless,
  NumberType = 156,
  NumericLiteral = 157 | IsExpression | IsChildless | IsPropertyNameLiteral | IsLeftHandSideExpression,
  ObjectAssignmentPattern = 158,
  ObjectBindingPattern = 159 | IsBindingPattern,
  ObjectKeyword = 160,
  ObjectLiteral = 161 |
    IsArrayOrObjectLiteral |
    IsObjectLiteralOrClassExpression |
    IsExpression |
    IsLeftHandSideExpression |
    IsAssignmentPattern,
  ObjectTypeMembers = 162,
  OmittedExpression = 163 | IsChildless | IsExpression | IsArrayBindingElement,
  OptionalChain = 164 | IsExpression,
  OptionalExpression = 165 | IsExpression,
  OptionalType = 166,
  ParameterDeclaration = 167,
  Parameters = 168,
  ParenthesizedExpression = 169 | IsExpression | IsLeftHandSideExpression,
  ParenthesizedType = 170,
  PostfixUpdateExpression = 171 | IsExpression,
  PrefixUpdateExpression = 172 | IsExpression,
  PrivateIdentifier = 173 | IsIdentifier,
  PropertyAccessChain = 174 | IsExpression,
  PropertyAccessExpression = 175 | IsExpression | IsElementOrPropertyAccess | IsLeftHandSideExpression,
  PropertyDefinition = 176 | IsExpression,
  PropertyDefinitionList = 177 | IsExpression,
  PropertyName = 178 | IsExpression,
  PropertySignature = 179,
  QualifiedName = 180,
  RegularExpressionLiteral = 182 | IsExpression | IsChildless | IsLeftHandSideExpression,
  RestType = 183,
  ReturnStatement = 184 | IsStatement,
  RootNode = 185 | IsBlockScope,
  Semicolon = 186 | IsChildless,
  SheBang = 187,
  ShorthandProperty = 188,
  SignatureMember = 189,
  SingleLine = 190,
  SingleNameBinding = 191,
  SpreadElement = 192 | IsExpression,
  SpreadProperty = 193 | IsExpression,
  StringKeyword = 194,
  StringLiteral = 195 | IsExpression | IsPropertyNameLiteral | IsLeftHandSideExpression,
  StringType = 196,
  Super = 197 | IsExpression | IsChildless | IsLeftHandSideExpression,
  SwitchStatement = 198 | IsStatement,
  SymbolKeyword = 199,
  TaggedTemplate = 201 | IsExpression | IsLeftHandSideExpression,
  TemplateExpression = 203 | IsExpression | IsLeftHandSideExpression,
  TemplateLiteral = 204 | IsExpression | IsLeftHandSideExpression,
  TemplateSpan = 205 | IsExpression | IsLeftHandSideExpression,
  TemplateTail = 206 | IsChildless | IsExpression | IsLeftHandSideExpression,
  TemplateType = 207,
  ThisExpression = 208 | IsExpression | IsChildless | IsLeftHandSideExpression,
  ThisType = 209 | IsChildless,
  ThrowStatement = 210 | IsStatement,
  TrueType = 211,
  TryStatement = 212 | IsStatement,
  TupleType = 213,
  TypeAliasDeclaration = 214,
  TypeAnnotation = 215,
  TypeArguments = 216,
  TypeAssertion = 217,
  TypeAssertionExpression = 218 | IsExpression,
  TypeLiteral = 219,
  TypeOperator = 220,
  TypeParameter = 221,
  TypeParameterList = 222,
  TypePredicate = 223,
  TypeQuery = 224,
  TypeReference = 225,
  TypeofKeyword = 226,
  UnaryExpression = 227 | IsExpression,
  UndefinedKeyword = 228,
  UnionType = 229,
  UnknownKeyword = 230,
  VariableDeclaration = 231,
  VariableDeclarationList = 232,
  VariableStatement = 233 | IsStatement,
  VoidKeyword = 234,
  WhileStatement = 235 | IsStatement,
  WithStatement = 236 | IsStatement,
  YieldExpression = 237 | IsExpression,
  BigIntLiteral = 238 | IsExpression | IsLeftHandSideExpression,
  Script = 239,
  Module = 240,
  ModuleBody = 241,
  ScriptBody = 242,
  Decorator = 243,
  DecoratorList = 244,
  AbstractConstructorType = 245,
  IntrinsicKeyword = 246,

  // unique
  UniqueIdentifier = 247 | IsIdentifier,
  // internal
  PrologueDirective = 248,
  ImplementClauses = 249,
  ImplementClause = 250,

  PrivateModifier = 251 | IsChildless,
  ProtectedModifier = 252 | IsChildless,
  PublicModifier = 253 | IsChildless
}
