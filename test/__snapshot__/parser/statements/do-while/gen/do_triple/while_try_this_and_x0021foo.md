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

### Hybrid CST

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
                "flags": 12,
                "start": 44,
                "end": 44
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 38,
                "start": 0,
                "end": 44
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 2,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 38,
                    "end": 38
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 32,
                    "start": 0,
                    "end": 38
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 5,
                        "start": 0,
                        "end": 8
                    },
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 512,
                            "start": 27,
                            "end": 29
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 27,
                        "end": 32
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 8,
                            "start": 0,
                            "end": 14
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 14,
                            "end": 14
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 14,
                                "start": 0,
                                "end": 18
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 128,
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
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 128,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 23
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 23
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 32
                },
                "flags": 128,
                "start": 2,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 44
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 44,
                "start": 0,
                "end": 50
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 50,
                "end": 50
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 50,
                    "end": 50
                },
                "flags": 128,
                "start": 50,
                "end": 50
            },
            "flags": 128,
            "start": 44,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "do do do while try this and !foo while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 14, end: 18
✖ Expression expected - start: 38, end: 44
✖ Expression expected - start: 44, end: 50
✖ Expression expected - start: 50, end: 50
✖ Expression expected - start: 50, end: 50

```

