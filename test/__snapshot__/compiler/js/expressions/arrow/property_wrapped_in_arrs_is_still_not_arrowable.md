# Kataw parser test case

## Input

`````js
([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67592,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 65545,
                        "elements": [
                            {
                                "kind": 89,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 33554437,
                                    "elementList": {
                                        "kind": 29,
                                        "elements": [
                                            {
                                                "kind": 33554437,
                                                "elementList": {
                                                    "kind": 29,
                                                    "elements": [
                                                        {
                                                            "kind": 33554437,
                                                            "elementList": {
                                                                "kind": 29,
                                                                "elements": [
                                                                    {
                                                                        "kind": 33554437,
                                                                        "elementList": {
                                                                            "kind": 29,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 33554437,
                                                                                    "elementList": {
                                                                                        "kind": 29,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 33554437,
                                                                                                "elementList": {
                                                                                                    "kind": 29,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 33554437,
                                                                                                            "elementList": {
                                                                                                                "kind": 29,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 33554437,
                                                                                                                        "elementList": {
                                                                                                                            "kind": 29,
                                                                                                                            "elements": [
                                                                                                                                {
                                                                                                                                    "kind": 33554437,
                                                                                                                                    "elementList": {
                                                                                                                                        "kind": 29,
                                                                                                                                        "elements": [
                                                                                                                                            {
                                                                                                                                                "kind": 33554437,
                                                                                                                                                "elementList": {
                                                                                                                                                    "kind": 29,
                                                                                                                                                    "elements": [
                                                                                                                                                        {
                                                                                                                                                            "kind": 33554437,
                                                                                                                                                            "elementList": {
                                                                                                                                                                "kind": 29,
                                                                                                                                                                "elements": [
                                                                                                                                                                    {
                                                                                                                                                                        "kind": 33554437,
                                                                                                                                                                        "elementList": {
                                                                                                                                                                            "kind": 29,
                                                                                                                                                                            "elements": [
                                                                                                                                                                                {
                                                                                                                                                                                    "kind": 33554437,
                                                                                                                                                                                    "elementList": {
                                                                                                                                                                                        "kind": 29,
                                                                                                                                                                                        "elements": [
                                                                                                                                                                                            {
                                                                                                                                                                                                "kind": 33554437,
                                                                                                                                                                                                "elementList": {
                                                                                                                                                                                                    "kind": 29,
                                                                                                                                                                                                    "elements": [
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "kind": 33554437,
                                                                                                                                                                                                            "elementList": {
                                                                                                                                                                                                                "kind": 29,
                                                                                                                                                                                                                "elements": [
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "kind": 33554437,
                                                                                                                                                                                                                        "elementList": {
                                                                                                                                                                                                                            "kind": 29,
                                                                                                                                                                                                                            "elements": [
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                    "kind": 33554437,
                                                                                                                                                                                                                                    "elementList": {
                                                                                                                                                                                                                                        "kind": 29,
                                                                                                                                                                                                                                        "elements": [
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                "kind": 33554437,
                                                                                                                                                                                                                                                "elementList": {
                                                                                                                                                                                                                                                    "kind": 29,
                                                                                                                                                                                                                                                    "elements": [
                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                            "kind": 33554437,
                                                                                                                                                                                                                                                            "elementList": {
                                                                                                                                                                                                                                                                "kind": 29,
                                                                                                                                                                                                                                                                "elements": [
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                        "kind": 33554437,
                                                                                                                                                                                                                                                                        "elementList": {
                                                                                                                                                                                                                                                                            "kind": 29,
                                                                                                                                                                                                                                                                            "elements": [
                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                    "kind": 33554598,
                                                                                                                                                                                                                                                                                    "propertyList": {
                                                                                                                                                                                                                                                                                        "kind": 33,
                                                                                                                                                                                                                                                                                        "properties": [
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                "kind": 134217756,
                                                                                                                                                                                                                                                                                                "left": {
                                                                                                                                                                                                                                                                                                    "kind": 4325406,
                                                                                                                                                                                                                                                                                                    "text": "a",
                                                                                                                                                                                                                                                                                                    "rawText": "a",
                                                                                                                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                    "start": 22,
                                                                                                                                                                                                                                                                                                    "end": 23
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "right": {
                                                                                                                                                                                                                                                                                                    "kind": 66116,
                                                                                                                                                                                                                                                                                                    "member": {
                                                                                                                                                                                                                                                                                                        "kind": 196712,
                                                                                                                                                                                                                                                                                                        "text": "b",
                                                                                                                                                                                                                                                                                                        "rawText": "b",
                                                                                                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                        "start": 24,
                                                                                                                                                                                                                                                                                                        "end": 25
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                        "kind": 4261540,
                                                                                                                                                                                                                                                                                                        "text": 0,
                                                                                                                                                                                                                                                                                                        "rawText": "0",
                                                                                                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                        "start": 26,
                                                                                                                                                                                                                                                                                                        "end": 27
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                    "start": 25,
                                                                                                                                                                                                                                                                                                    "end": 28
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "accessModifier": null,
                                                                                                                                                                                                                                                                                                "decorators": null,
                                                                                                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                                                                                                "intersects": false,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 22,
                                                                                                                                                                                                                                                                                                "end": 28
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                                                                        "multiline": false,
                                                                                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                                                                                                        "end": 28
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                    "start": 21,
                                                                                                                                                                                                                                                                                    "end": 29
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                                                                            "multiline": false,
                                                                                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                                                                                                            "end": 29
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                        "start": 20,
                                                                                                                                                                                                                                                                        "end": 30
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                                                "multiline": false,
                                                                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                                                                "intersects": false,
                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                "start": 20,
                                                                                                                                                                                                                                                                "end": 30
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                            "start": 19,
                                                                                                                                                                                                                                                            "end": 31
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                                                    "multiline": false,
                                                                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                    "start": 19,
                                                                                                                                                                                                                                                    "end": 31
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                                                "intersects": false,
                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                "start": 18,
                                                                                                                                                                                                                                                "end": 32
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                        "multiline": false,
                                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                        "start": 18,
                                                                                                                                                                                                                                        "end": 32
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                    "start": 17,
                                                                                                                                                                                                                                    "end": 33
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                            "multiline": false,
                                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                            "start": 17,
                                                                                                                                                                                                                            "end": 33
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                        "start": 16,
                                                                                                                                                                                                                        "end": 34
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                "multiline": false,
                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                "intersects": false,
                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                "start": 16,
                                                                                                                                                                                                                "end": 34
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                            "start": 15,
                                                                                                                                                                                                            "end": 35
                                                                                                                                                                                                        }
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                    "multiline": false,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                    "start": 15,
                                                                                                                                                                                                    "end": 35
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                "intersects": false,
                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                "start": 14,
                                                                                                                                                                                                "end": 36
                                                                                                                                                                                            }
                                                                                                                                                                                        ],
                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                        "multiline": false,
                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                        "intersects": false,
                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                        "start": 14,
                                                                                                                                                                                        "end": 36
                                                                                                                                                                                    },
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                    "start": 13,
                                                                                                                                                                                    "end": 37
                                                                                                                                                                                }
                                                                                                                                                                            ],
                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                            "multiline": false,
                                                                                                                                                                            "flags": 0,
                                                                                                                                                                            "intersects": false,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 13,
                                                                                                                                                                            "end": 37
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 0,
                                                                                                                                                                        "intersects": false,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 12,
                                                                                                                                                                        "end": 38
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                "multiline": false,
                                                                                                                                                                "flags": 0,
                                                                                                                                                                "intersects": false,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 12,
                                                                                                                                                                "end": 38
                                                                                                                                                            },
                                                                                                                                                            "flags": 0,
                                                                                                                                                            "intersects": false,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 11,
                                                                                                                                                            "end": 39
                                                                                                                                                        }
                                                                                                                                                    ],
                                                                                                                                                    "trailingComma": false,
                                                                                                                                                    "multiline": false,
                                                                                                                                                    "flags": 0,
                                                                                                                                                    "intersects": false,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 11,
                                                                                                                                                    "end": 39
                                                                                                                                                },
                                                                                                                                                "flags": 0,
                                                                                                                                                "intersects": false,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 10,
                                                                                                                                                "end": 40
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "trailingComma": false,
                                                                                                                                        "multiline": false,
                                                                                                                                        "flags": 0,
                                                                                                                                        "intersects": false,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 10,
                                                                                                                                        "end": 40
                                                                                                                                    },
                                                                                                                                    "flags": 0,
                                                                                                                                    "intersects": false,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 9,
                                                                                                                                    "end": 41
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "multiline": false,
                                                                                                                            "flags": 0,
                                                                                                                            "intersects": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 9,
                                                                                                                            "end": 41
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 8,
                                                                                                                        "end": 42
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "intersects": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 8,
                                                                                                                "end": 42
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 7,
                                                                                                            "end": 43
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "multiline": false,
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 7,
                                                                                                    "end": 43
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "start": 6,
                                                                                                "end": 44
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "multiline": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 6,
                                                                                        "end": 44
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 5,
                                                                                    "end": 45
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 5,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 4,
                                                                        "end": 46
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 4,
                                                                "end": 46
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 3,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 3,
                                                    "end": 47
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 48
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 48
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 49
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 0,
                                "end": 50
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 50
                    },
                    "contents": {
                        "kind": 4261540,
                        "text": 0,
                        "rawText": "0",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 53
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 53
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 54
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 54
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

