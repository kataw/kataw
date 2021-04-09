# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await 5;
## Input

`````js
var await; var f = (async function() { await 5; });
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
                                                    "kind": 208,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": 5,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 46
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 47
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 47
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 50
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 50
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { await 5; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await 5;
## Input

`````js
var await; var f = (async function() { await 5; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await 5;
## Input

`````js
var await; var f = (async function() { await 5; });
`````
```

