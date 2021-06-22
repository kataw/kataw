# Kataw parser test case

## Input

`````js
result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
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
                                        "flags": 96,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 303,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 25,
                                            "start": 32,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 28
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "cls",
                                        "rawText": "cls",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 33
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 303,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 41,
                                            "start": 32,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 44
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "xCls2",
                                        "rawText": "xCls2",
                                        "flags": 96,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "right": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "start": 53,
                                            "end": 59
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 303,
                                                "elements": [
                                                    {
                                                        "kind": 278,
                                                        "declareToken": null,
                                                        "decorators": null,
                                                        "staticKeyword": {
                                                            "kind": 8388716,
                                                            "flags": 64,
                                                            "start": 61,
                                                            "end": 68
                                                        },
                                                        "asyncKeyword": null,
                                                        "setKeyword": null,
                                                        "getKeyword": null,
                                                        "asteriskToken": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "name",
                                                                "rawText": "name",
                                                                "flags": 96,
                                                                "start": 68,
                                                                "end": 73
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 74,
                                                                "end": 75
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 77,
                                                                    "end": 77
                                                                },
                                                                "flags": 32,
                                                                "start": 75,
                                                                "end": 78
                                                            },
                                                            "flags": 0,
                                                            "start": 73,
                                                            "end": 78
                                                        },
                                                        "flags": 0,
                                                        "start": 68,
                                                        "end": 78
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 61,
                                                "end": 78
                                            },
                                            "flags": 59,
                                            "start": 32,
                                            "end": 80
                                        },
                                        "flags": 32,
                                        "start": 53,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 80
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 80
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 82
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 82,
                        "end": 84
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "start": 84,
                        "end": 89
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 89
                },
                "flags": 32,
                "start": 0,
                "end": 89
            },
            "flags": 16,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 82, end: 84

```

