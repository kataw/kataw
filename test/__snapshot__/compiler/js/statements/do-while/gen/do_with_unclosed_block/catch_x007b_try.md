# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_with_unclosed_block
> :: test: do with unclosed block
> :: case: catch { try
## Input

`````js
do {} while (x) { catch { try
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do {} while (x) { catch { try",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
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
            "statement": {
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
                "start": 2,
                "end": 5
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
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
                                "start": 17,
                                "end": 17
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 17
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
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 29
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
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 29
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 29
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 29
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 29
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 16,
                            "start": 17,
                            "end": 29
                        },
                        "finallyBlock": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 16,
                        "start": 17,
                        "end": 29
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 29
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 29
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 26,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

