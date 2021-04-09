# Kataw parser test case

## Input

`````js
x = { method(test: string): number { } };
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
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "test",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 16619,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 18,
                                                    "end": 25
                                                },
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 25
                                            },
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 13,
                                    "end": 26
                                },
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 16617,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 27,
                                        "end": 34
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 34
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 36,
                                        "end": 36
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 38
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 12,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 38
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 40
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 40
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "x = { method(test: string): number { } };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

