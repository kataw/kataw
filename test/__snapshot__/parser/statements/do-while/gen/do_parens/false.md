# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: false
## Input

`````js
do( false while
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
                "flags": 12,
                "start": 15,
                "end": 15
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 9,
                "start": 0,
                "end": 15
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 134,
                        "text": false,
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 9
                },
                "flags": 128,
                "start": 2,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "do( false while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 15

```

