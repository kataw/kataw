# Kataw parser test case

## Input

`````js
([...x]);
({...x+y});
([...x+y]);
([...x]);
([...x=y]);
([ foo()[x] = 10 ] = z = {});
([ x.y = 10 ] = z = {});
([ x[y] = 10 ] = z = {});
([ [ foo()[x] = 10 ] = {} ] = z = {})
([ [ x.y = 10 ] = {} ]= z = {})
([ [ foo()[x] = 10 ] = {} ] = {})
([ [ foo()[x] = 10 ] = {} ]= z = {})
([ [ x[y] = 10 ] = {} ]= z = {})
([ [ x.y = 10 ] = {} ] = {});

([ x[y] ] = z = {});
([ [ foo().x ] ]= z = {});
([ x[y] ]= z = {});
([ [ foo()[x] ] ]= z = {});
([ [ foo()[x] ] ] = {});
([ [ x.y ] ]= z = {});
([ [ x[y] ] ]= z = {});
([ foo().x = 10 ]= z = {});
([ foo()[x] = 10 ]= z = {});
([ x.y = 10 ]= z = {});
([ foo()[x] = 10 ] = {});
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
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 6
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 6
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 6
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 7
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
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
                                "kind": 224,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 12,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 12,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 9,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 21
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
                                "kind": 223,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 29,
                                        "end": 30
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 24,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 24,
                        "end": 30
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 23,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 33
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
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 39,
                                    "end": 40
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 36,
                        "end": 40
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 35,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 33,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 33,
            "end": 43
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
                                "kind": 223,
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 49,
                                        "end": 50
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 51,
                                        "end": 52
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 49,
                                    "end": 52
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 46,
                                "end": 52
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 46,
                        "end": 52
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 45,
                    "end": 53
                },
                "autofix": 0,
                "flags": 256,
                "start": 43,
                "end": 54
            },
            "autofix": 0,
            "flags": 128,
            "start": 43,
            "end": 55
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
                                                "start": 58,
                                                "end": 62
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 63,
                                                "end": 63
                                            },
                                            "flags": 256,
                                            "start": 58,
                                            "end": 64
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 65,
                                            "end": 66
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 58,
                                        "end": 67
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 58,
                                        "end": 69
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 69,
                                        "end": 72
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 58,
                                    "end": 72
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 58,
                            "end": 72
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 57,
                        "end": 74
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 74,
                        "end": 76
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 76,
                            "end": 78
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 76,
                            "end": 80
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
                                "start": 82,
                                "end": 82
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 80,
                            "end": 83
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 76,
                        "end": 83
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 57,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 55,
                "end": 84
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 85
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 91,
                                            "end": 92
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 88,
                                        "end": 92
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 88,
                                        "end": 94
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
                                    "start": 88,
                                    "end": 97
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 88,
                            "end": 97
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 87,
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
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 101,
                            "end": 103
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 101,
                            "end": 105
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
                                "start": 107,
                                "end": 107
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 105,
                            "end": 108
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 101,
                        "end": 108
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 87,
                    "end": 108
                },
                "autofix": 0,
                "flags": 256,
                "start": 85,
                "end": 109
            },
            "autofix": 0,
            "flags": 128,
            "start": 85,
            "end": 110
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 113,
                                            "end": 115
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 116,
                                            "end": 117
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 113,
                                        "end": 118
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 113,
                                        "end": 120
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 120,
                                        "end": 123
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 113,
                                    "end": 123
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 113,
                            "end": 123
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 112,
                        "end": 125
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 125,
                        "end": 127
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 127,
                            "end": 129
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 127,
                            "end": 131
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
                                "start": 133,
                                "end": 133
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 131,
                            "end": 134
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 127,
                        "end": 134
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 112,
                    "end": 134
                },
                "autofix": 0,
                "flags": 256,
                "start": 110,
                "end": 135
            },
            "autofix": 0,
            "flags": 128,
            "start": 110,
            "end": 136
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 131,
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
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
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
                                                                                    "start": 141,
                                                                                    "end": 145
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 146,
                                                                                    "end": 146
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 141,
                                                                                "end": 147
                                                                            },
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "value": "x",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 148,
                                                                                "end": 149
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 141,
                                                                            "end": 150
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 67174402,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 141,
                                                                            "end": 152
                                                                        },
                                                                        "right": {
                                                                            "kind": 81921,
                                                                            "value": 10,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 152,
                                                                            "end": 155
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 141,
                                                                        "end": 155
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 141,
                                                                "end": 155
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 139,
                                                            "end": 157
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 157,
                                                            "end": 159
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
                                                                "start": 161,
                                                                "end": 161
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 159,
                                                            "end": 162
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 139,
                                                        "end": 162
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 139,
                                                "end": 162
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 138,
                                            "end": 164
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 164,
                                            "end": 166
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "z",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 166,
                                                "end": 168
                                            },
                                            "operatorToken": {
                                                "kind": 268501004,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 166,
                                                "end": 170
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
                                                    "start": 172,
                                                    "end": 172
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 170,
                                                "end": 173
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 166,
                                            "end": 173
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 138,
                                        "end": 173
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 136,
                                    "end": 174
                                },
                                "argumentList": {
                                    "kind": 256,
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
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 81921,
                                                                                    "value": "x",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 179,
                                                                                    "end": 181
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 81921,
                                                                                    "value": "y",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 182,
                                                                                    "end": 183
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 179,
                                                                                "end": 183
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 67174402,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 179,
                                                                                "end": 185
                                                                            },
                                                                            "right": {
                                                                                "kind": 81921,
                                                                                "value": 10,
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 185,
                                                                                "end": 188
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 179,
                                                                            "end": 188
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 179,
                                                                    "end": 188
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 177,
                                                                "end": 190
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 190,
                                                                "end": 192
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
                                                                    "start": 194,
                                                                    "end": 194
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 192,
                                                                "end": 195
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 177,
                                                            "end": 195
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 177,
                                                    "end": 195
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 176,
                                                "end": 197
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 197,
                                                "end": 198
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "z",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 198,
                                                    "end": 200
                                                },
                                                "operatorToken": {
                                                    "kind": 268501004,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 198,
                                                    "end": 202
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
                                                        "start": 204,
                                                        "end": 204
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 202,
                                                    "end": 205
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 198,
                                                "end": 205
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 176,
                                            "end": 205
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 176,
                                    "end": 205
                                },
                                "flags": 256,
                                "start": 136,
                                "end": 206
                            },
                            "argumentList": {
                                "kind": 256,
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
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
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
                                                                                    "start": 211,
                                                                                    "end": 215
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 216,
                                                                                    "end": 216
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 211,
                                                                                "end": 217
                                                                            },
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "value": "x",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 218,
                                                                                "end": 219
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 211,
                                                                            "end": 220
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 67174402,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 211,
                                                                            "end": 222
                                                                        },
                                                                        "right": {
                                                                            "kind": 81921,
                                                                            "value": 10,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 222,
                                                                            "end": 225
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 211,
                                                                        "end": 225
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 211,
                                                                "end": 225
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 209,
                                                            "end": 227
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 227,
                                                            "end": 229
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
                                                                "start": 231,
                                                                "end": 231
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 229,
                                                            "end": 232
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 209,
                                                        "end": 232
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 209,
                                                "end": 232
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 208,
                                            "end": 234
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 234,
                                            "end": 236
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
                                                "start": 238,
                                                "end": 238
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 236,
                                            "end": 239
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 208,
                                        "end": 239
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 208,
                                "end": 239
                            },
                            "flags": 256,
                            "start": 136,
                            "end": 240
                        },
                        "argumentList": {
                            "kind": 256,
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
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
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
                                                                                "start": 245,
                                                                                "end": 249
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 250,
                                                                                "end": 250
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 245,
                                                                            "end": 251
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "value": "x",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 252,
                                                                            "end": 253
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 245,
                                                                        "end": 254
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 67174402,
                                                                        "autofix": 0,
                                                                        "flags": 0,
                                                                        "start": 245,
                                                                        "end": 256
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "value": 10,
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 256,
                                                                        "end": 259
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 245,
                                                                    "end": 259
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 245,
                                                            "end": 259
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 243,
                                                        "end": 261
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 261,
                                                        "end": 263
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
                                                            "start": 265,
                                                            "end": 265
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 263,
                                                        "end": 266
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 243,
                                                    "end": 266
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 243,
                                            "end": 266
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 242,
                                        "end": 268
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 268,
                                        "end": 269
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 269,
                                            "end": 271
                                        },
                                        "operatorToken": {
                                            "kind": 268501004,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 269,
                                            "end": 273
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
                                                "start": 275,
                                                "end": 275
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 273,
                                            "end": 276
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 269,
                                        "end": 276
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 242,
                                    "end": 276
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 242,
                            "end": 276
                        },
                        "flags": 256,
                        "start": 136,
                        "end": 277
                    },
                    "argumentList": {
                        "kind": 256,
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
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 130,
                                                                    "member": {
                                                                        "kind": 81921,
                                                                        "value": "x",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 282,
                                                                        "end": 284
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "value": "y",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 285,
                                                                        "end": 286
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 282,
                                                                    "end": 287
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 67174402,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 282,
                                                                    "end": 289
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "value": 10,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 289,
                                                                    "end": 292
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 282,
                                                                "end": 292
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 282,
                                                        "end": 292
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 280,
                                                    "end": 294
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 294,
                                                    "end": 296
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
                                                        "start": 298,
                                                        "end": 298
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 296,
                                                    "end": 299
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 280,
                                                "end": 299
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 280,
                                        "end": 299
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 279,
                                    "end": 301
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 301,
                                    "end": 302
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 302,
                                        "end": 304
                                    },
                                    "operatorToken": {
                                        "kind": 268501004,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 302,
                                        "end": 306
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
                                            "start": 308,
                                            "end": 308
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 306,
                                        "end": 309
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 302,
                                    "end": 309
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 279,
                                "end": 309
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 279,
                        "end": 309
                    },
                    "flags": 256,
                    "start": 136,
                    "end": 310
                },
                "argumentList": {
                    "kind": 256,
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
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 81921,
                                                                    "value": "x",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 315,
                                                                    "end": 317
                                                                },
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": "y",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 318,
                                                                    "end": 319
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 315,
                                                                "end": 319
                                                            },
                                                            "operatorToken": {
                                                                "kind": 67174402,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 315,
                                                                "end": 321
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": 10,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 321,
                                                                "end": 324
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 315,
                                                            "end": 324
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 315,
                                                    "end": 324
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 313,
                                                "end": 326
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 326,
                                                "end": 328
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
                                                    "start": 330,
                                                    "end": 330
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 328,
                                                "end": 331
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 313,
                                            "end": 331
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 313,
                                    "end": 331
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 312,
                                "end": 333
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 333,
                                "end": 335
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
                                    "start": 337,
                                    "end": 337
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 335,
                                "end": 338
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 312,
                            "end": 338
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 312,
                    "end": 338
                },
                "flags": 256,
                "start": 136,
                "end": 339
            },
            "autofix": 0,
            "flags": 128,
            "start": 136,
            "end": 340
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
                                    "kind": 130,
                                    "member": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 344,
                                        "end": 346
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 347,
                                        "end": 348
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 344,
                                    "end": 349
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 344,
                            "end": 349
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 343,
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
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 353,
                            "end": 355
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 353,
                            "end": 357
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
                                "start": 359,
                                "end": 359
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 357,
                            "end": 360
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 353,
                        "end": 360
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 343,
                    "end": 360
                },
                "autofix": 0,
                "flags": 256,
                "start": 340,
                "end": 361
            },
            "autofix": 0,
            "flags": 128,
            "start": 340,
            "end": 362
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 367,
                                                        "end": 371
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 372,
                                                        "end": 372
                                                    },
                                                    "flags": 256,
                                                    "start": 367,
                                                    "end": 373
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 374,
                                                    "end": 375
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 367,
                                                "end": 375
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 367,
                                        "end": 375
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 365,
                                    "end": 377
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 365,
                            "end": 377
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 364,
                        "end": 379
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 379,
                        "end": 380
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 380,
                            "end": 382
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 380,
                            "end": 384
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
                                "start": 386,
                                "end": 386
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 384,
                            "end": 387
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 380,
                        "end": 387
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 364,
                    "end": 387
                },
                "autofix": 0,
                "flags": 256,
                "start": 362,
                "end": 388
            },
            "autofix": 0,
            "flags": 128,
            "start": 362,
            "end": 389
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
                                    "kind": 130,
                                    "member": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 392,
                                        "end": 394
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 395,
                                        "end": 396
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 392,
                                    "end": 397
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 392,
                            "end": 397
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 391,
                        "end": 399
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 399,
                        "end": 400
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 400,
                            "end": 402
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 400,
                            "end": 404
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
                                "start": 406,
                                "end": 406
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 404,
                            "end": 407
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 400,
                        "end": 407
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 391,
                    "end": 407
                },
                "autofix": 0,
                "flags": 256,
                "start": 389,
                "end": 408
            },
            "autofix": 0,
            "flags": 128,
            "start": 389,
            "end": 409
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 414,
                                                        "end": 418
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 419,
                                                        "end": 419
                                                    },
                                                    "flags": 256,
                                                    "start": 414,
                                                    "end": 420
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 421,
                                                    "end": 422
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 414,
                                                "end": 423
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 414,
                                        "end": 423
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 412,
                                    "end": 425
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 412,
                            "end": 425
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 411,
                        "end": 427
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 427,
                        "end": 428
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 428,
                            "end": 430
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 428,
                            "end": 432
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
                                "start": 434,
                                "end": 434
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 432,
                            "end": 435
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 428,
                        "end": 435
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 411,
                    "end": 435
                },
                "autofix": 0,
                "flags": 256,
                "start": 409,
                "end": 436
            },
            "autofix": 0,
            "flags": 128,
            "start": 409,
            "end": 437
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 442,
                                                        "end": 446
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 447,
                                                        "end": 447
                                                    },
                                                    "flags": 256,
                                                    "start": 442,
                                                    "end": 448
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 449,
                                                    "end": 450
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 442,
                                                "end": 451
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 442,
                                        "end": 451
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 440,
                                    "end": 453
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 440,
                            "end": 453
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 439,
                        "end": 455
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 455,
                        "end": 457
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
                            "start": 459,
                            "end": 459
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 457,
                        "end": 460
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 439,
                    "end": 460
                },
                "autofix": 0,
                "flags": 256,
                "start": 437,
                "end": 461
            },
            "autofix": 0,
            "flags": 128,
            "start": 437,
            "end": 462
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 467,
                                                    "end": 469
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 470,
                                                    "end": 471
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 467,
                                                "end": 471
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 467,
                                        "end": 471
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 465,
                                    "end": 473
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 465,
                            "end": 473
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 464,
                        "end": 475
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 475,
                        "end": 476
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 476,
                            "end": 478
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 476,
                            "end": 480
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
                                "start": 482,
                                "end": 482
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 480,
                            "end": 483
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 476,
                        "end": 483
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 464,
                    "end": 483
                },
                "autofix": 0,
                "flags": 256,
                "start": 462,
                "end": 484
            },
            "autofix": 0,
            "flags": 128,
            "start": 462,
            "end": 485
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 490,
                                                    "end": 492
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 493,
                                                    "end": 494
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 490,
                                                "end": 495
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 490,
                                        "end": 495
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 488,
                                    "end": 497
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 488,
                            "end": 497
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 487,
                        "end": 499
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 499,
                        "end": 500
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 500,
                            "end": 502
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 500,
                            "end": 504
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
                                "start": 506,
                                "end": 506
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 504,
                            "end": 507
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 500,
                        "end": 507
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 487,
                    "end": 507
                },
                "autofix": 0,
                "flags": 256,
                "start": 485,
                "end": 508
            },
            "autofix": 0,
            "flags": 128,
            "start": 485,
            "end": 509
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
                                                "start": 512,
                                                "end": 516
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 517,
                                                "end": 517
                                            },
                                            "flags": 256,
                                            "start": 512,
                                            "end": 518
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 519,
                                            "end": 520
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 512,
                                        "end": 520
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 512,
                                        "end": 522
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 522,
                                        "end": 525
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 512,
                                    "end": 525
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 512,
                            "end": 525
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 511,
                        "end": 527
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 527,
                        "end": 528
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 528,
                            "end": 530
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 528,
                            "end": 532
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
                                "start": 534,
                                "end": 534
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 532,
                            "end": 535
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 528,
                        "end": 535
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 511,
                    "end": 535
                },
                "autofix": 0,
                "flags": 256,
                "start": 509,
                "end": 536
            },
            "autofix": 0,
            "flags": 128,
            "start": 509,
            "end": 537
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
                                                "start": 540,
                                                "end": 544
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 545,
                                                "end": 545
                                            },
                                            "flags": 256,
                                            "start": 540,
                                            "end": 546
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 547,
                                            "end": 548
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 540,
                                        "end": 549
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 540,
                                        "end": 551
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 551,
                                        "end": 554
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 540,
                                    "end": 554
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 540,
                            "end": 554
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 539,
                        "end": 556
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 556,
                        "end": 557
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 557,
                            "end": 559
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 557,
                            "end": 561
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
                                "start": 563,
                                "end": 563
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 561,
                            "end": 564
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 557,
                        "end": 564
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 539,
                    "end": 564
                },
                "autofix": 0,
                "flags": 256,
                "start": 537,
                "end": 565
            },
            "autofix": 0,
            "flags": 128,
            "start": 537,
            "end": 566
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 569,
                                            "end": 571
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 572,
                                            "end": 573
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 569,
                                        "end": 573
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 569,
                                        "end": 575
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 575,
                                        "end": 578
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 569,
                                    "end": 578
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 569,
                            "end": 578
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 568,
                        "end": 580
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 580,
                        "end": 581
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 581,
                            "end": 583
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 581,
                            "end": 585
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
                                "start": 587,
                                "end": 587
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 585,
                            "end": 588
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 581,
                        "end": 588
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 568,
                    "end": 588
                },
                "autofix": 0,
                "flags": 256,
                "start": 566,
                "end": 589
            },
            "autofix": 0,
            "flags": 128,
            "start": 566,
            "end": 590
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
                                                "start": 593,
                                                "end": 597
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 598,
                                                "end": 598
                                            },
                                            "flags": 256,
                                            "start": 593,
                                            "end": 599
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 600,
                                            "end": 601
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 593,
                                        "end": 602
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 593,
                                        "end": 604
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 604,
                                        "end": 607
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 593,
                                    "end": 607
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 593,
                            "end": 607
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 592,
                        "end": 609
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 609,
                        "end": 611
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
                            "start": 613,
                            "end": 613
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 611,
                        "end": 614
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 592,
                    "end": 614
                },
                "autofix": 0,
                "flags": 256,
                "start": 590,
                "end": 615
            },
            "autofix": 0,
            "flags": 128,
            "start": 590,
            "end": 616
        }
    ],
    "isModule": false,
    "text": "([...x]);\n({...x+y});\n([...x+y]);\n([...x]);\n([...x=y]);\n([ foo()[x] = 10 ] = z = {});\n([ x.y = 10 ] = z = {});\n([ x[y] = 10 ] = z = {});\n([ [ foo()[x] = 10 ] = {} ] = z = {})\n([ [ x.y = 10 ] = {} ]= z = {})\n([ [ foo()[x] = 10 ] = {} ] = {})\n([ [ foo()[x] = 10 ] = {} ]= z = {})\n([ [ x[y] = 10 ] = {} ]= z = {})\n([ [ x.y = 10 ] = {} ] = {});\n\n([ x[y] ] = z = {});\n([ [ foo().x ] ]= z = {});\n([ x[y] ]= z = {});\n([ [ foo()[x] ] ]= z = {});\n([ [ foo()[x] ] ] = {});\n([ [ x.y ] ]= z = {});\n([ [ x[y] ] ]= z = {});\n([ foo().x = 10 ]= z = {});\n([ foo()[x] = 10 ]= z = {});\n([ x.y = 10 ]= z = {});\n([ foo()[x] = 10 ] = {});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 616
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

