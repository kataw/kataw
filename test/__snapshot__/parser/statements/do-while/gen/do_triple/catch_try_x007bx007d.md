# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: catch try {}
## Options

`````js
{}
`````
## Input

`````js
do do do catch try {} while while while
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
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 159,
                        "tryKeyword": null,
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
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 8,
                                "end": 14
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 16,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 80,
                            "start": 8,
                            "end": 14
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 8,
                        "end": 14
                    },
                    "whileKeyword": null,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 14
                },
                "whileKeyword": null,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 14,
                    "end": 14
                },
                "flags": 80,
                "start": 2,
                "end": 14
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 14
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 14,
                "end": 18
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 20,
                    "end": 20
                },
                "flags": 16,
                "start": 18,
                "end": 21
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "start": 14,
            "end": 21
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 21,
                "end": 27
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 27,
                "end": 27
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 27,
                    "end": 33
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 33,
                    "end": 33
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 33,
                        "end": 39
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 39,
                        "end": 39
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 80,
                    "start": 33,
                    "end": 39
                },
                "flags": 80,
                "start": 27,
                "end": 39
            },
            "flags": 80,
            "start": 21,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "do do do catch try {} while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 8, end: 14
✖ Missing an opening parentheses - '( - start: 15, end: 18
✖ Declaration or statement expected - start: 21, end: 27
✖ Missing an opening parentheses - '( - start: 28, end: 33
✖ Missing an opening parentheses - '( - start: 34, end: 39

```

