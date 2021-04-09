# Kataw parser test case

## Input

`````js
result = { x: arrow = () => {} } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "arrow",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 537067531,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 10,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 271,
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 21,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 36,
                            "end": 36
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 34,
                        "end": 37
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 37
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "result = { x: arrow = () => {} } = {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

