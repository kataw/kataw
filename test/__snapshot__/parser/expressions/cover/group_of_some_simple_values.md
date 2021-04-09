# Kataw parser test case

## Input

`````js
(a, 1, "c", d, e, f);
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 67174403,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 6,
                            "end": 10
                        },
                        {
                            "kind": 81921,
                            "value": "d",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        {
                            "kind": 81921,
                            "value": "e",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "(a, 1, \"c\", d, e, f);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

