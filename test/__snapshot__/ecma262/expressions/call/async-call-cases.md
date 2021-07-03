# Kataw parser test case

## Options

`````js
{ jsx: false, allowTypes: true }
`````

## Input

`````js

async((x), y);
async((x));
async((x)[y]);
async((x)[y] = z);
async((x) ? b : c);
async((x) = a ? b : c);
async((x)?b:c);

async(q, (x), y);
async(q, (x));
async(q, (x)[y]);
async(q, (x)[y] = z);
async(q, (x) ? b : c);
async(q, (x) = a ? b : c);
async(q, (x)?b:c);

async(...(x), y);
async(...(x));
async(...(x)[y]);
async(...(x)[y] = z);
async(...(x) ? b : c);
async(...(x) = a ? b : c);
async(...(x)?b:c);

async([q] = y);
async([q] / y);
async([q] ** y);
async([q](x));
async([q] = y / z);
async([q].z = y);

async(a, [q] = y);
async(a, [q] / y);
async(a, [q] ** y);
async(a, [q](x));
async(a, [q] = y / z);
async(a, [q].z = y);

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 6
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 7,
                        "start": 32,
                        "end": 10
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 268435488,
            "start": 0,
            "end": 14
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 14,
            "end": 15
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 15,
                "end": 21
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 23,
                            "end": 24
                        },
                        "flags": 22,
                        "start": 32,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 25
            },
            "flags": 268435488,
            "start": 15,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 26,
            "end": 27
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 27,
                "end": 33
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 130,
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 35,
                                "end": 36
                            },
                            "flags": 34,
                            "start": 32,
                            "end": 37
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 38,
                            "end": 39
                        },
                        "flags": 536870944,
                        "start": 34,
                        "end": 40
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 27,
                "end": 40
            },
            "flags": 268435488,
            "start": 27,
            "end": 41
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 41,
            "end": 42
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 42,
                "end": 48
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 130,
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 50,
                                    "end": 51
                                },
                                "flags": 49,
                                "start": 32,
                                "end": 52
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 53,
                                "end": 54
                            },
                            "flags": 536870944,
                            "start": 49,
                            "end": 55
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 55,
                            "end": 57
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 57,
                            "end": 59
                        },
                        "flags": 32,
                        "start": 49,
                        "end": 59
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 42,
                "end": 59
            },
            "flags": 268435488,
            "start": 42,
            "end": 60
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 60,
            "end": 61
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 61,
                "end": 67
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 69,
                                "end": 70
                            },
                            "flags": 68,
                            "start": 32,
                            "end": 71
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 71,
                            "end": 73
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 73,
                            "end": 75
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 75,
                            "end": 77
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 77,
                            "end": 79
                        },
                        "flags": 100,
                        "start": 68,
                        "end": 79
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 61,
                "end": 79
            },
            "flags": 268435488,
            "start": 61,
            "end": 80
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 80,
            "end": 81
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 81,
                "end": 87
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 89,
                                "end": 90
                            },
                            "flags": 88,
                            "start": 32,
                            "end": 91
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 91,
                            "end": 93
                        },
                        "right": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 93,
                                "end": 95
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 95,
                                "end": 97
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 97,
                                "end": 99
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 99,
                                "end": 101
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 101,
                                "end": 103
                            },
                            "flags": 96,
                            "start": 93,
                            "end": 103
                        },
                        "flags": 32,
                        "start": 88,
                        "end": 103
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 81,
                "end": 103
            },
            "flags": 268435488,
            "start": 81,
            "end": 104
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 104,
            "end": 105
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 105,
                "end": 111
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 113,
                                "end": 114
                            },
                            "flags": 112,
                            "start": 32,
                            "end": 115
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 115,
                            "end": 116
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 116,
                            "end": 117
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 117,
                            "end": 118
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 118,
                            "end": 119
                        },
                        "flags": 112,
                        "start": 112,
                        "end": 119
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 105,
                "end": 119
            },
            "flags": 268435488,
            "start": 105,
            "end": 120
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 120,
            "end": 121
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 121,
                "end": 128
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 129,
                        "end": 130
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 133,
                            "end": 134
                        },
                        "flags": 131,
                        "start": 32,
                        "end": 135
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 136,
                        "end": 138
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 121,
                "end": 138
            },
            "flags": 268435488,
            "start": 121,
            "end": 139
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 139,
            "end": 140
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 140,
                "end": 146
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 147,
                        "end": 148
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 151,
                            "end": 152
                        },
                        "flags": 149,
                        "start": 32,
                        "end": 153
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 140,
                "end": 153
            },
            "flags": 268435488,
            "start": 140,
            "end": 154
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 154,
            "end": 155
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 155,
                "end": 161
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 162,
                        "end": 163
                    },
                    {
                        "kind": 130,
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 166,
                                "end": 167
                            },
                            "flags": 164,
                            "start": 32,
                            "end": 168
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 169,
                            "end": 170
                        },
                        "flags": 536870944,
                        "start": 164,
                        "end": 171
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 155,
                "end": 171
            },
            "flags": 268435488,
            "start": 155,
            "end": 172
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 172,
            "end": 173
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 173,
                "end": 179
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 180,
                        "end": 181
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 130,
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 184,
                                    "end": 185
                                },
                                "flags": 182,
                                "start": 32,
                                "end": 186
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 187,
                                "end": 188
                            },
                            "flags": 536870944,
                            "start": 182,
                            "end": 189
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 189,
                            "end": 191
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 191,
                            "end": 193
                        },
                        "flags": 32,
                        "start": 182,
                        "end": 193
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 173,
                "end": 193
            },
            "flags": 268435488,
            "start": 173,
            "end": 194
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 194,
            "end": 195
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 195,
                "end": 201
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 202,
                        "end": 203
                    },
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 206,
                                "end": 207
                            },
                            "flags": 204,
                            "start": 32,
                            "end": 208
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 208,
                            "end": 210
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 210,
                            "end": 212
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 212,
                            "end": 214
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 214,
                            "end": 216
                        },
                        "flags": 236,
                        "start": 204,
                        "end": 216
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 195,
                "end": 216
            },
            "flags": 268435488,
            "start": 195,
            "end": 217
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 217,
            "end": 218
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 218,
                "end": 224
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 225,
                        "end": 226
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 229,
                                "end": 230
                            },
                            "flags": 227,
                            "start": 32,
                            "end": 231
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 231,
                            "end": 233
                        },
                        "right": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 233,
                                "end": 235
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 235,
                                "end": 237
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 237,
                                "end": 239
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 239,
                                "end": 241
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 241,
                                "end": 243
                            },
                            "flags": 96,
                            "start": 233,
                            "end": 243
                        },
                        "flags": 32,
                        "start": 227,
                        "end": 243
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 218,
                "end": 243
            },
            "flags": 268435488,
            "start": 218,
            "end": 244
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 244,
            "end": 245
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 245,
                "end": 251
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 252,
                        "end": 253
                    },
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 256,
                                "end": 257
                            },
                            "flags": 254,
                            "start": 32,
                            "end": 258
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 258,
                            "end": 259
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 259,
                            "end": 260
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 260,
                            "end": 261
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 261,
                            "end": 262
                        },
                        "flags": 254,
                        "start": 254,
                        "end": 262
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 245,
                "end": 262
            },
            "flags": 268435488,
            "start": 245,
            "end": 263
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 263,
            "end": 264
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 264,
                "end": 271
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 272,
                            "end": 275
                        },
                        "argument": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 276,
                                "end": 277
                            },
                            "flags": 275,
                            "start": 32,
                            "end": 278
                        },
                        "flags": 1073741856,
                        "start": 272,
                        "end": 278
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 279,
                        "end": 281
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 264,
                "end": 264
            },
            "flags": 268435490,
            "start": 264,
            "end": 282
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 282,
            "end": 283
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 283,
                "end": 289
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 290,
                            "end": 293
                        },
                        "argument": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 294,
                                "end": 295
                            },
                            "flags": 293,
                            "start": 32,
                            "end": 296
                        },
                        "flags": 1073741856,
                        "start": 290,
                        "end": 296
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 283,
                "end": 283
            },
            "flags": 268435490,
            "start": 283,
            "end": 297
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 297,
            "end": 298
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 298,
                "end": 304
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 305,
                            "end": 308
                        },
                        "argument": {
                            "kind": 130,
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 309,
                                    "end": 310
                                },
                                "flags": 308,
                                "start": 32,
                                "end": 311
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 312,
                                "end": 313
                            },
                            "flags": 536870944,
                            "start": 308,
                            "end": 314
                        },
                        "flags": 1073741856,
                        "start": 305,
                        "end": 314
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 298,
                "end": 298
            },
            "flags": 268435490,
            "start": 298,
            "end": 315
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 315,
            "end": 316
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 316,
                "end": 322
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 323,
                            "end": 326
                        },
                        "argument": {
                            "kind": 125,
                            "left": {
                                "kind": 130,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 327,
                                        "end": 328
                                    },
                                    "flags": 326,
                                    "start": 32,
                                    "end": 329
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 330,
                                    "end": 331
                                },
                                "flags": 536870944,
                                "start": 326,
                                "end": 332
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 332,
                                "end": 334
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 334,
                                "end": 336
                            },
                            "flags": 32,
                            "start": 323,
                            "end": 336
                        },
                        "flags": 1073741856,
                        "start": 323,
                        "end": 336
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 316,
                "end": 316
            },
            "flags": 268435490,
            "start": 316,
            "end": 337
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 337,
            "end": 338
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 338,
                "end": 344
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 345,
                            "end": 348
                        },
                        "argument": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 349,
                                    "end": 350
                                },
                                "flags": 348,
                                "start": 32,
                                "end": 351
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 351,
                                "end": 353
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 353,
                                "end": 355
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 355,
                                "end": 357
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 357,
                                "end": 359
                            },
                            "flags": 380,
                            "start": 345,
                            "end": 359
                        },
                        "flags": 1073741856,
                        "start": 345,
                        "end": 359
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 338,
                "end": 338
            },
            "flags": 268435490,
            "start": 338,
            "end": 360
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 360,
            "end": 361
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 361,
                "end": 367
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 368,
                            "end": 371
                        },
                        "argument": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 372,
                                    "end": 373
                                },
                                "flags": 371,
                                "start": 32,
                                "end": 374
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 374,
                                "end": 376
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 376,
                                    "end": 378
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 378,
                                    "end": 380
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 380,
                                    "end": 382
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 382,
                                    "end": 384
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 384,
                                    "end": 386
                                },
                                "flags": 96,
                                "start": 376,
                                "end": 386
                            },
                            "flags": 32,
                            "start": 368,
                            "end": 386
                        },
                        "flags": 1073741856,
                        "start": 368,
                        "end": 386
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 361,
                "end": 361
            },
            "flags": 268435490,
            "start": 361,
            "end": 387
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 387,
            "end": 388
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 388,
                "end": 394
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 395,
                            "end": 398
                        },
                        "argument": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 399,
                                    "end": 400
                                },
                                "flags": 398,
                                "start": 32,
                                "end": 401
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 401,
                                "end": 402
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 402,
                                "end": 403
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 403,
                                "end": 404
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 404,
                                "end": 405
                            },
                            "flags": 430,
                            "start": 395,
                            "end": 405
                        },
                        "flags": 1073741856,
                        "start": 395,
                        "end": 405
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 388,
                "end": 388
            },
            "flags": 268435490,
            "start": 388,
            "end": 406
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 406,
            "end": 407
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 407,
                "end": 414
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
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 416,
                                        "end": 417
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 416,
                                "end": 417
                            },
                            "flags": 32,
                            "start": 415,
                            "end": 418
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 418,
                            "end": 420
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 420,
                            "end": 422
                        },
                        "flags": 32,
                        "start": 415,
                        "end": 422
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 407,
                "end": 407
            },
            "flags": 268435490,
            "start": 407,
            "end": 423
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 423,
            "end": 424
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 424,
                "end": 430
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 432,
                                        "end": 433
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 432,
                                "end": 433
                            },
                            "flags": 32,
                            "start": 431,
                            "end": 434
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 434,
                            "end": 436
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 436,
                            "end": 438
                        },
                        "flags": 32,
                        "start": 431,
                        "end": 438
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 424,
                "end": 424
            },
            "flags": 268435490,
            "start": 424,
            "end": 439
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 439,
            "end": 440
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 440,
                "end": 446
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 448,
                                        "end": 449
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 448,
                                "end": 449
                            },
                            "flags": 32,
                            "start": 447,
                            "end": 450
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "start": 450,
                            "end": 453
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 453,
                            "end": 455
                        },
                        "flags": 32,
                        "start": 447,
                        "end": 455
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 440,
                "end": 440
            },
            "flags": 268435490,
            "start": 440,
            "end": 456
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 456,
            "end": 457
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 457,
                "end": 463
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 465,
                                        "end": 466
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 465,
                                "end": 466
                            },
                            "flags": 32,
                            "start": 464,
                            "end": 467
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 468,
                                    "end": 469
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 468,
                            "end": 469
                        },
                        "flags": 268435488,
                        "start": 464,
                        "end": 470
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 457,
                "end": 457
            },
            "flags": 268435490,
            "start": 457,
            "end": 471
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 471,
            "end": 472
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 472,
                "end": 478
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
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 480,
                                        "end": 481
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 480,
                                "end": 481
                            },
                            "flags": 32,
                            "start": 479,
                            "end": 482
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 482,
                            "end": 484
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 484,
                                "end": 486
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "start": 486,
                                "end": 488
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 488,
                                "end": 490
                            },
                            "flags": 96,
                            "start": 484,
                            "end": 490
                        },
                        "flags": 32,
                        "start": 479,
                        "end": 490
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 472,
                "end": 472
            },
            "flags": 268435490,
            "start": 472,
            "end": 491
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 491,
            "end": 492
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 492,
                "end": 498
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 129,
                            "member": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 500,
                                            "end": 501
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 500,
                                    "end": 501
                                },
                                "flags": 32,
                                "start": 499,
                                "end": 502
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 503,
                                "end": 504
                            },
                            "flags": 32,
                            "start": 499,
                            "end": 504
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 504,
                            "end": 506
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 506,
                            "end": 508
                        },
                        "flags": 32,
                        "start": 499,
                        "end": 508
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 492,
                "end": 492
            },
            "flags": 268435490,
            "start": 492,
            "end": 509
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 509,
            "end": 510
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 510,
                "end": 517
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 518,
                        "end": 519
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 522,
                                        "end": 523
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 522,
                                "end": 523
                            },
                            "flags": 32,
                            "start": 520,
                            "end": 524
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 524,
                            "end": 526
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 526,
                            "end": 528
                        },
                        "flags": 32,
                        "start": 520,
                        "end": 528
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 510,
                "end": 510
            },
            "flags": 268435490,
            "start": 510,
            "end": 529
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 529,
            "end": 530
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 530,
                "end": 536
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 537,
                        "end": 538
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 541,
                                        "end": 542
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 541,
                                "end": 542
                            },
                            "flags": 32,
                            "start": 539,
                            "end": 543
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 543,
                            "end": 545
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 545,
                            "end": 547
                        },
                        "flags": 32,
                        "start": 539,
                        "end": 547
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 530,
                "end": 530
            },
            "flags": 268435490,
            "start": 530,
            "end": 548
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 548,
            "end": 549
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 549,
                "end": 555
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 556,
                        "end": 557
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 560,
                                        "end": 561
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 560,
                                "end": 561
                            },
                            "flags": 32,
                            "start": 558,
                            "end": 562
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "start": 562,
                            "end": 565
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 565,
                            "end": 567
                        },
                        "flags": 32,
                        "start": 558,
                        "end": 567
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 549,
                "end": 549
            },
            "flags": 268435490,
            "start": 549,
            "end": 568
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 568,
            "end": 569
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 569,
                "end": 575
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 576,
                        "end": 577
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 580,
                                        "end": 581
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 580,
                                "end": 581
                            },
                            "flags": 32,
                            "start": 578,
                            "end": 582
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 583,
                                    "end": 584
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 583,
                            "end": 584
                        },
                        "flags": 268435488,
                        "start": 578,
                        "end": 585
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 569,
                "end": 569
            },
            "flags": 268435490,
            "start": 569,
            "end": 586
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 586,
            "end": 587
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 587,
                "end": 593
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 594,
                        "end": 595
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 598,
                                        "end": 599
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 598,
                                "end": 599
                            },
                            "flags": 32,
                            "start": 596,
                            "end": 600
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 600,
                            "end": 602
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 602,
                                "end": 604
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "start": 604,
                                "end": 606
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 606,
                                "end": 608
                            },
                            "flags": 96,
                            "start": 602,
                            "end": 608
                        },
                        "flags": 32,
                        "start": 596,
                        "end": 608
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 587,
                "end": 587
            },
            "flags": 268435490,
            "start": 587,
            "end": 609
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 609,
            "end": 610
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 610,
                "end": 616
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 617,
                        "end": 618
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 129,
                            "member": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 621,
                                            "end": 622
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 621,
                                    "end": 622
                                },
                                "flags": 32,
                                "start": 619,
                                "end": 623
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 624,
                                "end": 625
                            },
                            "flags": 32,
                            "start": 619,
                            "end": 625
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 625,
                            "end": 627
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 627,
                            "end": 629
                        },
                        "flags": 32,
                        "start": 619,
                        "end": 629
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 610,
                "end": 610
            },
            "flags": 268435490,
            "start": 610,
            "end": 630
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 630,
            "end": 631
        }
    ],
    "isModule": false,
    "source": "\nasync((x), y);\nasync((x));\nasync((x)[y]);\nasync((x)[y] = z);\nasync((x) ? b : c);\nasync((x) = a ? b : c);\nasync((x)?b:c);\n\nasync(q, (x), y);\nasync(q, (x));\nasync(q, (x)[y]);\nasync(q, (x)[y] = z);\nasync(q, (x) ? b : c);\nasync(q, (x) = a ? b : c);\nasync(q, (x)?b:c);\n\nasync(...(x), y);\nasync(...(x));\nasync(...(x)[y]);\nasync(...(x)[y] = z);\nasync(...(x) ? b : c);\nasync(...(x) = a ? b : c);\nasync(...(x)?b:c);\n\nasync([q] = y);\nasync([q] / y);\nasync([q] ** y);\nasync([q](x));\nasync([q] = y / z);\nasync([q].z = y);\n\nasync(a, [q] = y);\nasync(a, [q] / y);\nasync(a, [q] ** y);\nasync(a, [q](x));\nasync(a, [q] = y / z);\nasync(a, [q].z = y);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 632
}
```

### Printed

```javascript

async((x), y)
;
async((x))
;
async((x)[y])
;
async((x)[y] = z)
;
async( ? b : c)
;
async((x) = a ? b : c)
;
async((x) ? b : c)
;
async(q, (x), y)
;
async(q, (x))
;
async(q, (x)[y])
;
async(q, (x)[y] = z)
;
async(q,  ? b : c)
;
async(q, (x) = a ? b : c)
;
async(q, (x) ? b : c)
;
async(...(x), y)
;
async(...(x))
;
async(...(x)[y])
;
async(...[y] = z)
;
async(... ? b : c)
;
async(...(x) = a ? b : c)
;
async(... ? b : c)
;
async([q,] = y)
;
async([q,] / y)
;
async([q,] ** y)
;
async([q,](x))
;
async([q,] = y / z)
;
async([q,].z = y)
;
async(a, [q,] = y)
;
async(a, [q,] / y)
;
async(a, [q,] ** y)
;
async(a, [q,](x))
;
async(a, [q,] = y / z)
;
async(a, [q,].z = y)
;

```

### Diagnostics

```javascript
✔ No errors
```

