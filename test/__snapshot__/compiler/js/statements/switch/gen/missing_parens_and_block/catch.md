# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\switch\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: catch
## Input

`````js
switch case catch
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch case catch",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
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
                            "start": 11,
                            "end": 11
                        },
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
                                        "start": 11,
                                        "end": 11
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 11
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
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 16,
                                    "start": 11,
                                    "end": 17
                                },
                                "finallyBlock": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 16,
                                "start": 11,
                                "end": 17
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 17
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

