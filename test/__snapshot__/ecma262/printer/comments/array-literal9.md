# Kataw parser test case

## Input

`````js
 [/*1*/];

 [,/*1*/,,,,,,,,/*2*/,,,,,,];


 [,/*1*/,,,,


 ,,,,/*2*/,,,,,,];


 [,,,,,,,,/*1*/,,,,,,,];


 ([,,,,,,,,/*1*/,,,,,,,]);


 ([,,,,,,,,


/*1*/





,,,,,,,]);

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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 13,
                            "end": 13
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 14,
                            "end": 14
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 20,
                            "end": 20
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 21,
                            "end": 21
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 22,
                            "end": 22
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 23,
                            "end": 23
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 24,
                            "end": 24
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 25,
                            "end": 25
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 26,
                            "end": 26
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 27,
                            "end": 27
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 33,
                            "end": 33
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 34,
                            "end": 34
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 35,
                            "end": 35
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 36,
                            "end": 36
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 37,
                            "end": 37
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 13,
                    "end": 38
                },
                "flags": 33,
                "start": 9,
                "end": 39
            },
            "flags": 16,
            "start": 9,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 45,
                            "end": 45
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 46,
                            "end": 46
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 52,
                            "end": 52
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 53,
                            "end": 53
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 54,
                            "end": 54
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 55,
                            "end": 55
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 60,
                            "end": 60
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 61,
                            "end": 61
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 62,
                            "end": 62
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 63,
                            "end": 63
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 69,
                            "end": 69
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 70,
                            "end": 70
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 71,
                            "end": 71
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 72,
                            "end": 72
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 73,
                            "end": 73
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 45,
                    "end": 74
                },
                "flags": 33,
                "start": 40,
                "end": 75
            },
            "flags": 16,
            "start": 40,
            "end": 76
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 81,
                            "end": 81
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 82,
                            "end": 82
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 83,
                            "end": 83
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 84,
                            "end": 84
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 85,
                            "end": 85
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 86,
                            "end": 86
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 87,
                            "end": 87
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 88,
                            "end": 88
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 89,
                            "end": 89
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 95,
                            "end": 95
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 96,
                            "end": 96
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 97,
                            "end": 97
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 98,
                            "end": 98
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 99,
                            "end": 99
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 100,
                            "end": 100
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 81,
                    "end": 101
                },
                "flags": 33,
                "start": 76,
                "end": 102
            },
            "flags": 16,
            "start": 76,
            "end": 103
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
                                "kind": 230,
                                "flags": 96,
                                "start": 109,
                                "end": 109
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 110,
                                "end": 110
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 111,
                                "end": 111
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 112,
                                "end": 112
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 113,
                                "end": 113
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 114,
                                "end": 114
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 115,
                                "end": 115
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 116,
                                "end": 116
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 117,
                                "end": 117
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 123,
                                "end": 123
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 124,
                                "end": 124
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 125,
                                "end": 125
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 126,
                                "end": 126
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 127,
                                "end": 127
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 128,
                                "end": 128
                            }
                        ],
                        "trailingComma": true,
                        "flags": 32,
                        "start": 109,
                        "end": 129
                    },
                    "flags": 32,
                    "start": 108,
                    "end": 130
                },
                "flags": 32,
                "start": 103,
                "end": 131
            },
            "flags": 16,
            "start": 103,
            "end": 132
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
                                "kind": 230,
                                "flags": 96,
                                "start": 138,
                                "end": 138
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 139,
                                "end": 139
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 140,
                                "end": 140
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 141,
                                "end": 141
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 142,
                                "end": 142
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 143,
                                "end": 143
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 144,
                                "end": 144
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 145,
                                "end": 145
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 146,
                                "end": 146
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 161,
                                "end": 161
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 162,
                                "end": 162
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 163,
                                "end": 163
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 164,
                                "end": 164
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 165,
                                "end": 165
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 166,
                                "end": 166
                            }
                        ],
                        "trailingComma": true,
                        "flags": 32,
                        "start": 138,
                        "end": 167
                    },
                    "flags": 32,
                    "start": 137,
                    "end": 168
                },
                "flags": 32,
                "start": 132,
                "end": 169
            },
            "flags": 16,
            "start": 132,
            "end": 170
        }
    ],
    "isModule": false,
    "source": " [/*1*/];\n\n [,/*1*/,,,,,,,,/*2*/,,,,,,];\n\n\n [,/*1*/,,,,\n\n\n ,,,,/*2*/,,,,,,];\n\n\n [,,,,,,,,/*1*/,,,,,,,];\n\n\n ([,,,,,,,,/*1*/,,,,,,,]);\n\n\n ([,,,,,,,,\n\n\n/*1*/\n\n\n\n\n\n,,,,,,,]);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 171
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [/*1*/];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [, /*1*/, , , , , , , , /*2*/, , , , , ,];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [, /*1*/, , , , , , , , /*2*/, , , , , ,];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [, , , , , , , , /*1*/, , , , , , ,];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ([, , , , , , , , /*1*/, , , , , , ,]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ([, , , , , , , , 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     /*1*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    , , , , , , ,]);

```

### Diagnostics

```javascript
✔ No errors
```

