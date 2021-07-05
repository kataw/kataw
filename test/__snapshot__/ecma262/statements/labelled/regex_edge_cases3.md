# Kataw parser test case

## Input

`````js
debugger
/bar/g
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
                "flags": 80,
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
                "kind": 371,
                "text": "/bar/g",
                "flags": 96,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 8,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "debugger\n/bar/g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

debugger;
/bar/g;
```

### Diagnostics

```javascript
✔ No errors
```

