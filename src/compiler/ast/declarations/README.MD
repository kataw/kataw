# Declaration

```js
interface Declaration <: Node { }
```

## AsyncGeneratorDeclaration

```js
interface AsyncGeneratorDeclaration <: Declaration {
    kind: NodeKind.AsyncGeneratorDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    isDeclared: boolean;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## AsyncFunctionDeclaration

```js
interface AsyncFunctionDeclaration <: Declaration {
    kind: NodeKind.AsyncFunctionDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    isDeclared: boolean;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## GeneratorDeclaration

```js
interface GeneratorDeclaration <: Declaration {
    kind: NodeKind.GeneratorDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    isDeclared: boolean;
    isAbstract: boolean;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## FunctionDeclaration

```js
interface FunctionDeclaration <: Declaration {
    kind: NodeKind.FunctionDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    isDeclared: boolean;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## ClassDeclaration

```js
interface ClassDeclaration <: Declaration {
    kind: NodeKind.ClassDeclaration;
    name: BindingIdentifier | null;
    typeParameters: TypeParameters;
    classHeritage: Expression | null;
    classElementList: ClassElementList;
    isDeclared: boolean;
}
```

## AbstractClassDeclaration

```js
interface AbstractClassDeclaration <: Declaration {
    kind: NodeKind.AbstractClassDeclaration;
    name: BindingIdentifier | null;
    typeParameters: TypeParameters;
    classHeritage: Expression | null;
    classElementList: ClassElementList;
    isDeclared: boolean;
}
```

## LexicalDeclaration

```js
interface LexicalDeclaration <: Declaration {
    kind: NodeKind.LexicalDeclaration;
    bindingList: BindingList;
    isConst: boolean;
    isDeclared: boolean,
}
```
`isConst` should be set to `true` for lexical `const` declarations
