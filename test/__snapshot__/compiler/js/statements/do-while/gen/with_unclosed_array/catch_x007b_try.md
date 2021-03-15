# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\do-while\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
do[ catch { try
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do[ catch { try",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "statement": {
                "kind": 2097233,
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
                        "start": 3,
                        "end": 3
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 3
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
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
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
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
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 15
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
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 15
                            }
                        ],
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 15
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 15
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 3,
                "end": 15
            },
            "finallyBlock": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 16,
            "start": 3,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 12,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

