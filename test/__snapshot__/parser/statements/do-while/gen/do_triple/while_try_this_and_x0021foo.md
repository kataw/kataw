# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 44,
                "end": 44
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 38,
                "end": 44
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 38,
                    "end": 38
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 32,
                    "end": 38
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
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
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 14,
                            "end": 14
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
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
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 16,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 23
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 32
                },
                "flags": 16,
                "start": 2,
                "end": 38
            },
            "flags": 16,
            "start": 0,
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 50,
                "end": 50
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 50,
                    "end": 50
                },
                "flags": 16,
                "start": 50,
                "end": 50
            },
            "flags": 16,
            "start": 44,
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
✖ Expression expected - start: 14, end: 18
✖ Expected a ')' to match the '(' token here - start: 32, end: 38
✖ Expression expected - start: 38, end: 44
✖ Expression expected - start: 44, end: 50

```

