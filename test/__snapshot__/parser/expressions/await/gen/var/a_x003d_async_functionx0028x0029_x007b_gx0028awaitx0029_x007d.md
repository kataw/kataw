# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: a = async function() { g(await) }
## Input

`````js
var await; var f = (async function() { a = async function() { g(await) } });
`````

## Output

### Hybrid CST

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
                "flags": 768,
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
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "right": {
                                                        "kind": 177,
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 768,
                                                            "start": 42,
                                                            "end": 48
                                                        },
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 768,
                                                            "start": 48,
                                                            "end": 57
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 57,
                                                            "end": 59
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
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "g",
                                                                                "rawText": "g",
                                                                                "flags": 768,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitToken": {
                                                                                            "kind": 82032,
                                                                                            "flags": 768,
                                                                                            "start": 64,
                                                                                            "end": 69
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 16637,
                                                                                            "text": "",
                                                                                            "autofix": 0,
                                                                                            "flags": 12,
                                                                                            "start": 69,
                                                                                            "end": 69
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 64,
                                                                                        "end": 69
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 64,
                                                                                "end": 69
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 61,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 128,
                                                                        "start": 61,
                                                                        "end": 70
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 61,
                                                                "end": 70
                                                            },
                                                            "flags": 256,
                                                            "start": 59,
                                                            "end": 72
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 1280,
                                                        "start": 42,
                                                        "end": 72
                                                    },
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 72
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 72
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 72
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 74
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 74
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 75
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 75
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 75
            },
            "flags": 128,
            "start": 10,
            "end": 76
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { a = async function() { g(await) } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

