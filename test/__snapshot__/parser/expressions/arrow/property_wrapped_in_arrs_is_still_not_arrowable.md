# Kataw parser test case

## Input

`````js
([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 50,
                    "end": 52
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
                                                                                                                                                                                                                                                                                            "kind": 134299649,
                                                                                                                                                                                                                                                                                            "text": "b",
                                                                                                                                                                                                                                                                                            "rawText": "b",
                                                                                                                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                                                                                                                            "start": 24,
                                                                                                                                                                                                                                                                                            "end": 25
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                            "kind": 134299649,
                                                                                                                                                                                                                                                                                            "text": 0,
                                                                                                                                                                                                                                                                                            "rawText": "0",
                                                                                                                                                                                                                                                                                            "flags": 768,
                                                                                                                                                                                                                                                                                            "start": 26,
                                                                                                                                                                                                                                                                                            "end": 27
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                                                                                                        "end": 28
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "right": {
                                                                                                                                                                                                                                                                                        "kind": 134299649,
                                                                                                                                                                                                                                                                                        "text": "a",
                                                                                                                                                                                                                                                                                        "rawText": "a",
                                                                                                                                                                                                                                                                                        "flags": 768,
                                                                                                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                                                                                                        "end": 23
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                    "start": 22,
                                                                                                                                                                                                                                                                                    "end": 28
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                                                                            "multiline": false,
                                                                                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                                                                                            "start": 22,
                                                                                                                                                                                                                                                                            "end": 28
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                        "start": 21,
                                                                                                                                                                                                                                                                        "end": 29
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                "start": 21,
                                                                                                                                                                                                                                                                "end": 29
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                            "start": 20,
                                                                                                                                                                                                                                                            "end": 30
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                    "start": 20,
                                                                                                                                                                                                                                                    "end": 30
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                "start": 19,
                                                                                                                                                                                                                                                "end": 31
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                        "start": 19,
                                                                                                                                                                                                                                        "end": 31
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                    "start": 18,
                                                                                                                                                                                                                                    "end": 32
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                            "start": 18,
                                                                                                                                                                                                                            "end": 32
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                        "start": 17,
                                                                                                                                                                                                                        "end": 33
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                "start": 17,
                                                                                                                                                                                                                "end": 33
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                            "start": 16,
                                                                                                                                                                                                            "end": 34
                                                                                                                                                                                                        }
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                    "start": 16,
                                                                                                                                                                                                    "end": 34
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                "start": 15,
                                                                                                                                                                                                "end": 35
                                                                                                                                                                                            }
                                                                                                                                                                                        ],
                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                        "start": 15,
                                                                                                                                                                                        "end": 35
                                                                                                                                                                                    },
                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                    "start": 14,
                                                                                                                                                                                    "end": 36
                                                                                                                                                                                }
                                                                                                                                                                            ],
                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                            "flags": 256,
                                                                                                                                                                            "start": 14,
                                                                                                                                                                            "end": 36
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 13,
                                                                                                                                                                        "end": 37
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                "flags": 256,
                                                                                                                                                                "start": 13,
                                                                                                                                                                "end": 37
                                                                                                                                                            },
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 12,
                                                                                                                                                            "end": 38
                                                                                                                                                        }
                                                                                                                                                    ],
                                                                                                                                                    "trailingComma": false,
                                                                                                                                                    "flags": 256,
                                                                                                                                                    "start": 12,
                                                                                                                                                    "end": 38
                                                                                                                                                },
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 11,
                                                                                                                                                "end": 39
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "trailingComma": false,
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 11,
                                                                                                                                        "end": 39
                                                                                                                                    },
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 10,
                                                                                                                                    "end": 40
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 10,
                                                                                                                            "end": 40
                                                                                                                        },
                                                                                                                        "flags": 256,
                                                                                                                        "start": 9,
                                                                                                                        "end": 41
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 256,
                                                                                                                "start": 9,
                                                                                                                "end": 41
                                                                                                            },
                                                                                                            "flags": 256,
                                                                                                            "start": 8,
                                                                                                            "end": 42
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 256,
                                                                                                    "start": 8,
                                                                                                    "end": 42
                                                                                                },
                                                                                                "flags": 256,
                                                                                                "start": 7,
                                                                                                "end": 43
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 7,
                                                                                        "end": 43
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 6,
                                                                                    "end": 44
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 6,
                                                                            "end": 44
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 5,
                                                                        "end": 45
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 5,
                                                                "end": 45
                                                            },
                                                            "flags": 256,
                                                            "start": 4,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 4,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 3,
                                                "end": 47
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 3,
                                        "end": 47
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 48
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 49
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 52,
                    "end": 53
                },
                "flags": 256,
                "start": 0,
                "end": 53
            },
            "flags": 128,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

