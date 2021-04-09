# Kataw parser test case

## Input

`````js
(this)
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
                    "kind": 135,
                    "autofix": 0,
                    "flags": 768,
                    "start": 1,
                    "end": 5
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "(this)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

