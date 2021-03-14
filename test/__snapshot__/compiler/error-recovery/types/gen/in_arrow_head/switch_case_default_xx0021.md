# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_arrow_head
> :: test: in arrow head
> :: case: switch case default x!
## Input

`````js
([ switch case default x! , x: switch case default x! ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ switch case default x! , x: switch case default x! ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 14
                        },
                        "statements": [],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 14
                    },
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 2097292,
                                "label": {
                                    "kind": 65590,
                                    "expressions": [
                                        {
                                            "kind": 74398,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 24
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 24,
                                            "end": 25
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 29
                                },
                                "statement": {
                                    "kind": 2097362,
                                    "expression": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "caseBlock": {
                                        "kind": 2093,
                                        "clauses": [
                                            {
                                                "kind": 46,
                                                "expression": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 42
                                                },
                                                "statements": [],
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 42
                                            },
                                            {
                                                "kind": 65,
                                                "statements": [
                                                    {
                                                        "kind": 2097233,
                                                        "expression": {
                                                            "kind": 74398,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 50,
                                                                "end": 52
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 52,
                                                            "end": 53
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 53
                                                    }
                                                ],
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 53
                                            }
                                        ],
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 53
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 53
                                },
                                "isWebCompat": true,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 53
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 53
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 53
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 2,
            "end": 53
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
                "start": 61,
                "end": 61
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 59,
            "end": 62
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 23,
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
            "message": "Identifier expected",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 55,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 57,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

