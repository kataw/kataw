# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: fin\u0061lly
## Input

`````js
fin\u0061lly = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 0,
                    "end": 0
                },
                "autofix": 0,
                "flags": 128,
                "start": 0,
                "end": 0
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 12,
                    "end": 12
                },
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "fin\\u0061lly = x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 12,
            "end": 14
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
- Path: d
> :: test: assignment unwrapped
> :: case: fin\u0061lly
## Input

`````js
fin\u0061lly = x;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: fin\u0061lly
## Input

`````js
fin\u0061lly = x;
`````
```

