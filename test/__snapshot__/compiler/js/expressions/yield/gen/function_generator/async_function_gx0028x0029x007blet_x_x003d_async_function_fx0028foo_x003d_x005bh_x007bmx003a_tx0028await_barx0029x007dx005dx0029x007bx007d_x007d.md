# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
                            },
                            "type": null,
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
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 58
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 142,
                                                            "binding": {
                                                                "kind": 31,
                                                                "lexicals": [
                                                                    {
                                                                        "kind": 16525,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1025,
                                                                            "start": 62,
                                                                            "end": 64
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
                                                                                "start": 81,
                                                                                "end": 83
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
                                                                                            "start": 84,
                                                                                            "end": 87
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
                                                                                                        "start": 91,
                                                                                                        "end": 92
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
                                                                                                                        "start": 95,
                                                                                                                        "end": 96
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
                                                                                                                            "start": 97,
                                                                                                                            "end": 99
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
                                                                                                                                        "start": 105,
                                                                                                                                        "end": 109
                                                                                                                                    },
                                                                                                                                    "flags": 0,
                                                                                                                                    "symbol": null,
                                                                                                                                    "transformFlags": 32780,
                                                                                                                                    "start": 100,
                                                                                                                                    "end": 109
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "start": 105,
                                                                                                                            "end": 110
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 99,
                                                                                                                        "end": 110
                                                                                                                    },
                                                                                                                    "accessModifier": null,
                                                                                                                    "decorators": null,
                                                                                                                    "flags": 0,
                                                                                                                    "symbol": null,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 95,
                                                                                                                    "end": 110
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "multiline": false,
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 95,
                                                                                                            "end": 110
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 93,
                                                                                                        "end": 111
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 91,
                                                                                                "end": 111
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 89,
                                                                                            "end": 112
                                                                                        },
                                                                                        "decorators": null,
                                                                                        "accessModifier": null,
                                                                                        "isReadOnly": false,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 1,
                                                                                        "start": 84,
                                                                                        "end": 112
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 84,
                                                                                "end": 113
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
                                                                                    "start": 114,
                                                                                    "end": 114
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 113,
                                                                                "end": 115
                                                                            },
                                                                            "typeParameters": null,
                                                                            "type": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 4,
                                                                            "start": 66,
                                                                            "end": 115
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 62,
                                                                        "end": 115
                                                                    }
                                                                ],
                                                                "flags": 24,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 59,
                                                                "end": 115
                                                            },
                                                            "flags": 24,
                                                            "symbol": null,
                                                            "transformFlags": 769,
                                                            "start": 59,
                                                            "end": 115
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 24,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 115
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 120
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 260,
                                            "start": 39,
                                            "end": 120
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 120
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 122
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 18,
                            "end": 122
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 122
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 123
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
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

