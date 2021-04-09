# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var e = (await, f);
## Input

`````js
var await; var f = (async function() { var e = (await, f); });
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
                                                "kind": 155,
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "e",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 132,
                                                                    "expressions": [
                                                                        {
                                                                            "kind": 208,
                                                                            "expression": {
                                                                                "kind": 253,
                                                                                "text": "",
                                                                                "autofix": 0,
                                                                                "flags": 12,
                                                                                "start": 53,
                                                                                "end": 53
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 48,
                                                                            "end": 53
                                                                        },
                                                                        {
                                                                            "kind": 81921,
                                                                            "value": "f",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 54,
                                                                            "end": 56
                                                                        }
                                                                    ],
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 46,
                                                                    "end": 57
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 46,
                                                                "end": 57
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 42,
                                                    "end": 57
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 58
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 58
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 60
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 60
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 61
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 61
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 61
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { var e = (await, f); });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 53,
            "end": 54
        }
    ],
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var e = (await, f);
## Input

`````js
var await; var f = (async function() { var e = (await, f); });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var e = (await, f);
## Input

`````js
var await; var f = (async function() { var e = (await, f); });
`````
```

