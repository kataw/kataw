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

### Hybrid CST

```javascript
{
    "kind": 122,
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
                                            "left": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 8,
                                                        "end": 12
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 13,
                                                        "end": 13
                                                    },
                                                    "flags": 256,
                                                    "start": 4,
                                                    "end": 14
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 15,
                                                    "end": 16
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 4,
                                                "end": 16
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 4,
                                                "end": 6
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 4,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 4,
                                    "end": 16
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
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
                                            "left": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 31,
                                                        "end": 35
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "flags": 256,
                                                    "start": 27,
                                                    "end": 37
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 39
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 27,
                                                "end": 40
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 27,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 27,
                                    "end": 40
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 25,
                        "end": 42
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 24,
                    "end": 44
                },
                "autofix": 0,
                "flags": 256,
                "start": 22,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
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
                                            "left": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 58,
                                                    "end": 59
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 51,
                                                "end": 59
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 51,
                                            "end": 59
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 51,
                                    "end": 59
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 49,
                                "end": 61
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 49,
                        "end": 61
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 48,
                    "end": 63
                },
                "autofix": 0,
                "flags": 256,
                "start": 46,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
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
                                            "left": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 74,
                                                    "end": 76
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 77,
                                                    "end": 78
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 70,
                                                "end": 79
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 70,
                                                "end": 72
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 70,
                                            "end": 79
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 70,
                                    "end": 79
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 68,
                                "end": 81
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 68,
                        "end": 81
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 67,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 65,
                "end": 84
            },
            "autofix": 0,
            "flags": 128,
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
                                                "kind": 205,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 90,
                                                    "end": 92
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": 10,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 94,
                                                    "end": 97
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 90,
                                                "end": 97
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 90,
                                        "end": 97
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 88,
                                    "end": 99
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 99,
                                    "end": 101
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
                                        "start": 103,
                                        "end": 103
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 101,
                                    "end": 104
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 88,
                                "end": 104
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 88,
                        "end": 104
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 87,
                    "end": 106
                },
                "autofix": 0,
                "flags": 256,
                "start": 85,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
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
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 117,
                                                        "end": 119
                                                    },
                                                    "operatorToken": {
                                                        "kind": 67174402,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 113,
                                                        "end": 121
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": 10,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 121,
                                                        "end": 124
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 113,
                                                    "end": 124
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 113,
                                                    "end": 115
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 113,
                                                "end": 124
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 113,
                                        "end": 124
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 111,
                                    "end": 126
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 126,
                                    "end": 128
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
                                        "start": 130,
                                        "end": 130
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 128,
                                    "end": 131
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 111,
                                "end": 131
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 111,
                        "end": 131
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 110,
                    "end": 133
                },
                "autofix": 0,
                "flags": 256,
                "start": 108,
                "end": 134
            },
            "autofix": 0,
            "flags": 128,
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
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": "foo",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 144,
                                                                "end": 148
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 149,
                                                                "end": 149
                                                            },
                                                            "flags": 256,
                                                            "start": 140,
                                                            "end": 150
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 151,
                                                            "end": 152
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 140,
                                                        "end": 152
                                                    },
                                                    "operatorToken": {
                                                        "kind": 67174402,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 140,
                                                        "end": 154
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": 10,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 154,
                                                        "end": 157
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 140,
                                                    "end": 157
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 140,
                                                    "end": 142
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 140,
                                                "end": 157
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 140,
                                        "end": 157
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 138,
                                    "end": 159
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 159,
                                    "end": 161
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
                                        "start": 163,
                                        "end": 163
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 161,
                                    "end": 164
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 138,
                                "end": 164
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 138,
                        "end": 164
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 137,
                    "end": 166
                },
                "autofix": 0,
                "flags": 256,
                "start": 135,
                "end": 167
            },
            "autofix": 0,
            "flags": 128,
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
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": "foo",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 177,
                                                                "end": 181
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 182,
                                                                "end": 182
                                                            },
                                                            "flags": 256,
                                                            "start": 173,
                                                            "end": 183
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 184,
                                                            "end": 185
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 173,
                                                        "end": 186
                                                    },
                                                    "operatorToken": {
                                                        "kind": 67174402,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 173,
                                                        "end": 188
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": 10,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 188,
                                                        "end": 191
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 173,
                                                    "end": 191
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 173,
                                                    "end": 175
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 173,
                                                "end": 191
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 173,
                                        "end": 191
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 171,
                                    "end": 193
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 193,
                                    "end": 195
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
                                        "start": 197,
                                        "end": 197
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 195,
                                    "end": 198
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 171,
                                "end": 198
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 171,
                        "end": 198
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 170,
                    "end": 200
                },
                "autofix": 0,
                "flags": 256,
                "start": 168,
                "end": 201
            },
            "autofix": 0,
            "flags": 128,
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
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "x",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 211,
                                                            "end": 213
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 214,
                                                            "end": 215
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 207,
                                                        "end": 215
                                                    },
                                                    "operatorToken": {
                                                        "kind": 67174402,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 207,
                                                        "end": 217
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": 10,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 217,
                                                        "end": 220
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 207,
                                                    "end": 220
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 207,
                                                    "end": 209
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 207,
                                                "end": 220
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 207,
                                        "end": 220
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 205,
                                    "end": 222
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 222,
                                    "end": 224
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
                                        "start": 226,
                                        "end": 226
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 224,
                                    "end": 227
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 205,
                                "end": 227
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 205,
                        "end": 227
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 204,
                    "end": 229
                },
                "autofix": 0,
                "flags": 256,
                "start": 202,
                "end": 230
            },
            "autofix": 0,
            "flags": 128,
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
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "x",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 240,
                                                            "end": 242
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 243,
                                                            "end": 244
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 236,
                                                        "end": 245
                                                    },
                                                    "operatorToken": {
                                                        "kind": 67174402,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 236,
                                                        "end": 247
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": 10,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 247,
                                                        "end": 250
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 236,
                                                    "end": 250
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 236,
                                                    "end": 238
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 236,
                                                "end": 250
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 236,
                                        "end": 250
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 234,
                                    "end": 252
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 252,
                                    "end": 254
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
                                        "start": 256,
                                        "end": 256
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 254,
                                    "end": 257
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 234,
                                "end": 257
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 234,
                        "end": 257
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 233,
                    "end": 259
                },
                "autofix": 0,
                "flags": 256,
                "start": 231,
                "end": 260
            },
            "autofix": 0,
            "flags": 128,
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
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 266,
                                                    "end": 268
                                                },
                                                "operatorToken": {
                                                    "kind": 67174402,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 266,
                                                    "end": 270
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": 10,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 270,
                                                    "end": 273
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 266,
                                                "end": 273
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 266,
                                        "end": 273
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 264,
                                    "end": 275
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 275,
                                    "end": 277
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
                                        "start": 279,
                                        "end": 279
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 277,
                                    "end": 280
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 264,
                                "end": 280
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 264,
                        "end": 280
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 263,
                    "end": 282
                },
                "autofix": 0,
                "flags": 256,
                "start": 261,
                "end": 283
            },
            "autofix": 0,
            "flags": 128,
            "start": 261,
            "end": 284
        }
    ],
    "isModule": false,
    "text": "([ { x : foo().y } ]);\n([ { x : foo()[y] } ]);\n([ { x : x.y } ]);\n([ { x : x[y] } ]);\n([ { x = 10 } = {} ]);\n([ { x : y = 10 } = {} ]);\n([ { x : foo().y = 10 } = {} ]);\n([ { x : foo()[y] = 10 } = {} ]);\n([ { x : x.y = 10 } = {} ]);\n([ { x : x[y] = 10 } = {} ]);\n([ [ x = 10 ] = {} ]);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 284
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

