# Kataw parser test case

## Input

`````js
() => {};
() => { return 42 };
1 < (() => {});
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

() => {}
(0);

x => {}
(0);

async () => {}
(0);

(() => {})
(0);

(x => {})
(0);

(async () => {})
(0);

(async x => {})
(0)

(async (x) => {})
(0);

(() => {}
,0);

y = (() => {}
,0);

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

(() => {}) ? a : b;
(() => {}) ? a : b;

1 < (() => {});

// Can assign an arrow function
y = x => {};
y = () => {};
y = (x) => {};
y = async x => {};
z = async () => {};
y = async (x) => {};

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
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2,
                    "end": 5
                },
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
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
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
                                    "flags": 80,
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
                                "flags": 80,
                                "start": 17,
                                "end": 27
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
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 38,
                            "end": 41
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 41,
                            "end": 44
                        },
                        "flags": 32,
                        "start": 36,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 45
                },
                "flags": 32,
                "start": 30,
                "end": 45
            },
            "flags": 16,
            "start": 30,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 46,
                    "end": 48
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 48,
                    "end": 51
                },
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
                                    "flags": 80,
                                    "start": 53,
                                    "end": 60
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 62
                                },
                                "flags": 80,
                                "start": 53,
                                "end": 63
                            }
                        ],
                        "flags": 32,
                        "start": 53,
                        "end": 63
                    },
                    "flags": 32,
                    "start": 51,
                    "end": 65
                },
                "flags": 32,
                "start": 46,
                "end": 65
            },
            "flags": 16,
            "start": 46,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 68,
                        "end": 69
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 70,
                    "end": 73
                },
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
                                    "flags": 80,
                                    "start": 75,
                                    "end": 82
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 82,
                                    "end": 84
                                },
                                "flags": 80,
                                "start": 75,
                                "end": 85
                            }
                        ],
                        "flags": 32,
                        "start": 75,
                        "end": 85
                    },
                    "flags": 32,
                    "start": 73,
                    "end": 87
                },
                "flags": 32,
                "start": 66,
                "end": 87
            },
            "flags": 16,
            "start": 66,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 90,
                        "end": 91
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 92,
                        "end": 94
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 95,
                    "end": 98
                },
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
                                    "flags": 80,
                                    "start": 100,
                                    "end": 107
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 107,
                                        "end": 109
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 109,
                                        "end": 111
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 111,
                                        "end": 113
                                    },
                                    "flags": 32,
                                    "start": 107,
                                    "end": 113
                                },
                                "flags": 80,
                                "start": 100,
                                "end": 114
                            }
                        ],
                        "flags": 32,
                        "start": 100,
                        "end": 114
                    },
                    "flags": 32,
                    "start": 98,
                    "end": 116
                },
                "flags": 32,
                "start": 88,
                "end": 116
            },
            "flags": 16,
            "start": 88,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 119,
                        "end": 120
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 121,
                        "end": 123
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 124,
                        "end": 126
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 127,
                    "end": 130
                },
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
                                    "flags": 80,
                                    "start": 132,
                                    "end": 139
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
                                            "start": 139,
                                            "end": 141
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 141,
                                            "end": 143
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 143,
                                            "end": 145
                                        },
                                        "flags": 32,
                                        "start": 139,
                                        "end": 145
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 145,
                                        "end": 147
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 147,
                                        "end": 149
                                    },
                                    "flags": 32,
                                    "start": 139,
                                    "end": 149
                                },
                                "flags": 80,
                                "start": 132,
                                "end": 150
                            }
                        ],
                        "flags": 32,
                        "start": 132,
                        "end": 150
                    },
                    "flags": 32,
                    "start": 130,
                    "end": 152
                },
                "flags": 32,
                "start": 117,
                "end": 152
            },
            "flags": 16,
            "start": 117,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 155,
                        "end": 156
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 157,
                        "end": 159
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 160,
                    "end": 163
                },
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
                                            "start": 165,
                                            "end": 167
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 168,
                                            "end": 169
                                        },
                                        "flags": 536870944,
                                        "start": 165,
                                        "end": 169
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
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
                                    "flags": 32,
                                    "start": 165,
                                    "end": 173
                                },
                                "flags": 16,
                                "start": 165,
                                "end": 174
                            }
                        ],
                        "flags": 32,
                        "start": 165,
                        "end": 174
                    },
                    "flags": 32,
                    "start": 163,
                    "end": 176
                },
                "flags": 32,
                "start": 153,
                "end": 176
            },
            "flags": 16,
            "start": 153,
            "end": 177
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 180,
                    "end": 183
                },
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 183,
                    "end": 186
                },
                "flags": 32,
                "start": 177,
                "end": 186
            },
            "flags": 16,
            "start": 177,
            "end": 187
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 187,
                    "end": 189
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 189,
                    "end": 192
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 192,
                    "end": 194
                },
                "flags": 32,
                "start": 187,
                "end": 194
            },
            "flags": 16,
            "start": 187,
            "end": 195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 195,
                    "end": 197
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 197,
                    "end": 200
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 200,
                        "end": 202
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "start": 202,
                        "end": 204
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 204,
                        "end": 206
                    },
                    "flags": 32,
                    "start": 200,
                    "end": 206
                },
                "flags": 32,
                "start": 195,
                "end": 206
            },
            "flags": 16,
            "start": 195,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 209,
                        "end": 210
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 211,
                    "end": 214
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 214,
                    "end": 216
                },
                "flags": 32,
                "start": 207,
                "end": 216
            },
            "flags": 16,
            "start": 207,
            "end": 217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 219,
                        "end": 220
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 221,
                    "end": 224
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 224,
                        "end": 226
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "start": 226,
                        "end": 228
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 228,
                        "end": 230
                    },
                    "flags": 32,
                    "start": 224,
                    "end": 230
                },
                "flags": 32,
                "start": 217,
                "end": 230
            },
            "flags": 16,
            "start": 217,
            "end": 231
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 233,
                        "end": 234
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 235,
                        "end": 237
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 238,
                    "end": 241
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 241,
                        "end": 243
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 243,
                        "end": 245
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 245,
                        "end": 247
                    },
                    "flags": 32,
                    "start": 241,
                    "end": 247
                },
                "flags": 32,
                "start": 231,
                "end": 247
            },
            "flags": 16,
            "start": 231,
            "end": 248
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 250,
                                "end": 251
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 252,
                                "end": 254
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 255,
                                "end": 257
                            }
                        ],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 258,
                            "end": 261
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 261,
                            "end": 263
                        },
                        "flags": 32,
                        "start": 248,
                        "end": 263
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 264,
                        "end": 266
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 267,
                        "end": 269
                    }
                ],
                "flags": 32,
                "start": 248,
                "end": 269
            },
            "flags": 16,
            "start": 248,
            "end": 270
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 272,
                        "end": 273
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 274,
                        "end": 276
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 277,
                    "end": 280
                },
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 280,
                            "end": 282
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 283,
                            "end": 284
                        },
                        "flags": 536870944,
                        "start": 280,
                        "end": 284
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 284,
                        "end": 286
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 286,
                        "end": 288
                    },
                    "flags": 32,
                    "start": 280,
                    "end": 288
                },
                "flags": 32,
                "start": 270,
                "end": 288
            },
            "flags": 16,
            "start": 270,
            "end": 289
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 292,
                    "end": 295
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "value",
                                        "rawText": "'value'",
                                        "flags": 4194400,
                                        "start": 298,
                                        "end": 305
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 306,
                                        "end": 309
                                    },
                                    "flags": 4194336,
                                    "start": 298,
                                    "end": 309
                                }
                            ],
                            "trailingComma": false,
                            "flags": 4194320,
                            "start": 298,
                            "end": 309
                        },
                        "flags": 4194352,
                        "start": 297,
                        "end": 310
                    },
                    "flags": 32,
                    "start": 295,
                    "end": 311
                },
                "flags": 32,
                "start": 289,
                "end": 311
            },
            "flags": 16,
            "start": 289,
            "end": 312
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 312,
                    "end": 314
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 314,
                    "end": 317
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 317,
                        "end": 319
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 319,
                        "end": 322
                    },
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 322,
                            "end": 324
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 324,
                            "end": 326
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 326,
                            "end": 328
                        },
                        "flags": 32,
                        "start": 322,
                        "end": 328
                    },
                    "flags": 32,
                    "start": 317,
                    "end": 328
                },
                "flags": 32,
                "start": 312,
                "end": 328
            },
            "flags": 16,
            "start": 312,
            "end": 329
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 331,
                        "end": 332
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 333,
                        "end": 335
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 336,
                    "end": 339
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "u",
                            "rawText": "u",
                            "flags": 96,
                            "start": 341,
                            "end": 342
                        },
                        {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 343,
                            "end": 345
                        }
                    ],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 346,
                        "end": 349
                    },
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 349,
                                "end": 351
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 351,
                                "end": 352
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "start": 352,
                                "end": 353
                            },
                            "flags": 32,
                            "start": 349,
                            "end": 353
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 353,
                            "end": 355
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 355,
                                "end": 357
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 357,
                                "end": 358
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 358,
                                "end": 359
                            },
                            "flags": 32,
                            "start": 357,
                            "end": 359
                        },
                        "flags": 32,
                        "start": 349,
                        "end": 359
                    },
                    "flags": 32,
                    "start": 339,
                    "end": 359
                },
                "flags": 32,
                "start": 329,
                "end": 359
            },
            "flags": 16,
            "start": 329,
            "end": 360
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 362,
                        "end": 363
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 364,
                        "end": 366
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 367,
                    "end": 370
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 370,
                        "end": 372
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 372,
                        "end": 375
                    },
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 375,
                            "end": 377
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "start": 377,
                            "end": 379
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
                                    "start": 381,
                                    "end": 382
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 382,
                                    "end": 384
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 384,
                                    "end": 386
                                },
                                "flags": 32,
                                "start": 379,
                                "end": 386
                            },
                            "flags": 32,
                            "start": 379,
                            "end": 387
                        },
                        "flags": 32,
                        "start": 375,
                        "end": 387
                    },
                    "flags": 32,
                    "start": 370,
                    "end": 387
                },
                "flags": 32,
                "start": 360,
                "end": 387
            },
            "flags": 16,
            "start": 360,
            "end": 388
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 388,
                    "end": 390
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 390,
                    "end": 393
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 395,
                            "end": 396
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 397,
                            "end": 399
                        }
                    ],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 400,
                        "end": 403
                    },
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 403,
                            "end": 405
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "start": 405,
                            "end": 407
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
                                    "start": 409,
                                    "end": 410
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 410,
                                    "end": 412
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 412,
                                    "end": 414
                                },
                                "flags": 32,
                                "start": 407,
                                "end": 414
                            },
                            "flags": 32,
                            "start": 407,
                            "end": 415
                        },
                        "flags": 32,
                        "start": 403,
                        "end": 415
                    },
                    "flags": 32,
                    "start": 393,
                    "end": 415
                },
                "flags": 32,
                "start": 388,
                "end": 415
            },
            "flags": 16,
            "start": 388,
            "end": 416
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 420,
                    "end": 423
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 425,
                        "end": 425
                    },
                    "flags": 32,
                    "start": 423,
                    "end": 426
                },
                "flags": 32,
                "start": 416,
                "end": 426
            },
            "flags": 16,
            "start": 416,
            "end": 426
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 428,
                    "end": 429
                },
                "flags": 32,
                "start": 426,
                "end": 430
            },
            "flags": 16,
            "start": 426,
            "end": 431
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 431,
                    "end": 434
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 434,
                    "end": 437
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 439,
                        "end": 439
                    },
                    "flags": 32,
                    "start": 437,
                    "end": 440
                },
                "flags": 32,
                "start": 431,
                "end": 440
            },
            "flags": 16,
            "start": 431,
            "end": 440
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 442,
                    "end": 443
                },
                "flags": 32,
                "start": 440,
                "end": 444
            },
            "flags": 16,
            "start": 440,
            "end": 445
        },
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 445,
                "end": 452
            },
            "typeParameters": null,
            "parameters": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 455,
                "end": 458
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 460,
                    "end": 460
                },
                "flags": 32,
                "start": 458,
                "end": 461
            },
            "flags": 288,
            "start": 445,
            "end": 461
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 463,
                    "end": 464
                },
                "flags": 32,
                "start": 461,
                "end": 465
            },
            "flags": 16,
            "start": 461,
            "end": 466
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 471,
                            "end": 474
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 476,
                                "end": 476
                            },
                            "flags": 32,
                            "start": 474,
                            "end": 477
                        },
                        "flags": 32,
                        "start": 469,
                        "end": 477
                    },
                    "flags": 32,
                    "start": 466,
                    "end": 478
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 480,
                            "end": 481
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 480,
                    "end": 481
                },
                "flags": 268435489,
                "start": 466,
                "end": 482
            },
            "flags": 16,
            "start": 466,
            "end": 483
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 486,
                            "end": 487
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 487,
                            "end": 490
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 492,
                                "end": 492
                            },
                            "flags": 32,
                            "start": 490,
                            "end": 493
                        },
                        "flags": 32,
                        "start": 486,
                        "end": 493
                    },
                    "flags": 32,
                    "start": 483,
                    "end": 494
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 496,
                            "end": 497
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 496,
                    "end": 497
                },
                "flags": 268435489,
                "start": 483,
                "end": 498
            },
            "flags": 16,
            "start": 483,
            "end": 499
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 502,
                            "end": 507
                        },
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 510,
                            "end": 513
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 515,
                                "end": 515
                            },
                            "flags": 32,
                            "start": 513,
                            "end": 516
                        },
                        "flags": 288,
                        "start": 502,
                        "end": 516
                    },
                    "flags": 32,
                    "start": 499,
                    "end": 517
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 519,
                            "end": 520
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 519,
                    "end": 520
                },
                "flags": 268435489,
                "start": 499,
                "end": 521
            },
            "flags": 16,
            "start": 499,
            "end": 522
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 525,
                                    "end": 530
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 530,
                                    "end": 532
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 532,
                                    "end": 535
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 537,
                                        "end": 537
                                    },
                                    "flags": 32,
                                    "start": 535,
                                    "end": 538
                                },
                                "flags": 288,
                                "start": 525,
                                "end": 538
                            },
                            "flags": 32,
                            "start": 522,
                            "end": 539
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 541,
                                    "end": 542
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 541,
                            "end": 542
                        },
                        "flags": 268435489,
                        "start": 522,
                        "end": 543
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 546,
                                    "end": 551
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 553,
                                        "end": 554
                                    }
                                ],
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 555,
                                    "end": 558
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 560,
                                        "end": 560
                                    },
                                    "flags": 32,
                                    "start": 558,
                                    "end": 561
                                },
                                "flags": 288,
                                "start": 546,
                                "end": 561
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 546,
                        "end": 561
                    },
                    "flags": 268435489,
                    "start": 522,
                    "end": 562
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 564,
                            "end": 565
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 564,
                    "end": 565
                },
                "flags": 268435489,
                "start": 522,
                "end": 566
            },
            "flags": 16,
            "start": 522,
            "end": 567
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
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 572,
                                "end": 575
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 577,
                                    "end": 577
                                },
                                "flags": 32,
                                "start": 575,
                                "end": 578
                            },
                            "flags": 32,
                            "start": 570,
                            "end": 578
                        },
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 580,
                            "end": 581
                        }
                    ],
                    "flags": 32,
                    "start": 567,
                    "end": 581
                },
                "flags": 32,
                "start": 567,
                "end": 582
            },
            "flags": 16,
            "start": 567,
            "end": 583
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 583,
                    "end": 586
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 586,
                    "end": 588
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "parameters": [],
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 592,
                                    "end": 595
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 597,
                                        "end": 597
                                    },
                                    "flags": 32,
                                    "start": 595,
                                    "end": 598
                                },
                                "flags": 32,
                                "start": 590,
                                "end": 598
                            },
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 600,
                                "end": 601
                            }
                        ],
                        "flags": 32,
                        "start": 588,
                        "end": 601
                    },
                    "flags": 32,
                    "start": 588,
                    "end": 602
                },
                "flags": 32,
                "start": 583,
                "end": 602
            },
            "flags": 16,
            "start": 583,
            "end": 603
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
                        "start": 603,
                        "end": 750
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 751,
                            "end": 753
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 753,
                            "end": 756
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 756,
                            "end": 758
                        },
                        "flags": 32,
                        "start": 751,
                        "end": 758
                    }
                ],
                "flags": 32,
                "start": 603,
                "end": 758
            },
            "flags": 16,
            "start": 603,
            "end": 759
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
                        "start": 759,
                        "end": 761
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 762,
                        "end": 764
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 767,
                                "end": 768
                            },
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 769,
                                "end": 771
                            }
                        ],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 772,
                            "end": 775
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 775,
                            "end": 777
                        },
                        "flags": 32,
                        "start": 765,
                        "end": 777
                    }
                ],
                "flags": 32,
                "start": 759,
                "end": 777
            },
            "flags": 16,
            "start": 759,
            "end": 778
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
                            "start": 780,
                            "end": 781
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 782,
                            "end": 784
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 787,
                                    "end": 788
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 789,
                                    "end": 791
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 792,
                                "end": 795
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 795,
                                "end": 797
                            },
                            "flags": 32,
                            "start": 785,
                            "end": 797
                        }
                    ],
                    "flags": 32,
                    "start": 778,
                    "end": 797
                },
                "flags": 32,
                "start": 778,
                "end": 798
            },
            "flags": 16,
            "start": 778,
            "end": 799
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 801,
                                "end": 802
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 803,
                                "end": 805
                            }
                        ],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 806,
                            "end": 809
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 809,
                            "end": 811
                        },
                        "flags": 32,
                        "start": 799,
                        "end": 811
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 814,
                                "end": 815
                            },
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 816,
                                "end": 818
                            }
                        ],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 819,
                            "end": 822
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 822,
                            "end": 824
                        },
                        "flags": 32,
                        "start": 812,
                        "end": 824
                    }
                ],
                "flags": 32,
                "start": 799,
                "end": 824
            },
            "flags": 16,
            "start": 799,
            "end": 825
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
                            "start": 827,
                            "end": 828
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 829,
                                "end": 831
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 831,
                                "end": 834
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 836,
                                    "end": 836
                                },
                                "flags": 32,
                                "start": 834,
                                "end": 837
                            },
                            "flags": 32,
                            "start": 829,
                            "end": 837
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 838,
                                "end": 840
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 840,
                                "end": 843
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 843,
                                    "end": 845
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 845,
                                    "end": 847
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 847,
                                    "end": 849
                                },
                                "flags": 32,
                                "start": 843,
                                "end": 849
                            },
                            "flags": 32,
                            "start": 838,
                            "end": 849
                        }
                    ],
                    "flags": 32,
                    "start": 825,
                    "end": 850
                },
                "flags": 32,
                "start": 825,
                "end": 850
            },
            "flags": 16,
            "start": 825,
            "end": 851
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
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 854,
                                    "end": 855
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 856,
                                    "end": 858
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 859,
                                "end": 862
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 864,
                                    "end": 864
                                },
                                "flags": 32,
                                "start": 862,
                                "end": 865
                            },
                            "flags": 32,
                            "start": 853,
                            "end": 865
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 868,
                                    "end": 869
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 869,
                                    "end": 872
                                },
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 872,
                                        "end": 874
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 874,
                                        "end": 876
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 876,
                                        "end": 878
                                    },
                                    "flags": 32,
                                    "start": 872,
                                    "end": 878
                                },
                                "flags": 32,
                                "start": 868,
                                "end": 878
                            },
                            "flags": 32,
                            "start": 866,
                            "end": 879
                        }
                    ],
                    "flags": 32,
                    "start": 851,
                    "end": 879
                },
                "flags": 32,
                "start": 851,
                "end": 880
            },
            "flags": 16,
            "start": 851,
            "end": 881
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
                            "start": 883,
                            "end": 884
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
                                        "start": 887,
                                        "end": 888
                                    },
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 891,
                                                "end": 892
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 893,
                                                "end": 895
                                            }
                                        ],
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 896,
                                            "end": 899
                                        },
                                        "contents": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 899,
                                            "end": 901
                                        },
                                        "flags": 32,
                                        "start": 889,
                                        "end": 901
                                    }
                                ],
                                "flags": 32,
                                "start": 885,
                                "end": 901
                            },
                            "flags": 32,
                            "start": 885,
                            "end": 902
                        }
                    ],
                    "flags": 32,
                    "start": 881,
                    "end": 902
                },
                "flags": 32,
                "start": 881,
                "end": 903
            },
            "flags": 16,
            "start": 881,
            "end": 904
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
                    "start": 904,
                    "end": 983
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 983,
                    "end": 985
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 985,
                    "end": 989
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 989,
                    "end": 991
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 991,
                        "end": 995
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 995,
                        "end": 998
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1000,
                            "end": 1000
                        },
                        "flags": 32,
                        "start": 998,
                        "end": 1001
                    },
                    "flags": 32,
                    "start": 991,
                    "end": 1001
                },
                "flags": 32,
                "start": 904,
                "end": 1001
            },
            "flags": 16,
            "start": 904,
            "end": 1002
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1044,
                            "end": 1044
                        },
                        "flags": 48,
                        "start": 1043,
                        "end": 1045
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1046,
                    "end": 1049
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1051,
                        "end": 1051
                    },
                    "flags": 32,
                    "start": 1049,
                    "end": 1052
                },
                "flags": 34,
                "start": 1002,
                "end": 1052
            },
            "flags": 16,
            "start": 1002,
            "end": 1053
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1055,
                        "end": 1056
                    },
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1059,
                            "end": 1059
                        },
                        "flags": 48,
                        "start": 1057,
                        "end": 1060
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1061,
                    "end": 1064
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1066,
                        "end": 1066
                    },
                    "flags": 32,
                    "start": 1064,
                    "end": 1067
                },
                "flags": 34,
                "start": 1053,
                "end": 1067
            },
            "flags": 16,
            "start": 1053,
            "end": 1068
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1071,
                            "end": 1071
                        },
                        "flags": 48,
                        "start": 1070,
                        "end": 1072
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1073,
                        "end": 1075
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1076,
                    "end": 1079
                },
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
                "start": 1068,
                "end": 1082
            },
            "flags": 16,
            "start": 1068,
            "end": 1083
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1086,
                            "end": 1086
                        },
                        "flags": 32,
                        "start": 1085,
                        "end": 1087
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1088,
                    "end": 1091
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1093,
                        "end": 1093
                    },
                    "flags": 32,
                    "start": 1091,
                    "end": 1094
                },
                "flags": 34,
                "start": 1083,
                "end": 1094
            },
            "flags": 16,
            "start": 1083,
            "end": 1095
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1097,
                        "end": 1098
                    },
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1101,
                            "end": 1101
                        },
                        "flags": 32,
                        "start": 1099,
                        "end": 1102
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1103,
                    "end": 1106
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1108,
                        "end": 1108
                    },
                    "flags": 32,
                    "start": 1106,
                    "end": 1109
                },
                "flags": 34,
                "start": 1095,
                "end": 1109
            },
            "flags": 16,
            "start": 1095,
            "end": 1110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1113,
                            "end": 1113
                        },
                        "flags": 32,
                        "start": 1112,
                        "end": 1114
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1115,
                        "end": 1117
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1118,
                    "end": 1121
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1123,
                        "end": 1123
                    },
                    "flags": 32,
                    "start": 1121,
                    "end": 1124
                },
                "flags": 34,
                "start": 1110,
                "end": 1124
            },
            "flags": 16,
            "start": 1110,
            "end": 1125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1127,
                            "end": 1128
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1130,
                            "end": 1132
                        },
                        "flags": 32,
                        "start": 1125,
                        "end": 1132
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1133,
                    "end": 1136
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1138,
                        "end": 1138
                    },
                    "flags": 32,
                    "start": 1136,
                    "end": 1139
                },
                "flags": 34,
                "start": 1125,
                "end": 1139
            },
            "flags": 16,
            "start": 1125,
            "end": 1140
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1142,
                            "end": 1143
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1145,
                            "end": 1147
                        },
                        "flags": 32,
                        "start": 1140,
                        "end": 1147
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 1148,
                        "end": 1150
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1151,
                    "end": 1154
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1156,
                        "end": 1156
                    },
                    "flags": 32,
                    "start": 1154,
                    "end": 1157
                },
                "flags": 34,
                "start": 1140,
                "end": 1157
            },
            "flags": 16,
            "start": 1140,
            "end": 1158
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1160,
                        "end": 1161
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1162,
                            "end": 1164
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 1166,
                            "end": 1168
                        },
                        "flags": 32,
                        "start": 1158,
                        "end": 1168
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1169,
                    "end": 1172
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1174,
                        "end": 1174
                    },
                    "flags": 32,
                    "start": 1172,
                    "end": 1175
                },
                "flags": 34,
                "start": 1158,
                "end": 1175
            },
            "flags": 16,
            "start": 1158,
            "end": 1176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1179,
                                    "end": 1180
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1179,
                            "end": 1180
                        },
                        "flags": 48,
                        "start": 1178,
                        "end": 1181
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1182,
                    "end": 1185
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1187,
                        "end": 1187
                    },
                    "flags": 32,
                    "start": 1185,
                    "end": 1188
                },
                "flags": 34,
                "start": 1176,
                "end": 1188
            },
            "flags": 16,
            "start": 1176,
            "end": 1189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1191,
                            "end": 1192
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1194,
                            "end": 1196
                        },
                        "flags": 32,
                        "start": 1189,
                        "end": 1196
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1197,
                    "end": 1200
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1202,
                        "end": 1202
                    },
                    "flags": 32,
                    "start": 1200,
                    "end": 1203
                },
                "flags": 34,
                "start": 1189,
                "end": 1203
            },
            "flags": 16,
            "start": 1189,
            "end": 1204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1206,
                        "end": 1207
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1208,
                            "end": 1210
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1212,
                            "end": 1214
                        },
                        "flags": 32,
                        "start": 1204,
                        "end": 1214
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1215,
                    "end": 1218
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1220,
                        "end": 1220
                    },
                    "flags": 32,
                    "start": 1218,
                    "end": 1221
                },
                "flags": 34,
                "start": 1204,
                "end": 1221
            },
            "flags": 16,
            "start": 1204,
            "end": 1222
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1224,
                            "end": 1225
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1227,
                            "end": 1229
                        },
                        "flags": 32,
                        "start": 1222,
                        "end": 1229
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 1230,
                        "end": 1232
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1233,
                    "end": 1236
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1238,
                        "end": 1238
                    },
                    "flags": 32,
                    "start": 1236,
                    "end": 1239
                },
                "flags": 34,
                "start": 1222,
                "end": 1239
            },
            "flags": 16,
            "start": 1222,
            "end": 1240
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1242,
                        "end": 1243
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1244,
                            "end": 1246
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1248,
                            "end": 1250
                        },
                        "flags": 32,
                        "start": 1240,
                        "end": 1250
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 1251,
                        "end": 1253
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1254,
                    "end": 1257
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1259,
                        "end": 1259
                    },
                    "flags": 32,
                    "start": 1257,
                    "end": 1260
                },
                "flags": 34,
                "start": 1240,
                "end": 1260
            },
            "flags": 16,
            "start": 1240,
            "end": 1261
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1263,
                        "end": 1264
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1265,
                            "end": 1267
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1269,
                            "end": 1271
                        },
                        "flags": 32,
                        "start": 1261,
                        "end": 1271
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 1272,
                            "end": 1274
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 8,
                            "rawText": "8",
                            "flags": 96,
                            "start": 1276,
                            "end": 1278
                        },
                        "flags": 32,
                        "start": 1261,
                        "end": 1278
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1279,
                    "end": 1282
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1284,
                        "end": 1284
                    },
                    "flags": 32,
                    "start": 1282,
                    "end": 1285
                },
                "flags": 34,
                "start": 1261,
                "end": 1285
            },
            "flags": 16,
            "start": 1261,
            "end": 1286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1288,
                            "end": 1291
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1291,
                            "end": 1292
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 1288,
                        "end": 1292
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1293,
                    "end": 1296
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1298,
                        "end": 1298
                    },
                    "flags": 32,
                    "start": 1296,
                    "end": 1299
                },
                "flags": 32,
                "start": 1286,
                "end": 1299
            },
            "flags": 16,
            "start": 1286,
            "end": 1300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1302,
                        "end": 1303
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1304,
                            "end": 1308
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1308,
                            "end": 1309
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 1304,
                        "end": 1309
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1310,
                    "end": 1313
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1315,
                        "end": 1315
                    },
                    "flags": 32,
                    "start": 1313,
                    "end": 1316
                },
                "flags": 32,
                "start": 1300,
                "end": 1316
            },
            "flags": 16,
            "start": 1300,
            "end": 1317
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1319,
                            "end": 1320
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1322,
                            "end": 1324
                        },
                        "flags": 32,
                        "start": 1317,
                        "end": 1324
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1325,
                            "end": 1329
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1329,
                            "end": 1330
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 1325,
                        "end": 1330
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1331,
                    "end": 1334
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1336,
                        "end": 1336
                    },
                    "flags": 32,
                    "start": 1334,
                    "end": 1337
                },
                "flags": 34,
                "start": 1317,
                "end": 1337
            },
            "flags": 16,
            "start": 1317,
            "end": 1338
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1340,
                        "end": 1341
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1342,
                            "end": 1344
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1346,
                            "end": 1348
                        },
                        "flags": 32,
                        "start": 1338,
                        "end": 1348
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1349,
                            "end": 1353
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1353,
                            "end": 1354
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 1349,
                        "end": 1354
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1355,
                    "end": 1358
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1360,
                        "end": 1360
                    },
                    "flags": 32,
                    "start": 1358,
                    "end": 1361
                },
                "flags": 34,
                "start": 1338,
                "end": 1361
            },
            "flags": 16,
            "start": 1338,
            "end": 1362
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1364,
                        "end": 1365
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1366,
                            "end": 1368
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1370,
                            "end": 1372
                        },
                        "flags": 32,
                        "start": 1362,
                        "end": 1372
                    },
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 1375,
                                    "end": 1376
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1375,
                            "end": 1376
                        },
                        "flags": 48,
                        "start": 1373,
                        "end": 1377
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 1378,
                            "end": 1380
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 8,
                            "rawText": "8",
                            "flags": 96,
                            "start": 1382,
                            "end": 1384
                        },
                        "flags": 32,
                        "start": 1362,
                        "end": 1384
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1385,
                            "end": 1389
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1389,
                            "end": 1390
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 1385,
                        "end": 1390
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1391,
                    "end": 1394
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1396,
                        "end": 1396
                    },
                    "flags": 32,
                    "start": 1394,
                    "end": 1397
                },
                "flags": 34,
                "start": 1362,
                "end": 1397
            },
            "flags": 16,
            "start": 1362,
            "end": 1398
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1401,
                                        "end": 1402
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1401,
                                "end": 1402
                            },
                            "flags": 48,
                            "start": 1400,
                            "end": 1403
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1407,
                                "end": 1407
                            },
                            "flags": 48,
                            "start": 1405,
                            "end": 1408
                        },
                        "flags": 32,
                        "start": 1400,
                        "end": 1408
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1409,
                    "end": 1412
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1414,
                        "end": 1414
                    },
                    "flags": 32,
                    "start": 1412,
                    "end": 1415
                },
                "flags": 34,
                "start": 1398,
                "end": 1415
            },
            "flags": 16,
            "start": 1398,
            "end": 1416
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1419,
                                        "end": 1420
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1419,
                                "end": 1420
                            },
                            "flags": 32,
                            "start": 1418,
                            "end": 1421
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1425,
                                "end": 1425
                            },
                            "flags": 32,
                            "start": 1423,
                            "end": 1426
                        },
                        "flags": 32,
                        "start": 1418,
                        "end": 1426
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1427,
                    "end": 1430
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1432,
                        "end": 1432
                    },
                    "flags": 32,
                    "start": 1430,
                    "end": 1433
                },
                "flags": 34,
                "start": 1416,
                "end": 1433
            },
            "flags": 16,
            "start": 1416,
            "end": 1434
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1437,
                                        "end": 1438
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 1440,
                                        "end": 1443
                                    },
                                    "flags": 32,
                                    "start": 1437,
                                    "end": 1443
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1437,
                            "end": 1443
                        },
                        "flags": 48,
                        "start": 1436,
                        "end": 1444
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1445,
                    "end": 1448
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1450,
                        "end": 1450
                    },
                    "flags": 32,
                    "start": 1448,
                    "end": 1451
                },
                "flags": 34,
                "start": 1434,
                "end": 1451
            },
            "flags": 16,
            "start": 1434,
            "end": 1452
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1455,
                                        "end": 1456
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 1458,
                                        "end": 1460
                                    },
                                    "flags": 32,
                                    "start": 1455,
                                    "end": 1460
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1455,
                            "end": 1460
                        },
                        "flags": 32,
                        "start": 1454,
                        "end": 1461
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1462,
                    "end": 1465
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1467,
                        "end": 1467
                    },
                    "flags": 32,
                    "start": 1465,
                    "end": 1468
                },
                "flags": 34,
                "start": 1452,
                "end": 1468
            },
            "flags": 16,
            "start": 1452,
            "end": 1469
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 1474,
                            "end": 1477
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1479,
                                "end": 1479
                            },
                            "flags": 32,
                            "start": 1477,
                            "end": 1480
                        },
                        "flags": 32,
                        "start": 1472,
                        "end": 1480
                    },
                    "flags": 32,
                    "start": 1469,
                    "end": 1481
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1481,
                    "end": 1483
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1483,
                    "end": 1485
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1485,
                    "end": 1487
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 1487,
                    "end": 1489
                },
                "flags": 32,
                "start": 1469,
                "end": 1489
            },
            "flags": 16,
            "start": 1469,
            "end": 1490
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 1494,
                            "end": 1497
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1499,
                                "end": 1499
                            },
                            "flags": 32,
                            "start": 1497,
                            "end": 1500
                        },
                        "flags": 32,
                        "start": 1492,
                        "end": 1500
                    },
                    "flags": 32,
                    "start": 1490,
                    "end": 1501
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1501,
                    "end": 1503
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1503,
                    "end": 1505
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1505,
                    "end": 1507
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 1507,
                    "end": 1509
                },
                "flags": 32,
                "start": 1490,
                "end": 1509
            },
            "flags": 16,
            "start": 1490,
            "end": 1510
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 1510,
                    "end": 1513
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "start": 1513,
                    "end": 1515
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 1519,
                            "end": 1522
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1524,
                                "end": 1524
                            },
                            "flags": 32,
                            "start": 1522,
                            "end": 1525
                        },
                        "flags": 32,
                        "start": 1517,
                        "end": 1525
                    },
                    "flags": 32,
                    "start": 1515,
                    "end": 1526
                },
                "flags": 32,
                "start": 1510,
                "end": 1526
            },
            "flags": 16,
            "start": 1510,
            "end": 1527
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1527,
                    "end": 1562
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1562,
                    "end": 1564
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1564,
                        "end": 1566
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 1566,
                        "end": 1569
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1571,
                            "end": 1571
                        },
                        "flags": 32,
                        "start": 1569,
                        "end": 1572
                    },
                    "flags": 32,
                    "start": 1564,
                    "end": 1572
                },
                "flags": 32,
                "start": 1527,
                "end": 1572
            },
            "flags": 16,
            "start": 1527,
            "end": 1573
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1573,
                    "end": 1575
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1575,
                    "end": 1577
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 1580,
                        "end": 1583
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1585,
                            "end": 1585
                        },
                        "flags": 32,
                        "start": 1583,
                        "end": 1586
                    },
                    "flags": 32,
                    "start": 1577,
                    "end": 1586
                },
                "flags": 32,
                "start": 1573,
                "end": 1586
            },
            "flags": 16,
            "start": 1573,
            "end": 1587
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1587,
                    "end": 1589
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1589,
                    "end": 1591
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1593,
                            "end": 1594
                        }
                    ],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 1595,
                        "end": 1598
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1600,
                            "end": 1600
                        },
                        "flags": 32,
                        "start": 1598,
                        "end": 1601
                    },
                    "flags": 32,
                    "start": 1591,
                    "end": 1601
                },
                "flags": 32,
                "start": 1587,
                "end": 1601
            },
            "flags": 16,
            "start": 1587,
            "end": 1602
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1602,
                    "end": 1604
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1604,
                    "end": 1606
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1606,
                        "end": 1612
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1612,
                        "end": 1614
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 1614,
                        "end": 1617
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1619,
                            "end": 1619
                        },
                        "flags": 32,
                        "start": 1617,
                        "end": 1620
                    },
                    "flags": 288,
                    "start": 1606,
                    "end": 1620
                },
                "flags": 32,
                "start": 1602,
                "end": 1620
            },
            "flags": 16,
            "start": 1602,
            "end": 1621
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 1621,
                    "end": 1623
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1623,
                    "end": 1625
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1625,
                        "end": 1631
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 1634,
                        "end": 1637
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1639,
                            "end": 1639
                        },
                        "flags": 32,
                        "start": 1637,
                        "end": 1640
                    },
                    "flags": 288,
                    "start": 1625,
                    "end": 1640
                },
                "flags": 32,
                "start": 1621,
                "end": 1640
            },
            "flags": 16,
            "start": 1621,
            "end": 1641
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1641,
                    "end": 1643
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1643,
                    "end": 1645
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1645,
                        "end": 1651
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1653,
                            "end": 1654
                        }
                    ],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 1655,
                        "end": 1658
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1660,
                            "end": 1660
                        },
                        "flags": 32,
                        "start": 1658,
                        "end": 1661
                    },
                    "flags": 288,
                    "start": 1645,
                    "end": 1661
                },
                "flags": 32,
                "start": 1641,
                "end": 1661
            },
            "flags": 16,
            "start": 1641,
            "end": 1662
        }
    ],
    "isModule": false,
    "source": "() => {};\n() => { return 42 };\n1 < (() => {});\nx => { return x; };\n(x) => { return x; };\n(x, y) => { return x + y; };\n(x, y, z) => { return x + y + z; };\n(x, y) => { x.a = y; };\n() => 42;\nx => x;\nx => x * x;\n(x) => x;\n(x) => x * x;\n(x, y) => x + y;\n(x, y, z) => x, y, z;\n(x, y) => x.a = y;\n() => ({'value': 42});\nx => y => x + y;\n(x, y) => (u, v) => x*u + y*v;\n(x, y) => z => z * (x + y);\nx => (y, z) => z * (x + y);\n\n() => {}\n(0);\n\nx => {}\n(0);\n\nasync () => {}\n(0);\n\n(() => {})\n(0);\n\n(x => {})\n(0);\n\n(async () => {})\n(0);\n\n(async x => {})\n(0)\n\n(async (x) => {})\n(0);\n\n(() => {}\n,0);\n\ny = (() => {}\n,0);\n\n// Those are comma-separated expressions, with arrow functions as items.\n// They stress the code for validating arrow function parameter lists.\na, b => 0;\na, b, (c, d) => 0;\n(a, b, (c, d) => 0);\n(a, b) => 0, (c, d) => 1;\n(a, b => {}, a => a + 1);\n((a, b) => {}, (a => a + 1));\n(a, (a, (b, c) => 0));\n\n// Arrow has more precedence, this is the same as: foo ? bar : (baz = {})\nfoo ? bar : baz => {};\n\n// Arrows with non-simple parameters.\n({}) => {};\n(a, {}) => {};\n({}, a) => {};\n([]) => {};\n(a, []) => {};\n([], a) => {};\n(a = b) => {};\n(a = b, c) => {};\n(a, b = c) => {};\n({a}) => {};\n(x = 9) => {};\n(x, y = 9) => {};\n(x = 9, y) => {};\n(x, y = 9, z) => {};\n(x, y = 9, z = 8) => {};\n(...a) => {};\n(x, ...a) => {};\n(x = 9, ...a) => {};\n(x, y = 9, ...a) => {};\n(x, y = 9, {b}, z = 8, ...a) => {};\n({a} = {}) => {};\n([x] = []) => {};\n({a = 42}) => {};\n([x = 0]) => {};\n\n(() => {}) ? a : b;\n(() => {}) ? a : b;\n\n1 < (() => {});\n\n// Can assign an arrow function\ny = x => {};\ny = () => {};\ny = (x) => {};\ny = async x => {};\nz = async () => {};\ny = async (x) => {};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1663
}
```

### Printed

```javascript

 () => {
}; () => {
return 42;
}; 1  < (() => {
}); x => {
return x;
}; (x) => {
return x;
}; (x, y) => {
return x + y;
}; (x, y, z) => {
return x + y + z;
}; (x, y) => {
x.a=y;
}; () =>42; x =>x; x =>x * x; (x) =>x; (x) =>x * x; (x, y) =>x + y; (x, y, z) =>x, y, z; (x, y) =>x.a=y; () =>({ 'value' : 42 }); x =>y =>x + y; (x, y) =>(u, v) =>x * u + y * v; (x, y) =>z =>z * (x + y); x =>(y, z) =>z * (x + y); () => {
}; (0); x => {
}; (0); () => {
} (0); ; ; ; ; (() => {
}, 0); y=(() => {
}, 0); a, b =>0; a, b, (c, d) =>0; (a, b, (c, d) =>0); (a, b) =>0, (c, d) =>1; (a, b => {
}, a =>a + 1); ((a, b) => {
}, (a =>a + 1)); (a, (a, (b, c) =>0)); foo ? bar : baz => {
}; ({  }) => {
}; (a, {  }) => {
}; ({  }, a) => {
}; ([]) => {
}; (a, []) => {
}; ([], a) => {
}; (a = b) => {
}; (a = b, c) => {
}; (a, b = c) => {
}; ({
        a
    }) => {
}; (x = 9) => {
}; (x, y = 9) => {
}; (x = 9, y) => {
}; (x, y = 9, z) => {
}; (x, y = 9, z = 8) => {
}; (...a) => {
}; (x, ...a) => {
}; (x = 9, ...a) => {
}; (x, y = 9, ...a) => {
}; (x, y = 9, {
        b
    }, z = 8, ...a) => {
}; ( = {  }) => {
}; ( = []) => {
}; ({
        a = 42
    }) => {
}; ([x = 0]) => {
}; (() => {
}) ? a : b; (() => {
}) ? a : b; 1  < (() => {
}); y=x => {
}; y=() => {
}; y=(x) => {
}; y=x => {
}; z=() => {
}; y=(x) => {
}; 
```

### Diagnostics

```javascript
✔ No errors
```

