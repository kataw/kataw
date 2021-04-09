# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                "start": 20,
                                "end": 26
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "g",
                                "autofix": 0,
                                "flags": 768,
                                "start": 35,
                                "end": 37
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 38,
                                "end": 39
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
                                                            "start": 43,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncToken": {
                                                                "kind": 82031,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 47,
                                                                "end": 53
                                                            },
                                                            "generatorToken": null,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "f",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 62,
                                                                "end": 64
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
                                                                            "start": 65,
                                                                            "end": 68
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
                                                                                        "start": 72,
                                                                                        "end": 73
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
                                                                                                            "start": 78,
                                                                                                            "end": 80
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
                                                                                                                        "start": 86,
                                                                                                                        "end": 90
                                                                                                                    },
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 81,
                                                                                                                    "end": 90
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 81,
                                                                                                            "end": 90
                                                                                                        },
                                                                                                        "flags": 256,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 81921,
                                                                                                        "value": "m",
                                                                                                        "autofix": 0,
                                                                                                        "flags": 768,
                                                                                                        "start": 76,
                                                                                                        "end": 77
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 76,
                                                                                                    "end": 91
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "multiline": false,
                                                                                            "autofix": 0,
                                                                                            "flags": 0,
                                                                                            "start": 76,
                                                                                            "end": 91
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 74,
                                                                                        "end": 92
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 72,
                                                                                "end": 92
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 70,
                                                                            "end": 93
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 65,
                                                                        "end": 93
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 65,
                                                                "end": 94
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 95,
                                                                    "end": 95
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 94,
                                                                "end": 96
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 1280,
                                                            "start": 47,
                                                            "end": 96
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 96
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 43,
                                                "end": 96
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 40,
                                            "end": 96
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 96
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 39,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 1280,
                            "start": 20,
                            "end": 101
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 101
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 103
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 103
        }
    ],
    "isModule": false,
    "text": "function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 103,
            "end": 104
        }
    ],
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````
```

