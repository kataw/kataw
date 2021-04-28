# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {async f(foo = await bar){}} });
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
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 44,
                                                    "end": 46
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
                                                            "asyncKeyword": {
                                                                "kind": 82031,
                                                                "flags": 64,
                                                                "start": 48,
                                                                "end": 53
                                                            },
                                                            "setKeyword": null,
                                                            "getKeyword": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 96,
                                                                    "start": 53,
                                                                    "end": 55
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 215,
                                                                            "ellipsisToken": null,
                                                                            "binding": {
                                                                                "kind": 134299649,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 96,
                                                                                "start": 56,
                                                                                "end": 59
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 208,
                                                                                "awaitToken": {
                                                                                    "kind": 82032,
                                                                                    "flags": 0,
                                                                                    "start": 61,
                                                                                    "end": 67
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "bar",
                                                                                    "rawText": "bar",
                                                                                    "flags": 96,
                                                                                    "start": 67,
                                                                                    "end": 71
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 61,
                                                                                "end": 71
                                                                            },
                                                                            "flags": 34,
                                                                            "start": 56,
                                                                            "end": 71
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 290,
                                                                    "start": 56,
                                                                    "end": 72
                                                                },
                                                                "type": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "flags": 32,
                                                                        "start": 73,
                                                                        "end": 73
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 72,
                                                                    "end": 74
                                                                },
                                                                "flags": 256,
                                                                "start": 55,
                                                                "end": 74
                                                            },
                                                            "flags": 256,
                                                            "start": 48,
                                                            "end": 74
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 48,
                                                    "end": 75
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 75
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 38,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 77
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 78
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 78
            },
            "flags": 16,
            "start": 10,
            "end": 79
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { class x {async f(foo = await bar){}} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
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

