# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
var await; var f = (async function() { async function a(){     async ([v] = await bar);     } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
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
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 36
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
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 57
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
                                                                        "start": 58,
                                                                        "end": 68
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
                                                                                                "value": "v",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 71,
                                                                                                "end": 72
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 71,
                                                                                        "end": 72
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 70,
                                                                                    "end": 73
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "autofix": 0,
                                                                                    "flags": 0,
                                                                                    "start": 73,
                                                                                    "end": 75
                                                                                },
                                                                                "right": {
                                                                                    "kind": 208,
                                                                                    "expression": {
                                                                                        "kind": 81921,
                                                                                        "value": "bar",
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 81,
                                                                                        "end": 85
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 75,
                                                                                    "end": 85
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 70,
                                                                                "end": 85
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 70,
                                                                        "end": 85
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 58,
                                                                    "end": 86
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 58,
                                                                "end": 87
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 58,
                                                        "end": 87
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 93
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 93
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 93
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 95
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 95
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 96
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 96
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 96
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 97
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function a(){     async ([v] = await bar);     } });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 97
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
var await; var f = (async function() { async function a(){     async ([v] = await bar);     } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
var await; var f = (async function() { async function a(){     async ([v] = await bar);     } });
`````
```

