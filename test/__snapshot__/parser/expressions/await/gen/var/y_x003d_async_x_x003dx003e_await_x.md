# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: y = async x => await x
## Input

`````js
var await; var f = (async function() { y = async x => await x });
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "operatorToken": {
                                                        "kind": 82031,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 38,
                                                        "end": 42
                                                    },
                                                    "right": {
                                                        "kind": 271,
                                                        "typeParameters": null,
                                                        "parameters": [
                                                            {
                                                                "kind": 215,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 81921,
                                                                    "value": "x",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 48,
                                                                    "end": 50
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 42,
                                                                "end": 50
                                                            }
                                                        ],
                                                        "asyncToken": {
                                                            "kind": 82031,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 42,
                                                            "end": 48
                                                        },
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 208,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 53,
                                                            "end": 61
                                                        },
                                                        "autofix": 0,
                                                        "flags": 2304,
                                                        "start": 42,
                                                        "end": 61
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 61
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 61
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 61
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 63
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 64
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 64
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 65
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { y = async x => await x });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 65
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: y = async x => await x
## Input

`````js
var await; var f = (async function() { y = async x => await x });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: y = async x => await x
## Input

`````js
var await; var f = (async function() { y = async x => await x });
`````
```

