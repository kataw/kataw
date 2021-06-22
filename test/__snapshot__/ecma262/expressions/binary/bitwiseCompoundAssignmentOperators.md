# Kataw parser test case

## Input

`````js
var a = true;
var b = 1;
a ^= a;
a = true;
b ^= b;
b = 1;
a ^= b;
a = true;
b ^= a;
b = 1;

var c = false;
var d = 2;
c &= c;
c = false;
d &= d;
d = 2;
c &= d;
c = false;
d &= c;

var e = true;
var f = 0;
e |= e;
e = true;
f |= f;
f = 0;
e |= f;
e = true;
f |= f;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 7,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 24
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
                    "start": 24,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 26,
                    "end": 29
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "flags": 32,
                "start": 24,
                "end": 31
            },
            "flags": 16,
            "start": 24,
            "end": 32
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
                    "start": 32,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 36,
                    "end": 41
                },
                "flags": 32,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 32,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 42,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 44,
                    "end": 47
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 47,
                    "end": 49
                },
                "flags": 32,
                "start": 42,
                "end": 49
            },
            "flags": 16,
            "start": 42,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 50,
                    "end": 52
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 52,
                    "end": 54
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 54,
                    "end": 56
                },
                "flags": 32,
                "start": 50,
                "end": 56
            },
            "flags": 16,
            "start": 50,
            "end": 57
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
                    "start": 57,
                    "end": 59
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 59,
                    "end": 62
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 62,
                    "end": 64
                },
                "flags": 32,
                "start": 57,
                "end": 64
            },
            "flags": 16,
            "start": 57,
            "end": 65
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
                    "start": 65,
                    "end": 67
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 67,
                    "end": 69
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 69,
                    "end": 74
                },
                "flags": 32,
                "start": 65,
                "end": 74
            },
            "flags": 16,
            "start": 65,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 75,
                    "end": 77
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 77,
                    "end": 80
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 80,
                    "end": 82
                },
                "flags": 32,
                "start": 75,
                "end": 82
            },
            "flags": 16,
            "start": 75,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 83,
                    "end": 85
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 85,
                    "end": 87
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 87,
                    "end": 89
                },
                "flags": 32,
                "start": 83,
                "end": 89
            },
            "flags": 16,
            "start": 83,
            "end": 90
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 90,
                "end": 95
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 95,
                            "end": 97
                        },
                        "type": null,
                        "initializer": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 99,
                            "end": 105
                        },
                        "flags": 16,
                        "start": 95,
                        "end": 105
                    }
                ],
                "flags": 16,
                "start": 95,
                "end": 105
            },
            "flags": 16,
            "start": 90,
            "end": 106
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 106,
                "end": 110
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 110,
                            "end": 112
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 114,
                            "end": 116
                        },
                        "flags": 16,
                        "start": 110,
                        "end": 116
                    }
                ],
                "flags": 16,
                "start": 110,
                "end": 116
            },
            "flags": 16,
            "start": 106,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 117,
                    "end": 119
                },
                "operatorToken": {
                    "kind": 4137,
                    "flags": 96,
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
            "flags": 16,
            "start": 117,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 125,
                    "end": 127
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 127,
                    "end": 129
                },
                "right": {
                    "kind": 205586437,
                    "flags": 96,
                    "start": 129,
                    "end": 135
                },
                "flags": 32,
                "start": 125,
                "end": 135
            },
            "flags": 16,
            "start": 125,
            "end": 136
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 136,
                    "end": 138
                },
                "operatorToken": {
                    "kind": 4137,
                    "flags": 96,
                    "start": 138,
                    "end": 141
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 141,
                    "end": 143
                },
                "flags": 32,
                "start": 136,
                "end": 143
            },
            "flags": 16,
            "start": 136,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 144,
                    "end": 146
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 146,
                    "end": 148
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 148,
                    "end": 150
                },
                "flags": 32,
                "start": 144,
                "end": 150
            },
            "flags": 16,
            "start": 144,
            "end": 151
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 151,
                    "end": 153
                },
                "operatorToken": {
                    "kind": 4137,
                    "flags": 96,
                    "start": 153,
                    "end": 156
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 156,
                    "end": 158
                },
                "flags": 32,
                "start": 151,
                "end": 158
            },
            "flags": 16,
            "start": 151,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 159,
                    "end": 161
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 161,
                    "end": 163
                },
                "right": {
                    "kind": 205586437,
                    "flags": 96,
                    "start": 163,
                    "end": 169
                },
                "flags": 32,
                "start": 159,
                "end": 169
            },
            "flags": 16,
            "start": 159,
            "end": 170
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 170,
                    "end": 172
                },
                "operatorToken": {
                    "kind": 4137,
                    "flags": 96,
                    "start": 172,
                    "end": 175
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 175,
                    "end": 177
                },
                "flags": 32,
                "start": 170,
                "end": 177
            },
            "flags": 16,
            "start": 170,
            "end": 178
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 178,
                "end": 183
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 183,
                            "end": 185
                        },
                        "type": null,
                        "initializer": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 187,
                            "end": 192
                        },
                        "flags": 16,
                        "start": 183,
                        "end": 192
                    }
                ],
                "flags": 16,
                "start": 183,
                "end": 192
            },
            "flags": 16,
            "start": 178,
            "end": 193
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 193,
                "end": 197
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 197,
                            "end": 199
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 201,
                            "end": 203
                        },
                        "flags": 16,
                        "start": 197,
                        "end": 203
                    }
                ],
                "flags": 16,
                "start": 197,
                "end": 203
            },
            "flags": 16,
            "start": 193,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 204,
                    "end": 206
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "start": 206,
                    "end": 209
                },
                "right": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 209,
                    "end": 211
                },
                "flags": 32,
                "start": 204,
                "end": 211
            },
            "flags": 16,
            "start": 204,
            "end": 212
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 212,
                    "end": 214
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 214,
                    "end": 216
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 216,
                    "end": 221
                },
                "flags": 32,
                "start": 212,
                "end": 221
            },
            "flags": 16,
            "start": 212,
            "end": 222
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 222,
                    "end": 224
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "start": 224,
                    "end": 227
                },
                "right": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 227,
                    "end": 229
                },
                "flags": 32,
                "start": 222,
                "end": 229
            },
            "flags": 16,
            "start": 222,
            "end": 230
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 230,
                    "end": 232
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 232,
                    "end": 234
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 234,
                    "end": 236
                },
                "flags": 32,
                "start": 230,
                "end": 236
            },
            "flags": 16,
            "start": 230,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 237,
                    "end": 239
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "start": 239,
                    "end": 242
                },
                "right": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 242,
                    "end": 244
                },
                "flags": 32,
                "start": 237,
                "end": 244
            },
            "flags": 16,
            "start": 237,
            "end": 245
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 245,
                    "end": 247
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 247,
                    "end": 249
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 249,
                    "end": 254
                },
                "flags": 32,
                "start": 245,
                "end": 254
            },
            "flags": 16,
            "start": 245,
            "end": 255
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 255,
                    "end": 257
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "start": 257,
                    "end": 260
                },
                "right": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 260,
                    "end": 262
                },
                "flags": 32,
                "start": 255,
                "end": 262
            },
            "flags": 16,
            "start": 255,
            "end": 263
        }
    ],
    "isModule": false,
    "source": "var a = true;\nvar b = 1;\na ^= a;\na = true;\nb ^= b;\nb = 1;\na ^= b;\na = true;\nb ^= a;\nb = 1;\n\nvar c = false;\nvar d = 2;\nc &= c;\nc = false;\nd &= d;\nd = 2;\nc &= d;\nc = false;\nd &= c;\n\nvar e = true;\nvar f = 0;\ne |= e;\ne = true;\nf |= f;\nf = 0;\ne |= f;\ne = true;\nf |= f;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 263
}
```

### Printed

```javascript

var a = true;
var b = 1;
a ^= a;
a = true;
b ^= b;
b = 1;
a ^= b;
a = true;
b ^= a;
b = 1;
var c = false;
var d = 2;
c &= c;
c = false;
d &= d;
d = 2;
c &= d;
c = false;
d &= c;
var e = true;
var f = 0;
e |= e;
e = true;
f |= f;
f = 0;
e |= f;
e = true;
f |= f;
```

### Diagnostics

```javascript
✔ No errors
```

