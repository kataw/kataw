# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let x = function *f(foo = await){}
## Input

`````js
var await; var f = (async function() { let x = function *f(foo = await){} });
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
                                                "kind": 162,
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncToken": null,
                                                                "generatorToken": {
                                                                    "kind": 67143222,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 55,
                                                                    "end": 57
                                                                },
                                                                "name": {
                                                                    "kind": 81921,
                                                                    "value": "f",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 57,
                                                                    "end": 58
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 215,
                                                                            "ellipsisToken": null,
                                                                            "binding": {
                                                                                "kind": 81921,
                                                                                "value": "foo",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 59,
                                                                                "end": 62
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 81921,
                                                                                "value": "await",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 64,
                                                                                "end": 70
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 59,
                                                                            "end": 70
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 59,
                                                                    "end": 71
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 72,
                                                                        "end": 72
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "autofix": 0,
                                                                "flags": 2304,
                                                                "start": 46,
                                                                "end": 73
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 42,
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
    "text": "var await; var f = (async function() { let x = function *f(foo = await){} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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
> :: case: let x = function *f(foo = await){}
## Input

`````js
var await; var f = (async function() { let x = function *f(foo = await){} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let x = function *f(foo = await){}
## Input

`````js
var await; var f = (async function() { let x = function *f(foo = await){} });
`````
```

