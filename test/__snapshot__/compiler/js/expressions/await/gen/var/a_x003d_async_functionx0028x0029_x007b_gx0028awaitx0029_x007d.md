# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: a = async function() { g(await) }
## Input

`````js
var await; var f = (async function() { a = async function() { g(await) } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { a = async function() { g(await) } });",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 16
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 9439250,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 196712,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 9439250,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 59
                                                        },
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 1073807915,
                                                                            "expression": {
                                                                                "kind": 196712,
                                                                                "text": "g",
                                                                                "rawText": "g",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "typeArguments": null,
                                                                            "argumentList": {
                                                                                "kind": 3,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 65559,
                                                                                        "expression": {
                                                                                            "kind": 131322,
                                                                                            "text": "",
                                                                                            "flags": 3,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 69,
                                                                                            "end": 69
                                                                                        },
                                                                                        "flags": 1,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 32780,
                                                                                        "start": 64,
                                                                                        "end": 69
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "transformFlags": 0,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "start": 69,
                                                                                "end": 70
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 63,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 61,
                                                                        "end": 70
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 61,
                                                                "end": 70
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 72
                                                        },
                                                        "typeParameters": null,
                                                        "type": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 4,
                                                        "start": 42,
                                                        "end": 72
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 72
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 72
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 72
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 74
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 74
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 75
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 75
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 75
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 76
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 69,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

