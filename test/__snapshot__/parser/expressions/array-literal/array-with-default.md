# Kataw parser test case

## Input

`````js
[x, y, z = 1]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "z",
                                "autofix": 0,
                                "flags": 768,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 67174402,
                                "autofix": 0,
                                "flags": 0,
                                "start": 6,
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
                            "start": 6,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "[x, y, z = 1]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

