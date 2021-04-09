# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 31,
                "end": 32
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
                                    "start": 33,
                                    "end": 43
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
                                                            "start": 46,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 46,
                                                    "end": 47
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 45,
                                                "end": 48
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 48,
                                                "end": 50
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
                                                                                "start": 55,
                                                                                "end": 57
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 34098,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 57,
                                                                                "end": 59
                                                                            },
                                                                            "right": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 81921,
                                                                                    "value": "t",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 59,
                                                                                    "end": 61
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
                                                                                                "start": 67,
                                                                                                "end": 71
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 62,
                                                                                            "end": 71
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 62,
                                                                                    "end": 71
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 59,
                                                                                "end": 72
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 53,
                                                                            "end": 72
                                                                        },
                                                                        "right": {
                                                                            "kind": 81921,
                                                                            "value": "m",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 53,
                                                                            "end": 54
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 53,
                                                                        "end": 72
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 53,
                                                                "end": 72
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 52,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 52,
                                                    "end": 73
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 50,
                                                "end": 74
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 45,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 74
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 75
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 33,
                            "end": 75
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 75
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 75
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 75
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 80,
                "end": 80
            },
            "autofix": 0,
            "flags": 128,
            "start": 78,
            "end": 81
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 75,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 75,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 75,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 81,
            "end": 87
        }
    ],
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````
```

