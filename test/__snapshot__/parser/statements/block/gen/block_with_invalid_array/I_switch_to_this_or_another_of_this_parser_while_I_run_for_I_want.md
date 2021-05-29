# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\block\gen\block_with_invalid_array
> :: test: block with invalid array
> :: case: I switch to this or another of this parser while I run for I want
## Input

`````js
{ [catch] I switch to this or another of this parser while I run for I want
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 3,
                                "end": 8
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "flags": 16,
            "start": 9,
            "end": 11
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 11,
                "end": 18
            },
            "expression": {
                "kind": 134299649,
                "text": "to",
                "rawText": "to",
                "flags": 96,
                "start": 18,
                "end": 21
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "start": 11,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 4276321,
                "flags": 96,
                "start": 21,
                "end": 26
            },
            "flags": 16,
            "start": 21,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "or",
                "rawText": "or",
                "flags": 96,
                "start": 26,
                "end": 29
            },
            "flags": 16,
            "start": 26,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "another",
                "rawText": "another",
                "flags": 96,
                "start": 29,
                "end": 37
            },
            "flags": 16,
            "start": 29,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 37,
                "end": 40
            },
            "flags": 16,
            "start": 37,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 4276321,
                "flags": 96,
                "start": 40,
                "end": 45
            },
            "flags": 16,
            "start": 40,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "parser",
                "rawText": "parser",
                "flags": 96,
                "start": 45,
                "end": 52
            },
            "flags": 16,
            "start": 45,
            "end": 52
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 52,
                "end": 58
            },
            "expression": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "start": 58,
                "end": 60
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "run",
                    "rawText": "run",
                    "flags": 96,
                    "start": 60,
                    "end": 64
                },
                "flags": 16,
                "start": 60,
                "end": 64
            },
            "flags": 16,
            "start": 52,
            "end": 64
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 64,
                "end": 68
            },
            "initializer": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "start": 68,
                "end": 70
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 75,
                "end": 75
            },
            "incrementor": {
                "kind": 134299649,
                "text": "want",
                "rawText": "want",
                "flags": 96,
                "start": 70,
                "end": 75
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 75,
                    "end": 75
                },
                "flags": 16,
                "start": 75,
                "end": 75
            },
            "flags": 16,
            "start": 64,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "{ [catch] I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 9
✖ Expected a `;` - start: 11, end: 18
✖ Missing an opening parentheses - '( - start: 18, end: 21
✖ Declaration or statement expected - start: 21, end: 26
✖ Expected a `;` - start: 26, end: 29
✖ Expected a `;` - start: 29, end: 37
✖ Expected a `;` - start: 37, end: 40
✖ Expected a `;` - start: 40, end: 45
✖ Expected a `;` - start: 45, end: 52
✖ Expected a `;` - start: 52, end: 58
✖ Missing an opening parentheses - '( - start: 58, end: 60
✖ Declaration or statement expected - start: 60, end: 64
✖ Expected a `;` - start: 64, end: 68
✖ Missing an opening parentheses - '( - start: 68, end: 70
✖ Identifier expected - start: 75, end: 75

```

