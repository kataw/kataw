# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: while try this and !foo
## Input

`````js
do do do while try this and !foo while while while
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
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 27,
                    "end": 29
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 29,
                    "end": 32
                },
                "flags": 32,
                "start": 27,
                "end": 32
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
                    "kind": 134299649,
                    "text": "and",
                    "rawText": "and",
                    "flags": 96,
                    "start": 23,
                    "end": 27
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
                        "kind": 4276321,
                        "flags": 96,
                        "start": 18,
                        "end": 23
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 14,
                            "end": 14
                        },
                        "statement": {
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
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 16,
                                "start": 18,
                                "end": 18
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 16,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        },
                        "flags": 80,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 23
                },
                "flags": 80,
                "start": 2,
                "end": 27
            },
            "flags": 80,
            "start": 0,
            "end": 32
        },
        {
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 38,
                    "end": 44
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 44,
                    "end": 44
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 44,
                        "end": 50
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 50,
                        "end": 50
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 50,
                            "end": 50
                        },
                        "flags": 16,
                        "start": 50,
                        "end": 50
                    },
                    "flags": 80,
                    "start": 44,
                    "end": 50
                },
                "flags": 80,
                "start": 38,
                "end": 50
            },
            "flags": 80,
            "start": 32,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "do do do while try this and !foo while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 14, end: 18
✖ Declaration or statement expected - start: 18, end: 23
✖ Declaration or statement expected - start: 23, end: 27
✖ Declaration or statement expected - start: 27, end: 29
✖ Declaration or statement expected - start: 32, end: 38
✖ Missing an opening parentheses - '( - start: 38, end: 44
✖ Missing an opening parentheses - '( - start: 44, end: 50

```

