# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {f(foo = await bar){}}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; async function g(){let o = {f(foo = await bar){}}    }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "g",
                "rawText": "g",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 32
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
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 36,
                                            "end": 38
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
                                                            "start": 42,
                                                            "end": 43
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
                                                                        "start": 44,
                                                                        "end": 47
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
                                                                        "start": 49,
                                                                        "end": 55
                                                                    },
                                                                    "decorators": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 44,
                                                                    "end": 55
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
                                                                        "start": 55,
                                                                        "end": 59
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
                                                                    "start": 55,
                                                                    "end": 59
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 44,
                                                            "end": 60
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
                                                                "start": 61,
                                                                "end": 61
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "decorators": null,
                                                        "type": null,
                                                        "accessModifier": null,
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 62
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 63
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 63
                                    }
                                ],
                                "flags": 24,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 63
                            },
                            "flags": 24,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 33,
                            "end": 63
                        }
                    ],
                    "multiline": false,
                    "flags": 24,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 63
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 68
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 56,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

