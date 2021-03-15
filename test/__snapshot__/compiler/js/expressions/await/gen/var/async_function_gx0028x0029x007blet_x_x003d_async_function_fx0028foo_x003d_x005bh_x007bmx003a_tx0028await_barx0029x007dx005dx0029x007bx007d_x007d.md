# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/var
> :: test: var
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } });",
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
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "exclamation": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 9439250,
                                                                                "name": {
                                                                                    "kind": 131102,
                                                                                    "text": "f",
                                                                                    "rawText": "f",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 1025,
                                                                                    "start": 80,
                                                                                    "end": 82
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
                                                                                                "start": 83,
                                                                                                "end": 86
                                                                                            },
                                                                                            "isOptional": false,
                                                                                            "type": null,
                                                                                            "initializer": {
                                                                                                "kind": 98822,
                                                                                                "elementList": {
                                                                                                    "kind": 65605,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 196712,
                                                                                                            "text": "h",
                                                                                                            "rawText": "h",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 90,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        {
                                                                                                            "kind": 98984,
                                                                                                            "propertyList": {
                                                                                                                "kind": 65722,
                                                                                                                "properties": [
                                                                                                                    {
                                                                                                                        "kind": 65721,
                                                                                                                        "left": {
                                                                                                                            "kind": 196711,
                                                                                                                            "text": "m",
                                                                                                                            "rawText": "m",
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 94,
                                                                                                                            "end": 95
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 1073807915,
                                                                                                                            "expression": {
                                                                                                                                "kind": 196712,
                                                                                                                                "text": "t",
                                                                                                                                "rawText": "t",
                                                                                                                                "flags": 0,
                                                                                                                                "symbol": null,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 96,
                                                                                                                                "end": 98
                                                                                                                            },
                                                                                                                            "typeArguments": null,
                                                                                                                            "argumentList": {
                                                                                                                                "kind": 3,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 65559,
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 196712,
                                                                                                                                            "text": "bar",
                                                                                                                                            "rawText": "bar",
                                                                                                                                            "flags": 0,
                                                                                                                                            "symbol": null,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 104,
                                                                                                                                            "end": 108
                                                                                                                                        },
                                                                                                                                        "flags": 0,
                                                                                                                                        "symbol": null,
                                                                                                                                        "transformFlags": 32780,
                                                                                                                                        "start": 99,
                                                                                                                                        "end": 108
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "flags": 0,
                                                                                                                                "symbol": null,
                                                                                                                                "start": 104,
                                                                                                                                "end": 109
                                                                                                                            },
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 98,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "accessModifier": null,
                                                                                                                        "decorators": null,
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 94,
                                                                                                                        "end": 109
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 94,
                                                                                                                "end": 109
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 92,
                                                                                                            "end": 110
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "multiline": false,
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 90,
                                                                                                    "end": 110
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 88,
                                                                                                "end": 111
                                                                                            },
                                                                                            "decorators": null,
                                                                                            "accessModifier": null,
                                                                                            "isReadOnly": false,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 1,
                                                                                            "start": 83,
                                                                                            "end": 111
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 83,
                                                                                    "end": 112
                                                                                },
                                                                                "contents": {
                                                                                    "kind": 91,
                                                                                    "functionStatementList": {
                                                                                        "kind": 94,
                                                                                        "statements": [],
                                                                                        "multiline": false,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 113,
                                                                                        "end": 113
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 112,
                                                                                    "end": 114
                                                                                },
                                                                                "typeParameters": null,
                                                                                "type": null,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 4,
                                                                                "start": 65,
                                                                                "end": 114
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 61,
                                                                            "end": 114
                                                                        }
                                                                    ],
                                                                    "flags": 8,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 61,
                                                                    "end": 114
                                                                },
                                                                "flags": 8,
                                                                "symbol": null,
                                                                "transformFlags": 769,
                                                                "start": 58,
                                                                "end": 114
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 114
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 119
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 260,
                                                "start": 38,
                                                "end": 119
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 119
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 121
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 121
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 122
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 122
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 122
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 123
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
    "end": 123
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

