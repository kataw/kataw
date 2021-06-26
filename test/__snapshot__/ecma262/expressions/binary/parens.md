# Kataw parser test case

## Input

`````js
const result = (a + b) >>> 1;
var sizeIndex = ((index - 1) >>> level) & MASK;
var from = offset > left ? 0 : (left - offset) >> level;
var to = ((right - offset) >> level) + 1;
if (rawIndex < 1 << (list._level + SHIFT)) {}
var res = size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
sign = 1 - (2 * (b[3] >> 7));
exponent = (((b[3] << 1) & 0xff) | (b[2] >> 7)) - 127;
mantissa = ((b[2] & 0x7f) << 16) | (b[1] << 8) | b[0];

2 / 3 * 10 / 2 + 2;
const rotateX = ((RANGE / rect.height) * refY - RANGE / 2) * getXMultiplication(rect.width);
const rotateY = ((RANGE / rect.width) * refX - RANGE / 2) * getYMultiplication(rect.width);

a % 10 - 5;
a * b % 10;
a % 10 > 5;
a % 10 == 0;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "start": 5,
                            "end": 12
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 22
                            },
                            "operatorToken": {
                                "kind": 35142,
                                "flags": 96,
                                "start": 22,
                                "end": 26
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 28
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 28
            },
            "flags": 33554448,
            "start": 0,
            "end": 29
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 29,
                "end": 33
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "sizeIndex",
                            "rawText": "sizeIndex",
                            "flags": 96,
                            "start": 33,
                            "end": 43
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "index",
                                                "rawText": "index",
                                                "flags": 96,
                                                "start": 48,
                                                "end": 53
                                            },
                                            "operatorToken": {
                                                "kind": 134318643,
                                                "flags": 96,
                                                "start": 53,
                                                "end": 55
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 57
                                        },
                                        "flags": 32,
                                        "start": 47,
                                        "end": 58
                                    },
                                    "operatorToken": {
                                        "kind": 35142,
                                        "flags": 96,
                                        "start": 58,
                                        "end": 62
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "level",
                                        "rawText": "level",
                                        "flags": 96,
                                        "start": 62,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "start": 47,
                                    "end": 68
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 69
                            },
                            "operatorToken": {
                                "kind": 134252103,
                                "flags": 96,
                                "start": 69,
                                "end": 71
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "MASK",
                                "rawText": "MASK",
                                "flags": 96,
                                "start": 71,
                                "end": 76
                            },
                            "flags": 32,
                            "start": 45,
                            "end": 76
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 76
            },
            "flags": 16,
            "start": 29,
            "end": 77
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 77,
                "end": 81
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "from",
                            "rawText": "from",
                            "flags": 96,
                            "start": 81,
                            "end": 86
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "offset",
                                    "rawText": "offset",
                                    "flags": 96,
                                    "start": 88,
                                    "end": 95
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 96,
                                    "start": 95,
                                    "end": 97
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "left",
                                    "rawText": "left",
                                    "flags": 96,
                                    "start": 97,
                                    "end": 102
                                },
                                "flags": 32,
                                "start": 88,
                                "end": 102
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 102,
                                "end": 104
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 104,
                                "end": 106
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 106,
                                "end": 108
                            },
                            "alternate": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "left",
                                            "rawText": "left",
                                            "flags": 96,
                                            "start": 110,
                                            "end": 114
                                        },
                                        "operatorToken": {
                                            "kind": 134318643,
                                            "flags": 96,
                                            "start": 114,
                                            "end": 116
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "offset",
                                            "rawText": "offset",
                                            "flags": 96,
                                            "start": 116,
                                            "end": 123
                                        },
                                        "flags": 32,
                                        "start": 108,
                                        "end": 123
                                    },
                                    "flags": 32,
                                    "start": 108,
                                    "end": 124
                                },
                                "operatorToken": {
                                    "kind": 35141,
                                    "flags": 96,
                                    "start": 124,
                                    "end": 127
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "level",
                                    "rawText": "level",
                                    "flags": 96,
                                    "start": 127,
                                    "end": 133
                                },
                                "flags": 32,
                                "start": 108,
                                "end": 133
                            },
                            "flags": 32,
                            "start": 88,
                            "end": 133
                        },
                        "flags": 16,
                        "start": 81,
                        "end": 133
                    }
                ],
                "flags": 16,
                "start": 81,
                "end": 133
            },
            "flags": 16,
            "start": 77,
            "end": 134
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 134,
                "end": 138
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "to",
                            "rawText": "to",
                            "flags": 96,
                            "start": 138,
                            "end": 141
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "right",
                                                "rawText": "right",
                                                "flags": 96,
                                                "start": 146,
                                                "end": 151
                                            },
                                            "operatorToken": {
                                                "kind": 134318643,
                                                "flags": 96,
                                                "start": 151,
                                                "end": 153
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "offset",
                                                "rawText": "offset",
                                                "flags": 96,
                                                "start": 153,
                                                "end": 160
                                            },
                                            "flags": 32,
                                            "start": 145,
                                            "end": 160
                                        },
                                        "flags": 32,
                                        "start": 145,
                                        "end": 161
                                    },
                                    "operatorToken": {
                                        "kind": 35141,
                                        "flags": 96,
                                        "start": 161,
                                        "end": 164
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "level",
                                        "rawText": "level",
                                        "flags": 96,
                                        "start": 164,
                                        "end": 170
                                    },
                                    "flags": 32,
                                    "start": 145,
                                    "end": 170
                                },
                                "flags": 32,
                                "start": 143,
                                "end": 171
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 171,
                                "end": 173
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 173,
                                "end": 175
                            },
                            "flags": 32,
                            "start": 143,
                            "end": 175
                        },
                        "flags": 16,
                        "start": 138,
                        "end": 175
                    }
                ],
                "flags": 16,
                "start": 138,
                "end": 175
            },
            "flags": 16,
            "start": 134,
            "end": 176
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 176,
                "end": 179
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "rawIndex",
                    "rawText": "rawIndex",
                    "flags": 96,
                    "start": 181,
                    "end": 189
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "start": 189,
                    "end": 191
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 191,
                        "end": 193
                    },
                    "operatorToken": {
                        "kind": 35140,
                        "flags": 96,
                        "start": 193,
                        "end": 196
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "list",
                                    "rawText": "list",
                                    "flags": 96,
                                    "start": 198,
                                    "end": 202
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "_level",
                                    "rawText": "_level",
                                    "flags": 96,
                                    "start": 203,
                                    "end": 209
                                },
                                "flags": 96,
                                "start": 196,
                                "end": 209
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 209,
                                "end": 211
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "SHIFT",
                                "rawText": "SHIFT",
                                "flags": 96,
                                "start": 211,
                                "end": 217
                            },
                            "flags": 32,
                            "start": 196,
                            "end": 217
                        },
                        "flags": 32,
                        "start": 196,
                        "end": 218
                    },
                    "flags": 32,
                    "start": 193,
                    "end": 218
                },
                "flags": 32,
                "start": 181,
                "end": 218
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 221,
                    "end": 221
                },
                "flags": 16,
                "start": 219,
                "end": 222
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 176,
            "end": 222
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 222,
                "end": 226
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "res",
                            "rawText": "res",
                            "flags": 96,
                            "start": 226,
                            "end": 230
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "size",
                                    "rawText": "size",
                                    "flags": 96,
                                    "start": 232,
                                    "end": 237
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 237,
                                    "end": 239
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "SIZE",
                                    "rawText": "SIZE",
                                    "flags": 96,
                                    "start": 239,
                                    "end": 244
                                },
                                "flags": 32,
                                "start": 232,
                                "end": 244
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 244,
                                "end": 246
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 246,
                                "end": 248
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 248,
                                "end": 250
                            },
                            "alternate": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "size",
                                                        "rawText": "size",
                                                        "flags": 96,
                                                        "start": 254,
                                                        "end": 258
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134318643,
                                                        "flags": 96,
                                                        "start": 258,
                                                        "end": 260
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 260,
                                                        "end": 262
                                                    },
                                                    "flags": 32,
                                                    "start": 253,
                                                    "end": 262
                                                },
                                                "flags": 32,
                                                "start": 253,
                                                "end": 263
                                            },
                                            "operatorToken": {
                                                "kind": 35142,
                                                "flags": 96,
                                                "start": 263,
                                                "end": 267
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "SHIFT",
                                                "rawText": "SHIFT",
                                                "flags": 96,
                                                "start": 267,
                                                "end": 273
                                            },
                                            "flags": 32,
                                            "start": 253,
                                            "end": 273
                                        },
                                        "flags": 32,
                                        "start": 252,
                                        "end": 274
                                    },
                                    "operatorToken": {
                                        "kind": 35140,
                                        "flags": 96,
                                        "start": 274,
                                        "end": 277
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "SHIFT",
                                        "rawText": "SHIFT",
                                        "flags": 96,
                                        "start": 277,
                                        "end": 283
                                    },
                                    "flags": 32,
                                    "start": 252,
                                    "end": 283
                                },
                                "flags": 32,
                                "start": 250,
                                "end": 284
                            },
                            "flags": 32,
                            "start": 232,
                            "end": 284
                        },
                        "flags": 16,
                        "start": 226,
                        "end": 284
                    }
                ],
                "flags": 16,
                "start": 226,
                "end": 284
            },
            "flags": 16,
            "start": 222,
            "end": 285
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "sign",
                    "rawText": "sign",
                    "flags": 96,
                    "start": 285,
                    "end": 290
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 290,
                    "end": 292
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 292,
                        "end": 294
                    },
                    "operatorToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 294,
                        "end": 296
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 298,
                                "end": 299
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 299,
                                "end": 301
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 303,
                                            "end": 304
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 305,
                                            "end": 306
                                        },
                                        "flags": 536870944,
                                        "start": 301,
                                        "end": 307
                                    },
                                    "operatorToken": {
                                        "kind": 35141,
                                        "flags": 96,
                                        "start": 307,
                                        "end": 310
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 7,
                                        "rawText": "7",
                                        "flags": 96,
                                        "start": 310,
                                        "end": 312
                                    },
                                    "flags": 32,
                                    "start": 301,
                                    "end": 312
                                },
                                "flags": 32,
                                "start": 301,
                                "end": 313
                            },
                            "flags": 32,
                            "start": 298,
                            "end": 313
                        },
                        "flags": 32,
                        "start": 296,
                        "end": 314
                    },
                    "flags": 32,
                    "start": 292,
                    "end": 314
                },
                "flags": 32,
                "start": 285,
                "end": 314
            },
            "flags": 16,
            "start": 285,
            "end": 315
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "exponent",
                    "rawText": "exponent",
                    "flags": 96,
                    "start": 315,
                    "end": 324
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 324,
                    "end": 326
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 330,
                                                    "end": 331
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "start": 332,
                                                    "end": 333
                                                },
                                                "flags": 536870944,
                                                "start": 329,
                                                "end": 334
                                            },
                                            "operatorToken": {
                                                "kind": 35140,
                                                "flags": 96,
                                                "start": 334,
                                                "end": 337
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 337,
                                                "end": 339
                                            },
                                            "flags": 32,
                                            "start": 329,
                                            "end": 339
                                        },
                                        "flags": 32,
                                        "start": 329,
                                        "end": 340
                                    },
                                    "operatorToken": {
                                        "kind": 134252103,
                                        "flags": 96,
                                        "start": 340,
                                        "end": 342
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 255,
                                        "rawText": "0xff",
                                        "flags": 1048672,
                                        "start": 342,
                                        "end": 347
                                    },
                                    "flags": 32,
                                    "start": 329,
                                    "end": 347
                                },
                                "flags": 32,
                                "start": 328,
                                "end": 348
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 96,
                                "start": 348,
                                "end": 350
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 352,
                                            "end": 353
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 354,
                                            "end": 355
                                        },
                                        "flags": 536870944,
                                        "start": 350,
                                        "end": 356
                                    },
                                    "operatorToken": {
                                        "kind": 35141,
                                        "flags": 96,
                                        "start": 356,
                                        "end": 359
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 7,
                                        "rawText": "7",
                                        "flags": 96,
                                        "start": 359,
                                        "end": 361
                                    },
                                    "flags": 32,
                                    "start": 350,
                                    "end": 361
                                },
                                "flags": 32,
                                "start": 350,
                                "end": 362
                            },
                            "flags": 32,
                            "start": 328,
                            "end": 362
                        },
                        "flags": 32,
                        "start": 326,
                        "end": 363
                    },
                    "operatorToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 363,
                        "end": 365
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 127,
                        "rawText": "127",
                        "flags": 96,
                        "start": 365,
                        "end": 369
                    },
                    "flags": 32,
                    "start": 326,
                    "end": 369
                },
                "flags": 32,
                "start": 315,
                "end": 369
            },
            "flags": 16,
            "start": 315,
            "end": 370
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "mantissa",
                    "rawText": "mantissa",
                    "flags": 96,
                    "start": 370,
                    "end": 379
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 379,
                    "end": 381
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 384,
                                                "end": 385
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 386,
                                                "end": 387
                                            },
                                            "flags": 536870944,
                                            "start": 383,
                                            "end": 388
                                        },
                                        "operatorToken": {
                                            "kind": 134252103,
                                            "flags": 96,
                                            "start": 388,
                                            "end": 390
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 127,
                                            "rawText": "0x7f",
                                            "flags": 1048672,
                                            "start": 390,
                                            "end": 395
                                        },
                                        "flags": 32,
                                        "start": 383,
                                        "end": 395
                                    },
                                    "flags": 32,
                                    "start": 383,
                                    "end": 396
                                },
                                "operatorToken": {
                                    "kind": 35140,
                                    "flags": 96,
                                    "start": 396,
                                    "end": 399
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 16,
                                    "rawText": "16",
                                    "flags": 96,
                                    "start": 399,
                                    "end": 402
                                },
                                "flags": 32,
                                "start": 383,
                                "end": 402
                            },
                            "flags": 32,
                            "start": 381,
                            "end": 403
                        },
                        "operatorToken": {
                            "kind": 134251592,
                            "flags": 96,
                            "start": 403,
                            "end": 405
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 407,
                                        "end": 408
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 409,
                                        "end": 410
                                    },
                                    "flags": 536870944,
                                    "start": 405,
                                    "end": 411
                                },
                                "operatorToken": {
                                    "kind": 35140,
                                    "flags": 96,
                                    "start": 411,
                                    "end": 414
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 8,
                                    "rawText": "8",
                                    "flags": 96,
                                    "start": 414,
                                    "end": 416
                                },
                                "flags": 32,
                                "start": 405,
                                "end": 416
                            },
                            "flags": 32,
                            "start": 405,
                            "end": 417
                        },
                        "flags": 32,
                        "start": 381,
                        "end": 417
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "start": 417,
                        "end": 419
                    },
                    "right": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 419,
                            "end": 421
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 422,
                            "end": 423
                        },
                        "flags": 536870944,
                        "start": 419,
                        "end": 424
                    },
                    "flags": 32,
                    "start": 381,
                    "end": 424
                },
                "flags": 32,
                "start": 370,
                "end": 424
            },
            "flags": 16,
            "start": 370,
            "end": 425
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 97,
                            "start": 425,
                            "end": 428
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 428,
                            "end": 430
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 430,
                            "end": 432
                        },
                        "flags": 32,
                        "start": 425,
                        "end": 432
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "start": 432,
                        "end": 434
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "start": 434,
                            "end": 437
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 437,
                            "end": 439
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 439,
                            "end": 441
                        },
                        "flags": 32,
                        "start": 437,
                        "end": 441
                    },
                    "flags": 32,
                    "start": 425,
                    "end": 441
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 441,
                    "end": 443
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 443,
                    "end": 445
                },
                "flags": 32,
                "start": 425,
                "end": 445
            },
            "flags": 16,
            "start": 425,
            "end": 446
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 446,
                "end": 452
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "rotateX",
                            "rawText": "rotateX",
                            "flags": 96,
                            "start": 452,
                            "end": 460
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "RANGE",
                                                "rawText": "RANGE",
                                                "flags": 96,
                                                "start": 465,
                                                "end": 470
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 96,
                                                "start": 470,
                                                "end": 472
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "rect",
                                                    "rawText": "rect",
                                                    "flags": 96,
                                                    "start": 472,
                                                    "end": 477
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "height",
                                                    "rawText": "height",
                                                    "flags": 96,
                                                    "start": 478,
                                                    "end": 484
                                                },
                                                "flags": 96,
                                                "start": 472,
                                                "end": 484
                                            },
                                            "flags": 32,
                                            "start": 464,
                                            "end": 484
                                        },
                                        "flags": 32,
                                        "start": 464,
                                        "end": 485
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "start": 485,
                                        "end": 487
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "refY",
                                            "rawText": "refY",
                                            "flags": 96,
                                            "start": 487,
                                            "end": 492
                                        },
                                        "operatorToken": {
                                            "kind": 134318643,
                                            "flags": 96,
                                            "start": 492,
                                            "end": 494
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "RANGE",
                                                "rawText": "RANGE",
                                                "flags": 96,
                                                "start": 494,
                                                "end": 500
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 96,
                                                "start": 500,
                                                "end": 502
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 502,
                                                "end": 504
                                            },
                                            "flags": 32,
                                            "start": 500,
                                            "end": 504
                                        },
                                        "flags": 32,
                                        "start": 492,
                                        "end": 504
                                    },
                                    "flags": 32,
                                    "start": 464,
                                    "end": 504
                                },
                                "flags": 32,
                                "start": 462,
                                "end": 505
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 505,
                                "end": 507
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "getXMultiplication",
                                    "rawText": "getXMultiplication",
                                    "flags": 96,
                                    "start": 507,
                                    "end": 526
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "rect",
                                                "rawText": "rect",
                                                "flags": 96,
                                                "start": 527,
                                                "end": 531
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "width",
                                                "rawText": "width",
                                                "flags": 96,
                                                "start": 532,
                                                "end": 537
                                            },
                                            "flags": 96,
                                            "start": 527,
                                            "end": 537
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 527,
                                    "end": 537
                                },
                                "flags": 268435488,
                                "start": 507,
                                "end": 538
                            },
                            "flags": 32,
                            "start": 462,
                            "end": 538
                        },
                        "flags": 16,
                        "start": 452,
                        "end": 538
                    }
                ],
                "flags": 16777232,
                "start": 452,
                "end": 538
            },
            "flags": 33554448,
            "start": 446,
            "end": 539
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 539,
                "end": 545
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "rotateY",
                            "rawText": "rotateY",
                            "flags": 96,
                            "start": 545,
                            "end": 553
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "RANGE",
                                                "rawText": "RANGE",
                                                "flags": 96,
                                                "start": 558,
                                                "end": 563
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 96,
                                                "start": 563,
                                                "end": 565
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "rect",
                                                    "rawText": "rect",
                                                    "flags": 96,
                                                    "start": 565,
                                                    "end": 570
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "width",
                                                    "rawText": "width",
                                                    "flags": 96,
                                                    "start": 571,
                                                    "end": 576
                                                },
                                                "flags": 96,
                                                "start": 565,
                                                "end": 576
                                            },
                                            "flags": 32,
                                            "start": 557,
                                            "end": 576
                                        },
                                        "flags": 32,
                                        "start": 557,
                                        "end": 577
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "start": 577,
                                        "end": 579
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "refX",
                                            "rawText": "refX",
                                            "flags": 96,
                                            "start": 579,
                                            "end": 584
                                        },
                                        "operatorToken": {
                                            "kind": 134318643,
                                            "flags": 96,
                                            "start": 584,
                                            "end": 586
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "RANGE",
                                                "rawText": "RANGE",
                                                "flags": 96,
                                                "start": 586,
                                                "end": 592
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 96,
                                                "start": 592,
                                                "end": 594
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 594,
                                                "end": 596
                                            },
                                            "flags": 32,
                                            "start": 592,
                                            "end": 596
                                        },
                                        "flags": 32,
                                        "start": 584,
                                        "end": 596
                                    },
                                    "flags": 32,
                                    "start": 557,
                                    "end": 596
                                },
                                "flags": 32,
                                "start": 555,
                                "end": 597
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 597,
                                "end": 599
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "getYMultiplication",
                                    "rawText": "getYMultiplication",
                                    "flags": 96,
                                    "start": 599,
                                    "end": 618
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "rect",
                                                "rawText": "rect",
                                                "flags": 96,
                                                "start": 619,
                                                "end": 623
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "width",
                                                "rawText": "width",
                                                "flags": 96,
                                                "start": 624,
                                                "end": 629
                                            },
                                            "flags": 96,
                                            "start": 619,
                                            "end": 629
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 619,
                                    "end": 629
                                },
                                "flags": 268435488,
                                "start": 599,
                                "end": 630
                            },
                            "flags": 32,
                            "start": 555,
                            "end": 630
                        },
                        "flags": 16,
                        "start": 545,
                        "end": 630
                    }
                ],
                "flags": 16777232,
                "start": 545,
                "end": 630
            },
            "flags": 33554448,
            "start": 539,
            "end": 631
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 631,
                        "end": 634
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 634,
                        "end": 636
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "start": 636,
                        "end": 639
                    },
                    "flags": 32,
                    "start": 631,
                    "end": 639
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "start": 639,
                    "end": 641
                },
                "right": {
                    "kind": 201392130,
                    "text": 5,
                    "rawText": "5",
                    "flags": 96,
                    "start": 641,
                    "end": 643
                },
                "flags": 32,
                "start": 631,
                "end": 643
            },
            "flags": 16,
            "start": 631,
            "end": 644
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 644,
                    "end": 646
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "start": 646,
                    "end": 648
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 648,
                        "end": 650
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 650,
                        "end": 652
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "start": 652,
                        "end": 655
                    },
                    "flags": 32,
                    "start": 650,
                    "end": 655
                },
                "flags": 32,
                "start": 644,
                "end": 655
            },
            "flags": 16,
            "start": 644,
            "end": 656
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 656,
                        "end": 658
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 658,
                        "end": 660
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "start": 660,
                        "end": 663
                    },
                    "flags": 32,
                    "start": 656,
                    "end": 663
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 663,
                    "end": 665
                },
                "right": {
                    "kind": 201392130,
                    "text": 5,
                    "rawText": "5",
                    "flags": 96,
                    "start": 665,
                    "end": 667
                },
                "flags": 32,
                "start": 656,
                "end": 667
            },
            "flags": 16,
            "start": 656,
            "end": 668
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 668,
                        "end": 670
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 670,
                        "end": 672
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "start": 672,
                        "end": 675
                    },
                    "flags": 32,
                    "start": 668,
                    "end": 675
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "start": 675,
                    "end": 678
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 678,
                    "end": 680
                },
                "flags": 32,
                "start": 668,
                "end": 680
            },
            "flags": 16,
            "start": 668,
            "end": 681
        }
    ],
    "isModule": false,
    "source": "const result = (a + b) >>> 1;\nvar sizeIndex = ((index - 1) >>> level) & MASK;\nvar from = offset > left ? 0 : (left - offset) >> level;\nvar to = ((right - offset) >> level) + 1;\nif (rawIndex < 1 << (list._level + SHIFT)) {}\nvar res = size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);\nsign = 1 - (2 * (b[3] >> 7));\nexponent = (((b[3] << 1) & 0xff) | (b[2] >> 7)) - 127;\nmantissa = ((b[2] & 0x7f) << 16) | (b[1] << 8) | b[0];\n\n2 / 3 * 10 / 2 + 2;\nconst rotateX = ((RANGE / rect.height) * refY - RANGE / 2) * getXMultiplication(rect.width);\nconst rotateY = ((RANGE / rect.width) * refX - RANGE / 2) * getYMultiplication(rect.width);\n\na % 10 - 5;\na * b % 10;\na % 10 > 5;\na % 10 == 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 681
}
```

### Printed

```javascript

const result = (a + b) >>> 1;
var sizeIndex = ((index - 1) >>> level) & MASK;
var from = offset > left ? 0 : (left - offset) >> level;
var to = ((right - offset) >> level) + 1;
if (rawIndex  < 1 << (list._level + SHIFT)) {
  }
var res = size  < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
sign = 1 - (2 * (b[3] >> 7));
exponent = (((b[3] << 1) & 0xff) | (b[2] >> 7)) - 127;
mantissa = ((b[2] & 0x7f) << 16) | (b[1] << 8) | b[0];
2 / 3 * 10 / 2 + 2;
const rotateX =
  ((RANGE / rect.height) * refY - RANGE / 2) * getXMultiplication(rect.width);
const rotateY =
  ((RANGE / rect.width) * refX - RANGE / 2) * getYMultiplication(rect.width);
a % 10 - 5;
a * b % 10;
a % 10 > 5;
a % 10 == 0;
```

### Diagnostics

```javascript
✔ No errors
```

