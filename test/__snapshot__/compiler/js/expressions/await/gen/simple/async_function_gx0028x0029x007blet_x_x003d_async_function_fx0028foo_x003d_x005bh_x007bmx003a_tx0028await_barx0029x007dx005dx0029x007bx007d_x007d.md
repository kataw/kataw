# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "start": 14,
                    "end": 16
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
                    "start": 17,
                    "end": 18
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
                                                "start": 22,
                                                "end": 24
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
                                                    "start": 41,
                                                    "end": 43
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
                                                                "start": 44,
                                                                "end": 47
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
                                                                            "start": 51,
                                                                            "end": 52
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
                                                                                            "start": 55,
                                                                                            "end": 56
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
                                                                                                "start": 57,
                                                                                                "end": 59
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
                                                                                                            "start": 65,
                                                                                                            "end": 69
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 32780,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 60,
                                                                                                        "end": 69
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "transformFlags": 0,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 65,
                                                                                                "end": 70
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 59,
                                                                                            "end": 70
                                                                                        },
                                                                                        "accessModifier": null,
                                                                                        "decorators": null,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 55,
                                                                                        "end": 70
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 55,
                                                                                "end": 70
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 53,
                                                                            "end": 71
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 51,
                                                                    "end": 71
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 49,
                                                                "end": 72
                                                            },
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 44,
                                                            "end": 72
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 44,
                                                    "end": 73
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
                                                        "start": 74,
                                                        "end": 74
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 73,
                                                    "end": 75
                                                },
                                                "typeParameters": null,
                                                "type": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 4,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 26,
                                                "end": 75
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 22,
                                            "end": 75
                                        }
                                    ],
                                    "flags": 16,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 22,
                                    "end": 75
                                },
                                "flags": 16,
                                "intersects": false,
                                "transformFlags": 769,
                                "parent": null,
                                "emitNode": null,
                                "start": 19,
                                "end": 75
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 19,
                        "end": 75
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 80
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 260,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 80
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 80
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
    "end": 80
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

