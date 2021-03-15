# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: switch a..
## Input

`````js
import switch a.. = switch a.. ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import switch a.. = switch a.. ;",
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
                "kind": 65550,
                "left": {
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
                            "start": 13,
                            "end": 15
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16,
                        "period": {
                            "kind": 255,
                            "pos": 15,
                            "end": 16
                        }
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 17,
                    "period": {
                        "kind": 255,
                        "pos": 16,
                        "end": 17
                    }
                },
                "operator": "=",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 19
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
                        "start": 26,
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
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 30
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 32
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
            "message": "Dot property must be an identifier",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 27,
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
            "start": 31,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

