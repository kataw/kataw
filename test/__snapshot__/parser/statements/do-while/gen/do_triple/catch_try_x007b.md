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
                "start": 38,
                "end": 38
            },
            "whileKeyword": null,
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
                    "start": 38,
                    "end": 38
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
                                "multiLine": false,
                                "flags": 128,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 128,
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
                                            "flags": 768,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 12,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "statement": {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 768,
                                                "start": 26,
                                                "end": 32
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 12,
                                                "start": 32,
                                                "end": 32
                                            },
                                            "statement": {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 768,
                                                    "start": 32,
                                                    "end": 38
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 12,
                                                    "start": 38,
                                                    "end": 38
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 12,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "flags": 128,
                                                    "start": 38,
                                                    "end": 38
                                                },
                                                "flags": 128,
                                                "start": 32,
                                                "end": 38
                                            },
                                            "flags": 128,
                                            "start": 26,
                                            "end": 38
                                        },
                                        "flags": 128,
                                        "start": 20,
                                        "end": 38
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 20,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 18,
                            "end": 38
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 38
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 38
                },
                "flags": 128,
                "start": 2,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "do do do catch try { while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 26, end: 32
@{x2716}@ Expression expected - start: 32, end: 38
@{x2716}@ Expression expected - start: 38, end: 38
@{x2716}@ Expression expected - start: 38, end: 38
@{x2716}@ Expression expected - start: 38, end: 38
@{x2716}@ Expression expected - start: 38, end: 38
@{x2716}@ Expression expected - start: 38, end: 38

```

