# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: lhs pow
> :: case: async async => ok
## Input

`````js
async async => ok ** x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "original": "async",
                            "text": "async",
                            "rawText": " async",
                            "flags": 96,
                            "start": 5,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 0,
                        "end": 11
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "original": "ok",
                        "text": "ok",
                        "rawText": " ok",
                        "flags": 96,
                        "start": 14,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 64,
                        "start": 17,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "x",
                        "text": "x",
                        "rawText": " x",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 22
                },
                "flags": 288,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async async => ok ** x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

