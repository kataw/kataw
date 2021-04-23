# Kataw parser test case

## Input

`````js
async function a(){     ([y] = [{m: 5 + t(await bar)}]) => {}     }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 14,
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
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 55,
                                    "end": 58
                                },
                                "typeParameters": null,
                                "parameters": [
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
                                                        "start": 26,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "flags": 256,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 28,
                                            "end": 30
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
                                                                            "kind": 134299649,
                                                                            "text": 5,
                                                                            "rawText": "5",
                                                                            "flags": 768,
                                                                            "start": 35,
                                                                            "end": 37
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 34098,
                                                                            "flags": 768,
                                                                            "start": 37,
                                                                            "end": 39
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "t",
                                                                                "rawText": "t",
                                                                                "flags": 768,
                                                                                "start": 39,
                                                                                "end": 41
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitToken": {
                                                                                            "kind": 82032,
                                                                                            "flags": 768,
                                                                                            "start": 42,
                                                                                            "end": 47
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "bar",
                                                                                            "rawText": "bar",
                                                                                            "flags": 768,
                                                                                            "start": 47,
                                                                                            "end": 51
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 42,
                                                                                        "end": 51
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 42,
                                                                                "end": 51
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 39,
                                                                            "end": 52
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 33,
                                                                        "end": 52
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 768,
                                                                        "start": 33,
                                                                        "end": 34
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 33,
                                                                    "end": 52
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 33,
                                                            "end": 52
                                                        },
                                                        "flags": 256,
                                                        "start": 32,
                                                        "end": 53
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 32,
                                                "end": 53
                                            },
                                            "flags": 256,
                                            "start": 30,
                                            "end": 54
                                        },
                                        "flags": 256,
                                        "start": 25,
                                        "end": 54
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 60,
                                        "end": 60
                                    },
                                    "flags": 256,
                                    "start": 58,
                                    "end": 61
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 61
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 61
                },
                "flags": 256,
                "start": 18,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "async function a(){     ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 55,
            "end": 58
        }
    ],
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

