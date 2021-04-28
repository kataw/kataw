# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: /false//a
## Input

`````js
do do do /false//a while while while
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
                "start": 36,
                "end": 36
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 30,
                "start": 0,
                "end": 36
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 2,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 30,
                    "end": 30
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 24,
                    "start": 0,
                    "end": 30
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 5,
                        "start": 0,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 24,
                        "end": 24
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 18,
                        "start": 0,
                        "end": 24
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 221,
                                "text": "/false/",
                                "flags": 768,
                                "start": 8,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 16,
                                "start": 512,
                                "end": 17
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 18
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 24
                },
                "flags": 128,
                "start": 2,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "do do do /false//a while while while",
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
✖ Expression expected - start: 24, end: 30
✖ Expression expected - start: 30, end: 36
✖ Expression expected - start: 36, end: 36

```

