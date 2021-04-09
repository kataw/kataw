# Kataw parser test case

## Input

`````js
()
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
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 0,
                "end": 0
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "text": "()",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 15,
            "error": "Expression expected",
            "start": 2,
            "end": 2
        }
    ],
    "start": 0,
    "end": 2
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

