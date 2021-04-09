# Kataw parser test case

## Input

`````js
result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;
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
                    "kind": 336003091,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "xCls",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 37814352,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 10,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 189,
                                        "name": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "members": {
                                            "kind": 277,
                                            "elements": [],
                                            "flags": 256,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "flags": 256,
                                        "start": 17,
                                        "end": 28
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 28
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "cls",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 29,
                                        "end": 33
                                    },
                                    "operatorToken": {
                                        "kind": 37814352,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 189,
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "members": {
                                            "kind": 277,
                                            "elements": [],
                                            "flags": 256,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 35,
                                        "end": 44
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 29,
                                    "end": 44
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "xCls2",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "operatorToken": {
                                        "kind": 37814352,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 45,
                                        "end": 53
                                    },
                                    "right": {
                                        "kind": 189,
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "members": {
                                            "kind": 277,
                                            "elements": [
                                                {
                                                    "kind": 278,
                                                    "staticToken": {
                                                        "kind": 8388716,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 61,
                                                        "end": 68
                                                    },
                                                    "method": {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 81921,
                                                            "value": "name",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 68,
                                                            "end": 73
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 74,
                                                            "end": 75
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
                                                                "start": 77,
                                                                "end": 77
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 75,
                                                            "end": 78
                                                        },
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 73,
                                                        "end": 78
                                                    },
                                                    "flags": 256,
                                                    "start": 68,
                                                    "end": 78
                                                }
                                            ],
                                            "flags": 256,
                                            "start": 61,
                                            "end": 80
                                        },
                                        "flags": 256,
                                        "start": 53,
                                        "end": 80
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 80
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 80
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 82
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 82,
                        "end": 84
                    },
                    "right": {
                        "kind": 81921,
                        "value": "vals",
                        "autofix": 0,
                        "flags": 768,
                        "start": 84,
                        "end": 89
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 89
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "text": "result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 82,
            "end": 84
        }
    ],
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

