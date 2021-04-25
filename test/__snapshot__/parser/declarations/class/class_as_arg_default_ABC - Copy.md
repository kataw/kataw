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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 77,
                        "end": 80
                    },
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
                                            "kind": 134299649,
                                            "text": "cls",
                                            "rawText": "cls",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 768,
                                                "start": 11,
                                                "end": 17
                                            },
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
                                        "flags": 256,
                                        "start": 6,
                                        "end": 20
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "xCls",
                                            "rawText": "xCls",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 26
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 768,
                                                "start": 28,
                                                "end": 34
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "X",
                                                "rawText": "X",
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
                                        "flags": 256,
                                        "start": 21,
                                        "end": 39
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "xCls2",
                                            "rawText": "xCls2",
                                            "flags": 768,
                                            "start": 40,
                                            "end": 46
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 46,
                                            "end": 48
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 768,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [
                                                    {
                                                        "kind": 278,
                                                        "declareToken": null,
                                                        "decorators": null,
                                                        "staticKeyword": {
                                                            "kind": 8388716,
                                                            "flags": 768,
                                                            "start": 56,
                                                            "end": 63
                                                        },
                                                        "asyncKeyword": null,
                                                        "setKeyword": null,
                                                        "getKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "name",
                                                                "rawText": "name",
                                                                "flags": 768,
                                                                "start": 63,
                                                                "end": 68
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 69,
                                                                "end": 70
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 72,
                                                                    "end": 72
                                                                },
                                                                "flags": 256,
                                                                "start": 70,
                                                                "end": 73
                                                            },
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
                                        "flags": 256,
                                        "start": 40,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 6,
                                "end": 75
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 76
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 82,
                            "end": 82
                        },
                        "flags": 256,
                        "start": 80,
                        "end": 83
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 83
                },
                "flags": 256,
                "start": 0,
                "end": 83
            },
            "flags": 128,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "f = ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left hand side of the arrow is not destructible  - start: 77, end: 80

```

