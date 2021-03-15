# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_call_expr
> :: test: in call expr
> :: case: [!.length
## Input

`````js
x([!.length)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x([!.length)",
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
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 65774,
                                        "operator": "!",
                                        "operand": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 4
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "length",
                                                "rawText": "length",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 11
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 11,
                                            "period": {
                                                "kind": 255,
                                                "pos": 4,
                                                "end": 5
                                            }
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 11
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 3,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 11,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

