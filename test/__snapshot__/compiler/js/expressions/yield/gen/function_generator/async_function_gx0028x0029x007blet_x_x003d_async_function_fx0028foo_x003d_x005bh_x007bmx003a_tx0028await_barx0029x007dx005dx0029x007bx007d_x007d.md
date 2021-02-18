# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
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
    "kind": 196,
    "source": "function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 788576,
                "name": {
                    "kind": 131102,
                    "text": "gen",
                    "rawText": "gen",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 14
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
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
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 27,
                                    "end": 35
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
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
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 54,
                                                    "end": 56
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
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
                                                                "isConst": false,
                                                                "binding": {
                                                                    "kind": 31,
                                                                    "bindingList": [
                                                                        {
                                                                            "kind": 141,
                                                                            "binding": {
                                                                                "kind": 131102,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "parent": null,
                                                                                "emitNode": null,
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
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 81,
                                                                                    "end": 83
                                                                                },
                                                                                "formalParameters": {
                                                                                    "kind": 90,
                                                                                    "formalParameterList": [
                                                                                        {
                                                                                            "kind": 89,
                                                                                            "ellipsis": false,
                                                                                            "binding": {
                                                                                                "kind": 131102,
                                                                                                "text": "foo",
                                                                                                "rawText": "foo",
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1025,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 84,
                                                                                                "end": 87
                                                                                            },
                                                                                            "isOptional": false,
                                                                                            "type": null,
                                                                                            "initializer": {
                                                                                                "kind": 67207686,
                                                                                                "elementList": {
                                                                                                    "kind": 65605,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 196712,
                                                                                                            "text": "h",
                                                                                                            "rawText": "h",
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 91,
                                                                                                            "end": 92
                                                                                                        },
                                                                                                        {
                                                                                                            "kind": 67224232,
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
                                                                                                                            "intersects": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "parent": null,
                                                                                                                            "emitNode": null,
                                                                                                                            "start": 95,
                                                                                                                            "end": 96
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 66091,
                                                                                                                            "expression": {
                                                                                                                                "kind": 196712,
                                                                                                                                "text": "t",
                                                                                                                                "rawText": "t",
                                                                                                                                "flags": 0,
                                                                                                                                "intersects": false,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "parent": null,
                                                                                                                                "emitNode": null,
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
                                                                                                                                            "intersects": false,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "parent": null,
                                                                                                                                            "emitNode": null,
                                                                                                                                            "start": 105,
                                                                                                                                            "end": 109
                                                                                                                                        },
                                                                                                                                        "flags": 0,
                                                                                                                                        "intersects": false,
                                                                                                                                        "transformFlags": 32780,
                                                                                                                                        "parent": null,
                                                                                                                                        "emitNode": null,
                                                                                                                                        "start": 100,
                                                                                                                                        "end": 109
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "flags": 0,
                                                                                                                                "intersects": false,
                                                                                                                                "parent": null,
                                                                                                                                "emitNode": null,
                                                                                                                                "start": 105,
                                                                                                                                "end": 110
                                                                                                                            },
                                                                                                                            "flags": 0,
                                                                                                                            "intersects": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "parent": null,
                                                                                                                            "emitNode": null,
                                                                                                                            "start": 99,
                                                                                                                            "end": 110
                                                                                                                        },
                                                                                                                        "accessModifier": null,
                                                                                                                        "decorators": null,
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "parent": null,
                                                                                                                        "emitNode": null,
                                                                                                                        "start": 95,
                                                                                                                        "end": 110
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "intersects": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "parent": null,
                                                                                                                "emitNode": null,
                                                                                                                "start": 95,
                                                                                                                "end": 110
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 93,
                                                                                                            "end": 111
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "multiline": false,
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 91,
                                                                                                    "end": 111
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 89,
                                                                                                "end": 112
                                                                                            },
                                                                                            "decorators": null,
                                                                                            "accessModifier": null,
                                                                                            "isReadOnly": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 1,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 84,
                                                                                            "end": 112
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
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
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 114,
                                                                                        "end": 114
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 113,
                                                                                    "end": 115
                                                                                },
                                                                                "typeParameters": null,
                                                                                "type": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 4,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 66,
                                                                                "end": 115
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 62,
                                                                            "end": 115
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 62,
                                                                    "end": 115
                                                                },
                                                                "flags": 16,
                                                                "intersects": false,
                                                                "transformFlags": 769,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 59,
                                                                "end": 115
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 59,
                                                        "end": 115
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 58,
                                                    "end": 120
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 260,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 39,
                                                "end": 120
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 39,
                                        "end": 120
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 37,
                                    "end": 122
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 122
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 18,
                        "end": 122
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 123
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 123
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 123
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

