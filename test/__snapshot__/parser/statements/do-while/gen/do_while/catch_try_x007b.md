# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: do while
> :: case: catch try {
## Input

`````js
do catch try { while
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
                "start": 20,
                "end": 20
            },
            "whileKeyword": null,
            "statement": {
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 20
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 20,
                                    "end": 20
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 16,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 14,
                                "end": 20
                            }
                        ],
                        "flags": 16,
                        "start": 14,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 12,
                    "end": 20
                },
                "flags": 16,
                "start": 2,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "do catch try { while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 2, end: 8
✖ Missing an opening parentheses - '( - start: 20, end: 20

```

