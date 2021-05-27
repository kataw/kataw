# Kataw parser test case

## Input

`````js
switch (x) { case 194: switch (y) { default: 1; } default: 2;};
switch([/a/]) { case y: !x };
switch(x) { case y: {x = b} };
switch(x) { case y: [a / b] };
switch (x) { case 42: y(); break; default: break };
switch (answer) { case 42: let t = 42; break; };
switch(x) { case y: [a / b, c, (d)] };
switch(x) { case y: a };
switch(x) { case y: x(foo) };
switch(x) { case y: foo=b; };

switch(x/b[c]) { case y: foo };
switch(x/b[(c)]) { case y: foo };
switch (x) { case foo: function *f(){} };

switch(x) { case y: (foo) };
switch(x) { case y: (foo, bar) };
switch(x) { case y: (foo) = (foo) /* comment */ - b };
switch(x) { case y: foo } // comment;
// should be ignored - switch(x) { case y: foo };
switch(x/a) { case y: foo };
switch(a+b) { case y: foo };

switch(x) { case y: /a/ };
switch(x) { case y: {x} };
switch(x) { case y: x = {...x} };
switch(x) { case y: foo / bar ? 1 : (x) };
switch(x) { case y: foo / bar ? 1 : (x) => {}};
switch (0) { case 1: async function f() {} default: async function f() {} };
switch(x) { case y: foo ? 1 : (x) => {}};
switch({x:y}) { case y: [...a] };
switch({x:y}) { case y: [...a] = b };
switch(x/b(c)) { case y: foo };

switch (x) { case c: function f(){} function f(){} };
switch (x) { case c: async function *f(){} async function *f(){} };
switch (0) { case 1: var f; default: var f; }
switch (0) { case 1: var f; default: var f; };
switch (x) { case x: function * f() {} };
switch (x) { case x: function * f() {} };

"use strict"; switch(x) { case 1: default: class C { }};

switch(x){}/foo/;

"use strict"; switch(x) { case 1: default:function f() { }; class C {}};
"use strict"; switch(x) { case 1: default:class C {}; function f() {}};
"use strict"; switch(x) { case 1: default:class C extends Q {}};
"use strict"; switch(x) { case 1: default:function f() { } class C {}};
"use strict"; switch(x) { case 1: default:class C { }};

switch(a){case 1:};
switch (a) { case b: let [x] = y };
switch (answer) { case 0: let a; };

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 194,
                            "rawText": "194",
                            "flags": 96,
                            "start": 17,
                            "end": 21
                        },
                        "statements": [
                            {
                                "kind": 160,
                                "switchKeyword": {
                                    "kind": 37757024,
                                    "flags": 0,
                                    "start": 22,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 32
                                },
                                "caseBlock": {
                                    "kind": 152,
                                    "clauses": [
                                        {
                                            "kind": 170,
                                            "defaultKeyword": {
                                                "kind": 4194387,
                                                "flags": 0,
                                                "start": 35,
                                                "end": 43
                                            },
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "flags": 16,
                                                    "start": 44,
                                                    "end": 47
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 35,
                                            "end": 47
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 33,
                                    "end": 49
                                },
                                "flags": 16,
                                "start": 22,
                                "end": 49
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 49
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 49,
                            "end": 57
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 58,
                                    "end": 60
                                },
                                "flags": 16,
                                "start": 58,
                                "end": 61
                            }
                        ],
                        "flags": 16,
                        "start": 49,
                        "end": 61
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 62
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 62,
            "end": 63
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 63,
                "end": 70
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 221,
                            "text": "/a/",
                            "flags": 96,
                            "start": 72,
                            "end": 75
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 72,
                    "end": 75
                },
                "flags": 32,
                "start": 71,
                "end": 76
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 79,
                            "end": 84
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 84,
                            "end": 86
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 87,
                                        "end": 89
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 89,
                                        "end": 90
                                    },
                                    "flags": 32,
                                    "start": 87,
                                    "end": 90
                                },
                                "flags": 16,
                                "start": 87,
                                "end": 90
                            }
                        ],
                        "flags": 16,
                        "start": 79,
                        "end": 90
                    }
                ],
                "flags": 16,
                "start": 77,
                "end": 92
            },
            "flags": 16,
            "start": 63,
            "end": 92
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 92,
            "end": 93
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 93,
                "end": 100
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 101,
                "end": 102
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 105,
                            "end": 110
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 110,
                            "end": 112
                        },
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 115,
                                                    "end": 116
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 116,
                                                    "end": 118
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 118,
                                                    "end": 120
                                                },
                                                "flags": 32,
                                                "start": 115,
                                                "end": 120
                                            },
                                            "flags": 16,
                                            "start": 115,
                                            "end": 120
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 115,
                                    "end": 120
                                },
                                "flags": 16,
                                "start": 113,
                                "end": 121
                            }
                        ],
                        "flags": 16,
                        "start": 105,
                        "end": 121
                    }
                ],
                "flags": 16,
                "start": 103,
                "end": 123
            },
            "flags": 16,
            "start": 93,
            "end": 123
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 123,
            "end": 124
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 124,
                "end": 131
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 132,
                "end": 133
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 136,
                            "end": 141
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 141,
                            "end": 143
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 146,
                                                    "end": 147
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 64,
                                                    "start": 147,
                                                    "end": 149
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 149,
                                                    "end": 151
                                                },
                                                "flags": 32,
                                                "start": 146,
                                                "end": 151
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 146,
                                        "end": 151
                                    },
                                    "flags": 32,
                                    "start": 144,
                                    "end": 152
                                },
                                "flags": 16,
                                "start": 144,
                                "end": 152
                            }
                        ],
                        "flags": 16,
                        "start": 136,
                        "end": 152
                    }
                ],
                "flags": 16,
                "start": 134,
                "end": 154
            },
            "flags": 16,
            "start": 124,
            "end": 154
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 154,
            "end": 155
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 155,
                "end": 162
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 164,
                "end": 165
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 168,
                            "end": 173
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 173,
                            "end": 176
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 177,
                                        "end": 179
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 180,
                                        "end": 180
                                    },
                                    "flags": 268435488,
                                    "start": 177,
                                    "end": 181
                                },
                                "flags": 16,
                                "start": 177,
                                "end": 182
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 182,
                                    "end": 188
                                },
                                "label": null,
                                "flags": 16,
                                "start": 182,
                                "end": 189
                            }
                        ],
                        "flags": 16,
                        "start": 168,
                        "end": 189
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 189,
                            "end": 197
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 198,
                                    "end": 204
                                },
                                "label": null,
                                "flags": 16,
                                "start": 198,
                                "end": 204
                            }
                        ],
                        "flags": 16,
                        "start": 189,
                        "end": 204
                    }
                ],
                "flags": 16,
                "start": 166,
                "end": 206
            },
            "flags": 16,
            "start": 155,
            "end": 206
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 206,
            "end": 207
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 207,
                "end": 214
            },
            "expression": {
                "kind": 134299649,
                "text": "answer",
                "rawText": "answer",
                "flags": 96,
                "start": 216,
                "end": 222
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 225,
                            "end": 230
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 230,
                            "end": 233
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 234,
                                    "end": 238
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 96,
                                                "start": 238,
                                                "end": 240
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 242,
                                                "end": 245
                                            },
                                            "flags": 16,
                                            "start": 238,
                                            "end": 245
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 238,
                                    "end": 245
                                },
                                "flags": 33554448,
                                "start": 234,
                                "end": 246
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 246,
                                    "end": 252
                                },
                                "label": null,
                                "flags": 16,
                                "start": 246,
                                "end": 253
                            }
                        ],
                        "flags": 16,
                        "start": 225,
                        "end": 253
                    }
                ],
                "flags": 16,
                "start": 223,
                "end": 255
            },
            "flags": 16,
            "start": 207,
            "end": 255
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 255,
            "end": 256
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 256,
                "end": 263
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 264,
                "end": 265
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 268,
                            "end": 273
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 273,
                            "end": 275
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 278,
                                                    "end": 279
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 64,
                                                    "start": 279,
                                                    "end": 281
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 281,
                                                    "end": 283
                                                },
                                                "flags": 32,
                                                "start": 278,
                                                "end": 283
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 284,
                                                "end": 286
                                            },
                                            {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 289,
                                                    "end": 290
                                                },
                                                "flags": 32,
                                                "start": 287,
                                                "end": 291
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 278,
                                        "end": 291
                                    },
                                    "flags": 32,
                                    "start": 276,
                                    "end": 292
                                },
                                "flags": 16,
                                "start": 276,
                                "end": 292
                            }
                        ],
                        "flags": 16,
                        "start": 268,
                        "end": 292
                    }
                ],
                "flags": 16,
                "start": 266,
                "end": 294
            },
            "flags": 16,
            "start": 256,
            "end": 294
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 294,
            "end": 295
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 295,
                "end": 302
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 303,
                "end": 304
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 307,
                            "end": 312
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 312,
                            "end": 314
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 315,
                                    "end": 317
                                },
                                "flags": 16,
                                "start": 315,
                                "end": 317
                            }
                        ],
                        "flags": 16,
                        "start": 307,
                        "end": 317
                    }
                ],
                "flags": 16,
                "start": 305,
                "end": 319
            },
            "flags": 16,
            "start": 295,
            "end": 319
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 319,
            "end": 320
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 320,
                "end": 327
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 328,
                "end": 329
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 332,
                            "end": 337
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 337,
                            "end": 339
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 340,
                                        "end": 342
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 343,
                                                "end": 346
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 343,
                                        "end": 346
                                    },
                                    "flags": 268435488,
                                    "start": 340,
                                    "end": 347
                                },
                                "flags": 16,
                                "start": 340,
                                "end": 347
                            }
                        ],
                        "flags": 16,
                        "start": 332,
                        "end": 347
                    }
                ],
                "flags": 16,
                "start": 330,
                "end": 349
            },
            "flags": 16,
            "start": 320,
            "end": 349
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 349,
            "end": 350
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 350,
                "end": 357
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 358,
                "end": 359
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 362,
                            "end": 367
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 367,
                            "end": 369
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 370,
                                        "end": 374
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 374,
                                        "end": 375
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 375,
                                        "end": 376
                                    },
                                    "flags": 32,
                                    "start": 370,
                                    "end": 376
                                },
                                "flags": 16,
                                "start": 370,
                                "end": 377
                            }
                        ],
                        "flags": 16,
                        "start": 362,
                        "end": 377
                    }
                ],
                "flags": 16,
                "start": 360,
                "end": 379
            },
            "flags": 16,
            "start": 350,
            "end": 379
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 379,
            "end": 380
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 380,
                "end": 388
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 389,
                    "end": 390
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 390,
                    "end": 391
                },
                "right": {
                    "kind": 536871042,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 391,
                        "end": 392
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 393,
                        "end": 394
                    },
                    "flags": 32,
                    "start": 391,
                    "end": 395
                },
                "flags": 32,
                "start": 389,
                "end": 395
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 398,
                            "end": 403
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 403,
                            "end": 405
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 406,
                                    "end": 410
                                },
                                "flags": 16,
                                "start": 406,
                                "end": 410
                            }
                        ],
                        "flags": 16,
                        "start": 398,
                        "end": 410
                    }
                ],
                "flags": 16,
                "start": 396,
                "end": 412
            },
            "flags": 16,
            "start": 380,
            "end": 412
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 412,
            "end": 413
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 413,
                "end": 420
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 421,
                    "end": 422
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 422,
                    "end": 423
                },
                "right": {
                    "kind": 536871042,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 423,
                        "end": 424
                    },
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 426,
                            "end": 427
                        },
                        "flags": 32,
                        "start": 425,
                        "end": 428
                    },
                    "flags": 32,
                    "start": 423,
                    "end": 429
                },
                "flags": 32,
                "start": 421,
                "end": 429
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 432,
                            "end": 437
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 437,
                            "end": 439
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 440,
                                    "end": 444
                                },
                                "flags": 16,
                                "start": 440,
                                "end": 444
                            }
                        ],
                        "flags": 16,
                        "start": 432,
                        "end": 444
                    }
                ],
                "flags": 16,
                "start": 430,
                "end": 446
            },
            "flags": 16,
            "start": 413,
            "end": 446
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 446,
            "end": 447
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 447,
                "end": 454
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 456,
                "end": 457
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 460,
                            "end": 465
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 465,
                            "end": 469
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 470,
                                    "end": 479
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 479,
                                    "end": 481
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 481,
                                    "end": 482
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 482,
                                    "end": 484
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 485,
                                        "end": 485
                                    },
                                    "flags": 32,
                                    "start": 484,
                                    "end": 486
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 272,
                                "start": 470,
                                "end": 486
                            }
                        ],
                        "flags": 16,
                        "start": 460,
                        "end": 486
                    }
                ],
                "flags": 16,
                "start": 458,
                "end": 488
            },
            "flags": 16,
            "start": 447,
            "end": 488
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 488,
            "end": 489
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 489,
                "end": 497
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 498,
                "end": 499
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 502,
                            "end": 507
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 507,
                            "end": 509
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 512,
                                        "end": 515
                                    },
                                    "flags": 32,
                                    "start": 510,
                                    "end": 516
                                },
                                "flags": 16,
                                "start": 510,
                                "end": 516
                            }
                        ],
                        "flags": 16,
                        "start": 502,
                        "end": 516
                    }
                ],
                "flags": 16,
                "start": 500,
                "end": 518
            },
            "flags": 16,
            "start": 489,
            "end": 518
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 518,
            "end": 519
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 519,
                "end": 526
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 527,
                "end": 528
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 531,
                            "end": 536
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 536,
                            "end": 538
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 541,
                                                "end": 544
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 545,
                                                "end": 549
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 539,
                                        "end": 550
                                    },
                                    "flags": 32,
                                    "start": 539,
                                    "end": 550
                                },
                                "flags": 16,
                                "start": 539,
                                "end": 550
                            }
                        ],
                        "flags": 16,
                        "start": 531,
                        "end": 550
                    }
                ],
                "flags": 16,
                "start": 529,
                "end": 552
            },
            "flags": 16,
            "start": 519,
            "end": 552
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 552,
            "end": 553
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 553,
                "end": 560
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 561,
                "end": 562
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 565,
                            "end": 570
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 570,
                            "end": 572
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 575,
                                            "end": 578
                                        },
                                        "flags": 32,
                                        "start": 573,
                                        "end": 579
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 579,
                                        "end": 581
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 583,
                                                "end": 586
                                            },
                                            "flags": 32,
                                            "start": 581,
                                            "end": 587
                                        },
                                        "operatorToken": {
                                            "kind": 35379,
                                            "flags": 64,
                                            "start": 587,
                                            "end": 603
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 603,
                                            "end": 605
                                        },
                                        "flags": 32,
                                        "start": 581,
                                        "end": 605
                                    },
                                    "flags": 32,
                                    "start": 573,
                                    "end": 605
                                },
                                "flags": 16,
                                "start": 573,
                                "end": 605
                            }
                        ],
                        "flags": 16,
                        "start": 565,
                        "end": 605
                    }
                ],
                "flags": 16,
                "start": 563,
                "end": 607
            },
            "flags": 16,
            "start": 553,
            "end": 607
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 607,
            "end": 608
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 608,
                "end": 615
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 616,
                "end": 617
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 620,
                            "end": 625
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 625,
                            "end": 627
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 628,
                                    "end": 632
                                },
                                "flags": 16,
                                "start": 628,
                                "end": 632
                            }
                        ],
                        "flags": 16,
                        "start": 620,
                        "end": 632
                    }
                ],
                "flags": 16,
                "start": 618,
                "end": 634
            },
            "flags": 16,
            "start": 608,
            "end": 634
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 634,
                "end": 703
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 704,
                    "end": 705
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 705,
                    "end": 706
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 706,
                    "end": 707
                },
                "flags": 32,
                "start": 704,
                "end": 707
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 710,
                            "end": 715
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 715,
                            "end": 717
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 718,
                                    "end": 722
                                },
                                "flags": 16,
                                "start": 718,
                                "end": 722
                            }
                        ],
                        "flags": 16,
                        "start": 710,
                        "end": 722
                    }
                ],
                "flags": 16,
                "start": 708,
                "end": 724
            },
            "flags": 16,
            "start": 634,
            "end": 724
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 724,
            "end": 725
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 725,
                "end": 732
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 733,
                    "end": 734
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 734,
                    "end": 735
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 735,
                    "end": 736
                },
                "flags": 32,
                "start": 733,
                "end": 736
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 739,
                            "end": 744
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 744,
                            "end": 746
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 747,
                                    "end": 751
                                },
                                "flags": 16,
                                "start": 747,
                                "end": 751
                            }
                        ],
                        "flags": 16,
                        "start": 739,
                        "end": 751
                    }
                ],
                "flags": 16,
                "start": 737,
                "end": 753
            },
            "flags": 16,
            "start": 725,
            "end": 753
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 753,
            "end": 754
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 754,
                "end": 762
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 763,
                "end": 764
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 767,
                            "end": 772
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 772,
                            "end": 774
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 221,
                                    "text": "/a/",
                                    "flags": 96,
                                    "start": 775,
                                    "end": 779
                                },
                                "flags": 16,
                                "start": 775,
                                "end": 779
                            }
                        ],
                        "flags": 16,
                        "start": 767,
                        "end": 779
                    }
                ],
                "flags": 16,
                "start": 765,
                "end": 781
            },
            "flags": 16,
            "start": 754,
            "end": 781
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 781,
            "end": 782
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 782,
                "end": 789
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 790,
                "end": 791
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 794,
                            "end": 799
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 799,
                            "end": 801
                        },
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 804,
                                                "end": 805
                                            },
                                            "flags": 16,
                                            "start": 804,
                                            "end": 805
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 804,
                                    "end": 805
                                },
                                "flags": 16,
                                "start": 802,
                                "end": 806
                            }
                        ],
                        "flags": 16,
                        "start": 794,
                        "end": 806
                    }
                ],
                "flags": 16,
                "start": 792,
                "end": 808
            },
            "flags": 16,
            "start": 782,
            "end": 808
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 808,
            "end": 809
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 809,
                "end": 816
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 817,
                "end": 818
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 821,
                            "end": 826
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 826,
                            "end": 828
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 829,
                                        "end": 831
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 831,
                                        "end": 833
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 0,
                                                        "start": 835,
                                                        "end": 838
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 838,
                                                        "end": 839
                                                    },
                                                    "flags": 32,
                                                    "start": 835,
                                                    "end": 839
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 835,
                                            "end": 839
                                        },
                                        "flags": 48,
                                        "start": 833,
                                        "end": 840
                                    },
                                    "flags": 32,
                                    "start": 829,
                                    "end": 840
                                },
                                "flags": 16,
                                "start": 829,
                                "end": 840
                            }
                        ],
                        "flags": 16,
                        "start": 821,
                        "end": 840
                    }
                ],
                "flags": 16,
                "start": 819,
                "end": 842
            },
            "flags": 16,
            "start": 809,
            "end": 842
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 842,
            "end": 843
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 843,
                "end": 850
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 851,
                "end": 852
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 855,
                            "end": 860
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 860,
                            "end": 862
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 863,
                                            "end": 867
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 64,
                                            "start": 867,
                                            "end": 869
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 869,
                                            "end": 873
                                        },
                                        "flags": 32,
                                        "start": 863,
                                        "end": 873
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 0,
                                        "start": 873,
                                        "end": 875
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 875,
                                        "end": 877
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 0,
                                        "start": 877,
                                        "end": 879
                                    },
                                    "alternate": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 881,
                                            "end": 882
                                        },
                                        "flags": 32,
                                        "start": 879,
                                        "end": 883
                                    },
                                    "flags": 32,
                                    "start": 863,
                                    "end": 883
                                },
                                "flags": 16,
                                "start": 863,
                                "end": 883
                            }
                        ],
                        "flags": 16,
                        "start": 855,
                        "end": 883
                    }
                ],
                "flags": 16,
                "start": 853,
                "end": 885
            },
            "flags": 16,
            "start": 843,
            "end": 885
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 885,
            "end": 886
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 886,
                "end": 893
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 894,
                "end": 895
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 898,
                            "end": 903
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 903,
                            "end": 905
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 906,
                                            "end": 910
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 64,
                                            "start": 910,
                                            "end": 912
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 912,
                                            "end": 916
                                        },
                                        "flags": 32,
                                        "start": 906,
                                        "end": 916
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 0,
                                        "start": 916,
                                        "end": 918
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 918,
                                        "end": 920
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 0,
                                        "start": 920,
                                        "end": 922
                                    },
                                    "alternate": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 926,
                                            "end": 929
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 924,
                                                "end": 925
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
                                                "start": 931,
                                                "end": 931
                                            },
                                            "flags": 32,
                                            "start": 929,
                                            "end": 932
                                        },
                                        "flags": 32,
                                        "start": 922,
                                        "end": 932
                                    },
                                    "flags": 32,
                                    "start": 906,
                                    "end": 932
                                },
                                "flags": 16,
                                "start": 906,
                                "end": 932
                            }
                        ],
                        "flags": 16,
                        "start": 898,
                        "end": 932
                    }
                ],
                "flags": 16,
                "start": 896,
                "end": 933
            },
            "flags": 16,
            "start": 886,
            "end": 933
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 933,
            "end": 934
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 934,
                "end": 941
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 943,
                "end": 944
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 947,
                            "end": 952
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 952,
                            "end": 954
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 955,
                                    "end": 961
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 961,
                                    "end": 970
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 970,
                                    "end": 972
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 972,
                                    "end": 974
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 976,
                                        "end": 976
                                    },
                                    "flags": 32,
                                    "start": 974,
                                    "end": 977
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 144,
                                "start": 955,
                                "end": 977
                            }
                        ],
                        "flags": 16,
                        "start": 947,
                        "end": 977
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 977,
                            "end": 985
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 986,
                                    "end": 992
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 992,
                                    "end": 1001
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1001,
                                    "end": 1003
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1003,
                                    "end": 1005
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1007,
                                        "end": 1007
                                    },
                                    "flags": 32,
                                    "start": 1005,
                                    "end": 1008
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 144,
                                "start": 986,
                                "end": 1008
                            }
                        ],
                        "flags": 16,
                        "start": 977,
                        "end": 1008
                    }
                ],
                "flags": 16,
                "start": 945,
                "end": 1010
            },
            "flags": 16,
            "start": 934,
            "end": 1010
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1010,
            "end": 1011
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1011,
                "end": 1018
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1019,
                "end": 1020
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1023,
                            "end": 1028
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1028,
                            "end": 1030
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 1031,
                                        "end": 1035
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 0,
                                        "start": 1035,
                                        "end": 1037
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 1037,
                                        "end": 1039
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 0,
                                        "start": 1039,
                                        "end": 1041
                                    },
                                    "alternate": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 1045,
                                            "end": 1048
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 1043,
                                                "end": 1044
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
                                                "start": 1050,
                                                "end": 1050
                                            },
                                            "flags": 32,
                                            "start": 1048,
                                            "end": 1051
                                        },
                                        "flags": 32,
                                        "start": 1041,
                                        "end": 1051
                                    },
                                    "flags": 32,
                                    "start": 1031,
                                    "end": 1051
                                },
                                "flags": 16,
                                "start": 1031,
                                "end": 1051
                            }
                        ],
                        "flags": 16,
                        "start": 1023,
                        "end": 1051
                    }
                ],
                "flags": 16,
                "start": 1021,
                "end": 1052
            },
            "flags": 16,
            "start": 1011,
            "end": 1052
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1052,
            "end": 1053
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1053,
                "end": 1060
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "generatorToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1062,
                                "end": 1063
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1064,
                                "end": 1065
                            },
                            "flags": 32,
                            "start": 1062,
                            "end": 1065
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1062,
                    "end": 1065
                },
                "flags": 48,
                "start": 1061,
                "end": 1066
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1069,
                            "end": 1074
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1074,
                            "end": 1076
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 223,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
                                                    "start": 1079,
                                                    "end": 1082
                                                },
                                                "argument": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 1082,
                                                    "end": 1083
                                                },
                                                "flags": 32,
                                                "start": 1079,
                                                "end": 1083
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 1079,
                                        "end": 1083
                                    },
                                    "flags": 32,
                                    "start": 1077,
                                    "end": 1084
                                },
                                "flags": 16,
                                "start": 1077,
                                "end": 1084
                            }
                        ],
                        "flags": 16,
                        "start": 1069,
                        "end": 1084
                    }
                ],
                "flags": 16,
                "start": 1067,
                "end": 1086
            },
            "flags": 16,
            "start": 1053,
            "end": 1086
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1086,
            "end": 1087
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1087,
                "end": 1094
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "generatorToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1096,
                                "end": 1097
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1098,
                                "end": 1099
                            },
                            "flags": 32,
                            "start": 1096,
                            "end": 1099
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1096,
                    "end": 1099
                },
                "flags": 48,
                "start": 1095,
                "end": 1100
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1103,
                            "end": 1108
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1108,
                            "end": 1110
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 223,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 0,
                                                        "start": 1113,
                                                        "end": 1116
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 1116,
                                                        "end": 1117
                                                    },
                                                    "flags": 32,
                                                    "start": 1113,
                                                    "end": 1117
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 1113,
                                            "end": 1117
                                        },
                                        "flags": 32,
                                        "start": 1111,
                                        "end": 1118
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 1118,
                                        "end": 1120
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 1120,
                                        "end": 1122
                                    },
                                    "flags": 32,
                                    "start": 1111,
                                    "end": 1122
                                },
                                "flags": 16,
                                "start": 1111,
                                "end": 1122
                            }
                        ],
                        "flags": 16,
                        "start": 1103,
                        "end": 1122
                    }
                ],
                "flags": 16,
                "start": 1101,
                "end": 1124
            },
            "flags": 16,
            "start": 1087,
            "end": 1124
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1124,
            "end": 1125
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1125,
                "end": 1132
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1133,
                    "end": 1134
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 1134,
                    "end": 1135
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1135,
                        "end": 1136
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 1137,
                                "end": 1138
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1137,
                        "end": 1138
                    },
                    "flags": 268435488,
                    "start": 1135,
                    "end": 1139
                },
                "flags": 32,
                "start": 1133,
                "end": 1139
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1142,
                            "end": 1147
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1147,
                            "end": 1149
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 1150,
                                    "end": 1154
                                },
                                "flags": 16,
                                "start": 1150,
                                "end": 1154
                            }
                        ],
                        "flags": 16,
                        "start": 1142,
                        "end": 1154
                    }
                ],
                "flags": 16,
                "start": 1140,
                "end": 1156
            },
            "flags": 16,
            "start": 1125,
            "end": 1156
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1156,
            "end": 1157
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1157,
                "end": 1165
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1167,
                "end": 1168
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1171,
                            "end": 1176
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 1176,
                            "end": 1178
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1179,
                                    "end": 1188
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1188,
                                    "end": 1190
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1190,
                                    "end": 1192
                                },
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
                                    "start": 1192,
                                    "end": 1194
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 1179,
                                "end": 1194
                            },
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1194,
                                    "end": 1203
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1203,
                                    "end": 1205
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1205,
                                    "end": 1207
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1208,
                                        "end": 1208
                                    },
                                    "flags": 32,
                                    "start": 1207,
                                    "end": 1209
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 1194,
                                "end": 1209
                            }
                        ],
                        "flags": 16,
                        "start": 1171,
                        "end": 1209
                    }
                ],
                "flags": 16,
                "start": 1169,
                "end": 1211
            },
            "flags": 16,
            "start": 1157,
            "end": 1211
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1211,
            "end": 1212
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1212,
                "end": 1219
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1221,
                "end": 1222
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1225,
                            "end": 1230
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 1230,
                            "end": 1232
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 1233,
                                    "end": 1239
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1239,
                                    "end": 1248
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 1248,
                                    "end": 1250
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1250,
                                    "end": 1251
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1251,
                                    "end": 1253
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1254,
                                        "end": 1254
                                    },
                                    "flags": 32,
                                    "start": 1253,
                                    "end": 1255
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 400,
                                "start": 1233,
                                "end": 1255
                            },
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 1255,
                                    "end": 1261
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1261,
                                    "end": 1270
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 1270,
                                    "end": 1272
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1272,
                                    "end": 1273
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1273,
                                    "end": 1275
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1276,
                                        "end": 1276
                                    },
                                    "flags": 32,
                                    "start": 1275,
                                    "end": 1277
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 400,
                                "start": 1255,
                                "end": 1277
                            }
                        ],
                        "flags": 16,
                        "start": 1225,
                        "end": 1277
                    }
                ],
                "flags": 16,
                "start": 1223,
                "end": 1279
            },
            "flags": 16,
            "start": 1212,
            "end": 1279
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1279,
            "end": 1280
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1280,
                "end": 1287
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1289,
                "end": 1290
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1293,
                            "end": 1298
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1298,
                            "end": 1300
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 0,
                                    "start": 1301,
                                    "end": 1305
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
                                                "start": 1305,
                                                "end": 1307
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 1305,
                                            "end": 1307
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 1305,
                                    "end": 1307
                                },
                                "flags": 16,
                                "start": 1301,
                                "end": 1308
                            }
                        ],
                        "flags": 16,
                        "start": 1293,
                        "end": 1308
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1308,
                            "end": 1316
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 0,
                                    "start": 1317,
                                    "end": 1321
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
                                                "start": 1321,
                                                "end": 1323
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 1321,
                                            "end": 1323
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 1321,
                                    "end": 1323
                                },
                                "flags": 16,
                                "start": 1317,
                                "end": 1324
                            }
                        ],
                        "flags": 16,
                        "start": 1308,
                        "end": 1324
                    }
                ],
                "flags": 16,
                "start": 1291,
                "end": 1326
            },
            "flags": 16,
            "start": 1280,
            "end": 1326
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1326,
                "end": 1333
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1335,
                "end": 1336
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1339,
                            "end": 1344
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1344,
                            "end": 1346
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 0,
                                    "start": 1347,
                                    "end": 1351
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
                                                "start": 1351,
                                                "end": 1353
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 1351,
                                            "end": 1353
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 1351,
                                    "end": 1353
                                },
                                "flags": 16,
                                "start": 1347,
                                "end": 1354
                            }
                        ],
                        "flags": 16,
                        "start": 1339,
                        "end": 1354
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1354,
                            "end": 1362
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 0,
                                    "start": 1363,
                                    "end": 1367
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
                                                "start": 1367,
                                                "end": 1369
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 1367,
                                            "end": 1369
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 1367,
                                    "end": 1369
                                },
                                "flags": 16,
                                "start": 1363,
                                "end": 1370
                            }
                        ],
                        "flags": 16,
                        "start": 1354,
                        "end": 1370
                    }
                ],
                "flags": 16,
                "start": 1337,
                "end": 1372
            },
            "flags": 16,
            "start": 1326,
            "end": 1372
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1372,
            "end": 1373
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1373,
                "end": 1380
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1382,
                "end": 1383
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1386,
                            "end": 1391
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1391,
                            "end": 1393
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1394,
                                    "end": 1403
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 1403,
                                    "end": 1405
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1405,
                                    "end": 1407
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1407,
                                    "end": 1409
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1411,
                                        "end": 1411
                                    },
                                    "flags": 32,
                                    "start": 1409,
                                    "end": 1412
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 272,
                                "start": 1394,
                                "end": 1412
                            }
                        ],
                        "flags": 16,
                        "start": 1386,
                        "end": 1412
                    }
                ],
                "flags": 16,
                "start": 1384,
                "end": 1414
            },
            "flags": 16,
            "start": 1373,
            "end": 1414
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1414,
            "end": 1415
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1415,
                "end": 1422
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1424,
                "end": 1425
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1428,
                            "end": 1433
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1433,
                            "end": 1435
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1436,
                                    "end": 1445
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 1445,
                                    "end": 1447
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1447,
                                    "end": 1449
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1449,
                                    "end": 1451
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1453,
                                        "end": 1453
                                    },
                                    "flags": 32,
                                    "start": 1451,
                                    "end": 1454
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 272,
                                "start": 1436,
                                "end": 1454
                            }
                        ],
                        "flags": 16,
                        "start": 1428,
                        "end": 1454
                    }
                ],
                "flags": 16,
                "start": 1426,
                "end": 1456
            },
            "flags": 16,
            "start": 1415,
            "end": 1456
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1456,
            "end": 1457
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1457,
                "end": 1471
            },
            "flags": 16,
            "start": 1457,
            "end": 1472
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 1472,
                "end": 1479
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1480,
                "end": 1481
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1484,
                            "end": 1489
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1489,
                            "end": 1491
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1484,
                        "end": 1492
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1492,
                            "end": 1500
                        },
                        "statements": [
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 1501,
                                    "end": 1507
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 1507,
                                    "end": 1509
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 1511,
                                        "end": 1511
                                    },
                                    "flags": 1509,
                                    "start": 32,
                                    "end": 1513
                                },
                                "flags": 16,
                                "start": 1501,
                                "end": 1513
                            }
                        ],
                        "flags": 16,
                        "start": 1492,
                        "end": 1513
                    }
                ],
                "flags": 16,
                "start": 1482,
                "end": 1514
            },
            "flags": 16,
            "start": 1472,
            "end": 1514
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1514,
            "end": 1515
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1515,
                "end": 1523
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1524,
                "end": 1525
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 1526,
                "end": 1528
            },
            "flags": 16,
            "start": 1515,
            "end": 1528
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/foo/",
                "flags": 96,
                "start": 1528,
                "end": 1533
            },
            "flags": 16,
            "start": 1528,
            "end": 1534
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1534,
                "end": 1548
            },
            "flags": 16,
            "start": 1534,
            "end": 1549
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 1549,
                "end": 1556
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1557,
                "end": 1558
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1561,
                            "end": 1566
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1566,
                            "end": 1568
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1561,
                        "end": 1569
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1569,
                            "end": 1577
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1578,
                                    "end": 1586
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1586,
                                    "end": 1588
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1588,
                                    "end": 1590
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1592,
                                        "end": 1592
                                    },
                                    "flags": 32,
                                    "start": 1590,
                                    "end": 1594
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 1578,
                                "end": 1594
                            },
                            {
                                "kind": 168,
                                "flags": 16,
                                "start": 1594,
                                "end": 1595
                            },
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 1595,
                                    "end": 1601
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 1601,
                                    "end": 1603
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 1605,
                                        "end": 1605
                                    },
                                    "flags": 1603,
                                    "start": 32,
                                    "end": 1606
                                },
                                "flags": 16,
                                "start": 1595,
                                "end": 1606
                            }
                        ],
                        "flags": 16,
                        "start": 1569,
                        "end": 1606
                    }
                ],
                "flags": 16,
                "start": 1559,
                "end": 1607
            },
            "flags": 16,
            "start": 1549,
            "end": 1607
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1607,
            "end": 1608
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1608,
                "end": 1621
            },
            "flags": 16,
            "start": 1608,
            "end": 1622
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 1622,
                "end": 1629
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1630,
                "end": 1631
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1634,
                            "end": 1639
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1639,
                            "end": 1641
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1634,
                        "end": 1642
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1642,
                            "end": 1650
                        },
                        "statements": [
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 1651,
                                    "end": 1656
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 1656,
                                    "end": 1658
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 1660,
                                        "end": 1660
                                    },
                                    "flags": 1658,
                                    "start": 32,
                                    "end": 1661
                                },
                                "flags": 16,
                                "start": 1651,
                                "end": 1661
                            },
                            {
                                "kind": 168,
                                "flags": 16,
                                "start": 1661,
                                "end": 1662
                            },
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1662,
                                    "end": 1671
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1671,
                                    "end": 1673
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1673,
                                    "end": 1675
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1677,
                                        "end": 1677
                                    },
                                    "flags": 32,
                                    "start": 1675,
                                    "end": 1678
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 1662,
                                "end": 1678
                            }
                        ],
                        "flags": 16,
                        "start": 1642,
                        "end": 1678
                    }
                ],
                "flags": 16,
                "start": 1632,
                "end": 1679
            },
            "flags": 16,
            "start": 1622,
            "end": 1679
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1679,
            "end": 1680
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1680,
                "end": 1693
            },
            "flags": 16,
            "start": 1680,
            "end": 1694
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 1694,
                "end": 1701
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1702,
                "end": 1703
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1706,
                            "end": 1711
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1711,
                            "end": 1713
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1706,
                        "end": 1714
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1714,
                            "end": 1722
                        },
                        "statements": [
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 1723,
                                    "end": 1728
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 1728,
                                    "end": 1730
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": {
                                        "kind": 279,
                                        "extendsKeyword": {
                                            "kind": 4194391,
                                            "flags": 0,
                                            "start": 1730,
                                            "end": 1738
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "Q",
                                            "rawText": "Q",
                                            "flags": 96,
                                            "start": 1738,
                                            "end": 1740
                                        },
                                        "typeParameter": null,
                                        "flags": 16,
                                        "start": 1738,
                                        "end": 1740
                                    },
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 1742,
                                        "end": 1742
                                    },
                                    "flags": 1730,
                                    "start": 32,
                                    "end": 1743
                                },
                                "flags": 16,
                                "start": 1723,
                                "end": 1743
                            }
                        ],
                        "flags": 16,
                        "start": 1714,
                        "end": 1743
                    }
                ],
                "flags": 16,
                "start": 1704,
                "end": 1744
            },
            "flags": 16,
            "start": 1694,
            "end": 1744
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1744,
            "end": 1745
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1745,
                "end": 1758
            },
            "flags": 16,
            "start": 1745,
            "end": 1759
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 1759,
                "end": 1766
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1767,
                "end": 1768
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1771,
                            "end": 1776
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1776,
                            "end": 1778
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1771,
                        "end": 1779
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1779,
                            "end": 1787
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 1788,
                                    "end": 1796
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1796,
                                    "end": 1798
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1798,
                                    "end": 1800
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1802,
                                        "end": 1802
                                    },
                                    "flags": 32,
                                    "start": 1800,
                                    "end": 1804
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 1788,
                                "end": 1804
                            },
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 1804,
                                    "end": 1810
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 1810,
                                    "end": 1812
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 1814,
                                        "end": 1814
                                    },
                                    "flags": 1812,
                                    "start": 32,
                                    "end": 1815
                                },
                                "flags": 16,
                                "start": 1804,
                                "end": 1815
                            }
                        ],
                        "flags": 16,
                        "start": 1779,
                        "end": 1815
                    }
                ],
                "flags": 16,
                "start": 1769,
                "end": 1816
            },
            "flags": 16,
            "start": 1759,
            "end": 1816
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1816,
            "end": 1817
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1817,
                "end": 1830
            },
            "flags": 16,
            "start": 1817,
            "end": 1831
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 1831,
                "end": 1838
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1839,
                "end": 1840
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1843,
                            "end": 1848
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1848,
                            "end": 1850
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1843,
                        "end": 1851
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 1851,
                            "end": 1859
                        },
                        "statements": [
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 1860,
                                    "end": 1865
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 1865,
                                    "end": 1867
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 1869,
                                        "end": 1869
                                    },
                                    "flags": 1867,
                                    "start": 32,
                                    "end": 1871
                                },
                                "flags": 16,
                                "start": 1860,
                                "end": 1871
                            }
                        ],
                        "flags": 16,
                        "start": 1851,
                        "end": 1871
                    }
                ],
                "flags": 16,
                "start": 1841,
                "end": 1872
            },
            "flags": 16,
            "start": 1831,
            "end": 1872
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1872,
            "end": 1873
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1873,
                "end": 1881
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 1882,
                "end": 1883
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1885,
                            "end": 1889
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1889,
                            "end": 1891
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 1885,
                        "end": 1892
                    }
                ],
                "flags": 16,
                "start": 1884,
                "end": 1893
            },
            "flags": 16,
            "start": 1873,
            "end": 1893
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1893,
            "end": 1894
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1894,
                "end": 1901
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 1903,
                "end": 1904
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1907,
                            "end": 1912
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1912,
                            "end": 1914
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 1915,
                                    "end": 1919
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 1921,
                                                                "end": 1922
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 1921,
                                                            "end": 1922
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 1921,
                                                    "end": 1922
                                                },
                                                "flags": 32,
                                                "start": 1919,
                                                "end": 1923
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 1925,
                                                "end": 1927
                                            },
                                            "flags": 16,
                                            "start": 1919,
                                            "end": 1927
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 1919,
                                    "end": 1927
                                },
                                "flags": 33554448,
                                "start": 1915,
                                "end": 1927
                            }
                        ],
                        "flags": 16,
                        "start": 1907,
                        "end": 1927
                    }
                ],
                "flags": 16,
                "start": 1905,
                "end": 1929
            },
            "flags": 16,
            "start": 1894,
            "end": 1929
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1929,
            "end": 1930
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 1930,
                "end": 1937
            },
            "expression": {
                "kind": 134299649,
                "text": "answer",
                "rawText": "answer",
                "flags": 96,
                "start": 1939,
                "end": 1945
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 1948,
                            "end": 1953
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 1953,
                            "end": 1955
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 1956,
                                    "end": 1960
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 1960,
                                                "end": 1962
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 1960,
                                            "end": 1962
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 1960,
                                    "end": 1962
                                },
                                "flags": 33554448,
                                "start": 1956,
                                "end": 1963
                            }
                        ],
                        "flags": 16,
                        "start": 1948,
                        "end": 1963
                    }
                ],
                "flags": 16,
                "start": 1946,
                "end": 1965
            },
            "flags": 16,
            "start": 1930,
            "end": 1965
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1965,
            "end": 1966
        }
    ],
    "isModule": false,
    "source": "switch (x) { case 194: switch (y) { default: 1; } default: 2;};\nswitch([/a/]) { case y: !x };\nswitch(x) { case y: {x = b} };\nswitch(x) { case y: [a / b] };\nswitch (x) { case 42: y(); break; default: break };\nswitch (answer) { case 42: let t = 42; break; };\nswitch(x) { case y: [a / b, c, (d)] };\nswitch(x) { case y: a };\nswitch(x) { case y: x(foo) };\nswitch(x) { case y: foo=b; };\n\nswitch(x/b[c]) { case y: foo };\nswitch(x/b[(c)]) { case y: foo };\nswitch (x) { case foo: function *f(){} };\n\nswitch(x) { case y: (foo) };\nswitch(x) { case y: (foo, bar) };\nswitch(x) { case y: (foo) = (foo) /* comment */ - b };\nswitch(x) { case y: foo } // comment;\n// should be ignored - switch(x) { case y: foo };\nswitch(x/a) { case y: foo };\nswitch(a+b) { case y: foo };\n\nswitch(x) { case y: /a/ };\nswitch(x) { case y: {x} };\nswitch(x) { case y: x = {...x} };\nswitch(x) { case y: foo / bar ? 1 : (x) };\nswitch(x) { case y: foo / bar ? 1 : (x) => {}};\nswitch (0) { case 1: async function f() {} default: async function f() {} };\nswitch(x) { case y: foo ? 1 : (x) => {}};\nswitch({x:y}) { case y: [...a] };\nswitch({x:y}) { case y: [...a] = b };\nswitch(x/b(c)) { case y: foo };\n\nswitch (x) { case c: function f(){} function f(){} };\nswitch (x) { case c: async function *f(){} async function *f(){} };\nswitch (0) { case 1: var f; default: var f; }\nswitch (0) { case 1: var f; default: var f; };\nswitch (x) { case x: function * f() {} };\nswitch (x) { case x: function * f() {} };\n\n\"use strict\"; switch(x) { case 1: default: class C { }};\n\nswitch(x){}/foo/;\n\n\"use strict\"; switch(x) { case 1: default:function f() { }; class C {}};\n\"use strict\"; switch(x) { case 1: default:class C {}; function f() {}};\n\"use strict\"; switch(x) { case 1: default:class C extends Q {}};\n\"use strict\"; switch(x) { case 1: default:function f() { } class C {}};\n\"use strict\"; switch(x) { case 1: default:class C { }};\n\nswitch(a){case 1:};\nswitch (a) { case b: let [x] = y };\nswitch (answer) { case 0: let a; };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1967
}
```

### Printed

```javascript

switch(x) {
  case 194:
    switch(y) {
      default
        1;
    }
  default
    2;
}
switch([/a/]) {
  case y:
    !x;
}
switch(x) {
  case y:
    {
      x = b;
    }
}
switch(x) {
  case y:
    [a / b];
}
switch(x) {
  case 42:
    y();
    break;
  default
    break;
}
switch(answer) {
  case 42:
    let t = 42;
    break;
}
switch(x) {
  case y:
    [a / b, c, (d)];
}
switch(x) {
  case y:
    a;
}
switch(x) {
  case y:
    x(foo);
}
switch(x) {
  case y:
    foo = b;
}
switch(x / ) {
  case y:
    foo;
}
switch(x / ) {
  case y:
    foo;
}
switch(x) {
  case foo:
    function * f() {}
}
switch(x) {
  case y:
    (foo);
}
switch(x) {
  case y:
    (foo, bar);
}
switch(x) {
  case y:
    (foo) = (foo) /* comment */ - b;
}
switch(x) {
  case y:
    foo;
} // comment;

// should be ignored - switch(x) { case y: foo };
switch(x / a) {
  case y:
    foo;
}
switch(a + b) {
  case y:
    foo;
}
switch(x) {
  case y:
    /a/;
}
switch(x) {
  case y:
    {
      x;
    }
}
switch(x) {
  case y:
    x = { ...x };
}
switch(x) {
  case y:
    foo / bar ? 1 : (x);
}
switch(x) {
  case y:
    foo / bar ? 1 : (x) =>  {};
}
switch(0) {
  case 1:
    async function f() {}
  default
    async function f() {}
}
switch(x) {
  case y:
    foo ? 1 : (x) =>  {};
}
switch({ x: y }) {
  case y:
    [...a];
}
switch({ x: y }) {
  case y:
    [...a] = b;
}
switch(x / b(c)) {
  case y:
    foo;
}
switch(x) {
  case c:
    function f() {}
    function f() {}
}
switch(x) {
  case c:
    async function * f() {}
    async function * f() {}
}
switch(0) {
  case 1:
    var f;
  default
    var f;
}
switch(0) {
  case 1:
    var f;
  default
    var f;
}
switch(x) {
  case x:
    function * f() {}
}
switch(x) {
  case x:
    function * f() {}
}
"\"use strict\"";
switch(x) {
  case 1:

  default
    class C {}
}
switch(x) {
}
/foo/;
"\"use strict\"";
switch(x) {
  case 1:

  default
    function f() {}
    class C {}
}
"\"use strict\"";
switch(x) {
  case 1:

  default
    class C {}
    function f() {}
}
"\"use strict\"";
switch(x) {
  case 1:

  default
    class C  {}
}
"\"use strict\"";
switch(x) {
  case 1:

  default
    function f() {}
    class C {}
}
"\"use strict\"";
switch(x) {
  case 1:

  default
    class C {}
}
switch(a) {
  case 1:

}
switch(a) {
  case b:
    let [x] = y;
}
switch(answer) {
  case 0:
    let a;
}

```

### Diagnostics

```javascript
✔ No errors
```

