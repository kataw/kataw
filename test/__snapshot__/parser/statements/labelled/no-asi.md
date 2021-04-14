# Kataw parser test case

## Input

`````js
debugger /foo/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 171,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/foo/",
                "flags": 768,
                "start": 8,
                "end": 14
            },
            "flags": 128,
            "start": 8,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "debugger /foo/",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 14
        }
    ],
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

