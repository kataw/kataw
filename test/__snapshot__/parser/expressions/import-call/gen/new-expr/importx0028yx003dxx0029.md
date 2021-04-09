# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(y=x)
## Input

`````js
import(y=x)
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
                "kind": 206,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 6,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "import(y=x)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(y=x)
## Input

`````js
import(y=x)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(y=x)
## Input

`````js
import(y=x)
`````
```

