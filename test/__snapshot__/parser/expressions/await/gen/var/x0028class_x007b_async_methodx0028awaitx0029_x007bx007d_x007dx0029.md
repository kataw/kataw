# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (class { async method(await) {} })
## Input

`````js
var await; var f = (async function() { (class { async method(await) {} }) });
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "classHeritage": null,
                                                        "members": {
                                                            "kind": 277,
                                                            "elements": [
                                                                {
                                                                    "kind": 278,
                                                                    "decorators": null,
                                                                    "staticToken": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 81921,
                                                                            "value": "method",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 53,
                                                                            "end": 60
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [
                                                                                {
                                                                                    "kind": 215,
                                                                                    "ellipsisToken": null,
                                                                                    "binding": {
                                                                                        "kind": 81921,
                                                                                        "value": "await",
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 61,
                                                                                        "end": 66
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": null,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 61,
                                                                                    "end": 66
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 61,
                                                                            "end": 67
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "statements": [],
                                                                                "multiline": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 69,
                                                                                "end": 69
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 67,
                                                                            "end": 70
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 2048,
                                                                        "start": 60,
                                                                        "end": 70
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 47,
                                                                    "end": 70
                                                                }
                                                            ],
                                                            "flags": 256,
                                                            "start": 47,
                                                            "end": 72
                                                        },
                                                        "flags": 256,
                                                        "start": 40,
                                                        "end": 72
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 73
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 73
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 73
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 75
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 75
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 76
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 76
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 76
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 77
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { (class { async method(await) {} }) });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 58,
            "error": "`Await` expression cannot be used in function parameters",
            "start": 61,
            "end": 66
        }
    ],
    "start": 0,
    "end": 77
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (class { async method(await) {} })
## Input

`````js
var await; var f = (async function() { (class { async method(await) {} }) });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (class { async method(await) {} })
## Input

`````js
var await; var f = (async function() { (class { async method(await) {} }) });
`````
```

