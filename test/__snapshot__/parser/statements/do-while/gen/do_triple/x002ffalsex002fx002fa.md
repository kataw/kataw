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
                "start": 36,
                "end": 36
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 30,
                "end": 36
            },
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
                    "start": 30,
                    "end": 30
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 24,
                    "end": 30
                },
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
                        "start": 24,
                        "end": 24
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 18,
                        "end": 24
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 221,
                                "text": "/false/",
                                "flags": 96,
                                "start": 8,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 16,
                                "end": 17
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 24
                },
                "flags": 16,
                "start": 2,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "do do do /false//a while while while",
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
✖ Expected a `;` - start: 18, end: 24
✖ Expression expected - start: 24, end: 30
✖ Expression expected - start: 30, end: 36

```

