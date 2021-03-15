# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
async function g(){let o = {f(foo = await bar){}}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function g(){let o = {f(foo = await bar){}}    }",
    "filename": "",
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
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
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
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 16844946,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 29
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
                                                                        "start": 30,
                                                                        "end": 33
                                                                    },
                                                                    "isOptional": false,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 196712,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 35,
                                                                        "end": 41
                                                                    },
                                                                    "decorators": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 30,
                                                                    "end": 41
                                                                },
                                                                {
                                                                    "kind": 16473,
                                                                    "ellipsis": false,
                                                                    "binding": {
                                                                        "kind": 131102,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 1,
                                                                        "symbol": null,
                                                                        "transformFlags": 1025,
                                                                        "start": 41,
                                                                        "end": 45
                                                                    },
                                                                    "isOptional": false,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "decorators": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 41,
                                                                    "end": 45
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 46
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
                                                                "start": 47,
                                                                "end": 47
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "decorators": null,
                                                        "type": null,
                                                        "accessModifier": null,
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 48
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 48
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 49
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 49
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 49
                            },
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 19,
                            "end": 49
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 49
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 42,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

