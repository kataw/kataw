# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: { async *method([[x, y, z] = [4, 5,
## Input

`````js
{ { async *method([[x, y, z] = [4, 5, }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ { async *method([[x, y, z] = [4, 5, }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 196712,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 9
                                        },
                                        "operator": "*",
                                        "right": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 17
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 98822,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [
                                                                {
                                                                    "kind": 65550,
                                                                    "left": {
                                                                        "kind": 98822,
                                                                        "elementList": {
                                                                            "kind": 65605,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 196712,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 20,
                                                                                    "end": 21
                                                                                },
                                                                                {
                                                                                    "kind": 196712,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 22,
                                                                                    "end": 24
                                                                                },
                                                                                {
                                                                                    "kind": 196712,
                                                                                    "text": "z",
                                                                                    "rawText": "z",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 25,
                                                                                    "end": 27
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 20,
                                                                            "end": 27
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 19,
                                                                        "end": 28
                                                                    },
                                                                    "operator": "=",
                                                                    "right": {
                                                                        "kind": 98822,
                                                                        "elementList": {
                                                                            "kind": 65605,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 4261540,
                                                                                    "text": 4,
                                                                                    "rawText": "4",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 32,
                                                                                    "end": 33
                                                                                },
                                                                                {
                                                                                    "kind": 4261540,
                                                                                    "text": 5,
                                                                                    "rawText": "5",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 34,
                                                                                    "end": 36
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 32,
                                                                            "end": 37
                                                                        },
                                                                        "flags": 1,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 37
                                                                    },
                                                                    "flags": 1,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 19,
                                                                    "end": 37
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 37
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 37
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 1,
                                                "symbol": null,
                                                "start": 19,
                                                "end": 37
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 37
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 37
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 37
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 37
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 39
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 38,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

