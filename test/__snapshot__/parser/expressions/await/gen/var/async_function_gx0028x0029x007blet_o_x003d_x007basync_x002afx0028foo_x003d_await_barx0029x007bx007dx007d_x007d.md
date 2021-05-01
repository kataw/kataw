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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "original": "await",
                            "text": "await",
                            "rawText": " await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "original": "f",
                            "text": "f",
                            "rawText": " f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 36
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
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 0,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "original": "g",
                                                    "text": "g",
                                                    "rawText": " g",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 55,
                                                    "end": 57
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
                                                                    "start": 58,
                                                                    "end": 61
                                                                },
                                                                "binding": {
                                                                    "kind": 151,
                                                                    "bindingList": [
                                                                        {
                                                                            "kind": 190,
                                                                            "binding": {
                                                                                "kind": 134299649,
                                                                                "original": "o",
                                                                                "text": "o",
                                                                                "rawText": " o",
                                                                                "flags": 96,
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
                                                                                                "kind": 134299649,
                                                                                                "original": "f",
                                                                                                "text": "f",
                                                                                                "rawText": "f",
                                                                                                "flags": 96,
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
                                                                                                            "kind": 134299649,
                                                                                                            "original": "foo",
                                                                                                            "text": "foo",
                                                                                                            "rawText": "foo",
                                                                                                            "flags": 96,
                                                                                                            "start": 76,
                                                                                                            "end": 79
                                                                                                        },
                                                                                                        "optionalToken": null,
                                                                                                        "type": null,
                                                                                                        "initializer": {
                                                                                                            "kind": 208,
                                                                                                            "awaitToken": {
                                                                                                                "kind": 82032,
                                                                                                                "flags": 0,
                                                                                                                "start": 81,
                                                                                                                "end": 87
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "original": "bar",
                                                                                                                "text": "bar",
                                                                                                                "rawText": " bar",
                                                                                                                "flags": 96,
                                                                                                                "start": 87,
                                                                                                                "end": 91
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 81,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        "flags": 34,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 418,
                                                                                                "start": 76,
                                                                                                "end": 92
                                                                                            },
                                                                                            "type": null,
                                                                                            "contents": {
                                                                                                "kind": 216,
                                                                                                "functionStatementList": {
                                                                                                    "kind": 217,
                                                                                                    "directives": [],
                                                                                                    "statements": [],
                                                                                                    "flags": 32,
                                                                                                    "start": 93,
                                                                                                    "end": 93
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 92,
                                                                                                "end": 94
                                                                                            },
                                                                                            "flags": 416,
                                                                                            "start": 75,
                                                                                            "end": 94
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 67,
                                                                                    "end": 94
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 65,
                                                                                "end": 95
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 61,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "flags": 33554448,
                                                                    "start": 61,
                                                                    "end": 95
                                                                },
                                                                "flags": 33554448,
                                                                "start": 58,
                                                                "end": 95
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 95
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 100
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 100
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 100
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 102
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 102
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 103
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 103
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 103
            },
            "flags": 16,
            "start": 10,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
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

