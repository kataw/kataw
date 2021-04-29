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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "source": "()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 2
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 2

```

