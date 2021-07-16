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

(() => {}
,0);

y = (() => {}
,0):

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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 11
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 17,
                                "end": 27
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 9,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
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
                    "transformFlags": 0,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 37
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 44
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 44
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 45
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 30,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 30,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 48
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 60
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 62
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 53,
                                "end": 63
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 63
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 65
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 46,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 46,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 69
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 70
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 82
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 84
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 75,
                                "end": 85
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 85
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 87
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 66,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 91
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 95
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 107,
                                        "end": 109
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 109,
                                        "end": 111
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 111,
                                        "end": 113
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 107,
                                    "end": 113
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 100,
                                "end": 114
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 114
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 98,
                    "end": 116
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 88,
                "end": 116
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 88,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 120
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 123
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 126
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 127
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 139,
                                            "end": 141
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 141,
                                            "end": 143
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 145
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 139,
                                        "end": 145
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 145,
                                        "end": 147
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 149
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 139,
                                    "end": 149
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 132,
                                "end": 150
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 132,
                        "end": 150
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 130,
                    "end": 152
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 117,
                "end": 152
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 117,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 156
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 159
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 160
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 165,
                                            "end": 167
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 168,
                                            "end": 169
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 165,
                                        "end": 169
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 169,
                                        "end": 171
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 171,
                                        "end": 173
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 165,
                                    "end": 173
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 165,
                                "end": 174
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 165,
                        "end": 174
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 163,
                    "end": 176
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 153,
                "end": 176
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 153,
            "end": 177
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 179,
                    "end": 179
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 180,
                    "end": 183
                },
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 186
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 177,
                "end": 186
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 177,
            "end": 187
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 189
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 192
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 192,
                    "end": 194
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 187,
                "end": 194
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 187,
            "end": 195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 195,
                    "end": 197
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 200,
                        "end": 202
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 202,
                        "end": 204
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 204,
                        "end": 206
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 200,
                    "end": 206
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 195,
                "end": 206
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 195,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 209,
                            "end": 210
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 209,
                    "end": 211
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 214
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 214,
                    "end": 216
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 207,
                "end": 216
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 207,
            "end": 217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 220
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 219,
                    "end": 221
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 224,
                        "end": 226
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 226,
                        "end": 228
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 228,
                        "end": 230
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 224,
                    "end": 230
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 217,
                "end": 230
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 217,
            "end": 231
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 233,
                            "end": 234
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 235,
                            "end": 237
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 233,
                    "end": 238
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 241,
                        "end": 243
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 243,
                        "end": 245
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 245,
                        "end": 247
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 241,
                    "end": 247
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 231,
                "end": 247
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 250,
                                    "end": 251
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 252,
                                    "end": 254
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 255,
                                    "end": 257
                                }
                            ],
                            "trailingComma": false,
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 250,
                            "end": 258
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 258,
                            "end": 261
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 261,
                            "end": 263
                        },
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 248,
                        "end": 263
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 264,
                        "end": 266
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 267,
                        "end": 269
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 248,
                "end": 269
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 248,
            "end": 270
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 272,
                            "end": 273
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 274,
                            "end": 276
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 272,
                    "end": 277
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 280,
                            "end": 282
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 283,
                            "end": 284
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 280,
                        "end": 284
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 284,
                        "end": 286
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 286,
                        "end": 288
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 280,
                    "end": 288
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 270,
                "end": 288
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 270,
            "end": 289
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 291,
                    "end": 291
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 298,
                                        "end": 305
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 306,
                                        "end": 309
                                    },
                                    "flags": 4194336,
                                    "transformFlags": 128,
                                    "start": 298,
                                    "end": 309
                                }
                            ],
                            "trailingComma": false,
                            "flags": 4194320,
                            "transformFlags": 0,
                            "start": 298,
                            "end": 309
                        },
                        "flags": 4194352,
                        "transformFlags": 8,
                        "start": 297,
                        "end": 310
                    },
                    "flags": 295,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 311
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 289,
                "end": 311
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 289,
            "end": 312
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 312,
                    "end": 314
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 314,
                    "end": 317
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 317,
                        "end": 319
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 322,
                            "end": 324
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 324,
                            "end": 326
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 326,
                            "end": 328
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 322,
                        "end": 328
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 317,
                    "end": 328
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 312,
                "end": 328
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 312,
            "end": 329
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 331,
                            "end": 332
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 333,
                            "end": 335
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 331,
                    "end": 336
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 336,
                    "end": 339
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 341,
                                "end": 342
                            },
                            {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 343,
                                "end": 345
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 341,
                        "end": 346
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 349,
                                "end": 351
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 351,
                                "end": 352
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 352,
                                "end": 353
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 349,
                            "end": 353
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 355,
                                "end": 357
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 357,
                                "end": 358
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 358,
                                "end": 359
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 357,
                            "end": 359
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 349,
                        "end": 359
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 339,
                    "end": 359
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 329,
                "end": 359
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 329,
            "end": 360
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 362,
                            "end": 363
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 364,
                            "end": 366
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 362,
                    "end": 367
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 370
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 370,
                        "end": 372
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 375,
                            "end": 377
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 381,
                                    "end": 382
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 382,
                                    "end": 384
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 384,
                                    "end": 386
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 379,
                                "end": 386
                            },
                            "flags": 379,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 387
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 375,
                        "end": 387
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 370,
                    "end": 387
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 360,
                "end": 387
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 360,
            "end": 388
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 388,
                    "end": 390
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 390,
                    "end": 393
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 395,
                                "end": 396
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 397,
                                "end": 399
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 395,
                        "end": 400
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 403,
                            "end": 405
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 409,
                                    "end": 410
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 410,
                                    "end": 412
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 412,
                                    "end": 414
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 407,
                                "end": 414
                            },
                            "flags": 407,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 415
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 403,
                        "end": 415
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 393,
                    "end": 415
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 388,
                "end": 415
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 388,
            "end": 416
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
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 420,
                                "end": 420
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 421,
                                "end": 424
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 426,
                                    "end": 426
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 424,
                                "end": 427
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 419,
                            "end": 427
                        },
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 429,
                            "end": 430
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 416,
                    "end": 430
                },
                "flags": 416,
                "transformFlags": 0,
                "start": 33,
                "end": 431
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 416,
            "end": 432
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 432,
                    "end": 435
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 435,
                    "end": 437
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
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 440,
                                    "end": 440
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 441,
                                    "end": 444
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 446,
                                        "end": 446
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 444,
                                    "end": 447
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 439,
                                "end": 447
                            },
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 449,
                                "end": 450
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 437,
                        "end": 450
                    },
                    "flags": 437,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 451
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 432,
                "end": 451
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 432,
            "end": 451
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
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 452,
                        "end": 599
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 600,
                            "end": 602
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 602,
                            "end": 605
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 605,
                            "end": 607
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 600,
                        "end": 607
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 452,
                "end": 607
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 452,
            "end": 608
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
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 608,
                        "end": 610
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 611,
                        "end": 613
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 616,
                                    "end": 617
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 618,
                                    "end": 620
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 616,
                            "end": 621
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 621,
                            "end": 624
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 624,
                            "end": 626
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 614,
                        "end": 626
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 608,
                "end": 626
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 608,
            "end": 627
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
                            "transformFlags": 0,
                            "start": 629,
                            "end": 630
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 631,
                            "end": 633
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 636,
                                        "end": 637
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 638,
                                        "end": 640
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 636,
                                "end": 641
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 641,
                                "end": 644
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 644,
                                "end": 646
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 634,
                            "end": 646
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 627,
                    "end": 646
                },
                "flags": 627,
                "transformFlags": 0,
                "start": 33,
                "end": 647
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 627,
            "end": 648
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
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 650,
                                    "end": 651
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 652,
                                    "end": 654
                                }
                            ],
                            "trailingComma": false,
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 650,
                            "end": 655
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 655,
                            "end": 658
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 658,
                            "end": 660
                        },
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 648,
                        "end": 660
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 663,
                                    "end": 664
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 665,
                                    "end": 667
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 663,
                            "end": 668
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 668,
                            "end": 671
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 671,
                            "end": 673
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 661,
                        "end": 673
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 648,
                "end": 673
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 648,
            "end": 674
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
                            "transformFlags": 0,
                            "start": 676,
                            "end": 677
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 678,
                                "end": 680
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 680,
                                "end": 683
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 685,
                                    "end": 685
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 683,
                                "end": 686
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 678,
                            "end": 686
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 687,
                                "end": 689
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 689,
                                "end": 692
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 692,
                                    "end": 694
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 694,
                                    "end": 696
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 696,
                                    "end": 698
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 692,
                                "end": 698
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 687,
                            "end": 698
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 674,
                    "end": 699
                },
                "flags": 674,
                "transformFlags": 0,
                "start": 33,
                "end": 699
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 674,
            "end": 700
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
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 703,
                                        "end": 704
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 705,
                                        "end": 707
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 703,
                                "end": 708
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 708,
                                "end": 711
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 713,
                                    "end": 713
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 711,
                                "end": 714
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 702,
                            "end": 714
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 717,
                                    "end": 718
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 718,
                                    "end": 721
                                },
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 721,
                                        "end": 723
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 723,
                                        "end": 725
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 725,
                                        "end": 727
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 721,
                                    "end": 727
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 717,
                                "end": 727
                            },
                            "flags": 715,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 728
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 700,
                    "end": 728
                },
                "flags": 700,
                "transformFlags": 0,
                "start": 33,
                "end": 729
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 700,
            "end": 730
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
                            "transformFlags": 0,
                            "start": 732,
                            "end": 733
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
                                        "transformFlags": 0,
                                        "start": 736,
                                        "end": 737
                                    },
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 740,
                                                    "end": 741
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 742,
                                                    "end": 744
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 740,
                                            "end": 745
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 745,
                                            "end": 748
                                        },
                                        "contents": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 748,
                                            "end": 750
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 738,
                                        "end": 750
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 734,
                                "end": 750
                            },
                            "flags": 734,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 751
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 730,
                    "end": 751
                },
                "flags": 730,
                "transformFlags": 0,
                "start": 33,
                "end": 752
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 730,
            "end": 753
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 753,
                    "end": 832
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 832,
                    "end": 834
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 834,
                    "end": 838
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 838,
                    "end": 840
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 840,
                        "end": 844
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 844,
                        "end": 847
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 849,
                            "end": 849
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 847,
                        "end": 850
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 840,
                    "end": 850
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 753,
                "end": 850
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 753,
            "end": 851
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 893,
                                "end": 893
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 892,
                            "end": 894
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 892,
                    "end": 895
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 895,
                    "end": 898
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 900,
                        "end": 900
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 898,
                    "end": 901
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 851,
                "end": 901
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 851,
            "end": 902
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 904,
                            "end": 905
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 908,
                                "end": 908
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 906,
                            "end": 909
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 904,
                    "end": 910
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 910,
                    "end": 913
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 915,
                        "end": 915
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 913,
                    "end": 916
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 902,
                "end": 916
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 902,
            "end": 917
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 920,
                                "end": 920
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 919,
                            "end": 921
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 922,
                            "end": 924
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 919,
                    "end": 925
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 925,
                    "end": 928
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 930,
                        "end": 930
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 928,
                    "end": 931
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 917,
                "end": 931
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 917,
            "end": 932
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 935,
                                "end": 935
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 934,
                            "end": 936
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 934,
                    "end": 937
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 937,
                    "end": 940
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 942,
                        "end": 942
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 940,
                    "end": 943
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 932,
                "end": 943
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 932,
            "end": 944
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 946,
                            "end": 947
                        },
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 950,
                                "end": 950
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 948,
                            "end": 951
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 946,
                    "end": 952
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 952,
                    "end": 955
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 957,
                        "end": 957
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 955,
                    "end": 958
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 944,
                "end": 958
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 944,
            "end": 959
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 962,
                                "end": 962
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 961,
                            "end": 963
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 964,
                            "end": 966
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 961,
                    "end": 967
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 967,
                    "end": 970
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 972,
                        "end": 972
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 970,
                    "end": 973
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 959,
                "end": 973
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 959,
            "end": 974
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 976,
                                "end": 977
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 979,
                                "end": 981
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 974,
                            "end": 981
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 976,
                    "end": 982
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 982,
                    "end": 985
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 987,
                        "end": 987
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 985,
                    "end": 988
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 974,
                "end": 988
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 974,
            "end": 989
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 991,
                                "end": 992
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 994,
                                "end": 996
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 989,
                            "end": 996
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 997,
                            "end": 999
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 991,
                    "end": 1000
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1000,
                    "end": 1003
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1005,
                        "end": 1005
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1003,
                    "end": 1006
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 989,
                "end": 1006
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 989,
            "end": 1007
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1009,
                            "end": 1010
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1011,
                                "end": 1013
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1015,
                                "end": 1017
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1007,
                            "end": 1017
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1009,
                    "end": 1018
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1018,
                    "end": 1021
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1023,
                        "end": 1023
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1021,
                    "end": 1024
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1007,
                "end": 1024
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1007,
            "end": 1025
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                        "transformFlags": 0,
                                        "start": 1028,
                                        "end": 1029
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1028,
                                "end": 1029
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 1027,
                            "end": 1030
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1027,
                    "end": 1031
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1031,
                    "end": 1034
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1036,
                        "end": 1036
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1034,
                    "end": 1037
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1025,
                "end": 1037
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1025,
            "end": 1038
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1040,
                                "end": 1041
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1043,
                                "end": 1045
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1038,
                            "end": 1045
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1040,
                    "end": 1046
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 1051,
                        "end": 1051
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1049,
                    "end": 1052
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1038,
                "end": 1052
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1038,
            "end": 1053
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1055,
                            "end": 1056
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1057,
                                "end": 1059
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1061,
                                "end": 1063
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1053,
                            "end": 1063
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1055,
                    "end": 1064
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1064,
                    "end": 1067
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1069,
                        "end": 1069
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1067,
                    "end": 1070
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1053,
                "end": 1070
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1053,
            "end": 1071
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1073,
                                "end": 1074
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1076,
                                "end": 1078
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1071,
                            "end": 1078
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1079,
                            "end": 1081
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1073,
                    "end": 1082
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1082,
                    "end": 1085
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1087,
                        "end": 1087
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1085,
                    "end": 1088
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1071,
                "end": 1088
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1071,
            "end": 1089
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1091,
                            "end": 1092
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1093,
                                "end": 1095
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1097,
                                "end": 1099
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1089,
                            "end": 1099
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1100,
                            "end": 1102
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1091,
                    "end": 1103
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 1108,
                        "end": 1108
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1106,
                    "end": 1109
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1089,
                "end": 1109
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1089,
            "end": 1110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1112,
                            "end": 1113
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1114,
                                "end": 1116
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1118,
                                "end": 1120
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1110,
                            "end": 1120
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1121,
                                "end": 1123
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 8,
                                "rawText": "8",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1125,
                                "end": 1127
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1110,
                            "end": 1127
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1112,
                    "end": 1128
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1128,
                    "end": 1131
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1133,
                        "end": 1133
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1131,
                    "end": 1134
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1110,
                "end": 1134
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1110,
            "end": 1135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1137,
                                "end": 1140
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1140,
                                "end": 1141
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1137,
                            "end": 1141
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1137,
                    "end": 1142
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1142,
                    "end": 1145
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1147,
                        "end": 1147
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1145,
                    "end": 1148
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 1135,
                "end": 1148
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1135,
            "end": 1149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1151,
                            "end": 1152
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1153,
                                "end": 1157
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1157,
                                "end": 1158
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1153,
                            "end": 1158
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1151,
                    "end": 1159
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1159,
                    "end": 1162
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1164,
                        "end": 1164
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1162,
                    "end": 1165
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 1149,
                "end": 1165
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1149,
            "end": 1166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1168,
                                "end": 1169
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1171,
                                "end": 1173
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1166,
                            "end": 1173
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1174,
                                "end": 1178
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1178,
                                "end": 1179
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1174,
                            "end": 1179
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1168,
                    "end": 1180
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1180,
                    "end": 1183
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1185,
                        "end": 1185
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1183,
                    "end": 1186
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1166,
                "end": 1186
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1166,
            "end": 1187
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1189,
                            "end": 1190
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1191,
                                "end": 1193
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1195,
                                "end": 1197
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1187,
                            "end": 1197
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1198,
                                "end": 1202
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1202,
                                "end": 1203
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1198,
                            "end": 1203
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1189,
                    "end": 1204
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1204,
                    "end": 1207
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1209,
                        "end": 1209
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1207,
                    "end": 1210
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1187,
                "end": 1210
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1187,
            "end": 1211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1213,
                            "end": 1214
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1215,
                                "end": 1217
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 9,
                                "rawText": "9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1219,
                                "end": 1221
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1211,
                            "end": 1221
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
                                        "transformFlags": 0,
                                        "start": 1224,
                                        "end": 1225
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1224,
                                "end": 1225
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 1222,
                            "end": 1226
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1227,
                                "end": 1229
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 8,
                                "rawText": "8",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1231,
                                "end": 1233
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1211,
                            "end": 1233
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1234,
                                "end": 1238
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1238,
                                "end": 1239
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1234,
                            "end": 1239
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1213,
                    "end": 1240
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1240,
                    "end": 1243
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1245,
                        "end": 1245
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1243,
                    "end": 1246
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1211,
                "end": 1246
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1211,
            "end": 1247
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "transformFlags": 0,
                                            "start": 1250,
                                            "end": 1251
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1250,
                                    "end": 1251
                                },
                                "flags": 48,
                                "transformFlags": 0,
                                "start": 1249,
                                "end": 1252
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
                                    "transformFlags": 0,
                                    "start": 1256,
                                    "end": 1256
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 1254,
                                "end": 1257
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1249,
                            "end": 1257
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1249,
                    "end": 1258
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1258,
                    "end": 1261
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1263,
                        "end": 1263
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1261,
                    "end": 1264
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1247,
                "end": 1264
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1247,
            "end": 1265
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "transformFlags": 0,
                                            "start": 1268,
                                            "end": 1269
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1268,
                                    "end": 1269
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1267,
                                "end": 1270
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
                                    "transformFlags": 0,
                                    "start": 1274,
                                    "end": 1274
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 1272,
                                "end": 1275
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 1267,
                            "end": 1275
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1267,
                    "end": 1276
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1276,
                    "end": 1279
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1281,
                        "end": 1281
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1279,
                    "end": 1282
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1265,
                "end": 1282
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1265,
            "end": 1283
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "transformFlags": 0,
                                            "start": 1286,
                                            "end": 1287
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1289,
                                            "end": 1292
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1286,
                                        "end": 1292
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1286,
                                "end": 1292
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 1285,
                            "end": 1293
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1285,
                    "end": 1294
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1294,
                    "end": 1297
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1299,
                        "end": 1299
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1297,
                    "end": 1300
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1283,
                "end": 1300
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1283,
            "end": 1301
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "transformFlags": 0,
                                            "start": 1304,
                                            "end": 1305
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1307,
                                            "end": 1309
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1304,
                                        "end": 1309
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1304,
                                "end": 1309
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1303,
                            "end": 1310
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 1303,
                    "end": 1311
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1311,
                    "end": 1314
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1316,
                        "end": 1316
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1314,
                    "end": 1317
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 1301,
                "end": 1317
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1301,
            "end": 1318
        }
    ],
    "isModule": false,
    "source": "() => {};\n() => { return 42 };\n1 < (() => {});\nx => { return x; };\n(x) => { return x; };\n(x, y) => { return x + y; };\n(x, y, z) => { return x + y + z; };\n(x, y) => { x.a = y; };\n() => 42;\nx => x;\nx => x * x;\n(x) => x;\n(x) => x * x;\n(x, y) => x + y;\n(x, y, z) => x, y, z;\n(x, y) => x.a = y;\n() => ({'value': 42});\nx => y => x + y;\n(x, y) => (u, v) => x*u + y*v;\n(x, y) => z => z * (x + y);\nx => (y, z) => z * (x + y);\n\n(() => {}\n,0);\n\ny = (() => {}\n,0):\n\n// Those are comma-separated expressions, with arrow functions as items.\n// They stress the code for validating arrow function parameter lists.\na, b => 0;\na, b, (c, d) => 0;\n(a, b, (c, d) => 0);\n(a, b) => 0, (c, d) => 1;\n(a, b => {}, a => a + 1);\n((a, b) => {}, (a => a + 1));\n(a, (a, (b, c) => 0));\n\n// Arrow has more precedence, this is the same as: foo ? bar : (baz = {})\nfoo ? bar : baz => {};\n\n// Arrows with non-simple parameters.\n({}) => {};\n(a, {}) => {};\n({}, a) => {};\n([]) => {};\n(a, []) => {};\n([], a) => {};\n(a = b) => {};\n(a = b, c) => {};\n(a, b = c) => {};\n({a}) => {};\n(x = 9) => {};\n(x, y = 9) => {};\n(x = 9, y) => {};\n(x, y = 9, z) => {};\n(x, y = 9, z = 8) => {};\n(...a) => {};\n(x, ...a) => {};\n(x = 9, ...a) => {};\n(x, y = 9, ...a) => {};\n(x, y = 9, {b}, z = 8, ...a) => {};\n({a} = {}) => {};\n([x] = []) => {};\n({a = 42}) => {};\n([x = 0]) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1318
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 451, end: 452

```

