# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: try { !xxx
## Input

`````js
do {} while (x) { try { !xxx
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
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
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
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 64,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "original": "xxx",
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 16,
                                        "start": 23,
                                        "end": 28
                                    }
                                ],
                                "flags": 16,
                                "start": 23,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 28
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

