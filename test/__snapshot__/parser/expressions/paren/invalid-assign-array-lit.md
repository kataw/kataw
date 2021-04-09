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
                    "kind": 121,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 4
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 7
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
                        "start": 9,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
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
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 16
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 14,
                            "end": 17
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 11,
                    "end": 21
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
                        "start": 23,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 21,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
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
                                                                "kind": 81921,
                                                                "value": "d",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 32,
                                                                "end": 33
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": 1,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 35,
                                                                "end": 37
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 32,
                                                            "end": 37
                                                        },
                                                        {
                                                            "kind": 205,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "c",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 38,
                                                                "end": 39
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": 1,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 38,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 32,
                                                    "end": 43
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 30,
                                                "end": 44
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 45,
                                                "end": 46
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 46
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 28,
                                            "end": 48
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 2,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 28,
                                        "end": 50
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 28,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 28,
                            "end": 50
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 27,
                        "end": 51
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 51,
                        "end": 53
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
                            "start": 55,
                            "end": 55
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 53,
                        "end": 56
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 27,
                    "end": 56
                },
                "autofix": 0,
                "flags": 256,
                "start": 25,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 25,
            "end": 58
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
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
                                                                    "kind": 81921,
                                                                    "value": "d",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 67,
                                                                    "end": 68
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "value": 1,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 70,
                                                                    "end": 72
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 67,
                                                                "end": 72
                                                            },
                                                            {
                                                                "kind": 205,
                                                                "left": {
                                                                    "kind": 81921,
                                                                    "value": "c",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 73,
                                                                    "end": 74
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "value": 1,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 76,
                                                                    "end": 78
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 73,
                                                                "end": 78
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 67,
                                                        "end": 78
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 66,
                                                    "end": 79
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "c",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 80,
                                                    "end": 81
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 64,
                                                "end": 81
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 64,
                                            "end": 82
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 62,
                                            "end": 84
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 2,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 84,
                                            "end": 86
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 62,
                                        "end": 86
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 62,
                                        "end": 63
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 62,
                                    "end": 86
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 62,
                            "end": 86
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 61,
                        "end": 87
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 87,
                        "end": 89
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
                            "start": 91,
                            "end": 91
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 89,
                        "end": 92
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 61,
                    "end": 92
                },
                "autofix": 0,
                "flags": 256,
                "start": 59,
                "end": 93
            },
            "autofix": 0,
            "flags": 128,
            "start": 59,
            "end": 94
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 98,
                                    "end": 99
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 98,
                            "end": 99
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 97,
                        "end": 100
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 95,
                    "end": 101
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 95,
                    "end": 103
                },
                "right": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 103,
                    "end": 107
                },
                "autofix": 0,
                "flags": 256,
                "start": 95,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 95,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "autofix": 0,
                    "flags": 256,
                    "start": 108,
                    "end": 118
                },
                "autofix": 0,
                "flags": 256,
                "start": 108,
                "end": 118
            },
            "autofix": 0,
            "flags": 128,
            "start": 108,
            "end": 118
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 120,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "autofix": 0,
                    "flags": 256,
                    "start": 121,
                    "end": 130
                },
                "autofix": 0,
                "flags": 256,
                "start": 121,
                "end": 130
            },
            "autofix": 0,
            "flags": 128,
            "start": 121,
            "end": 130
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
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
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 138,
                                        "end": 139
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 138,
                                "end": 139
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 137,
                            "end": 140
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 136,
                        "end": 141
                    },
                    "operatorToken": {
                        "kind": 336003091,
                        "autofix": 0,
                        "flags": 0,
                        "start": 136,
                        "end": 143
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 145,
                            "end": 145
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 143,
                        "end": 146
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 136,
                    "end": 146
                },
                "autofix": 0,
                "flags": 256,
                "start": 134,
                "end": 147
            },
            "autofix": 0,
            "flags": 128,
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
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 152,
                                                        "end": 153
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 155,
                                                        "end": 157
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 152,
                                                    "end": 157
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 152,
                                            "end": 157
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 151,
                                        "end": 158
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 151,
                                "end": 158
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 150,
                            "end": 159
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 160,
                            "end": 161
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 148,
                        "end": 161
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 148,
                        "end": 163
                    },
                    "right": {
                        "kind": 81921,
                        "value": "obj",
                        "autofix": 0,
                        "flags": 768,
                        "start": 163,
                        "end": 167
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 148,
                    "end": 167
                },
                "autofix": 0,
                "flags": 256,
                "start": 148,
                "end": 168
            },
            "autofix": 0,
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
                        "kind": 81921,
                        "value": 1,
                        "autofix": 0,
                        "flags": 768,
                        "start": 171,
                        "end": 172
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 169,
                    "end": 173
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 169,
                    "end": 175
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 175,
                        "end": 177
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 175,
                        "end": 179
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 179,
                        "end": 181
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 175,
                    "end": 181
                },
                "autofix": 0,
                "flags": 256,
                "start": 169,
                "end": 181
            },
            "autofix": 0,
            "flags": 128,
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
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 184,
                        "end": 185
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 182,
                    "end": 186
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 182,
                    "end": 188
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 190,
                            "end": 191
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 188,
                        "end": 192
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 188,
                        "end": 194
                    },
                    "right": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 194,
                        "end": 196
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 188,
                    "end": 196
                },
                "autofix": 0,
                "flags": 256,
                "start": 182,
                "end": 196
            },
            "autofix": 0,
            "flags": 128,
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
                                                        "start": 204,
                                                        "end": 205
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 207,
                                                        "end": 209
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 204,
                                                    "end": 209
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 204,
                                            "end": 209
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 202,
                                        "end": 210
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 200,
                                        "end": 201
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 200,
                                    "end": 210
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 200,
                            "end": 210
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 199,
                        "end": 211
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 212,
                        "end": 213
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 197,
                    "end": 213
                },
                "autofix": 0,
                "flags": 256,
                "start": 197,
                "end": 214
            },
            "autofix": 0,
            "flags": 128,
            "start": 197,
            "end": 214
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "obj",
                "autofix": 0,
                "flags": 768,
                "start": 217,
                "end": 221
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 227,
                                        "end": 229
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 225,
                                        "end": 231
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 231,
                                        "end": 233
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 225,
                                    "end": 233
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 225,
                                    "end": 226
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 225,
                                "end": 233
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 225,
                        "end": 233
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 224,
                    "end": 235
                },
                "autofix": 0,
                "flags": 256,
                "start": 222,
                "end": 236
            },
            "autofix": 0,
            "flags": 128,
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
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 239,
                        "end": 240
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 237,
                    "end": 241
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 237,
                    "end": 243
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 245,
                            "end": 246
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 243,
                        "end": 247
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 243,
                        "end": 249
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
                    "start": 243,
                    "end": 251
                },
                "autofix": 0,
                "flags": 256,
                "start": 237,
                "end": 251
            },
            "autofix": 0,
            "flags": 128,
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
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 255,
                                            "end": 256
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 255,
                                    "end": 256
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 254,
                                "end": 257
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 257,
                                "end": 259
                            },
                            "right": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 259,
                                "end": 261
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 254,
                            "end": 261
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 252,
                    "end": 263
                },
                "autofix": 0,
                "flags": 256,
                "start": 252,
                "end": 263
            },
            "autofix": 0,
            "flags": 128,
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
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 267,
                                            "end": 268
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 267,
                                    "end": 268
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 266,
                                "end": 269
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 269,
                                "end": 271
                            },
                            "right": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 271,
                                "end": 273
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 266,
                            "end": 273
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 264,
                    "end": 275
                },
                "autofix": 0,
                "flags": 256,
                "start": 264,
                "end": 275
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 279,
                                    "end": 280
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 279,
                            "end": 280
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 278,
                        "end": 281
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 276,
                    "end": 282
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 276,
                    "end": 284
                },
                "right": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 284,
                    "end": 286
                },
                "autofix": 0,
                "flags": 256,
                "start": 276,
                "end": 286
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 290,
                                    "end": 291
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 290,
                            "end": 291
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 289,
                        "end": 292
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 287,
                    "end": 293
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 287,
                    "end": 295
                },
                "right": {
                    "kind": 81921,
                    "value": 2,
                    "autofix": 0,
                    "flags": 768,
                    "start": 295,
                    "end": 297
                },
                "autofix": 0,
                "flags": 256,
                "start": 287,
                "end": 297
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 301,
                                    "end": 302
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 301,
                            "end": 302
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 300,
                        "end": 303
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 298,
                    "end": 304
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 298,
                    "end": 306
                },
                "right": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 306,
                    "end": 308
                },
                "autofix": 0,
                "flags": 256,
                "start": 298,
                "end": 308
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 312,
                                    "end": 313
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 312,
                            "end": 313
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 311,
                        "end": 314
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 309,
                    "end": 315
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 309,
                    "end": 317
                },
                "right": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 317,
                    "end": 319
                },
                "autofix": 0,
                "flags": 256,
                "start": 309,
                "end": 319
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 323,
                                    "end": 324
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 323,
                            "end": 324
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 322,
                        "end": 325
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "autofix": 0,
                        "flags": 0,
                        "start": 325,
                        "end": 328
                    },
                    "right": {
                        "kind": 81921,
                        "value": 0,
                        "autofix": 0,
                        "flags": 768,
                        "start": 328,
                        "end": 330
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 322,
                    "end": 330
                },
                "autofix": 0,
                "flags": 256,
                "start": 320,
                "end": 331
            },
            "autofix": 0,
            "flags": 128,
            "start": 320,
            "end": 332
        }
    ],
    "isModule": false,
    "text": "([a]) = {};\n(([a])) = {};\n({a: {d = 1,c = 1}.c = 2} = {});;\n({a: ({d = 1,c = 1}.c) = 2} = {});;\n({x}) = foo;\n({x: {..}});\n({x: [..]});\n(([a]) = []);\n([{x = y}].z = obj);\n(1) = y = x;\n(x) = (1) = z;\n({a: {x = y}}.z) => obj;\n({a: 1 = x });\n(y) = (1) = x;\n([x] = y,);\n({a} = b,);\n({a}) = 0;\n({a}) = 2;\n({a}) = 0;\n([a]) = 0;\n({a} += 0);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 5,
            "end": 7
        },
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
            "code": 16,
            "error": "Invalid optional chain from new expression",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 79,
            "end": 80
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 101,
            "end": 103
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 115,
            "end": 116
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 116,
            "end": 117
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 117,
            "end": 118
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 118,
            "end": 119
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 118,
            "end": 119
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 119,
            "end": 120
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 128,
            "end": 129
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 129,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 130,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 130,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 130,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 130,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 130,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 130,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 131,
            "end": 132
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 132,
            "end": 133
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 141,
            "end": 143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 159,
            "end": 160
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 173,
            "end": 175
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 192,
            "end": 194
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 211,
            "end": 212
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 214,
            "end": 217
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 214,
            "end": 217
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 229,
            "end": 231
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 247,
            "end": 249
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 282,
            "end": 284
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 293,
            "end": 295
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 304,
            "end": 306
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 315,
            "end": 317
        },
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 325,
            "end": 328
        }
    ],
    "start": 0,
    "end": 332
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

