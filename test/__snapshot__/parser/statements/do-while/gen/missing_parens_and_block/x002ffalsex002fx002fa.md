# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: /false//a
## Input

`````js
do /false//a while
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
                "start": 18,
                "end": 18
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 12,
                "start": 0,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 221,
                        "text": "/false/",
                        "flags": 768,
                        "start": 2,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 512,
                        "start": 10,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 12
                },
                "flags": 128,
                "start": 2,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "do /false//a while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 18, end: 18

```

