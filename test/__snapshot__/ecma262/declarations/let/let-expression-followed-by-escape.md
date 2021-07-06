# Kataw parser test case

## Input

`````js
1 + let
\u0275ResourceLoaderImpl_BaseFactory
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 7
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "ɵResourceLoaderImpl_BaseFactory",
                "rawText": "\\u0275ResourceLoaderImpl_BaseFactory",
                "flags": 16481,
                "transformFlags": 0,
                "start": 7,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "1 + let\n\\u0275ResourceLoaderImpl_BaseFactory",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
1 + let;
\u0275ResourceLoaderImpl_BaseFactory;

```

### Diagnostics

```javascript
✔ No errors
```

