# Kataw parser test case

## Input

`````js
[new x()[y] = a + b] = z
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
                                    "kind": 130,
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
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 13,
                                    "end": 19
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 19
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
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
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "[new x()[y] = a + b] = z",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

