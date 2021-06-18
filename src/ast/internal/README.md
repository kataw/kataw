### DummyIdentifier

```js
interface DummyIdentifier <: SyntaxNode {
  kind: NodeKind.DummyIdentifier;
  text: string;
}
```

This node is a placeholder for other CST nodes in recovery mode.

### UniqueIdentifier

```js
interface UniqueIdentifier <: SyntaxNode {
  kind: NodeKind.UniqueIdentifier;
  uniqueFlags: UniqueIdentifierFlags;
  uniqueId: number;
}
```
