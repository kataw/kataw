# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: {{{ &/ function while}}
## Options

`````js
{}
`````
## Input

`````js
{ { { {{{ &/ function while}}
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
                                                                                            "start": 9,
                                                                                            "end": 9
                                                                                        },
                                                                                        "operatorToken": {
                                                                                            "kind": 134252103,
                                                                                            "flags": 96,
                                                                                            "start": 9,
                                                                                            "end": 11
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 221,
                                                                                            "text": "/ function while}}",
                                                                                            "flags": 96,
                                                                                            "start": 11,
                                                                                            "end": 29
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 9,
                                                                                        "end": 29
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 9,
                                                                                    "end": 29
                                                                                }
                                                                            ],
                                                                            "flags": 16,
                                                                            "start": 9,
                                                                            "end": 29
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 8,
                                                                        "end": 29
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "start": 8,
                                                                "end": 29
                                                            },
                                                            "flags": 16,
                                                            "start": 7,
                                                            "end": 29
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 29
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 29
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 29
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ { { {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 11
✖ Unterminated regular expression - start: 11, end: 29
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 29

```

