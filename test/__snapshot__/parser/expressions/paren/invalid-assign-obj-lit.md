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
                                        "flags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 6
                                },
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
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
                            "flags": 96,
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
                                                "flags": 0,
                                                "start": 30,
                                                "end": 33
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 34
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 34
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 37
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 30,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 39
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
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
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 46,
                                                "end": 48
                                            },
                                            "flags": 32,
                                            "start": 43,
                                            "end": 48
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 43,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 28,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 51
                },
                "flags": 32,
                "start": 24,
                "end": 51
            },
            "flags": 16,
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
                                        "flags": 0,
                                        "start": 55,
                                        "end": 58
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 58,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 55,
                                    "end": 59
                                },
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 62
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 63,
                                        "end": 67
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 67,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "start": 63,
                                    "end": 68
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 55,
                            "end": 68
                        },
                        "flags": 32,
                        "start": 54,
                        "end": 70
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 74,
                                        "end": 76
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 77,
                                        "end": 79
                                    },
                                    "flags": 32,
                                    "start": 74,
                                    "end": 79
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 74,
                            "end": 79
                        },
                        "flags": 32,
                        "start": 72,
                        "end": 81
                    },
                    "flags": 32,
                    "start": 54,
                    "end": 81
                },
                "flags": 32,
                "start": 52,
                "end": 82
            },
            "flags": 16,
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
                            "flags": 96,
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
                                                "flags": 0,
                                                "start": 89,
                                                "end": 92
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 92,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "start": 89,
                                            "end": 93
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 94,
                                            "end": 96
                                        },
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 0,
                                                "start": 97,
                                                "end": 101
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 101,
                                                "end": 102
                                            },
                                            "flags": 32,
                                            "start": 97,
                                            "end": 102
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 89,
                                    "end": 102
                                },
                                "flags": 32,
                                "start": 87,
                                "end": 104
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
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
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 108,
                                                "end": 110
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 111,
                                                "end": 113
                                            },
                                            "flags": 32,
                                            "start": 108,
                                            "end": 113
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 108,
                                    "end": 113
                                },
                                "flags": 32,
                                "start": 106,
                                "end": 115
                            },
                            "flags": 32,
                            "start": 87,
                            "end": 115
                        }
                    ],
                    "flags": 32,
                    "start": 83,
                    "end": 116
                },
                "flags": 32,
                "start": 83,
                "end": 116
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 120,
                                    "end": 121
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
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
                                                "flags": 96,
                                                "start": 126,
                                                "end": 130
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 131,
                                                "end": 132
                                            },
                                            "flags": 32,
                                            "start": 126,
                                            "end": 132
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 132,
                                            "end": 134
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 96,
                                                "start": 134,
                                                "end": 139
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 140,
                                                "end": 141
                                            },
                                            "flags": 32,
                                            "start": 134,
                                            "end": 141
                                        },
                                        "flags": 32,
                                        "start": 126,
                                        "end": 141
                                    },
                                    "flags": 32,
                                    "start": 122,
                                    "end": 141
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 120,
                            "end": 141
                        },
                        "flags": 32,
                        "start": 119,
                        "end": 142
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 142,
                        "end": 144
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "o",
                        "rawText": "o",
                        "flags": 96,
                        "start": 144,
                        "end": 146
                    },
                    "flags": 32,
                    "start": 119,
                    "end": 146
                },
                "flags": 32,
                "start": 117,
                "end": 147
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 151,
                                        "end": 152
                                    },
                                    "right": {
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
                                                        "flags": 96,
                                                        "start": 154,
                                                        "end": 155
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 156,
                                                        "end": 157
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 153,
                                                "end": 158
                                            },
                                            "flags": 32,
                                            "start": 153,
                                            "end": 158
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 158,
                                            "end": 160
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 160,
                                            "end": 162
                                        },
                                        "flags": 32,
                                        "start": 151,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "start": 151,
                                    "end": 162
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 151,
                            "end": 162
                        },
                        "flags": 32,
                        "start": 150,
                        "end": 163
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 163,
                        "end": 165
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 165,
                        "end": 167
                    },
                    "flags": 32,
                    "start": 150,
                    "end": 167
                },
                "flags": 32,
                "start": 148,
                "end": 168
            },
            "flags": 16,
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
                                        "flags": 96,
                                        "start": 172,
                                        "end": 173
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 174,
                                        "end": 175
                                    },
                                    "flags": 32,
                                    "start": 172,
                                    "end": 175
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 172,
                            "end": 175
                        },
                        "flags": 32,
                        "start": 171,
                        "end": 176
                    },
                    "flags": 32,
                    "start": 169,
                    "end": 177
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 177,
                    "end": 178
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 178,
                    "end": 179
                },
                "flags": 32,
                "start": 169,
                "end": 179
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 183,
                                    "end": 184
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 183,
                            "end": 184
                        },
                        "flags": 32,
                        "start": 182,
                        "end": 185
                    },
                    "flags": 32,
                    "start": 180,
                    "end": 186
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 186,
                    "end": 188
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 188,
                    "end": 190
                },
                "flags": 32,
                "start": 180,
                "end": 190
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 194,
                                    "end": 195
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 194,
                            "end": 195
                        },
                        "flags": 32,
                        "start": 193,
                        "end": 196
                    },
                    "flags": 32,
                    "start": 191,
                    "end": 197
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 197,
                    "end": 199
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 199,
                    "end": 201
                },
                "flags": 32,
                "start": 191,
                "end": 201
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 205,
                                        "end": 206
                                    },
                                    "right": {
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
                                                            "flags": 96,
                                                            "start": 209,
                                                            "end": 210
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 211,
                                                            "end": 212
                                                        },
                                                        "flags": 32,
                                                        "start": 209,
                                                        "end": 212
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 212,
                                                        "end": 214
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 214,
                                                        "end": 216
                                                    },
                                                    "flags": 32,
                                                    "start": 209,
                                                    "end": 216
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 209,
                                            "end": 216
                                        },
                                        "flags": 32,
                                        "start": 207,
                                        "end": 217
                                    },
                                    "flags": 32,
                                    "start": 205,
                                    "end": 217
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 205,
                            "end": 217
                        },
                        "flags": 32,
                        "start": 204,
                        "end": 218
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 218,
                        "end": 220
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 220,
                            "end": 222
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 64,
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
                                    "flags": 96,
                                    "start": 226,
                                    "end": 228
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
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
                                                "flags": 96,
                                                "start": 233,
                                                "end": 234
                                            },
                                            "flags": 32,
                                            "start": 232,
                                            "end": 235
                                        },
                                        "flags": 32,
                                        "start": 230,
                                        "end": 236
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 236,
                                        "end": 238
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 238,
                                        "end": 240
                                    },
                                    "flags": 32,
                                    "start": 230,
                                    "end": 240
                                },
                                "flags": 32,
                                "start": 224,
                                "end": 240
                            },
                            "flags": 32,
                            "start": 224,
                            "end": 241
                        },
                        "flags": 32,
                        "start": 220,
                        "end": 241
                    },
                    "flags": 32,
                    "start": 204,
                    "end": 241
                },
                "flags": 32,
                "start": 202,
                "end": 242
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 247,
                                        "end": 248
                                    },
                                    "flags": 32,
                                    "start": 246,
                                    "end": 249
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
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
                                                                    "flags": 96,
                                                                    "start": 256,
                                                                    "end": 257
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 68,
                                                                    "start": 258,
                                                                    "end": 258
                                                                },
                                                                "flags": 32,
                                                                "start": 256,
                                                                "end": 259
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 256,
                                                        "end": 259
                                                    },
                                                    "flags": 32,
                                                    "start": 255,
                                                    "end": 260
                                                },
                                                "flags": 32,
                                                "start": 252,
                                                "end": 260
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 252,
                                        "end": 260
                                    },
                                    "flags": 32,
                                    "start": 250,
                                    "end": 261
                                },
                                "flags": 32,
                                "start": 246,
                                "end": 261
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 246,
                        "end": 261
                    },
                    "flags": 32,
                    "start": 245,
                    "end": 262
                },
                "flags": 32,
                "start": 243,
                "end": 263
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 268,
                                        "end": 269
                                    },
                                    "flags": 32,
                                    "start": 267,
                                    "end": 270
                                },
                                "right": {
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
                                                    "flags": 96,
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
                                                                "flags": 96,
                                                                "start": 278,
                                                                "end": 279
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 278,
                                                        "end": 279
                                                    },
                                                    "flags": 32,
                                                    "start": 276,
                                                    "end": 280
                                                },
                                                "flags": 32,
                                                "start": 273,
                                                "end": 280
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 273,
                                        "end": 280
                                    },
                                    "flags": 32,
                                    "start": 271,
                                    "end": 281
                                },
                                "flags": 32,
                                "start": 267,
                                "end": 281
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 267,
                        "end": 281
                    },
                    "flags": 32,
                    "start": 266,
                    "end": 282
                },
                "flags": 32,
                "start": 264,
                "end": 283
            },
            "flags": 16,
            "start": 264,
            "end": 284
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 284,
                    "end": 287
                },
                "flags": 32,
                "start": 284,
                "end": 287
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 288,
                            "end": 289
                        },
                        "flags": 16,
                        "start": 288,
                        "end": 289
                    }
                ],
                "flags": 16,
                "start": 288,
                "end": 289
            },
            "flags": 16,
            "start": 287,
            "end": 290
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "b",
                "rawText": "\"b\"",
                "flags": 96,
                "start": 291,
                "end": 295
            },
            "flags": 16,
            "start": 291,
            "end": 295
        },
        {
            "kind": 168,
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 301,
                                    "end": 302
                                },
                                "right": {
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
                                                    "flags": 96,
                                                    "start": 305,
                                                    "end": 306
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 308,
                                                    "end": 310
                                                },
                                                "flags": 32,
                                                "start": 305,
                                                "end": 310
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 305,
                                        "end": 310
                                    },
                                    "flags": 32,
                                    "start": 303,
                                    "end": 311
                                },
                                "flags": 32,
                                "start": 301,
                                "end": 311
                            },
                            {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "\"b\"",
                                "flags": 96,
                                "start": 312,
                                "end": 316
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 301,
                        "end": 316
                    },
                    "flags": 32,
                    "start": 300,
                    "end": 317
                },
                "flags": 32,
                "start": 298,
                "end": 318
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 322,
                                    "end": 323
                                },
                                "right": {
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
                                                    "flags": 96,
                                                    "start": 326,
                                                    "end": 327
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 329,
                                                    "end": 331
                                                },
                                                "flags": 32,
                                                "start": 326,
                                                "end": 331
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 326,
                                        "end": 331
                                    },
                                    "flags": 32,
                                    "start": 324,
                                    "end": 332
                                },
                                "flags": 32,
                                "start": 322,
                                "end": 332
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "\"b\"",
                                    "flags": 96,
                                    "start": 333,
                                    "end": 337
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 338,
                                    "end": 340
                                },
                                "flags": 32,
                                "start": 333,
                                "end": 340
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 322,
                        "end": 340
                    },
                    "flags": 32,
                    "start": 321,
                    "end": 341
                },
                "flags": 32,
                "start": 319,
                "end": 342
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 345,
                            "end": 346
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 347,
                            "end": 347
                        },
                        "flags": 32,
                        "start": 343,
                        "end": 347
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 348,
                        "end": 348
                    },
                    "flags": 32,
                    "start": 343,
                    "end": 349
                },
                "flags": 32,
                "start": 343,
                "end": 350
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 355,
                                    "end": 356
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
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
                                                    "flags": 96,
                                                    "start": 362,
                                                    "end": 363
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 362,
                                            "end": 363
                                        },
                                        "flags": 32,
                                        "start": 361,
                                        "end": 364
                                    },
                                    "flags": 32,
                                    "start": 357,
                                    "end": 364
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 355,
                            "end": 364
                        },
                        "flags": 32,
                        "start": 353,
                        "end": 365
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 365,
                        "end": 367
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 369,
                            "end": 369
                        },
                        "flags": 32,
                        "start": 367,
                        "end": 377
                    },
                    "flags": 32,
                    "start": 353,
                    "end": 377
                },
                "flags": 32,
                "start": 351,
                "end": 378
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 383,
                                    "end": 384
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 385,
                                        "end": 389
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 390,
                                            "end": 390
                                        },
                                        "flags": 32,
                                        "start": 389,
                                        "end": 391
                                    },
                                    "flags": 32,
                                    "start": 385,
                                    "end": 391
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 383,
                            "end": 391
                        },
                        "flags": 32,
                        "start": 381,
                        "end": 392
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 392,
                        "end": 394
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 396,
                            "end": 396
                        },
                        "flags": 32,
                        "start": 394,
                        "end": 404
                    },
                    "flags": 32,
                    "start": 381,
                    "end": 404
                },
                "flags": 32,
                "start": 379,
                "end": 405
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 410,
                                    "end": 411
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
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
                                                    "flags": 96,
                                                    "start": 417,
                                                    "end": 418
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 417,
                                            "end": 418
                                        },
                                        "flags": 32,
                                        "start": 416,
                                        "end": 419
                                    },
                                    "flags": 32,
                                    "start": 412,
                                    "end": 419
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 410,
                            "end": 419
                        },
                        "flags": 32,
                        "start": 408,
                        "end": 420
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 420,
                        "end": 422
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 424,
                            "end": 424
                        },
                        "flags": 32,
                        "start": 422,
                        "end": 432
                    },
                    "flags": 32,
                    "start": 408,
                    "end": 432
                },
                "flags": 32,
                "start": 406,
                "end": 433
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 438,
                                    "end": 439
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 440,
                                        "end": 444
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 445,
                                            "end": 445
                                        },
                                        "flags": 32,
                                        "start": 444,
                                        "end": 446
                                    },
                                    "flags": 32,
                                    "start": 440,
                                    "end": 446
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 438,
                            "end": 446
                        },
                        "flags": 32,
                        "start": 436,
                        "end": 447
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 447,
                        "end": 449
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 451,
                            "end": 451
                        },
                        "flags": 32,
                        "start": 449,
                        "end": 459
                    },
                    "flags": 32,
                    "start": 436,
                    "end": 459
                },
                "flags": 32,
                "start": 434,
                "end": 460
            },
            "flags": 16,
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
                                                "flags": 96,
                                                "start": 466,
                                                "end": 467
                                            },
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
                                                    "start": 468,
                                                    "end": 472
                                                },
                                                "argument": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 473,
                                                        "end": 473
                                                    },
                                                    "flags": 32,
                                                    "start": 472,
                                                    "end": 474
                                                },
                                                "flags": 32,
                                                "start": 468,
                                                "end": 474
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 466,
                                        "end": 474
                                    },
                                    "flags": 32,
                                    "start": 465,
                                    "end": 475
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 465,
                            "end": 475
                        },
                        "flags": 32,
                        "start": 463,
                        "end": 476
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
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
                                        "flags": 16,
                                        "start": 481,
                                        "end": 481
                                    },
                                    "flags": 32,
                                    "start": 480,
                                    "end": 489
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 480,
                            "end": 489
                        },
                        "flags": 32,
                        "start": 478,
                        "end": 490
                    },
                    "flags": 32,
                    "start": 463,
                    "end": 490
                },
                "flags": 32,
                "start": 461,
                "end": 491
            },
            "flags": 16,
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
                                        "flags": 0,
                                        "start": 495,
                                        "end": 498
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 499,
                                            "end": 499
                                        },
                                        "flags": 32,
                                        "start": 498,
                                        "end": 500
                                    },
                                    "flags": 32,
                                    "start": 495,
                                    "end": 500
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 495,
                            "end": 500
                        },
                        "flags": 32,
                        "start": 494,
                        "end": 501
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 501,
                        "end": 503
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 503,
                        "end": 505
                    },
                    "flags": 32,
                    "start": 494,
                    "end": 505
                },
                "flags": 32,
                "start": 492,
                "end": 506
            },
            "flags": 16,
            "start": 492,
            "end": 507
        },
        {
            "kind": 168,
            "flags": 16,
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
                            "flags": 96,
                            "start": 510,
                            "end": 511
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 511,
                            "end": 513
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 513,
                            "end": 515
                        },
                        "flags": 32,
                        "start": 508,
                        "end": 515
                    },
                    "flags": 32,
                    "start": 508,
                    "end": 516
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 516,
                    "end": 518
                },
                "right": {
                    "kind": 134299649,
                    "text": "t",
                    "rawText": "t",
                    "flags": 96,
                    "start": 518,
                    "end": 520
                },
                "flags": 32,
                "start": 508,
                "end": 520
            },
            "flags": 16,
            "start": 508,
            "end": 522
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 522,
                    "end": 529
                },
                "flags": 32,
                "start": 522,
                "end": 529
            },
            "flags": 16,
            "start": 522,
            "end": 529
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 531,
            "end": 532
        }
    ],
    "isModule": false,
    "source": "({...a, x } = { x: 1 });\n(q, {...a, x } = { x: 1 });\n({...a, x, ...b } = { x: 1 });\n(q, {...a, x, ...b } = { x: 1 });\n({a, ...rest.b + rest.b} = o);\n({a:(a,y) = 0} = 1);\n({x=y})=z;\n([a]) = 2;\n({a}) = 2;\n({1: [b.c = x]} = 2 / (dd = ((3)) = a));\n({[a]: {...[a[]]}});\n({[a]: {x = [a]}});\n({{x}: \"b\"});\n({a: {x = y}, \"b\"});\n({a: {x = y}, \"b\": a});\n(a.());\n( {a, ...{b}} = {/*...*/});\n( {a, ...{}} = {/*...*/});\n( {a, ...[b]} = {/*...*/});\n( {a, ...[]} = {/*...*/});\n( [{a, ...[]}] = [{/*...*/}]);\n({...[]} = x);;\n(a = 1) = t ;\n({[b]}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 532
}
```

### Printed

```javascript

({ ...a, x } = { x: 1 });
(q, { ...a, x } = { x: 1 });
({ ...a, x, ...b } = { x: 1 });
(q, { ...a, x, ...b } = { x: 1 });
({ a, ...rest.b + rest.b } = o);
({ a: (a, y) = 0 } = 1);
({ x = y }) = z;
([a]) = 2;
({ a }) = 2;
({ 1: [b.c = x] } = 2 / (dd = (3) = a));
({ : { ...[a] } });
({ : { x = [a] } });
();
{
  x;
}
"\"b\"";
({ a: { x = y }, "\"b\"" });
({ a: { x = y }, "\"b\"": a });
(a.());
({ a, ...{ b } } = {});
({ a, ...{} } = {});
({ a, ...[b] } = {});
({ a, ...[] } = {});
([{ a, ...[] }] = [{}]);
({ ...[] } = x);
(a = 1) = t;
();

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 11, end: 13
✖ The left-hand side must be a variable or a property access. - start: 39, end: 41
✖ The left-hand side must be a variable or a property access. - start: 70, end: 72
✖ The left-hand side must be a variable or a property access. - start: 104, end: 106
✖ The left-hand side must be a variable or a property access. - start: 142, end: 144
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 158, end: 160
✖ The left-hand side must be a variable or a property access. - start: 163, end: 165
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 177, end: 178
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 177, end: 178
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 186, end: 188
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 197, end: 199
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 236, end: 238
✖ An element access expression should take an argument. - start: 258, end: 259
✖ Expression expected - start: 258, end: 259
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 283, end: 284
✖ The parser expected to find a '}' to match the '{' token here - start: 287, end: 288
✖ Declaration or statement expected - start: 290, end: 291
✖ Declaration or statement expected - start: 295, end: 296
✖ Declaration or statement expected - start: 296, end: 297
✖ Property definition expected. Did you mean to use a ':'? - start: 316, end: 317
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 318, end: 319
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 342, end: 343
✖ Dot property must be an identifier - start: 347, end: 348
✖ The left-hand side must be a variable or a property access. - start: 365, end: 367
✖ The left-hand side must be a variable or a property access. - start: 392, end: 394
✖ The left-hand side must be a variable or a property access. - start: 420, end: 422
✖ The left-hand side must be a variable or a property access. - start: 447, end: 449
✖ The left-hand side must be a variable or a property access. - start: 476, end: 478
✖ The left-hand side must be a variable or a property access. - start: 501, end: 503
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 516, end: 518
✖ Property definition expected. Did you mean to use a ':'? - start: 528, end: 529
✖ Expected a ')' to match the '(' token here - start: 529, end: 530
✖ Declaration or statement expected - start: 530, end: 531

```

