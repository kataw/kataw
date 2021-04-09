# Kataw parser test case

## Input

`````js
q = { x: [(x, y)] } = { x: [] };
q = { x: [(x, y)] } = {};
q = { x: [(x, y)] } = { 1: [] = [(q= b)] };
q = { x: [(x, y)] } = undefined;
q = { x: [(x, y)] } = null;
q = { x: [(x, y)] } = 51;
q = { x: [(x, y)] } = false;
q = { x: [(x, y)] } = b;
q = { x: [(x, y)] } = { x: null };
q = { [a]: {} /= a };
q = { a: {} /= a };
q = { a: {} ++a };
q = {"foo": falqe = q} = x;
q = {"foo": null = x} = x;
q = {"foo": super = x} = x;
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
                    "value": "q",
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 11,
                                                                "end": 12
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 13,
                                                                "end": 15
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 10,
                                                        "end": 16
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 10,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 5,
                            "end": 17
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 3,
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
                                            "elements": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 26,
                                        "end": 29
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
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 21,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 32,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 32,
                    "end": 36
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 44,
                                                                "end": 45
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 46,
                                                                "end": 48
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 49
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 43,
                                            "end": 49
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 41,
                                        "end": 50
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 38,
                            "end": 50
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 36,
                        "end": 52
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 52,
                        "end": 54
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 56,
                            "end": 56
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 54,
                        "end": 57
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 36,
                    "end": 57
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 58,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 58,
                    "end": 62
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 70,
                                                                "end": 71
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 72,
                                                                "end": 74
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 69,
                                                        "end": 75
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 69,
                                                    "end": 75
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 69,
                                            "end": 75
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 67,
                                        "end": 76
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 64,
                                        "end": 66
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 64,
                                    "end": 76
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 64,
                            "end": 76
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 62,
                        "end": 78
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 78,
                        "end": 80
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 87,
                                                "end": 87
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 85,
                                            "end": 88
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "q",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 93,
                                                                "end": 94
                                                            },
                                                            "operatorToken": {
                                                                "kind": 81921,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 92,
                                                                "end": 95
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": "b",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 95,
                                                                "end": 97
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 92,
                                                            "end": 97
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 92,
                                                        "end": 98
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 92,
                                                "end": 98
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 90,
                                            "end": 99
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 85,
                                        "end": 99
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 82,
                                        "end": 84
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 82,
                                    "end": 99
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 82,
                            "end": 99
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 80,
                        "end": 101
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 62,
                    "end": 101
                },
                "autofix": 0,
                "flags": 256,
                "start": 58,
                "end": 101
            },
            "autofix": 0,
            "flags": 128,
            "start": 58,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 102,
                    "end": 104
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 102,
                    "end": 106
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 114,
                                                                "end": 115
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 116,
                                                                "end": 118
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 113,
                                                        "end": 119
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 113,
                                                    "end": 119
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 113,
                                            "end": 119
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 111,
                                        "end": 120
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 108,
                                        "end": 110
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 108,
                                    "end": 120
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 108,
                            "end": 120
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 106,
                        "end": 122
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 122,
                        "end": 124
                    },
                    "right": {
                        "kind": 81921,
                        "value": "undefined",
                        "autofix": 0,
                        "flags": 768,
                        "start": 124,
                        "end": 134
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 106,
                    "end": 134
                },
                "autofix": 0,
                "flags": 256,
                "start": 102,
                "end": 134
            },
            "autofix": 0,
            "flags": 128,
            "start": 102,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 135,
                    "end": 137
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 135,
                    "end": 139
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 147,
                                                                "end": 148
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 149,
                                                                "end": 151
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 146,
                                                        "end": 152
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 146,
                                                    "end": 152
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 146,
                                            "end": 152
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 144,
                                        "end": 153
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 141,
                                        "end": 143
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 141,
                                    "end": 153
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 141,
                            "end": 153
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 139,
                        "end": 155
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 155,
                        "end": 157
                    },
                    "right": {
                        "kind": 269,
                        "value": null,
                        "autofix": 0,
                        "flags": 768,
                        "start": 157,
                        "end": 162
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 139,
                    "end": 162
                },
                "autofix": 0,
                "flags": 256,
                "start": 135,
                "end": 162
            },
            "autofix": 0,
            "flags": 128,
            "start": 135,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 163,
                    "end": 165
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 163,
                    "end": 167
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 175,
                                                                "end": 176
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 177,
                                                                "end": 179
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 174,
                                                        "end": 180
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 174,
                                                    "end": 180
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 174,
                                            "end": 180
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 172,
                                        "end": 181
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 169,
                                        "end": 171
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 169,
                                    "end": 181
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 169,
                            "end": 181
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 167,
                        "end": 183
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 183,
                        "end": 185
                    },
                    "right": {
                        "kind": 81921,
                        "value": 51,
                        "autofix": 0,
                        "flags": 768,
                        "start": 185,
                        "end": 188
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 167,
                    "end": 188
                },
                "autofix": 0,
                "flags": 256,
                "start": 163,
                "end": 188
            },
            "autofix": 0,
            "flags": 128,
            "start": 163,
            "end": 189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 189,
                    "end": 191
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 189,
                    "end": 193
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 201,
                                                                "end": 202
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 203,
                                                                "end": 205
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 200,
                                                        "end": 206
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 200,
                                                    "end": 206
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 200,
                                            "end": 206
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 198,
                                        "end": 207
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 195,
                                        "end": 197
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 195,
                                    "end": 207
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 195,
                            "end": 207
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 193,
                        "end": 209
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 209,
                        "end": 211
                    },
                    "right": {
                        "kind": 134,
                        "value": false,
                        "autofix": 0,
                        "flags": 768,
                        "start": 211,
                        "end": 217
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 193,
                    "end": 217
                },
                "autofix": 0,
                "flags": 256,
                "start": 189,
                "end": 217
            },
            "autofix": 0,
            "flags": 128,
            "start": 189,
            "end": 218
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 218,
                    "end": 220
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 218,
                    "end": 222
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 230,
                                                                "end": 231
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 232,
                                                                "end": 234
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 229,
                                                        "end": 235
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 229,
                                                    "end": 235
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 229,
                                            "end": 235
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 227,
                                        "end": 236
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 224,
                                        "end": 226
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 224,
                                    "end": 236
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 224,
                            "end": 236
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 222,
                        "end": 238
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 238,
                        "end": 240
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 240,
                        "end": 242
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 222,
                    "end": 242
                },
                "autofix": 0,
                "flags": 256,
                "start": 218,
                "end": 242
            },
            "autofix": 0,
            "flags": 128,
            "start": 218,
            "end": 243
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 243,
                    "end": 245
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 243,
                    "end": 247
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 255,
                                                                "end": 256
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "y",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 257,
                                                                "end": 259
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 254,
                                                        "end": 260
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 254,
                                                    "end": 260
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 254,
                                            "end": 260
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 252,
                                        "end": 261
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 249,
                                        "end": 251
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 249,
                                    "end": 261
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 249,
                            "end": 261
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 247,
                        "end": 263
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 263,
                        "end": 265
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 269,
                                        "value": null,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 270,
                                        "end": 275
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 267,
                                        "end": 269
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 267,
                                    "end": 275
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 267,
                            "end": 275
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 265,
                        "end": 277
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 247,
                    "end": 277
                },
                "autofix": 0,
                "flags": 256,
                "start": 243,
                "end": 277
            },
            "autofix": 0,
            "flags": 128,
            "start": 243,
            "end": 278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 278,
                    "end": 280
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 278,
                    "end": 282
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 291,
                                            "end": 291
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 289,
                                        "end": 292
                                    },
                                    "operatorToken": {
                                        "kind": 4133,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 292,
                                        "end": 295
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 295,
                                        "end": 297
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 289,
                                    "end": 297
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 286,
                                        "end": 287
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 284,
                                    "end": 288
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 284,
                                "end": 297
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 284,
                        "end": 297
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 282,
                    "end": 299
                },
                "autofix": 0,
                "flags": 256,
                "start": 278,
                "end": 299
            },
            "autofix": 0,
            "flags": 128,
            "start": 278,
            "end": 300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 300,
                    "end": 302
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 300,
                    "end": 304
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 311,
                                            "end": 311
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 309,
                                        "end": 312
                                    },
                                    "operatorToken": {
                                        "kind": 4133,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 312,
                                        "end": 315
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 315,
                                        "end": 317
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 309,
                                    "end": 317
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 306,
                                    "end": 308
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 306,
                                "end": 317
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 306,
                        "end": 317
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 304,
                    "end": 319
                },
                "autofix": 0,
                "flags": 256,
                "start": 300,
                "end": 319
            },
            "autofix": 0,
            "flags": 128,
            "start": 300,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 320,
                    "end": 322
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 320,
                    "end": 324
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 127,
                                    "operandToken": {
                                        "kind": 196635,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 332,
                                        "end": 335
                                    },
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 331,
                                            "end": 331
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 329,
                                        "end": 332
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 326,
                                    "end": 335
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 326,
                                    "end": 328
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 326,
                                "end": 335
                            },
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 335,
                                "end": 336
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 326,
                        "end": 336
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 324,
                    "end": 338
                },
                "autofix": 0,
                "flags": 256,
                "start": 320,
                "end": 338
            },
            "autofix": 0,
            "flags": 128,
            "start": 320,
            "end": 339
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 339,
                    "end": 341
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 339,
                    "end": 343
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "falqe",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 351,
                                            "end": 357
                                        },
                                        "operatorToken": {
                                            "kind": 81921,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 345,
                                            "end": 359
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "q",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 359,
                                            "end": 361
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 345,
                                        "end": 361
                                    },
                                    "right": {
                                        "kind": 67174403,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 345,
                                        "end": 350
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 345,
                                    "end": 361
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 345,
                            "end": 361
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 343,
                        "end": 362
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 362,
                        "end": 364
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 364,
                        "end": 366
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 343,
                    "end": 366
                },
                "autofix": 0,
                "flags": 256,
                "start": 339,
                "end": 366
            },
            "autofix": 0,
            "flags": 128,
            "start": 339,
            "end": 367
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 367,
                    "end": 369
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 367,
                    "end": 371
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 269,
                                            "value": null,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 379,
                                            "end": 384
                                        },
                                        "operatorToken": {
                                            "kind": 81921,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 373,
                                            "end": 386
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 386,
                                            "end": 388
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 373,
                                        "end": 388
                                    },
                                    "right": {
                                        "kind": 67174403,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 373,
                                        "end": 378
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 373,
                                    "end": 388
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 373,
                            "end": 388
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 371,
                        "end": 389
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 389,
                        "end": 391
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 391,
                        "end": 393
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 371,
                    "end": 393
                },
                "autofix": 0,
                "flags": 256,
                "start": 367,
                "end": 393
            },
            "autofix": 0,
            "flags": 128,
            "start": 367,
            "end": 394
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "q",
                    "autofix": 0,
                    "flags": 768,
                    "start": 394,
                    "end": 396
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 394,
                    "end": 398
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 203,
                                            "chain": {
                                                "kind": 225,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 406,
                                                "end": 412
                                            },
                                            "expression": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 412,
                                                "end": 412
                                            },
                                            "flags": 256,
                                            "start": 406,
                                            "end": 412
                                        },
                                        "operatorToken": {
                                            "kind": 81921,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 400,
                                            "end": 414
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 414,
                                            "end": 416
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 400,
                                        "end": 416
                                    },
                                    "right": {
                                        "kind": 67174403,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 400,
                                        "end": 405
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 400,
                                    "end": 416
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 400,
                            "end": 416
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 398,
                        "end": 417
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 417,
                        "end": 419
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 419,
                        "end": 421
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 398,
                    "end": 421
                },
                "autofix": 0,
                "flags": 256,
                "start": 394,
                "end": 421
            },
            "autofix": 0,
            "flags": 128,
            "start": 394,
            "end": 422
        }
    ],
    "isModule": false,
    "text": "q = { x: [(x, y)] } = { x: [] };\nq = { x: [(x, y)] } = {};\nq = { x: [(x, y)] } = { 1: [] = [(q= b)] };\nq = { x: [(x, y)] } = undefined;\nq = { x: [(x, y)] } = null;\nq = { x: [(x, y)] } = 51;\nq = { x: [(x, y)] } = false;\nq = { x: [(x, y)] } = b;\nq = { x: [(x, y)] } = { x: null };\nq = { [a]: {} /= a };\nq = { a: {} /= a };\nq = { a: {} ++a };\nq = {\"foo\": falqe = q} = x;\nq = {\"foo\": null = x} = x;\nq = {\"foo\": super = x} = x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 19,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 52,
            "end": 54
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 78,
            "end": 80
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 122,
            "end": 124
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 155,
            "end": 157
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 183,
            "end": 185
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 209,
            "end": 211
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 238,
            "end": 240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 263,
            "end": 265
        },
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 292,
            "end": 295
        },
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 312,
            "end": 315
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 335,
            "end": 336
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 384,
            "end": 386
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 389,
            "end": 391
        },
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 412,
            "end": 414
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 412,
            "end": 414
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 412,
            "end": 414
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 417,
            "end": 419
        }
    ],
    "start": 0,
    "end": 422
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

