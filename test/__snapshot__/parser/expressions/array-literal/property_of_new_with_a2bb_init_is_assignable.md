# Kataw parser test case

## Input

`````js
[new x().y = a + b] = z
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
                                "kind": 125,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 210,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 1,
                                        "end": 8
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 1,
                                    "end": 10
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
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
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "[new x().y = a + b] = z",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

