# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\block_with_invalid_array
> :: test: block with invalid array
> :: case: {{{ &/ function while}}
## Input

`````js
{ [catch] {{{ &/ function while}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ [catch] {{{ &/ function while}}",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
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
                            "start": 1,
                            "end": 3
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
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
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "finallyBlock": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
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
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65563,
                                                    "left": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 13,
                                                        "end": 13
                                                    },
                                                    "operator": "&",
                                                    "right": {
                                                        "kind": 4260544,
                                                        "text": "/ function while}}",
                                                        "flags": 1048576,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 33
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 33
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 33
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 33
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 33
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 33
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 33
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 33
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 33
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 33,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 15,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

