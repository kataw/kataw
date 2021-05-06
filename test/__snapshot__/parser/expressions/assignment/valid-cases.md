# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
a = !!(b + c);
a = !!(b == c);
a = !!(b != c);
a = !!(b === c);
a = !!(b !== c);
a = !!(b < c);
a = !!(b > c);
a = !!(b <= c);
a = !!(b >= c);
a = !!(b in c);
a = !!(b && !c);
a = !!(b, c);
a = !!!b;
a = !!void b;
a = !!b;
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 5,
                            "end": 6
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 18,
                        "end": 20
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 20,
                            "end": 21
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 29
                },
                "flags": 32,
                "start": 14,
                "end": 29
            },
            "flags": 16,
            "start": 14,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 34,
                        "end": 36
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 36,
                            "end": 37
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 39
                                },
                                "operatorToken": {
                                    "kind": 34623,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 42
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 37,
                            "end": 45
                        },
                        "flags": 32,
                        "start": 36,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 45
                },
                "flags": 32,
                "start": 30,
                "end": 45
            },
            "flags": 16,
            "start": 30,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 46,
                    "end": 48
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 48,
                    "end": 50
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 50,
                        "end": 52
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 52,
                            "end": 53
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 54,
                                    "end": 55
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 64,
                                    "start": 55,
                                    "end": 59
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 59,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 53,
                                "end": 61
                            },
                            "flags": 32,
                            "start": 53,
                            "end": 62
                        },
                        "flags": 32,
                        "start": 52,
                        "end": 62
                    },
                    "flags": 32,
                    "start": 50,
                    "end": 62
                },
                "flags": 32,
                "start": 46,
                "end": 62
            },
            "flags": 16,
            "start": 46,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 65,
                    "end": 67
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 67,
                        "end": 69
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 69,
                            "end": 70
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 72
                                },
                                "operatorToken": {
                                    "kind": 34621,
                                    "flags": 64,
                                    "start": 72,
                                    "end": 76
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 76,
                                    "end": 78
                                },
                                "flags": 32,
                                "start": 70,
                                "end": 78
                            },
                            "flags": 32,
                            "start": 70,
                            "end": 79
                        },
                        "flags": 32,
                        "start": 69,
                        "end": 79
                    },
                    "flags": 32,
                    "start": 67,
                    "end": 79
                },
                "flags": 32,
                "start": 63,
                "end": 79
            },
            "flags": 16,
            "start": 63,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 80,
                    "end": 82
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 82,
                    "end": 84
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 84,
                        "end": 86
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 86,
                            "end": 87
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 88,
                                    "end": 89
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 64,
                                    "start": 89,
                                    "end": 91
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 91,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 87,
                                "end": 93
                            },
                            "flags": 32,
                            "start": 87,
                            "end": 94
                        },
                        "flags": 32,
                        "start": 86,
                        "end": 94
                    },
                    "flags": 32,
                    "start": 84,
                    "end": 94
                },
                "flags": 32,
                "start": 80,
                "end": 94
            },
            "flags": 16,
            "start": 80,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 95,
                    "end": 97
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 97,
                    "end": 99
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 99,
                        "end": 101
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 101,
                            "end": 102
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 103,
                                    "end": 104
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 64,
                                    "start": 104,
                                    "end": 106
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 106,
                                    "end": 108
                                },
                                "flags": 32,
                                "start": 102,
                                "end": 108
                            },
                            "flags": 32,
                            "start": 102,
                            "end": 109
                        },
                        "flags": 32,
                        "start": 101,
                        "end": 109
                    },
                    "flags": 32,
                    "start": 99,
                    "end": 109
                },
                "flags": 32,
                "start": 95,
                "end": 109
            },
            "flags": 16,
            "start": 95,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 110,
                    "end": 112
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 112,
                    "end": 114
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 114,
                        "end": 116
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 116,
                            "end": 117
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 118,
                                    "end": 119
                                },
                                "operatorToken": {
                                    "kind": 34880,
                                    "flags": 64,
                                    "start": 119,
                                    "end": 122
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 122,
                                    "end": 124
                                },
                                "flags": 32,
                                "start": 117,
                                "end": 124
                            },
                            "flags": 32,
                            "start": 117,
                            "end": 125
                        },
                        "flags": 32,
                        "start": 116,
                        "end": 125
                    },
                    "flags": 32,
                    "start": 114,
                    "end": 125
                },
                "flags": 32,
                "start": 110,
                "end": 125
            },
            "flags": 16,
            "start": 110,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 126,
                    "end": 128
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 128,
                    "end": 130
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 130,
                        "end": 132
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 132,
                            "end": 133
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 134,
                                    "end": 135
                                },
                                "operatorToken": {
                                    "kind": 34881,
                                    "flags": 64,
                                    "start": 135,
                                    "end": 138
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 138,
                                    "end": 140
                                },
                                "flags": 32,
                                "start": 133,
                                "end": 140
                            },
                            "flags": 32,
                            "start": 133,
                            "end": 141
                        },
                        "flags": 32,
                        "start": 132,
                        "end": 141
                    },
                    "flags": 32,
                    "start": 130,
                    "end": 141
                },
                "flags": 32,
                "start": 126,
                "end": 141
            },
            "flags": 16,
            "start": 126,
            "end": 142
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 142,
                    "end": 144
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 144,
                    "end": 146
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 146,
                        "end": 148
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 148,
                            "end": 149
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 150,
                                    "end": 151
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 64,
                                    "start": 151,
                                    "end": 154
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 154,
                                    "end": 156
                                },
                                "flags": 32,
                                "start": 149,
                                "end": 156
                            },
                            "flags": 32,
                            "start": 149,
                            "end": 157
                        },
                        "flags": 32,
                        "start": 148,
                        "end": 157
                    },
                    "flags": 32,
                    "start": 146,
                    "end": 157
                },
                "flags": 32,
                "start": 142,
                "end": 157
            },
            "flags": 16,
            "start": 142,
            "end": 158
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 158,
                    "end": 160
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 160,
                    "end": 162
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 162,
                        "end": 164
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 164,
                            "end": 165
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 166,
                                    "end": 167
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 64,
                                    "start": 167,
                                    "end": 170
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 170,
                                        "end": 172
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 172,
                                        "end": 173
                                    },
                                    "flags": 32,
                                    "start": 170,
                                    "end": 173
                                },
                                "flags": 32,
                                "start": 165,
                                "end": 173
                            },
                            "flags": 32,
                            "start": 165,
                            "end": 174
                        },
                        "flags": 32,
                        "start": 164,
                        "end": 174
                    },
                    "flags": 32,
                    "start": 162,
                    "end": 174
                },
                "flags": 32,
                "start": 158,
                "end": 174
            },
            "flags": 16,
            "start": 158,
            "end": 175
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 179,
                        "end": 181
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 181,
                            "end": 182
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 183,
                                        "end": 184
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 185,
                                        "end": 187
                                    }
                                ],
                                "flags": 32,
                                "start": 182,
                                "end": 188
                            },
                            "flags": 32,
                            "start": 182,
                            "end": 188
                        },
                        "flags": 32,
                        "start": 181,
                        "end": 188
                    },
                    "flags": 32,
                    "start": 179,
                    "end": 188
                },
                "flags": 32,
                "start": 175,
                "end": 188
            },
            "flags": 16,
            "start": 175,
            "end": 189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 189,
                    "end": 191
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 191,
                    "end": 193
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 193,
                        "end": 195
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 195,
                            "end": 196
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 196,
                                "end": 197
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 197,
                                "end": 198
                            },
                            "flags": 32,
                            "start": 196,
                            "end": 198
                        },
                        "flags": 32,
                        "start": 195,
                        "end": 198
                    },
                    "flags": 32,
                    "start": 193,
                    "end": 198
                },
                "flags": 32,
                "start": 189,
                "end": 198
            },
            "flags": 16,
            "start": 189,
            "end": 199
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 199,
                    "end": 201
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 201,
                    "end": 203
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 203,
                        "end": 205
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 205,
                            "end": 206
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 206,
                                "end": 210
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 210,
                                "end": 212
                            },
                            "flags": 32,
                            "start": 206,
                            "end": 212
                        },
                        "flags": 32,
                        "start": 205,
                        "end": 212
                    },
                    "flags": 32,
                    "start": 203,
                    "end": 212
                },
                "flags": 32,
                "start": 199,
                "end": 212
            },
            "flags": 16,
            "start": 199,
            "end": 213
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 213,
                    "end": 215
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 215,
                    "end": 217
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 217,
                        "end": 219
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 219,
                            "end": 220
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 220,
                            "end": 221
                        },
                        "flags": 32,
                        "start": 219,
                        "end": 221
                    },
                    "flags": 32,
                    "start": 217,
                    "end": 221
                },
                "flags": 32,
                "start": 213,
                "end": 221
            },
            "flags": 16,
            "start": 213,
            "end": 222
        }
    ],
    "isModule": true,
    "source": "a = !!(b + c);\na = !!(b == c);\na = !!(b != c);\na = !!(b === c);\na = !!(b !== c);\na = !!(b < c);\na = !!(b > c);\na = !!(b <= c);\na = !!(b >= c);\na = !!(b in c);\na = !!(b && !c);\na = !!(b, c);\na = !!!b;\na = !!void b;\na = !!b;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 222
}
```

### Printed

```javascript

a = (b + c);
a = (b == c);
a = (b != c);
a = (b === c);
a = (b !== c);
a = (b  < c);
a = (b > c);
a = (b <= c);
a = (b >= c);
a = (b in c);
a = (b && c);
a = (b, c);
a = b;
a = b;
a = b;
```

### Diagnostics

```javascript
✔ No errors
```

