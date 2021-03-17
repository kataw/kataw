# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: switch case default x!
## Input

`````js
switch case default x! class switch case default x! { field: switch case default x!}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch case default x! class switch case default x! { field: switch case default x!}",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
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
                            "start": 11,
                            "end": 11
                        },
                        "statements": [],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 11
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
                                        "start": 19,
                                        "end": 21
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 21,
                                    "end": 22
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            {
                                "kind": 48,
                                "name": null,
                                "typeParameters": null,
                                "classHeritage": null,
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 22,
                                    "end": 22
                                },
                                "decorators": null,
                                "isAbstract": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 22,
                                "end": 28
                            },
                            {
                                "kind": 2097362,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
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
                                                "start": 40,
                                                "end": 40
                                            },
                                            "statements": [],
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 40
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
                                                            "start": 48,
                                                            "end": 50
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 50,
                                                        "end": 51
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 51
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
                                                                    "text": "field",
                                                                    "rawText": "field",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 59
                                                                },
                                                                "statement": {
                                                                    "kind": 2097362,
                                                                    "expression": {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 67
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
                                                                                    "start": 72,
                                                                                    "end": 72
                                                                                },
                                                                                "statements": [],
                                                                                "flags": 1,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 67,
                                                                                "end": 72
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
                                                                                                "start": 80,
                                                                                                "end": 82
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 2097152,
                                                                                            "start": 82,
                                                                                            "end": 83
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 80,
                                                                                        "end": 83
                                                                                    }
                                                                                ],
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 72,
                                                                                "end": 83
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 84
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 60,
                                                                    "end": 84
                                                                },
                                                                "isWebCompat": true,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 84
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 84
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 84
                                                }
                                            ],
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 84
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 84
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 84
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 84
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 68,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 73,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 81,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 83,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

