# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if triple
> :: case: async try while { catch }
## Input

`````js
if if if async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 5,
                    "end": 5
                },
                "consequent": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 8,
                        "end": 14
                    },
                    "consequent": {
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
                                                "start": 32,
                                                "end": 32
                                            },
                                            "flags": 16,
                                            "start": 32,
                                            "end": 32
                                        },
                                        "catchClause": null,
                                        "finallyKeyword": null,
                                        "finallyBlock": {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 34,
                                                "end": 34
                                            },
                                            "flags": 16,
                                            "start": 34,
                                            "end": 34
                                        },
                                        "flags": 16,
                                        "start": 26,
                                        "end": 34
                                    }
                                ],
                                "flags": 16,
                                "start": 26,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 34
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 16,
                    "start": 5,
                    "end": 34
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 16,
                "start": 2,
                "end": 34
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "if if if async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 5
✖ Expression expected - start: 5, end: 8

```

