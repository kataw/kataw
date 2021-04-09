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

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1.3754889323622168e+24,
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1.3754889323622168e+24,
                "autofix": 0,
                "flags": 768,
                "start": 25,
                "end": 49
            },
            "autofix": 0,
            "flags": 128,
            "start": 25,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 51,
                "end": 55
            },
            "autofix": 0,
            "flags": 128,
            "start": 51,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 57,
                "end": 61
            },
            "autofix": 0,
            "flags": 128,
            "start": 57,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 63,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 63,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 3,
                "autofix": 0,
                "flags": 768,
                "start": 69,
                "end": 73
            },
            "autofix": 0,
            "flags": 128,
            "start": 69,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 4,
                "autofix": 0,
                "flags": 768,
                "start": 75,
                "end": 79
            },
            "autofix": 0,
            "flags": 128,
            "start": 75,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5,
                "autofix": 0,
                "flags": 768,
                "start": 81,
                "end": 85
            },
            "autofix": 0,
            "flags": 128,
            "start": 81,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 6,
                "autofix": 0,
                "flags": 768,
                "start": 87,
                "end": 91
            },
            "autofix": 0,
            "flags": 128,
            "start": 87,
            "end": 93
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7,
                "autofix": 0,
                "flags": 768,
                "start": 93,
                "end": 97
            },
            "autofix": 0,
            "flags": 128,
            "start": 93,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 8,
                "autofix": 0,
                "flags": 768,
                "start": 99,
                "end": 103
            },
            "autofix": 0,
            "flags": 128,
            "start": 99,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 9,
                "autofix": 0,
                "flags": 768,
                "start": 105,
                "end": 109
            },
            "autofix": 0,
            "flags": 128,
            "start": 105,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 10,
                "autofix": 0,
                "flags": 768,
                "start": 111,
                "end": 115
            },
            "autofix": 0,
            "flags": 128,
            "start": 111,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 10,
                "autofix": 0,
                "flags": 768,
                "start": 117,
                "end": 121
            },
            "autofix": 0,
            "flags": 128,
            "start": 117,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 11,
                "autofix": 0,
                "flags": 768,
                "start": 123,
                "end": 127
            },
            "autofix": 0,
            "flags": 128,
            "start": 123,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 11,
                "autofix": 0,
                "flags": 768,
                "start": 129,
                "end": 133
            },
            "autofix": 0,
            "flags": 128,
            "start": 129,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 12,
                "autofix": 0,
                "flags": 768,
                "start": 135,
                "end": 139
            },
            "autofix": 0,
            "flags": 128,
            "start": 135,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 12,
                "autofix": 0,
                "flags": 768,
                "start": 141,
                "end": 145
            },
            "autofix": 0,
            "flags": 128,
            "start": 141,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 13,
                "autofix": 0,
                "flags": 768,
                "start": 147,
                "end": 151
            },
            "autofix": 0,
            "flags": 128,
            "start": 147,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 13,
                "autofix": 0,
                "flags": 768,
                "start": 153,
                "end": 157
            },
            "autofix": 0,
            "flags": 128,
            "start": 153,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 14,
                "autofix": 0,
                "flags": 768,
                "start": 159,
                "end": 163
            },
            "autofix": 0,
            "flags": 128,
            "start": 159,
            "end": 165
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 14,
                "autofix": 0,
                "flags": 768,
                "start": 165,
                "end": 169
            },
            "autofix": 0,
            "flags": 128,
            "start": 165,
            "end": 171
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 15,
                "autofix": 0,
                "flags": 768,
                "start": 171,
                "end": 175
            },
            "autofix": 0,
            "flags": 128,
            "start": 171,
            "end": 177
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 15,
                "autofix": 0,
                "flags": 768,
                "start": 177,
                "end": 181
            },
            "autofix": 0,
            "flags": 128,
            "start": 177,
            "end": 183
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 183,
                "end": 188
            },
            "autofix": 0,
            "flags": 128,
            "start": 183,
            "end": 190
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 18,
                "autofix": 0,
                "flags": 768,
                "start": 190,
                "end": 195
            },
            "autofix": 0,
            "flags": 128,
            "start": 190,
            "end": 197
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 35,
                "autofix": 0,
                "flags": 768,
                "start": 197,
                "end": 202
            },
            "autofix": 0,
            "flags": 128,
            "start": 197,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 52,
                "autofix": 0,
                "flags": 768,
                "start": 204,
                "end": 209
            },
            "autofix": 0,
            "flags": 128,
            "start": 204,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 69,
                "autofix": 0,
                "flags": 768,
                "start": 211,
                "end": 216
            },
            "autofix": 0,
            "flags": 128,
            "start": 211,
            "end": 218
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 86,
                "autofix": 0,
                "flags": 768,
                "start": 218,
                "end": 223
            },
            "autofix": 0,
            "flags": 128,
            "start": 218,
            "end": 225
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 103,
                "autofix": 0,
                "flags": 768,
                "start": 225,
                "end": 230
            },
            "autofix": 0,
            "flags": 128,
            "start": 225,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 120,
                "autofix": 0,
                "flags": 768,
                "start": 232,
                "end": 237
            },
            "autofix": 0,
            "flags": 128,
            "start": 232,
            "end": 239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 137,
                "autofix": 0,
                "flags": 768,
                "start": 239,
                "end": 244
            },
            "autofix": 0,
            "flags": 128,
            "start": 239,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 154,
                "autofix": 0,
                "flags": 768,
                "start": 246,
                "end": 251
            },
            "autofix": 0,
            "flags": 128,
            "start": 246,
            "end": 253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 171,
                "autofix": 0,
                "flags": 768,
                "start": 253,
                "end": 258
            },
            "autofix": 0,
            "flags": 128,
            "start": 253,
            "end": 260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 172,
                "autofix": 0,
                "flags": 768,
                "start": 260,
                "end": 265
            },
            "autofix": 0,
            "flags": 128,
            "start": 260,
            "end": 267
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 189,
                "autofix": 0,
                "flags": 768,
                "start": 267,
                "end": 272
            },
            "autofix": 0,
            "flags": 128,
            "start": 267,
            "end": 274
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 190,
                "autofix": 0,
                "flags": 768,
                "start": 274,
                "end": 279
            },
            "autofix": 0,
            "flags": 128,
            "start": 274,
            "end": 281
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 207,
                "autofix": 0,
                "flags": 768,
                "start": 281,
                "end": 286
            },
            "autofix": 0,
            "flags": 128,
            "start": 281,
            "end": 288
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 192,
                "autofix": 0,
                "flags": 768,
                "start": 288,
                "end": 293
            },
            "autofix": 0,
            "flags": 128,
            "start": 288,
            "end": 295
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 209,
                "autofix": 0,
                "flags": 768,
                "start": 295,
                "end": 300
            },
            "autofix": 0,
            "flags": 128,
            "start": 295,
            "end": 302
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 210,
                "autofix": 0,
                "flags": 768,
                "start": 302,
                "end": 307
            },
            "autofix": 0,
            "flags": 128,
            "start": 302,
            "end": 309
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 227,
                "autofix": 0,
                "flags": 768,
                "start": 309,
                "end": 314
            },
            "autofix": 0,
            "flags": 128,
            "start": 309,
            "end": 316
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 228,
                "autofix": 0,
                "flags": 768,
                "start": 316,
                "end": 321
            },
            "autofix": 0,
            "flags": 128,
            "start": 316,
            "end": 323
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 245,
                "autofix": 0,
                "flags": 768,
                "start": 323,
                "end": 328
            },
            "autofix": 0,
            "flags": 128,
            "start": 323,
            "end": 330
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 246,
                "autofix": 0,
                "flags": 768,
                "start": 330,
                "end": 335
            },
            "autofix": 0,
            "flags": 128,
            "start": 330,
            "end": 335
        }
    ],
    "isModule": false,
    "text": "0x1234567890abcdefABCEF\n;\n0X1234567890abcdefABCEF\n;\n0x0\n;\n0x1\n;\n0x2\n;\n0x3\n;\n0x4\n;\n0x5\n;\n0x6\n;\n0x7\n;\n0x8\n;\n0x9\n;\n0xa\n;\n0xA\n;\n0xb\n;\n0xB\n;\n0xc\n;\n0xC\n;\n0xd\n;\n0xD\n;\n0xe\n;\n0xE\n;\n0xf\n;\n0xF\n;\n0x01\n;\n0x12\n;\n0x23\n;\n0x34\n;\n0x45\n;\n0x56\n;\n0x67\n;\n0x78\n;\n0x89\n;\n0x9a\n;\n0xab\n;\n0xAc\n;\n0xbd\n;\n0xBe\n;\n0xcf\n;\n0xC0\n;\n0xd1\n;\n0xD2\n;\n0xe3\n;\n0xE4\n;\n0xf5\n;\n0xF6",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 335
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

