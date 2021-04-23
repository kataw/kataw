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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                "start": 20,
                                "end": 26
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 26,
                                "end": 35
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 768,
                                "start": 35,
                                "end": 37
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 37,
                                "end": 39
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
                                                "start": 40,
                                                "end": 43
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
                                                            "start": 43,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": {
                                                                "kind": 82031,
                                                                "flags": 768,
                                                                "start": 47,
                                                                "end": 53
                                                            },
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 768,
                                                                "start": 53,
                                                                "end": 62
                                                            },
                                                            "generatorToken": null,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
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
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
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
                                                                                        "kind": 134299649,
                                                                                        "text": "h",
                                                                                        "rawText": "h",
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
                                                                                                            "kind": 134299649,
                                                                                                            "text": "t",
                                                                                                            "rawText": "t",
                                                                                                            "flags": 768,
                                                                                                            "start": 78,
                                                                                                            "end": 80
                                                                                                        },
                                                                                                        "argumentList": {
                                                                                                            "kind": 256,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 208,
                                                                                                                    "awaitToken": {
                                                                                                                        "kind": 82032,
                                                                                                                        "flags": 768,
                                                                                                                        "start": 81,
                                                                                                                        "end": 86
                                                                                                                    },
                                                                                                                    "expression": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "bar",
                                                                                                                        "rawText": "bar",
                                                                                                                        "flags": 768,
                                                                                                                        "start": 86,
                                                                                                                        "end": 90
                                                                                                                    },
                                                                                                                    "flags": 256,
                                                                                                                    "start": 81,
                                                                                                                    "end": 90
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 256,
                                                                                                            "start": 81,
                                                                                                            "end": 90
                                                                                                        },
                                                                                                        "flags": 256,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "m",
                                                                                                        "rawText": "m",
                                                                                                        "flags": 768,
                                                                                                        "start": 76,
                                                                                                        "end": 77
                                                                                                    },
                                                                                                    "flags": 256,
                                                                                                    "start": 76,
                                                                                                    "end": 91
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "start": 76,
                                                                                            "end": 91
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 74,
                                                                                        "end": 92
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 72,
                                                                                "end": 92
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 70,
                                                                            "end": 93
                                                                        },
                                                                        "flags": 258,
                                                                        "start": 65,
                                                                        "end": 93
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 258,
                                                                "start": 64,
                                                                "end": 94
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 95,
                                                                    "end": 95
                                                                },
                                                                "flags": 256,
                                                                "start": 94,
                                                                "end": 96
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 1280,
                                                            "start": 47,
                                                            "end": 96
                                                        },
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 96
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 43,
                                                "end": 96
                                            },
                                            "flags": 128,
                                            "start": 40,
                                            "end": 96
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 96
                                },
                                "flags": 256,
                                "start": 39,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1152,
                            "start": 20,
                            "end": 101
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 101
                },
                "flags": 256,
                "start": 18,
                "end": 103
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 103
        }
    ],
    "isModule": false,
    "text": "function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "fileName": "__root__",
    "flags": 0,
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

