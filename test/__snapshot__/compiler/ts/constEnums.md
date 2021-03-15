# Kataw parser test case

## Input

`````js
const enum Enum1 {
   A0 = 100,
}

const enum Enum1 {
    // correct cases
    A,
    B,
    C = 10,
    D = A | B,
    E = A | 1,
    F = 1 | A,
    G = (1 & 1),
    H = ~(A | B),
    I = A >>> 1,
    J = 1 & A,
    K = ~(1 | 5),
    L = ~D,
    M = E << B,
    N = E << 1,
    O = E >> B,
    P = E >> 1,
    PQ = E ** 2,
    Q = -D,
    R = C & 5,
    S = 5 & C,
    T = C | D,
    U = C | 1,
    V = 10 | D,
    W = Enum1.V,

    // correct cases: reference to the enum member from different enum declaration
    W1 = A0,
    W2 = Enum1.A0,
    W3 = Enum1["A0"],
    W4 = Enum1["W"],
    W5 = Enum1[`V`],
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const enum Enum1 {\n   A0 = 100,\n}\n\nconst enum Enum1 {\n    // correct cases\n    A,\n    B,\n    C = 10,\n    D = A | B,\n    E = A | 1,\n    F = 1 | A,\n    G = (1 & 1),\n    H = ~(A | B),\n    I = A >>> 1,\n    J = 1 & A,\n    K = ~(1 | 5),\n    L = ~D,\n    M = E << B,\n    N = E << 1,\n    O = E >> B,\n    P = E >> 1,\n    PQ = E ** 2,\n    Q = -D,\n    R = C & 5,\n    S = 5 & C,\n    T = C | D,\n    U = C | 1,\n    V = 10 | D,\n    W = Enum1.V,\n\n    // correct cases: reference to the enum member from different enum declaration\n    W1 = A0,\n    W2 = Enum1.A0,\n    W3 = Enum1[\"A0\"],\n    W4 = Enum1[\"W\"],\n    W5 = Enum1[`V`],",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "Enum1",
                "rawText": "Enum1",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 16
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "A0",
                            "rawText": "A0",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 24
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 100,
                            "rawText": "100",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 30
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 18,
                        "end": 30
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 18,
                "end": 31
            },
            "isConst": true,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 33
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "Enum1",
                "rawText": "Enum1",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 45,
                "end": 51
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 80
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 53,
                        "end": 80
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "B",
                            "rawText": "B",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 81,
                            "end": 87
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 81,
                        "end": 87
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "C",
                            "rawText": "C",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 94
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 99
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 88,
                        "end": 99
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "D",
                            "rawText": "D",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 106
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 110
                            },
                            "operator": "|",
                            "right": {
                                "kind": 196712,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 112,
                                "end": 114
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 108,
                            "end": 114
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 100,
                        "end": 114
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "E",
                            "rawText": "E",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 115,
                            "end": 121
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 125
                            },
                            "operator": "|",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 129
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 129
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 115,
                        "end": 129
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "F",
                            "rawText": "F",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 130,
                            "end": 136
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 138,
                                "end": 140
                            },
                            "operator": "|",
                            "right": {
                                "kind": 196712,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 144
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 138,
                            "end": 144
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 130,
                        "end": 144
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "G",
                            "rawText": "G",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 151
                        },
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 155,
                                    "end": 156
                                },
                                "operator": "&",
                                "right": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 158,
                                    "end": 160
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 155,
                                "end": 160
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 161
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 145,
                        "end": 161
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "H",
                            "rawText": "H",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 162,
                            "end": 168
                        },
                        "initializer": {
                            "kind": 65774,
                            "operator": "~",
                            "operand": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 174
                                    },
                                    "operator": "|",
                                    "right": {
                                        "kind": 196712,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 178
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 172,
                                    "end": 178
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 172,
                                "end": 179
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 170,
                            "end": 179
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 162,
                        "end": 179
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "I",
                            "rawText": "I",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 180,
                            "end": 186
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 188,
                                "end": 190
                            },
                            "operator": ">>>",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 194,
                                "end": 196
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 188,
                            "end": 196
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 180,
                        "end": 196
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "J",
                            "rawText": "J",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 197,
                            "end": 203
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 205,
                                "end": 207
                            },
                            "operator": "&",
                            "right": {
                                "kind": 196712,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 211
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 211
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 197,
                        "end": 211
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 212,
                            "end": 218
                        },
                        "initializer": {
                            "kind": 65774,
                            "operator": "~",
                            "operand": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 223,
                                        "end": 224
                                    },
                                    "operator": "|",
                                    "right": {
                                        "kind": 4261540,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 226,
                                        "end": 228
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 223,
                                    "end": 228
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 222,
                                "end": 229
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 220,
                            "end": 229
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 212,
                        "end": 229
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "L",
                            "rawText": "L",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 230,
                            "end": 236
                        },
                        "initializer": {
                            "kind": 65774,
                            "operator": "~",
                            "operand": {
                                "kind": 196712,
                                "text": "D",
                                "rawText": "D",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 240,
                                "end": 241
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 238,
                            "end": 241
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 230,
                        "end": 241
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "M",
                            "rawText": "M",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 242,
                            "end": 248
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 250,
                                "end": 252
                            },
                            "operator": "<<",
                            "right": {
                                "kind": 196712,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 257
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 250,
                            "end": 257
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 242,
                        "end": 257
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "N",
                            "rawText": "N",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 258,
                            "end": 264
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 266,
                                "end": 268
                            },
                            "operator": "<<",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 271,
                                "end": 273
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 266,
                            "end": 273
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 258,
                        "end": 273
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "O",
                            "rawText": "O",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 274,
                            "end": 280
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 282,
                                "end": 284
                            },
                            "operator": ">>",
                            "right": {
                                "kind": 196712,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 287,
                                "end": 289
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 282,
                            "end": 289
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 274,
                        "end": 289
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "P",
                            "rawText": "P",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 290,
                            "end": 296
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 298,
                                "end": 300
                            },
                            "operator": ">>",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 303,
                                "end": 305
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 298,
                            "end": 305
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 290,
                        "end": 305
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "PQ",
                            "rawText": "PQ",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 306,
                            "end": 313
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 315,
                                "end": 317
                            },
                            "operator": "**",
                            "right": {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 320,
                                "end": 322
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2,
                            "start": 315,
                            "end": 322
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 306,
                        "end": 322
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "Q",
                            "rawText": "Q",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 323,
                            "end": 329
                        },
                        "initializer": {
                            "kind": 65774,
                            "operator": "-",
                            "operand": {
                                "kind": 196712,
                                "text": "D",
                                "rawText": "D",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 333,
                                "end": 334
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 331,
                            "end": 334
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 323,
                        "end": 334
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "R",
                            "rawText": "R",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 335,
                            "end": 341
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 343,
                                "end": 345
                            },
                            "operator": "&",
                            "right": {
                                "kind": 4261540,
                                "text": 5,
                                "rawText": "5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 347,
                                "end": 349
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 343,
                            "end": 349
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 335,
                        "end": 349
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "S",
                            "rawText": "S",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 350,
                            "end": 356
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 4261540,
                                "text": 5,
                                "rawText": "5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 358,
                                "end": 360
                            },
                            "operator": "&",
                            "right": {
                                "kind": 196712,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 364
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 358,
                            "end": 364
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 350,
                        "end": 364
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 365,
                            "end": 371
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 373,
                                "end": 375
                            },
                            "operator": "|",
                            "right": {
                                "kind": 196712,
                                "text": "D",
                                "rawText": "D",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 377,
                                "end": 379
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 379
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 365,
                        "end": 379
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 380,
                            "end": 386
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 388,
                                "end": 390
                            },
                            "operator": "|",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 392,
                                "end": 394
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 388,
                            "end": 394
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 380,
                        "end": 394
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 395,
                            "end": 401
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 4261540,
                                "text": 10,
                                "rawText": "10",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 403,
                                "end": 406
                            },
                            "operator": "|",
                            "right": {
                                "kind": 196712,
                                "text": "D",
                                "rawText": "D",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 408,
                                "end": 410
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 403,
                            "end": 410
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 395,
                        "end": 410
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "W",
                            "rawText": "W",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 411,
                            "end": 417
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "Enum1",
                                "rawText": "Enum1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 419,
                                "end": 425
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 426,
                                "end": 427
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 425,
                            "end": 427,
                            "period": {
                                "kind": 255,
                                "pos": 425,
                                "end": 426
                            }
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 411,
                        "end": 427
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "W1",
                            "rawText": "W1",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 428,
                            "end": 519
                        },
                        "initializer": {
                            "kind": 196712,
                            "text": "A0",
                            "rawText": "A0",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 521,
                            "end": 524
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 428,
                        "end": 524
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "W2",
                            "rawText": "W2",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 525,
                            "end": 532
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "Enum1",
                                "rawText": "Enum1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 534,
                                "end": 540
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "A0",
                                "rawText": "A0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 541,
                                "end": 543
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 540,
                            "end": 543,
                            "period": {
                                "kind": 255,
                                "pos": 540,
                                "end": 541
                            }
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 525,
                        "end": 543
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "W3",
                            "rawText": "W3",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 544,
                            "end": 551
                        },
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "Enum1",
                                "rawText": "Enum1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 553,
                                "end": 559
                            },
                            "expression": {
                                "kind": 4261583,
                                "text": "A0",
                                "rawText": "A0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 560,
                                "end": 564
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 559,
                            "end": 565
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 544,
                        "end": 565
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "W4",
                            "rawText": "W4",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 566,
                            "end": 573
                        },
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "Enum1",
                                "rawText": "Enum1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 575,
                                "end": 581
                            },
                            "expression": {
                                "kind": 4261583,
                                "text": "W",
                                "rawText": "W",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 582,
                                "end": 585
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 581,
                            "end": 586
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 566,
                        "end": 586
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "W5",
                            "rawText": "W5",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 587,
                            "end": 594
                        },
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "Enum1",
                                "rawText": "Enum1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 596,
                                "end": 602
                            },
                            "expression": {
                                "kind": 4260568,
                                "rawText": "V",
                                "text": "V",
                                "literal": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 603,
                                "end": 606
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 602,
                            "end": 607
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 587,
                        "end": 607
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 53,
                "end": 608
            },
            "isConst": true,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 33,
            "end": 608
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 607,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 608
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

