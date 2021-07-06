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
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 201,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "cls",
                                                "rawText": "cls",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 9
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 189,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 17
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
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 19
                                                    },
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 20
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 20
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "xCls",
                                                "rawText": "xCls",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 189,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 34
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "X",
                                                    "rawText": "X",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "flags": 36,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 39
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 39
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 39
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "xCls2",
                                                "rawText": "xCls2",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 46
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 189,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 54
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
                                                                    "transformFlags": 0,
                                                                    "start": 56,
                                                                    "end": 63
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
                                                                        "transformFlags": 0,
                                                                        "start": 63,
                                                                        "end": 68
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 69,
                                                                        "end": 70
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 72,
                                                                            "end": 72
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 70,
                                                                        "end": 73
                                                                    },
                                                                    "flags": 0,
                                                                    "transformFlags": 0,
                                                                    "start": 68,
                                                                    "end": 73
                                                                },
                                                                "flags": 0,
                                                                "transformFlags": 0,
                                                                "start": 63,
                                                                "end": 73
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 56,
                                                        "end": 73
                                                    },
                                                    "flags": 54,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 75
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 75
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 75
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 75
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 76
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 77
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 77,
                        "end": 80
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 82
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 83
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 83
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 83
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "f = ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 77, end: 80

```

