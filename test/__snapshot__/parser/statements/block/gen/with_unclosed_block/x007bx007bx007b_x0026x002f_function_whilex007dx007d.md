# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_block
> :: test: with unclosed block
> :: case: {{{ &/ function while}}
## Input

`````js
{ {} finally(x) { {{{ &/ function while}}
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
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
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 124,
                                                            "block": {
                                                                "kind": 249,
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 16637,
                                                                                "text": "",
                                                                                "flags": 64,
                                                                                "start": 21,
                                                                                "end": 21
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 134252103,
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
                "flags": 16,
                "start": 1,
                "end": 41
            },
            "flags": 16,
            "start": 0,
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

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Identifier expected - start: 21, end: 23
✖ Unterminated regular expression - start: 23, end: 41
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 41

```

