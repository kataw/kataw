# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: try { !xxx
## Input

`````js
do do do try { !xxx while while while
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 37,
                "end": 37
            },
            "whileKeyword": null,
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 37,
                    "end": 37
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 37,
                        "end": 37
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 64,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "flags": 16,
                                        "start": 14,
                                        "end": 19
                                    },
                                    {
                                        "kind": 154,
                                        "whileKeyword": {
                                            "kind": 37757028,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "statement": {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 0,
                                                "start": 25,
                                                "end": 31
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "statement": {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 0,
                                                    "start": 31,
                                                    "end": 37
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 64,
                                                        "start": 37,
                                                        "end": 37
                                                    },
                                                    "flags": 16,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "flags": 16,
                                            "start": 25,
                                            "end": 37
                                        },
                                        "flags": 16,
                                        "start": 19,
                                        "end": 37
                                    }
                                ],
                                "flags": 16,
                                "start": 14,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 37
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 37,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 37,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 37
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 37
                },
                "flags": 16,
                "start": 2,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "do do do try { !xxx while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 25
✖ Expression expected - start: 25, end: 31
✖ Expression expected - start: 31, end: 37

```

