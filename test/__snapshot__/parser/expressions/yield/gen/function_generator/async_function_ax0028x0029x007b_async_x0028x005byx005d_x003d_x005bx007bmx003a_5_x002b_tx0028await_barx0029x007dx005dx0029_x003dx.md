# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
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
                                                "text": "a",
                                                "rawText": "a",
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
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "async",
                                                                "rawText": "async",
                                                                "flags": 96,
                                                                "start": 59,
                                                                "end": 69
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 119,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "y",
                                                                                        "rawText": "y",
                                                                                        "flags": 96,
                                                                                        "start": 72,
                                                                                        "end": 73
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 72,
                                                                                "end": 73
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 71,
                                                                            "end": 74
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 64,
                                                                            "start": 74,
                                                                            "end": 76
                                                                        },
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
                                                                                                        "start": 79,
                                                                                                        "end": 80
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 198,
                                                                                                        "left": {
                                                                                                            "kind": 201392130,
                                                                                                            "text": 5,
                                                                                                            "rawText": "5",
                                                                                                            "flags": 96,
                                                                                                            "start": 81,
                                                                                                            "end": 83
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 34098,
                                                                                                            "flags": 64,
                                                                                                            "start": 83,
                                                                                                            "end": 85
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 131,
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "t",
                                                                                                                "rawText": "t",
                                                                                                                "flags": 96,
                                                                                                                "start": 85,
                                                                                                                "end": 87
                                                                                                            },
                                                                                                            "argumentList": {
                                                                                                                "kind": 256,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 208,
                                                                                                                        "awaitKeyword": {
                                                                                                                            "kind": 82032,
                                                                                                                            "flags": 0,
                                                                                                                            "start": 88,
                                                                                                                            "end": 93
                                                                                                                        },
                                                                                                                        "expression": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "bar",
                                                                                                                            "rawText": "bar",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 93,
                                                                                                                            "end": 97
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 88,
                                                                                                                        "end": 97
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 88,
                                                                                                                "end": 97
                                                                                                            },
                                                                                                            "flags": 268435488,
                                                                                                            "start": 85,
                                                                                                            "end": 98
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 79,
                                                                                                        "end": 98
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 79,
                                                                                                    "end": 98
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 16,
                                                                                            "start": 79,
                                                                                            "end": 98
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 78,
                                                                                        "end": 99
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 78,
                                                                                "end": 99
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 76,
                                                                            "end": 100
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 71,
                                                                        "end": 100
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 59,
                                                                "end": 59
                                                            },
                                                            "flags": 268435488,
                                                            "start": 59,
                                                            "end": 101
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 59,
                                                    "end": 101
                                                },
                                                "flags": 32,
                                                "start": 58,
                                                "end": 101
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 144,
                                            "start": 39,
                                            "end": 101
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 101
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 101
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 101
                },
                "flags": 32,
                "start": 16,
                "end": 101
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 101
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 106,
                "end": 106
            },
            "flags": 16,
            "start": 104,
            "end": 107
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 101, end: 104
✖ Declaration or statement expected - start: 107, end: 113
✖ Declaration or statement expected - start: 113, end: 115
✖ Declaration or statement expected - start: 115, end: 116

```

