# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{( I switch to this or another of this parser while I run for I want
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
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 4
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
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": "to",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 14
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 135,
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "or",
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "another",
                "autofix": 0,
                "flags": 768,
                "start": 22,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 22,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "of",
                "autofix": 0,
                "flags": 768,
                "start": 30,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 135,
                "autofix": 0,
                "flags": 768,
                "start": 33,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 33,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "parser",
                "autofix": 0,
                "flags": 768,
                "start": 38,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 38,
            "end": 45
        },
        {
            "kind": 154,
            "expression": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 51,
                "end": 53
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "run",
                    "autofix": 0,
                    "flags": 768,
                    "start": 53,
                    "end": 57
                },
                "autofix": 0,
                "flags": 128,
                "start": 53,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 45,
            "end": 57
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 61,
                "end": 63
            },
            "condition": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 68,
                "end": 68
            },
            "incrementor": {
                "kind": 81921,
                "value": "want",
                "autofix": 0,
                "flags": 768,
                "start": 63,
                "end": 68
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 68,
                    "end": 68
                },
                "autofix": 0,
                "flags": 128,
                "start": 68,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 57,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "{( I switch to this or another of this parser while I run for I want",
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
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 33,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 57
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57,
            "end": 61
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 61,
            "end": 63
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 63,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 68,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 68,
            "end": 68
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{( I switch to this or another of this parser while I run for I want
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{( I switch to this or another of this parser while I run for I want
`````
```

