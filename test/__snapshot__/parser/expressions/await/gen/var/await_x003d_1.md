# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await = 1
## Input

`````js
var await; var f = (async function() { await = 1 });
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
                                    "kind": 37814362,
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
                                                        "kind": 208,
                                                        "awaitToken": {
                                                            "kind": 82032,
                                                            "flags": 768,
                                                            "start": 38,
                                                            "end": 44
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "autofix": 0,
                                                            "flags": 12,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "flags": 256,
                                                        "start": 38,
                                                        "end": 44
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 768,
                                                        "start": 46,
                                                        "end": 48
                                                    },
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 48
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 48
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 48
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 50
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 51
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 51
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 51
            },
            "flags": 128,
            "start": 10,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { await = 1 });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 44,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 44,
            "end": 46
        }
    ],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

