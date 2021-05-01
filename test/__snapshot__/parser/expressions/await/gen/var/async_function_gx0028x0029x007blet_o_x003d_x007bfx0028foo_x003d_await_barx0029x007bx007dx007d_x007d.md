# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
var await; var f = (async function() { async function g(){let o = {f(foo = await bar){}}    } });
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
                            "text": "await",
                            "rawText": "await",
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
                            "text": "f",
                            "rawText": "f",
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
                                                    "text": "g",
                                                    "rawText": "g",
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
                                                                                "text": "o",
                                                                                "rawText": "o",
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
                                                                                                "text": "f",
                                                                                                "rawText": "f",
                                                                                                "flags": 96,
                                                                                                "start": 67,
                                                                                                "end": 68
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
                                                                                                            "text": "foo",
                                                                                                            "rawText": "foo",
                                                                                                            "flags": 96,
                                                                                                            "start": 69,
                                                                                                            "end": 72
                                                                                                        },
                                                                                                        "optionalToken": null,
                                                                                                        "type": null,
                                                                                                        "initializer": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "await",
                                                                                                            "rawText": "await",
                                                                                                            "flags": 96,
                                                                                                            "start": 74,
                                                                                                            "end": 80
                                                                                                        },
                                                                                                        "flags": 34,
                                                                                                        "start": 69,
                                                                                                        "end": 80
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 215,
                                                                                                        "ellipsisToken": null,
                                                                                                        "binding": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "bar",
                                                                                                            "rawText": "bar",
                                                                                                            "flags": 96,
                                                                                                            "start": 80,
                                                                                                            "end": 84
                                                                                                        },
                                                                                                        "optionalToken": null,
                                                                                                        "type": null,
                                                                                                        "initializer": null,
                                                                                                        "flags": 32,
                                                                                                        "start": 80,
                                                                                                        "end": 84
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 34,
                                                                                                "start": 69,
                                                                                                "end": 85
                                                                                            },
                                                                                            "type": null,
                                                                                            "contents": {
                                                                                                "kind": 216,
                                                                                                "functionStatementList": {
                                                                                                    "kind": 217,
                                                                                                    "directives": [],
                                                                                                    "statements": [],
                                                                                                    "flags": 32,
                                                                                                    "start": 86,
                                                                                                    "end": 86
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 85,
                                                                                                "end": 87
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 68,
                                                                                            "end": 87
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 67,
                                                                                    "end": 87
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 65,
                                                                                "end": 88
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 61,
                                                                            "end": 88
                                                                        }
                                                                    ],
                                                                    "flags": 33554448,
                                                                    "start": 61,
                                                                    "end": 88
                                                                },
                                                                "flags": 33554448,
                                                                "start": 58,
                                                                "end": 88
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 88
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 93
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 93
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 93
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 95
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 95
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 96
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 96
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 96
            },
            "flags": 16,
            "start": 10,
            "end": 97
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function g(){let o = {f(foo = await bar){}}    } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 80, end: 84

```

