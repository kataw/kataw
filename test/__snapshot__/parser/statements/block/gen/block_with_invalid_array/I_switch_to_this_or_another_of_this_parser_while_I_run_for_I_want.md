# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ [catch] I switch to this or another of this parser while I run for I want
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 3
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 3
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 3
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
                    "start": 3,
                    "end": 3
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 3
            },
            "catchClause": {
                "kind": 173,
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "autofix": 0,
                        "flags": 128,
                        "start": 8,
                        "end": 8
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 8,
                    "end": 8
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 8
            },
            "finallyBlock": null,
            "autofix": 0,
            "flags": 128,
            "start": 3,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 11
        },
        {
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": "to",
                "autofix": 0,
                "flags": 768,
                "start": 18,
                "end": 21
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "autofix": 0,
                "flags": 128,
                "start": 21,
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
                "value": "or",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 26,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "another",
                "autofix": 0,
                "flags": 768,
                "start": 29,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "of",
                "autofix": 0,
                "flags": 768,
                "start": 37,
                "end": 40
            },
            "autofix": 0,
            "flags": 128,
            "start": 37,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 135,
                "autofix": 0,
                "flags": 768,
                "start": 40,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 40,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "parser",
                "autofix": 0,
                "flags": 768,
                "start": 45,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 45,
            "end": 52
        },
        {
            "kind": 154,
            "expression": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 58,
                "end": 60
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "run",
                    "autofix": 0,
                    "flags": 768,
                    "start": 60,
                    "end": 64
                },
                "autofix": 0,
                "flags": 128,
                "start": 60,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 52,
            "end": 64
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 81921,
                "value": "I",
                "autofix": 0,
                "flags": 768,
                "start": 68,
                "end": 70
            },
            "condition": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 75,
                "end": 75
            },
            "incrementor": {
                "kind": 81921,
                "value": "want",
                "autofix": 0,
                "flags": 768,
                "start": 70,
                "end": 75
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 75,
                    "end": 75
                },
                "autofix": 0,
                "flags": 128,
                "start": 75,
                "end": 75
            },
            "autofix": 0,
            "flags": 128,
            "start": 64,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "{ [catch] I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
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
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 37,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 40,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 52,
            "end": 58
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 58,
            "end": 60
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 60,
            "end": 64
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 70
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 70,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 75,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 75,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 75,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 75,
            "end": 75
        }
    ],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ [catch] I switch to this or another of this parser while I run for I want
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ [catch] I switch to this or another of this parser while I run for I want
`````
```

