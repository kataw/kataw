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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "flags": 128,
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
                            "flags": 768,
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
                                                "flags": 768,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "flags": 256,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 128,
                                        "start": 23,
                                        "end": 28
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 23,
                                "end": 28
                            },
                            "flags": 128,
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
                                "multiLine": false,
                                "flags": 128,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 28
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 28
            },
            "flags": 128,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 28, end: 28
@{x2716}@ Unexpected token. - start: 28, end: 28
@{x2716}@ Unexpected token. - start: 28, end: 28
@{x2716}@ Unexpected token. - start: 28, end: 28

```

