# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: a = async function() { g(await) }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { a = async function() { g(await) } });
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
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
                                    "transformFlags": 0,
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "right": {
                                                        "kind": 177,
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 48
                                                        },
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 57
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 58
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
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitKeyword": {
                                                                                            "kind": 82196,
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 64,
                                                                                            "end": 69
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 16637,
                                                                                            "text": "",
                                                                                            "rawText": "",
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 69,
                                                                                            "end": 69
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 4096,
                                                                                        "start": 64,
                                                                                        "end": 69
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 64,
                                                                                "end": 69
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 1,
                                                                            "start": 61,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 4096,
                                                                        "start": 61,
                                                                        "end": 70
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 61,
                                                                "end": 70
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 72
                                                        },
                                                        "returnType": null,
                                                        "flags": 160,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 72
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 38,
                                                    "end": 72
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 38,
                                                "end": 72
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 74
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 74
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 75
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 75
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 75
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { a = async function() { g(await) } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 69, end: 70

```

