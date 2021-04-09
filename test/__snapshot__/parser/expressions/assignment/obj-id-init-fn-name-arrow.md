# Kataw parser test case

## Input

`````js
result = { arrow = () => {} } = {}
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 81921,
                                        "value": "arrow",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 16
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
                                                "start": 26,
                                                "end": 26
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 27
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 29,
                        "end": 31
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
                            "start": 33,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 31,
                        "end": 34
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "result = { arrow = () => {} } = {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

