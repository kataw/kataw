# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: async => {}
## Input

`````js
delete (async => {})
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 13,
                            "end": 16
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 13
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 8,
                                "end": 13
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 8,
                            "end": 13
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "delete (async => {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

