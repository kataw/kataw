# Kataw parser test case

## Input

`````js
([ { x : foo().y } ]);
([ { x : foo()[y] } ]);
([ { x : x.y } ]);
([ { x : x[y] } ]);
([ { x = 10 } = {} ]);
([ { x : y = 10 } = {} ]);
([ { x : foo().y = 10 } = {} ]);
([ { x : foo()[y] = 10 } = {} ]);
([ { x : x.y = 10 } = {} ]);
([ { x : x[y] = 10 } = {} ]);
([ [ x = 10 ] = {} ]);
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
                "kind": 121,
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
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 4,
                                                "end": 6
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 8,
                                                        "end": 12
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 13,
                                                        "end": 13
                                                    },
                                                    "flags": 268435488,
                                                    "start": 4,
                                                    "end": 14
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 16
                                                },
                                                "flags": 268435488,
                                                "start": 4,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 4,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 4,
                                    "end": 16
                                },
                                "flags": 48,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "start": 34,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 35
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "flags": 268435488,
                                                    "start": 27,
                                                    "end": 37
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 38,
                                                    "end": 39
                                                },
                                                "flags": 536870944,
                                                "start": 27,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 27,
                                    "end": 40
                                },
                                "flags": 48,
                                "start": 25,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 25,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 44
                },
                "flags": 22,
                "start": 35,
                "end": 45
            },
            "flags": 16,
            "start": 22,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 58,
                                                    "end": 59
                                                },
                                                "flags": 96,
                                                "start": 51,
                                                "end": 59
                                            },
                                            "flags": 32,
                                            "start": 51,
                                            "end": 59
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 51,
                                    "end": 59
                                },
                                "flags": 48,
                                "start": 49,
                                "end": 61
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 49,
                        "end": 61
                    },
                    "flags": 32,
                    "start": 48,
                    "end": 63
                },
                "flags": 46,
                "start": 35,
                "end": 64
            },
            "flags": 16,
            "start": 46,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 70,
                                                "end": 72
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 74,
                                                    "end": 76
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 77,
                                                    "end": 78
                                                },
                                                "flags": 536870944,
                                                "start": 70,
                                                "end": 79
                                            },
                                            "flags": 32,
                                            "start": 70,
                                            "end": 79
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 70,
                                    "end": 79
                                },
                                "flags": 48,
                                "start": 68,
                                "end": 81
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 68,
                        "end": 81
                    },
                    "flags": 32,
                    "start": 67,
                    "end": 83
                },
                "flags": 65,
                "start": 35,
                "end": 84
            },
            "flags": 16,
            "start": 65,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 301,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 90,
                                                    "end": 92
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 10,
                                                    "rawText": "10",
                                                    "flags": 96,
                                                    "start": 94,
                                                    "end": 97
                                                },
                                                "flags": 32,
                                                "start": 90,
                                                "end": 97
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 90,
                                        "end": 97
                                    },
                                    "flags": 48,
                                    "start": 88,
                                    "end": 99
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 99,
                                    "end": 101
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 103,
                                        "end": 103
                                    },
                                    "flags": 48,
                                    "start": 101,
                                    "end": 104
                                },
                                "flags": 32,
                                "start": 88,
                                "end": 104
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 88,
                        "end": 104
                    },
                    "flags": 32,
                    "start": 87,
                    "end": 106
                },
                "flags": 85,
                "start": 35,
                "end": 107
            },
            "flags": 16,
            "start": 85,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
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
                                                    "start": 113,
                                                    "end": 115
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 117,
                                                        "end": 119
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 119,
                                                        "end": 121
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 96,
                                                        "start": 121,
                                                        "end": 124
                                                    },
                                                    "flags": 32,
                                                    "start": 113,
                                                    "end": 124
                                                },
                                                "flags": 32,
                                                "start": 113,
                                                "end": 124
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 113,
                                        "end": 124
                                    },
                                    "flags": 48,
                                    "start": 111,
                                    "end": 126
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 126,
                                    "end": 128
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 130,
                                        "end": 130
                                    },
                                    "flags": 48,
                                    "start": 128,
                                    "end": 131
                                },
                                "flags": 32,
                                "start": 111,
                                "end": 131
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 111,
                        "end": 131
                    },
                    "flags": 32,
                    "start": 110,
                    "end": 133
                },
                "flags": 108,
                "start": 35,
                "end": 134
            },
            "flags": 16,
            "start": 108,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
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
                                                    "start": 140,
                                                    "end": 142
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 144,
                                                                "end": 148
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 149,
                                                                "end": 149
                                                            },
                                                            "flags": 268435488,
                                                            "start": 140,
                                                            "end": 150
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 151,
                                                            "end": 152
                                                        },
                                                        "flags": 268435488,
                                                        "start": 140,
                                                        "end": 152
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 152,
                                                        "end": 154
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 96,
                                                        "start": 154,
                                                        "end": 157
                                                    },
                                                    "flags": 32,
                                                    "start": 140,
                                                    "end": 157
                                                },
                                                "flags": 32,
                                                "start": 140,
                                                "end": 157
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 140,
                                        "end": 157
                                    },
                                    "flags": 48,
                                    "start": 138,
                                    "end": 159
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 159,
                                    "end": 161
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 163,
                                        "end": 163
                                    },
                                    "flags": 48,
                                    "start": 161,
                                    "end": 164
                                },
                                "flags": 32,
                                "start": 138,
                                "end": 164
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 138,
                        "end": 164
                    },
                    "flags": 32,
                    "start": 137,
                    "end": 166
                },
                "flags": 135,
                "start": 35,
                "end": 167
            },
            "flags": 16,
            "start": 135,
            "end": 168
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
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
                                                    "start": 173,
                                                    "end": 175
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 177,
                                                                "end": 181
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 182,
                                                                "end": 182
                                                            },
                                                            "flags": 268435488,
                                                            "start": 173,
                                                            "end": 183
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 184,
                                                            "end": 185
                                                        },
                                                        "flags": 536870944,
                                                        "start": 173,
                                                        "end": 186
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 186,
                                                        "end": 188
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 96,
                                                        "start": 188,
                                                        "end": 191
                                                    },
                                                    "flags": 32,
                                                    "start": 173,
                                                    "end": 191
                                                },
                                                "flags": 32,
                                                "start": 173,
                                                "end": 191
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 173,
                                        "end": 191
                                    },
                                    "flags": 48,
                                    "start": 171,
                                    "end": 193
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 193,
                                    "end": 195
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 197,
                                        "end": 197
                                    },
                                    "flags": 48,
                                    "start": 195,
                                    "end": 198
                                },
                                "flags": 32,
                                "start": 171,
                                "end": 198
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 171,
                        "end": 198
                    },
                    "flags": 32,
                    "start": 170,
                    "end": 200
                },
                "flags": 168,
                "start": 35,
                "end": 201
            },
            "flags": 16,
            "start": 168,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
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
                                                    "start": 207,
                                                    "end": 209
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 211,
                                                            "end": 213
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 214,
                                                            "end": 215
                                                        },
                                                        "flags": 96,
                                                        "start": 207,
                                                        "end": 215
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 215,
                                                        "end": 217
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 96,
                                                        "start": 217,
                                                        "end": 220
                                                    },
                                                    "flags": 32,
                                                    "start": 207,
                                                    "end": 220
                                                },
                                                "flags": 32,
                                                "start": 207,
                                                "end": 220
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 207,
                                        "end": 220
                                    },
                                    "flags": 48,
                                    "start": 205,
                                    "end": 222
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 222,
                                    "end": 224
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 226,
                                        "end": 226
                                    },
                                    "flags": 48,
                                    "start": 224,
                                    "end": 227
                                },
                                "flags": 32,
                                "start": 205,
                                "end": 227
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 205,
                        "end": 227
                    },
                    "flags": 32,
                    "start": 204,
                    "end": 229
                },
                "flags": 202,
                "start": 35,
                "end": 230
            },
            "flags": 16,
            "start": 202,
            "end": 231
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
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
                                                    "start": 236,
                                                    "end": 238
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 240,
                                                            "end": 242
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 243,
                                                            "end": 244
                                                        },
                                                        "flags": 536870944,
                                                        "start": 236,
                                                        "end": 245
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 245,
                                                        "end": 247
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 96,
                                                        "start": 247,
                                                        "end": 250
                                                    },
                                                    "flags": 32,
                                                    "start": 236,
                                                    "end": 250
                                                },
                                                "flags": 32,
                                                "start": 236,
                                                "end": 250
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 236,
                                        "end": 250
                                    },
                                    "flags": 48,
                                    "start": 234,
                                    "end": 252
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 252,
                                    "end": 254
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 256,
                                        "end": 256
                                    },
                                    "flags": 48,
                                    "start": 254,
                                    "end": 257
                                },
                                "flags": 32,
                                "start": 234,
                                "end": 257
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 234,
                        "end": 257
                    },
                    "flags": 32,
                    "start": 233,
                    "end": 259
                },
                "flags": 231,
                "start": 35,
                "end": 260
            },
            "flags": 16,
            "start": 231,
            "end": 261
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 266,
                                                    "end": 268
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 268,
                                                    "end": 270
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 10,
                                                    "rawText": "10",
                                                    "flags": 96,
                                                    "start": 270,
                                                    "end": 273
                                                },
                                                "flags": 32,
                                                "start": 266,
                                                "end": 273
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 266,
                                        "end": 273
                                    },
                                    "flags": 32,
                                    "start": 264,
                                    "end": 275
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 275,
                                    "end": 277
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 279,
                                        "end": 279
                                    },
                                    "flags": 48,
                                    "start": 277,
                                    "end": 280
                                },
                                "flags": 32,
                                "start": 264,
                                "end": 280
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 264,
                        "end": 280
                    },
                    "flags": 32,
                    "start": 263,
                    "end": 282
                },
                "flags": 261,
                "start": 35,
                "end": 283
            },
            "flags": 16,
            "start": 261,
            "end": 284
        }
    ],
    "isModule": false,
    "source": "([ { x : foo().y } ]);\n([ { x : foo()[y] } ]);\n([ { x : x.y } ]);\n([ { x : x[y] } ]);\n([ { x = 10 } = {} ]);\n([ { x : y = 10 } = {} ]);\n([ { x : foo().y = 10 } = {} ]);\n([ { x : foo()[y] = 10 } = {} ]);\n([ { x : x.y = 10 } = {} ]);\n([ { x : x[y] = 10 } = {} ]);\n([ [ x = 10 ] = {} ]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 284
}
```

### Printed

```javascript

([{ x : foo().y },]);
([{ x : foo()[y] },]);
([{ x : x.y },]);
([{ x : x[y] },]);
([{ x = 10 } = {},]);
([{ x : y = 10 } = {},]);
([{ x : foo().y = 10 } = {},]);
([{ x : foo()[y] = 10 } = {},]);
([{ x : x.y = 10 } = {},]);
([{ x : x[y] = 10 } = {},]);
([[x = 10,] = {},]);

```

### Diagnostics

```javascript
✔ No errors
```

