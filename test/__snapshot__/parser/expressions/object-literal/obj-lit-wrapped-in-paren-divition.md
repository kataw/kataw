# Kataw parser test case

## Input

`````js
(x = { "a": x = y }) / y.z;
(x = { "a": (x) = y }) / y.z;
(x = { "a": x = (y) }) / y.z;
(x = { "a": (x = (y)) }) / y.z;
(x = { [a]: {x} = y }) / y.z;
(x = { [a]: x = y }) / y.z;
(x = { [a]: (x) = y }) / y.z;
(x = { [a]: x = (y) }) / y.z;
(x = { [a]: (x = (y)) }) / y.z;
({  ...1 in {} });
({ set foo(b){}, set bar(d){} });
({ set foo(c){}, bar(){} });
({ foo: typeof x });
({ foo: true / false });
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 0,
                            "end": 4
                        },
                        "right": {
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "operatorToken": {
                                                "kind": 81921,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 6,
                                                "end": 15
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 67174403,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 6,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 4,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 19
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 22,
                        "end": 24
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 25,
                        "end": 26
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 22,
                    "end": 26
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 29,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "right": {
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
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 41,
                                                    "end": 42
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "operatorToken": {
                                                "kind": 81921,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 34,
                                                "end": 45
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 45,
                                                "end": 47
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 34,
                                            "end": 47
                                        },
                                        "right": {
                                            "kind": 67174403,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 34,
                                            "end": 38
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 34,
                                "end": 47
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 32,
                            "end": 49
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 27,
                        "end": 49
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 27,
                    "end": 50
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 50,
                    "end": 52
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 52,
                        "end": 54
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 55,
                        "end": 56
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 52,
                    "end": 56
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 56
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 59,
                            "end": 60
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 57,
                            "end": 62
                        },
                        "right": {
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "operatorToken": {
                                                "kind": 537067531,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 64,
                                                "end": 73
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 75,
                                                    "end": 76
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 73,
                                                "end": 77
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 64,
                                            "end": 77
                                        },
                                        "right": {
                                            "kind": 67174403,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 64,
                                            "end": 68
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 64,
                                        "end": 77
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 64,
                                "end": 77
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 62,
                            "end": 79
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 57,
                        "end": 79
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 57,
                    "end": 80
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 80,
                    "end": 82
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 82,
                        "end": 84
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 85,
                        "end": 86
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 82,
                    "end": 86
                },
                "autofix": 0,
                "flags": 256,
                "start": 57,
                "end": 86
            },
            "autofix": 0,
            "flags": 128,
            "start": 57,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 89,
                            "end": 90
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 87,
                            "end": 92
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 101,
                                                    "end": 102
                                                },
                                                "operatorToken": {
                                                    "kind": 537067531,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 99,
                                                    "end": 104
                                                },
                                                "right": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 106,
                                                        "end": 107
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 104,
                                                    "end": 108
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 99,
                                                "end": 108
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 99,
                                            "end": 109
                                        },
                                        "right": {
                                            "kind": 67174403,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 94,
                                            "end": 98
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 94,
                                        "end": 109
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 94,
                                "end": 109
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 92,
                            "end": 111
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 87,
                        "end": 111
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 87,
                    "end": 112
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 112,
                    "end": 114
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 114,
                        "end": 116
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 117,
                        "end": 118
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 114,
                    "end": 118
                },
                "autofix": 0,
                "flags": 256,
                "start": 87,
                "end": 118
            },
            "autofix": 0,
            "flags": 128,
            "start": 87,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 121,
                            "end": 122
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 119,
                            "end": 124
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 81921,
                                                            "value": "x",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 133,
                                                            "end": 134
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 133,
                                                    "end": 134
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 131,
                                                "end": 135
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 135,
                                                "end": 137
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 137,
                                                "end": 139
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 131,
                                            "end": 139
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 128,
                                                "end": 129
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 126,
                                            "end": 130
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 126,
                                        "end": 139
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 126,
                                "end": 139
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 124,
                            "end": 141
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 119,
                        "end": 141
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 119,
                    "end": 142
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 142,
                    "end": 144
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 144,
                        "end": 146
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 147,
                        "end": 148
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 144,
                    "end": 148
                },
                "autofix": 0,
                "flags": 256,
                "start": 119,
                "end": 148
            },
            "autofix": 0,
            "flags": 128,
            "start": 119,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 151,
                            "end": 152
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 149,
                            "end": 154
                        },
                        "right": {
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 161,
                                                "end": 163
                                            },
                                            "operatorToken": {
                                                "kind": 81921,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 156,
                                                "end": 165
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 165,
                                                "end": 167
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 156,
                                            "end": 167
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 158,
                                                "end": 159
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 156,
                                            "end": 160
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 156,
                                        "end": 167
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 156,
                                "end": 167
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 154,
                            "end": 169
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 149,
                        "end": 169
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 149,
                    "end": 170
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 170,
                    "end": 172
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 172,
                        "end": 174
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 175,
                        "end": 176
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 172,
                    "end": 176
                },
                "autofix": 0,
                "flags": 256,
                "start": 149,
                "end": 176
            },
            "autofix": 0,
            "flags": 128,
            "start": 149,
            "end": 177
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 179,
                            "end": 180
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 177,
                            "end": 182
                        },
                        "right": {
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
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 191,
                                                    "end": 192
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 189,
                                                "end": 193
                                            },
                                            "operatorToken": {
                                                "kind": 81921,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 184,
                                                "end": 195
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 195,
                                                "end": 197
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 184,
                                            "end": 197
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 186,
                                                "end": 187
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 184,
                                            "end": 188
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 184,
                                        "end": 197
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 184,
                                "end": 197
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 182,
                            "end": 199
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 177,
                        "end": 199
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 177,
                    "end": 200
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 200,
                    "end": 202
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 202,
                        "end": 204
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 205,
                        "end": 206
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 202,
                    "end": 206
                },
                "autofix": 0,
                "flags": 256,
                "start": 177,
                "end": 206
            },
            "autofix": 0,
            "flags": 128,
            "start": 177,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 209,
                            "end": 210
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 207,
                            "end": 212
                        },
                        "right": {
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 219,
                                                "end": 221
                                            },
                                            "operatorToken": {
                                                "kind": 537067531,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 214,
                                                "end": 223
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 225,
                                                    "end": 226
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 223,
                                                "end": 227
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 214,
                                            "end": 227
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 216,
                                                "end": 217
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 214,
                                            "end": 218
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 214,
                                        "end": 227
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 214,
                                "end": 227
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 212,
                            "end": 229
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 207,
                        "end": 229
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 207,
                    "end": 230
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 230,
                    "end": 232
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 232,
                        "end": 234
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 235,
                        "end": 236
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 232,
                    "end": 236
                },
                "autofix": 0,
                "flags": 256,
                "start": 207,
                "end": 236
            },
            "autofix": 0,
            "flags": 128,
            "start": 207,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 239,
                            "end": 240
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 237,
                            "end": 242
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 251,
                                                    "end": 252
                                                },
                                                "operatorToken": {
                                                    "kind": 537067531,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 249,
                                                    "end": 254
                                                },
                                                "right": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 256,
                                                        "end": 257
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 254,
                                                    "end": 258
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 249,
                                                "end": 258
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 249,
                                            "end": 259
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 246,
                                                "end": 247
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 244,
                                            "end": 248
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 244,
                                        "end": 259
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 244,
                                "end": 259
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 242,
                            "end": 261
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 237,
                        "end": 261
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 237,
                    "end": 262
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 262,
                    "end": 264
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 264,
                        "end": 266
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 267,
                        "end": 268
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 264,
                    "end": 268
                },
                "autofix": 0,
                "flags": 256,
                "start": 237,
                "end": 268
            },
            "autofix": 0,
            "flags": 128,
            "start": 237,
            "end": 269
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
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 277,
                                        "end": 278
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 278,
                                        "end": 281
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
                                            "start": 283,
                                            "end": 283
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 281,
                                        "end": 284
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 277,
                                    "end": 284
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 272,
                                "end": 284
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 272,
                        "end": 284
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 271,
                    "end": 286
                },
                "autofix": 0,
                "flags": 256,
                "start": 269,
                "end": 287
            },
            "autofix": 0,
            "flags": 128,
            "start": 269,
            "end": 288
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 295,
                                    "end": 299
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 300,
                                                "end": 301
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 300,
                                            "end": 301
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 300,
                                    "end": 302
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 303,
                                        "end": 303
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 302,
                                    "end": 304
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 299,
                                "end": 304
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 309,
                                    "end": 313
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 314,
                                                "end": 315
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 314,
                                            "end": 315
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 314,
                                    "end": 316
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 317,
                                        "end": 317
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 316,
                                    "end": 318
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 313,
                                "end": 318
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 291,
                        "end": 318
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 290,
                    "end": 320
                },
                "autofix": 0,
                "flags": 256,
                "start": 288,
                "end": 321
            },
            "autofix": 0,
            "flags": 128,
            "start": 288,
            "end": 322
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 329,
                                    "end": 333
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 334,
                                                "end": 335
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 334,
                                            "end": 335
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 334,
                                    "end": 336
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 337,
                                        "end": 337
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 336,
                                    "end": 338
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 333,
                                "end": 338
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 339,
                                    "end": 343
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 344,
                                    "end": 345
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 346,
                                        "end": 346
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 345,
                                    "end": 347
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 343,
                                "end": 347
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 325,
                        "end": 347
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 324,
                    "end": 349
                },
                "autofix": 0,
                "flags": 256,
                "start": 322,
                "end": 350
            },
            "autofix": 0,
            "flags": 128,
            "start": 322,
            "end": 351
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
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259885,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 359,
                                        "end": 366
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 366,
                                        "end": 368
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 359,
                                    "end": 368
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 354,
                                    "end": 358
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 354,
                                "end": 368
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 354,
                        "end": 368
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 353,
                    "end": 370
                },
                "autofix": 0,
                "flags": 256,
                "start": 351,
                "end": 371
            },
            "autofix": 0,
            "flags": 128,
            "start": 351,
            "end": 372
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 134,
                                        "value": true,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 380,
                                        "end": 385
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 385,
                                        "end": 387
                                    },
                                    "right": {
                                        "kind": 134,
                                        "value": false,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 387,
                                        "end": 393
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 375,
                                    "end": 393
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 375,
                                    "end": 379
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 375,
                                "end": 393
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 375,
                        "end": 393
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 374,
                    "end": 395
                },
                "autofix": 0,
                "flags": 256,
                "start": 372,
                "end": 396
            },
            "autofix": 0,
            "flags": 128,
            "start": 372,
            "end": 397
        }
    ],
    "isModule": false,
    "text": "(x = { \"a\": x = y }) / y.z;\n(x = { \"a\": (x) = y }) / y.z;\n(x = { \"a\": x = (y) }) / y.z;\n(x = { \"a\": (x = (y)) }) / y.z;\n(x = { [a]: {x} = y }) / y.z;\n(x = { [a]: x = y }) / y.z;\n(x = { [a]: (x) = y }) / y.z;\n(x = { [a]: x = (y) }) / y.z;\n(x = { [a]: (x = (y)) }) / y.z;\n({  ...1 in {} });\n({ set foo(b){}, set bar(d){} });\n({ set foo(c){}, bar(){} });\n({ foo: typeof x });\n({ foo: true / false });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 397
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

