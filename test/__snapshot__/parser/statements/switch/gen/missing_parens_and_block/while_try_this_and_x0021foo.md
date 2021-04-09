# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
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
    "kind": 122,
    "statements": [
        {
            "kind": 160,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 11,
                            "end": 11
                        },
                        "statements": [
                            {
                                "kind": 154,
                                "expression": {
                                    "kind": 253,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 17,
                                    "end": 17
                                },
                                "statement": {
                                    "kind": 159,
                                    "block": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "catchClause": null,
                                    "finallyBlock": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 17,
                                    "end": 21
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 11,
                                "end": 21
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 135,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 21,
                                "end": 26
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "and",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 26,
                                "end": 30
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 30,
                                    "end": 35
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 30,
                                "end": 35
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 6,
                        "end": 35
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "switch case while try this and !foo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 6,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 11,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 17,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 35,
            "end": 35
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: while try this and !foo
## Input

`````js
switch case while try this and !foo
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: while try this and !foo
## Input

`````js
switch case while try this and !foo
`````
```

