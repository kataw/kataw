# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: obj tail
> :: case: async => {}
## Input

`````js
x = {arrow: async => {}}.y
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 17,
                                            "end": 20
                                        },
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "asyncToken": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 22,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 23
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "arrow",
                                        "rawText": "arrow",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 5,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 24
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "x = {arrow: async => {}}.y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

