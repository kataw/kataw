# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: catch try {}
## Input

`````js
{ { { catch try {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ { { catch try {}",
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
                                                        "start": 5,
                                                        "end": 5
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 5
                                                },
                                                "catchClause": {
                                                    "kind": 2095,
                                                    "catchParameter": null,
                                                    "block": {
                                                        "kind": 2099237,
                                                        "block": {
                                                            "kind": 2084,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 11
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 11,
                                                        "end": 11
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 16,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "finallyBlock": null,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 16,
                                                "start": 5,
                                                "end": 11
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
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 18
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
                                                        "start": 18,
                                                        "end": 18
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 18,
                                                    "end": 18
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 18
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 18
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 18
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 18
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 18
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 18
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 6,
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
            "message": "'finally' expected.",
            "start": 17,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

