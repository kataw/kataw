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
    "directives": [],
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
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 0,
                            "start": 19,
                            "end": 26
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "to",
                            "rawText": "to",
                            "flags": 96,
                            "start": 26,
                            "end": 29
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": [],
                            "flags": 16,
                            "start": 29,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 29
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 135,
                            "flags": 96,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 34
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "or",
                            "rawText": "or",
                            "flags": 96,
                            "start": 34,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 34,
                        "end": 37
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "another",
                            "rawText": "another",
                            "flags": 96,
                            "start": 37,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 37,
                        "end": 45
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 45,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 45,
                        "end": 48
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 135,
                            "flags": 96,
                            "start": 48,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 48,
                        "end": 53
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "parser",
                            "rawText": "parser",
                            "flags": 96,
                            "start": 53,
                            "end": 60
                        },
                        "flags": 16,
                        "start": 53,
                        "end": 60
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 60,
                            "end": 66
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 66,
                            "end": 68
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "run",
                                "rawText": "run",
                                "flags": 96,
                                "start": 68,
                                "end": 72
                            },
                            "flags": 16,
                            "start": 68,
                            "end": 72
                        },
                        "flags": 16,
                        "start": 60,
                        "end": 72
                    },
                    {
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 0,
                            "start": 72,
                            "end": 76
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 76,
                            "end": 78
                        },
                        "condition": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 83,
                            "end": 83
                        },
                        "incrementor": {
                            "kind": 134299649,
                            "text": "want",
                            "rawText": "want",
                            "flags": 96,
                            "start": 78,
                            "end": 83
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 83,
                                "end": 83
                            },
                            "flags": 16,
                            "start": 83,
                            "end": 83
                        },
                        "flags": 16,
                        "start": 72,
                        "end": 83
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 83
            },
            "flags": 16,
            "start": 15,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 14, end: 15
✖ Expected a `;` - start: 19, end: 26
✖ Expected a ')' to match the '(' token here - start: 29, end: 34
✖ Expected a `;` - start: 34, end: 37
✖ Expected a `;` - start: 37, end: 45
✖ Expected a `;` - start: 45, end: 48
✖ Expected a `;` - start: 48, end: 53
✖ Expected a `;` - start: 53, end: 60
✖ Expected a `;` - start: 60, end: 66
✖ Expected a ')' to match the '(' token here - start: 68, end: 72
✖ Expected a `;` - start: 72, end: 76
✖ Expression expected - start: 83, end: 83

```

