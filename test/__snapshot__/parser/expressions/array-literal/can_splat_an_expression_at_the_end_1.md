# Kataw parser test case

## Input

`````js
[x, y, ...z + arr]
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
                            "kind": 223,
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "z",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 10,
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
                                    "value": "arr",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 17
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 10,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "[x, y, ...z + arr]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

