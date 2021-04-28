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
                "flags": 768,
                "start": 20,
                "end": 21
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
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 512,
                            "start": 4,
                            "end": 6
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 512,
                        "start": 8,
                        "end": 10
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 10,
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
            "end": 23
        }
    ],
    "isModule": false,
    "text": "do a / b + c while (x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

