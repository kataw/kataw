# Kataw parser test case

## Input

`````js
a ? b : c ? b : d;
a ? b ? c : d : d;

a ? c : (b, c);
a ? (b, c) : c;
a ? c : (b, d);
a ? (b, c) : d;

a ? b || c : c;
a ? b || c : d;
a ? b && c : c;

a ? c : b && c;
a ? c : b && d;
a ? c : b || c;

a = b == null ? c : b;
a = b != null ? b : c;

a(b ? 0 : 0);
a(b ? +0 : -0);
a(b ? +0 : 0);
a(b ? -0 : 0);

a ? b : b;

a ? -b : -b;
a ? b.c : b.c;
a ? b?.c : b?.c;
a ? b[c] : b[c];
a ? b() : b();
a ? b?.() : b?.();
a ? b?.[c] : b?.[c];
a ? b == c : b == c;
a ? b.c(d + e[f]) : b.c(d + e[f]);

a ? -b : !b;
a ? b() : b(c);
a ? b(c) : b(d);
a ? b?.c : b.c;
a ? b?.() : b();
a ? b?.[c] : b[c];
a ? b == c : b != c;
a ? b.c(d + e[f]) : b.c(d + e[g]);
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 13,
                        "end": 15
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 96,
                    "start": 7,
                    "end": 17
                },
                "flags": 96,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 18,
                    "end": 20
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 20,
                    "end": 22
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 22,
                        "end": 24
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 24,
                        "end": 26
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 28,
                        "end": 30
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 96,
                    "start": 22,
                    "end": 32
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 32,
                    "end": 34
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "flags": 97,
                "start": 18,
                "end": 36
            },
            "flags": 16,
            "start": 18,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 37,
                    "end": 40
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 40,
                    "end": 42
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 42,
                    "end": 44
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 44,
                    "end": 46
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 48,
                                "end": 49
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 50,
                                "end": 52
                            }
                        ],
                        "flags": 32,
                        "start": 46,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 53
                },
                "flags": 97,
                "start": 37,
                "end": 53
            },
            "flags": 16,
            "start": 37,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 54,
                    "end": 56
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 56,
                    "end": 58
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 60,
                                "end": 61
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 62,
                                "end": 64
                            }
                        ],
                        "flags": 32,
                        "start": 58,
                        "end": 65
                    },
                    "flags": 32,
                    "start": 58,
                    "end": 65
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 65,
                    "end": 67
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 67,
                    "end": 69
                },
                "flags": 97,
                "start": 54,
                "end": 69
            },
            "flags": 16,
            "start": 54,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 70,
                    "end": 72
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 72,
                    "end": 74
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 74,
                    "end": 76
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 76,
                    "end": 78
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 80,
                                "end": 81
                            },
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 82,
                                "end": 84
                            }
                        ],
                        "flags": 32,
                        "start": 78,
                        "end": 85
                    },
                    "flags": 32,
                    "start": 78,
                    "end": 85
                },
                "flags": 97,
                "start": 70,
                "end": 85
            },
            "flags": 16,
            "start": 70,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 86,
                    "end": 88
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 88,
                    "end": 90
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 92,
                                "end": 93
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 94,
                                "end": 96
                            }
                        ],
                        "flags": 32,
                        "start": 90,
                        "end": 97
                    },
                    "flags": 32,
                    "start": 90,
                    "end": 97
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 97,
                    "end": 99
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 99,
                    "end": 101
                },
                "flags": 97,
                "start": 86,
                "end": 101
            },
            "flags": 16,
            "start": 86,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 102,
                    "end": 105
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 105,
                    "end": 107
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 107,
                        "end": 109
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 109,
                        "end": 112
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 112,
                        "end": 114
                    },
                    "flags": 96,
                    "start": 107,
                    "end": 114
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 114,
                    "end": 116
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 116,
                    "end": 118
                },
                "flags": 97,
                "start": 102,
                "end": 118
            },
            "flags": 16,
            "start": 102,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 119,
                    "end": 121
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 121,
                    "end": 123
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 123,
                        "end": 125
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 125,
                        "end": 128
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 128,
                        "end": 130
                    },
                    "flags": 96,
                    "start": 123,
                    "end": 130
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 130,
                    "end": 132
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 132,
                    "end": 134
                },
                "flags": 97,
                "start": 119,
                "end": 134
            },
            "flags": 16,
            "start": 119,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 135,
                    "end": 137
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 137,
                    "end": 139
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 139,
                        "end": 141
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 141,
                        "end": 144
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 144,
                        "end": 146
                    },
                    "flags": 96,
                    "start": 139,
                    "end": 146
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 146,
                    "end": 148
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 148,
                    "end": 150
                },
                "flags": 97,
                "start": 135,
                "end": 150
            },
            "flags": 16,
            "start": 135,
            "end": 151
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 151,
                    "end": 154
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 154,
                    "end": 156
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 156,
                    "end": 158
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 158,
                    "end": 160
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 160,
                        "end": 162
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 162,
                        "end": 165
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 165,
                        "end": 167
                    },
                    "flags": 96,
                    "start": 160,
                    "end": 167
                },
                "flags": 97,
                "start": 151,
                "end": 167
            },
            "flags": 16,
            "start": 151,
            "end": 168
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 168,
                    "end": 170
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 170,
                    "end": 172
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 172,
                    "end": 174
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 174,
                    "end": 176
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 176,
                        "end": 178
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 178,
                        "end": 181
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 181,
                        "end": 183
                    },
                    "flags": 96,
                    "start": 176,
                    "end": 183
                },
                "flags": 97,
                "start": 168,
                "end": 183
            },
            "flags": 16,
            "start": 168,
            "end": 184
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 184,
                    "end": 186
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 186,
                    "end": 188
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 188,
                    "end": 190
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 190,
                    "end": 192
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 192,
                        "end": 194
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 194,
                        "end": 197
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 197,
                        "end": 199
                    },
                    "flags": 96,
                    "start": 192,
                    "end": 199
                },
                "flags": 97,
                "start": 184,
                "end": 199
            },
            "flags": 16,
            "start": 184,
            "end": 200
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 200,
                    "end": 203
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 203,
                    "end": 205
                },
                "right": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 205,
                            "end": 207
                        },
                        "operatorToken": {
                            "kind": 34622,
                            "flags": 96,
                            "start": 207,
                            "end": 210
                        },
                        "right": {
                            "kind": 138477575,
                            "flags": 96,
                            "start": 210,
                            "end": 215
                        },
                        "flags": 96,
                        "start": 205,
                        "end": 215
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 215,
                        "end": 217
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 217,
                        "end": 219
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 219,
                        "end": 221
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 221,
                        "end": 223
                    },
                    "flags": 96,
                    "start": 205,
                    "end": 223
                },
                "flags": 32,
                "start": 200,
                "end": 223
            },
            "flags": 16,
            "start": 200,
            "end": 224
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 224,
                    "end": 226
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 226,
                    "end": 228
                },
                "right": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 228,
                            "end": 230
                        },
                        "operatorToken": {
                            "kind": 34623,
                            "flags": 96,
                            "start": 230,
                            "end": 233
                        },
                        "right": {
                            "kind": 138477575,
                            "flags": 96,
                            "start": 233,
                            "end": 238
                        },
                        "flags": 96,
                        "start": 228,
                        "end": 238
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 238,
                        "end": 240
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 240,
                        "end": 242
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 242,
                        "end": 244
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 244,
                        "end": 246
                    },
                    "flags": 96,
                    "start": 228,
                    "end": 246
                },
                "flags": 32,
                "start": 224,
                "end": 246
            },
            "flags": 16,
            "start": 224,
            "end": 247
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 247,
                    "end": 250
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 251,
                                "end": 252
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 252,
                                "end": 254
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 254,
                                "end": 256
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 256,
                                "end": 258
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 258,
                                "end": 260
                            },
                            "flags": 96,
                            "start": 251,
                            "end": 260
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 251,
                    "end": 260
                },
                "flags": 268435488,
                "start": 247,
                "end": 261
            },
            "flags": 16,
            "start": 247,
            "end": 262
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 262,
                    "end": 264
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 265,
                                "end": 266
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 266,
                                "end": 268
                            },
                            "consequent": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 268,
                                    "end": 270
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 270,
                                    "end": 271
                                },
                                "flags": 32,
                                "start": 268,
                                "end": 271
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 271,
                                "end": 273
                            },
                            "alternate": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 273,
                                    "end": 275
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 275,
                                    "end": 276
                                },
                                "flags": 32,
                                "start": 273,
                                "end": 276
                            },
                            "flags": 96,
                            "start": 265,
                            "end": 276
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 265,
                    "end": 276
                },
                "flags": 268435488,
                "start": 262,
                "end": 277
            },
            "flags": 16,
            "start": 262,
            "end": 278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 278,
                    "end": 280
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 281,
                                "end": 282
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 282,
                                "end": 284
                            },
                            "consequent": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 284,
                                    "end": 286
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 286,
                                    "end": 287
                                },
                                "flags": 32,
                                "start": 284,
                                "end": 287
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 287,
                                "end": 289
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 289,
                                "end": 291
                            },
                            "flags": 96,
                            "start": 281,
                            "end": 291
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 281,
                    "end": 291
                },
                "flags": 268435488,
                "start": 278,
                "end": 292
            },
            "flags": 16,
            "start": 278,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 293,
                    "end": 295
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 296,
                                "end": 297
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 297,
                                "end": 299
                            },
                            "consequent": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 299,
                                    "end": 301
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 301,
                                    "end": 302
                                },
                                "flags": 32,
                                "start": 299,
                                "end": 302
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 302,
                                "end": 304
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 304,
                                "end": 306
                            },
                            "flags": 96,
                            "start": 296,
                            "end": 306
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 296,
                    "end": 306
                },
                "flags": 268435488,
                "start": 293,
                "end": 307
            },
            "flags": 16,
            "start": 293,
            "end": 308
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 308,
                    "end": 311
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 311,
                    "end": 313
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 313,
                    "end": 315
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 315,
                    "end": 317
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 317,
                    "end": 319
                },
                "flags": 97,
                "start": 308,
                "end": 319
            },
            "flags": 16,
            "start": 308,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 320,
                    "end": 323
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 323,
                    "end": 325
                },
                "consequent": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 325,
                        "end": 327
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 327,
                        "end": 328
                    },
                    "flags": 32,
                    "start": 325,
                    "end": 328
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 328,
                    "end": 330
                },
                "alternate": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 330,
                        "end": 332
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 332,
                        "end": 333
                    },
                    "flags": 32,
                    "start": 330,
                    "end": 333
                },
                "flags": 97,
                "start": 320,
                "end": 333
            },
            "flags": 16,
            "start": 320,
            "end": 334
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 334,
                    "end": 336
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 336,
                    "end": 338
                },
                "consequent": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 338,
                        "end": 340
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 341,
                        "end": 342
                    },
                    "flags": 96,
                    "start": 338,
                    "end": 342
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 342,
                    "end": 344
                },
                "alternate": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 344,
                        "end": 346
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 347,
                        "end": 348
                    },
                    "flags": 96,
                    "start": 344,
                    "end": 348
                },
                "flags": 97,
                "start": 334,
                "end": 348
            },
            "flags": 16,
            "start": 334,
            "end": 349
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 349,
                    "end": 351
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 351,
                    "end": 353
                },
                "consequent": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 355,
                        "end": 357
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 353,
                        "end": 355
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 357,
                                "end": 358
                            },
                            "flags": 536870944,
                            "start": 357,
                            "end": 358
                        },
                        "flags": 32,
                        "start": 357,
                        "end": 358
                    },
                    "flags": 32,
                    "start": 353,
                    "end": 358
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 358,
                    "end": 360
                },
                "alternate": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 362,
                        "end": 364
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 360,
                        "end": 362
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 364,
                                "end": 365
                            },
                            "flags": 536870944,
                            "start": 364,
                            "end": 365
                        },
                        "flags": 32,
                        "start": 364,
                        "end": 365
                    },
                    "flags": 32,
                    "start": 360,
                    "end": 365
                },
                "flags": 97,
                "start": 349,
                "end": 365
            },
            "flags": 16,
            "start": 349,
            "end": 366
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 366,
                    "end": 368
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 368,
                    "end": 370
                },
                "consequent": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 370,
                        "end": 372
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 373,
                        "end": 374
                    },
                    "flags": 536870944,
                    "start": 370,
                    "end": 375
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 375,
                    "end": 377
                },
                "alternate": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 377,
                        "end": 379
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 380,
                        "end": 381
                    },
                    "flags": 536870944,
                    "start": 377,
                    "end": 382
                },
                "flags": 97,
                "start": 366,
                "end": 382
            },
            "flags": 16,
            "start": 366,
            "end": 383
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 383,
                    "end": 385
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 385,
                    "end": 387
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 387,
                        "end": 389
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 390,
                        "end": 390
                    },
                    "flags": 268435488,
                    "start": 387,
                    "end": 391
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 391,
                    "end": 393
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 393,
                        "end": 395
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 396,
                        "end": 396
                    },
                    "flags": 268435488,
                    "start": 393,
                    "end": 397
                },
                "flags": 97,
                "start": 383,
                "end": 397
            },
            "flags": 16,
            "start": 383,
            "end": 398
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 398,
                    "end": 400
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 400,
                    "end": 402
                },
                "consequent": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 404,
                        "end": 406
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 402,
                        "end": 404
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 407,
                                "end": 407
                            },
                            "flags": 268435488,
                            "start": 406,
                            "end": 408
                        },
                        "flags": 32,
                        "start": 406,
                        "end": 408
                    },
                    "flags": 32,
                    "start": 402,
                    "end": 408
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 408,
                    "end": 410
                },
                "alternate": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 412,
                        "end": 414
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 410,
                        "end": 412
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 415,
                                "end": 415
                            },
                            "flags": 268435488,
                            "start": 414,
                            "end": 416
                        },
                        "flags": 32,
                        "start": 414,
                        "end": 416
                    },
                    "flags": 32,
                    "start": 410,
                    "end": 416
                },
                "flags": 97,
                "start": 398,
                "end": 416
            },
            "flags": 16,
            "start": 398,
            "end": 417
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 417,
                    "end": 419
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 419,
                    "end": 421
                },
                "consequent": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 423,
                        "end": 425
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 421,
                        "end": 423
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 426,
                                "end": 427
                            },
                            "flags": 536870944,
                            "start": 425,
                            "end": 427
                        },
                        "flags": 32,
                        "start": 425,
                        "end": 428
                    },
                    "flags": 32,
                    "start": 421,
                    "end": 428
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 428,
                    "end": 430
                },
                "alternate": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 432,
                        "end": 434
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 430,
                        "end": 432
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 435,
                                "end": 436
                            },
                            "flags": 536870944,
                            "start": 434,
                            "end": 436
                        },
                        "flags": 32,
                        "start": 434,
                        "end": 437
                    },
                    "flags": 32,
                    "start": 430,
                    "end": 437
                },
                "flags": 97,
                "start": 417,
                "end": 437
            },
            "flags": 16,
            "start": 417,
            "end": 438
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 438,
                    "end": 440
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 440,
                    "end": 442
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 442,
                        "end": 444
                    },
                    "operatorToken": {
                        "kind": 34622,
                        "flags": 96,
                        "start": 444,
                        "end": 447
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 447,
                        "end": 449
                    },
                    "flags": 96,
                    "start": 442,
                    "end": 449
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 449,
                    "end": 451
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 451,
                        "end": 453
                    },
                    "operatorToken": {
                        "kind": 34622,
                        "flags": 96,
                        "start": 453,
                        "end": 456
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 456,
                        "end": 458
                    },
                    "flags": 96,
                    "start": 451,
                    "end": 458
                },
                "flags": 97,
                "start": 438,
                "end": 458
            },
            "flags": 16,
            "start": 438,
            "end": 459
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 459,
                    "end": 461
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 461,
                    "end": 463
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 463,
                            "end": 465
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 466,
                            "end": 467
                        },
                        "flags": 96,
                        "start": 463,
                        "end": 467
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 468,
                                    "end": 469
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 469,
                                    "end": 471
                                },
                                "right": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 471,
                                        "end": 473
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 474,
                                        "end": 475
                                    },
                                    "flags": 536870944,
                                    "start": 471,
                                    "end": 476
                                },
                                "flags": 96,
                                "start": 468,
                                "end": 476
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 468,
                        "end": 476
                    },
                    "flags": 268435488,
                    "start": 463,
                    "end": 477
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 477,
                    "end": 479
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 479,
                            "end": 481
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 482,
                            "end": 483
                        },
                        "flags": 96,
                        "start": 479,
                        "end": 483
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 484,
                                    "end": 485
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 485,
                                    "end": 487
                                },
                                "right": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 487,
                                        "end": 489
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 490,
                                        "end": 491
                                    },
                                    "flags": 536870944,
                                    "start": 487,
                                    "end": 492
                                },
                                "flags": 96,
                                "start": 484,
                                "end": 492
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 484,
                        "end": 492
                    },
                    "flags": 268435488,
                    "start": 479,
                    "end": 493
                },
                "flags": 97,
                "start": 459,
                "end": 493
            },
            "flags": 16,
            "start": 459,
            "end": 494
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 494,
                    "end": 497
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 497,
                    "end": 499
                },
                "consequent": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 499,
                        "end": 501
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 501,
                        "end": 502
                    },
                    "flags": 32,
                    "start": 499,
                    "end": 502
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 502,
                    "end": 504
                },
                "alternate": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 504,
                        "end": 506
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 506,
                        "end": 507
                    },
                    "flags": 32,
                    "start": 504,
                    "end": 507
                },
                "flags": 97,
                "start": 494,
                "end": 507
            },
            "flags": 16,
            "start": 494,
            "end": 508
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 508,
                    "end": 510
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 510,
                    "end": 512
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 512,
                        "end": 514
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 515,
                        "end": 515
                    },
                    "flags": 268435488,
                    "start": 512,
                    "end": 516
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 516,
                    "end": 518
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 518,
                        "end": 520
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 521,
                                "end": 522
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 521,
                        "end": 522
                    },
                    "flags": 268435488,
                    "start": 518,
                    "end": 523
                },
                "flags": 97,
                "start": 508,
                "end": 523
            },
            "flags": 16,
            "start": 508,
            "end": 524
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 524,
                    "end": 526
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 526,
                    "end": 528
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 528,
                        "end": 530
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 531,
                                "end": 532
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 531,
                        "end": 532
                    },
                    "flags": 268435488,
                    "start": 528,
                    "end": 533
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 533,
                    "end": 535
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 535,
                        "end": 537
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 538,
                                "end": 539
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 538,
                        "end": 539
                    },
                    "flags": 268435488,
                    "start": 535,
                    "end": 540
                },
                "flags": 97,
                "start": 524,
                "end": 540
            },
            "flags": 16,
            "start": 524,
            "end": 541
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 541,
                    "end": 543
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 543,
                    "end": 545
                },
                "consequent": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 547,
                        "end": 549
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 545,
                        "end": 547
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 549,
                                "end": 550
                            },
                            "flags": 536870944,
                            "start": 549,
                            "end": 550
                        },
                        "flags": 32,
                        "start": 549,
                        "end": 550
                    },
                    "flags": 32,
                    "start": 545,
                    "end": 550
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 550,
                    "end": 552
                },
                "alternate": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 552,
                        "end": 554
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 555,
                        "end": 556
                    },
                    "flags": 96,
                    "start": 552,
                    "end": 556
                },
                "flags": 97,
                "start": 541,
                "end": 556
            },
            "flags": 16,
            "start": 541,
            "end": 557
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 557,
                    "end": 559
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 559,
                    "end": 561
                },
                "consequent": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 563,
                        "end": 565
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 561,
                        "end": 563
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 566,
                                "end": 566
                            },
                            "flags": 268435488,
                            "start": 565,
                            "end": 567
                        },
                        "flags": 32,
                        "start": 565,
                        "end": 567
                    },
                    "flags": 32,
                    "start": 561,
                    "end": 567
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 567,
                    "end": 569
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 569,
                        "end": 571
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 572,
                        "end": 572
                    },
                    "flags": 268435488,
                    "start": 569,
                    "end": 573
                },
                "flags": 97,
                "start": 557,
                "end": 573
            },
            "flags": 16,
            "start": 557,
            "end": 574
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 574,
                    "end": 576
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 576,
                    "end": 578
                },
                "consequent": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 580,
                        "end": 582
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 578,
                        "end": 580
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 583,
                                "end": 584
                            },
                            "flags": 536870944,
                            "start": 582,
                            "end": 584
                        },
                        "flags": 32,
                        "start": 582,
                        "end": 585
                    },
                    "flags": 32,
                    "start": 578,
                    "end": 585
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 585,
                    "end": 587
                },
                "alternate": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 587,
                        "end": 589
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 590,
                        "end": 591
                    },
                    "flags": 536870944,
                    "start": 587,
                    "end": 592
                },
                "flags": 97,
                "start": 574,
                "end": 592
            },
            "flags": 16,
            "start": 574,
            "end": 593
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 593,
                    "end": 595
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 595,
                    "end": 597
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 597,
                        "end": 599
                    },
                    "operatorToken": {
                        "kind": 34622,
                        "flags": 96,
                        "start": 599,
                        "end": 602
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 602,
                        "end": 604
                    },
                    "flags": 96,
                    "start": 597,
                    "end": 604
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 604,
                    "end": 606
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 606,
                        "end": 608
                    },
                    "operatorToken": {
                        "kind": 34623,
                        "flags": 96,
                        "start": 608,
                        "end": 611
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 611,
                        "end": 613
                    },
                    "flags": 96,
                    "start": 606,
                    "end": 613
                },
                "flags": 97,
                "start": 593,
                "end": 613
            },
            "flags": 16,
            "start": 593,
            "end": 614
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 614,
                    "end": 616
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 616,
                    "end": 618
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 618,
                            "end": 620
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 621,
                            "end": 622
                        },
                        "flags": 96,
                        "start": 618,
                        "end": 622
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 623,
                                    "end": 624
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 624,
                                    "end": 626
                                },
                                "right": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 626,
                                        "end": 628
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 629,
                                        "end": 630
                                    },
                                    "flags": 536870944,
                                    "start": 626,
                                    "end": 631
                                },
                                "flags": 96,
                                "start": 623,
                                "end": 631
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 623,
                        "end": 631
                    },
                    "flags": 268435488,
                    "start": 618,
                    "end": 632
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 632,
                    "end": 634
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 634,
                            "end": 636
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 637,
                            "end": 638
                        },
                        "flags": 96,
                        "start": 634,
                        "end": 638
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 639,
                                    "end": 640
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 640,
                                    "end": 642
                                },
                                "right": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 642,
                                        "end": 644
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 645,
                                        "end": 646
                                    },
                                    "flags": 536870944,
                                    "start": 642,
                                    "end": 647
                                },
                                "flags": 96,
                                "start": 639,
                                "end": 647
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 639,
                        "end": 647
                    },
                    "flags": 268435488,
                    "start": 634,
                    "end": 648
                },
                "flags": 97,
                "start": 614,
                "end": 648
            },
            "flags": 16,
            "start": 614,
            "end": 649
        }
    ],
    "isModule": false,
    "source": "a ? b : c ? b : d;\na ? b ? c : d : d;\n\na ? c : (b, c);\na ? (b, c) : c;\na ? c : (b, d);\na ? (b, c) : d;\n\na ? b || c : c;\na ? b || c : d;\na ? b && c : c;\n\na ? c : b && c;\na ? c : b && d;\na ? c : b || c;\n\na = b == null ? c : b;\na = b != null ? b : c;\n\na(b ? 0 : 0);\na(b ? +0 : -0);\na(b ? +0 : 0);\na(b ? -0 : 0);\n\na ? b : b;\n\na ? -b : -b;\na ? b.c : b.c;\na ? b?.c : b?.c;\na ? b[c] : b[c];\na ? b() : b();\na ? b?.() : b?.();\na ? b?.[c] : b?.[c];\na ? b == c : b == c;\na ? b.c(d + e[f]) : b.c(d + e[f]);\n\na ? -b : !b;\na ? b() : b(c);\na ? b(c) : b(d);\na ? b?.c : b.c;\na ? b?.() : b();\na ? b?.[c] : b[c];\na ? b == c : b != c;\na ? b.c(d + e[f]) : b.c(d + e[g]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 649
}
```

### Printed

```javascript

a ? b : c ? b : d;
a ? b ? c : d : d;
a ? c : ( b, c );
a ? ( b, c ) : c;
a ? c : ( b, d );
a ? ( b, c ) : d;
a ? b || c : c;
a ? b || c : d;
a ? b && c : c;
a ? c : b && c;
a ? c : b && d;
a ? c : b || c;
a = b == null ? c : b;
a = b != null ? b : c;
a( b ? 0 : 0 );
a( b ? + 0 : - 0 );
a( b ? + 0 : 0 );
a( b ? - 0 : 0 );
a ? b : b;
a ? - b : - b;
a ? b.c : b.c;
a ? b?.c : b?.c;
a ? b[c] : b[c];
a ? b() : b();
a ? b?.() : b?.();
a ? b?.[c] : b?.[c];
a ? b == c : b == c;
a ? b.c( d + e[f] ) : b.c( d + e[f] );
a ? - b : ! b;
a ? b() : b( c );
a ? b( c ) : b( d );
a ? b?.c : b.c;
a ? b?.() : b();
a ? b?.[c] : b[c];
a ? b == c : b != c;
a ? b.c( d + e[f] ) : b.c( d + e[g] );

```

### Diagnostics

```javascript
✔ No errors
```

