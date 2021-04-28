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
    "directives": [],
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
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 0,
                            "start": 4,
                            "end": 11
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "to",
                            "rawText": "to",
                            "flags": 768,
                            "start": 11,
                            "end": 14
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": [],
                            "flags": 128,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 14
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 135,
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 19
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "or",
                            "rawText": "or",
                            "flags": 768,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 128,
                        "start": 19,
                        "end": 22
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "another",
                            "rawText": "another",
                            "flags": 768,
                            "start": 22,
                            "end": 30
                        },
                        "flags": 128,
                        "start": 22,
                        "end": 30
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 768,
                            "start": 30,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 30,
                        "end": 33
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 135,
                            "flags": 768,
                            "start": 33,
                            "end": 38
                        },
                        "flags": 128,
                        "start": 33,
                        "end": 38
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "parser",
                            "rawText": "parser",
                            "flags": 768,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 128,
                        "start": 38,
                        "end": 45
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 45,
                            "end": 51
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 768,
                            "start": 51,
                            "end": 53
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "run",
                                "rawText": "run",
                                "flags": 768,
                                "start": 53,
                                "end": 57
                            },
                            "flags": 128,
                            "start": 53,
                            "end": 57
                        },
                        "flags": 128,
                        "start": 45,
                        "end": 57
                    },
                    {
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 0,
                            "start": 57,
                            "end": 61
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 768,
                            "start": 61,
                            "end": 63
                        },
                        "condition": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 68,
                            "end": 68
                        },
                        "incrementor": {
                            "kind": 134299649,
                            "text": "want",
                            "rawText": "want",
                            "flags": 768,
                            "start": 63,
                            "end": 68
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 68,
                                "end": 68
                            },
                            "flags": 128,
                            "start": 68,
                            "end": 68
                        },
                        "flags": 128,
                        "start": 57,
                        "end": 68
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 68
            },
            "flags": 128,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "{( I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 68, end: 68
✖ Expression expected - start: 68, end: 68

```

