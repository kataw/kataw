# Kataw parser test case

## Input

`````js
a = b + c = d
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "d",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "a = b + c = d",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 9,
            "end": 11
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

