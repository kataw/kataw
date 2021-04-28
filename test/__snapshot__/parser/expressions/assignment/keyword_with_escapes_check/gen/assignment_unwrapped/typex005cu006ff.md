# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: type\u006ff
## Input

`````js
type\u006ff = x;
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
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 0,
                        "start": 328192,
                        "end": 11
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 11,
                    "start": 512,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "type\\u006ff = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 11, end: 13
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13

```

