# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: catch try {
## Input

`````js
do do do catch try { while while while
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
                "start": 38,
                "end": 38
            },
            "whileKeyword": null,
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
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 38,
                        "end": 38
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 14
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 154,
                                        "whileKeyword": {
                                            "kind": 37757028,
                                            "flags": 0,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "statement": {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 0,
                                                "start": 26,
                                                "end": 32
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 32,
                                                "end": 32
                                            },
                                            "statement": {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 0,
                                                    "start": 32,
                                                    "end": 38
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 68,
                                                    "start": 38,
                                                    "end": 38
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 68,
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
                                "start": 20,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 38
                        },
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
    "source": "do do do catch try { while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 8, end: 14
✖ Expression expected - start: 26, end: 32
✖ Expression expected - start: 32, end: 38

```

