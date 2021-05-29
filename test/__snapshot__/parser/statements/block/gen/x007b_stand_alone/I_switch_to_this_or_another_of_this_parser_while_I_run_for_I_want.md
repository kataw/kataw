# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: { stand alone
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ I switch to this or another of this parser while I run for I want
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
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "to",
                            "rawText": "to",
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": [],
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 4276321,
                            "flags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 18
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "or",
                            "rawText": "or",
                            "flags": 96,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 21
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "another",
                            "rawText": "another",
                            "flags": 96,
                            "start": 21,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 29
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 32
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 4276321,
                            "flags": 0,
                            "start": 32,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 37
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "parser",
                            "rawText": "parser",
                            "flags": 96,
                            "start": 37,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 37,
                        "end": 44
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 44,
                            "end": 50
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 50,
                            "end": 52
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "run",
                                "rawText": "run",
                                "flags": 96,
                                "start": 52,
                                "end": 56
                            },
                            "flags": 16,
                            "start": 52,
                            "end": 56
                        },
                        "flags": 16,
                        "start": 44,
                        "end": 56
                    },
                    {
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 0,
                            "start": 56,
                            "end": 60
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 60,
                            "end": 62
                        },
                        "condition": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 67,
                            "end": 67
                        },
                        "incrementor": {
                            "kind": 134299649,
                            "text": "want",
                            "rawText": "want",
                            "flags": 96,
                            "start": 62,
                            "end": 67
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 67,
                                "end": 67
                            },
                            "flags": 16,
                            "start": 67,
                            "end": 67
                        },
                        "flags": 16,
                        "start": 56,
                        "end": 67
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 67
            },
            "flags": 16,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "{ I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 3, end: 10
✖ Missing an opening parentheses - '( - start: 10, end: 13
✖ Declaration or statement expected - start: 13, end: 18
✖ Expected a `;` - start: 18, end: 21
✖ Expected a `;` - start: 21, end: 29
✖ Expected a `;` - start: 29, end: 32
✖ Expected a `;` - start: 32, end: 37
✖ Expected a `;` - start: 37, end: 44
✖ Expected a `;` - start: 44, end: 50
✖ Missing an opening parentheses - '( - start: 50, end: 52
✖ Declaration or statement expected - start: 52, end: 56
✖ Expected a `;` - start: 56, end: 60
✖ Missing an opening parentheses - '( - start: 60, end: 62
✖ Identifier expected - start: 67, end: 67

```

