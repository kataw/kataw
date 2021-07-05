# Kataw parser test case

## Input

`````js
x + y / z;
x / y + z;

x * y % z;
x / y % z;
x % y * z;
x % y / z;

x % y % z;

x << y >> z;
x >>> y << z;
x >>> y >>> z;
x + y >> z;

x | y & z;
x & y | z;
x ^ y ^ z;
x & y & z;
x | y | z;
x & y >> z;
x << y | z;
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "flags": 96,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 10,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 97,
                    "start": 10,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 97,
                "start": 10,
                "end": 20
            },
            "flags": 16,
            "start": 10,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 21,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 28,
                        "end": 30
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 96,
                    "start": 28,
                    "end": 32
                },
                "flags": 97,
                "start": 21,
                "end": 32
            },
            "flags": 16,
            "start": 21,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 33,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 35,
                        "end": 37
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "flags": 97,
                    "start": 33,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 35639,
                    "flags": 96,
                    "start": 39,
                    "end": 41
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 41,
                    "end": 43
                },
                "flags": 97,
                "start": 33,
                "end": 43
            },
            "flags": 16,
            "start": 33,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 44,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 48,
                        "end": 50
                    },
                    "flags": 97,
                    "start": 44,
                    "end": 50
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "start": 50,
                    "end": 52
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 52,
                    "end": 54
                },
                "flags": 97,
                "start": 44,
                "end": 54
            },
            "flags": 16,
            "start": 44,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 55,
                        "end": 57
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 57,
                        "end": 59
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 59,
                        "end": 61
                    },
                    "flags": 97,
                    "start": 55,
                    "end": 61
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "start": 61,
                    "end": 63
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "flags": 97,
                "start": 55,
                "end": 65
            },
            "flags": 16,
            "start": 55,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 66,
                        "end": 69
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 96,
                        "start": 69,
                        "end": 71
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 71,
                        "end": 73
                    },
                    "flags": 97,
                    "start": 66,
                    "end": 73
                },
                "operatorToken": {
                    "kind": 35639,
                    "flags": 96,
                    "start": 73,
                    "end": 75
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 75,
                    "end": 77
                },
                "flags": 97,
                "start": 66,
                "end": 77
            },
            "flags": 16,
            "start": 66,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 78,
                        "end": 81
                    },
                    "operatorToken": {
                        "kind": 35140,
                        "flags": 96,
                        "start": 81,
                        "end": 84
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 84,
                        "end": 86
                    },
                    "flags": 97,
                    "start": 78,
                    "end": 86
                },
                "operatorToken": {
                    "kind": 35141,
                    "flags": 96,
                    "start": 86,
                    "end": 89
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 89,
                    "end": 91
                },
                "flags": 97,
                "start": 78,
                "end": 91
            },
            "flags": 16,
            "start": 78,
            "end": 92
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 92,
                        "end": 94
                    },
                    "operatorToken": {
                        "kind": 35142,
                        "flags": 96,
                        "start": 94,
                        "end": 98
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 98,
                        "end": 100
                    },
                    "flags": 97,
                    "start": 92,
                    "end": 100
                },
                "operatorToken": {
                    "kind": 35140,
                    "flags": 96,
                    "start": 100,
                    "end": 103
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 103,
                    "end": 105
                },
                "flags": 97,
                "start": 92,
                "end": 105
            },
            "flags": 16,
            "start": 92,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 106,
                        "end": 108
                    },
                    "operatorToken": {
                        "kind": 35142,
                        "flags": 96,
                        "start": 108,
                        "end": 112
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 112,
                        "end": 114
                    },
                    "flags": 97,
                    "start": 106,
                    "end": 114
                },
                "operatorToken": {
                    "kind": 35142,
                    "flags": 96,
                    "start": 114,
                    "end": 118
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 118,
                    "end": 120
                },
                "flags": 97,
                "start": 106,
                "end": 120
            },
            "flags": 16,
            "start": 106,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 121,
                    "end": 123
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 123,
                    "end": 125
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 125,
                        "end": 127
                    },
                    "operatorToken": {
                        "kind": 35141,
                        "flags": 96,
                        "start": 127,
                        "end": 130
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 130,
                        "end": 132
                    },
                    "flags": 96,
                    "start": 127,
                    "end": 132
                },
                "flags": 97,
                "start": 121,
                "end": 132
            },
            "flags": 16,
            "start": 121,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 133,
                    "end": 136
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 96,
                    "start": 136,
                    "end": 138
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 138,
                        "end": 140
                    },
                    "operatorToken": {
                        "kind": 134252103,
                        "flags": 96,
                        "start": 140,
                        "end": 142
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 142,
                        "end": 144
                    },
                    "flags": 96,
                    "start": 140,
                    "end": 144
                },
                "flags": 97,
                "start": 133,
                "end": 144
            },
            "flags": 16,
            "start": 133,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 145,
                        "end": 147
                    },
                    "operatorToken": {
                        "kind": 134252103,
                        "flags": 96,
                        "start": 147,
                        "end": 149
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 149,
                        "end": 151
                    },
                    "flags": 97,
                    "start": 145,
                    "end": 151
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 96,
                    "start": 151,
                    "end": 153
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 153,
                    "end": 155
                },
                "flags": 97,
                "start": 145,
                "end": 155
            },
            "flags": 16,
            "start": 145,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 156,
                        "end": 158
                    },
                    "operatorToken": {
                        "kind": 134251849,
                        "flags": 96,
                        "start": 158,
                        "end": 160
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 160,
                        "end": 162
                    },
                    "flags": 97,
                    "start": 156,
                    "end": 162
                },
                "operatorToken": {
                    "kind": 134251849,
                    "flags": 96,
                    "start": 162,
                    "end": 164
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 164,
                    "end": 166
                },
                "flags": 97,
                "start": 156,
                "end": 166
            },
            "flags": 16,
            "start": 156,
            "end": 167
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 167,
                        "end": 169
                    },
                    "operatorToken": {
                        "kind": 134252103,
                        "flags": 96,
                        "start": 169,
                        "end": 171
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 171,
                        "end": 173
                    },
                    "flags": 97,
                    "start": 167,
                    "end": 173
                },
                "operatorToken": {
                    "kind": 134252103,
                    "flags": 96,
                    "start": 173,
                    "end": 175
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 175,
                    "end": 177
                },
                "flags": 97,
                "start": 167,
                "end": 177
            },
            "flags": 16,
            "start": 167,
            "end": 178
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 178,
                        "end": 180
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "start": 180,
                        "end": 182
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 182,
                        "end": 184
                    },
                    "flags": 97,
                    "start": 178,
                    "end": 184
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 96,
                    "start": 184,
                    "end": 186
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 186,
                    "end": 188
                },
                "flags": 97,
                "start": 178,
                "end": 188
            },
            "flags": 16,
            "start": 178,
            "end": 189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 189,
                    "end": 191
                },
                "operatorToken": {
                    "kind": 134252103,
                    "flags": 96,
                    "start": 191,
                    "end": 193
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 193,
                        "end": 195
                    },
                    "operatorToken": {
                        "kind": 35141,
                        "flags": 96,
                        "start": 195,
                        "end": 198
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 198,
                        "end": 200
                    },
                    "flags": 96,
                    "start": 195,
                    "end": 200
                },
                "flags": 97,
                "start": 189,
                "end": 200
            },
            "flags": 16,
            "start": 189,
            "end": 201
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 201,
                        "end": 203
                    },
                    "operatorToken": {
                        "kind": 35140,
                        "flags": 96,
                        "start": 203,
                        "end": 206
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 206,
                        "end": 208
                    },
                    "flags": 97,
                    "start": 201,
                    "end": 208
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 96,
                    "start": 208,
                    "end": 210
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 210,
                    "end": 212
                },
                "flags": 97,
                "start": 201,
                "end": 212
            },
            "flags": 16,
            "start": 201,
            "end": 213
        }
    ],
    "isModule": false,
    "source": "x + y / z;\nx / y + z;\n\nx * y % z;\nx / y % z;\nx % y * z;\nx % y / z;\n\nx % y % z;\n\nx << y >> z;\nx >>> y << z;\nx >>> y >>> z;\nx + y >> z;\n\nx | y & z;\nx & y | z;\nx ^ y ^ z;\nx & y & z;\nx | y | z;\nx & y >> z;\nx << y | z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 213
}
```

### Printed

```javascript

x +  y /  z;
x /  y +  z;
x *  y %  z;
x /  y %  z;
x %  y *  z;
x %  y /  z;
x %  y %  z;
x <<  y >>  z;
x >>>  y <<  z;
x >>>  y >>>  z;
x +  y >>  z;
x |  y &  z;
x &  y |  z;
x ^  y ^  z;
x &  y &  z;
x |  y |  z;
x &  y >>  z;
x <<  y |  z;
```

### Diagnostics

```javascript
✔ No errors
```

