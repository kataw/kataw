# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: /false//a
## Input

`````js
else {} if(x) { /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "consequent": {
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
                                    "start": 15,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 24,
                                    "end": 25
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 25
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 15,
                    "end": 25
                },
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 25
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { /false//a",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        }
    ],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: /false//a
## Input

`````js
else {} if(x) { /false//a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: /false//a
## Input

`````js
else {} if(x) { /false//a
`````
```

