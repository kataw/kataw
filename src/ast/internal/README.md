### PrologueDirective

```js
interface PrologueDirective <: Expression {
  kind: NodeKind.PrologueDirective;
  expression: StringLiteral;
}
```

### UniqueIdentifier

```js
interface UniqueIdentifier <: Expression {
  kind: NodeKind.UniqueIdentifier;
  uniqueFlags: UniqueIdentifierFlags;
  uniqueId: number;
}
```

This node is `unique` and used to create generated identifier names.
