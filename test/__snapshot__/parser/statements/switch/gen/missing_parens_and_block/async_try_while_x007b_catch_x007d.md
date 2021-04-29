# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: async try while { catch }
## Input

`````js
switch case async try while { catch }
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
                "flags": 68,
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
                            "flags": 0,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 11,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 21
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "flags": 16,
                                    "start": 21,
                                    "end": 21
                                },
                                "catchClause": null,
                                "finallyKeyword": null,
                                "finallyBlock": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 159,
                                                "tryKeyword": null,
                                                "block": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 35,
                                                        "end": 35
                                                    },
                                                    "flags": 16,
                                                    "start": 35,
                                                    "end": 35
                                                },
                                                "catchClause": null,
                                                "finallyKeyword": null,
                                                "finallyBlock": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 37,
                                                        "end": 37
                                                    },
                                                    "flags": 16,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "start": 29,
                                                "end": 37
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "flags": 16,
                                    "start": 27,
                                    "end": 37
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "start": 6,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 6,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "switch case async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 11

```

