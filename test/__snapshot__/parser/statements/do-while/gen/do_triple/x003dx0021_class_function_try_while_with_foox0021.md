# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: =! class function try while with foo!
## Input

`````js
do do do =! class function try while with foo! while while while
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 36,
                "end": 36
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 30,
                "end": 36
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 30,
                    "end": 30
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 768,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 26,
                        "end": 26
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 8,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 11
                                },
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "members": {
                                        "kind": 277,
                                        "elements": [],
                                        "flags": 256,
                                        "start": 11,
                                        "end": 11
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 26
                },
                "flags": 128,
                "start": 2,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 36
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 36,
                "end": 41
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 41,
                "end": 45
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 768,
                        "start": 45,
                        "end": 46
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 46,
                        "end": 46
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 46
                },
                "flags": 128,
                "start": 45,
                "end": 46
            },
            "flags": 128,
            "start": 36,
            "end": 46
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 46,
                "end": 52
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 52,
                "end": 52
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 52,
                    "end": 58
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 58,
                    "end": 58
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 768,
                        "start": 58,
                        "end": 64
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 64,
                        "end": 64
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 64,
                            "end": 64
                        },
                        "flags": 128,
                        "start": 64,
                        "end": 64
                    },
                    "flags": 128,
                    "start": 58,
                    "end": 64
                },
                "flags": 128,
                "start": 52,
                "end": 64
            },
            "flags": 128,
            "start": 46,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "do do do =! class function try while with foo! while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 8, end: 10
✖ Expression expected - start: 26, end: 30
✖ Expression expected - start: 30, end: 36
✖ Expression expected - start: 36, end: 41
✖ Expression expected - start: 46, end: 52
✖ Expression expected - start: 52, end: 58
✖ Expression expected - start: 58, end: 64
✖ Expression expected - start: 64, end: 64
✖ Expression expected - start: 64, end: 64

```

