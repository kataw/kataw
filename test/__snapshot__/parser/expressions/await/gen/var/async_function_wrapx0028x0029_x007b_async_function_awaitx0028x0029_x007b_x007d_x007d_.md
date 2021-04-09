# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function wrap() { async function await() { } };
## Input

`````js
var await; var f = (async function() { async function wrap() { async function await() { } }; });
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
                                                    "value": "wrap",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 58
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 59,
                                                    "end": 60
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
                                                                    "start": 62,
                                                                    "end": 68
                                                                },
                                                                "generatorToken": null,
                                                                "name": {
                                                                    "kind": 81921,
                                                                    "value": "await",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 77,
                                                                    "end": 83
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 84,
                                                                    "end": 85
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 87,
                                                                        "end": 87
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 85,
                                                                    "end": 89
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "autofix": 0,
                                                                "flags": 1280,
                                                                "start": 62,
                                                                "end": 89
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 62,
                                                        "end": 89
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 60,
                                                    "end": 91
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 91
                                            },
                                            {
                                                "kind": 168,
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 91,
                                                "end": 92
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 92
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 94
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 94
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 95
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 95
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 95
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 96
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function wrap() { async function await() { } }; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function wrap() { async function await() { } };
## Input

`````js
var await; var f = (async function() { async function wrap() { async function await() { } }; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function wrap() { async function await() { } };
## Input

`````js
var await; var f = (async function() { async function wrap() { async function await() { } }; });
`````
```

