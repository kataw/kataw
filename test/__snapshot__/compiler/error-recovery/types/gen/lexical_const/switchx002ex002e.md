# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: switch..
## Input

`````js
const x: switch..= {x:switch..}:switch..
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: switch..= {x:switch..}:switch..",
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
                                        "start": 8,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 8,
                                    "end": 16
                                },
                                "right": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 17
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 18
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 67175096,
                                "member": {
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
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "right": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 22
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 22
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "switch",
                                                "rawText": "switch",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 28
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 28
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 29,
                                "period": {
                                    "kind": 255,
                                    "pos": 28,
                                    "end": 29
                                }
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 30,
                            "period": {
                                "kind": 255,
                                "pos": 29,
                                "end": 30
                            }
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 30
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 30
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 30
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 67175096,
                    "member": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 38
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 39,
                    "period": {
                        "kind": 255,
                        "pos": 38,
                        "end": 39
                    }
                },
                "expression": {
                    "kind": 196711,
                    "text": "",
                    "rawText": "",
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
                "end": 40,
                "period": {
                    "kind": 255,
                    "pos": 39,
                    "end": 40
                }
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 39,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

