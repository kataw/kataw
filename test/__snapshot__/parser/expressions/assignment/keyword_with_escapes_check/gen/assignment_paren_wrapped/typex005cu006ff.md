# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: type\u006ff
## Input

`````js
(type\u006ff = x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259885,
                            "autofix": 0,
                            "flags": 0,
                            "start": 1,
                            "end": 12
                        },
                        "expression": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 12,
                            "end": 12
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 1,
                        "end": 14
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "(type\\u006ff = x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 12,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 12,
            "end": 14
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: type\u006ff
## Input

`````js
(type\u006ff = x);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: type\u006ff
## Input

`````js
(type\u006ff = x);
`````
```

