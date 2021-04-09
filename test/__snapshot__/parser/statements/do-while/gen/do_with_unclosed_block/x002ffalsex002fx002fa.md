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

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
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
                                "autofix": 0,
                                "flags": 768,
                                "start": 17,
                                "end": 25
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "autofix": 0,
                                "flags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "right": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 26,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 27
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { /false//a",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 27
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: /false//a
## Input

`````js
do {} while (x) { /false//a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: /false//a
## Input

`````js
do {} while (x) { /false//a
`````
```

