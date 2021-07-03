# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });
`````
## Output

### CST

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
                "flags": 80,
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
                "flags": 80,
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
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
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
                                                    "flags": 64,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 56
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
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 220,
                                                                                "propertyList": {
                                                                                    "kind": 218,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 351,
                                                                                            "asyncKeyword": {
                                                                                                "kind": 82031,
                                                                                                "flags": 352,
                                                                                                "start": 67,
                                                                                                "end": 72
                                                                                            },
                                                                                            "asteriskToken": {
                                                                                                "kind": 67143222,
                                                                                                "flags": 64,
                                                                                                "start": 72,
                                                                                                "end": 74
                                                                                            },
                                                                                            "getKeyword": null,
                                                                                            "setKeyword": null,
                                                                                            "method": {
                                                                                                "kind": 209,
                                                                                                "name": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "f",
                                                                                                    "rawText": "f",
                                                                                                    "flags": 96,
                                                                                                    "start": 74,
                                                                                                    "end": 75
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "formalParameterList": {
                                                                                                    "kind": 214,
                                                                                                    "formalParameters": [
                                                                                                        {
                                                                                                            "kind": 281,
                                                                                                            "ellipsisToken": null,
                                                                                                            "left": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "foo",
                                                                                                                "rawText": "foo",
                                                                                                                "flags": 96,
                                                                                                                "start": 76,
                                                                                                                "end": 79
                                                                                                            },
                                                                                                            "optionalToken": null,
                                                                                                            "type": null,
                                                                                                            "right": {
                                                                                                                "kind": 208,
                                                                                                                "awaitKeyword": {
                                                                                                                    "kind": 82196,
                                                                                                                    "flags": 64,
                                                                                                                    "start": 81,
                                                                                                                    "end": 87
                                                                                                                },
                                                                                                                "expression": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "bar",
                                                                                                                    "rawText": "bar",
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
                                                                                                "returnType": null,
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
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 67,
                                                                                            "end": 94
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 67,
                                                                                    "end": 94
                                                                                },
                                                                                "flags": 48,
                                                                                "start": 65,
                                                                                "end": 95
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 61,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "flags": 16,
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
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 102
                            },
                            "flags": 18,
                            "start": 32,
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

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 81, end: 87

```

