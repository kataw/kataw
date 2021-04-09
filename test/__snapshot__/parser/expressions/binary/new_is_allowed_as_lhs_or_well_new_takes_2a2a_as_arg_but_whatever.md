# Kataw parser test case

## Input

`````js
(new x ** 2)
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
                    "kind": 198,
                    "left": {
                        "kind": 210,
                        "expression": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "argumentList": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "autofix": 0,
                        "flags": 0,
                        "start": 6,
                        "end": 9
                    },
                    "right": {
                        "kind": 81921,
                        "value": 2,
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "(new x ** 2)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

