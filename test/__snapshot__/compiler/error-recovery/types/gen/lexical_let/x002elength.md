# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_let
> :: test: lexical let
> :: case: .length
## Input

`````js
let x: .length .length
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: .length .length",
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
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 196711,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 6,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 22
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 22
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 7,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

