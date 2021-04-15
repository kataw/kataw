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
                "flags": 768,
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
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
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
                                                                    "flags": 768,
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
                                                                                                "kind": 134299649,
                                                                                                "text": "f",
                                                                                                "rawText": "f",
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
                                                                                                            "kind": 134299649,
                                                                                                            "text": "foo",
                                                                                                            "rawText": "foo",
                                                                                                            "flags": 768,
                                                                                                            "start": 76,
                                                                                                            "end": 79
                                                                                                        },
                                                                                                        "optionalToken": null,
                                                                                                        "type": null,
                                                                                                        "initializer": {
                                                                                                            "kind": 208,
                                                                                                            "awaitToken": {
                                                                                                                "kind": 82032,
                                                                                                                "flags": 768,
                                                                                                                "start": 81,
                                                                                                                "end": 87
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "bar",
                                                                                                                "rawText": "bar",
                                                                                                                "flags": 768,
                                                                                                                "start": 87,
                                                                                                                "end": 91
                                                                                                            },
                                                                                                            "flags": 256,
                                                                                                            "start": 81,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        "flags": 258,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 3330,
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
                                                                                                    "multiline": false,
                                                                                                    "flags": 256,
                                                                                                    "start": 93,
                                                                                                    "end": 93
                                                                                                },
                                                                                                "flags": 256,
                                                                                                "start": 92,
                                                                                                "end": 94
                                                                                            },
                                                                                            "flags": 3328,
                                                                                            "start": 75,
                                                                                            "end": 94
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "start": 67,
                                                                                    "end": 94
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 65,
                                                                                "end": 95
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 61,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "flags": 128,
                                                                    "start": 61,
                                                                    "end": 95
                                                                },
                                                                "flags": 128,
                                                                "start": 58,
                                                                "end": 95
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 58,
                                                        "end": 95
                                                    },
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 100
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 100
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 100
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 102
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 102
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 103
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 103
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 103
            },
            "flags": 128,
            "start": 10,
            "end": 104
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

