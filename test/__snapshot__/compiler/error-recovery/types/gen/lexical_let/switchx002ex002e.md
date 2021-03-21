# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_let
> :: test: lexical let
> :: case: switch..
## Input

`````js
let x: switch.. switch..
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: switch.. switch..",
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
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 8383,
                                "left": {
                                    "kind": 8383,
                                    "left": {
                                        "kind": 8383,
                                        "left": {
                                            "kind": 8383,
                                            "left": {
                                                "kind": 196711,
                                                "text": "switch",
                                                "rawText": "switch",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 13
                                            },
                                            "right": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 6,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 196711,
                                            "text": "switch",
                                            "rawText": "switch",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 22
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 6,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 6,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 24
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 24
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 23,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

