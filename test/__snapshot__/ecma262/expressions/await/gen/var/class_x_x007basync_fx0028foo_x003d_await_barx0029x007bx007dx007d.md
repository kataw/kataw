# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: class x {async f(foo = await bar){}}
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { class x {async f(foo = await bar){}} });
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
                "flags": 80,
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
                "flags": 80,
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
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
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
                                                    "flags": 80,
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
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 303,
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
                                                                "asteriskToken": null,
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
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [
                                                                            {
                                                                                "kind": 281,
                                                                                "ellipsisToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 96,
                                                                                    "start": 56,
                                                                                    "end": 59
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "right": {
                                                                                    "kind": 208,
                                                                                    "awaitKeyword": {
                                                                                        "kind": 82196,
                                                                                        "flags": 64,
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
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
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
                                                        "end": 74
                                                    },
                                                    "flags": 46,
                                                    "start": 32,
                                                    "end": 75
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 75
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 77
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 77
                            },
                            "flags": 18,
                            "start": 32,
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
    "source": "var await; var f = (async function() { class x {async f(foo = await bar){}} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 61, end: 67

```

