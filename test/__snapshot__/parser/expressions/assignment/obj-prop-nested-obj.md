# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
result = { x: { y } } = { x: { y: 2 } };
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
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 15,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 19
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
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": 2,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 30,
                                                    "end": 35
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 30,
                                            "end": 35
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 28,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 25,
                            "end": 37
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 23,
                        "end": 39
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "result = { x: { y } } = { x: { y: 2 } };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

