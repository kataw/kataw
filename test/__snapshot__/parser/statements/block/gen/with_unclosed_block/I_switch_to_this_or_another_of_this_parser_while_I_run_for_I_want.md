# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ {} finally(x) { I switch to this or another of this parser while I run for I want
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 4
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
                    "start": 12,
                    "end": 12
                },
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 81921,
                            "value": "I",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 19
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 19
        },
        {
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": "to",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 29
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "autofix": 0,
                "flags": 128,
                "start": 29,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 135,
                "autofix": 0,
                "flags": 768,
                "start": 29,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "or",
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "another",
                "autofix": 0,
                "flags": 768,
                "start": 37,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 37,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "of",
                "autofix": 0,
                "flags": 768,
                "start": 45,
                "end": 48
            },
            "autofix": 0,
            "flags": 128,
            "start": 45,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 135,
                "autofix": 0,
                "flags": 768,
                "start": 48,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 48,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "parser",
                "autofix": 0,
                "flags": 768,
                "start": 53,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 53,
            "end": 60
        },
        {
            "kind": 154,
            "expression": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 66,
                "end": 68
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "run",
                    "autofix": 0,
                    "flags": 768,
                    "start": 68,
                    "end": 72
                },
                "autofix": 0,
                "flags": 128,
                "start": 68,
                "end": 72
            },
            "autofix": 0,
            "flags": 128,
            "start": 60,
            "end": 72
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 76,
                "end": 78
            },
            "condition": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 83,
                "end": 83
            },
            "incrementor": {
                "kind": 81921,
                "value": "want",
                "autofix": 0,
                "flags": 768,
                "start": 78,
                "end": 83
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 83,
                    "end": 83
                },
                "autofix": 0,
                "flags": 128,
                "start": 83,
                "end": 83
            },
            "autofix": 0,
            "flags": 128,
            "start": 72,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 37,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 48
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 48,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 60
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 60,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 66,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 72,
            "end": 76
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 76,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 78,
            "end": 83
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 83,
            "end": 83
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 83,
            "end": 83
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 83,
            "end": 83
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 83,
            "end": 83
        }
    ],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ {} finally(x) { I switch to this or another of this parser while I run for I want
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ {} finally(x) { I switch to this or another of this parser while I run for I want
`````
```

