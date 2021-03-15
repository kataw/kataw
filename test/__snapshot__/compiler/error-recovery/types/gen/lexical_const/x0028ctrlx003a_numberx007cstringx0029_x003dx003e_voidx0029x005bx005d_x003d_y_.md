# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_const
> :: test: lexical const
> :: case: (ctrl: number|string) => void)[] = y;
## Input

`````js
const x: (ctrl: number|string) => void)[] = y;= {x:(ctrl: number|string) => void)[] = y;}:(ctrl: number|string) => void)[] = y;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: (ctrl: number|string) => void)[] = y;= {x:(ctrl: number|string) => void)[] = y;}:(ctrl: number|string) => void)[] = y;",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
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
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "ctrl",
                                            "rawText": "ctrl",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
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
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 10,
                                        "end": 29
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 10,
                                "end": 29
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 33,
                                "end": 38
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 38
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 38
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 38
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 38
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
                        "start": 40,
                        "end": 40
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
                "start": 39,
                "end": 45
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 46
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 49,
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
                                                "start": 52,
                                                "end": 56
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
                                                        "start": 57,
                                                        "end": 64
                                                    },
                                                    {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 65,
                                                        "end": 71
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 64,
                                                "end": 71
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 51,
                                            "end": 71
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 72
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
                                        "start": 80,
                                        "end": 80
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 80
                                },
                                "flags": 1073741825,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 80
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 80
                        },
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 80
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 49,
                "end": 80
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 47,
            "end": 80
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
                        "start": 82,
                        "end": 82
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 83
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 87
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 81,
                "end": 87
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 81,
            "end": 88
        },
        {
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
                                "start": 91,
                                "end": 95
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
                                        "start": 96,
                                        "end": 103
                                    },
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 104,
                                        "end": 110
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 103,
                                "end": 110
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 90,
                            "end": 110
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 111
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
                        "start": 119,
                        "end": 119
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 119
                },
                "flags": 1073741825,
                "symbol": null,
                "transformFlags": 0,
                "start": 90,
                "end": 119
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 90,
            "end": 119
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
                        "start": 121,
                        "end": 121
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 122
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 126
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 120,
                "end": 126
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 120,
            "end": 127
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 80,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 88,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 89,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 119,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 127
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

