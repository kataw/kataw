# Kataw parser test case

## Input

`````js
([...{}.x] = x);
({...[][x]} = x);
({...[][x]} = x = y);
({...[][x]} = x = (y));
({...[][x]} = (x) = (y));
({...{}[x]} = x);
({...{}[x = (y)[z]]} = x);
([...[({...{}[x = (y)[z]]} = x)][x]] = x);
([...[][x]] = x);
([...{}[x]] = x);
({...{b: 0}.x} = {});
({...{b: 0}[x]} = {});
({...[0][x]} = {});
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
                "kind": 121,
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
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 256,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 19,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 19,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 18,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 28,
                        "end": 30
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 18,
                    "end": 32
                },
                "flags": 256,
                "start": 16,
                "end": 33
            },
            "flags": 128,
            "start": 16,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 41,
                                                "end": 41
                                            },
                                            "flags": 256,
                                            "start": 40,
                                            "end": 42
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 40,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 37,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 37,
                            "end": 45
                        },
                        "flags": 256,
                        "start": 36,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 48,
                            "end": 50
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 50,
                            "end": 52
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 52,
                            "end": 54
                        },
                        "flags": 256,
                        "start": 48,
                        "end": 54
                    },
                    "flags": 256,
                    "start": 36,
                    "end": 54
                },
                "flags": 256,
                "start": 34,
                "end": 55
            },
            "flags": 128,
            "start": 34,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 63,
                                                "end": 63
                                            },
                                            "flags": 256,
                                            "start": 62,
                                            "end": 64
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 65,
                                            "end": 66
                                        },
                                        "flags": 256,
                                        "start": 62,
                                        "end": 67
                                    },
                                    "flags": 256,
                                    "start": 59,
                                    "end": 67
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 59,
                            "end": 67
                        },
                        "flags": 256,
                        "start": 58,
                        "end": 68
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 68,
                        "end": 70
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 70,
                            "end": 72
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 72,
                            "end": 74
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 76,
                                "end": 77
                            },
                            "flags": 256,
                            "start": 74,
                            "end": 78
                        },
                        "flags": 256,
                        "start": 70,
                        "end": 78
                    },
                    "flags": 256,
                    "start": 58,
                    "end": 78
                },
                "flags": 256,
                "start": 56,
                "end": 79
            },
            "flags": 128,
            "start": 56,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 87,
                                                "end": 87
                                            },
                                            "flags": 256,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 89,
                                            "end": 90
                                        },
                                        "flags": 256,
                                        "start": 86,
                                        "end": 91
                                    },
                                    "flags": 256,
                                    "start": 83,
                                    "end": 91
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 83,
                            "end": 91
                        },
                        "flags": 256,
                        "start": 82,
                        "end": 92
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 92,
                        "end": 94
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 96,
                                "end": 97
                            },
                            "flags": 256,
                            "start": 94,
                            "end": 98
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 98,
                            "end": 100
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 102,
                                "end": 103
                            },
                            "flags": 256,
                            "start": 100,
                            "end": 104
                        },
                        "flags": 256,
                        "start": 94,
                        "end": 104
                    },
                    "flags": 256,
                    "start": 82,
                    "end": 104
                },
                "flags": 256,
                "start": 80,
                "end": 105
            },
            "flags": 128,
            "start": 80,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 113,
                                                "end": 113
                                            },
                                            "flags": 256,
                                            "start": 112,
                                            "end": 114
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 115,
                                            "end": 116
                                        },
                                        "flags": 256,
                                        "start": 112,
                                        "end": 117
                                    },
                                    "flags": 256,
                                    "start": 109,
                                    "end": 117
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 109,
                            "end": 117
                        },
                        "flags": 256,
                        "start": 108,
                        "end": 118
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 118,
                        "end": 120
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 120,
                        "end": 122
                    },
                    "flags": 256,
                    "start": 108,
                    "end": 122
                },
                "flags": 256,
                "start": 106,
                "end": 123
            },
            "flags": 128,
            "start": 106,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 131,
                                                "end": 131
                                            },
                                            "flags": 256,
                                            "start": 130,
                                            "end": 132
                                        },
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 133,
                                                "end": 134
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 768,
                                                "start": 134,
                                                "end": 136
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 138,
                                                        "end": 139
                                                    },
                                                    "flags": 256,
                                                    "start": 136,
                                                    "end": 140
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 768,
                                                    "start": 141,
                                                    "end": 142
                                                },
                                                "flags": 256,
                                                "start": 136,
                                                "end": 143
                                            },
                                            "flags": 256,
                                            "start": 133,
                                            "end": 143
                                        },
                                        "flags": 256,
                                        "start": 130,
                                        "end": 144
                                    },
                                    "flags": 256,
                                    "start": 127,
                                    "end": 144
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 127,
                            "end": 144
                        },
                        "flags": 256,
                        "start": 126,
                        "end": 145
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 145,
                        "end": 147
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 147,
                        "end": 149
                    },
                    "flags": 256,
                    "start": 126,
                    "end": 149
                },
                "flags": 256,
                "start": 124,
                "end": 150
            },
            "flags": 128,
            "start": 124,
            "end": 151
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 224,
                                                                            "argument": {
                                                                                "kind": 130,
                                                                                "member": {
                                                                                    "kind": 220,
                                                                                    "propertyList": {
                                                                                        "kind": 218,
                                                                                        "properties": [],
                                                                                        "trailingComma": false,
                                                                                        "multiline": false,
                                                                                        "flags": 0,
                                                                                        "start": 164,
                                                                                        "end": 164
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 163,
                                                                                    "end": 165
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "x",
                                                                                        "rawText": "x",
                                                                                        "flags": 768,
                                                                                        "start": 166,
                                                                                        "end": 167
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 768,
                                                                                        "start": 167,
                                                                                        "end": 169
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 130,
                                                                                        "member": {
                                                                                            "kind": 121,
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "y",
                                                                                                "rawText": "y",
                                                                                                "flags": 768,
                                                                                                "start": 171,
                                                                                                "end": 172
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 169,
                                                                                            "end": 173
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "z",
                                                                                            "rawText": "z",
                                                                                            "flags": 768,
                                                                                            "start": 174,
                                                                                            "end": 175
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 169,
                                                                                        "end": 176
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 166,
                                                                                    "end": 176
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 163,
                                                                                "end": 177
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 160,
                                                                            "end": 177
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "start": 160,
                                                                    "end": 177
                                                                },
                                                                "flags": 256,
                                                                "start": 159,
                                                                "end": 178
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 768,
                                                                "start": 178,
                                                                "end": 180
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 180,
                                                                "end": 182
                                                            },
                                                            "flags": 256,
                                                            "start": 159,
                                                            "end": 182
                                                        },
                                                        "flags": 256,
                                                        "start": 158,
                                                        "end": 183
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 158,
                                                "end": 183
                                            },
                                            "flags": 256,
                                            "start": 157,
                                            "end": 184
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 185,
                                            "end": 186
                                        },
                                        "flags": 256,
                                        "start": 157,
                                        "end": 187
                                    },
                                    "flags": 256,
                                    "start": 154,
                                    "end": 187
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 154,
                            "end": 187
                        },
                        "flags": 256,
                        "start": 153,
                        "end": 188
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 188,
                        "end": 190
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 190,
                        "end": 192
                    },
                    "flags": 256,
                    "start": 153,
                    "end": 192
                },
                "flags": 256,
                "start": 151,
                "end": 193
            },
            "flags": 128,
            "start": 151,
            "end": 194
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 201,
                                                "end": 201
                                            },
                                            "flags": 256,
                                            "start": 200,
                                            "end": 202
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 203,
                                            "end": 204
                                        },
                                        "flags": 256,
                                        "start": 200,
                                        "end": 205
                                    },
                                    "flags": 256,
                                    "start": 197,
                                    "end": 205
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 197,
                            "end": 205
                        },
                        "flags": 256,
                        "start": 196,
                        "end": 206
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 206,
                        "end": 208
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 208,
                        "end": 210
                    },
                    "flags": 256,
                    "start": 196,
                    "end": 210
                },
                "flags": 256,
                "start": 194,
                "end": 211
            },
            "flags": 128,
            "start": 194,
            "end": 212
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 219,
                                                "end": 219
                                            },
                                            "flags": 256,
                                            "start": 218,
                                            "end": 220
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 221,
                                            "end": 222
                                        },
                                        "flags": 256,
                                        "start": 218,
                                        "end": 223
                                    },
                                    "flags": 256,
                                    "start": 215,
                                    "end": 223
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 215,
                            "end": 223
                        },
                        "flags": 256,
                        "start": 214,
                        "end": 224
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 224,
                        "end": 226
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 226,
                        "end": 228
                    },
                    "flags": 256,
                    "start": 214,
                    "end": 228
                },
                "flags": 256,
                "start": 212,
                "end": 229
            },
            "flags": 128,
            "start": 212,
            "end": 230
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 768,
                                                            "start": 239,
                                                            "end": 241
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 237,
                                                            "end": 238
                                                        },
                                                        "flags": 256,
                                                        "start": 237,
                                                        "end": 241
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 237,
                                                "end": 241
                                            },
                                            "flags": 256,
                                            "start": 236,
                                            "end": 242
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 243,
                                            "end": 244
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 236,
                                        "end": 244
                                    },
                                    "flags": 256,
                                    "start": 233,
                                    "end": 244
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 233,
                            "end": 244
                        },
                        "flags": 256,
                        "start": 232,
                        "end": 245
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 245,
                        "end": 247
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 249,
                            "end": 249
                        },
                        "flags": 256,
                        "start": 247,
                        "end": 250
                    },
                    "flags": 256,
                    "start": 232,
                    "end": 250
                },
                "flags": 256,
                "start": 230,
                "end": 251
            },
            "flags": 128,
            "start": 230,
            "end": 252
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 768,
                                                            "start": 261,
                                                            "end": 263
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 259,
                                                            "end": 260
                                                        },
                                                        "flags": 256,
                                                        "start": 259,
                                                        "end": 263
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 259,
                                                "end": 263
                                            },
                                            "flags": 256,
                                            "start": 258,
                                            "end": 264
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 265,
                                            "end": 266
                                        },
                                        "flags": 256,
                                        "start": 258,
                                        "end": 267
                                    },
                                    "flags": 256,
                                    "start": 255,
                                    "end": 267
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 255,
                            "end": 267
                        },
                        "flags": 256,
                        "start": 254,
                        "end": 268
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 268,
                        "end": 270
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 272,
                            "end": 272
                        },
                        "flags": 256,
                        "start": 270,
                        "end": 273
                    },
                    "flags": 256,
                    "start": 254,
                    "end": 273
                },
                "flags": 256,
                "start": 252,
                "end": 274
            },
            "flags": 128,
            "start": 252,
            "end": 275
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 768,
                                                        "start": 282,
                                                        "end": 283
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 282,
                                                "end": 283
                                            },
                                            "flags": 256,
                                            "start": 281,
                                            "end": 284
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 285,
                                            "end": 286
                                        },
                                        "flags": 256,
                                        "start": 281,
                                        "end": 287
                                    },
                                    "flags": 256,
                                    "start": 278,
                                    "end": 287
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 278,
                            "end": 287
                        },
                        "flags": 256,
                        "start": 277,
                        "end": 288
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 288,
                        "end": 290
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 292,
                            "end": 292
                        },
                        "flags": 256,
                        "start": 290,
                        "end": 293
                    },
                    "flags": 256,
                    "start": 277,
                    "end": 293
                },
                "flags": 256,
                "start": 275,
                "end": 294
            },
            "flags": 128,
            "start": 275,
            "end": 295
        }
    ],
    "isModule": false,
    "text": "([...{}.x] = x);\n({...[][x]} = x);\n({...[][x]} = x = y);\n({...[][x]} = x = (y));\n({...[][x]} = (x) = (y));\n({...{}[x]} = x);\n({...{}[x = (y)[z]]} = x);\n([...[({...{}[x = (y)[z]]} = x)][x]] = x);\n([...[][x]] = x);\n([...{}[x]] = x);\n({...{b: 0}.x} = {});\n({...{b: 0}[x]} = {});\n({...[0][x]} = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 295
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

