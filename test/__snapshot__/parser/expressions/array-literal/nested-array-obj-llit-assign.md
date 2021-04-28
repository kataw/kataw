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
    "directives": [],
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
                                                "kind": 134299649,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 768,
                                                "start": 8,
                                                "end": 13
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 3,
                                                    "end": 6
                                                },
                                                "flags": 256,
                                                "start": 2,
                                                "end": 7
                                            },
                                            "flags": 256,
                                            "start": 2,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 13
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 20,
                                                "end": 23
                                            },
                                            "flags": 256,
                                            "start": 20,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
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
                    "start": 17,
                    "end": 32
                },
                "flags": 256,
                "start": 0,
                "end": 32
            },
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
                                                "kind": 134299649,
                                                "text": "bar5",
                                                "rawText": "bar5",
                                                "flags": 768,
                                                "start": 46,
                                                "end": 51
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo2",
                                                        "rawText": "foo2",
                                                        "flags": 768,
                                                        "start": 38,
                                                        "end": 42
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 43
                                                    },
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 45
                                            },
                                            "flags": 256,
                                            "start": 37,
                                            "end": 51
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 37,
                                    "end": 51
                                },
                                "flags": 256,
                                "start": 36,
                                "end": 52
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 36,
                        "end": 52
                    },
                    "flags": 256,
                    "start": 33,
                    "end": 53
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 62,
                                                "end": 68
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 58,
                                                "end": 61
                                            },
                                            "flags": 256,
                                            "start": 58,
                                            "end": 68
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 58,
                                    "end": 68
                                },
                                "flags": 256,
                                "start": 57,
                                "end": 69
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 57,
                        "end": 69
                    },
                    "flags": 256,
                    "start": 55,
                    "end": 70
                },
                "flags": 256,
                "start": 33,
                "end": 70
            },
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
                                                "kind": 134299649,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 768,
                                                "start": 83,
                                                "end": 88
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 76,
                                                        "end": 79
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 80,
                                                        "end": 80
                                                    },
                                                    "flags": 256,
                                                    "start": 76,
                                                    "end": 81
                                                },
                                                "flags": 256,
                                                "start": 75,
                                                "end": 82
                                            },
                                            "flags": 256,
                                            "start": 75,
                                            "end": 88
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 75,
                                    "end": 88
                                },
                                "flags": 256,
                                "start": 74,
                                "end": 89
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 74,
                        "end": 89
                    },
                    "flags": 256,
                    "start": 71,
                    "end": 90
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 99,
                                                "end": 105
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 95,
                                                "end": 98
                                            },
                                            "flags": 256,
                                            "start": 95,
                                            "end": 105
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 95,
                                    "end": 105
                                },
                                "flags": 256,
                                "start": 94,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 94,
                        "end": 106
                    },
                    "flags": 256,
                    "start": 92,
                    "end": 107
                },
                "flags": 256,
                "start": 71,
                "end": 107
            },
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
                                                "kind": 134299649,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 768,
                                                "start": 119,
                                                "end": 124
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 114,
                                                    "end": 117
                                                },
                                                "flags": 256,
                                                "start": 112,
                                                "end": 118
                                            },
                                            "flags": 256,
                                            "start": 112,
                                            "end": 124
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 112,
                                    "end": 124
                                },
                                "flags": 256,
                                "start": 111,
                                "end": 126
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 111,
                        "end": 126
                    },
                    "flags": 256,
                    "start": 108,
                    "end": 127
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 137,
                                                "end": 143
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 132,
                                                "end": 136
                                            },
                                            "flags": 256,
                                            "start": 132,
                                            "end": 143
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 132,
                                    "end": 143
                                },
                                "flags": 256,
                                "start": 131,
                                "end": 145
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 131,
                        "end": 145
                    },
                    "flags": 256,
                    "start": 129,
                    "end": 146
                },
                "flags": 256,
                "start": 108,
                "end": 146
            },
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
                                                "kind": 134299649,
                                                "text": "bar5",
                                                "rawText": "bar5",
                                                "flags": 768,
                                                "start": 161,
                                                "end": 166
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo2",
                                                        "rawText": "foo2",
                                                        "flags": 768,
                                                        "start": 153,
                                                        "end": 157
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 158,
                                                        "end": 158
                                                    },
                                                    "flags": 256,
                                                    "start": 153,
                                                    "end": 159
                                                },
                                                "flags": 256,
                                                "start": 151,
                                                "end": 160
                                            },
                                            "flags": 256,
                                            "start": 151,
                                            "end": 166
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 151,
                                    "end": 166
                                },
                                "flags": 256,
                                "start": 150,
                                "end": 168
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 150,
                        "end": 168
                    },
                    "flags": 256,
                    "start": 147,
                    "end": 169
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 179,
                                                "end": 185
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 174,
                                                "end": 178
                                            },
                                            "flags": 256,
                                            "start": 174,
                                            "end": 185
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 174,
                                    "end": 185
                                },
                                "flags": 256,
                                "start": 173,
                                "end": 187
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 173,
                        "end": 187
                    },
                    "flags": 256,
                    "start": 171,
                    "end": 188
                },
                "flags": 256,
                "start": 147,
                "end": 188
            },
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
                                                "kind": 134299649,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 768,
                                                "start": 202,
                                                "end": 207
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 195,
                                                        "end": 198
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 199,
                                                        "end": 199
                                                    },
                                                    "flags": 256,
                                                    "start": 195,
                                                    "end": 200
                                                },
                                                "flags": 256,
                                                "start": 193,
                                                "end": 201
                                            },
                                            "flags": 256,
                                            "start": 193,
                                            "end": 207
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 193,
                                    "end": 207
                                },
                                "flags": 256,
                                "start": 192,
                                "end": 209
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 192,
                        "end": 209
                    },
                    "flags": 256,
                    "start": 189,
                    "end": 210
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 220,
                                                "end": 226
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 215,
                                                "end": 219
                                            },
                                            "flags": 256,
                                            "start": 215,
                                            "end": 226
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 215,
                                    "end": 226
                                },
                                "flags": 256,
                                "start": 214,
                                "end": 228
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 214,
                        "end": 228
                    },
                    "flags": 256,
                    "start": 212,
                    "end": 229
                },
                "flags": 256,
                "start": 189,
                "end": 229
            },
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
                                                "kind": 134299649,
                                                "text": "bar4",
                                                "rawText": "bar4",
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
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 237,
                                                            "end": 238
                                                        },
                                                        "operatorToken": {
                                                            "kind": 34098,
                                                            "flags": 512,
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
                                                                "flags": 0,
                                                                "start": 242,
                                                                "end": 242
                                                            },
                                                            "flags": 256,
                                                            "start": 240,
                                                            "end": 243
                                                        },
                                                        "flags": 256,
                                                        "start": 237,
                                                        "end": 243
                                                    },
                                                    "flags": 256,
                                                    "start": 236,
                                                    "end": 244
                                                },
                                                "flags": 256,
                                                "start": 234,
                                                "end": 245
                                            },
                                            "flags": 256,
                                            "start": 234,
                                            "end": 251
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 234,
                                    "end": 251
                                },
                                "flags": 256,
                                "start": 233,
                                "end": 253
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 233,
                        "end": 253
                    },
                    "flags": 256,
                    "start": 230,
                    "end": 254
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 264,
                                                "end": 270
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 259,
                                                "end": 263
                                            },
                                            "flags": 256,
                                            "start": 259,
                                            "end": 270
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 259,
                                    "end": 270
                                },
                                "flags": 256,
                                "start": 258,
                                "end": 272
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 258,
                        "end": 272
                    },
                    "flags": 256,
                    "start": 256,
                    "end": 273
                },
                "flags": 256,
                "start": 230,
                "end": 273
            },
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 277,
                                    "start": 0,
                                    "end": 280
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 280,
                                    "end": 281
                                },
                                "flags": 256,
                                "start": 277,
                                "end": 281
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 277,
                        "end": 281
                    },
                    "flags": 256,
                    "start": 274,
                    "end": 282
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 282,
                    "end": 284
                },
                "right": {
                    "kind": 134299649,
                    "text": "it",
                    "rawText": "it",
                    "flags": 768,
                    "start": 284,
                    "end": 287
                },
                "flags": 256,
                "start": 274,
                "end": 287
            },
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
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 292,
                                            "end": 294
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 292,
                                    "end": 294
                                },
                                "flags": 256,
                                "start": 291,
                                "end": 296
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 291,
                        "end": 296
                    },
                    "flags": 256,
                    "start": 288,
                    "end": 297
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
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
                                "text": null,
                                "flags": 768,
                                "start": 301,
                                "end": 305
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 301,
                        "end": 305
                    },
                    "flags": 256,
                    "start": 299,
                    "end": 306
                },
                "flags": 256,
                "start": 288,
                "end": 306
            },
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 310,
                                "end": 312
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 310,
                        "end": 312
                    },
                    "flags": 256,
                    "start": 307,
                    "end": 314
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 314,
                    "end": 316
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 318,
                        "end": 318
                    },
                    "flags": 256,
                    "start": 316,
                    "end": 319
                },
                "flags": 256,
                "start": 307,
                "end": 319
            },
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 323,
                                    "start": 0,
                                    "end": 327
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 327,
                                    "end": 328
                                },
                                "flags": 256,
                                "start": 323,
                                "end": 328
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 323,
                        "end": 328
                    },
                    "flags": 256,
                    "start": 320,
                    "end": 330
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 330,
                    "end": 332
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 334,
                        "end": 334
                    },
                    "flags": 256,
                    "start": 332,
                    "end": 335
                },
                "flags": 256,
                "start": 320,
                "end": 335
            },
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 339,
                                    "start": 0,
                                    "end": 342
                                },
                                "argument": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 342,
                                        "end": 343
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 344,
                                        "end": 349
                                    },
                                    "flags": 256,
                                    "start": 342,
                                    "end": 350
                                },
                                "flags": 256,
                                "start": 339,
                                "end": 350
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 339,
                        "end": 350
                    },
                    "flags": 256,
                    "start": 336,
                    "end": 351
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 351,
                    "end": 353
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 355,
                        "end": 355
                    },
                    "flags": 256,
                    "start": 353,
                    "end": 356
                },
                "flags": 256,
                "start": 336,
                "end": 356
            },
            "flags": 128,
            "start": 336,
            "end": 357
        }
    ],
    "isModule": false,
    "text": "[{[foo]: bar4}] = [{bar: \"bar\"}];\n\n[{[foo2()]: bar5}] = [{bar: \"bar\"}];\n\n[{[foo()]: bar4}] = [{bar: \"bar\"}];\n\n[{ [foo]: bar4 }] = [{ bar: \"bar\" }];\n\n[{ [foo2()]: bar5 }] = [{ bar: \"bar\" }];\n\n[{ [foo()]: bar4 }] = [{ bar: \"bar\" }];\n\n[{ [(1 + {})]: bar4 }] = [{ bar: \"bar\" }];\n\n[...x] = it;\n\n[[ x ]] = [null];\n\n[ x ] = [];\n\n[ ...x ] = [];\n\n[...x[yield]] = [];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 357
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

