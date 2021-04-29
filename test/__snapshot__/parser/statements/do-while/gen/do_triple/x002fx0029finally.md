# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: /)finally
## Input

`````js
do do do /)finally while while while
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 36,
                "end": 36
            },
            "whileKeyword": null,
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 36,
                    "end": 36
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 36,
                        "end": 36
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 221,
                            "text": "/)finally while while while",
                            "flags": 96,
                            "start": 8,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 36
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 36
                },
                "flags": 16,
                "start": 2,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "do do do /)finally while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 8, end: 10
✖ Expression expected - start: 36, end: 36
✖ Expression expected - start: 36, end: 36
✖ Expression expected - start: 36, end: 36

```

