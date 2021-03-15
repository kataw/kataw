# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\if\gen\if_else
> :: test: if else
> :: case: catch { try
## Input

`````js
if catch { try else
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if catch { try else",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 2
            },
            "consequent": {
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
                        "start": 2,
                        "end": 2
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": null,
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
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
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 14
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
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 14
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 14
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 14
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 16,
                    "start": 2,
                    "end": 14
                },
                "finallyBlock": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 2,
                "end": 14
            },
            "alternate": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 15,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

