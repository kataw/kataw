# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
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
                                "text": "a",
                                "rawText": "a",
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
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 768,
                                                "start": 40,
                                                "end": 50
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
                                                                        "flags": 768,
                                                                        "start": 53,
                                                                        "end": 54
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 53,
                                                                "end": 54
                                                            },
                                                            "flags": 256,
                                                            "start": 52,
                                                            "end": 55
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 768,
                                                            "start": 55,
                                                            "end": 57
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
                                                                                    "left": {
                                                                                        "kind": 198,
                                                                                        "left": {
                                                                                            "kind": 201392130,
                                                                                            "text": 5,
                                                                                            "rawText": "5",
                                                                                            "flags": 768,
                                                                                            "start": 62,
                                                                                            "end": 64
                                                                                        },
                                                                                        "operatorToken": {
                                                                                            "kind": 34098,
                                                                                            "flags": 768,
                                                                                            "start": 64,
                                                                                            "end": 66
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 131,
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "t",
                                                                                                "rawText": "t",
                                                                                                "flags": 768,
                                                                                                "start": 66,
                                                                                                "end": 68
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 208,
                                                                                                        "awaitToken": {
                                                                                                            "kind": 82032,
                                                                                                            "flags": 768,
                                                                                                            "start": 69,
                                                                                                            "end": 74
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "bar",
                                                                                                            "rawText": "bar",
                                                                                                            "flags": 768,
                                                                                                            "start": 74,
                                                                                                            "end": 78
                                                                                                        },
                                                                                                        "flags": 256,
                                                                                                        "start": 69,
                                                                                                        "end": 78
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 256,
                                                                                                "start": 69,
                                                                                                "end": 78
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 66,
                                                                                            "end": 79
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 60,
                                                                                        "end": 79
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 134299649,
                                                                                        "text": "m",
                                                                                        "rawText": "m",
                                                                                        "flags": 768,
                                                                                        "start": 60,
                                                                                        "end": 61
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 60,
                                                                                    "end": 79
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "start": 60,
                                                                            "end": 79
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 59,
                                                                        "end": 80
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 59,
                                                                "end": 80
                                                            },
                                                            "flags": 256,
                                                            "start": 57,
                                                            "end": 81
                                                        },
                                                        "flags": 256,
                                                        "start": 52,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 40,
                                                "end": 40
                                            },
                                            "flags": 256,
                                            "start": 40,
                                            "end": 82
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 82
                                },
                                "flags": 256,
                                "start": 39,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1152,
                            "start": 20,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 82
                },
                "flags": 256,
                "start": 18,
                "end": 82
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 82
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 87,
                "end": 87
            },
            "flags": 128,
            "start": 85,
            "end": 88
        }
    ],
    "isModule": false,
    "text": "function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}",
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
✖ Statement expected - start: 82, end: 85
✖ Statement expected - start: 88, end: 94
✖ Statement expected - start: 94, end: 96
✖ Statement expected - start: 96, end: 97

```

