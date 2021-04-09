# Kataw parser test case

## Input

`````js
f = ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) => {}
`````

## Options

### Parser Options

`````js
{}
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
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "cls",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 19,
                                                "end": 20
                                            },
                                            "flags": 256,
                                            "start": 11,
                                            "end": 20
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 20
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "xCls",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 26
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "X",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 34,
                                                "end": 36
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 38,
                                                "end": 39
                                            },
                                            "flags": 256,
                                            "start": 28,
                                            "end": 39
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 39
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "xCls2",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 40,
                                            "end": 46
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 40,
                                            "end": 48
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [
                                                    {
                                                        "kind": 278,
                                                        "decorators": null,
                                                        "staticToken": {
                                                            "kind": 8388716,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 56,
                                                            "end": 63
                                                        },
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "name",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 63,
                                                                "end": 68
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 69,
                                                                "end": 70
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
                                                                    "start": 72,
                                                                    "end": 72
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 70,
                                                                "end": 73
                                                            },
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 68,
                                                            "end": 73
                                                        },
                                                        "flags": 256,
                                                        "start": 63,
                                                        "end": 73
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 56,
                                                "end": 75
                                            },
                                            "flags": 256,
                                            "start": 48,
                                            "end": 75
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 40,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 75
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 76
                        }
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 82,
                            "end": 82
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 80,
                        "end": 83
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 83
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "f = ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 77,
            "end": 80
        }
    ],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

