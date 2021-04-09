# Kataw parser test case

## Input

`````js
x, {x: foo + y, bar} = doo
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
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 6,
                                                "end": 10
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 12,
                                                "end": 14
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 4,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 14
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 4,
                                "end": 19
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 20
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "right": {
                            "kind": 81921,
                            "value": "doo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 22,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 26
                    }
                ],
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
    "text": "x, {x: foo + y, bar} = doo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 20,
            "end": 22
        }
    ],
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

