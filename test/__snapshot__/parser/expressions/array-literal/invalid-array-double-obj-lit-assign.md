# Kataw parser test case

## Input

`````js
[{a=0},{b=0},0] = 0
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 0,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 4,
                                                "end": 5
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 2,
                                            "end": 5
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 6
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 0,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 11
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 12
                            },
                            {
                                "kind": 81921,
                                "value": 0,
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 19
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
    "isModule": false,
    "text": "[{a=0},{b=0},0] = 0",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 15,
            "end": 17
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

