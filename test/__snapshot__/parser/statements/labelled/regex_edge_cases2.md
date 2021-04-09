# Kataw parser test case

## Input

`````js
debugger
/bar/
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
                "text": "/bar/",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "debugger\n/bar/",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

