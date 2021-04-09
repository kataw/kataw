# Kataw parser test case

## Input

`````js
x({set [foo](b){}, set [bar](d){}});
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 8,
                                                "end": 11
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
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
                                                        "value": "b",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 13,
                                                        "end": 14
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 13,
                                                    "end": 14
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "autofix": 0,
                                        "flags": 4352,
                                        "start": 12,
                                        "end": 17
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 22,
                                            "end": 28
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
                                                        "value": "d",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 29,
                                                        "end": 30
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 29,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 32,
                                                "end": 32
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "autofix": 0,
                                        "flags": 4352,
                                        "start": 28,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 33
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 34
                },
                "flags": 256,
                "start": 0,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "x({set [foo](b){}, set [bar](d){}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

