# Kataw parser test case

## Input

`````js
async () => new await x()
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 11,
                    "end": 15
                },
                "expression": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82032,
                        "flags": 0,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 268435488,
                        "start": 21,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "argumentList": null,
                "flags": 32,
                "start": 11,
                "end": 25
            },
            "flags": 288,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "async () => new await x()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 25, end: 25

```

