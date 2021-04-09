# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "asyncToken": {
                                                    "kind": 82031,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 81921,
                                                    "value": "g",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 57
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "statements": [
                                                            {
                                                                "kind": 162,
                                                                "binding": {
                                                                    "kind": 151,
                                                                    "bindingList": [
                                                                        {
                                                                            "kind": 190,
                                                                            "binding": {
                                                                                "kind": 81921,
                                                                                "value": "x",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 177,
                                                                                "asyncToken": {
                                                                                    "kind": 82031,
                                                                                    "autofix": 0,
                                                                                    "flags": 0,
                                                                                    "start": 65,
                                                                                    "end": 71
                                                                                },
                                                                                "generatorToken": null,
                                                                                "name": {
                                                                                    "kind": 81921,
                                                                                    "value": "f",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 80,
                                                                                    "end": 82
                                                                                },
                                                                                "formalParameters": {
                                                                                    "kind": 214,
                                                                                    "formalParameterList": [
                                                                                        {
                                                                                            "kind": 215,
                                                                                            "ellipsisToken": null,
                                                                                            "binding": {
                                                                                                "kind": 81921,
                                                                                                "value": "foo",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 83,
                                                                                                "end": 86
                                                                                            },
                                                                                            "optionalToken": null,
                                                                                            "type": null,
                                                                                            "initializer": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 81921,
                                                                                                            "value": "h",
                                                                                                            "autofix": 0,
                                                                                                            "flags": 768,
                                                                                                            "start": 90,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        {
                                                                                                            "kind": 220,
                                                                                                            "propertyList": {
                                                                                                                "kind": 218,
                                                                                                                "properties": [
                                                                                                                    {
                                                                                                                        "kind": 219,
                                                                                                                        "left": {
                                                                                                                            "kind": 131,
                                                                                                                            "expression": {
                                                                                                                                "kind": 81921,
                                                                                                                                "value": "t",
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 768,
                                                                                                                                "start": 96,
                                                                                                                                "end": 98
                                                                                                                            },
                                                                                                                            "argumentList": {
                                                                                                                                "kind": 256,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 208,
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 81921,
                                                                                                                                            "value": "bar",
                                                                                                                                            "autofix": 0,
                                                                                                                                            "flags": 768,
                                                                                                                                            "start": 104,
                                                                                                                                            "end": 108
                                                                                                                                        },
                                                                                                                                        "autofix": 0,
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 99,
                                                                                                                                        "end": 108
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 256,
                                                                                                                                "start": 99,
                                                                                                                                "end": 108
                                                                                                                            },
                                                                                                                            "flags": 256,
                                                                                                                            "start": 94,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 81921,
                                                                                                                            "value": "m",
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 768,
                                                                                                                            "start": 94,
                                                                                                                            "end": 95
                                                                                                                        },
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 94,
                                                                                                                        "end": 109
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 0,
                                                                                                                "start": 94,
                                                                                                                "end": 109
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 92,
                                                                                                            "end": 110
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 90,
                                                                                                    "end": 110
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 88,
                                                                                                "end": 111
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 83,
                                                                                            "end": 111
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 83,
                                                                                    "end": 112
                                                                                },
                                                                                "contents": {
                                                                                    "kind": 216,
                                                                                    "functionStatementList": {
                                                                                        "kind": 217,
                                                                                        "statements": [],
                                                                                        "multiline": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 113,
                                                                                        "end": 113
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 112,
                                                                                    "end": 114
                                                                                },
                                                                                "typeParameters": null,
                                                                                "returnType": null,
                                                                                "autofix": 0,
                                                                                "flags": 1280,
                                                                                "start": 65,
                                                                                "end": 114
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 61,
                                                                            "end": 114
                                                                        }
                                                                    ],
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 61,
                                                                    "end": 114
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 58,
                                                                "end": 114
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 58,
                                                        "end": 114
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 119
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 119
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 119
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 121
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 121
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 122
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 122
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 122
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 123
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 123
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });
`````
```

