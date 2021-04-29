# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: /)finally
## Input

`````js
if else /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 2,
                    "end": 2
                },
                "flags": 16,
                "start": 2,
                "end": 2
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 2,
                "end": 7
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 221,
                    "text": "/)finally",
                    "flags": 96,
                    "start": 7,
                    "end": 17
                },
                "flags": 16,
                "start": 7,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "if else /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 2, end: 7
✖ Unterminated regular expression - start: 7, end: 9

```

