# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (function call(foo=await){})
## Input

`````js
var await; var f = (async function() { (function call(foo=await){}) });
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
                                                        "kind": 177,
                                                        "asyncToken": null,
                                                        "generatorToken": null,
                                                        "name": {
                                                            "kind": 81921,
                                                            "value": "call",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 48,
                                                            "end": 53
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
                                                                        "start": 54,
                                                                        "end": 57
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 81921,
                                                                        "value": "await",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 58,
                                                                        "end": 63
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 54,
                                                                    "end": 63
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 54,
                                                            "end": 64
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "statements": [],
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 65,
                                                                "end": 65
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 64,
                                                            "end": 66
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 40,
                                                        "end": 66
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 67
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 67
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 67
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 69
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 69
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 70
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 70
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 70
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { (function call(foo=await){}) });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (function call(foo=await){})
## Input

`````js
var await; var f = (async function() { (function call(foo=await){}) });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (function call(foo=await){})
## Input

`````js
var await; var f = (async function() { (function call(foo=await){}) });
`````
```

