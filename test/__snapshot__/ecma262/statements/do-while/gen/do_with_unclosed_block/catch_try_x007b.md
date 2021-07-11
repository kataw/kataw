# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_with_unclosed_block
> :: test: do with unclosed block
> :: case: catch try {
## Options

`````js
{}
`````
## Input

`````js
do {} while (x) { catch try {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 16,
                            "start": 17,
                            "end": 17
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 17,
                                "end": 23
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 16,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 80,
                            "start": 17,
                            "end": 23
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 17,
                        "end": 23
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "start": 23,
                            "end": 27
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 27,
                            "end": 29
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 29
            },
            "flags": 16,
            "start": 15,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { catch try {",
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
✖ 'try' expected - start: 17, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 28, end: 29

```

