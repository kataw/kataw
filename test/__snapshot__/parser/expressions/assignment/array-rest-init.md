# Kataw parser test case

## Input

`````js
0, [...x = 1] = [];
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": 0,
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "argument": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 67174402,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 1,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 12
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 12
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 15,
                            "end": 18
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 18
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "0, [...x = 1] = [];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 13,
            "end": 15
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

