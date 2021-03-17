# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: if ever I run into a {, then this is a brace and I switch or try to switch to [
## Input

`````js
{ if ever I run into a {, then this is a brace and I switch or try to switch to [ }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ if ever I run into a {, then this is a brace and I switch or try to switch to [ }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097257,
                        "expression": {
                            "kind": 196712,
                            "text": "ever",
                            "rawText": "ever",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 9
                        },
                        "consequent": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "I",
                                "rawText": "I",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "alternate": null,
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 11
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "run",
                            "rawText": "run",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 15
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "into",
                            "rawText": "into",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 24
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "then",
                "rawText": "then",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 30
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260571,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 35
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "is",
                "rawText": "is",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 38
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 38
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 38,
            "end": 40
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "brace",
                "rawText": "brace",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 40,
            "end": 46
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "and",
                "rawText": "and",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 46,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 46,
            "end": 50
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "I",
                "rawText": "I",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 50,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 52
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "or",
                "rawText": "or",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 59,
                "end": 62
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 62,
                "end": 62
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 52,
            "end": 62
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
                    "start": 66,
                    "end": 66
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 66,
                "end": 66
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
                    "start": 66,
                    "end": 66
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 66,
                "end": 66
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 62,
            "end": 66
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "to",
                "rawText": "to",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 66,
                "end": 69
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 66,
            "end": 69
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 196712,
                    "text": "to",
                    "rawText": "to",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 79
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 81
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 79,
                "end": 81
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 81,
                "end": 83
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 83
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
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
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 60,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 63,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 70,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 77,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 82,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

