# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: if I switch while I sleep
## Input

`````js
{ if I switch while I sleep
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ if I switch while I sleep",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097257,
                        "expression": {
                            "kind": 196712,
                            "text": "I",
                            "rawText": "I",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "consequent": {
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
                                "clauses": [],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 13
                        },
                        "alternate": null,
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 13
                    },
                    {
                        "kind": 2097399,
                        "expression": {
                            "kind": 196712,
                            "text": "I",
                            "rawText": "I",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 27
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 27
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 27
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
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
            "message": "'(' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

