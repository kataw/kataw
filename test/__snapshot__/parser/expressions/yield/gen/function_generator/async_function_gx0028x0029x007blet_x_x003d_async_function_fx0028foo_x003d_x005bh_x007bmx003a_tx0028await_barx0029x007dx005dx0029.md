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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 0,
                                                "start": 45,
                                                "end": 54
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 56,
                                                "end": 58
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 162,
                                                            "lexicalKeyword": {
                                                                "kind": 41951307,
                                                                "flags": 80,
                                                                "start": 59,
                                                                "end": 62
                                                            },
                                                            "binding": {
                                                                "kind": 151,
                                                                "bindingList": [
                                                                    {
                                                                        "kind": 190,
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 62,
                                                                            "end": 64
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 177,
                                                                            "asyncKeyword": {
                                                                                "kind": 82031,
                                                                                "flags": 64,
                                                                                "start": 66,
                                                                                "end": 72
                                                                            },
                                                                            "functionKeyword": {
                                                                                "kind": 37822554,
                                                                                "flags": 0,
                                                                                "start": 72,
                                                                                "end": 81
                                                                            },
                                                                            "generatorToken": null,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 96,
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
                                                                                            "kind": 134299649,
                                                                                            "text": "foo",
                                                                                            "rawText": "foo",
                                                                                            "flags": 96,
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
                                                                                                        "kind": 134299649,
                                                                                                        "text": "h",
                                                                                                        "rawText": "h",
                                                                                                        "flags": 96,
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
                                                                                                                    "generatorToken": null,
                                                                                                                    "asyncKeyword": null,
                                                                                                                    "left": {
                                                                                                                        "kind": 131,
                                                                                                                        "expression": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "t",
                                                                                                                            "rawText": "t",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 97,
                                                                                                                            "end": 99
                                                                                                                        },
                                                                                                                        "argumentList": {
                                                                                                                            "kind": 256,
                                                                                                                            "elements": [
                                                                                                                                {
                                                                                                                                    "kind": 208,
                                                                                                                                    "awaitToken": {
                                                                                                                                        "kind": 82032,
                                                                                                                                        "flags": 0,
                                                                                                                                        "start": 100,
                                                                                                                                        "end": 105
                                                                                                                                    },
                                                                                                                                    "expression": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "bar",
                                                                                                                                        "rawText": "bar",
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 105,
                                                                                                                                        "end": 109
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "start": 100,
                                                                                                                                    "end": 109
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 32,
                                                                                                                            "start": 100,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 95,
                                                                                                                        "end": 110
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "m",
                                                                                                                        "rawText": "m",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 95,
                                                                                                                        "end": 96
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 95,
                                                                                                                    "end": 110
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 16,
                                                                                                            "start": 95,
                                                                                                            "end": 110
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 93,
                                                                                                        "end": 111
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 91,
                                                                                                "end": 111
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 89,
                                                                                            "end": 112
                                                                                        },
                                                                                        "flags": 34,
                                                                                        "start": 84,
                                                                                        "end": 112
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 34,
                                                                                "start": 83,
                                                                                "end": 113
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "flags": 32,
                                                                                    "start": 114,
                                                                                    "end": 114
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 113,
                                                                                "end": 115
                                                                            },
                                                                            "typeParameters": null,
                                                                            "returnType": null,
                                                                            "flags": 160,
                                                                            "start": 66,
                                                                            "end": 115
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 62,
                                                                        "end": 115
                                                                    }
                                                                ],
                                                                "flags": 33554448,
                                                                "start": 62,
                                                                "end": 115
                                                            },
                                                            "flags": 33554448,
                                                            "start": 59,
                                                            "end": 115
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 59,
                                                    "end": 115
                                                },
                                                "flags": 32,
                                                "start": 58,
                                                "end": 120
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 144,
                                            "start": 39,
                                            "end": 120
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 120
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 122
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 122
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 122
                },
                "flags": 32,
                "start": 16,
                "end": 123
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 123
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 123
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

