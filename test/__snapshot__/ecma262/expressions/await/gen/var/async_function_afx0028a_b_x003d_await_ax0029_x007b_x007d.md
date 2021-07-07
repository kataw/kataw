# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: async function af(a, b = await a) { }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { async function af(a, b = await a) { } });
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
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "af",
                                                    "rawText": "af",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 56
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 57,
                                                            "end": 58
                                                        },
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 63,
                                                                    "end": 69
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 69,
                                                                    "end": 71
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 63,
                                                                "end": 71
                                                            },
                                                            "flags": 34,
                                                            "transformFlags": 4096,
                                                            "start": 59,
                                                            "end": 71
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 34,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 71
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 74,
                                                        "end": 74
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 72,
                                                    "end": 76
                                                },
                                                "returnType": null,
                                                "flags": 144,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 76
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 76
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 78
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 78
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 79
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 79
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function af(a, b = await a) { } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 63, end: 69

```

