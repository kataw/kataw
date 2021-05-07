# Kataw parser test case

## Input

`````js
async ([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
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
                                                                                                                                                                                                                                                                                "generatorToken": null,
                                                                                                                                                                                                                                                                                "left": {
                                                                                                                                                                                                                                                                                    "kind": 134299649,
                                                                                                                                                                                                                                                                                    "text": "a",
                                                                                                                                                                                                                                                                                    "rawText": "a",
                                                                                                                                                                                                                                                                                    "flags": 96,
                                                                                                                                                                                                                                                                                    "start": 28,
                                                                                                                                                                                                                                                                                    "end": 29
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "right": {
                                                                                                                                                                                                                                                                                    "kind": 536871042,
                                                                                                                                                                                                                                                                                    "member": {
                                                                                                                                                                                                                                                                                        "kind": 134299649,
                                                                                                                                                                                                                                                                                        "text": "b",
                                                                                                                                                                                                                                                                                        "rawText": "b",
                                                                                                                                                                                                                                                                                        "flags": 96,
                                                                                                                                                                                                                                                                                        "start": 30,
                                                                                                                                                                                                                                                                                        "end": 31
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                        "kind": 201392130,
                                                                                                                                                                                                                                                                                        "text": 0,
                                                                                                                                                                                                                                                                                        "rawText": "0",
                                                                                                                                                                                                                                                                                        "flags": 96,
                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                        "end": 33
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                    "start": 28,
                                                                                                                                                                                                                                                                                    "end": 34
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                "start": 28,
                                                                                                                                                                                                                                                                                "end": 34
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                                                        "flags": 16,
                                                                                                                                                                                                                                                                        "start": 28,
                                                                                                                                                                                                                                                                        "end": 34
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                    "start": 27,
                                                                                                                                                                                                                                                                    "end": 35
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                            "start": 27,
                                                                                                                                                                                                                                                            "end": 35
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                        "start": 26,
                                                                                                                                                                                                                                                        "end": 36
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                "start": 26,
                                                                                                                                                                                                                                                "end": 36
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                            "start": 25,
                                                                                                                                                                                                                                            "end": 37
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                    "start": 25,
                                                                                                                                                                                                                                    "end": 37
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                "start": 24,
                                                                                                                                                                                                                                "end": 38
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                        "start": 24,
                                                                                                                                                                                                                        "end": 38
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                    "start": 23,
                                                                                                                                                                                                                    "end": 39
                                                                                                                                                                                                                }
                                                                                                                                                                                                            ],
                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                            "start": 23,
                                                                                                                                                                                                            "end": 39
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                        "end": 40
                                                                                                                                                                                                    }
                                                                                                                                                                                                ],
                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                "start": 22,
                                                                                                                                                                                                "end": 40
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                            "end": 41
                                                                                                                                                                                        }
                                                                                                                                                                                    ],
                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                    "start": 21,
                                                                                                                                                                                    "end": 41
                                                                                                                                                                                },
                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                "start": 20,
                                                                                                                                                                                "end": 42
                                                                                                                                                                            }
                                                                                                                                                                        ],
                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                        "flags": 32,
                                                                                                                                                                        "start": 20,
                                                                                                                                                                        "end": 42
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 32,
                                                                                                                                                                    "start": 19,
                                                                                                                                                                    "end": 43
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                            "trailingComma": false,
                                                                                                                                                            "flags": 32,
                                                                                                                                                            "start": 19,
                                                                                                                                                            "end": 43
                                                                                                                                                        },
                                                                                                                                                        "flags": 32,
                                                                                                                                                        "start": 18,
                                                                                                                                                        "end": 44
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "trailingComma": false,
                                                                                                                                                "flags": 32,
                                                                                                                                                "start": 18,
                                                                                                                                                "end": 44
                                                                                                                                            },
                                                                                                                                            "flags": 32,
                                                                                                                                            "start": 17,
                                                                                                                                            "end": 45
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                    "trailingComma": false,
                                                                                                                                    "flags": 32,
                                                                                                                                    "start": 17,
                                                                                                                                    "end": 45
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "start": 16,
                                                                                                                                "end": 46
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 16,
                                                                                                                        "end": 46
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 15,
                                                                                                                    "end": 47
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 15,
                                                                                                            "end": 47
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 14,
                                                                                                        "end": 48
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 14,
                                                                                                "end": 48
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 13,
                                                                                            "end": 49
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 13,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 12,
                                                                                "end": 50
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 12,
                                                                        "end": 50
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 11,
                                                                    "end": 51
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 11,
                                                            "end": 51
                                                        },
                                                        "flags": 32,
                                                        "start": 10,
                                                        "end": 52
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 9,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 55
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 58,
                "end": 59
            },
            "flags": 290,
            "start": 0,
            "end": 59
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 59,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "async ([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 56, end: 58

```

