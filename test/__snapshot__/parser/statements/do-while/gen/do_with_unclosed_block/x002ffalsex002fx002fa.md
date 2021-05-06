# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: /false//a
## Input

`````js
do {} while (x) { /false//a
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
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 221,
                                "text": "/false/",
                                "flags": 96,
                                "start": 17,
                                "end": 25
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 25,
                                "end": 26
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 27
            },
            "flags": 16,
            "start": 15,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { /false//a",
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
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 27

```

