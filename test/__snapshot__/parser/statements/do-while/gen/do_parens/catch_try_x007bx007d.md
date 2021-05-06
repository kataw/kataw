# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: catch try {}
## Input

`````js
do( catch try {} while
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
                        "flags": 68,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 3
                },
                "flags": 16,
                "start": 2,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 9,
                "end": 13
            },
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
                "start": 13,
                "end": 16
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 9,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "do( catch try {} while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

```

