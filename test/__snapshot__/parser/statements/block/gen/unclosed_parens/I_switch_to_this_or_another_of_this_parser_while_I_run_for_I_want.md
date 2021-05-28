# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: s
> :: test: unclosed parens
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{( I switch to this or another of this parser while I run for I want
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 16,
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
                            "flags": 96,
                            "start": 11,
                            "end": 14
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": [],
                            "flags": 16,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 14
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 135,
                            "flags": 14,
                            "start": 96,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 19
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "or",
                            "rawText": "or",
                            "flags": 96,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 22
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "another",
                            "rawText": "another",
                            "flags": 96,
                            "start": 22,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 22,
                        "end": 30
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 30,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 33
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 135,
                            "flags": 33,
                            "start": 96,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 38
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "parser",
                            "rawText": "parser",
                            "flags": 96,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 16,
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
                            "flags": 96,
                            "start": 51,
                            "end": 53
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "run",
                                "rawText": "run",
                                "flags": 96,
                                "start": 53,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 53,
                            "end": 57
                        },
                        "flags": 16,
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
                            "flags": 96,
                            "start": 61,
                            "end": 63
                        },
                        "condition": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 68,
                            "end": 68
                        },
                        "incrementor": {
                            "kind": 134299649,
                            "text": "want",
                            "rawText": "want",
                            "flags": 96,
                            "start": 63,
                            "end": 68
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 68,
                                "end": 68
                            },
                            "flags": 16,
                            "start": 68,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 57,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "{( I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 4, end: 11
✖ Missing an opening parentheses - '( - start: 11, end: 14
✖ Declaration or statement expected - start: 14, end: 19
✖ Expected a `;` - start: 19, end: 22
✖ Expected a `;` - start: 22, end: 30
✖ Expected a `;` - start: 30, end: 33
✖ Expected a `;` - start: 33, end: 38
✖ Expected a `;` - start: 38, end: 45
✖ Expected a `;` - start: 45, end: 51
✖ Missing an opening parentheses - '( - start: 51, end: 53
✖ Declaration or statement expected - start: 53, end: 57
✖ Expected a `;` - start: 57, end: 61
✖ Missing an opening parentheses - '( - start: 61, end: 63
✖ Identifier expected - start: 68, end: 68

```

