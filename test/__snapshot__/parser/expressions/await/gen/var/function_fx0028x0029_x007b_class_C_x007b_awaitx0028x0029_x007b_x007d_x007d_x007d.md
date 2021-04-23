# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: function f() { class C { await() { } } }
## Input

`````js
var await; var f = (async function() { function f() { class C { await() { } } } });
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
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 47
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 768,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 49,
                                                    "end": 51
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 178,
                                                                "declareKeyword": null,
                                                                "decorators": null,
                                                                "classKeyword": {
                                                                    "kind": 37822544,
                                                                    "flags": 768,
                                                                    "start": 53,
                                                                    "end": 59
                                                                },
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "C",
                                                                    "rawText": "C",
                                                                    "flags": 768,
                                                                    "start": 59,
                                                                    "end": 61
                                                                },
                                                                "typeParameters": null,
                                                                "classHeritage": null,
                                                                "members": {
                                                                    "kind": 277,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 278,
                                                                            "declareToken": null,
                                                                            "decorators": null,
                                                                            "staticKeyword": null,
                                                                            "asyncKeyword": null,
                                                                            "setKeyword": null,
                                                                            "getKeyword": null,
                                                                            "method": {
                                                                                "kind": 209,
                                                                                "name": {
                                                                                    "kind": 134299649,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 768,
                                                                                    "start": 63,
                                                                                    "end": 69
                                                                                },
                                                                                "typeParameters": null,
                                                                                "formalParameters": {
                                                                                    "kind": 214,
                                                                                    "formalParameterList": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "start": 70,
                                                                                    "end": 71
                                                                                },
                                                                                "type": null,
                                                                                "contents": {
                                                                                    "kind": 216,
                                                                                    "functionStatementList": {
                                                                                        "kind": 217,
                                                                                        "directives": [],
                                                                                        "statements": [],
                                                                                        "multiline": false,
                                                                                        "flags": 256,
                                                                                        "start": 73,
                                                                                        "end": 73
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 71,
                                                                                    "end": 75
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 69,
                                                                                "end": 75
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 63,
                                                                            "end": 75
                                                                        }
                                                                    ],
                                                                    "flags": 256,
                                                                    "start": 63,
                                                                    "end": 77
                                                                },
                                                                "flags": 128,
                                                                "start": 53,
                                                                "end": 77
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 53,
                                                        "end": 77
                                                    },
                                                    "flags": 256,
                                                    "start": 51,
                                                    "end": 79
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 79
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 79
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 81
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 81
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 82
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 82
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 82
            },
            "flags": 128,
            "start": 10,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { function f() { class C { await() { } } } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

