# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: switch case default x!
## Input

`````js
import switch case default x! = switch case default x! ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import switch case default x! = switch case default x! ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 13
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
                            "start": 18,
                            "end": 18
                        },
                        "statements": [],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 18
                    },
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 74398,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 31
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 31
                            },
                            {
                                "kind": 2097362,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 38
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
                                                "start": 43,
                                                "end": 43
                                            },
                                            "statements": [],
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 43
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
                                                            "start": 51,
                                                            "end": 53
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 53,
                                                        "end": 54
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 56
                                                }
                                            ],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 56
                                        }
                                    ],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 56
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 56
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 56
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 56
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 56
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 27,
            "length": 0
        },
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
            "message": "'(' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 55,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

