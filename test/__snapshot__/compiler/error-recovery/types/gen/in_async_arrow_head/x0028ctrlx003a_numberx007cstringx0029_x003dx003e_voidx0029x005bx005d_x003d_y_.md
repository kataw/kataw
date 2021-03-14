# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_async_arrow_head
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
>>>>>>> chore: autogen & update snapshots
> :: test: in async arrow head
> :: case: (ctrl: number|string) => void)[] = y;
## Input

`````js
async ([ (ctrl: number|string) => void)[] = y; , x: (ctrl: number|string) => void)[] = y; ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ (ctrl: number|string) => void)[] = y; , x: (ctrl: number|string) => void)[] = y; ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 1073807915,
                        "expression": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
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
                                                "kind": 83976,
                                                "typeParameters": null,
                                                "arrowParameters": {
                                                    "kind": 81929,
                                                    "elements": [
                                                        {
                                                            "kind": 16473,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 196712,
                                                                "text": "ctrl",
                                                                "rawText": "ctrl",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 10,
                                                                "end": 14
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 8432,
                                                                "types": [
                                                                    {
                                                                        "kind": 4202657,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2097152,
                                                                        "start": 15,
                                                                        "end": 22
                                                                    },
                                                                    {
                                                                        "kind": 4202702,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2097152,
                                                                        "start": 23,
                                                                        "end": 29
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 22,
                                                                "end": 29
                                                            },
                                                            "initializer": null,
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 8,
                                                            "end": 29
                                                        }
                                                    ],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 30
                                                },
                                                "contents": {
                                                    "kind": 65774,
                                                    "operator": "void",
                                                    "operand": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 38
                                                },
                                                "flags": 1073741825,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 38
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 38
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 38
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "symbol": null,
                            "start": 8,
                            "end": 39
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 39
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 41
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 45
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 45
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 50
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 83976,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 196712,
                                    "text": "ctrl",
                                    "rawText": "ctrl",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 57
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 8432,
                                    "types": [
                                        {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 58,
                                            "end": 65
                                        },
                                        {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 66,
                                            "end": 72
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 65,
                                    "end": 72
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 51,
                                "end": 72
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 73
                    },
                    "contents": {
                        "kind": 65774,
                        "operator": "void",
                        "operand": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 81,
                            "end": 81
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 76,
                        "end": 81
                    },
                    "flags": 1073741825,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 81
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 51,
                "end": 81
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 48,
            "end": 81
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 83
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 84
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 88
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 82,
                "end": 88
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 82,
            "end": 89
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
                "start": 97,
                "end": 97
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 95,
            "end": 98
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 81,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 90,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 91,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 93,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

