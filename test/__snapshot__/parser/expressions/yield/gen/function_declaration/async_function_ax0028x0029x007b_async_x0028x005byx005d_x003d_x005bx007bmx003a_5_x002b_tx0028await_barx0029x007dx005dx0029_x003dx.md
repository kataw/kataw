# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
`````
## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "flags": 64,
                                "start": 20,
                                "end": 26
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 26,
                                "end": 35
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 35,
                                "end": 37
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 82,
                                                "end": 85
                                            },
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 201,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 53,
                                                                    "end": 54
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 53,
                                                            "end": 54
                                                        },
                                                        "flags": 32,
                                                        "start": 52
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
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
                                                                                    "start": 60,
                                                                                    "end": 61
                                                                                },
                                                                                "right": {
                                                                                    "kind": 198,
                                                                                    "left": {
                                                                                        "kind": 201392130,
                                                                                        "text": 5,
                                                                                        "rawText": "5",
                                                                                        "flags": 96,
                                                                                        "start": 62,
                                                                                        "end": 64
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 99634,
                                                                                        "flags": 64,
                                                                                        "start": 64,
                                                                                        "end": 66
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "t",
                                                                                            "rawText": "t",
                                                                                            "flags": 96,
                                                                                            "start": 66,
                                                                                            "end": 68
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 208,
                                                                                                    "awaitKeyword": {
                                                                                                        "kind": 82196,
                                                                                                        "flags": 64,
                                                                                                        "start": 69,
                                                                                                        "end": 74
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 96,
                                                                                                        "start": 74,
                                                                                                        "end": 78
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 69,
                                                                                                    "end": 78
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 69,
                                                                                            "end": 78
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 66,
                                                                                        "end": 79
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 60,
                                                                                    "end": 79
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 60,
                                                                                "end": 79
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 60,
                                                                        "end": 79
                                                                    },
                                                                    "flags": 48,
                                                                    "start": 59,
                                                                    "end": 80
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 59,
                                                            "end": 80
                                                        },
                                                        "flags": 32,
                                                        "start": 57,
                                                        "end": 81
                                                    },
                                                    "flags": 32,
                                                    "start": 52,
                                                    "end": 81
                                                }
                                            ],
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 40,
                                                "end": 50
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 87,
                                                    "end": 87
                                                },
                                                "flags": 32,
                                                "start": 85,
                                                "end": 88
                                            },
                                            "flags": 290,
                                            "start": 40,
                                            "end": 88
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 40,
                                    "end": 88
                                },
                                "flags": 32,
                                "start": 39,
                                "end": 94
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 20,
                            "end": 94
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 94
                },
                "flags": 32,
                "start": 18,
                "end": 96
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 96, end: 97

```

