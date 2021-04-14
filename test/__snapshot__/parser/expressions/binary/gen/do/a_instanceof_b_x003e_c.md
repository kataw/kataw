# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: o
> :: test: do
> :: case: a instanceof b > c
## Input

`````js
do a instanceof b > c while (x);
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
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 29,
                "end": 30
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 21,
                "end": 27
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 768,
                            "start": 4,
                            "end": 15
                        },
                        "right": {
                            "kind": 81921,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "right": {
                        "kind": 81921,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 21
                },
                "flags": 128,
                "start": 2,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "do a instanceof b > c while (x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 27
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: o
> :: test: do
> :: case: a instanceof b > c
## Input

`````js
do a instanceof b > c while (x);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: o
> :: test: do
> :: case: a instanceof b > c
## Input

`````js
do a instanceof b > c while (x);
`````
```

