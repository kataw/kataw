# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
({a:(a,y) = 0} = 1)
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
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 5,
                                                        "end": 6
                                                    },
                                                    {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 7,
                                                        "end": 8
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 4,
                                                "end": 9
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 4,
                                            "end": 9
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 2,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 81921,
                        "value": 1,
                        "autofix": 0,
                        "flags": 768,
                        "start": 16,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "text": "({a:(a,y) = 0} = 1)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 9,
            "end": 11
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

