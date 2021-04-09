# Kataw parser test case

## Input

`````js
[{[foo]: bar4}] = [{bar: "bar"}];

[{[foo2()]: bar5}] = [{bar: "bar"}];

[{[foo()]: bar4}] = [{bar: "bar"}];

[{ [foo]: bar4 }] = [{ bar: "bar" }];

[{ [foo2()]: bar5 }] = [{ bar: "bar" }];

[{ [foo()]: bar4 }] = [{ bar: "bar" }];

[{ [(1 + {})]: bar4 }] = [{ bar: "bar" }];

[...x] = it;

[[ x ]] = [null];

[ x ] = [];

[ ...x ] = [];

[...x[yield]] = [];
`````

## Options

### Parser Options

`````js
{}
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
                                                "kind": 81921,
                                                "value": "bar4",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 8,
                                                "end": 13
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 3,
                                                    "end": 6
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 2,
                                                "end": 7
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 2,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 13
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 20,
                                                "end": 23
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 20,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
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
                    "start": 17,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                                "kind": 81921,
                                                "value": "bar5",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 46,
                                                "end": 51
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo2",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 38,
                                                        "end": 42
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 43
                                                    },
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 37,
                                                "end": 45
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 37,
                                            "end": 51
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 37,
                                    "end": 51
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 52
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 36,
                        "end": 52
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 53
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 53,
                    "end": 55
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 62,
                                                "end": 68
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 58,
                                                "end": 61
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 58,
                                            "end": 68
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 58,
                                    "end": 68
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 57,
                                "end": 69
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 57,
                        "end": 69
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 55,
                    "end": 70
                },
                "autofix": 0,
                "flags": 256,
                "start": 33,
                "end": 70
            },
            "autofix": 0,
            "flags": 128,
            "start": 33,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                                "kind": 81921,
                                                "value": "bar4",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 83,
                                                "end": 88
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 76,
                                                        "end": 79
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 80,
                                                        "end": 80
                                                    },
                                                    "flags": 256,
                                                    "start": 76,
                                                    "end": 81
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 75,
                                                "end": 82
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 75,
                                            "end": 88
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 75,
                                    "end": 88
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 74,
                                "end": 89
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 74,
                        "end": 89
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 71,
                    "end": 90
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 90,
                    "end": 92
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 99,
                                                "end": 105
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 95,
                                                "end": 98
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 95,
                                            "end": 105
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 95,
                                    "end": 105
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 94,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 94,
                        "end": 106
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 92,
                    "end": 107
                },
                "autofix": 0,
                "flags": 256,
                "start": 71,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 71,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                                "kind": 81921,
                                                "value": "bar4",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 119,
                                                "end": 124
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 114,
                                                    "end": 117
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 112,
                                                "end": 118
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 112,
                                            "end": 124
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 112,
                                    "end": 124
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 111,
                                "end": 126
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 111,
                        "end": 126
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 108,
                    "end": 127
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 127,
                    "end": 129
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 137,
                                                "end": 143
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 132,
                                                "end": 136
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 132,
                                            "end": 143
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 132,
                                    "end": 143
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 131,
                                "end": 145
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 131,
                        "end": 145
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 129,
                    "end": 146
                },
                "autofix": 0,
                "flags": 256,
                "start": 108,
                "end": 146
            },
            "autofix": 0,
            "flags": 128,
            "start": 108,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                                "kind": 81921,
                                                "value": "bar5",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 161,
                                                "end": 166
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo2",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 153,
                                                        "end": 157
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 158,
                                                        "end": 158
                                                    },
                                                    "flags": 256,
                                                    "start": 153,
                                                    "end": 159
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 151,
                                                "end": 160
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 151,
                                            "end": 166
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 151,
                                    "end": 166
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 150,
                                "end": 168
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 150,
                        "end": 168
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 147,
                    "end": 169
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 169,
                    "end": 171
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 179,
                                                "end": 185
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 174,
                                                "end": 178
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 174,
                                            "end": 185
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 174,
                                    "end": 185
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 173,
                                "end": 187
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 173,
                        "end": 187
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 171,
                    "end": 188
                },
                "autofix": 0,
                "flags": 256,
                "start": 147,
                "end": 188
            },
            "autofix": 0,
            "flags": 128,
            "start": 147,
            "end": 189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                                "kind": 81921,
                                                "value": "bar4",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 202,
                                                "end": 207
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 195,
                                                        "end": 198
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 199,
                                                        "end": 199
                                                    },
                                                    "flags": 256,
                                                    "start": 195,
                                                    "end": 200
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 193,
                                                "end": 201
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 193,
                                            "end": 207
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 193,
                                    "end": 207
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 192,
                                "end": 209
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 192,
                        "end": 209
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 189,
                    "end": 210
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 210,
                    "end": 212
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 220,
                                                "end": 226
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 215,
                                                "end": 219
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 215,
                                            "end": 226
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 215,
                                    "end": 226
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 214,
                                "end": 228
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 214,
                        "end": 228
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 212,
                    "end": 229
                },
                "autofix": 0,
                "flags": 256,
                "start": 189,
                "end": 229
            },
            "autofix": 0,
            "flags": 128,
            "start": 189,
            "end": 230
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                                "kind": 81921,
                                                "value": "bar4",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 246,
                                                "end": 251
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": 1,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 237,
                                                            "end": 238
                                                        },
                                                        "operatorToken": {
                                                            "kind": 34098,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 238,
                                                            "end": 240
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
                                                                "start": 242,
                                                                "end": 242
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 240,
                                                            "end": 243
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 237,
                                                        "end": 243
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 236,
                                                    "end": 244
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 234,
                                                "end": 245
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 234,
                                            "end": 251
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 234,
                                    "end": 251
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 233,
                                "end": 253
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 233,
                        "end": 253
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 230,
                    "end": 254
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 254,
                    "end": 256
                },
                "right": {
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
                                                "kind": 67174403,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 264,
                                                "end": 270
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 259,
                                                "end": 263
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 259,
                                            "end": 270
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 259,
                                    "end": 270
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 258,
                                "end": 272
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 258,
                        "end": 272
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 256,
                    "end": 273
                },
                "autofix": 0,
                "flags": 256,
                "start": 230,
                "end": 273
            },
            "autofix": 0,
            "flags": 128,
            "start": 230,
            "end": 274
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 280,
                                    "end": 281
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 277,
                                "end": 281
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 277,
                        "end": 281
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 274,
                    "end": 282
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 282,
                    "end": 284
                },
                "right": {
                    "kind": 81921,
                    "value": "it",
                    "autofix": 0,
                    "flags": 768,
                    "start": 284,
                    "end": 287
                },
                "autofix": 0,
                "flags": 256,
                "start": 274,
                "end": 287
            },
            "autofix": 0,
            "flags": 128,
            "start": 274,
            "end": 288
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
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
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 292,
                                            "end": 294
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 292,
                                    "end": 294
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 291,
                                "end": 296
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 291,
                        "end": 296
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 288,
                    "end": 297
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 297,
                    "end": 299
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 269,
                                "value": null,
                                "autofix": 0,
                                "flags": 768,
                                "start": 301,
                                "end": 305
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 301,
                        "end": 305
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 299,
                    "end": 306
                },
                "autofix": 0,
                "flags": 256,
                "start": 288,
                "end": 306
            },
            "autofix": 0,
            "flags": 128,
            "start": 288,
            "end": 307
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 310,
                                "end": 312
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 310,
                        "end": 312
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 307,
                    "end": 314
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 314,
                    "end": 316
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 318,
                        "end": 318
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 316,
                    "end": 319
                },
                "autofix": 0,
                "flags": 256,
                "start": 307,
                "end": 319
            },
            "autofix": 0,
            "flags": 128,
            "start": 307,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 327,
                                    "end": 328
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 323,
                                "end": 328
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 323,
                        "end": 328
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 320,
                    "end": 330
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 330,
                    "end": 332
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 334,
                        "end": 334
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 332,
                    "end": 335
                },
                "autofix": 0,
                "flags": 256,
                "start": 320,
                "end": 335
            },
            "autofix": 0,
            "flags": 128,
            "start": 320,
            "end": 336
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 342,
                                        "end": 343
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 344,
                                        "end": 349
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 342,
                                    "end": 350
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 339,
                                "end": 350
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 339,
                        "end": 350
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 336,
                    "end": 351
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 351,
                    "end": 353
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 355,
                        "end": 355
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 353,
                    "end": 356
                },
                "autofix": 0,
                "flags": 256,
                "start": 336,
                "end": 356
            },
            "autofix": 0,
            "flags": 128,
            "start": 336,
            "end": 357
        }
    ],
    "isModule": false,
    "text": "[{[foo]: bar4}] = [{bar: \"bar\"}];\n\n[{[foo2()]: bar5}] = [{bar: \"bar\"}];\n\n[{[foo()]: bar4}] = [{bar: \"bar\"}];\n\n[{ [foo]: bar4 }] = [{ bar: \"bar\" }];\n\n[{ [foo2()]: bar5 }] = [{ bar: \"bar\" }];\n\n[{ [foo()]: bar4 }] = [{ bar: \"bar\" }];\n\n[{ [(1 + {})]: bar4 }] = [{ bar: \"bar\" }];\n\n[...x] = it;\n\n[[ x ]] = [null];\n\n[ x ] = [];\n\n[ ...x ] = [];\n\n[...x[yield]] = [];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 357
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

