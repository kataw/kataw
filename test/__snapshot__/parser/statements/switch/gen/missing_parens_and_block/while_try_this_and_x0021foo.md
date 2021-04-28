# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: while try this and !foo
## Input

`````js
switch case while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 6,
                            "start": 0,
                            "end": 11
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 11,
                            "end": 11
                        },
                        "statements": [
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 11,
                                    "start": 0,
                                    "end": 17
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 17,
                                    "end": 17
                                },
                                "statement": {
                                    "kind": 159,
                                    "tryKeyword": {
                                        "kind": 37757027,
                                        "flags": 17,
                                        "start": 0,
                                        "end": 21
                                    },
                                    "block": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "flags": 128,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 128,
                                        "start": 21,
                                        "end": 21
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
                                            "start": 26,
                                            "end": 26
                                        },
                                        "flags": 128,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 128,
                                    "start": 17,
                                    "end": 26
                                },
                                "flags": 128,
                                "start": 11,
                                "end": 26
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "and",
                                    "rawText": "and",
                                    "flags": 768,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 128,
                                "start": 26,
                                "end": 30
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 30,
                                        "start": 512,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "flags": 256,
                                    "start": 30,
                                    "end": 35
                                },
                                "flags": 128,
                                "start": 30,
                                "end": 35
                            }
                        ],
                        "flags": 128,
                        "start": 6,
                        "end": 35
                    }
                ],
                "flags": 128,
                "start": 6,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "switch case while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 11
✖ Expression expected - start: 11, end: 17
✖ Expression expected - start: 17, end: 21

```

