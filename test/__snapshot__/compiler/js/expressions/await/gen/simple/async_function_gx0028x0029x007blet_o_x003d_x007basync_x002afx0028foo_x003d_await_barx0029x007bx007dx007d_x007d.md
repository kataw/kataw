# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/simple
> :: test: simple
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
async function g(){let o = {async *f(foo = await bar){}}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function g(){let o = {async *f(foo = await bar){}}    }",
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
                                                        "kind": 18352149,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 35,
                                                            "end": 36
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
                                                                        "start": 37,
                                                                        "end": 40
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
                                                                            "start": 48,
                                                                            "end": 52
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 32780,
                                                                        "start": 42,
                                                                        "end": 52
                                                                    },
                                                                    "decorators": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 37,
                                                                    "end": 52
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 37,
                                                            "end": 53
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
                                                                "start": 54,
                                                                "end": 54
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 55
                                                        },
                                                        "decorators": null,
                                                        "type": null,
                                                        "accessModifier": null,
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097160,
                                                        "start": 36,
                                                        "end": 55
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 55
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 56
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 56
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 56
                            },
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 19,
                            "end": 56
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 56
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 61
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
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

