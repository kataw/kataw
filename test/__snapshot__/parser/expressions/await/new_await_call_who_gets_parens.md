# Kataw parser test case

## Input

`````js
async () => new await x()
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 768,
                    "start": 11,
                    "end": 15
                },
                "expression": {
                    "kind": 208,
                    "awaitToken": {
                        "kind": 82032,
                        "flags": 768,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 21,
                            "end": 23
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 256,
                        "start": 21,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 25
                },
                "argumentList": null,
                "flags": 256,
                "start": 11,
                "end": 25
            },
            "flags": 2304,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "async () => new await x()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 25, end: 25

```

