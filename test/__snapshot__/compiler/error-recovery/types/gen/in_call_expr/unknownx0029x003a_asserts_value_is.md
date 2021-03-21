# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_call_expr
> :: test: in call expr
> :: case: unknown): asserts value is
## Input

`````js
x(unknown): asserts value is)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x(unknown): asserts value is)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "unknown",
                                "rawText": "unknown",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 9
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
                            "start": 2,
                            "end": 28
                        }
                    ],
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
                            "start": 19,
                            "end": 25
                        },
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 28
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 28,
                            "end": 29
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 11,
                        "end": 28
                    },
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 28
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 28,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

