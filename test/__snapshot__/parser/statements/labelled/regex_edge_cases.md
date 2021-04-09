# Kataw parser test case

## Input

`````js
debugger
/bar
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 171,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/bar",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "debugger\n/bar",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 10
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

