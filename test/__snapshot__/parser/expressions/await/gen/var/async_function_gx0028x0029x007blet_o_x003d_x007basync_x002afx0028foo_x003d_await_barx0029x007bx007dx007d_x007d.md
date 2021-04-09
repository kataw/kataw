# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });
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
                                                                                "value": "o",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 220,
                                                                                "propertyList": {
                                                                                    "kind": 218,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 209,
                                                                                            "name": {
                                                                                                "kind": 81921,
                                                                                                "value": "f",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 74,
                                                                                                "end": 75
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
                                                                                                            "value": "foo",
                                                                                                            "autofix": 0,
                                                                                                            "flags": 768,
                                                                                                            "start": 76,
                                                                                                            "end": 79
                                                                                                        },
                                                                                                        "optionalToken": null,
                                                                                                        "type": null,
                                                                                                        "initializer": {
                                                                                                            "kind": 208,
                                                                                                            "expression": {
                                                                                                                "kind": 81921,
                                                                                                                "value": "bar",
                                                                                                                "autofix": 0,
                                                                                                                "flags": 768,
                                                                                                                "start": 87,
                                                                                                                "end": 91
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 81,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 76,
                                                                                                "end": 92
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
                                                                                                    "start": 93,
                                                                                                    "end": 93
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 92,
                                                                                                "end": 94
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 3328,
                                                                                            "start": 75,
                                                                                            "end": 94
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 0,
                                                                                    "start": 67,
                                                                                    "end": 94
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 65,
                                                                                "end": 95
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 61,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 61,
                                                                    "end": 95
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 58,
                                                                "end": 95
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 58,
                                                        "end": 95
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 100
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 100
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 100
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 102
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 102
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 103
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 103
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 103
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 104
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });
`````
```

