# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: if I switch while I sleep
## Input

`````js
{ { { if I switch while I sleep
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ { { if I switch while I sleep",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
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
                                                    "start": 8,
                                                    "end": 10
                                                },
                                                "consequent": {
                                                    "kind": 2097362,
                                                    "expression": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "caseBlock": {
                                                        "kind": 2093,
                                                        "clauses": [],
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 17
                                                },
                                                "alternate": null,
                                                "isWebCompat": true,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 17
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
                                                    "start": 23,
                                                    "end": 25
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
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 31
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 31
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 31
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 31
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 26,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

