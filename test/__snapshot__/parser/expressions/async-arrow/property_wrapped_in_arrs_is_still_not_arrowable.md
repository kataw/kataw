# Kataw parser test case

## Input

`````js
async ([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 56,
                "end": 58
            },
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
                                                                                                                                                                                                                                                                                        "text": "b",
                                                                                                                                                                                                                                                                                        "rawText": "b",
                                                                                                                                                                                                                                                                                        "flags": 768,
                                                                                                                                                                                                                                                                                        "start": 30,
                                                                                                                                                                                                                                                                                        "end": 31
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                        "kind": 81921,
                                                                                                                                                                                                                                                                                        "text": 0,
                                                                                                                                                                                                                                                                                        "rawText": "0",
                                                                                                                                                                                                                                                                                        "flags": 768,
                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                        "end": 33
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                    "start": 28,
                                                                                                                                                                                                                                                                                    "end": 34
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "right": {
                                                                                                                                                                                                                                                                                    "kind": 81921,
                                                                                                                                                                                                                                                                                    "text": "a",
                                                                                                                                                                                                                                                                                    "rawText": "a",
                                                                                                                                                                                                                                                                                    "flags": 768,
                                                                                                                                                                                                                                                                                    "start": 28,
                                                                                                                                                                                                                                                                                    "end": 29
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                "start": 28,
                                                                                                                                                                                                                                                                                "end": 34
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                                                        "multiline": false,
                                                                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                                                                        "start": 28,
                                                                                                                                                                                                                                                                        "end": 34
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                    "start": 27,
                                                                                                                                                                                                                                                                    "end": 35
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                            "start": 27,
                                                                                                                                                                                                                                                            "end": 35
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                        "start": 26,
                                                                                                                                                                                                                                                        "end": 36
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                "start": 26,
                                                                                                                                                                                                                                                "end": 36
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                            "start": 25,
                                                                                                                                                                                                                                            "end": 37
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                    "start": 25,
                                                                                                                                                                                                                                    "end": 37
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                "start": 24,
                                                                                                                                                                                                                                "end": 38
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                        "start": 24,
                                                                                                                                                                                                                        "end": 38
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                    "start": 23,
                                                                                                                                                                                                                    "end": 39
                                                                                                                                                                                                                }
                                                                                                                                                                                                            ],
                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                            "start": 23,
                                                                                                                                                                                                            "end": 39
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                        "end": 40
                                                                                                                                                                                                    }
                                                                                                                                                                                                ],
                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                "start": 22,
                                                                                                                                                                                                "end": 40
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                            "end": 41
                                                                                                                                                                                        }
                                                                                                                                                                                    ],
                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                    "start": 21,
                                                                                                                                                                                    "end": 41
                                                                                                                                                                                },
                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                "start": 20,
                                                                                                                                                                                "end": 42
                                                                                                                                                                            }
                                                                                                                                                                        ],
                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 20,
                                                                                                                                                                        "end": 42
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 256,
                                                                                                                                                                    "start": 19,
                                                                                                                                                                    "end": 43
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                            "trailingComma": false,
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 19,
                                                                                                                                                            "end": 43
                                                                                                                                                        },
                                                                                                                                                        "flags": 256,
                                                                                                                                                        "start": 18,
                                                                                                                                                        "end": 44
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "trailingComma": false,
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 18,
                                                                                                                                                "end": 44
                                                                                                                                            },
                                                                                                                                            "flags": 256,
                                                                                                                                            "start": 17,
                                                                                                                                            "end": 45
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                    "trailingComma": false,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 17,
                                                                                                                                    "end": 45
                                                                                                                                },
                                                                                                                                "flags": 256,
                                                                                                                                "start": 16,
                                                                                                                                "end": 46
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 16,
                                                                                                                        "end": 46
                                                                                                                    },
                                                                                                                    "flags": 256,
                                                                                                                    "start": 15,
                                                                                                                    "end": 47
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 256,
                                                                                                            "start": 15,
                                                                                                            "end": 47
                                                                                                        },
                                                                                                        "flags": 256,
                                                                                                        "start": 14,
                                                                                                        "end": 48
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 256,
                                                                                                "start": 14,
                                                                                                "end": 48
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 13,
                                                                                            "end": 49
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 13,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 12,
                                                                                "end": 50
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 256,
                                                                        "start": 12,
                                                                        "end": 50
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 11,
                                                                    "end": 51
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 11,
                                                            "end": 51
                                                        },
                                                        "flags": 256,
                                                        "start": 10,
                                                        "end": 52
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 10,
                                                "end": 52
                                            },
                                            "flags": 256,
                                            "start": 9,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 9,
                                    "end": 53
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 8,
                        "end": 54
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 55
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 81921,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 58,
                "end": 59
            },
            "flags": 2304,
            "start": 0,
            "end": 59
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 59,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "async ([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 56,
            "end": 58
        }
    ],
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

