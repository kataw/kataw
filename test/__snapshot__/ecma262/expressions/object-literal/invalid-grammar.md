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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 11,
                                                                "end": 12
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 13,
                                                                "end": 15
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 10,
                                                        "end": 16
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 8,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 5,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 17
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 26,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 23,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 29
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 21,
                        "end": 31
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 3,
                    "end": 31
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 45
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 48
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 49
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 41,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 38,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 50
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 36,
                        "end": 52
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 54
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 56
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 54,
                        "end": 57
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 36,
                    "end": 57
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 32,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 32,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 60,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 66
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 70,
                                                                "end": 71
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 72,
                                                                "end": 74
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 69,
                                                        "end": 75
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 69,
                                                    "end": 75
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 69,
                                            "end": 75
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 67,
                                        "end": 76
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 64,
                                    "end": 76
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 76
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 62,
                        "end": 78
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 82,
                                        "end": 84
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 87
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 85,
                                            "end": 88
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
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
                                                                "kind": 134299649,
                                                                "text": "q",
                                                                "rawText": "q",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 93,
                                                                "end": 94
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 94,
                                                                "end": 95
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 95,
                                                                "end": 97
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 92,
                                                            "end": 97
                                                        },
                                                        "flags": 34,
                                                        "transformFlags": 0,
                                                        "start": 92,
                                                        "end": 98
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 92,
                                                "end": 98
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 90,
                                            "end": 99
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 85,
                                        "end": 99
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 82,
                                    "end": 99
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 99
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 80,
                        "end": 101
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 62,
                    "end": 101
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 58,
                "end": 101
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 58,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 102,
                    "end": 104
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 104,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 108,
                                        "end": 110
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 114,
                                                                "end": 115
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 116,
                                                                "end": 118
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 113,
                                                        "end": 119
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 113,
                                                    "end": 119
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 119
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 111,
                                        "end": 120
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 108,
                                    "end": 120
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 108,
                            "end": 120
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 106,
                        "end": 122
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 122,
                        "end": 124
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "undefined",
                        "rawText": "undefined",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 134
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 106,
                    "end": 134
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 102,
                "end": 134
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 102,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 137
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 137,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 141,
                                        "end": 143
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 147,
                                                                "end": 148
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 149,
                                                                "end": 151
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 146,
                                                        "end": 152
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 146,
                                                    "end": 152
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 146,
                                            "end": 152
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 144,
                                        "end": 153
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 141,
                                    "end": 153
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 141,
                            "end": 153
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 139,
                        "end": 155
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 157
                    },
                    "right": {
                        "kind": 138477575,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 157,
                        "end": 162
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 139,
                    "end": 162
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 135,
                "end": 162
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 135,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 163,
                    "end": 165
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 165,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 169,
                                        "end": 171
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 175,
                                                                "end": 176
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 177,
                                                                "end": 179
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 174,
                                                        "end": 180
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 174,
                                                    "end": 180
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 180
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 172,
                                        "end": 181
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 169,
                                    "end": 181
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 169,
                            "end": 181
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 167,
                        "end": 183
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 183,
                        "end": 185
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 51,
                        "rawText": "51",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 185,
                        "end": 188
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 167,
                    "end": 188
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 163,
                "end": 188
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 163,
            "end": 189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 191
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 191,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 195,
                                        "end": 197
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 201,
                                                                "end": 202
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 203,
                                                                "end": 205
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 200,
                                                        "end": 206
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 200,
                                                    "end": 206
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 200,
                                            "end": 206
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 198,
                                        "end": 207
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 195,
                                    "end": 207
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 195,
                            "end": 207
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 193,
                        "end": 209
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 209,
                        "end": 211
                    },
                    "right": {
                        "kind": 205586437,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 211,
                        "end": 217
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 193,
                    "end": 217
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 189,
                "end": 217
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 189,
            "end": 218
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 218,
                    "end": 220
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 220,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 224,
                                        "end": 226
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 230,
                                                                "end": 231
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 232,
                                                                "end": 234
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 229,
                                                        "end": 235
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 229,
                                                    "end": 235
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 229,
                                            "end": 235
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 227,
                                        "end": 236
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 224,
                                    "end": 236
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 224,
                            "end": 236
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 222,
                        "end": 238
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 238,
                        "end": 240
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 240,
                        "end": 242
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 222,
                    "end": 242
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 218,
                "end": 242
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 218,
            "end": 243
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 243,
                    "end": 245
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 245,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 249,
                                        "end": 251
                                    },
                                    "right": {
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
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 255,
                                                                "end": 256
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 257,
                                                                "end": 259
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 254,
                                                        "end": 260
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 254,
                                                    "end": 260
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 254,
                                            "end": 260
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 252,
                                        "end": 261
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 249,
                                    "end": 261
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 249,
                            "end": 261
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 247,
                        "end": 263
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 267,
                                        "end": 269
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 270,
                                        "end": 275
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 267,
                                    "end": 275
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 267,
                            "end": 275
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 265,
                        "end": 277
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 247,
                    "end": 277
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 243,
                "end": 277
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 243,
            "end": 278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 278,
                    "end": 280
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 280,
                    "end": 282
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 286,
                                        "end": 287
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 284,
                                    "end": 288
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 291,
                                            "end": 291
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 289,
                                        "end": 292
                                    },
                                    "operatorToken": {
                                        "kind": 4133,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 292,
                                        "end": 295
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 295,
                                        "end": 297
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 289,
                                    "end": 297
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 284,
                                "end": 297
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 284,
                        "end": 297
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 282,
                    "end": 299
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 278,
                "end": 299
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 278,
            "end": 300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 300,
                    "end": 302
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 302,
                    "end": 304
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 306,
                                    "end": 308
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 311,
                                            "end": 311
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 309,
                                        "end": 312
                                    },
                                    "operatorToken": {
                                        "kind": 4133,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 312,
                                        "end": 315
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 315,
                                        "end": 317
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 309,
                                    "end": 317
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 306,
                                "end": 317
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 306,
                        "end": 317
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 304,
                    "end": 319
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 300,
                "end": 319
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 300,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 320,
                    "end": 322
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 322,
                    "end": 324
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 326,
                                    "end": 328
                                },
                                "right": {
                                    "kind": 127,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 332,
                                        "end": 335
                                    },
                                    "operand": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 331,
                                            "end": 331
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 329,
                                        "end": 332
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 326,
                                    "end": 335
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 326,
                                "end": 335
                            },
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 335,
                                "end": 336
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 326,
                        "end": 336
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 324,
                    "end": 338
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 320,
                "end": 338
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 320,
            "end": 339
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 339,
                    "end": 341
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 341,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 345,
                                        "end": 350
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "falqe",
                                            "rawText": "falqe",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 351,
                                            "end": 357
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 357,
                                            "end": 359
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 359,
                                            "end": 361
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 345,
                                        "end": 361
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 345,
                                    "end": 361
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 361
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 343,
                        "end": 362
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 362,
                        "end": 364
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 364,
                        "end": 366
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 343,
                    "end": 366
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 339,
                "end": 366
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 339,
            "end": 367
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 369
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 369,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 373,
                                        "end": 378
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 379,
                                            "end": 384
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 384,
                                            "end": 386
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 386,
                                            "end": 388
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 373,
                                        "end": 388
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 373,
                                    "end": 388
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 388
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 371,
                        "end": 389
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 389,
                        "end": 391
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 391,
                        "end": 393
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 371,
                    "end": 393
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 367,
                "end": 393
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 367,
            "end": 394
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 394,
                    "end": 396
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 396,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 400,
                                        "end": 405
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 4259935,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 406,
                                                "end": 412
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 412,
                                                "end": 412
                                            },
                                            "flags": 32,
                                            "transformFlags": 2,
                                            "start": 406,
                                            "end": 412
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 412,
                                            "end": 414
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 414,
                                            "end": 416
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 400,
                                        "end": 416
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 400,
                                    "end": 416
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 400,
                            "end": 416
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 398,
                        "end": 417
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 417,
                        "end": 419
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 419,
                        "end": 421
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 398,
                    "end": 421
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 394,
                "end": 421
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 394,
            "end": 422
        }
    ],
    "isModule": false,
    "source": "q = { x: [(x, y)] } = { x: [] };\nq = { x: [(x, y)] } = {};\nq = { x: [(x, y)] } = { 1: [] = [(q= b)] };\nq = { x: [(x, y)] } = undefined;\nq = { x: [(x, y)] } = null;\nq = { x: [(x, y)] } = 51;\nq = { x: [(x, y)] } = false;\nq = { x: [(x, y)] } = b;\nq = { x: [(x, y)] } = { x: null };\nq = { [a]: {} /= a };\nq = { a: {} /= a };\nq = { a: {} ++a };\nq = {\"foo\": falqe = q} = x;\nq = {\"foo\": null = x} = x;\nq = {\"foo\": super = x} = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 422
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 3, end: 21
✖ The left-hand side must be a variable or a property access. - start: 36, end: 54
✖ The left-hand side must be a variable or a property access. - start: 62, end: 80
✖ The left-hand side must be a variable or a property access. - start: 106, end: 124
✖ The left-hand side must be a variable or a property access. - start: 139, end: 157
✖ The left-hand side must be a variable or a property access. - start: 167, end: 185
✖ The left-hand side must be a variable or a property access. - start: 193, end: 211
✖ The left-hand side must be a variable or a property access. - start: 222, end: 240
✖ The left-hand side must be a variable or a property access. - start: 247, end: 265
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 289, end: 295
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 309, end: 315
✖ ',' expected - start: 335, end: 336
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 384, end: 386
✖ The left-hand side must be a variable or a property access. - start: 371, end: 391
✖ 'super' must be followed by an argument list or member access. - start: 406, end: 414
✖ Dot property must be an identifier - start: 412, end: 414
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 412, end: 414
✖ The left-hand side must be a variable or a property access. - start: 398, end: 419

```

