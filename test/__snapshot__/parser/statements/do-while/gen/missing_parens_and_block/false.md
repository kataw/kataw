# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: false
## Input

`````js
do false while
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
                "autofix": 0,
                "flags": 12,
                "start": 14,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 8,
                "end": 14
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134,
                    "text": false,
                    "flags": 768,
                    "start": 2,
                    "end": 8
                },
                "flags": 128,
                "start": 2,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "do false while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 8, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Expression expected - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14

```

