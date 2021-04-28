# Kataw parser test case

## Input

`````js
debugger
/bar/g
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/bar/g",
                "flags": 768,
                "start": 8,
                "end": 15
            },
            "flags": 128,
            "start": 8,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "debugger\n/bar/g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

