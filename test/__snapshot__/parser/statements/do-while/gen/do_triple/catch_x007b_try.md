# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: catch { try
## Input

`````js
do do do catch { try while while while
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
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 38,
                "end": 38
            },
            "whileKeyword": null,
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 38,
                    "end": 38
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 38,
                        "end": 38
                    },
                    "whileKeyword": null,
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
                                    "statements": [
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 80,
                                                "start": 16,
                                                "end": 20
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
                                                "start": 20,
                                                "end": 20
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 16,
                                            "start": 16,
                                            "end": 20
                                        },
                                        {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 80,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "statement": {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 80,
                                                    "start": 26,
                                                    "end": 32
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "statement": {
                                                    "kind": 154,
                                                    "whileKeyword": {
                                                        "kind": 37757028,
                                                        "flags": 80,
                                                        "start": 32,
                                                        "end": 38
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 64,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "statement": {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 64,
                                                            "start": 38,
                                                            "end": 38
                                                        },
                                                        "flags": 16,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "flags": 16,
                                                    "start": 32,
                                                    "end": 38
                                                },
                                                "flags": 16,
                                                "start": 26,
                                                "end": 38
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 38
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 16,
                                    "end": 38
                                },
                                "flags": 16,
                                "start": 14,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 38
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 8,
                        "end": 38
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 38
                },
                "flags": 16,
                "start": 2,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "do do do catch { try while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 8, end: 14
✖ Missing an opening parentheses - '( - start: 26, end: 32
✖ Missing an opening parentheses - '( - start: 32, end: 38

```

