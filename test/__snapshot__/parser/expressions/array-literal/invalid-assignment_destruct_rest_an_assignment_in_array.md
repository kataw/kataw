# Kataw parser test case

## Input

`````js
([...x=y]) = z
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                    "kind": 121,
                    "expression": {
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
                                            "start": 5,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 81921,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 8
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 10
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
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "([...x=y]) = z",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 10,
            "end": 12
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

