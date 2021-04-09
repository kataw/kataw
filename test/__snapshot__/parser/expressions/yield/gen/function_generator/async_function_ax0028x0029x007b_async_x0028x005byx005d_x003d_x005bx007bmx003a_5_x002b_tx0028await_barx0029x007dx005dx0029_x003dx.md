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

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "not_gen",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "asyncToken": {
                                                "kind": 82031,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 57,
                                                "end": 58
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": "async",
                                                                    "autofix": 0,
                                                                    "flags": 768,
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
                                                                                            "kind": 81921,
                                                                                            "value": "y",
                                                                                            "autofix": 0,
                                                                                            "flags": 768,
                                                                                            "start": 72,
                                                                                            "end": 73
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 72,
                                                                                    "end": 73
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 71,
                                                                                "end": 74
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "autofix": 0,
                                                                                "flags": 0,
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
                                                                                                        "left": {
                                                                                                            "kind": 198,
                                                                                                            "left": {
                                                                                                                "kind": 81921,
                                                                                                                "value": 5,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 768,
                                                                                                                "start": 81,
                                                                                                                "end": 83
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 34098,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 0,
                                                                                                                "start": 83,
                                                                                                                "end": 85
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 131,
                                                                                                                "expression": {
                                                                                                                    "kind": 81921,
                                                                                                                    "value": "t",
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 768,
                                                                                                                    "start": 85,
                                                                                                                    "end": 87
                                                                                                                },
                                                                                                                "argumentList": {
                                                                                                                    "kind": 256,
                                                                                                                    "elements": [
                                                                                                                        {
                                                                                                                            "kind": 208,
                                                                                                                            "expression": {
                                                                                                                                "kind": 81921,
                                                                                                                                "value": "bar",
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 768,
                                                                                                                                "start": 93,
                                                                                                                                "end": 97
                                                                                                                            },
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 88,
                                                                                                                            "end": 97
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "trailingComma": false,
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 88,
                                                                                                                    "end": 97
                                                                                                                },
                                                                                                                "flags": 256,
                                                                                                                "start": 85,
                                                                                                                "end": 98
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 79,
                                                                                                            "end": 98
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 81921,
                                                                                                            "value": "m",
                                                                                                            "autofix": 0,
                                                                                                            "flags": 768,
                                                                                                            "start": 79,
                                                                                                            "end": 80
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 79,
                                                                                                        "end": 98
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "autofix": 0,
                                                                                                "flags": 0,
                                                                                                "start": 79,
                                                                                                "end": 98
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 78,
                                                                                            "end": 99
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 78,
                                                                                    "end": 99
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 76,
                                                                                "end": 100
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 71,
                                                                            "end": 100
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 71,
                                                                    "end": 100
                                                                },
                                                                "flags": 256,
                                                                "start": 59,
                                                                "end": 101
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 59,
                                                            "end": 101
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 59,
                                                    "end": 101
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 58,
                                                "end": 101
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 1280,
                                            "start": 39,
                                            "end": 101
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 101
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 101
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 101
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 101
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 101
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 106,
                "end": 106
            },
            "autofix": 0,
            "flags": 128,
            "start": 104,
            "end": 107
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 101,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 101,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 101,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 101,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 101,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 107,
            "end": 113
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 113,
            "end": 115
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 115,
            "end": 116
        }
    ],
    "start": 0,
    "end": 116
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
`````
```

