# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs paren wrapped unary increment
> :: case: false
## Input

`````js
for ((a++) in c);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 10
            },
            "expression": {
                "kind": 81921,
                "value": "c",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 16,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "for ((a++) in c);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 13,
            "end": 15
        }
    ],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs paren wrapped unary increment
> :: case: false
## Input

`````js
for ((a++) in c);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs paren wrapped unary increment
> :: case: false
## Input

`````js
for ((a++) in c);
`````
```

