# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: {{{ &/ function while}}
## Options

`````js
{}
`````
## Input

`````js
{( {{{ &/ function while}}
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
                                "expressions": [],
                                "flags": 32,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 1,
                            "start": 34,
                            "end": 4
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "start": 6,
                                                        "end": 6
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134252103,
                                                        "flags": 96,
                                                        "start": 6,
                                                        "end": 8
                                                    },
                                                    "right": {
                                                        "kind": 371,
                                                        "text": "/ function while}}",
                                                        "flags": 96,
                                                        "start": 8,
                                                        "end": 26
                                                    },
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 26
                                                },
                                                "flags": 16,
                                                "start": 6,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 6,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 26
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{( {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 4, end: 5
✖ Identifier expected - start: 6, end: 8
✖ Unterminated regular expression - start: 8, end: 26
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 26

```

