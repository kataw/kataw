# Kataw parser test case

## Input

`````js
x = {x: [{a = b}] + x}.x
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
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 198,
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
                                                                        "start": 10,
                                                                        "end": 11
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "value": "b",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 13,
                                                                        "end": 15
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 10,
                                                                    "end": 15
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 10,
                                                            "end": 15
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 9,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 9,
                                                "end": 16
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 17
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 5,
                            "end": 21
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 3,
                        "end": 22
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 23,
                        "end": 24
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
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
    "text": "x = {x: [{a = b}] + x}.x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 16,
            "error": "Invalid optional chain from new expression",
            "start": 17,
            "end": 19
        }
    ],
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

