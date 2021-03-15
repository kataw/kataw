# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_block
> :: test: with unclosed block
> :: case: if I switch while I sleep
## Input

`````js
{ {} finally(x) { if I switch while I sleep
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ {} finally(x) { if I switch while I sleep",
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
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 2097375,
                        "block": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyBlock": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 66224,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 15
                    },
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
                                        "start": 20,
                                        "end": 22
                                    },
                                    "consequent": {
                                        "kind": 2097362,
                                        "expression": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "caseBlock": {
                                            "kind": 2093,
                                            "clauses": [],
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 29
                                    },
                                    "alternate": null,
                                    "isWebCompat": true,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 29
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
                                        "start": 35,
                                        "end": 37
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
                                            "start": 37,
                                            "end": 43
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 43
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 43
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 43
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 43
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 30,
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
            "message": "')' expected.",
            "start": 38,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

