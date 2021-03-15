# JSX

```js
interface jsx <: Node { }
```

## JsxAttributesList

```js
interface JsxAttributesList <: jsx {
  kind: NodeKind.JsxAttributesList;
  attributes: [ JsxSpreadAttribute | JsxAttribute ];
}
```

## JsxAttribute

```js
interface JsxAttribute <: jsx {
  kind: NodeKind.JsxAttribute;
  name: JsxIdentifier | JsxNamespacedName;
  initializer: StringLiteral | JsxMemberExpression | JsxFragment | JsxElement | JsxSelfClosingElement | null;
}
```

## JsxChildrenList

```js
interface JsxChildrenList <: jsx {
  kind: NodeKind.JsxChildrenList;
  attributes: [ JsxText | JsxMemberExpression | JsxElement | JsxSelfClosingElement | JsxFragment ];
}
```

## JsxClosingElement

```js
interface JsxClosingElement <: jsx {
  kind: NodeKind.JsxClosingElement;
  attributes: [ ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess ];
}
```

## JsxClosingFragment

```js
interface JsxClosingFragment <: jsx {
  kind: NodeKind.JsxClosingFragment;
}
```

## JsxElement

```js
interface JsxElement <: jsx {
  kind: NodeKind.JsxElement;
  openingElement: JsxOpeningElement;
  childrenList: JsxChildrenList;
  closingElement: JsxClosingElement;
}
```

## JsxFragment

```js
interface JsxFragment <: jsx {
  kind: NodeKind.JsxFragment;
  openingFragment: JsxOpeningFragment;
  childrenList: JsxChildrenList;
  closingFragment: JsxClosingFragment;
}
```

## JsxIdentifier

```js
interface JsxIdentifier <: jsx {
  kind: NodeKind.JsxIdentifier;
  text: string;
}
```

## JsxMemberExpression

```js
interface JsxMemberExpression <: jsx {
  kind: NodeKind.JsxMemberExpression;
  ellipsis: boolean;
  expression: Expression | null;
}
```

## JsxNamespacedName

```js
interface JsxNamespacedName <: jsx {
  kind: NodeKind.JsxNamespacedName;
  name: JsxIdentifier;
  namespace: JsxIdentifier;
}
```

## JsxOpeningElement

```js
interface JsxOpeningElement <: jsx {
  kind: NodeKind.JsxOpeningElement;
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
  attributesList: JsxAttributesList;
  typeParameters: TypeParameters;
}
```

## JsxOpeningFragment

```js
interface JsxOpeningFragment <: jsx {
  kind: NodeKind.JsxOpeningFragment;
}
```

## JsxSelfClosingElement

```js
interface JsxSelfClosingElement <: jsx {
  kind: NodeKind.JsxSelfClosingElement;
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
  attributesList: JsxAttributesList;
  typeArguments: TypeArguments;
}
```

## JsxSpreadAttribute

```js
interface JsxSpreadAttribute <: jsx {
  kind: NodeKind.JsxSpreadAttribute;
  expression: Expression;
}
```

## JsxTagNamePropertyAccess

```js
interface JsxTagNamePropertyAccess <: jsx {
  kind: NodeKind.JsxTagNamePropertyAccess;
  member: Expression;
  expression: Expression | JsxIdentifier | ThisExpression;
}
```

## JsxText

```js
interface JsxText <: jsx {
  kind: NodeKind.JsxText;
  text: string;
}
```
