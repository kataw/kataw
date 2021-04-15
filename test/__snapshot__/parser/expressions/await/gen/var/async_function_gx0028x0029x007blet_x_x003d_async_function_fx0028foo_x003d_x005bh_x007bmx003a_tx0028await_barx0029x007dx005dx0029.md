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
    "directives": [],
    "statements": [
        {
            "kind": 155,
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
                                    "kind": 37814362,
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
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37814362,
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
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 768,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 177,
                                                                                "asyncKeyword": {
                                                                                    "kind": 82031,
                                                                                    "flags": 768,
                                                                                    "start": 65,
                                                                                    "end": 71
                                                                                },
                                                                                "functionKeyword": {
                                                                                    "kind": 37814362,
                                                                                    "flags": 768,
                                                                                    "start": 71,
                                                                                    "end": 80
                                                                                },
                                                                                "generatorToken": null,
                                                                                "name": {
                                                                                    "kind": 134299649,
                                                                                    "text": "f",
                                                                                    "rawText": "f",
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
                                                                                                "kind": 134299649,
                                                                                                "text": "foo",
                                                                                                "rawText": "foo",
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
                                                                                                            "kind": 134299649,
                                                                                                            "text": "h",
                                                                                                            "rawText": "h",
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
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "t",
                                                                                                                                "rawText": "t",
                                                                                                                                "flags": 768,
                                                                                                                                "start": 96,
                                                                                                                                "end": 98
                                                                                                                            },
                                                                                                                            "argumentList": {
                                                                                                                                "kind": 256,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 208,
                                                                                                                                        "awaitToken": {
                                                                                                                                            "kind": 82032,
                                                                                                                                            "flags": 768,
                                                                                                                                            "start": 99,
                                                                                                                                            "end": 104
                                                                                                                                        },
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 134299649,
                                                                                                                                            "text": "bar",
                                                                                                                                            "rawText": "bar",
                                                                                                                                            "flags": 768,
                                                                                                                                            "start": 104,
                                                                                                                                            "end": 108
                                                                                                                                        },
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 99,
                                                                                                                                        "end": 108
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "flags": 256,
                                                                                                                                "start": 99,
                                                                                                                                "end": 108
                                                                                                                            },
                                                                                                                            "flags": 256,
                                                                                                                            "start": 94,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "m",
                                                                                                                            "rawText": "m",
                                                                                                                            "flags": 768,
                                                                                                                            "start": 94,
                                                                                                                            "end": 95
                                                                                                                        },
                                                                                                                        "flags": 256,
                                                                                                                        "start": 94,
                                                                                                                        "end": 109
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "start": 94,
                                                                                                                "end": 109
                                                                                                            },
                                                                                                            "flags": 256,
                                                                                                            "start": 92,
                                                                                                            "end": 110
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 256,
                                                                                                    "start": 90,
                                                                                                    "end": 110
                                                                                                },
                                                                                                "flags": 256,
                                                                                                "start": 88,
                                                                                                "end": 111
                                                                                            },
                                                                                            "flags": 258,
                                                                                            "start": 83,
                                                                                            "end": 111
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 258,
                                                                                    "start": 82,
                                                                                    "end": 112
                                                                                },
                                                                                "contents": {
                                                                                    "kind": 216,
                                                                                    "functionStatementList": {
                                                                                        "kind": 217,
                                                                                        "directives": [],
                                                                                        "statements": [],
                                                                                        "multiline": false,
                                                                                        "flags": 256,
                                                                                        "start": 113,
                                                                                        "end": 113
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 112,
                                                                                    "end": 114
                                                                                },
                                                                                "typeParameters": null,
                                                                                "returnType": null,
                                                                                "flags": 1280,
                                                                                "start": 65,
                                                                                "end": 114
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 61,
                                                                            "end": 114
                                                                        }
                                                                    ],
                                                                    "flags": 128,
                                                                    "start": 61,
                                                                    "end": 114
                                                                },
                                                                "flags": 128,
                                                                "start": 58,
                                                                "end": 114
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 58,
                                                        "end": 114
                                                    },
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 119
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 119
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 119
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 121
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 121
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 122
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 122
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 122
            },
            "flags": 128,
            "start": 10,
            "end": 123
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 123
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

