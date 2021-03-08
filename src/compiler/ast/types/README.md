# Typescript

```js
interface TypeNode <: Node { }
```

### AnyKeyword

```js
interface AnyKeyword <: TypeNode {
  kind: NodeKind.AnyKeyword;
}
```

### ArrayType

```js
interface ArrayType <: TypeNode {
  kind: NodeKind.ArrayType;
  elementType: TypeNode;
}
```

### BigIntKeyword

```js
interface BigIntKeyword <: TypeNode {
  kind: NodeKind.BigIntKeyword;
}
```

### BigIntType

```js
interface BigIntType <: TypeNode {
  kind: NodeKind.BigIntType;
  text: string;
  rawText: string;
}
```

### BooleanKeyword

```js
interface BooleanKeyword <: TypeNode {
  kind: NodeKind.BooleanKeyword;
}
```

### ConditionalType

```js
interface ConditionalType <: TypeNode {
  kind: NodeKind.ConditionalType;
  checkType: TypeNode;
  extendsType: TypeNode;
  trueType: TypeNode;
  falseType: TypeNode;
}
```

### ConstructSignatureDeclaration

```js
interface ConstructSignatureDeclaration  <: TypeNode {
  kind: NodeKind.ConstructSignatureDeclaration;
  typeParameters: TypeParameters;
  accessModifiers: AccessModifiers;
  parameters: Parameters;
  returnType: TypeNode | null;
}
```

### ConstructorType

```js
interface ConstructorType <: TypeNode {
  kind: NodeKind.ConstructorType;
  accessModifiers: AccessModifiers;
  typeParameters: TypeParameters;
  parameters: Parameters;
  returnType: TypeNode | null;
}
```

### AbstractConstructorType

```js
interface AbstractConstructorType <: TypeNode {
  kind: NodeKind.AbstractConstructorType;
  accessModifiers: AccessModifiers;
  typeParameters: TypeParameters;
  parameters: Parameters;
  returnType: TypeNode | null;
}
```

### EnumDeclaration

```js
interface EnumDeclaration <: TypeNode {
  kind: NodeKind.EnumDeclaration;
  name: IdentifierReference;
  members: EnumMembersList;
  isConst: boolean;
}
```

### EnumMember

```js
interface EnumMember <: TypeNode {
  kind: NodeKind.EnumMember;
  name: PropertyName;
  initializer: Expression | null;
  parent: EnumMembersList | null;
}
```

### EnumMembersList

```js
interface EnumMembersList <: TypeNode {
  kind: NodeKind.EnumMembersList;
  enumMembersList: [ EnumMember ];
}
```

### FalseType

```js
interface FalseType <: TypeNode {
  kind: NodeKind.FalseType;
   value: string;
  rawValue: string;
}
```

### FunctionType

```js
interface FunctionType <: TypeNode {
  kind: NodeKind.FunctionType;
  typeParameters: TypeParameters;
  parameters: Parameters;
  returnType: TypeNode | null;
}
```

### HeritageClause

```js
interface HeritageClause <: TypeNode {
  kind: NodeKind.HeritageClause;
  type: TypeNode;
}
```

### HeritageClauses

```js
interface HeritageClauses <: TypeNode {
 kind: NodeKind.HeritageClauses;
 clauses: [ HeritageClause ];
}
```

### ImplementClause

```js
interface ImplementClause <: TypeNode {
  kind: NodeKind.ImplementClause;
  type: TypeNode;
}
```

### ImplementClauses

```js
interface ImplementClauses <: TypeNode {
 kind: NodeKind.ImplementClauses;
 clauses: [ HeritageClause ];
}
```

### ImportType

```js
interface ImportType <: TypeNode {
  kind: NodeKind.ImportType;
  isTypeOf: boolean;
  argument: TypeNode;
  qualifier: IdentifierReference | QualifiedName | null;
  typeArguments: TypeArguments | null;
}
```

### IndexSignature

```js
interface IndexSignature <: TypeNode {
  kind: NodeKind.IndexSignature;
  parameters: Parameters;
  type: TypeNode | null;
  isReadOnly: boolean;
  accessModifiers: AccessModifiers;
}
```

### IndexedAccessType

```js
interface IndexedAccessType <: TypeNode {
  kind: NodeKind.IndexedAccessType;
  objectType: TypeNode;
  indexType: TypeNode;
}
```

### InferType

```js
interface InferType <: TypeNode {
  kind: NodeKind.InferType;
  typeParameter: TypeParameter;
}
```

### InterfaceDeclaration

```js
interface InterfaceDeclaration <: TypeNode {
  kind: NodeKind.InterfaceDeclaration;
  name: string | IdentifierReference;
  typeParameters: TypeParameters;
  heritageClauses: HeritageClauses | null;
  objectTypeMembers: ObjectTypeMembers;
  isDeclared: boolean;
  isExported: boolean;
}
```

### IntersectionType

```js
interface IntersectionType <: TypeNode {
  kind: NodeKind.IntersectionType;
  types: [ TypeNode ];
}
```

### MappedType

```js
interface MappedType <: TypeNode {
  kind: NodeKind.MappedType;
  typeParameter: TypeParameter;
  nameType: TypeNode | null;
  isReadOnly: boolean;
  plus: boolean;
  minus: boolean;
  isOptional: boolean;
  type: TypeNode | null;
}
```

### MethodSignature

```js
interface MethodSignature <: TypeNode {
  kind: NodeKind.MethodSignature;
  name: PropertyName;
  isOptional: boolean;
  isReadOnly: boolean;
  accessModifiers: AccessModifiers;
  typeParameters: TypeParameters;
  parameters: Parameters;
  returnType: TypeNode | null;
}
```

### MinusType

```js
interface MinusType <: TypeNode {
  kind: NodeKind.MinusType;
  expression: UnaryExpression;
}
```

### NamedTupleMember

```js
interface NamedTupleMember <: TypeNode {
  kind: NodeKind.NamedTupleMember;
  ellipsis: boolean;
  name: IdentifierReference;
  isOptional: boolean;
  type: TypeNode;
}
```

### NeverKeyword

```js
interface  NeverKeyword <: TypeNode {
  kind: NodeKind.NeverKeyword;
}
```

### NullKeyword

```js
interface NullKeyword <: TypeNode {
  kind: NodeKind.NullKeyword;
}
```

### NumberKeyword

```js
interface NumberKeyword <: TypeNode {
  kind: NodeKind.NumberKeyword;
}
```

### NumberType

```js
interface NumberType <: TypeNode {
  kind: NodeKind.NumberType;
  text: string;
  rawText: string;
}

```

### ObjectKeyword

```js
interface ObjectKeyword <: TypeNode {
  kind: NodeKind.ObjectKeyword;
}
```

### ObjectTypeMembers

```js
interface ObjectTypeMembers <: TypeNode {
  kind: NodeKind.ObjectTypeMembers;
  members: [ CallSignatureDeclaration | ConstructSignatureDeclaration | PropertySignature | IndexSignature ];
}
```

### OptionalType

```js
interface OptionalType <: TypeNode {
  kind: NodeKind.OptionalType;
  valueType: TypeNode;
}
```

### ParameterDeclaration

```js
interface ParameterDeclaration  <: TypeNode {
  kind: NodeKind.ParameterDeclaration;
  ellipsis: boolean;
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  isOptional: boolean;
  isReadOnly: boolean;
  type: TypeNode | null;
  initializer: AssignmentExpression | null;
  accessModifiers: AccessModifiers;
}
```


### Parameters

```js
interface Parameters <: TypeNode {
  kind: NodeKind.Parameters;
  parameterList: [ ParameterDeclaration ];
}
```

### ParenthesizedType

```js
interface ParenthesizedType <: TypeNode {
  kind: NodeKind.ParenthesizedType;
  type: TypeNode;
}
```

### PropertySignature

```js
interface PropertySignature <: TypeNode {
  kind: NodeKind.PropertySignature;
  name: PropertyName;
  isOptional: boolean;
  type: TypeNode | null;
  isReadOnly: boolean;
  accessModifiers: AccessModifiers;
  initializer: Expression | null;
}
```

### QualifiedName

```js
interface QualifiedName <: TypeNode {
  kind: NodeKind.QualifiedName;
  left: IdentifierReference | IdentifierName | QualifiedName;
  right: IdentifierName;
}
```

### RestType

```js
interface RestType <: TypeNode {
  kind: NodeKind.RestType;
  type: TypeNode;
}
```

 ### StringKeyword

```js
interface StringKeyword <: TypeNode {
  kind: NodeKind.StringKeyword;
}
```

### StringType

```js
interface StringType <: TypeNode {
  kind: NodeKind.StringType;
  text: string;
  rawText: string;
}
```

### SymbolKeyword

```js
interface SymbolKeyword <: TypeNode {
  kind: NodeKind.SymbolKeyword;
}
```

### TemplateType

```js
interface TemplateType <: TypeNode {
  kind: NodeKind.TemplateType;
  spans: TemplateTypeSpan[];
  tail: TemplateTail;
}
```

### TemplateTypeSpan

```js
interface TemplateTypeSpan <: TypeNode {
  kind: NodeKind.TemplateTypeSpan;
  type: TypeNode,
  rawText: string,
  text: string,
}
```

### ThisType

```js
interface ThisType <: TypeNode {
  kind: NodeKind.ThisType;
}
```

### TrueType

```js
interface TrueType <: TypeNode {
  kind: NodeKind.TrueType;
  text: string;
  rawText: string;
}
```

### TupleType

```js
interface TupleType <: TypeNode {
  kind: NodeKind.TupleType;
  elementTypes: [ TypeNode ];
}
```

### TypeAliasDeclaration

```js
interface TypeAliasDeclaration <: TypeNode {
  kind: NodeKind.TypeAliasDeclaration;
  name: IdentifierReference;
  type: TypeNode;
  typeParameters: TypeParameters;
  isDeclared: boolean;
  isExported: boolean;
}
```

### TypeArguments

```js
interface TypeArguments <: TypeNode {
  kind: NodeKind.TypeArguments;
  typeArgumentsList: [ TypeNode ];
}
```

### TypeAssertion

```js
interface TypeAssertion <: TypeNode {
  kind: NodeKind.TypeAssertion;
  type: TypeNode;
  expression: UnaryExpression;
}
```

### TypeLiteral

```js
interface TypeLiteral <: TypeNode {
  kind: NodeKind.TypeLiteral;
  objectTypeMembers: ObjectTypeMembers;
}
```


### TypeOperator

```js
interface TypeOperator <: TypeNode {
  kind: NodeKind.TypeOperator;
  operator: TypeOperators;
  type: TypeNode | null;
}
```

### TypeParameters

```js
interface TypeParameters <: TypeNode {
  kind: NodeKind.TypeParameters;
  typeParameterList: [ TypeParameter ];
}
```

### TypeParameter

```js
interface TypeParameter <: TypeNode {
  kind: NodeKind.TypeParameter;
  name: string | IdentifierReference;
  constraint: TypeNode | null;
  defaultType: TypeNode | null;
}
```

### TypePredicate

```js
interface TypePredicate <: TypeNode {
  kind: NodeKind.TypePredicate;
  asserts: boolean;
  parameterName: IdentifierReference | ThisType;
  type: TypeNode | null;
}
```


### TypeQuery

```js
interface TypeQuery <: TypeNode {
  kind: NodeKind.TypeQuery;
  exprName: IdentifierReference | QualifiedName;
}
```

### TypeReference

```js
interface TypeReference <: TypeNode {
  kind: NodeKind.TypeReference;
  typeName: IdentifierReference | string | QualifiedName;
  typeArguments: TypeArguments;
}
```

### UndefinedKeyword

```js
interface UndefinedKeyword <: TypeNode {
  kind: NodeKind.UndefinedKeyword;
}
```


### UnionType

```js
interface UnionType <: TypeNode {
  kind: NodeKind.UnionType;
}
```

### UnknownKeyword

```js
interface UnknownKeyword <: TypeNode {
  kind: NodeKind.UnknownKeyword;
}
```

### VoidKeyword

```js
interface VoidKeyword <: TypeNode {
  kind: NodeKind. VoidKeyword;
}
```

### AccessModifier


```js
interface AccessModifier <: TypeNode {
  kind: NodeKind.Private | NodeKind.Public | NodeKind.Protected;
}
```

The `kind` should be either `Protected`, `Private` or `Public`.


