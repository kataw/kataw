# Kataw parser test case

## Input

`````js
(/x/) => x
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
                "kind": 121,
                "expression": {
                    "kind": 221,
                    "text": "/x/",
                    "autofix": 0,
                    "flags": 768,
                    "start": 1,
                    "end": 4
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "(/x/) => x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 5,
            "end": 8
        }
    ],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

