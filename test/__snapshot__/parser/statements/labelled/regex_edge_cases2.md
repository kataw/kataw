# Kataw parser test case

## Input

`````js
debugger
/bar/
`````

## Output
### CST

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
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/bar/",
                "flags": 96,
                "start": 8,
                "end": 14
            },
            "flags": 16,
            "start": 8,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "debugger\n/bar/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

