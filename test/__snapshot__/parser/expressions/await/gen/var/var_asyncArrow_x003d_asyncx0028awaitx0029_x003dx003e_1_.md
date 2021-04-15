# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(await) => 1; });
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
                                                "kind": 155,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "asyncArrow",
                                                                "rawText": "asyncArrow",
                                                                "flags": 768,
                                                                "start": 42,
                                                                "end": 53
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 271,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 768,
                                                                    "start": 68,
                                                                    "end": 71
                                                                },
                                                                "typeParameters": null,
                                                                "parameters": [
                                                                    {
                                                                        "kind": 215,
                                                                        "ellipsisToken": null,
                                                                        "binding": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "async",
                                                                                "rawText": "async",
                                                                                "flags": 768,
                                                                                "start": 55,
                                                                                "end": 61
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitToken": {
                                                                                            "kind": 82032,
                                                                                            "flags": 768,
                                                                                            "start": 62,
                                                                                            "end": 67
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 16637,
                                                                                            "text": "",
                                                                                            "autofix": 0,
                                                                                            "flags": 12,
                                                                                            "start": 67,
                                                                                            "end": 67
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 62,
                                                                                        "end": 67
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 55,
                                                                                "end": 55
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 55,
                                                                            "end": 68
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 55,
                                                                        "end": 68
                                                                    }
                                                                ],
                                                                "asyncToken": {
                                                                    "kind": 82031,
                                                                    "flags": 768,
                                                                    "start": 55,
                                                                    "end": 61
                                                                },
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 134299649,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 768,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "flags": 2304,
                                                                "start": 55,
                                                                "end": 73
                                                            },
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "flags": 128,
                                                    "start": 42,
                                                    "end": 73
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 74
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 74
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 76
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 76
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 77
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 77
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 77
            },
            "flags": 128,
            "start": 10,
            "end": 78
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { var asyncArrow = async(await) => 1; });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 67,
            "end": 68
        }
    ],
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

