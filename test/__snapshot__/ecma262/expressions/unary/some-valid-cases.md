# Kataw parser test case

## Input

`````js
delete (x);

delete (true && x);

delete (0 ? 1 : x);

delete (1, NaN);

delete (1, Infinity);

delete (1, -Infinity);

typeof (1, -Infinity);

typeof a == b + '';

typeof a != b + '';

void x;

typeof (0 || x);

typeof (0 ? 1 : x);

!x;

-x;

+x;
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 97,
                    "start": 11,
                    "end": 19
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 21,
                            "end": 25
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 25,
                            "end": 28
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 96,
                        "start": 21,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 31
                },
                "flags": 32,
                "start": 11,
                "end": 31
            },
            "flags": 16,
            "start": 11,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 97,
                    "start": 32,
                    "end": 40
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 42,
                            "end": 43
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 43,
                            "end": 45
                        },
                        "consequent": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 45,
                            "end": 47
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 47,
                            "end": 49
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 49,
                            "end": 51
                        },
                        "flags": 96,
                        "start": 42,
                        "end": 51
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 52
                },
                "flags": 32,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "start": 32,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 97,
                    "start": 53,
                    "end": 61
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 63,
                                "end": 64
                            },
                            {
                                "kind": 134299649,
                                "text": "NaN",
                                "rawText": "NaN",
                                "flags": 96,
                                "start": 65,
                                "end": 69
                            }
                        ],
                        "flags": 32,
                        "start": 61,
                        "end": 69
                    },
                    "flags": 32,
                    "start": 61,
                    "end": 70
                },
                "flags": 32,
                "start": 53,
                "end": 70
            },
            "flags": 16,
            "start": 53,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 97,
                    "start": 71,
                    "end": 79
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 81,
                                "end": 82
                            },
                            {
                                "kind": 134299649,
                                "text": "Infinity",
                                "rawText": "Infinity",
                                "flags": 96,
                                "start": 83,
                                "end": 92
                            }
                        ],
                        "flags": 32,
                        "start": 79,
                        "end": 92
                    },
                    "flags": 32,
                    "start": 79,
                    "end": 93
                },
                "flags": 32,
                "start": 71,
                "end": 93
            },
            "flags": 16,
            "start": 71,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 97,
                    "start": 94,
                    "end": 102
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 104,
                                "end": 105
                            },
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 106,
                                    "end": 108
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "Infinity",
                                    "rawText": "Infinity",
                                    "flags": 96,
                                    "start": 108,
                                    "end": 116
                                },
                                "flags": 32,
                                "start": 106,
                                "end": 116
                            }
                        ],
                        "flags": 32,
                        "start": 102,
                        "end": 116
                    },
                    "flags": 32,
                    "start": 102,
                    "end": 117
                },
                "flags": 32,
                "start": 94,
                "end": 117
            },
            "flags": 16,
            "start": 94,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "start": 118,
                    "end": 126
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 128,
                                "end": 129
                            },
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 130,
                                    "end": 132
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "Infinity",
                                    "rawText": "Infinity",
                                    "flags": 96,
                                    "start": 132,
                                    "end": 140
                                },
                                "flags": 32,
                                "start": 130,
                                "end": 140
                            }
                        ],
                        "flags": 32,
                        "start": 126,
                        "end": 140
                    },
                    "flags": 32,
                    "start": 126,
                    "end": 141
                },
                "flags": 32,
                "start": 118,
                "end": 141
            },
            "flags": 16,
            "start": 118,
            "end": 142
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 97,
                            "start": 142,
                            "end": 150
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 150,
                            "end": 152
                        },
                        "flags": 32,
                        "start": 142,
                        "end": 152
                    },
                    "operatorToken": {
                        "kind": 34622,
                        "flags": 96,
                        "start": 152,
                        "end": 155
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 155,
                        "end": 157
                    },
                    "flags": 32,
                    "start": 142,
                    "end": 157
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 157,
                    "end": 159
                },
                "right": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "''",
                    "flags": 4194400,
                    "start": 159,
                    "end": 162
                },
                "flags": 32,
                "start": 142,
                "end": 162
            },
            "flags": 16,
            "start": 142,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 97,
                            "start": 163,
                            "end": 171
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 171,
                            "end": 173
                        },
                        "flags": 32,
                        "start": 163,
                        "end": 173
                    },
                    "operatorToken": {
                        "kind": 34623,
                        "flags": 96,
                        "start": 173,
                        "end": 176
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 176,
                        "end": 178
                    },
                    "flags": 32,
                    "start": 163,
                    "end": 178
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 178,
                    "end": 180
                },
                "right": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "''",
                    "flags": 4194400,
                    "start": 180,
                    "end": 183
                },
                "flags": 32,
                "start": 163,
                "end": 183
            },
            "flags": 16,
            "start": 163,
            "end": 184
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477615,
                    "flags": 97,
                    "start": 184,
                    "end": 190
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 190,
                    "end": 192
                },
                "flags": 32,
                "start": 184,
                "end": 192
            },
            "flags": 16,
            "start": 184,
            "end": 193
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "start": 193,
                    "end": 201
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 203,
                            "end": 204
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "start": 204,
                            "end": 207
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 207,
                            "end": 209
                        },
                        "flags": 96,
                        "start": 203,
                        "end": 209
                    },
                    "flags": 32,
                    "start": 201,
                    "end": 210
                },
                "flags": 32,
                "start": 193,
                "end": 210
            },
            "flags": 16,
            "start": 193,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "start": 211,
                    "end": 219
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 221,
                            "end": 222
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 222,
                            "end": 224
                        },
                        "consequent": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 224,
                            "end": 226
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 226,
                            "end": 228
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 228,
                            "end": 230
                        },
                        "flags": 96,
                        "start": 221,
                        "end": 230
                    },
                    "flags": 32,
                    "start": 219,
                    "end": 231
                },
                "flags": 32,
                "start": 211,
                "end": 231
            },
            "flags": 16,
            "start": 211,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "start": 232,
                    "end": 235
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 235,
                    "end": 236
                },
                "flags": 32,
                "start": 232,
                "end": 236
            },
            "flags": 16,
            "start": 232,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 134318643,
                    "flags": 97,
                    "start": 237,
                    "end": 240
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 240,
                    "end": 241
                },
                "flags": 32,
                "start": 237,
                "end": 241
            },
            "flags": 16,
            "start": 237,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 97,
                    "start": 242,
                    "end": 245
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 245,
                    "end": 246
                },
                "flags": 32,
                "start": 242,
                "end": 246
            },
            "flags": 16,
            "start": 242,
            "end": 247
        }
    ],
    "isModule": false,
    "source": "delete (x);\n\ndelete (true && x);\n\ndelete (0 ? 1 : x);\n\ndelete (1, NaN);\n\ndelete (1, Infinity);\n\ndelete (1, -Infinity);\n\ntypeof (1, -Infinity);\n\ntypeof a == b + '';\n\ntypeof a != b + '';\n\nvoid x;\n\ntypeof (0 || x);\n\ntypeof (0 ? 1 : x);\n\n!x;\n\n-x;\n\n+x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 247
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  delete  (x);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  delete  (true && x);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  delete  (0 ? 1 : x);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  delete  (1, NaN);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  delete  (1, Infinity);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  delete  (1, - Infinity);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  typeof  (1, - Infinity);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  typeof  a == b + "''";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  typeof  a != b + "''";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  void  x;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  typeof  (0 || x);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  typeof  (0 ? 1 : x);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ! x;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  - x;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  + x;

```

### Diagnostics

```javascript
✔ No errors
```

