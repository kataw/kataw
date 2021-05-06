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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "right": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 0,
                                                            "start": 50,
                                                            "end": 53
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 48,
                                                            "end": 50
                                                        },
                                                        "asyncToken": {
                                                            "kind": 82031,
                                                            "flags": 64,
                                                            "start": 42,
                                                            "end": 48
                                                        },
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 208,
                                                            "awaitToken": {
                                                                "kind": 82032,
                                                                "flags": 0,
                                                                "start": 53,
                                                                "end": 59
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "flags": 32,
                                                            "start": 53,
                                                            "end": 61
                                                        },
                                                        "flags": 288,
                                                        "start": 42,
                                                        "end": 61
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
                                                    "end": 61
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 64
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 64
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 64
            },
            "flags": 16,
            "start": 10,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { y = async x => await x });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

