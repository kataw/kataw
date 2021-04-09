# Kataw parser test case

## Input

`````js
(localVar |= defaultValue) => {}
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
                    "kind": 125,
                    "left": {
                        "kind": 81921,
                        "value": "localVar",
                        "autofix": 0,
                        "flags": 768,
                        "start": 1,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 0,
                        "end": 12
                    },
                    "right": {
                        "kind": 81921,
                        "value": "defaultValue",
                        "autofix": 0,
                        "flags": 768,
                        "start": 12,
                        "end": 25
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 25
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 31,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "(localVar |= defaultValue) => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 26,
            "end": 29
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

