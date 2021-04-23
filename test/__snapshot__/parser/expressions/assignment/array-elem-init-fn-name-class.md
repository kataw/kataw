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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 6,
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
                                        "kind": 134299649,
                                        "text": "xCls",
                                        "rawText": "xCls",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 768,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
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
                                    "flags": 256,
                                    "start": 10,
                                    "end": 28
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "cls",
                                        "rawText": "cls",
                                        "flags": 768,
                                        "start": 29,
                                        "end": 33
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 768,
                                            "start": 35,
                                            "end": 41
                                        },
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
                                    "flags": 256,
                                    "start": 29,
                                    "end": 44
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "xCls2",
                                        "rawText": "xCls2",
                                        "flags": 768,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "right": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 768,
                                            "start": 53,
                                            "end": 59
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
                                                        "start": 61,
                                                        "end": 68
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
                                                            "start": 68,
                                                            "end": 73
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "start": 74,
                                                            "end": 75
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
                                                                "start": 77,
                                                                "end": 77
                                                            },
                                                            "flags": 256,
                                                            "start": 75,
                                                            "end": 78
                                                        },
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
                                    "flags": 256,
                                    "start": 45,
                                    "end": 80
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 10,
                            "end": 80
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 82
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 82,
                        "end": 84
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 768,
                        "start": 84,
                        "end": 89
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 89
                },
                "flags": 256,
                "start": 0,
                "end": 89
            },
            "flags": 128,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "text": "result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;",
    "fileName": "__root__",
    "flags": 0,
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

