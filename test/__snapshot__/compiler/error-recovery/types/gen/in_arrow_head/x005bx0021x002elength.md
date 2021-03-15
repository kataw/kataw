# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_arrow_head
> :: test: in arrow head
> :: case: [!.length
## Input

`````js
([ [!.length , x: [!.length ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ [!.length , x: [!.length ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 74398,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
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
                                                                "start": 5,
                                                                "end": 5
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 6,
                                                                "end": 12
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 5,
                                                            "end": 12,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 5,
                                                                "end": 6
                                                            }
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 4,
                                                        "end": 12
                                                    },
                                                    {
                                                        "kind": 196712,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 16
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 16
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 16
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 134226144,
                                "elementTypes": [],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 17,
                                "end": 19
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 19
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 19
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 19,
                    "end": 20
                },
                "expression": {
                    "kind": 196711,
                    "text": "length",
                    "rawText": "length",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 27,
                "period": {
                    "kind": 255,
                    "pos": 20,
                    "end": 21
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 31,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

