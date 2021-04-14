# Kataw parser test case

## Input

`````js
)=/++!{class
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
                "kind": 221,
                "text": "/++!{class",
                "flags": 768,
                "start": 2,
                "end": 12
            },
            "flags": 128,
            "start": 2,
            "end": 12
        }
    ],
    "isModule": false,
    "text": ")=/++!{class",
    "fileName": "__root__",
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
            "end": 2
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 3
        }
    ],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

