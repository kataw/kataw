# Kataw parser test case

## Input

`````js
([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0
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
                "kind": 271,
                "typeParameters": null,
                "parameters": [
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
                                                                                                                                                                                                                                                                        "kind": 220,
                                                                                                                                                                                                                                                                        "propertyList": {
                                                                                                                                                                                                                                                                            "kind": 218,
                                                                                                                                                                                                                                                                            "properties": [
                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                    "kind": 219,
                                                                                                                                                                                                                                                                                    "left": {
                                                                                                                                                                                                                                                                                        "kind": 130,
                                                                                                                                                                                                                                                                                        "member": {
                                                                                                                                                                                                                                                                                            "kind": 81921,
                                                                                                                                                                                                                                                                                            "value": "b",
                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                                                                                                                            "start": 24,
                                                                                                                                                                                                                                                                                            "end": 25
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                            "kind": 81921,
                                                                                                                                                                                                                                                                                            "value": 0,
                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                                                                                                                            "start": 26,
                                                                                                                                                                                                                                                                                            "end": 27
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                                                                                                        "end": 28
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "right": {
                                                                                                                                                                                                                                                                                        "kind": 81921,
                                                                                                                                                                                                                                                                                        "value": "a",
                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                        "flags": 768,
                                                                                                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                                                                                                        "end": 23
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                    "start": 22,
                                                                                                                                                                                                                                                                                    "end": 28
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                                                                            "multiline": false,
                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                                                                                            "start": 22,
                                                                                                                                                                                                                                                                            "end": 28
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                        "start": 21,
                                                                                                                                                                                                                                                                        "end": 29
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                "start": 21,
                                                                                                                                                                                                                                                                "end": 29
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                            "start": 20,
                                                                                                                                                                                                                                                            "end": 30
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                    "start": 20,
                                                                                                                                                                                                                                                    "end": 30
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                "start": 19,
                                                                                                                                                                                                                                                "end": 31
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                        "start": 19,
                                                                                                                                                                                                                                        "end": 31
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                    "start": 18,
                                                                                                                                                                                                                                    "end": 32
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                            "start": 18,
                                                                                                                                                                                                                            "end": 32
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                        "start": 17,
                                                                                                                                                                                                                        "end": 33
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                "start": 17,
                                                                                                                                                                                                                "end": 33
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                            "start": 16,
                                                                                                                                                                                                            "end": 34
                                                                                                                                                                                                        }
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                    "start": 16,
                                                                                                                                                                                                    "end": 34
                                                                                                                                                                                                },
                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                "start": 15,
                                                                                                                                                                                                "end": 35
                                                                                                                                                                                            }
                                                                                                                                                                                        ],
                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                        "start": 15,
                                                                                                                                                                                        "end": 35
                                                                                                                                                                                    },
                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                    "start": 14,
                                                                                                                                                                                    "end": 36
                                                                                                                                                                                }
                                                                                                                                                                            ],
                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                            "flags": 256,
                                                                                                                                                                            "start": 14,
                                                                                                                                                                            "end": 36
                                                                                                                                                                        },
                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 13,
                                                                                                                                                                        "end": 37
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                "autofix": 0,
                                                                                                                                                                "flags": 256,
                                                                                                                                                                "start": 13,
                                                                                                                                                                "end": 37
                                                                                                                                                            },
                                                                                                                                                            "autofix": 0,
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 12,
                                                                                                                                                            "end": 38
                                                                                                                                                        }
                                                                                                                                                    ],
                                                                                                                                                    "trailingComma": false,
                                                                                                                                                    "autofix": 0,
                                                                                                                                                    "flags": 256,
                                                                                                                                                    "start": 12,
                                                                                                                                                    "end": 38
                                                                                                                                                },
                                                                                                                                                "autofix": 0,
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 11,
                                                                                                                                                "end": 39
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "trailingComma": false,
                                                                                                                                        "autofix": 0,
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 11,
                                                                                                                                        "end": 39
                                                                                                                                    },
                                                                                                                                    "autofix": 0,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 10,
                                                                                                                                    "end": 40
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 10,
                                                                                                                            "end": 40
                                                                                                                        },
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 9,
                                                                                                                        "end": 41
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 256,
                                                                                                                "start": 9,
                                                                                                                "end": 41
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 8,
                                                                                                            "end": 42
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 8,
                                                                                                    "end": 42
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 7,
                                                                                                "end": 43
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 7,
                                                                                        "end": 43
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 6,
                                                                                    "end": 44
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 6,
                                                                            "end": 44
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 5,
                                                                        "end": 45
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 5,
                                                                "end": 45
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 4,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 4,
                                                    "end": 46
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 3,
                                                "end": 47
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 3,
                                        "end": 47
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 48
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 48
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 49
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 52,
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
            "end": 53
        }
    ],
    "isModule": false,
    "text": "([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 50,
            "end": 52
        }
    ],
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

