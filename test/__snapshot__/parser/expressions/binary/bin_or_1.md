# Kataw parser test case

## Input

`````js
a|b
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 33864,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 2,
                    "end": 3
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 3
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "text": "a|b",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

