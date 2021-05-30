# Kataw parser test case

## Input

`````js
([a]) = {};
(([a])) = {};
({a: {d = 1,c = 1}.c = 2} = {});;
({a: ({d = 1,c = 1}.c) = 2} = {});;
({x}) = foo;
({x: {..}});
({x: [..]});
(([a]) = []);
([{x = y}].z = obj);
(1) = y = x;
(x) = (1) = z;
({a: {x = y}}.z) => obj;
({a: 1 = x });
(y) = (1) = x;
([x] = y,);
({a} = b,);
({a}) = 0;
({a}) = 2;
({a}) = 0;
([a]) = 0;
({a} += 0);
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
                                    "start": 2,
                                    "end": 3
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 48,
                    "start": 7,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
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
                                        "start": 15,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 15,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 48,
                    "start": 21,
                    "end": 24
                },
                "flags": 32,
                "start": 11,
                "end": 24
            },
            "flags": 16,
            "start": 11,
            "end": 25
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
                                        "start": 28,
                                        "end": 29
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 205,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "d",
                                                                "rawText": "d",
                                                                "flags": 96,
                                                                "start": 32,
                                                                "end": 33
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 35,
                                                                "end": 37
                                                            },
                                                            "flags": 32,
                                                            "start": 32,
                                                            "end": 37
                                                        },
                                                        {
                                                            "kind": 205,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 38,
                                                                "end": 39
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "flags": 32,
                                                            "start": 38,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 32,
                                                    "end": 43
                                                },
                                                "flags": 48,
                                                "start": 30,
                                                "end": 44
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 45,
                                                "end": 46
                                            },
                                            "flags": 536870944,
                                            "start": 28,
                                            "end": 46
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 46,
                                            "end": 48
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 28,
                            "end": 50
                        },
                        "flags": 48,
                        "start": 27,
                        "end": 51
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 51,
                        "end": 53
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 55,
                            "end": 55
                        },
                        "flags": 48,
                        "start": 53,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 56
                },
                "flags": 32,
                "start": 25,
                "end": 57
            },
            "flags": 16,
            "start": 25,
            "end": 58
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 58,
            "end": 59
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
                                        "start": 62,
                                        "end": 63
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 205,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "d",
                                                                    "rawText": "d",
                                                                    "flags": 96,
                                                                    "start": 67,
                                                                    "end": 68
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 70,
                                                                    "end": 72
                                                                },
                                                                "flags": 32,
                                                                "start": 67,
                                                                "end": 72
                                                            },
                                                            {
                                                                "kind": 205,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 73,
                                                                    "end": 74
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 76,
                                                                    "end": 78
                                                                },
                                                                "flags": 32,
                                                                "start": 73,
                                                                "end": 78
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 67,
                                                        "end": 78
                                                    },
                                                    "flags": 48,
                                                    "start": 66,
                                                    "end": 79
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 80,
                                                    "end": 81
                                                },
                                                "flags": 536870944,
                                                "start": 64,
                                                "end": 81
                                            },
                                            "flags": 32,
                                            "start": 64,
                                            "end": 82
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 84,
                                            "end": 86
                                        },
                                        "flags": 32,
                                        "start": 62,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "start": 62,
                                    "end": 86
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 62,
                            "end": 86
                        },
                        "flags": 48,
                        "start": 61,
                        "end": 87
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 87,
                        "end": 89
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 91,
                            "end": 91
                        },
                        "flags": 48,
                        "start": 89,
                        "end": 92
                    },
                    "flags": 32,
                    "start": 61,
                    "end": 92
                },
                "flags": 32,
                "start": 59,
                "end": 93
            },
            "flags": 16,
            "start": 59,
            "end": 94
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 94,
            "end": 95
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 98,
                                    "end": 99
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 98,
                            "end": 99
                        },
                        "flags": 48,
                        "start": 97,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 95,
                    "end": 101
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 101,
                    "end": 103
                },
                "right": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 103,
                    "end": 107
                },
                "flags": 32,
                "start": 95,
                "end": 107
            },
            "flags": 16,
            "start": 95,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 108,
                    "end": 118
                },
                "flags": 32,
                "start": 108,
                "end": 118
            },
            "flags": 16,
            "start": 108,
            "end": 118
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 120,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 121,
                    "end": 130
                },
                "flags": 32,
                "start": 121,
                "end": 130
            },
            "flags": 16,
            "start": 121,
            "end": 130
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 133,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                        "start": 138,
                                        "end": 139
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 138,
                                "end": 139
                            },
                            "flags": 32,
                            "start": 137,
                            "end": 140
                        },
                        "flags": 32,
                        "start": 136,
                        "end": 141
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 141,
                        "end": 143
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 145,
                            "end": 145
                        },
                        "flags": 32,
                        "start": 143,
                        "end": 146
                    },
                    "flags": 32,
                    "start": 136,
                    "end": 146
                },
                "flags": 32,
                "start": 134,
                "end": 147
            },
            "flags": 16,
            "start": 134,
            "end": 148
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 129,
                        "member": {
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
                                                    "kind": 205,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 152,
                                                        "end": 153
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 155,
                                                        "end": 157
                                                    },
                                                    "flags": 32,
                                                    "start": 152,
                                                    "end": 157
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 152,
                                            "end": 157
                                        },
                                        "flags": 48,
                                        "start": 151,
                                        "end": 158
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 151,
                                "end": 158
                            },
                            "flags": 32,
                            "start": 150,
                            "end": 159
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 160,
                            "end": 161
                        },
                        "flags": 536870944,
                        "start": 148,
                        "end": 161
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 161,
                        "end": 163
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 163,
                        "end": 167
                    },
                    "flags": 32,
                    "start": 148,
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
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 171,
                        "end": 172
                    },
                    "flags": 32,
                    "start": 169,
                    "end": 173
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 173,
                    "end": 175
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 175,
                        "end": 177
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 177,
                        "end": 179
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 179,
                        "end": 181
                    },
                    "flags": 32,
                    "start": 175,
                    "end": 181
                },
                "flags": 32,
                "start": 169,
                "end": 181
            },
            "flags": 16,
            "start": 169,
            "end": 182
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 184,
                        "end": 185
                    },
                    "flags": 32,
                    "start": 182,
                    "end": 186
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 186,
                    "end": 188
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 190,
                            "end": 191
                        },
                        "flags": 32,
                        "start": 188,
                        "end": 192
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 192,
                        "end": 194
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 194,
                        "end": 196
                    },
                    "flags": 32,
                    "start": 188,
                    "end": 196
                },
                "flags": 32,
                "start": 182,
                "end": 196
            },
            "flags": 16,
            "start": 182,
            "end": 197
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
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
                                        "start": 200,
                                        "end": 201
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
                                                        "start": 204,
                                                        "end": 205
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 207,
                                                        "end": 209
                                                    },
                                                    "flags": 32,
                                                    "start": 204,
                                                    "end": 209
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 204,
                                            "end": 209
                                        },
                                        "flags": 48,
                                        "start": 202,
                                        "end": 210
                                    },
                                    "flags": 32,
                                    "start": 200,
                                    "end": 210
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 200,
                            "end": 210
                        },
                        "flags": 48,
                        "start": 199,
                        "end": 211
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 212,
                        "end": 213
                    },
                    "flags": 536870944,
                    "start": 197,
                    "end": 213
                },
                "flags": 32,
                "start": 197,
                "end": 214
            },
            "flags": 16,
            "start": 197,
            "end": 214
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 217,
                "end": 221
            },
            "flags": 16,
            "start": 217,
            "end": 222
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
                                    "start": 225,
                                    "end": 226
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 227,
                                        "end": 229
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 229,
                                        "end": 231
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 231,
                                        "end": 233
                                    },
                                    "flags": 32,
                                    "start": 225,
                                    "end": 233
                                },
                                "flags": 32,
                                "start": 225,
                                "end": 233
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 225,
                        "end": 233
                    },
                    "flags": 48,
                    "start": 224,
                    "end": 235
                },
                "flags": 32,
                "start": 222,
                "end": 236
            },
            "flags": 16,
            "start": 222,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 239,
                        "end": 240
                    },
                    "flags": 32,
                    "start": 237,
                    "end": 241
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 241,
                    "end": 243
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 245,
                            "end": 246
                        },
                        "flags": 32,
                        "start": 243,
                        "end": 247
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 247,
                        "end": 249
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 249,
                        "end": 251
                    },
                    "flags": 32,
                    "start": 243,
                    "end": 251
                },
                "flags": 32,
                "start": 237,
                "end": 251
            },
            "flags": 16,
            "start": 237,
            "end": 252
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
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
                                            "flags": 96,
                                            "start": 255,
                                            "end": 256
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 255,
                                    "end": 256
                                },
                                "flags": 32,
                                "start": 254,
                                "end": 257
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 257,
                                "end": 259
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 259,
                                "end": 261
                            },
                            "flags": 32,
                            "start": 254,
                            "end": 261
                        }
                    ],
                    "flags": 32,
                    "start": 252,
                    "end": 263
                },
                "flags": 32,
                "start": 252,
                "end": 263
            },
            "flags": 16,
            "start": 252,
            "end": 264
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
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
                                            "start": 267,
                                            "end": 268
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 267,
                                    "end": 268
                                },
                                "flags": 48,
                                "start": 266,
                                "end": 269
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 269,
                                "end": 271
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 271,
                                "end": 273
                            },
                            "flags": 32,
                            "start": 266,
                            "end": 273
                        }
                    ],
                    "flags": 32,
                    "start": 264,
                    "end": 275
                },
                "flags": 32,
                "start": 264,
                "end": 275
            },
            "flags": 16,
            "start": 264,
            "end": 276
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
                                    "start": 279,
                                    "end": 280
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 279,
                            "end": 280
                        },
                        "flags": 48,
                        "start": 278,
                        "end": 281
                    },
                    "flags": 32,
                    "start": 276,
                    "end": 282
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 282,
                    "end": 284
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 284,
                    "end": 286
                },
                "flags": 32,
                "start": 276,
                "end": 286
            },
            "flags": 16,
            "start": 276,
            "end": 287
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
                                    "start": 290,
                                    "end": 291
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 290,
                            "end": 291
                        },
                        "flags": 48,
                        "start": 289,
                        "end": 292
                    },
                    "flags": 32,
                    "start": 287,
                    "end": 293
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 293,
                    "end": 295
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 295,
                    "end": 297
                },
                "flags": 32,
                "start": 287,
                "end": 297
            },
            "flags": 16,
            "start": 287,
            "end": 298
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
                                    "start": 301,
                                    "end": 302
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 301,
                            "end": 302
                        },
                        "flags": 48,
                        "start": 300,
                        "end": 303
                    },
                    "flags": 32,
                    "start": 298,
                    "end": 304
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 304,
                    "end": 306
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 306,
                    "end": 308
                },
                "flags": 32,
                "start": 298,
                "end": 308
            },
            "flags": 16,
            "start": 298,
            "end": 309
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
                                    "start": 312,
                                    "end": 313
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 312,
                            "end": 313
                        },
                        "flags": 32,
                        "start": 311,
                        "end": 314
                    },
                    "flags": 32,
                    "start": 309,
                    "end": 315
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 315,
                    "end": 317
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 317,
                    "end": 319
                },
                "flags": 32,
                "start": 309,
                "end": 319
            },
            "flags": 16,
            "start": 309,
            "end": 320
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
                                    "start": 323,
                                    "end": 324
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 323,
                            "end": 324
                        },
                        "flags": 48,
                        "start": 322,
                        "end": 325
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 64,
                        "start": 325,
                        "end": 328
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 328,
                        "end": 330
                    },
                    "flags": 32,
                    "start": 322,
                    "end": 330
                },
                "flags": 32,
                "start": 320,
                "end": 331
            },
            "flags": 16,
            "start": 320,
            "end": 332
        }
    ],
    "isModule": false,
    "source": "([a]) = {};\n(([a])) = {};\n({a: {d = 1,c = 1}.c = 2} = {});;\n({a: ({d = 1,c = 1}.c) = 2} = {});;\n({x}) = foo;\n({x: {..}});\n({x: [..]});\n(([a]) = []);\n([{x = y}].z = obj);\n(1) = y = x;\n(x) = (1) = z;\n({a: {x = y}}.z) => obj;\n({a: 1 = x });\n(y) = (1) = x;\n([x] = y,);\n({a} = b,);\n({a}) = 0;\n({a}) = 2;\n({a}) = 0;\n([a]) = 0;\n({a} += 0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 332
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7
✖ Invalid optional chain from new expression - start: 44, end: 45
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 79, end: 80
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 82, end: 84
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 82, end: 84
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 101, end: 103
✖ The parser expected to find a '}' to match the '{' token here - start: 115, end: 116
✖ Dot property must be an identifier - start: 116, end: 117
✖ Dot property must be an identifier - start: 117, end: 118
✖ Expected a ')' to match the '(' token here - start: 118, end: 119
✖ Declaration or statement expected - start: 119, end: 120
✖ Did you forgot a ']' to match the `[` token? - start: 128, end: 129
✖ Dot property must be an identifier - start: 129, end: 130
✖ Dot property must be an identifier - start: 130, end: 131
✖ ',' expected - start: 130, end: 131
✖ Declaration or statement expected - start: 131, end: 132
✖ Declaration or statement expected - start: 132, end: 133
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 141, end: 143
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 159, end: 160
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 168, end: 169
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 168, end: 169
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 211, end: 212
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 214, end: 217
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 214, end: 217
✖ Expected a `;` - start: 214, end: 217
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 229, end: 231
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 282, end: 284
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 293, end: 295
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 304, end: 306
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 315, end: 317
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 325, end: 328

```

