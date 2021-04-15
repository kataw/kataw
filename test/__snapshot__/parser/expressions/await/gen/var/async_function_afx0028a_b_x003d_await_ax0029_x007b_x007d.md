# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function af(a, b = await a) { }
## Input

`````js
var await; var f = (async function() { async function af(a, b = await a) { } });
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
                                                "kind": 176,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "af",
                                                    "rawText": "af",
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 56
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 215,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 768,
                                                                "start": 57,
                                                                "end": 58
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 256,
                                                            "start": 57,
                                                            "end": 58
                                                        },
                                                        {
                                                            "kind": 215,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 768,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 208,
                                                                "awaitToken": {
                                                                    "kind": 82032,
                                                                    "flags": 768,
                                                                    "start": 63,
                                                                    "end": 69
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 768,
                                                                    "start": 69,
                                                                    "end": 71
                                                                },
                                                                "flags": 256,
                                                                "start": 63,
                                                                "end": 71
                                                            },
                                                            "flags": 258,
                                                            "start": 59,
                                                            "end": 71
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 258,
                                                    "start": 56,
                                                    "end": 72
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 74,
                                                        "end": 74
                                                    },
                                                    "flags": 256,
                                                    "start": 72,
                                                    "end": 76
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 76
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 76
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 78
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 78
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 79
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 79
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 79
            },
            "flags": 128,
            "start": 10,
            "end": 80
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function af(a, b = await a) { } });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 80
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

