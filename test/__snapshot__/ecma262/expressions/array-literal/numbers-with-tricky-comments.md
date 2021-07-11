# Kataw parser test case

## Input

`````js
const lazyCatererNumbers =  [1, 2, 4, 7, 11, 16, 22, 29, 37, 46,
56, 67, 79, 92, 106, 121, 137, 154, 172, 191, 211, 232, 254, 277, 301, 326, 352, 379, 407, 436, 466, /*block*/
// line
497, 529, 562, 596, 631, 667, 704, 742, 781,
821, 862, 904, 947, 991, 1036, 1082, 1129, 1177, 1226,
// line 2
1276, 1327, 1379];
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
                            "text": "lazyCatererNumbers",
                            "rawText": "lazyCatererNumbers",
                            "flags": 96,
                            "start": 5,
                            "end": 24
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 30
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 33
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 7,
                                        "rawText": "7",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 39
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 11,
                                        "rawText": "11",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 43
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 16,
                                        "rawText": "16",
                                        "flags": 96,
                                        "start": 44,
                                        "end": 47
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 22,
                                        "rawText": "22",
                                        "flags": 96,
                                        "start": 48,
                                        "end": 51
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 29,
                                        "rawText": "29",
                                        "flags": 96,
                                        "start": 52,
                                        "end": 55
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 96,
                                        "start": 56,
                                        "end": 59
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 46,
                                        "rawText": "46",
                                        "flags": 96,
                                        "start": 60,
                                        "end": 63
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 56,
                                        "rawText": "56",
                                        "flags": 97,
                                        "start": 64,
                                        "end": 67
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 67,
                                        "rawText": "67",
                                        "flags": 96,
                                        "start": 68,
                                        "end": 71
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 79,
                                        "rawText": "79",
                                        "flags": 96,
                                        "start": 72,
                                        "end": 75
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 92,
                                        "rawText": "92",
                                        "flags": 96,
                                        "start": 76,
                                        "end": 79
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 106,
                                        "rawText": "106",
                                        "flags": 96,
                                        "start": 80,
                                        "end": 84
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 121,
                                        "rawText": "121",
                                        "flags": 96,
                                        "start": 85,
                                        "end": 89
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 137,
                                        "rawText": "137",
                                        "flags": 96,
                                        "start": 90,
                                        "end": 94
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 154,
                                        "rawText": "154",
                                        "flags": 96,
                                        "start": 95,
                                        "end": 99
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 172,
                                        "rawText": "172",
                                        "flags": 96,
                                        "start": 100,
                                        "end": 104
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 191,
                                        "rawText": "191",
                                        "flags": 96,
                                        "start": 105,
                                        "end": 109
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 211,
                                        "rawText": "211",
                                        "flags": 96,
                                        "start": 110,
                                        "end": 114
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 232,
                                        "rawText": "232",
                                        "flags": 96,
                                        "start": 115,
                                        "end": 119
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 254,
                                        "rawText": "254",
                                        "flags": 96,
                                        "start": 120,
                                        "end": 124
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 277,
                                        "rawText": "277",
                                        "flags": 96,
                                        "start": 125,
                                        "end": 129
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 301,
                                        "rawText": "301",
                                        "flags": 96,
                                        "start": 130,
                                        "end": 134
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 326,
                                        "rawText": "326",
                                        "flags": 96,
                                        "start": 135,
                                        "end": 139
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 352,
                                        "rawText": "352",
                                        "flags": 96,
                                        "start": 140,
                                        "end": 144
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 379,
                                        "rawText": "379",
                                        "flags": 96,
                                        "start": 145,
                                        "end": 149
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 407,
                                        "rawText": "407",
                                        "flags": 96,
                                        "start": 150,
                                        "end": 154
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 436,
                                        "rawText": "436",
                                        "flags": 96,
                                        "start": 155,
                                        "end": 159
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 466,
                                        "rawText": "466",
                                        "flags": 96,
                                        "start": 160,
                                        "end": 164
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 497,
                                        "rawText": "497",
                                        "flags": 97,
                                        "start": 165,
                                        "end": 187
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 529,
                                        "rawText": "529",
                                        "flags": 96,
                                        "start": 188,
                                        "end": 192
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 562,
                                        "rawText": "562",
                                        "flags": 96,
                                        "start": 193,
                                        "end": 197
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 596,
                                        "rawText": "596",
                                        "flags": 96,
                                        "start": 198,
                                        "end": 202
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 631,
                                        "rawText": "631",
                                        "flags": 96,
                                        "start": 203,
                                        "end": 207
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 667,
                                        "rawText": "667",
                                        "flags": 96,
                                        "start": 208,
                                        "end": 212
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 704,
                                        "rawText": "704",
                                        "flags": 96,
                                        "start": 213,
                                        "end": 217
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 742,
                                        "rawText": "742",
                                        "flags": 96,
                                        "start": 218,
                                        "end": 222
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 781,
                                        "rawText": "781",
                                        "flags": 96,
                                        "start": 223,
                                        "end": 227
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 821,
                                        "rawText": "821",
                                        "flags": 97,
                                        "start": 228,
                                        "end": 232
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 862,
                                        "rawText": "862",
                                        "flags": 96,
                                        "start": 233,
                                        "end": 237
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 904,
                                        "rawText": "904",
                                        "flags": 96,
                                        "start": 238,
                                        "end": 242
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 947,
                                        "rawText": "947",
                                        "flags": 96,
                                        "start": 243,
                                        "end": 247
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 991,
                                        "rawText": "991",
                                        "flags": 96,
                                        "start": 248,
                                        "end": 252
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1036,
                                        "rawText": "1036",
                                        "flags": 96,
                                        "start": 253,
                                        "end": 258
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1082,
                                        "rawText": "1082",
                                        "flags": 96,
                                        "start": 259,
                                        "end": 264
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1129,
                                        "rawText": "1129",
                                        "flags": 96,
                                        "start": 265,
                                        "end": 270
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1177,
                                        "rawText": "1177",
                                        "flags": 96,
                                        "start": 271,
                                        "end": 276
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1226,
                                        "rawText": "1226",
                                        "flags": 96,
                                        "start": 277,
                                        "end": 282
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1276,
                                        "rawText": "1276",
                                        "flags": 97,
                                        "start": 283,
                                        "end": 298
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1327,
                                        "rawText": "1327",
                                        "flags": 96,
                                        "start": 299,
                                        "end": 304
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1379,
                                        "rawText": "1379",
                                        "flags": 96,
                                        "start": 305,
                                        "end": 310
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 29,
                                "end": 310
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 311
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 311
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 311
            },
            "flags": 33554448,
            "start": 0,
            "end": 312
        }
    ],
    "isModule": false,
    "source": "const lazyCatererNumbers =  [1, 2, 4, 7, 11, 16, 22, 29, 37, 46,\n56, 67, 79, 92, 106, 121, 137, 154, 172, 191, 211, 232, 254, 277, 301, 326, 352, 379, 407, 436, 466, /*block*/\n// line\n497, 529, 562, 596, 631, 667, 704, 742, 781,\n821, 862, 904, 947, 991, 1036, 1082, 1129, 1177, 1226,\n// line 2\n1276, 1327, 1379];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 312
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  const lazyCatererNumbers = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56, 67, 79, 92, 106, 121, 137, 154, 172, 191, 211, 232, 254, 277, 301, 326, 352, 379, 407, 436, 466, /*block*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     // line
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    497, 529, 562, 596, 631, 667, 704, 742, 781, 821, 862, 904, 947, 991, 1036, 1082, 1129, 1177, 1226, 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     // line 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    1276, 1327, 1379,];

```

### Diagnostics

```javascript
✔ No errors
```

