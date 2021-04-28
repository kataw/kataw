# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: typeof arg
> :: case: a + b instanceof c
## Input

`````js
typeof a + b instanceof c
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 512,
                        "start": 0,
                        "end": 6
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 512,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 10,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "flags": 512,
                        "start": 12,
                        "end": 23
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 12,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "typeof a + b instanceof c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

