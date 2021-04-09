# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: while try this and !foo
## Input

`````js
do do do while try this and !foo while while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "autofix": 0,
                    "flags": 0,
                    "start": 27,
                    "end": 29
                },
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 29,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 32
            },
            "statement": {
                "kind": 169,
                "expression": {
                    "kind": 81921,
                    "value": "and",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 27
                },
                "statement": {
                    "kind": 169,
                    "expression": {
                        "kind": 135,
                        "autofix": 0,
                        "flags": 768,
                        "start": 18,
                        "end": 23
                    },
                    "statement": {
                        "kind": 154,
                        "expression": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 14,
                            "end": 14
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
                                    "start": 18,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 18,
                                "end": 18
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
                                    "start": 18,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 18,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 18
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 8,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 5,
                    "end": 23
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 32
        },
        {
            "kind": 154,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 38,
                "end": 38
            },
            "statement": {
                "kind": 154,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 44,
                    "end": 44
                },
                "statement": {
                    "kind": 154,
                    "expression": {
                        "kind": 253,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 50,
                        "end": 50
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 50,
                            "end": 50
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 50,
                        "end": 50
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 44,
                    "end": 50
                },
                "autofix": 0,
                "flags": 128,
                "start": 38,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "do do do while try this and !foo while while while",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 14,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 38,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 44,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 50,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 50,
            "end": 50
        }
    ],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: while try this and !foo
## Input

`````js
do do do while try this and !foo while while while
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: while try this and !foo
## Input

`````js
do do do while try this and !foo while while while
`````
```

