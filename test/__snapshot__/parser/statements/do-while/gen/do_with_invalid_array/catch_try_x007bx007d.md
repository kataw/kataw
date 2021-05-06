# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: do with invalid array
> :: case: catch try {}
## Input

`````js
do while [catch] catch try {}
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
                "start": 22,
                "end": 22
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 10
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": null,
                    "block": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 15
                    },
                    "catchClause": null,
                    "finallyKeyword": null,
                    "finallyBlock": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 16,
                    "start": 10,
                    "end": 16
                },
                "flags": 16,
                "start": 2,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 22,
                "end": 26
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 28,
                    "end": 28
                },
                "flags": 16,
                "start": 26,
                "end": 29
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
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "start": 22,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "do while [catch] catch try {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Expression expected - start: 22, end: 26

```

