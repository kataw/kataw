# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_const
> :: test: lexical const
> :: case: switch a..
## Input

`````js
const x: switch a..= {x:switch a..}:switch a..
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: switch a..= {x:switch a..}:switch a..",
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
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "switch",
                                "rawText": "switch",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 15
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 17
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 15
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 15,
                            "end": 17
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 18
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 18
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
                            "start": 22,
                            "end": 23
                        },
                        "statement": {
                            "kind": 2097362,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 196712,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33,
                                    "period": {
                                        "kind": 255,
                                        "pos": 32,
                                        "end": 33
                                    }
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34,
                                "period": {
                                    "kind": 255,
                                    "pos": 33,
                                    "end": 34
                                }
                            },
                            "caseBlock": {
                                "kind": 2093,
                                "clauses": [],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 35
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 35
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 35
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 35
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 44
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 45
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 45,
                    "period": {
                        "kind": 255,
                        "pos": 44,
                        "end": 45
                    }
                },
                "expression": {
                    "kind": 196711,
                    "text": "",
                    "rawText": "",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 46,
                "period": {
                    "kind": 255,
                    "pos": 45,
                    "end": 46
                }
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 46,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 36,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
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
            "message": "',' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 45,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

