# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: do with invalid array
> :: case: class x {}
## Input

`````js
do while [catch] class x {}
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
                "start": 22,
                "end": 24
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
            "end": 24
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do while [catch] class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Expected a ')' to match the '(' token here - start: 24, end: 26

```

