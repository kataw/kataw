# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: async function a(){     async ([v] = await bar);     }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { async function a(){     async ([v] = await bar);     } });
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
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 56
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
                                                                        "text": "async",
                                                                        "rawText": "async",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 58,
                                                                        "end": 68
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 125,
                                                                                "left": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 134299649,
                                                                                                "text": "v",
                                                                                                "rawText": "v",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 71,
                                                                                                "end": 72
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 71,
                                                                                        "end": 72
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 8,
                                                                                    "start": 70,
                                                                                    "end": 73
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 73,
                                                                                    "end": 75
                                                                                },
                                                                                "right": {
                                                                                    "kind": 208,
                                                                                    "awaitKeyword": {
                                                                                        "kind": 82196,
                                                                                        "flags": 64,
                                                                                        "transformFlags": 0,
                                                                                        "start": 75,
                                                                                        "end": 81
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "bar",
                                                                                        "rawText": "bar",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 81,
                                                                                        "end": 85
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 4096,
                                                                                    "start": 75,
                                                                                    "end": 85
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 70,
                                                                                "end": 85
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 34,
                                                                        "transformFlags": 0,
                                                                        "start": 58,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 268435490,
                                                                    "transformFlags": 1,
                                                                    "start": 58,
                                                                    "end": 86
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4096,
                                                                "start": 58,
                                                                "end": 87
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 87
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 93
                                                },
                                                "returnType": null,
                                                "flags": 144,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 93
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 93
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 95
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 95
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 96
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 96
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 97
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function a(){     async ([v] = await bar);     } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript
var await;
var f = (async function () {
    async function a() {
      async([v] = await bar);
    }
  });

```

### Diagnostics

```javascript
✔ No errors
```

