# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: with
## Input

`````js
const x: with= {x:with}:with
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: with= {x:with}:with",
    "filename": "",
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
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "with",
                                "rawText": "with",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 14
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 18
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "with",
                                        "rawText": "with",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 22
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 23
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 23
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 23
        },
        {
            "kind": 2097400,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 28
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 28
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 24,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

