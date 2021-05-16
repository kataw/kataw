# Kataw parser test case

## Input

`````js
() => {};
() => { return 42 };
x => { return x; };
(x) => { return x; };
(x, y) => { return x + y; };
(x, y, z) => { return x + y + z; };
(x, y) => { x.a = y; };
() => 42;
x => x;
x => x * x;
(x) => x;
(x) => x * x;
(x, y) => x + y;
(x, y, z) => x, y, z;
(x, y) => x.a = y;
() => ({'value': 42});
x => y => x + y;
(x, y) => (u, v) => x*u + y*v;
(x, y) => z => z * (x + y);
x => (y, z) => z * (x + y);

// Those are comma-separated expressions, with arrow functions as items.
// They stress the code for validating arrow function parameter lists.
a, b => 0;
a, b, (c, d) => 0;
(a, b, (c, d) => 0);
(a, b) => 0, (c, d) => 1;
(a, b => {}, a => a + 1);
((a, b) => {}, (a => a + 1));
(a, (a, (b, c) => 0));

// Arrow has more precedence, this is the same as: foo ? bar : (baz = {})
foo ? bar : baz => {};

// Arrows with non-simple parameters.
({}) => {};
(a, {}) => {};
({}, a) => {};
([]) => {};
(a, []) => {};
([], a) => {};
(a = b) => {};
(a = b, c) => {};
(a, b = c) => {};
({a}) => {};
(x = 9) => {};
(x, y = 9) => {};
(x = 9, y) => {};
(x, y = 9, z) => {};
(x, y = 9, z = 8) => {};
(...a) => {};
(x, ...a) => {};
(x = 9, ...a) => {};
(x, y = 9, ...a) => {};
(x, y = 9, {b}, z = 8, ...a) => {};
({a} = {}) => {};
([x] = []) => {};
({a = 42}) => {};
([x = 0]) => {};
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 8
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 16,
                                "start": 0,
                                "end": 17
                            }
                        ],
                        "flags": 32,
                        "start": 17,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 29
                },
                "flags": 32,
                "start": 9,
                "end": 29
            },
            "flags": 16,
            "start": 9,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 32,
                    "end": 35
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 30,
                    "end": 32
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 0,
                                    "start": 37,
                                    "end": 44
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "flags": 16,
                                "start": 0,
                                "end": 37
                            }
                        ],
                        "flags": 32,
                        "start": 37,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 49
                },
                "flags": 32,
                "start": 30,
                "end": 49
            },
            "flags": 16,
            "start": 30,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 54,
                    "end": 57
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 52,
                        "end": 53
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 0,
                                    "start": 59,
                                    "end": 66
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 68
                                },
                                "flags": 16,
                                "start": 0,
                                "end": 59
                            }
                        ],
                        "flags": 32,
                        "start": 59,
                        "end": 69
                    },
                    "flags": 32,
                    "start": 57,
                    "end": 71
                },
                "flags": 32,
                "start": 50,
                "end": 71
            },
            "flags": 16,
            "start": 50,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 79,
                    "end": 82
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 74,
                            "end": 75
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 76,
                            "end": 78
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 0,
                                    "start": 84,
                                    "end": 91
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 91,
                                        "end": 93
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 93,
                                        "end": 95
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 95,
                                        "end": 97
                                    },
                                    "flags": 32,
                                    "start": 91,
                                    "end": 97
                                },
                                "flags": 16,
                                "start": 0,
                                "end": 84
                            }
                        ],
                        "flags": 32,
                        "start": 84,
                        "end": 98
                    },
                    "flags": 32,
                    "start": 82,
                    "end": 100
                },
                "flags": 32,
                "start": 72,
                "end": 100
            },
            "flags": 16,
            "start": 72,
            "end": 101
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 111,
                    "end": 114
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 103,
                            "end": 104
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 105,
                            "end": 107
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 108,
                            "end": 110
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 0,
                                    "start": 116,
                                    "end": 123
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 123,
                                            "end": 125
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 125,
                                            "end": 127
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 127,
                                            "end": 129
                                        },
                                        "flags": 32,
                                        "start": 123,
                                        "end": 129
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 129,
                                        "end": 131
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 131,
                                        "end": 133
                                    },
                                    "flags": 32,
                                    "start": 123,
                                    "end": 133
                                },
                                "flags": 16,
                                "start": 0,
                                "end": 116
                            }
                        ],
                        "flags": 32,
                        "start": 116,
                        "end": 134
                    },
                    "flags": 32,
                    "start": 114,
                    "end": 136
                },
                "flags": 32,
                "start": 101,
                "end": 136
            },
            "flags": 16,
            "start": 101,
            "end": 137
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 144,
                    "end": 147
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 139,
                            "end": 140
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 141,
                            "end": 143
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 149,
                                            "end": 151
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 152,
                                            "end": 153
                                        },
                                        "flags": 536870944,
                                        "start": 149,
                                        "end": 153
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 153,
                                        "end": 155
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 155,
                                        "end": 157
                                    },
                                    "flags": 32,
                                    "start": 149,
                                    "end": 157
                                },
                                "flags": 16,
                                "start": 149,
                                "end": 158
                            }
                        ],
                        "flags": 32,
                        "start": 149,
                        "end": 158
                    },
                    "flags": 32,
                    "start": 147,
                    "end": 160
                },
                "flags": 32,
                "start": 137,
                "end": 160
            },
            "flags": 16,
            "start": 137,
            "end": 161
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 164,
                    "end": 167
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 167,
                    "end": 170
                },
                "flags": 32,
                "start": 161,
                "end": 170
            },
            "flags": 16,
            "start": 161,
            "end": 171
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 173,
                    "end": 176
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 171,
                    "end": 173
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 176,
                    "end": 178
                },
                "flags": 32,
                "start": 171,
                "end": 178
            },
            "flags": 16,
            "start": 171,
            "end": 179
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 181,
                    "end": 184
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 179,
                    "end": 181
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 184,
                        "end": 186
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 186,
                        "end": 188
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 188,
                        "end": 190
                    },
                    "flags": 32,
                    "start": 184,
                    "end": 190
                },
                "flags": 32,
                "start": 179,
                "end": 190
            },
            "flags": 16,
            "start": 179,
            "end": 191
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 195,
                    "end": 198
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 193,
                        "end": 194
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 198,
                    "end": 200
                },
                "flags": 32,
                "start": 191,
                "end": 200
            },
            "flags": 16,
            "start": 191,
            "end": 201
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 205,
                    "end": 208
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 203,
                        "end": 204
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 208,
                        "end": 210
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 210,
                        "end": 212
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 212,
                        "end": 214
                    },
                    "flags": 32,
                    "start": 208,
                    "end": 214
                },
                "flags": 32,
                "start": 201,
                "end": 214
            },
            "flags": 16,
            "start": 201,
            "end": 215
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 222,
                    "end": 225
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 217,
                            "end": 218
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 219,
                            "end": 221
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 225,
                        "end": 227
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 227,
                        "end": 229
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 229,
                        "end": 231
                    },
                    "flags": 32,
                    "start": 225,
                    "end": 231
                },
                "flags": 32,
                "start": 215,
                "end": 231
            },
            "flags": 16,
            "start": 215,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 242,
                            "end": 245
                        },
                        "typeParameters": null,
                        "parameters": [
                            [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 234,
                                    "end": 235
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 236,
                                    "end": 238
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 239,
                                    "end": 241
                                }
                            ]
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 245,
                            "end": 247
                        },
                        "flags": 32,
                        "start": 232,
                        "end": 247
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 248,
                        "end": 250
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 251,
                        "end": 253
                    }
                ],
                "flags": 32,
                "start": 232,
                "end": 253
            },
            "flags": 16,
            "start": 232,
            "end": 254
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 261,
                    "end": 264
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 256,
                            "end": 257
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 258,
                            "end": 260
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 264,
                            "end": 266
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 267,
                            "end": 268
                        },
                        "flags": 536870944,
                        "start": 264,
                        "end": 268
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 268,
                        "end": 270
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 270,
                        "end": 272
                    },
                    "flags": 32,
                    "start": 264,
                    "end": 272
                },
                "flags": 32,
                "start": 254,
                "end": 272
            },
            "flags": 16,
            "start": 254,
            "end": 273
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 276,
                    "end": 279
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "value",
                                        "rawText": "'value'",
                                        "flags": 4194400,
                                        "start": 282,
                                        "end": 289
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 290,
                                        "end": 293
                                    },
                                    "flags": 32,
                                    "start": 282,
                                    "end": 293
                                }
                            ],
                            "trailingComma": false,
                            "flags": 4194320,
                            "start": 282,
                            "end": 293
                        },
                        "flags": 4194352,
                        "start": 281,
                        "end": 294
                    },
                    "flags": 32,
                    "start": 279,
                    "end": 295
                },
                "flags": 32,
                "start": 273,
                "end": 295
            },
            "flags": 16,
            "start": 273,
            "end": 296
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 298,
                    "end": 301
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 296,
                    "end": 298
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 303,
                        "end": 306
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 301,
                        "end": 303
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 306,
                            "end": 308
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 308,
                            "end": 310
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 310,
                            "end": 312
                        },
                        "flags": 32,
                        "start": 306,
                        "end": 312
                    },
                    "flags": 32,
                    "start": 301,
                    "end": 312
                },
                "flags": 32,
                "start": 296,
                "end": 312
            },
            "flags": 16,
            "start": 296,
            "end": 313
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 320,
                    "end": 323
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 315,
                            "end": 316
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 317,
                            "end": 319
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 330,
                        "end": 333
                    },
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "start": 325,
                                "end": 326
                            },
                            {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 327,
                                "end": 329
                            }
                        ]
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 333,
                                "end": 335
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 335,
                                "end": 336
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "start": 336,
                                "end": 337
                            },
                            "flags": 32,
                            "start": 333,
                            "end": 337
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 337,
                            "end": 339
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 339,
                                "end": 341
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 341,
                                "end": 342
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 342,
                                "end": 343
                            },
                            "flags": 32,
                            "start": 341,
                            "end": 343
                        },
                        "flags": 32,
                        "start": 333,
                        "end": 343
                    },
                    "flags": 32,
                    "start": 323,
                    "end": 343
                },
                "flags": 32,
                "start": 313,
                "end": 343
            },
            "flags": 16,
            "start": 313,
            "end": 344
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 351,
                    "end": 354
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 346,
                            "end": 347
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 348,
                            "end": 350
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 356,
                        "end": 359
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 354,
                        "end": 356
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 359,
                            "end": 361
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 361,
                            "end": 363
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 365,
                                    "end": 366
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 366,
                                    "end": 368
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 368,
                                    "end": 370
                                },
                                "flags": 32,
                                "start": 363,
                                "end": 370
                            },
                            "flags": 32,
                            "start": 363,
                            "end": 371
                        },
                        "flags": 32,
                        "start": 359,
                        "end": 371
                    },
                    "flags": 32,
                    "start": 354,
                    "end": 371
                },
                "flags": 32,
                "start": 344,
                "end": 371
            },
            "flags": 16,
            "start": 344,
            "end": 372
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 374,
                    "end": 377
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 372,
                    "end": 374
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 384,
                        "end": 387
                    },
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 379,
                                "end": 380
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 381,
                                "end": 383
                            }
                        ]
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 387,
                            "end": 389
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 389,
                            "end": 391
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 393,
                                    "end": 394
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 394,
                                    "end": 396
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 396,
                                    "end": 398
                                },
                                "flags": 32,
                                "start": 391,
                                "end": 398
                            },
                            "flags": 32,
                            "start": 391,
                            "end": 399
                        },
                        "flags": 32,
                        "start": 387,
                        "end": 399
                    },
                    "flags": 32,
                    "start": 377,
                    "end": 399
                },
                "flags": 32,
                "start": 372,
                "end": 399
            },
            "flags": 16,
            "start": 372,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 400,
                        "end": 547
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 550,
                            "end": 553
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 548,
                            "end": 550
                        },
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 553,
                            "end": 555
                        },
                        "flags": 32,
                        "start": 548,
                        "end": 555
                    }
                ],
                "flags": 32,
                "start": 400,
                "end": 555
            },
            "flags": 16,
            "start": 400,
            "end": 556
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 556,
                        "end": 558
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 559,
                        "end": 561
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 569,
                            "end": 572
                        },
                        "typeParameters": null,
                        "parameters": [
                            [
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 564,
                                    "end": 565
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 566,
                                    "end": 568
                                }
                            ]
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 572,
                            "end": 574
                        },
                        "flags": 32,
                        "start": 562,
                        "end": 574
                    }
                ],
                "flags": 32,
                "start": 556,
                "end": 574
            },
            "flags": 16,
            "start": 556,
            "end": 575
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 577,
                            "end": 578
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 579,
                            "end": 581
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 589,
                                "end": 592
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 584,
                                        "end": 585
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 586,
                                        "end": 588
                                    }
                                ]
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 592,
                                "end": 594
                            },
                            "flags": 32,
                            "start": 582,
                            "end": 594
                        }
                    ],
                    "flags": 32,
                    "start": 575,
                    "end": 594
                },
                "flags": 32,
                "start": 575,
                "end": 595
            },
            "flags": 16,
            "start": 575,
            "end": 596
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 603,
                            "end": 606
                        },
                        "typeParameters": null,
                        "parameters": [
                            [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 598,
                                    "end": 599
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 600,
                                    "end": 602
                                }
                            ]
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 606,
                            "end": 608
                        },
                        "flags": 32,
                        "start": 596,
                        "end": 608
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 616,
                            "end": 619
                        },
                        "typeParameters": null,
                        "parameters": [
                            [
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 611,
                                    "end": 612
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 613,
                                    "end": 615
                                }
                            ]
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 619,
                            "end": 621
                        },
                        "flags": 32,
                        "start": 609,
                        "end": 621
                    }
                ],
                "flags": 32,
                "start": 596,
                "end": 621
            },
            "flags": 16,
            "start": 596,
            "end": 622
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 624,
                            "end": 625
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 628,
                                "end": 631
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 626,
                                "end": 628
                            },
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 633,
                                    "end": 633
                                },
                                "flags": 32,
                                "start": 631,
                                "end": 634
                            },
                            "flags": 32,
                            "start": 626,
                            "end": 634
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 637,
                                "end": 640
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 635,
                                "end": 637
                            },
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 640,
                                    "end": 642
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 642,
                                    "end": 644
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 644,
                                    "end": 646
                                },
                                "flags": 32,
                                "start": 640,
                                "end": 646
                            },
                            "flags": 32,
                            "start": 635,
                            "end": 646
                        }
                    ],
                    "flags": 32,
                    "start": 622,
                    "end": 647
                },
                "flags": 32,
                "start": 622,
                "end": 647
            },
            "flags": 16,
            "start": 622,
            "end": 648
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 656,
                                "end": 659
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 651,
                                        "end": 652
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 653,
                                        "end": 655
                                    }
                                ]
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 661,
                                    "end": 661
                                },
                                "flags": 32,
                                "start": 659,
                                "end": 662
                            },
                            "flags": 32,
                            "start": 650,
                            "end": 662
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 666,
                                    "end": 669
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 665,
                                    "end": 666
                                },
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 669,
                                        "end": 671
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 671,
                                        "end": 673
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 673,
                                        "end": 675
                                    },
                                    "flags": 32,
                                    "start": 669,
                                    "end": 675
                                },
                                "flags": 32,
                                "start": 665,
                                "end": 675
                            },
                            "flags": 32,
                            "start": 663,
                            "end": 676
                        }
                    ],
                    "flags": 32,
                    "start": 648,
                    "end": 676
                },
                "flags": 32,
                "start": 648,
                "end": 677
            },
            "flags": 16,
            "start": 648,
            "end": 678
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 680,
                            "end": 681
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 684,
                                        "end": 685
                                    },
                                    {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 693,
                                            "end": 696
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 688,
                                                    "end": 689
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 690,
                                                    "end": 692
                                                }
                                            ]
                                        ],
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 696,
                                            "end": 698
                                        },
                                        "flags": 32,
                                        "start": 686,
                                        "end": 698
                                    }
                                ],
                                "flags": 32,
                                "start": 682,
                                "end": 698
                            },
                            "flags": 32,
                            "start": 682,
                            "end": 699
                        }
                    ],
                    "flags": 32,
                    "start": 678,
                    "end": 699
                },
                "flags": 32,
                "start": 678,
                "end": 700
            },
            "flags": 16,
            "start": 678,
            "end": 701
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 701,
                    "end": 780
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 780,
                    "end": 782
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 782,
                    "end": 786
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 786,
                    "end": 788
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 792,
                        "end": 795
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 788,
                        "end": 792
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 797,
                            "end": 797
                        },
                        "flags": 32,
                        "start": 795,
                        "end": 798
                    },
                    "flags": 32,
                    "start": 788,
                    "end": 798
                },
                "flags": 32,
                "start": 701,
                "end": 798
            },
            "flags": 16,
            "start": 701,
            "end": 799
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 843,
                    "end": 846
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 841,
                            "end": 841
                        },
                        "flags": 48,
                        "start": 840,
                        "end": 842
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 848,
                        "end": 848
                    },
                    "flags": 32,
                    "start": 846,
                    "end": 849
                },
                "flags": 34,
                "start": 799,
                "end": 849
            },
            "flags": 16,
            "start": 799,
            "end": 850
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 858,
                    "end": 861
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 852,
                            "end": 853
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 856,
                                "end": 856
                            },
                            "flags": 48,
                            "start": 854,
                            "end": 857
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 863,
                        "end": 863
                    },
                    "flags": 32,
                    "start": 861,
                    "end": 864
                },
                "flags": 34,
                "start": 850,
                "end": 864
            },
            "flags": 16,
            "start": 850,
            "end": 865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 873,
                    "end": 876
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 868,
                                "end": 868
                            },
                            "flags": 48,
                            "start": 867,
                            "end": 869
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 870,
                            "end": 872
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 878,
                        "end": 878
                    },
                    "flags": 32,
                    "start": 876,
                    "end": 879
                },
                "flags": 34,
                "start": 865,
                "end": 879
            },
            "flags": 16,
            "start": 865,
            "end": 880
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 885,
                    "end": 888
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 883,
                            "end": 883
                        },
                        "flags": 32,
                        "start": 882,
                        "end": 884
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 890,
                        "end": 890
                    },
                    "flags": 32,
                    "start": 888,
                    "end": 891
                },
                "flags": 34,
                "start": 880,
                "end": 891
            },
            "flags": 16,
            "start": 880,
            "end": 892
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 900,
                    "end": 903
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 894,
                            "end": 895
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 898,
                                "end": 898
                            },
                            "flags": 32,
                            "start": 896,
                            "end": 899
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 905,
                        "end": 905
                    },
                    "flags": 32,
                    "start": 903,
                    "end": 906
                },
                "flags": 34,
                "start": 892,
                "end": 906
            },
            "flags": 16,
            "start": 892,
            "end": 907
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 915,
                    "end": 918
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 910,
                                "end": 910
                            },
                            "flags": 32,
                            "start": 909,
                            "end": 911
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 912,
                            "end": 914
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 920,
                        "end": 920
                    },
                    "flags": 32,
                    "start": 918,
                    "end": 921
                },
                "flags": 34,
                "start": 907,
                "end": 921
            },
            "flags": 16,
            "start": 907,
            "end": 922
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 930,
                    "end": 933
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 924,
                            "end": 925
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 925,
                            "end": 927
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 927,
                            "end": 929
                        },
                        "flags": 32,
                        "start": 922,
                        "end": 929
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 935,
                        "end": 935
                    },
                    "flags": 32,
                    "start": 933,
                    "end": 936
                },
                "flags": 34,
                "start": 922,
                "end": 936
            },
            "flags": 16,
            "start": 922,
            "end": 937
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 948,
                    "end": 951
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 939,
                                "end": 940
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 940,
                                "end": 942
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 942,
                                "end": 944
                            },
                            "flags": 32,
                            "start": 937,
                            "end": 944
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 945,
                            "end": 947
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 953,
                        "end": 953
                    },
                    "flags": 32,
                    "start": 951,
                    "end": 954
                },
                "flags": 34,
                "start": 937,
                "end": 954
            },
            "flags": 16,
            "start": 937,
            "end": 955
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 966,
                    "end": 969
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 957,
                            "end": 958
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 959,
                                "end": 961
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 961,
                                "end": 963
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 963,
                                "end": 965
                            },
                            "flags": 32,
                            "start": 955,
                            "end": 965
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 971,
                        "end": 971
                    },
                    "flags": 32,
                    "start": 969,
                    "end": 972
                },
                "flags": 34,
                "start": 955,
                "end": 972
            },
            "flags": 16,
            "start": 955,
            "end": 973
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 979,
                    "end": 982
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 976,
                                    "end": 977
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 976,
                            "end": 977
                        },
                        "flags": 48,
                        "start": 975,
                        "end": 978
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 984,
                        "end": 984
                    },
                    "flags": 32,
                    "start": 982,
                    "end": 985
                },
                "flags": 34,
                "start": 973,
                "end": 985
            },
            "flags": 16,
            "start": 973,
            "end": 986
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 994,
                    "end": 997
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 988,
                            "end": 989
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 989,
                            "end": 991
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 991,
                            "end": 993
                        },
                        "flags": 32,
                        "start": 986,
                        "end": 993
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 999,
                        "end": 999
                    },
                    "flags": 32,
                    "start": 997,
                    "end": 1000
                },
                "flags": 34,
                "start": 986,
                "end": 1000
            },
            "flags": 16,
            "start": 986,
            "end": 1001
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1012,
                    "end": 1015
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1003,
                            "end": 1004
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1005,
                                "end": 1007
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1007,
                                "end": 1009
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1009,
                                "end": 1011
                            },
                            "flags": 32,
                            "start": 1001,
                            "end": 1011
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1017,
                        "end": 1017
                    },
                    "flags": 32,
                    "start": 1015,
                    "end": 1018
                },
                "flags": 34,
                "start": 1001,
                "end": 1018
            },
            "flags": 16,
            "start": 1001,
            "end": 1019
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1030,
                    "end": 1033
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1021,
                                "end": 1022
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1022,
                                "end": 1024
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1024,
                                "end": 1026
                            },
                            "flags": 32,
                            "start": 1019,
                            "end": 1026
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1027,
                            "end": 1029
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1035,
                        "end": 1035
                    },
                    "flags": 32,
                    "start": 1033,
                    "end": 1036
                },
                "flags": 34,
                "start": 1019,
                "end": 1036
            },
            "flags": 16,
            "start": 1019,
            "end": 1037
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1051,
                    "end": 1054
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1039,
                            "end": 1040
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1041,
                                "end": 1043
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1043,
                                "end": 1045
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1045,
                                "end": 1047
                            },
                            "flags": 32,
                            "start": 1037,
                            "end": 1047
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 1048,
                            "end": 1050
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1056,
                        "end": 1056
                    },
                    "flags": 32,
                    "start": 1054,
                    "end": 1057
                },
                "flags": 34,
                "start": 1037,
                "end": 1057
            },
            "flags": 16,
            "start": 1037,
            "end": 1058
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1076,
                    "end": 1079
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1060,
                            "end": 1061
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1062,
                                "end": 1064
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1064,
                                "end": 1066
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1066,
                                "end": 1068
                            },
                            "flags": 32,
                            "start": 1058,
                            "end": 1068
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 1069,
                                "end": 1071
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1071,
                                "end": 1073
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 8,
                                "rawText": "8",
                                "flags": 96,
                                "start": 1073,
                                "end": 1075
                            },
                            "flags": 32,
                            "start": 1058,
                            "end": 1075
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1081,
                        "end": 1081
                    },
                    "flags": 32,
                    "start": 1079,
                    "end": 1082
                },
                "flags": 34,
                "start": 1058,
                "end": 1082
            },
            "flags": 16,
            "start": 1058,
            "end": 1083
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1090,
                    "end": 1093
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1085,
                            "end": 1088
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1088,
                            "end": 1089
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 1085,
                        "end": 1089
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1095,
                        "end": 1095
                    },
                    "flags": 32,
                    "start": 1093,
                    "end": 1096
                },
                "flags": 32,
                "start": 1083,
                "end": 1096
            },
            "flags": 16,
            "start": 1083,
            "end": 1097
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1107,
                    "end": 1110
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1099,
                            "end": 1100
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1101,
                                "end": 1105
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1105,
                                "end": 1106
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 1101,
                            "end": 1106
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1112,
                        "end": 1112
                    },
                    "flags": 32,
                    "start": 1110,
                    "end": 1113
                },
                "flags": 32,
                "start": 1097,
                "end": 1113
            },
            "flags": 16,
            "start": 1097,
            "end": 1114
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1128,
                    "end": 1131
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1116,
                                "end": 1117
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1117,
                                "end": 1119
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1119,
                                "end": 1121
                            },
                            "flags": 32,
                            "start": 1114,
                            "end": 1121
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1122,
                                "end": 1126
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1126,
                                "end": 1127
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 1122,
                            "end": 1127
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1133,
                        "end": 1133
                    },
                    "flags": 32,
                    "start": 1131,
                    "end": 1134
                },
                "flags": 34,
                "start": 1114,
                "end": 1134
            },
            "flags": 16,
            "start": 1114,
            "end": 1135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1152,
                    "end": 1155
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1137,
                            "end": 1138
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1139,
                                "end": 1141
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1141,
                                "end": 1143
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1143,
                                "end": 1145
                            },
                            "flags": 32,
                            "start": 1135,
                            "end": 1145
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1146,
                                "end": 1150
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1150,
                                "end": 1151
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 1146,
                            "end": 1151
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1157,
                        "end": 1157
                    },
                    "flags": 32,
                    "start": 1155,
                    "end": 1158
                },
                "flags": 34,
                "start": 1135,
                "end": 1158
            },
            "flags": 16,
            "start": 1135,
            "end": 1159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1188,
                    "end": 1191
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1161,
                            "end": 1162
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1163,
                                "end": 1165
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1165,
                                "end": 1167
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "start": 1167,
                                "end": 1169
                            },
                            "flags": 32,
                            "start": 1159,
                            "end": 1169
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 1172,
                                        "end": 1173
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1172,
                                "end": 1173
                            },
                            "flags": 48,
                            "start": 1170,
                            "end": 1174
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 1175,
                                "end": 1177
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 1177,
                                "end": 1179
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 8,
                                "rawText": "8",
                                "flags": 96,
                                "start": 1179,
                                "end": 1181
                            },
                            "flags": 32,
                            "start": 1159,
                            "end": 1181
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1182,
                                "end": 1186
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1186,
                                "end": 1187
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 1182,
                            "end": 1187
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1193,
                        "end": 1193
                    },
                    "flags": 32,
                    "start": 1191,
                    "end": 1194
                },
                "flags": 34,
                "start": 1159,
                "end": 1194
            },
            "flags": 16,
            "start": 1159,
            "end": 1195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1206,
                    "end": 1209
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1198,
                                        "end": 1199
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1198,
                                "end": 1199
                            },
                            "flags": 48,
                            "start": 1197,
                            "end": 1200
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 1200,
                            "end": 1202
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1204,
                                "end": 1204
                            },
                            "flags": 48,
                            "start": 1202,
                            "end": 1205
                        },
                        "flags": 32,
                        "start": 1197,
                        "end": 1205
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1211,
                        "end": 1211
                    },
                    "flags": 32,
                    "start": 1209,
                    "end": 1212
                },
                "flags": 34,
                "start": 1195,
                "end": 1212
            },
            "flags": 16,
            "start": 1195,
            "end": 1213
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1224,
                    "end": 1227
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1216,
                                        "end": 1217
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1216,
                                "end": 1217
                            },
                            "flags": 32,
                            "start": 1215,
                            "end": 1218
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 1218,
                            "end": 1220
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1222,
                                "end": 1222
                            },
                            "flags": 32,
                            "start": 1220,
                            "end": 1223
                        },
                        "flags": 32,
                        "start": 1215,
                        "end": 1223
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1229,
                        "end": 1229
                    },
                    "flags": 32,
                    "start": 1227,
                    "end": 1230
                },
                "flags": 34,
                "start": 1213,
                "end": 1230
            },
            "flags": 16,
            "start": 1213,
            "end": 1231
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1242,
                    "end": 1245
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1234,
                                        "end": 1235
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 1237,
                                        "end": 1240
                                    },
                                    "flags": 32,
                                    "start": 1234,
                                    "end": 1240
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1234,
                            "end": 1240
                        },
                        "flags": 48,
                        "start": 1233,
                        "end": 1241
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1247,
                        "end": 1247
                    },
                    "flags": 32,
                    "start": 1245,
                    "end": 1248
                },
                "flags": 34,
                "start": 1231,
                "end": 1248
            },
            "flags": 16,
            "start": 1231,
            "end": 1249
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1259,
                    "end": 1262
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1252,
                                        "end": 1253
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 1253,
                                        "end": 1255
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 1255,
                                        "end": 1257
                                    },
                                    "flags": 32,
                                    "start": 1252,
                                    "end": 1257
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1252,
                            "end": 1257
                        },
                        "flags": 32,
                        "start": 1251,
                        "end": 1258
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1264,
                        "end": 1264
                    },
                    "flags": 32,
                    "start": 1262,
                    "end": 1265
                },
                "flags": 34,
                "start": 1249,
                "end": 1265
            },
            "flags": 16,
            "start": 1249,
            "end": 1266
        }
    ],
    "isModule": false,
    "source": "() => {};\n() => { return 42 };\nx => { return x; };\n(x) => { return x; };\n(x, y) => { return x + y; };\n(x, y, z) => { return x + y + z; };\n(x, y) => { x.a = y; };\n() => 42;\nx => x;\nx => x * x;\n(x) => x;\n(x) => x * x;\n(x, y) => x + y;\n(x, y, z) => x, y, z;\n(x, y) => x.a = y;\n() => ({'value': 42});\nx => y => x + y;\n(x, y) => (u, v) => x*u + y*v;\n(x, y) => z => z * (x + y);\nx => (y, z) => z * (x + y);\n\n// Those are comma-separated expressions, with arrow functions as items.\n// They stress the code for validating arrow function parameter lists.\na, b => 0;\na, b, (c, d) => 0;\n(a, b, (c, d) => 0);\n(a, b) => 0, (c, d) => 1;\n(a, b => {}, a => a + 1);\n((a, b) => {}, (a => a + 1));\n(a, (a, (b, c) => 0));\n\n// Arrow has more precedence, this is the same as: foo ? bar : (baz = {})\nfoo ? bar : baz => {};\n\n// Arrows with non-simple parameters.\n({}) => {};\n(a, {}) => {};\n({}, a) => {};\n([]) => {};\n(a, []) => {};\n([], a) => {};\n(a = b) => {};\n(a = b, c) => {};\n(a, b = c) => {};\n({a}) => {};\n(x = 9) => {};\n(x, y = 9) => {};\n(x = 9, y) => {};\n(x, y = 9, z) => {};\n(x, y = 9, z = 8) => {};\n(...a) => {};\n(x, ...a) => {};\n(x = 9, ...a) => {};\n(x, y = 9, ...a) => {};\n(x, y = 9, {b}, z = 8, ...a) => {};\n({a} = {}) => {};\n([x] = []) => {};\n({a = 42}) => {};\n([x = 0]) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1266
}
```

### Printed

```javascript

() =>  {};
() =>  {
  return  42;
};
x =>  {
  return  x;
};
(x) =>  {
  return  x;
};
() =>  {
  return  x + y;
};
() =>  {
  return  x + y + z;
};
() =>  {
  x.a = y;
};
() =>  42;
x =>  x;
x =>  x * x;
(x) =>  x;
(x) =>  x * x;
() =>  x + y;
() =>  x, y, z;
() =>  x.a = y;
() =>  ({ "'value'": 42 });
x =>  y =>  x + y;
() =>  () =>  x * u + y * v;
() =>  z =>  z * (x + y);
x =>  () =>  z * (x + y);
// Those are comma-separated expressions, with arrow functions as items.
// They stress the code for validating arrow function parameter lists.
a, b =>  0;
a, b, () =>  0;
(a, b, () =>  0);
() =>  0, () =>  1;
(a, b =>  {}, a =>  a + 1);
(() =>  {}, (a =>  a + 1));
(a, (a, () =>  0));
// Arrow has more precedence, this is the same as: foo ? bar : (baz = {})
foo ? bar : baz =>  {};
// Arrows with non-simple parameters.
({}) =>  {};
() =>  {};
() =>  {};
([]) =>  {};
() =>  {};
() =>  {};
(a = b) =>  {};
() =>  {};
() =>  {};
({ a }) =>  {};
(x = 9) =>  {};
() =>  {};
() =>  {};
() =>  {};
() =>  {};
(...a) =>  {};
() =>  {};
() =>  {};
() =>  {};
() =>  {};
({ a } = {}) =>  {};
([x] = []) =>  {};
({ a = 42 }) =>  {};
([x = 0]) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

