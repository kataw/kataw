# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\var
> :: test: var
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });
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
                                    "flags": 64,
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
                                                    "flags": 64,
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
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 177,
                                                                                "asyncKeyword": {
                                                                                    "kind": 82031,
                                                                                    "flags": 64,
                                                                                    "start": 65,
                                                                                    "end": 71
                                                                                },
                                                                                "functionKeyword": {
                                                                                    "kind": 37822554,
                                                                                    "flags": 64,
                                                                                    "start": 71,
                                                                                    "end": 80
                                                                                },
                                                                                "generatorToken": null,
                                                                                "name": {
                                                                                    "kind": 134299649,
                                                                                    "text": "f",
                                                                                    "rawText": "f",
                                                                                    "flags": 96,
                                                                                    "start": 80,
                                                                                    "end": 82
                                                                                },
                                                                                "formalParameters": {
                                                                                    "kind": 214,
                                                                                    "formalParameterList": [
                                                                                        {
                                                                                            "kind": 281,
                                                                                            "ellipsisToken": null,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": "foo",
                                                                                                "rawText": "foo",
                                                                                                "flags": 96,
                                                                                                "start": 83,
                                                                                                "end": 86
                                                                                            },
                                                                                            "optionalToken": null,
                                                                                            "type": null,
                                                                                            "right": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "h",
                                                                                                            "rawText": "h",
                                                                                                            "flags": 96,
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
                                                                                                                        "generatorToken": null,
                                                                                                                        "left": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "m",
                                                                                                                            "rawText": "m",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 94,
                                                                                                                            "end": 95
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 131,
                                                                                                                            "expression": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "t",
                                                                                                                                "rawText": "t",
                                                                                                                                "flags": 96,
                                                                                                                                "start": 96,
                                                                                                                                "end": 98
                                                                                                                            },
                                                                                                                            "argumentList": {
                                                                                                                                "kind": 256,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 208,
                                                                                                                                        "awaitKeyword": {
                                                                                                                                            "kind": 82196,
                                                                                                                                            "flags": 64,
                                                                                                                                            "start": 99,
                                                                                                                                            "end": 104
                                                                                                                                        },
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 134299649,
                                                                                                                                            "text": "bar",
                                                                                                                                            "rawText": "bar",
                                                                                                                                            "flags": 96,
                                                                                                                                            "start": 104,
                                                                                                                                            "end": 108
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "start": 99,
                                                                                                                                        "end": 108
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "flags": 32,
                                                                                                                                "start": 99,
                                                                                                                                "end": 108
                                                                                                                            },
                                                                                                                            "flags": 268435488,
                                                                                                                            "start": 94,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 94,
                                                                                                                        "end": 109
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 16,
                                                                                                                "start": 94,
                                                                                                                "end": 109
                                                                                                            },
                                                                                                            "flags": 48,
                                                                                                            "start": 92,
                                                                                                            "end": 110
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 90,
                                                                                                    "end": 110
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 88,
                                                                                                "end": 111
                                                                                            },
                                                                                            "flags": 34,
                                                                                            "start": 83,
                                                                                            "end": 111
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 34,
                                                                                    "start": 82,
                                                                                    "end": 112
                                                                                },
                                                                                "contents": {
                                                                                    "kind": 216,
                                                                                    "functionStatementList": {
                                                                                        "kind": 217,
                                                                                        "directives": [],
                                                                                        "statements": [],
                                                                                        "flags": 32,
                                                                                        "start": 113,
                                                                                        "end": 113
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 112,
                                                                                    "end": 114
                                                                                },
                                                                                "typeParameters": null,
                                                                                "returnType": null,
                                                                                "flags": 160,
                                                                                "start": 65,
                                                                                "end": 114
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 61,
                                                                            "end": 114
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "start": 61,
                                                                    "end": 114
                                                                },
                                                                "flags": 33554448,
                                                                "start": 58,
                                                                "end": 114
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 114
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 119
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 119
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 121
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 121
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 122
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 122
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 122
            },
            "flags": 16,
            "start": 10,
            "end": 123
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 123
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 99, end: 104

```

