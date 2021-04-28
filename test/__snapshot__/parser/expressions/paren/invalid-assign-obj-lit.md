# Kataw parser test case

## Input

`````js
({...a, x } = { x: 1 });
(q, {...a, x } = { x: 1 });
({...a, x, ...b } = { x: 1 });
(q, {...a, x, ...b } = { x: 1 });
({a, ...rest.b + rest.b} = o);
({a:(a,y) = 0} = 1);
({x=y})=z;
([a]) = 2;
({a}) = 2;
({1: [b.c = x]} = 2 / (dd = ((3)) = a));
({[a]: {...[a[]]}});
({[a]: {x = [a]}});
({{x}: "b"});
({a: {x = y}, "b"});
({a: {x = y}, "b": a});
(a.());
( {a, ...{b}} = {/*...*/});
( {a, ...{}} = {/*...*/});
( {a, ...[b]} = {/*...*/});
( {a, ...[]} = {/*...*/});
( [{a, ...[]}] = [{/*...*/}]);
({...[]} = x);;
(a = 1) = t ;
({[b]}});
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
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 6
                                },
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 7,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 256,
                                    "start": 15,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 13,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 768,
                            "start": 26,
                            "end": 27
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 30,
                                                "end": 33
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 33,
                                                "end": 34
                                            },
                                            "flags": 256,
                                            "start": 30,
                                            "end": 34
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 35,
                                            "end": 37
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 30,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 28,
                                "end": 39
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 39,
                                "end": 41
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 46,
                                                "end": 48
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "flags": 256,
                                            "start": 43,
                                            "end": 48
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 43,
                                    "end": 48
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 50
                            },
                            "flags": 256,
                            "start": 28,
                            "end": 50
                        }
                    ],
                    "flags": 256,
                    "start": 24,
                    "end": 51
                },
                "flags": 256,
                "start": 24,
                "end": 51
            },
            "flags": 128,
            "start": 24,
            "end": 52
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 55,
                                        "end": 58
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 58,
                                        "end": 59
                                    },
                                    "flags": 256,
                                    "start": 55,
                                    "end": 59
                                },
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 60,
                                    "end": 62
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 63,
                                        "end": 67
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 67,
                                        "end": 68
                                    },
                                    "flags": 256,
                                    "start": 63,
                                    "end": 68
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 55,
                            "end": 68
                        },
                        "flags": 256,
                        "start": 54,
                        "end": 70
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 70,
                        "end": 72
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 77,
                                        "end": 79
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 74,
                                        "end": 76
                                    },
                                    "flags": 256,
                                    "start": 74,
                                    "end": 79
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 74,
                            "end": 79
                        },
                        "flags": 256,
                        "start": 72,
                        "end": 81
                    },
                    "flags": 256,
                    "start": 54,
                    "end": 81
                },
                "flags": 256,
                "start": 52,
                "end": 82
            },
            "flags": 128,
            "start": 52,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 768,
                            "start": 85,
                            "end": 86
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 89,
                                                "end": 92
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 92,
                                                "end": 93
                                            },
                                            "flags": 256,
                                            "start": 89,
                                            "end": 93
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 94,
                                            "end": 96
                                        },
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 97,
                                                "end": 101
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 101,
                                                "end": 102
                                            },
                                            "flags": 256,
                                            "start": 97,
                                            "end": 102
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 89,
                                    "end": 102
                                },
                                "flags": 256,
                                "start": 87,
                                "end": 104
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 104,
                                "end": 106
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 111,
                                                "end": 113
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 108,
                                                "end": 110
                                            },
                                            "flags": 256,
                                            "start": 108,
                                            "end": 113
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 108,
                                    "end": 113
                                },
                                "flags": 256,
                                "start": 106,
                                "end": 115
                            },
                            "flags": 256,
                            "start": 87,
                            "end": 115
                        }
                    ],
                    "flags": 256,
                    "start": 83,
                    "end": 116
                },
                "flags": 256,
                "start": 83,
                "end": 116
            },
            "flags": 128,
            "start": 83,
            "end": 117
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 120,
                                    "end": 121
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 122,
                                        "end": 126
                                    },
                                    "argument": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 768,
                                                "start": 126,
                                                "end": 130
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 131,
                                                "end": 132
                                            },
                                            "flags": 256,
                                            "start": 126,
                                            "end": 132
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 768,
                                            "start": 132,
                                            "end": 134
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 768,
                                                "start": 134,
                                                "end": 139
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 140,
                                                "end": 141
                                            },
                                            "flags": 256,
                                            "start": 134,
                                            "end": 141
                                        },
                                        "flags": 256,
                                        "start": 126,
                                        "end": 141
                                    },
                                    "flags": 256,
                                    "start": 122,
                                    "end": 141
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 120,
                            "end": 141
                        },
                        "flags": 256,
                        "start": 119,
                        "end": 142
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 142,
                        "end": 144
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "o",
                        "rawText": "o",
                        "flags": 768,
                        "start": 144,
                        "end": 146
                    },
                    "flags": 256,
                    "start": 119,
                    "end": 146
                },
                "flags": 256,
                "start": 117,
                "end": 147
            },
            "flags": 128,
            "start": 117,
            "end": 148
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
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 154,
                                                        "end": 155
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 156,
                                                        "end": 157
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 153,
                                                "end": 158
                                            },
                                            "flags": 256,
                                            "start": 153,
                                            "end": 158
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 158,
                                            "end": 160
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 160,
                                            "end": 162
                                        },
                                        "flags": 256,
                                        "start": 151,
                                        "end": 162
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 151,
                                        "end": 152
                                    },
                                    "flags": 256,
                                    "start": 151,
                                    "end": 162
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 151,
                            "end": 162
                        },
                        "flags": 256,
                        "start": 150,
                        "end": 163
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 163,
                        "end": 165
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 165,
                        "end": 167
                    },
                    "flags": 256,
                    "start": 150,
                    "end": 167
                },
                "flags": 256,
                "start": 148,
                "end": 168
            },
            "flags": 128,
            "start": 148,
            "end": 169
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 172,
                                        "end": 173
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 174,
                                        "end": 175
                                    },
                                    "flags": 256,
                                    "start": 172,
                                    "end": 175
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 172,
                            "end": 175
                        },
                        "flags": 256,
                        "start": 171,
                        "end": 176
                    },
                    "flags": 256,
                    "start": 169,
                    "end": 177
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 177,
                    "end": 178
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 178,
                    "end": 179
                },
                "flags": 256,
                "start": 169,
                "end": 179
            },
            "flags": 128,
            "start": 169,
            "end": 180
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 183,
                                    "end": 184
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 183,
                            "end": 184
                        },
                        "flags": 256,
                        "start": 182,
                        "end": 185
                    },
                    "flags": 256,
                    "start": 180,
                    "end": 186
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 186,
                    "end": 188
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 768,
                    "start": 188,
                    "end": 190
                },
                "flags": 256,
                "start": 180,
                "end": 190
            },
            "flags": 128,
            "start": 180,
            "end": 191
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 194,
                                    "end": 195
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 194,
                            "end": 195
                        },
                        "flags": 256,
                        "start": 193,
                        "end": 196
                    },
                    "flags": 256,
                    "start": 191,
                    "end": 197
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 197,
                    "end": 199
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 768,
                    "start": 199,
                    "end": 201
                },
                "flags": 256,
                "start": 191,
                "end": 201
            },
            "flags": 128,
            "start": 191,
            "end": 202
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
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 209,
                                                            "end": 210
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 768,
                                                            "start": 211,
                                                            "end": 212
                                                        },
                                                        "flags": 256,
                                                        "start": 209,
                                                        "end": 212
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 212,
                                                        "end": 214
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 214,
                                                        "end": 216
                                                    },
                                                    "flags": 256,
                                                    "start": 209,
                                                    "end": 216
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 209,
                                            "end": 216
                                        },
                                        "flags": 256,
                                        "start": 207,
                                        "end": 217
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 205,
                                        "end": 206
                                    },
                                    "flags": 256,
                                    "start": 205,
                                    "end": 217
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 205,
                            "end": 217
                        },
                        "flags": 256,
                        "start": 204,
                        "end": 218
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 218,
                        "end": 220
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 768,
                            "start": 220,
                            "end": 222
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 768,
                            "start": 222,
                            "end": 224
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "dd",
                                    "rawText": "dd",
                                    "flags": 768,
                                    "start": 226,
                                    "end": 228
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 228,
                                    "end": 230
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 233,
                                                "end": 234
                                            },
                                            "flags": 256,
                                            "start": 232,
                                            "end": 235
                                        },
                                        "flags": 256,
                                        "start": 230,
                                        "end": 236
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 236,
                                        "end": 238
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 238,
                                        "end": 240
                                    },
                                    "flags": 256,
                                    "start": 230,
                                    "end": 240
                                },
                                "flags": 256,
                                "start": 224,
                                "end": 240
                            },
                            "flags": 256,
                            "start": 224,
                            "end": 241
                        },
                        "flags": 256,
                        "start": 220,
                        "end": 241
                    },
                    "flags": 256,
                    "start": 204,
                    "end": 241
                },
                "flags": 256,
                "start": 202,
                "end": 242
            },
            "flags": 128,
            "start": 202,
            "end": 243
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 768,
                                                    "start": 252,
                                                    "end": 255
                                                },
                                                "argument": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 130,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 768,
                                                                    "start": 256,
                                                                    "end": 257
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 12,
                                                                    "start": 258,
                                                                    "end": 258
                                                                },
                                                                "flags": 256,
                                                                "start": 256,
                                                                "end": 259
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 256,
                                                        "end": 259
                                                    },
                                                    "flags": 256,
                                                    "start": 255,
                                                    "end": 260
                                                },
                                                "flags": 256,
                                                "start": 252,
                                                "end": 260
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 252,
                                        "end": 260
                                    },
                                    "flags": 256,
                                    "start": 250,
                                    "end": 261
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 247,
                                        "end": 248
                                    },
                                    "flags": 256,
                                    "start": 246,
                                    "end": 249
                                },
                                "flags": 256,
                                "start": 246,
                                "end": 261
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 246,
                        "end": 261
                    },
                    "flags": 256,
                    "start": 245,
                    "end": 262
                },
                "flags": 256,
                "start": 243,
                "end": 263
            },
            "flags": 128,
            "start": 243,
            "end": 264
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 273,
                                                    "end": 274
                                                },
                                                "right": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 768,
                                                                "start": 278,
                                                                "end": 279
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 278,
                                                        "end": 279
                                                    },
                                                    "flags": 256,
                                                    "start": 276,
                                                    "end": 280
                                                },
                                                "flags": 256,
                                                "start": 273,
                                                "end": 280
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 273,
                                        "end": 280
                                    },
                                    "flags": 256,
                                    "start": 271,
                                    "end": 281
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 268,
                                        "end": 269
                                    },
                                    "flags": 256,
                                    "start": 267,
                                    "end": 270
                                },
                                "flags": 256,
                                "start": 267,
                                "end": 281
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 267,
                        "end": 281
                    },
                    "flags": 256,
                    "start": 266,
                    "end": 282
                },
                "flags": 256,
                "start": 264,
                "end": 283
            },
            "flags": 128,
            "start": 264,
            "end": 284
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 256,
                    "start": 284,
                    "end": 287
                },
                "flags": 256,
                "start": 284,
                "end": 287
            },
            "flags": 128,
            "start": 284,
            "end": 287
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 288,
                            "end": 289
                        },
                        "flags": 128,
                        "start": 288,
                        "end": 289
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 288,
                "end": 289
            },
            "flags": 128,
            "start": 287,
            "end": 290
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 291,
                "end": 295
            },
            "flags": 128,
            "start": 291,
            "end": 295
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 297,
            "end": 298
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 305,
                                                    "end": 306
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 308,
                                                    "end": 310
                                                },
                                                "flags": 256,
                                                "start": 305,
                                                "end": 310
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 305,
                                        "end": 310
                                    },
                                    "flags": 256,
                                    "start": 303,
                                    "end": 311
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 301,
                                    "end": 302
                                },
                                "flags": 256,
                                "start": 301,
                                "end": 311
                            },
                            {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 312,
                                "end": 316
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 301,
                        "end": 316
                    },
                    "flags": 256,
                    "start": 300,
                    "end": 317
                },
                "flags": 256,
                "start": 298,
                "end": 318
            },
            "flags": 128,
            "start": 298,
            "end": 319
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 326,
                                                    "end": 327
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 329,
                                                    "end": 331
                                                },
                                                "flags": 256,
                                                "start": 326,
                                                "end": 331
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 326,
                                        "end": 331
                                    },
                                    "flags": 256,
                                    "start": 324,
                                    "end": 332
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 322,
                                    "end": 323
                                },
                                "flags": 256,
                                "start": 322,
                                "end": 332
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 338,
                                    "end": 340
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 333,
                                    "end": 337
                                },
                                "flags": 256,
                                "start": 333,
                                "end": 340
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 322,
                        "end": 340
                    },
                    "flags": 256,
                    "start": 321,
                    "end": 341
                },
                "flags": 256,
                "start": 319,
                "end": 342
            },
            "flags": 128,
            "start": 319,
            "end": 343
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 345,
                            "end": 346
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 347,
                            "end": 347
                        },
                        "flags": 256,
                        "start": 343,
                        "end": 347
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 348,
                        "end": 348
                    },
                    "flags": 256,
                    "start": 343,
                    "end": 349
                },
                "flags": 256,
                "start": 343,
                "end": 350
            },
            "flags": 128,
            "start": 343,
            "end": 351
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 355,
                                    "end": 356
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 357,
                                        "end": 361
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 362,
                                                    "end": 363
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 362,
                                            "end": 363
                                        },
                                        "flags": 256,
                                        "start": 361,
                                        "end": 364
                                    },
                                    "flags": 256,
                                    "start": 357,
                                    "end": 364
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 355,
                            "end": 364
                        },
                        "flags": 256,
                        "start": 353,
                        "end": 365
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 365,
                        "end": 367
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 369,
                            "end": 369
                        },
                        "flags": 256,
                        "start": 367,
                        "end": 377
                    },
                    "flags": 256,
                    "start": 353,
                    "end": 377
                },
                "flags": 256,
                "start": 351,
                "end": 378
            },
            "flags": 128,
            "start": 351,
            "end": 379
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 383,
                                    "end": 384
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 385,
                                        "end": 389
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 390,
                                            "end": 390
                                        },
                                        "flags": 256,
                                        "start": 389,
                                        "end": 391
                                    },
                                    "flags": 256,
                                    "start": 385,
                                    "end": 391
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 383,
                            "end": 391
                        },
                        "flags": 256,
                        "start": 381,
                        "end": 392
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 392,
                        "end": 394
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 396,
                            "end": 396
                        },
                        "flags": 256,
                        "start": 394,
                        "end": 404
                    },
                    "flags": 256,
                    "start": 381,
                    "end": 404
                },
                "flags": 256,
                "start": 379,
                "end": 405
            },
            "flags": 128,
            "start": 379,
            "end": 406
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 410,
                                    "end": 411
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 412,
                                        "end": 416
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 417,
                                                    "end": 418
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 417,
                                            "end": 418
                                        },
                                        "flags": 256,
                                        "start": 416,
                                        "end": 419
                                    },
                                    "flags": 256,
                                    "start": 412,
                                    "end": 419
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 410,
                            "end": 419
                        },
                        "flags": 256,
                        "start": 408,
                        "end": 420
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 420,
                        "end": 422
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 424,
                            "end": 424
                        },
                        "flags": 256,
                        "start": 422,
                        "end": 432
                    },
                    "flags": 256,
                    "start": 408,
                    "end": 432
                },
                "flags": 256,
                "start": 406,
                "end": 433
            },
            "flags": 128,
            "start": 406,
            "end": 434
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 438,
                                    "end": 439
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 440,
                                        "end": 444
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 445,
                                            "end": 445
                                        },
                                        "flags": 256,
                                        "start": 444,
                                        "end": 446
                                    },
                                    "flags": 256,
                                    "start": 440,
                                    "end": 446
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 438,
                            "end": 446
                        },
                        "flags": 256,
                        "start": 436,
                        "end": 447
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 447,
                        "end": 449
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 451,
                            "end": 451
                        },
                        "flags": 256,
                        "start": 449,
                        "end": 459
                    },
                    "flags": 256,
                    "start": 436,
                    "end": 459
                },
                "flags": 256,
                "start": 434,
                "end": 460
            },
            "flags": 128,
            "start": 434,
            "end": 461
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 466,
                                                "end": 467
                                            },
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 768,
                                                    "start": 468,
                                                    "end": 472
                                                },
                                                "argument": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 473,
                                                        "end": 473
                                                    },
                                                    "flags": 256,
                                                    "start": 472,
                                                    "end": 474
                                                },
                                                "flags": 256,
                                                "start": 468,
                                                "end": 474
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 466,
                                        "end": 474
                                    },
                                    "flags": 256,
                                    "start": 465,
                                    "end": 475
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 465,
                            "end": 475
                        },
                        "flags": 256,
                        "start": 463,
                        "end": 476
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 476,
                        "end": 478
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
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 481,
                                        "end": 481
                                    },
                                    "flags": 256,
                                    "start": 480,
                                    "end": 489
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 480,
                            "end": 489
                        },
                        "flags": 256,
                        "start": 478,
                        "end": 490
                    },
                    "flags": 256,
                    "start": 463,
                    "end": 490
                },
                "flags": 256,
                "start": 461,
                "end": 491
            },
            "flags": 128,
            "start": 461,
            "end": 492
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 495,
                                        "end": 498
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 499,
                                            "end": 499
                                        },
                                        "flags": 256,
                                        "start": 498,
                                        "end": 500
                                    },
                                    "flags": 256,
                                    "start": 495,
                                    "end": 500
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 495,
                            "end": 500
                        },
                        "flags": 256,
                        "start": 494,
                        "end": 501
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 501,
                        "end": 503
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 503,
                        "end": 505
                    },
                    "flags": 256,
                    "start": 494,
                    "end": 505
                },
                "flags": 256,
                "start": 492,
                "end": 506
            },
            "flags": 128,
            "start": 492,
            "end": 507
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 507,
            "end": 508
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 510,
                            "end": 511
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 511,
                            "end": 513
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 513,
                            "end": 515
                        },
                        "flags": 256,
                        "start": 508,
                        "end": 515
                    },
                    "flags": 256,
                    "start": 508,
                    "end": 516
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 516,
                    "end": 518
                },
                "right": {
                    "kind": 134299649,
                    "text": "t",
                    "rawText": "t",
                    "flags": 768,
                    "start": 518,
                    "end": 520
                },
                "flags": 256,
                "start": 508,
                "end": 520
            },
            "flags": 128,
            "start": 508,
            "end": 522
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 256,
                    "start": 522,
                    "end": 529
                },
                "flags": 256,
                "start": 522,
                "end": 529
            },
            "flags": 128,
            "start": 522,
            "end": 529
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 531,
            "end": 532
        }
    ],
    "isModule": false,
    "text": "({...a, x } = { x: 1 });\n(q, {...a, x } = { x: 1 });\n({...a, x, ...b } = { x: 1 });\n(q, {...a, x, ...b } = { x: 1 });\n({a, ...rest.b + rest.b} = o);\n({a:(a,y) = 0} = 1);\n({x=y})=z;\n([a]) = 2;\n({a}) = 2;\n({1: [b.c = x]} = 2 / (dd = ((3)) = a));\n({[a]: {...[a[]]}});\n({[a]: {x = [a]}});\n({{x}: \"b\"});\n({a: {x = y}, \"b\"});\n({a: {x = y}, \"b\": a});\n(a.());\n( {a, ...{b}} = {/*...*/});\n( {a, ...{}} = {/*...*/});\n( {a, ...[b]} = {/*...*/});\n( {a, ...[]} = {/*...*/});\n( [{a, ...[]}] = [{/*...*/}]);\n({...[]} = x);;\n(a = 1) = t ;\n({[b]}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 532
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 39, end: 41
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 70, end: 72
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 104, end: 106
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 142, end: 144
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 158, end: 160
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 177, end: 178
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 186, end: 188
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 197, end: 199
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 236, end: 238
✖ An element access expression should take an argument. - start: 258, end: 259
✖ Expression expected - start: 258, end: 259
✖ Statement expected - start: 290, end: 291
✖ Statement expected - start: 295, end: 296
✖ Statement expected - start: 296, end: 297
✖ Invalid optional chain from new expression - start: 316, end: 317
✖ Dot property must be an identifier - start: 347, end: 348
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 365, end: 367
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 392, end: 394
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 420, end: 422
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 447, end: 449
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 476, end: 478
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 501, end: 503
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 516, end: 518
✖ Statement expected - start: 529, end: 530
✖ Statement expected - start: 530, end: 531

```

