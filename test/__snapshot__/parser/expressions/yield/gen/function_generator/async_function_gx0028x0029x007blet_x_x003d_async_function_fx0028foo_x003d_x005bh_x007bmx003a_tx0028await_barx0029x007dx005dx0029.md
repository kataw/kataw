# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
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
                                                "start": 39,
                                                "end": 45
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "g",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 57,
                                                "end": 58
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
                                                                            "start": 62,
                                                                            "end": 64
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 177,
                                                                            "asyncToken": {
                                                                                "kind": 82031,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 66,
                                                                                "end": 72
                                                                            },
                                                                            "generatorToken": null,
                                                                            "name": {
                                                                                "kind": 81921,
                                                                                "value": "f",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 81,
                                                                                "end": 83
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
                                                                                            "start": 84,
                                                                                            "end": 87
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
                                                                                                        "start": 91,
                                                                                                        "end": 92
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
                                                                                                                            "start": 97,
                                                                                                                            "end": 99
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
                                                                                                                                        "start": 105,
                                                                                                                                        "end": 109
                                                                                                                                    },
                                                                                                                                    "autofix": 0,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 100,
                                                                                                                                    "end": 109
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 100,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "flags": 256,
                                                                                                                        "start": 95,
                                                                                                                        "end": 110
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 81921,
                                                                                                                        "value": "m",
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 768,
                                                                                                                        "start": 95,
                                                                                                                        "end": 96
                                                                                                                    },
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 95,
                                                                                                                    "end": 110
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "multiline": false,
                                                                                                            "autofix": 0,
                                                                                                            "flags": 0,
                                                                                                            "start": 95,
                                                                                                            "end": 110
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 93,
                                                                                                        "end": 111
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 91,
                                                                                                "end": 111
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 89,
                                                                                            "end": 112
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 84,
                                                                                        "end": 112
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 84,
                                                                                "end": 113
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "statements": [],
                                                                                    "multiline": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 114,
                                                                                    "end": 114
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 113,
                                                                                "end": 115
                                                                            },
                                                                            "typeParameters": null,
                                                                            "returnType": null,
                                                                            "autofix": 0,
                                                                            "flags": 1280,
                                                                            "start": 66,
                                                                            "end": 115
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 62,
                                                                        "end": 115
                                                                    }
                                                                ],
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 62,
                                                                "end": 115
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 59,
                                                            "end": 115
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 59,
                                                    "end": 115
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 58,
                                                "end": 120
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 1280,
                                            "start": 39,
                                            "end": 120
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 120
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 122
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 122
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 122
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 123
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 123
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
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
> :: test: function generator
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````
```

