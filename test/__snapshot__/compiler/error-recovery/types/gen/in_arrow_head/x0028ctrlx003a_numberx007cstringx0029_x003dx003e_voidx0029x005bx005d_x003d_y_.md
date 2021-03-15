# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_arrow_head
> :: test: in arrow head
> :: case: (ctrl: number|string) => void)[] = y;
## Input

`````js
([ (ctrl: number|string) => void)[] = y; , x: (ctrl: number|string) => void)[] = y; ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ (ctrl: number|string) => void)[] = y; , x: (ctrl: number|string) => void)[] = y; ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 66224,
                        "expression": {
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
                                                        "start": 4,
                                                        "end": 8
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
                                                                "start": 9,
                                                                "end": 16
                                                            },
                                                            {
                                                                "kind": 4202702,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 17,
                                                                "end": 23
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 16,
                                                        "end": 23
                                                    },
                                                    "initializer": null,
                                                    "decorators": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 2,
                                                    "end": 23
                                                }
                                            ],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 24
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
                                                "start": 32,
                                                "end": 32
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 32
                                        },
                                        "flags": 1073741825,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 32
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 32
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 33
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 39
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 40
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
                "start": 42,
                "end": 44
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
                                    "start": 47,
                                    "end": 51
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
                                            "start": 52,
                                            "end": 59
                                        },
                                        {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 60,
                                            "end": 66
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 59,
                                    "end": 66
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 45,
                                "end": 66
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 67
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
                            "start": 75,
                            "end": 75
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 75
                    },
                    "flags": 1073741825,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 75
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 75
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 42,
            "end": 75
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
                        "start": 77,
                        "end": 77
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 78
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 82
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 76,
                "end": 82
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 76,
            "end": 83
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
                "start": 91,
                "end": 91
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 89,
            "end": 92
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 75,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 84,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 85,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 87,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

