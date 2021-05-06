# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: catch { try
## Input

`````js
do catch { try while
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
                "flags": 68,
                "start": 20,
                "end": 20
            },
            "whileKeyword": null,
            "statement": {
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 10,
                                    "end": 14
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
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
                                        "flags": 16,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 16,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 10,
                                "end": 20
                            }
                        ],
                        "flags": 16,
                        "start": 10,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 8,
                    "end": 20
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 20,
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
    "source": "do catch { try while",
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
✖ The parser expected to find a '}' to match the '{' token here - start: 20, end: 20

```

