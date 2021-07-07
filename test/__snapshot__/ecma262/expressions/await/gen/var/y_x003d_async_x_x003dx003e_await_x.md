# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: y = async x => await x
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { y = async x => await x });
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
                                                        "text": "y",
                                                        "rawText": "y",
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
                                                        "kind": 271,
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 48
                                                        },
                                                        "typeParameters": null,
                                                        "arrowPatameterList": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 50
                                                        },
                                                        "returnType": null,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 53
                                                        },
                                                        "contents": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82196,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 59
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 53,
                                                            "end": 61
                                                        },
                                                        "flags": 288,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 61
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 38,
                                                    "end": 61
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 38,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 63
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 63
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 64
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 64
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { y = async x => await x });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript
var await;
var f = (async function () {
      y = async x => await x;
    });

```

### Diagnostics

```javascript
✔ No errors
```

