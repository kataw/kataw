# Kataw parser test case

## Input

`````js
import.call
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 6,
                "start": 96,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 11, end: 11

```

