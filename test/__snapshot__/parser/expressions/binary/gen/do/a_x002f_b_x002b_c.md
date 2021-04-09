# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: o
> :: test: do
> :: case: a / b + c
## Input

`````js
do a / b + c while (x);
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
                "start": 20,
                "end": 21
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "right": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "autofix": 0,
                        "flags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "right": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 10,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 12
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "do a / b + c while (x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 18
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: o
> :: test: do
> :: case: a / b + c
## Input

`````js
do a / b + c while (x);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: o
> :: test: do
> :: case: a / b + c
## Input

`````js
do a / b + c while (x);
`````
```

