# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: false
## Input

`````js
do do do false while while while
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
                "start": 32,
                "end": 32
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 26,
                "end": 32
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 26,
                    "end": 26
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 20,
                    "end": 26
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 768,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 20,
                        "end": 20
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 768,
                        "start": 14,
                        "end": 20
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 134,
                            "text": false,
                            "flags": 768,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 20
                },
                "flags": 128,
                "start": 2,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "do do do false while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 20, end: 26
✖ Expression expected - start: 26, end: 32
✖ Expression expected - start: 32, end: 32

```

