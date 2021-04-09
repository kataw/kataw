# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: while try this and !foo
## Input

`````js
switch {} default(x) { while try this and !foo
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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 20
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 17,
                                "end": 20
                            },
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 154,
                                            "expression": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 28,
                                                "end": 28
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
                                                        "start": 32,
                                                        "end": 32
                                                    },
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 32,
                                                    "end": 32
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
                                                        "start": 32,
                                                        "end": 32
                                                    },
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 22,
                                            "end": 32
                                        }
                                    ],
                                    "multiLine": false,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 22,
                                    "end": 32
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 20,
                                "end": 32
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 135,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 32,
                                    "end": 37
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 32,
                                "end": 37
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "and",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 37,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 37,
                                "end": 41
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 46
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 41,
                                "end": 46
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 9,
                        "end": 46
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { while try this and !foo",
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
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 28,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 37,
            "end": 41
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 46,
            "end": 46
        }
    ],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: while try this and !foo
## Input

`````js
switch {} default(x) { while try this and !foo
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: while try this and !foo
## Input

`````js
switch {} default(x) { while try this and !foo
`````
```

