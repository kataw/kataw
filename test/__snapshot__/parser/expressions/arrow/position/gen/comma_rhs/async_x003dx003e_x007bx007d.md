# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: async => {}
## Input

`````js
a, async => {}
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "original": "a",
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 8,
                            "end": 11
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
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 8
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 2,
                                "end": 8
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 2,
                            "end": 8
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 14
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "a, async => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

