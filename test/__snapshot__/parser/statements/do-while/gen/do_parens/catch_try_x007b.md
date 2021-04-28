# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: catch try {
## Input

`````js
do( catch try { while
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
                "start": 9,
                "end": 9
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 3
                },
                "flags": 128,
                "start": 2,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 9,
                "end": 13
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 768,
                                "start": 15,
                                "end": 21
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 21,
                                "end": 21
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 128,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 15,
                    "end": 21
                },
                "flags": 128,
                "start": 13,
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
                    "start": 21,
                    "end": 21
                },
                "flags": 128,
                "start": 21,
                "end": 21
            },
            "flags": 128,
            "start": 9,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "do( catch try { while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 3, end: 9
✖ Expression expected - start: 9, end: 13
✖ Expression expected - start: 21, end: 21
✖ Expression expected - start: 21, end: 21

```

