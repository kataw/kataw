# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: /false//a
## Options

`````js
{}
`````
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
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                "flags": 96,
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

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 27

```

