# Kataw parser test case

## Input

`````js
[[]];
[[], []];
[[], [], []];
[[], [0], []];
[[], [0], [0]];
[[], [0, 1], [0]];
[[], [0, 1], [0, 1]];
[[0]];
[[0], []];
[[0], [], []];
[[0], [0], []];
[[0], [0], [0]];
[[0], [0, 1], [0]];
[[0], [0, 1], [0, 1]];
[[0, 1]];
[[0, 1], []];
[[0, 1], [], []];
[[0, 1], [0], []];
[[0, 1], [0], [0]];
[[0, 1], [0, 1], [0]];
[[0, 1], [0, 1], [0, 1]];
[[], [1, 2, 3]];
[[1], [1]];
[[1, 2], [1, 2, 3]];
[[1, 0], [1, 0]];
[{}];
[{}, {}];
[{}, {}, {}];
[{}, { a }];
[{}, { a, b }];
[{}, { a, b, c }];
[{ a }];
[{ a }, { a }];
[{ a }, { a }, { a }];
[{ a }, { a, b }];
[{ a }, { a, b, c}];
[{ a, b }];
[{ a, b }, { a }];
[{ a, b }, { a }, { a }];
[{ a, b }, { a, b }];
[{ a, b }, { a, b, c }];

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 3
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 9
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 10,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 13
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 5,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 17,
                            "end": 19
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 20,
                            "end": 23
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 24,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 27
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 15,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 31,
                            "end": 33
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 34,
                            "end": 38
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 39,
                            "end": 42
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 42
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 29,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 46,
                            "end": 48
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 52
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 49,
                            "end": 53
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 57
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 54,
                            "end": 58
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 58
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 44,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 44,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 63
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 62,
                            "end": 64
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 68
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 71
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 65,
                            "end": 72
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 76
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 76
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 73,
                            "end": 77
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 77
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 60,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 60,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 82
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 81,
                            "end": 83
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 87
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 90
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 90
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 84,
                            "end": 91
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 94,
                                        "end": 95
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 98
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 98
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 92,
                            "end": 99
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 99
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 79,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 79,
            "end": 101
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 105
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 105
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 103,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 106
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 101,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 101,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 111,
                                        "end": 112
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 112
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 110,
                            "end": 113
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 116,
                                "end": 116
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 114,
                            "end": 117
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 117
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 108,
                "end": 118
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 108,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 123
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 123
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 121,
                            "end": 124
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 127
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 125,
                            "end": 128
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 131,
                                "end": 131
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 129,
                            "end": 132
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 121,
                    "end": 132
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 119,
                "end": 133
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 119,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 138
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 138
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 136,
                            "end": 139
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 143
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 143
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 140,
                            "end": 144
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 147,
                                "end": 147
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 145,
                            "end": 148
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 136,
                    "end": 148
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 134,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 134,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 153,
                                        "end": 154
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 153,
                                "end": 154
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 152,
                            "end": 155
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 159
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 159
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 156,
                            "end": 160
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 163,
                                        "end": 164
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 163,
                                "end": 164
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 161,
                            "end": 165
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 165
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 150,
                "end": 166
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 150,
            "end": 167
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 170,
                                        "end": 171
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 171
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 169,
                            "end": 172
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 175,
                                        "end": 176
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 177,
                                        "end": 179
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 175,
                                "end": 179
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 173,
                            "end": 180
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 183,
                                        "end": 184
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 183,
                                "end": 184
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 181,
                            "end": 185
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 169,
                    "end": 185
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 167,
                "end": 186
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 167,
            "end": 187
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 190,
                                        "end": 191
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 191
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 189,
                            "end": 192
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 195,
                                        "end": 196
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 197,
                                        "end": 199
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 195,
                                "end": 199
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 193,
                            "end": 200
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 203,
                                        "end": 204
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 205,
                                        "end": 207
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 203,
                                "end": 207
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 201,
                            "end": 208
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 208
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 187,
                "end": 209
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 187,
            "end": 210
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 213,
                                        "end": 214
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 215,
                                        "end": 217
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 217
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 212,
                            "end": 218
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 212,
                    "end": 218
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 210,
                "end": 219
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 210,
            "end": 220
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 223,
                                        "end": 224
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 225,
                                        "end": 227
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 223,
                                "end": 227
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 222,
                            "end": 228
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 231,
                                "end": 231
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 229,
                            "end": 232
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 222,
                    "end": 232
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 220,
                "end": 233
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 220,
            "end": 234
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 237,
                                        "end": 238
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 241
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 241
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 236,
                            "end": 242
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 245,
                                "end": 245
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 243,
                            "end": 246
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 249,
                                "end": 249
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 247,
                            "end": 250
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 250
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 234,
                "end": 251
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 234,
            "end": 252
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 255,
                                        "end": 256
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 257,
                                        "end": 259
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 259
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 254,
                            "end": 260
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 263,
                                        "end": 264
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 263,
                                "end": 264
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 261,
                            "end": 265
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 268,
                                "end": 268
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 266,
                            "end": 269
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 254,
                    "end": 269
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 252,
                "end": 270
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 252,
            "end": 271
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 274,
                                        "end": 275
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 276,
                                        "end": 278
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 274,
                                "end": 278
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 273,
                            "end": 279
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 282,
                                        "end": 283
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 282,
                                "end": 283
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 280,
                            "end": 284
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 287,
                                        "end": 288
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 287,
                                "end": 288
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 285,
                            "end": 289
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 273,
                    "end": 289
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 271,
                "end": 290
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 271,
            "end": 291
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 294,
                                        "end": 295
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 296,
                                        "end": 298
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 294,
                                "end": 298
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 293,
                            "end": 299
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 302,
                                        "end": 303
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 304,
                                        "end": 306
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 302,
                                "end": 306
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 300,
                            "end": 307
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 310,
                                        "end": 311
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 311
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 308,
                            "end": 312
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 293,
                    "end": 312
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 291,
                "end": 313
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 291,
            "end": 314
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 317,
                                        "end": 318
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 319,
                                        "end": 321
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 317,
                                "end": 321
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 316,
                            "end": 322
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 325,
                                        "end": 326
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 327,
                                        "end": 329
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 325,
                                "end": 329
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 323,
                            "end": 330
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 333,
                                        "end": 334
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 335,
                                        "end": 337
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 333,
                                "end": 337
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 331,
                            "end": 338
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 316,
                    "end": 338
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 314,
                "end": 339
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 314,
            "end": 340
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 343,
                                "end": 343
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 342,
                            "end": 344
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 347,
                                        "end": 348
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 349,
                                        "end": 351
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 352,
                                        "end": 354
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 347,
                                "end": 354
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 345,
                            "end": 355
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 342,
                    "end": 355
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 340,
                "end": 356
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 340,
            "end": 357
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 360,
                                        "end": 361
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 360,
                                "end": 361
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 359,
                            "end": 362
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 365,
                                        "end": 366
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 365,
                                "end": 366
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 363,
                            "end": 367
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 359,
                    "end": 367
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 357,
                "end": 368
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 357,
            "end": 369
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 372,
                                        "end": 373
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 374,
                                        "end": 376
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 372,
                                "end": 376
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 371,
                            "end": 377
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 380,
                                        "end": 381
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 382,
                                        "end": 384
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 385,
                                        "end": 387
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 380,
                                "end": 387
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 378,
                            "end": 388
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 371,
                    "end": 388
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 369,
                "end": 389
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 369,
            "end": 390
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 393,
                                        "end": 394
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 395,
                                        "end": 397
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 393,
                                "end": 397
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 392,
                            "end": 398
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 401,
                                        "end": 402
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 403,
                                        "end": 405
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 401,
                                "end": 405
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 399,
                            "end": 406
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 392,
                    "end": 406
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 390,
                "end": 407
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 390,
            "end": 408
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 411,
                                "end": 411
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 410,
                            "end": 412
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 410,
                    "end": 412
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 408,
                "end": 413
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 408,
            "end": 414
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 417,
                                "end": 417
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 416,
                            "end": 418
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 421,
                                "end": 421
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 419,
                            "end": 422
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 416,
                    "end": 422
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 414,
                "end": 423
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 414,
            "end": 424
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 427,
                                "end": 427
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 426,
                            "end": 428
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 431,
                                "end": 431
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 429,
                            "end": 432
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 435,
                                "end": 435
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 433,
                            "end": 436
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 426,
                    "end": 436
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 424,
                "end": 437
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 424,
            "end": 438
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 441,
                                "end": 441
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 440,
                            "end": 442
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 445,
                                        "end": 447
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 445,
                                "end": 447
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 443,
                            "end": 449
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 440,
                    "end": 449
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 438,
                "end": 450
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 438,
            "end": 451
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 454,
                                "end": 454
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 453,
                            "end": 455
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 458,
                                        "end": 460
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 461,
                                        "end": 463
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 458,
                                "end": 463
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 456,
                            "end": 465
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 453,
                    "end": 465
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 451,
                "end": 466
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 451,
            "end": 467
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 470,
                                "end": 470
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 469,
                            "end": 471
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 474,
                                        "end": 476
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 477,
                                        "end": 479
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 480,
                                        "end": 482
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 474,
                                "end": 482
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 472,
                            "end": 484
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 469,
                    "end": 484
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 467,
                "end": 485
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 467,
            "end": 486
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 489,
                                        "end": 491
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 489,
                                "end": 491
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 488,
                            "end": 493
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 488,
                    "end": 493
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 486,
                "end": 494
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 486,
            "end": 495
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 498,
                                        "end": 500
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 498,
                                "end": 500
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 497,
                            "end": 502
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 505,
                                        "end": 507
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 505,
                                "end": 507
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 503,
                            "end": 509
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 497,
                    "end": 509
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 495,
                "end": 510
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 495,
            "end": 511
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 514,
                                        "end": 516
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 514,
                                "end": 516
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 513,
                            "end": 518
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 521,
                                        "end": 523
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 521,
                                "end": 523
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 519,
                            "end": 525
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 528,
                                        "end": 530
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 528,
                                "end": 530
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 526,
                            "end": 532
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 513,
                    "end": 532
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 511,
                "end": 533
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 511,
            "end": 534
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 537,
                                        "end": 539
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 537,
                                "end": 539
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 536,
                            "end": 541
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 544,
                                        "end": 546
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 547,
                                        "end": 549
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 544,
                                "end": 549
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 542,
                            "end": 551
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 536,
                    "end": 551
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 534,
                "end": 552
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 534,
            "end": 553
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 556,
                                        "end": 558
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 556,
                                "end": 558
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 555,
                            "end": 560
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 563,
                                        "end": 565
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 566,
                                        "end": 568
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 569,
                                        "end": 571
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 563,
                                "end": 571
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 561,
                            "end": 572
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 555,
                    "end": 572
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 553,
                "end": 573
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 553,
            "end": 574
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 577,
                                        "end": 579
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 580,
                                        "end": 582
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 577,
                                "end": 582
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 576,
                            "end": 584
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 576,
                    "end": 584
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 574,
                "end": 585
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 574,
            "end": 586
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 589,
                                        "end": 591
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 592,
                                        "end": 594
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 589,
                                "end": 594
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 588,
                            "end": 596
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 599,
                                        "end": 601
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 599,
                                "end": 601
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 597,
                            "end": 603
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 588,
                    "end": 603
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 586,
                "end": 604
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 586,
            "end": 605
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 608,
                                        "end": 610
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 611,
                                        "end": 613
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 608,
                                "end": 613
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 607,
                            "end": 615
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 618,
                                        "end": 620
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 618,
                                "end": 620
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 616,
                            "end": 622
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 625,
                                        "end": 627
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 625,
                                "end": 627
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 623,
                            "end": 629
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 607,
                    "end": 629
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 605,
                "end": 630
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 605,
            "end": 631
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 634,
                                        "end": 636
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 637,
                                        "end": 639
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 634,
                                "end": 639
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 633,
                            "end": 641
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 644,
                                        "end": 646
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 647,
                                        "end": 649
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 644,
                                "end": 649
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 642,
                            "end": 651
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 633,
                    "end": 651
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 631,
                "end": 652
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 631,
            "end": 653
        },
        {
            "kind": 120,
            "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 656,
                                        "end": 658
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 659,
                                        "end": 661
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 656,
                                "end": 661
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 655,
                            "end": 663
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 666,
                                        "end": 668
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 669,
                                        "end": 671
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 672,
                                        "end": 674
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 666,
                                "end": 674
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 664,
                            "end": 676
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 655,
                    "end": 676
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 653,
                "end": 677
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 653,
            "end": 678
        }
    ],
    "isModule": false,
    "source": "[[]];\n[[], []];\n[[], [], []];\n[[], [0], []];\n[[], [0], [0]];\n[[], [0, 1], [0]];\n[[], [0, 1], [0, 1]];\n[[0]];\n[[0], []];\n[[0], [], []];\n[[0], [0], []];\n[[0], [0], [0]];\n[[0], [0, 1], [0]];\n[[0], [0, 1], [0, 1]];\n[[0, 1]];\n[[0, 1], []];\n[[0, 1], [], []];\n[[0, 1], [0], []];\n[[0, 1], [0], [0]];\n[[0, 1], [0, 1], [0]];\n[[0, 1], [0, 1], [0, 1]];\n[[], [1, 2, 3]];\n[[1], [1]];\n[[1, 2], [1, 2, 3]];\n[[1, 0], [1, 0]];\n[{}];\n[{}, {}];\n[{}, {}, {}];\n[{}, { a }];\n[{}, { a, b }];\n[{}, { a, b, c }];\n[{ a }];\n[{ a }, { a }];\n[{ a }, { a }, { a }];\n[{ a }, { a, b }];\n[{ a }, { a, b, c}];\n[{ a, b }];\n[{ a, b }, { a }];\n[{ a, b }, { a }, { a }];\n[{ a, b }, { a, b }];\n[{ a, b }, { a, b, c }];\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 679
}
```

### Printed

```javascript
[[]];
[[], []];

[[], [], []];

[[], [0], []];

[[], [0], [0]];

[[], [0, 1], [0]];

[[], [0, 1], [0, 1]];

[[0]];

[[0], []];

[[0], [], []];

[[0], [0], []];

[[0], [0], [0]];

[[0], [0, 1], [0]];

[[0], [0, 1], [0, 1]];

[[0, 1]];

[[0, 1], []];

[[0, 1], [], []];

[[0, 1], [0], []];

[[0, 1], [0], [0]];

[[0, 1], [0, 1], [0]];

[[0, 1], [0, 1], [0, 1]];

[[], [1, 2, 3]];

[[1], [1]];

[[1, 2], [1, 2, 3]];

[[1, 0], [1, 0]];

[{}];

[{}, {}];

[{}, {}, {}];

[{}, { a }];

[{}, { a, b }];

[{}, { a, b, c }];

[{ a }];

[{ a }, { a }];

[{ a }, { a }, { a }];

[{ a }, { a, b }];

[{ a }, { a, b, c }];

[{ a, b }];

[{ a, b }, { a }];

[{ a, b }, { a }, { a }];

[{ a, b }, { a, b }];

[{ a, b }, { a, b, c }];

```

### Diagnostics

```javascript
✔ No errors
```

