# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: lhs is void
> :: case: false
## Input

`````js
for (void a.b in c);
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259887,
                    "autofix": 0,
                    "flags": 0,
                    "start": 5,
                    "end": 9
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 12,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 9,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 13
            },
            "expression": {
                "kind": 81921,
                "value": "c",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 19,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for (void a.b in c);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 16,
            "end": 18
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: lhs is void
> :: case: false
## Input

`````js
for (void a.b in c);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: lhs is void
> :: case: false
## Input

`````js
for (void a.b in c);
`````
```

