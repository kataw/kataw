# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
var await; var f = (async function() { async function f() { return {await = 0} = {}; } });
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
                                                    "value": "f",
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
                                                                "kind": 161,
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 205,
                                                                                    "left": {
                                                                                        "kind": 81921,
                                                                                        "value": "await",
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 68,
                                                                                        "end": 73
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 81921,
                                                                                        "value": 0,
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 75,
                                                                                        "end": 77
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 68,
                                                                                    "end": 77
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 68,
                                                                            "end": 77
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 66,
                                                                        "end": 78
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "autofix": 0,
                                                                        "flags": 0,
                                                                        "start": 78,
                                                                        "end": 80
                                                                    },
                                                                    "right": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 82,
                                                                            "end": 82
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 80,
                                                                        "end": 83
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 66,
                                                                    "end": 83
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 0,
                                                                "end": 59
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 84
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 86
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 86
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 86
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 88
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 88
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 89
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 89
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 90
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function f() { return {await = 0} = {}; } });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
var await; var f = (async function() { async function f() { return {await = 0} = {}; } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
var await; var f = (async function() { async function f() { return {await = 0} = {}; } });
`````
```

