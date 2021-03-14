# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_function_param_with_block
> :: test: in function param with block
> :: case: unknown): asserts value is
## Input

`````js
function ( unknown): asserts value is ) {unknown): asserts value is}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( unknown): asserts value is ) {unknown): asserts value is}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "unknown",
                            "rawText": "unknown",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 18
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
                        "start": 10,
                        "end": 18
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 19
            },
            "type": {
                "kind": 8426,
                "asserts": true,
                "parameterName": {
                    "kind": 196712,
                    "text": "value",
                    "rawText": "value",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 34
                },
                "type": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196712,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 37
                    },
                    "typeArguments": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 37,
                    "end": 39
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 20,
                "end": 37
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "unknown",
                                            "rawText": "unknown",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 48
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 48
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 48
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 48
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 48
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 48
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "asserts",
                "rawText": "asserts",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 50,
                "end": 58
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 58
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "value",
                "rawText": "value",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 64
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 64
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "is",
                "rawText": "is",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 64,
            "end": 67
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 59,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 67,
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

