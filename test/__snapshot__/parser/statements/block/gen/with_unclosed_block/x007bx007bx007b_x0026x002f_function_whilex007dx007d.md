# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {{{ &/ function while}}
## Input

`````js
{ {} finally(x) { {{{ &/ function while}}
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
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
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 68,
                                                                    "start": 21,
                                                                    "end": 21
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34375,
                                                                    "flags": 64,
                                                                    "start": 21,
                                                                    "end": 23
                                                                },
                                                                "right": {
                                                                    "kind": 221,
                                                                    "text": "/ function while}}",
                                                                    "flags": 96,
                                                                    "start": 23,
                                                                    "end": 41
                                                                },
                                                                "flags": 32,
                                                                "start": 21,
                                                                "end": 41
                                                            },
                                                            "flags": 16,
                                                            "start": 21,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 41
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 41
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 20,
                                        "end": 41
                                    },
                                    "flags": 16,
                                    "start": 19,
                                    "end": 41
                                }
                            ],
                            "flags": 16,
                            "start": 19,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 41
            },
            "flags": 16,
            "start": 15,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
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
✖ The parser expected to find a '}' to match the '{' token here - start: 14, end: 15
✖ Declaration or statement expected - start: 14, end: 15
✖ Expression expected - start: 21, end: 23
✖ Unterminated regular expression - start: 23, end: 24
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 41
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 41
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 41
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 41

```

