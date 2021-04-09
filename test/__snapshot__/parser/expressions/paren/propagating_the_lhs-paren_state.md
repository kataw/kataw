# Kataw parser test case

## Input

`````js
(foo + (bar + boo) + ding)
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
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "autofix": 0,
                            "flags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "boo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 17
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 18
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "autofix": 0,
                        "flags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 81921,
                        "value": "ding",
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
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
        }
    ],
    "isModule": false,
    "text": "(foo + (bar + boo) + ding)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

