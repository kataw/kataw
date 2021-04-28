# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: catch try {}
## Input

`````js
do do do catch try {} while while while
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
                "flags": 68,
                "start": 39,
                "end": 39
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 33,
                "end": 39
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
                    "start": 33,
                    "end": 33
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 27,
                    "end": 33
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
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 27,
                        "end": 27
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 21,
                        "end": 27
                    },
                    "statement": {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
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
                                "statements": [],
                                "multiLine": false,
                                "flags": 16,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 21
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 27
                },
                "flags": 16,
                "start": 2,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "do do do catch try {} while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 27, end: 33
✖ Expression expected - start: 33, end: 39
✖ Expression expected - start: 39, end: 39

```

