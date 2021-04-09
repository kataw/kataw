# Kataw parser test case

## Input

`````js
) => 0
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
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 6
        }
    ],
    "isModule": false,
    "text": ") => 0",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 1
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 1,
            "end": 4
        }
    ],
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

