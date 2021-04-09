# Kataw parser test case

## Input

`````js
[foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;
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
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 119,
                                                                                            "elementList": {
                                                                                                "kind": 270,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 119,
                                                                                                        "elementList": {
                                                                                                            "kind": 270,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 119,
                                                                                                                    "elementList": {
                                                                                                                        "kind": 270,
                                                                                                                        "elements": [
                                                                                                                            {
                                                                                                                                "kind": 119,
                                                                                                                                "elementList": {
                                                                                                                                    "kind": 270,
                                                                                                                                    "elements": [
                                                                                                                                        {
                                                                                                                                            "kind": 119,
                                                                                                                                            "elementList": {
                                                                                                                                                "kind": 270,
                                                                                                                                                "elements": [
                                                                                                                                                    {
                                                                                                                                                        "kind": 119,
                                                                                                                                                        "elementList": {
                                                                                                                                                            "kind": 270,
                                                                                                                                                            "elements": [
                                                                                                                                                                {
                                                                                                                                                                    "kind": 119,
                                                                                                                                                                    "elementList": {
                                                                                                                                                                        "kind": 270,
                                                                                                                                                                        "elements": [
                                                                                                                                                                            {
                                                                                                                                                                                "kind": 119,
                                                                                                                                                                                "elementList": {
                                                                                                                                                                                    "kind": 270,
                                                                                                                                                                                    "elements": [
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 81921,
                                                                                                                                                                                            "value": "x",
                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                            "start": 19,
                                                                                                                                                                                            "end": 20
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 81921,
                                                                                                                                                                                            "value": "y",
                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                            "end": 22
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 81921,
                                                                                                                                                                                            "value": "z",
                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                            "start": 23,
                                                                                                                                                                                            "end": 24
                                                                                                                                                                                        }
                                                                                                                                                                                    ],
                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                    "start": 19,
                                                                                                                                                                                    "end": 24
                                                                                                                                                                                },
                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                "start": 18,
                                                                                                                                                                                "end": 25
                                                                                                                                                                            }
                                                                                                                                                                        ],
                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 18,
                                                                                                                                                                        "end": 25
                                                                                                                                                                    },
                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                    "flags": 256,
                                                                                                                                                                    "start": 17,
                                                                                                                                                                    "end": 26
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                            "trailingComma": false,
                                                                                                                                                            "autofix": 0,
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 17,
                                                                                                                                                            "end": 26
                                                                                                                                                        },
                                                                                                                                                        "autofix": 0,
                                                                                                                                                        "flags": 256,
                                                                                                                                                        "start": 16,
                                                                                                                                                        "end": 27
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "trailingComma": false,
                                                                                                                                                "autofix": 0,
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 16,
                                                                                                                                                "end": 27
                                                                                                                                            },
                                                                                                                                            "autofix": 0,
                                                                                                                                            "flags": 256,
                                                                                                                                            "start": 15,
                                                                                                                                            "end": 28
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                    "trailingComma": false,
                                                                                                                                    "autofix": 0,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 15,
                                                                                                                                    "end": 28
                                                                                                                                },
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 256,
                                                                                                                                "start": 14,
                                                                                                                                "end": 29
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 14,
                                                                                                                        "end": 29
                                                                                                                    },
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 13,
                                                                                                                    "end": 30
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 13,
                                                                                                            "end": 30
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 12,
                                                                                                        "end": 31
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 12,
                                                                                                "end": 31
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 11,
                                                                                            "end": 32
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 11,
                                                                                    "end": 32
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 10,
                                                                                "end": 33
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 10,
                                                                        "end": 33
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 9,
                                                                    "end": 34
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 9,
                                                            "end": 34
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 8,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 8,
                                                "end": 35
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 36
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 37
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 38,
                                    "end": 42
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 38,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "B",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 44,
                                    "end": 46
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 38,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 46
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 47
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 47,
                    "end": 49
                },
                "right": {
                    "kind": 81921,
                    "value": "arr",
                    "autofix": 0,
                    "flags": 768,
                    "start": 49,
                    "end": 53
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "[foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

