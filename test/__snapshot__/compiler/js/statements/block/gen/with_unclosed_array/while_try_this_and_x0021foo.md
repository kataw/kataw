# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: while try this and !foo
## Input

`````js
{[ while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{[ while try this and !foo",
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
                                "start": 2,
                                "end": 2
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 8
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
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
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
                            "start": 8,
                            "end": 12
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 12
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4260571,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 74398,
                            "expression": {
                                "kind": 196712,
                                "text": "and",
                                "rawText": "and",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 23
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 26
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 26
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 23,
            "length": 0
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

