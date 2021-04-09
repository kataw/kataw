# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                    "start": 19,
                                    "end": 29
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
                                                            "start": 32,
                                                            "end": 33
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 31,
                                                "end": 34
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 34,
                                                "end": 36
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
                                                                                "start": 41,
                                                                                "end": 43
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 34098,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 43,
                                                                                "end": 45
                                                                            },
                                                                            "right": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 81921,
                                                                                    "value": "t",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 45,
                                                                                    "end": 47
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
                                                                                                "start": 53,
                                                                                                "end": 57
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 48,
                                                                                            "end": 57
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 48,
                                                                                    "end": 57
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 45,
                                                                                "end": 58
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 39,
                                                                            "end": 58
                                                                        },
                                                                        "right": {
                                                                            "kind": 81921,
                                                                            "value": "m",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 39,
                                                                            "end": 40
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 39,
                                                                        "end": 58
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 39,
                                                                "end": 58
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 38,
                                                            "end": 59
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 59
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 36,
                                                "end": 60
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 31,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 31,
                                    "end": 60
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 61
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 61
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 61
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 66,
                "end": 66
            },
            "autofix": 0,
            "flags": 128,
            "start": 64,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 61,
            "end": 64
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 61,
            "end": 64
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 61,
            "end": 64
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 67,
            "end": 73
        }
    ],
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````
```

