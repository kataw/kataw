# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { async function g(){let o = {async *f(foo = await bar){}}    } });",
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
                                                "kind": 1312785,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1025,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 57
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 142,
                                                                "isConst": false,
                                                                "binding": {
                                                                    "kind": 31,
                                                                    "bindingList": [
                                                                        {
                                                                            "kind": 16525,
                                                                            "binding": {
                                                                                "kind": 131102,
                                                                                "text": "o",
                                                                                "rawText": "o",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "exclamation": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 98984,
                                                                                "propertyList": {
                                                                                    "kind": 65722,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 18352149,
                                                                                            "name": {
                                                                                                "kind": 196711,
                                                                                                "text": "f",
                                                                                                "rawText": "f",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 74,
                                                                                                "end": 75
                                                                                            },
                                                                                            "formalParameters": {
                                                                                                "kind": 90,
                                                                                                "formalParameterList": [
                                                                                                    {
                                                                                                        "kind": 16473,
                                                                                                        "ellipsis": false,
                                                                                                        "binding": {
                                                                                                            "kind": 131102,
                                                                                                            "text": "foo",
                                                                                                            "rawText": "foo",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 1025,
                                                                                                            "start": 76,
                                                                                                            "end": 79
                                                                                                        },
                                                                                                        "isOptional": false,
                                                                                                        "type": null,
                                                                                                        "initializer": {
                                                                                                            "kind": 65559,
                                                                                                            "expression": {
                                                                                                                "kind": 196712,
                                                                                                                "text": "bar",
                                                                                                                "rawText": "bar",
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 87,
                                                                                                                "end": 91
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 32780,
                                                                                                            "start": 81,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        "decorators": null,
                                                                                                        "accessModifier": null,
                                                                                                        "isReadOnly": false,
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 1,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 76,
                                                                                                "end": 92
                                                                                            },
                                                                                            "isSetter": false,
                                                                                            "isGetter": false,
                                                                                            "contents": {
                                                                                                "kind": 91,
                                                                                                "functionStatementList": {
                                                                                                    "kind": 94,
                                                                                                    "statements": [],
                                                                                                    "multiline": false,
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 93,
                                                                                                    "end": 93
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 92,
                                                                                                "end": 94
                                                                                            },
                                                                                            "decorators": null,
                                                                                            "type": null,
                                                                                            "accessModifier": null,
                                                                                            "typeParameters": null,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 2097160,
                                                                                            "start": 75,
                                                                                            "end": 94
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 67,
                                                                                    "end": 94
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 65,
                                                                                "end": 95
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 61,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "flags": 8,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 61,
                                                                    "end": 95
                                                                },
                                                                "flags": 8,
                                                                "symbol": null,
                                                                "transformFlags": 769,
                                                                "start": 58,
                                                                "end": 95
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 95
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 100
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 260,
                                                "start": 38,
                                                "end": 100
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 100
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 102
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 102
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 103
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 103
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 103
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 104
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

