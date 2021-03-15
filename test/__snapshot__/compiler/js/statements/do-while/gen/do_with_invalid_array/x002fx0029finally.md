# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\do-while\gen\do_with_invalid_array
> :: test: do with invalid array
> :: case: /)finally
## Input

`````js
do while [catch] /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do while [catch] /)finally",
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
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 2097399,
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
                        "start": 10,
                        "end": 10
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "statement": {
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
                            "start": 10,
                            "end": 10
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
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
                        "transformFlags": 16,
                        "start": 10,
                        "end": 15
                    },
                    "finallyBlock": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 16,
                    "start": 10,
                    "end": 15
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 15
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/)finally",
                "flags": 1048576,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 26
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
            "message": "']' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 26,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

