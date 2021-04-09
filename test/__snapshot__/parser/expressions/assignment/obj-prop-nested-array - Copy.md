# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
result = { x: [y] } = { x: [321] };
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
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 15,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
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
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": 321,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 28,
                                                    "end": 31
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 21,
                        "end": 34
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": true,
    "text": "result = { x: [y] } = { x: [321] };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

