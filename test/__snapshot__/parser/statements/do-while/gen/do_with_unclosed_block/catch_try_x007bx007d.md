# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: catch try {}
## Input

`````js
do {} while (x) { catch try {}
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
                "kind": 134299649,
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
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 23
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 27,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 30
            },
            "flags": 16,
            "start": 15,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { catch try {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 17, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 30, end: 30

```

