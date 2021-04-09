# Kataw parser test case

## Input

`````js
[a, ...[b, c]] = d;
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
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 8,
                                                "end": 9
                                            },
                                            {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 13
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 3,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
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
                    "value": "d",
                    "autofix": 0,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
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
    "text": "[a, ...[b, c]] = d;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

