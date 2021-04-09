# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(import(x))
## Input

`````js
import(import(x))
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
                    "kind": 120,
                    "expression": {
                        "kind": 206,
                        "expression": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 13,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 6,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "import(import(x))",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 17
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
- Path: r
> :: test: new-expr
> :: case: import(import(x))
## Input

`````js
import(import(x))
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(import(x))
## Input

`````js
import(import(x))
`````
```

