# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do while
> :: case: try { !xxx
## Input

`````js
do try { !xxx while
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
                "start": 19,
                "end": 19
            },
            "whileKeyword": null,
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 768,
                    "start": 2,
                    "end": 6
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
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 128,
                                "start": 8,
                                "end": 13
                            },
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 19,
                                    "end": 19
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 128,
                                "start": 13,
                                "end": 19
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 128,
                    "start": 6,
                    "end": 19
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
                        "start": 19,
                        "end": 19
                    },
                    "flags": 128,
                    "start": 19,
                    "end": 19
                },
                "flags": 128,
                "start": 2,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "do try { !xxx while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 19, end: 19
✖ Expression expected - start: 19, end: 19
✖ Expression expected - start: 19, end: 19

```

