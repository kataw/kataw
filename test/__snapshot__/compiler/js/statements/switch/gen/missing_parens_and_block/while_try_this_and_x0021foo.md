# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/switch/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: while try this and !foo
## Input

`````js
switch case while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch case while try this and !foo",
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
                                "kind": 2097399,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 17
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
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 21
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
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 21
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 21
                            },
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 4260571,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 26
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 26
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
                                        "start": 26,
                                        "end": 30
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 32
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
                                    "start": 32,
                                    "end": 35
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 35
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 35
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 35
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
            "message": "'{' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 32,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

