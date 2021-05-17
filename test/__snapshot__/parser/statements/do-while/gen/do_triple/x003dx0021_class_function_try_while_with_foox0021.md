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
                "flags": 64,
                "start": 36,
                "end": 36
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 30,
                "end": 36
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
                    "flags": 64,
                    "start": 30,
                    "end": 30
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
                        "flags": 64,
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
                                "flags": 64,
                                "start": 8,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "members": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 11,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 26
                },
                "flags": 16,
                "start": 2,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 0,
                "start": 36,
                "end": 41
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 41,
                "end": 45
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 45,
                        "end": 46
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 46,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 45,
                    "end": 46
                },
                "flags": 16,
                "start": 45,
                "end": 46
            },
            "flags": 16,
            "start": 36,
            "end": 46
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 46,
                "end": 52
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 52,
                "end": 52
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 52,
                    "end": 58
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 58,
                    "end": 58
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 58,
                        "end": 64
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 64,
                        "end": 64
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 64,
                            "end": 64
                        },
                        "flags": 16,
                        "start": 64,
                        "end": 64
                    },
                    "flags": 16,
                    "start": 58,
                    "end": 64
                },
                "flags": 16,
                "start": 52,
                "end": 64
            },
            "flags": 16,
            "start": 46,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "do do do =! class function try while with foo! while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 8, end: 10
✖ Expected a `;` - start: 17, end: 26
✖ Expression expected - start: 26, end: 30
✖ Expression expected - start: 30, end: 36
✖ Expression expected - start: 36, end: 41
✖ Expected a ')' to match the '(' token here - start: 45, end: 46
✖ Expression expected - start: 46, end: 52
✖ Expression expected - start: 52, end: 58
✖ Expression expected - start: 58, end: 64

```

