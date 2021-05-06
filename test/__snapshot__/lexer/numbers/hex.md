# Kataw parser test case

## Input

`````js
0x1234567890abcdefABCEF
;
0X1234567890abcdefABCEF
;
0x0
;
0x1
;
0x2
;
0x3
;
0x4
;
0x5
;
0x6
;
0x7
;
0x8
;
0x9
;
0xa
;
0xA
;
0xb
;
0xB
;
0xc
;
0xC
;
0xd
;
0xD
;
0xe
;
0xE
;
0xf
;
0xF
;
0x01
;
0x12
;
0x23
;
0x34
;
0x45
;
0x56
;
0x67
;
0x78
;
0x89
;
0x9a
;
0xab
;
0xAc
;
0xbd
;
0xBe
;
0xcf
;
0xC0
;
0xd1
;
0xD2
;
0xe3
;
0xE4
;
0xf5
;
0xF6
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
                "kind": 201392130,
                "text": 1.3754889323622168e+24,
                "rawText": "0x1234567890abcdefABCEF",
                "flags": 1048672,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.3754889323622168e+24,
                "rawText": "0X1234567890abcdefABCEF",
                "flags": 1048673,
                "start": 25,
                "end": 49
            },
            "flags": 16,
            "start": 25,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0x0",
                "flags": 1048673,
                "start": 51,
                "end": 55
            },
            "flags": 16,
            "start": 51,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0x1",
                "flags": 1048673,
                "start": 57,
                "end": 61
            },
            "flags": 16,
            "start": 57,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "0x2",
                "flags": 1048673,
                "start": 63,
                "end": 67
            },
            "flags": 16,
            "start": 63,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "0x3",
                "flags": 1048673,
                "start": 69,
                "end": 73
            },
            "flags": 16,
            "start": 69,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4,
                "rawText": "0x4",
                "flags": 1048673,
                "start": 75,
                "end": 79
            },
            "flags": 16,
            "start": 75,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "0x5",
                "flags": 1048673,
                "start": 81,
                "end": 85
            },
            "flags": 16,
            "start": 81,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 6,
                "rawText": "0x6",
                "flags": 1048673,
                "start": 87,
                "end": 91
            },
            "flags": 16,
            "start": 87,
            "end": 93
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7,
                "rawText": "0x7",
                "flags": 1048673,
                "start": 93,
                "end": 97
            },
            "flags": 16,
            "start": 93,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 8,
                "rawText": "0x8",
                "flags": 1048673,
                "start": 99,
                "end": 103
            },
            "flags": 16,
            "start": 99,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 9,
                "rawText": "0x9",
                "flags": 1048673,
                "start": 105,
                "end": 109
            },
            "flags": 16,
            "start": 105,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "0xa",
                "flags": 1048673,
                "start": 111,
                "end": 115
            },
            "flags": 16,
            "start": 111,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "0xA",
                "flags": 1048673,
                "start": 117,
                "end": 121
            },
            "flags": 16,
            "start": 117,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 11,
                "rawText": "0xb",
                "flags": 1048673,
                "start": 123,
                "end": 127
            },
            "flags": 16,
            "start": 123,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 11,
                "rawText": "0xB",
                "flags": 1048673,
                "start": 129,
                "end": 133
            },
            "flags": 16,
            "start": 129,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 12,
                "rawText": "0xc",
                "flags": 1048673,
                "start": 135,
                "end": 139
            },
            "flags": 16,
            "start": 135,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 12,
                "rawText": "0xC",
                "flags": 1048673,
                "start": 141,
                "end": 145
            },
            "flags": 16,
            "start": 141,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 13,
                "rawText": "0xd",
                "flags": 1048673,
                "start": 147,
                "end": 151
            },
            "flags": 16,
            "start": 147,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 13,
                "rawText": "0xD",
                "flags": 1048673,
                "start": 153,
                "end": 157
            },
            "flags": 16,
            "start": 153,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 14,
                "rawText": "0xe",
                "flags": 1048673,
                "start": 159,
                "end": 163
            },
            "flags": 16,
            "start": 159,
            "end": 165
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 14,
                "rawText": "0xE",
                "flags": 1048673,
                "start": 165,
                "end": 169
            },
            "flags": 16,
            "start": 165,
            "end": 171
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 15,
                "rawText": "0xf",
                "flags": 1048673,
                "start": 171,
                "end": 175
            },
            "flags": 16,
            "start": 171,
            "end": 177
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 15,
                "rawText": "0xF",
                "flags": 1048673,
                "start": 177,
                "end": 181
            },
            "flags": 16,
            "start": 177,
            "end": 183
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0x01",
                "flags": 1048673,
                "start": 183,
                "end": 188
            },
            "flags": 16,
            "start": 183,
            "end": 190
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 18,
                "rawText": "0x12",
                "flags": 1048673,
                "start": 190,
                "end": 195
            },
            "flags": 16,
            "start": 190,
            "end": 197
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 35,
                "rawText": "0x23",
                "flags": 1048673,
                "start": 197,
                "end": 202
            },
            "flags": 16,
            "start": 197,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 52,
                "rawText": "0x34",
                "flags": 1048673,
                "start": 204,
                "end": 209
            },
            "flags": 16,
            "start": 204,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 69,
                "rawText": "0x45",
                "flags": 1048673,
                "start": 211,
                "end": 216
            },
            "flags": 16,
            "start": 211,
            "end": 218
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 86,
                "rawText": "0x56",
                "flags": 1048673,
                "start": 218,
                "end": 223
            },
            "flags": 16,
            "start": 218,
            "end": 225
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 103,
                "rawText": "0x67",
                "flags": 1048673,
                "start": 225,
                "end": 230
            },
            "flags": 16,
            "start": 225,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 120,
                "rawText": "0x78",
                "flags": 1048673,
                "start": 232,
                "end": 237
            },
            "flags": 16,
            "start": 232,
            "end": 239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 137,
                "rawText": "0x89",
                "flags": 1048673,
                "start": 239,
                "end": 244
            },
            "flags": 16,
            "start": 239,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 154,
                "rawText": "0x9a",
                "flags": 1048673,
                "start": 246,
                "end": 251
            },
            "flags": 16,
            "start": 246,
            "end": 253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 171,
                "rawText": "0xab",
                "flags": 1048673,
                "start": 253,
                "end": 258
            },
            "flags": 16,
            "start": 253,
            "end": 260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 172,
                "rawText": "0xAc",
                "flags": 1048673,
                "start": 260,
                "end": 265
            },
            "flags": 16,
            "start": 260,
            "end": 267
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 189,
                "rawText": "0xbd",
                "flags": 1048673,
                "start": 267,
                "end": 272
            },
            "flags": 16,
            "start": 267,
            "end": 274
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 190,
                "rawText": "0xBe",
                "flags": 1048673,
                "start": 274,
                "end": 279
            },
            "flags": 16,
            "start": 274,
            "end": 281
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 207,
                "rawText": "0xcf",
                "flags": 1048673,
                "start": 281,
                "end": 286
            },
            "flags": 16,
            "start": 281,
            "end": 288
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 192,
                "rawText": "0xC0",
                "flags": 1048673,
                "start": 288,
                "end": 293
            },
            "flags": 16,
            "start": 288,
            "end": 295
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 209,
                "rawText": "0xd1",
                "flags": 1048673,
                "start": 295,
                "end": 300
            },
            "flags": 16,
            "start": 295,
            "end": 302
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 210,
                "rawText": "0xD2",
                "flags": 1048673,
                "start": 302,
                "end": 307
            },
            "flags": 16,
            "start": 302,
            "end": 309
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 227,
                "rawText": "0xe3",
                "flags": 1048673,
                "start": 309,
                "end": 314
            },
            "flags": 16,
            "start": 309,
            "end": 316
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 228,
                "rawText": "0xE4",
                "flags": 1048673,
                "start": 316,
                "end": 321
            },
            "flags": 16,
            "start": 316,
            "end": 323
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 245,
                "rawText": "0xf5",
                "flags": 1048673,
                "start": 323,
                "end": 328
            },
            "flags": 16,
            "start": 323,
            "end": 330
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 246,
                "rawText": "0xF6",
                "flags": 1048673,
                "start": 330,
                "end": 335
            },
            "flags": 16,
            "start": 330,
            "end": 335
        }
    ],
    "isModule": false,
    "source": "0x1234567890abcdefABCEF\n;\n0X1234567890abcdefABCEF\n;\n0x0\n;\n0x1\n;\n0x2\n;\n0x3\n;\n0x4\n;\n0x5\n;\n0x6\n;\n0x7\n;\n0x8\n;\n0x9\n;\n0xa\n;\n0xA\n;\n0xb\n;\n0xB\n;\n0xc\n;\n0xC\n;\n0xd\n;\n0xD\n;\n0xe\n;\n0xE\n;\n0xf\n;\n0xF\n;\n0x01\n;\n0x12\n;\n0x23\n;\n0x34\n;\n0x45\n;\n0x56\n;\n0x67\n;\n0x78\n;\n0x89\n;\n0x9a\n;\n0xab\n;\n0xAc\n;\n0xbd\n;\n0xBe\n;\n0xcf\n;\n0xC0\n;\n0xd1\n;\n0xD2\n;\n0xe3\n;\n0xE4\n;\n0xf5\n;\n0xF6",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 335
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

