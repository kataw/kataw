# Kataw parser test case

## Input

`````js
(z = [...x.y]) => z;
(...{x}) => x;
(a, (a, (b, c) => 0));
() => () => 0;
() => 0, 1;

() => f10({x: 6}, 2);

(e) => "test";

(x, y) => (u, v) => x*u + y*v;

new (() => {});

([y]) => x;

(() => 5)() === 5;

foo(([a,b]) => 42);

([x = 0]) => {};

(a, (a, (b, c) => 0));

x = (a,b) =>{};

(x, y) => x.a = y;

([[x, y] = z]) => x;

(a = 1, b = 2) => x;

x(({x}, [y], z) => x);
x(({x = 30}, [y], z) => x);
x(([x] = 20, y) => x);

delete (() => ok);

() => { let x };

(a = await/r/g) => {};

() => ok.x;

((a, b) => { return a + b; })(1, 5), 6;

foo((x, y) => {});

(b,) => {};

(b,c,d,) => {};

([{x = y}]) => z;

({a,b=b,a:c,[a]:[d]})=>0;


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
                    "flags": 64,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "argument": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "flags": 536870944,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 13
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 34,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 29,
                    "end": 32
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 22,
                            "end": 25
                        },
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 25,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 22,
                        "end": 28
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "flags": 32,
                "start": 20,
                "end": 34
            },
            "flags": 16,
            "start": 20,
            "end": 35
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
                            "start": 37,
                            "end": 38
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
                                        "start": 41,
                                        "end": 42
                                    },
                                    {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 50,
                                            "end": 53
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 45,
                                                "end": 46
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 47,
                                                "end": 49
                                            }
                                        ],
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 53,
                                            "end": 55
                                        },
                                        "flags": 32,
                                        "start": 43,
                                        "end": 55
                                    }
                                ],
                                "flags": 32,
                                "start": 39,
                                "end": 55
                            },
                            "flags": 32,
                            "start": 39,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 35,
                    "end": 56
                },
                "flags": 32,
                "start": 35,
                "end": 57
            },
            "flags": 16,
            "start": 35,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 61,
                    "end": 64
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 67,
                        "end": 70
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 70,
                        "end": 72
                    },
                    "flags": 32,
                    "start": 64,
                    "end": 72
                },
                "flags": 32,
                "start": 58,
                "end": 72
            },
            "flags": 16,
            "start": 58,
            "end": 73
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
                            "flags": 64,
                            "start": 76,
                            "end": 79
                        },
                        "typeParameters": null,
                        "parameters": [],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 79,
                            "end": 81
                        },
                        "flags": 32,
                        "start": 73,
                        "end": 81
                    },
                    {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 82,
                        "end": 84
                    }
                ],
                "flags": 32,
                "start": 73,
                "end": 84
            },
            "flags": 16,
            "start": 73,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 89,
                    "end": 92
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "f10",
                        "rawText": "f10",
                        "flags": 96,
                        "start": 92,
                        "end": 96
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
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
                                                "start": 98,
                                                "end": 99
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 6,
                                                "rawText": "6",
                                                "flags": 96,
                                                "start": 100,
                                                "end": 102
                                            },
                                            "flags": 32,
                                            "start": 98,
                                            "end": 102
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 98,
                                    "end": 102
                                },
                                "flags": 48,
                                "start": 97,
                                "end": 103
                            },
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 104,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 97,
                        "end": 106
                    },
                    "flags": 268435488,
                    "start": 92,
                    "end": 107
                },
                "flags": 32,
                "start": 85,
                "end": 107
            },
            "flags": 16,
            "start": 85,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 113,
                    "end": 116
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 111,
                        "end": 112
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392131,
                    "text": "test",
                    "rawText": "\"test\"",
                    "flags": 96,
                    "start": 116,
                    "end": 123
                },
                "flags": 32,
                "start": 108,
                "end": 123
            },
            "flags": 16,
            "start": 108,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 132,
                    "end": 135
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 127,
                        "end": 128
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 129,
                        "end": 131
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 142,
                        "end": 145
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "u",
                            "rawText": "u",
                            "flags": 96,
                            "start": 137,
                            "end": 138
                        },
                        {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 139,
                            "end": 141
                        }
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
                                "start": 145,
                                "end": 147
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 147,
                                "end": 148
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "start": 148,
                                "end": 149
                            },
                            "flags": 32,
                            "start": 145,
                            "end": 149
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 149,
                            "end": 151
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 151,
                                "end": 153
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 153,
                                "end": 154
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 154,
                                "end": 155
                            },
                            "flags": 32,
                            "start": 153,
                            "end": 155
                        },
                        "flags": 32,
                        "start": 145,
                        "end": 155
                    },
                    "flags": 32,
                    "start": 135,
                    "end": 155
                },
                "flags": 32,
                "start": 124,
                "end": 155
            },
            "flags": 16,
            "start": 124,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "start": 156,
                    "end": 161
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 165,
                            "end": 168
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
                                "start": 170,
                                "end": 170
                            },
                            "flags": 32,
                            "start": 168,
                            "end": 171
                        },
                        "flags": 32,
                        "start": 163,
                        "end": 171
                    },
                    "flags": 32,
                    "start": 161,
                    "end": 172
                },
                "argumentList": null,
                "flags": 32,
                "start": 156,
                "end": 172
            },
            "flags": 16,
            "start": 156,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 180,
                    "end": 183
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 177,
                                    "end": 178
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 177,
                            "end": 178
                        },
                        "flags": 32,
                        "start": 176
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 183,
                    "end": 185
                },
                "flags": 34,
                "start": 173,
                "end": 185
            },
            "flags": 16,
            "start": 173,
            "end": 186
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 191,
                                "end": 194
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "start": 194,
                                "end": 196
                            },
                            "flags": 32,
                            "start": 189,
                            "end": 196
                        },
                        "flags": 32,
                        "start": 186,
                        "end": 197
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 198,
                        "end": 198
                    },
                    "flags": 268435488,
                    "start": 186,
                    "end": 199
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 64,
                    "start": 199,
                    "end": 203
                },
                "right": {
                    "kind": 201392130,
                    "text": 5,
                    "rawText": "5",
                    "flags": 96,
                    "start": 203,
                    "end": 205
                },
                "flags": 32,
                "start": 186,
                "end": 205
            },
            "flags": 16,
            "start": 186,
            "end": 206
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 206,
                    "end": 211
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 219,
                                "end": 222
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 201,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 216,
                                                "end": 217
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 214,
                                                "end": 215
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 214,
                                        "end": 217
                                    },
                                    "flags": 32,
                                    "start": 213
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 222,
                                "end": 225
                            },
                            "flags": 34,
                            "start": 212,
                            "end": 225
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 212,
                    "end": 225
                },
                "flags": 268435488,
                "start": 206,
                "end": 226
            },
            "flags": 16,
            "start": 206,
            "end": 227
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 238,
                    "end": 241
                },
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
                                        "start": 231,
                                        "end": 232
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 234,
                                        "end": 236
                                    },
                                    "flags": 32,
                                    "start": 231,
                                    "end": 236
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 231,
                            "end": 236
                        },
                        "flags": 32,
                        "start": 230
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
                        "start": 243,
                        "end": 243
                    },
                    "flags": 32,
                    "start": 241,
                    "end": 244
                },
                "flags": 34,
                "start": 227,
                "end": 244
            },
            "flags": 16,
            "start": 227,
            "end": 245
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
                            "start": 248,
                            "end": 249
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
                                        "start": 252,
                                        "end": 253
                                    },
                                    {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 261,
                                            "end": 264
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 256,
                                                "end": 257
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 258,
                                                "end": 260
                                            }
                                        ],
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 264,
                                            "end": 266
                                        },
                                        "flags": 32,
                                        "start": 254,
                                        "end": 266
                                    }
                                ],
                                "flags": 32,
                                "start": 250,
                                "end": 266
                            },
                            "flags": 32,
                            "start": 250,
                            "end": 267
                        }
                    ],
                    "flags": 32,
                    "start": 245,
                    "end": 267
                },
                "flags": 32,
                "start": 245,
                "end": 268
            },
            "flags": 16,
            "start": 245,
            "end": 269
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 269,
                    "end": 272
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 272,
                    "end": 274
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 280,
                        "end": 283
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 276,
                            "end": 277
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 278,
                            "end": 279
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
                            "start": 284,
                            "end": 284
                        },
                        "flags": 32,
                        "start": 283,
                        "end": 285
                    },
                    "flags": 32,
                    "start": 274,
                    "end": 285
                },
                "flags": 32,
                "start": 269,
                "end": 285
            },
            "flags": 16,
            "start": 269,
            "end": 286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 294,
                    "end": 297
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 289,
                        "end": 290
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 291,
                        "end": 293
                    }
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
                            "start": 297,
                            "end": 299
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 300,
                            "end": 301
                        },
                        "flags": 536870944,
                        "start": 297,
                        "end": 301
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 301,
                        "end": 303
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 303,
                        "end": 305
                    },
                    "flags": 32,
                    "start": 297,
                    "end": 305
                },
                "flags": 32,
                "start": 286,
                "end": 305
            },
            "flags": 16,
            "start": 286,
            "end": 306
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 322,
                    "end": 325
                },
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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 313,
                                                    "end": 315
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 311,
                                                    "end": 312
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 311,
                                            "end": 315
                                        },
                                        "flags": 32,
                                        "start": 310
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 318,
                                        "end": 320
                                    },
                                    "flags": 32,
                                    "start": 310,
                                    "end": 320
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 310,
                            "end": 320
                        },
                        "flags": 32,
                        "start": 309
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 325,
                    "end": 327
                },
                "flags": 34,
                "start": 306,
                "end": 327
            },
            "flags": 16,
            "start": 306,
            "end": 328
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 344,
                    "end": 347
                },
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
                            "start": 331,
                            "end": 332
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 334,
                            "end": 336
                        },
                        "flags": 32,
                        "start": 328,
                        "end": 336
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 337,
                            "end": 339
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 341,
                            "end": 343
                        },
                        "flags": 32,
                        "start": 328,
                        "end": 343
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 347,
                    "end": 349
                },
                "flags": 34,
                "start": 328,
                "end": 349
            },
            "flags": 16,
            "start": 328,
            "end": 350
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 350,
                    "end": 353
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 367,
                                "end": 370
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 356,
                                                "end": 357
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 356,
                                        "end": 357
                                    },
                                    "flags": 32,
                                    "start": 355,
                                    "end": 358
                                },
                                {
                                    "kind": 201,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 361,
                                                "end": 362
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 361,
                                        "end": 362
                                    },
                                    "flags": 32,
                                    "start": 359
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 364,
                                    "end": 366
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 370,
                                "end": 372
                            },
                            "flags": 34,
                            "start": 354,
                            "end": 372
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 354,
                    "end": 372
                },
                "flags": 268435488,
                "start": 350,
                "end": 373
            },
            "flags": 16,
            "start": 350,
            "end": 374
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 374,
                    "end": 376
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 395,
                                "end": 398
                            },
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
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 379,
                                                    "end": 380
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 30,
                                                    "rawText": "30",
                                                    "flags": 96,
                                                    "start": 382,
                                                    "end": 385
                                                },
                                                "flags": 32,
                                                "start": 379,
                                                "end": 385
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 379,
                                        "end": 385
                                    },
                                    "flags": 32,
                                    "start": 378,
                                    "end": 386
                                },
                                {
                                    "kind": 201,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 389,
                                                "end": 390
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 389,
                                        "end": 390
                                    },
                                    "flags": 32,
                                    "start": 387
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 392,
                                    "end": 394
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 398,
                                "end": 400
                            },
                            "flags": 34,
                            "start": 377,
                            "end": 400
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 377,
                    "end": 400
                },
                "flags": 268435488,
                "start": 374,
                "end": 401
            },
            "flags": 16,
            "start": 374,
            "end": 402
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 402,
                    "end": 404
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 418,
                                "end": 421
                            },
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
                                                    "start": 407,
                                                    "end": 408
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 407,
                                            "end": 408
                                        },
                                        "flags": 32,
                                        "start": 406
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 201392130,
                                        "text": 20,
                                        "rawText": "20",
                                        "flags": 96,
                                        "start": 411,
                                        "end": 414
                                    },
                                    "flags": 32,
                                    "start": 406,
                                    "end": 414
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 415,
                                    "end": 417
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 421,
                                "end": 423
                            },
                            "flags": 34,
                            "start": 405,
                            "end": 423
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 405,
                    "end": 423
                },
                "flags": 268435488,
                "start": 402,
                "end": 424
            },
            "flags": 16,
            "start": 402,
            "end": 425
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 65,
                    "start": 425,
                    "end": 433
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 437,
                            "end": 440
                        },
                        "typeParameters": null,
                        "parameters": [],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 440,
                            "end": 443
                        },
                        "flags": 32,
                        "start": 435,
                        "end": 443
                    },
                    "flags": 32,
                    "start": 433,
                    "end": 444
                },
                "flags": 32,
                "start": 425,
                "end": 444
            },
            "flags": 16,
            "start": 425,
            "end": 445
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 449,
                    "end": 452
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
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 454,
                                    "end": 458
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 458,
                                                "end": 460
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 458,
                                            "end": 460
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 458,
                                    "end": 460
                                },
                                "flags": 33554448,
                                "start": 454,
                                "end": 460
                            }
                        ],
                        "flags": 32,
                        "start": 454,
                        "end": 460
                    },
                    "flags": 32,
                    "start": 452,
                    "end": 462
                },
                "flags": 32,
                "start": 445,
                "end": 462
            },
            "flags": 16,
            "start": 445,
            "end": 463
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 480,
                    "end": 483
                },
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
                            "start": 466,
                            "end": 467
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 469,
                                    "end": 475
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 64,
                                    "start": 475,
                                    "end": 476
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "r",
                                    "rawText": "r",
                                    "flags": 96,
                                    "start": 476,
                                    "end": 477
                                },
                                "flags": 32,
                                "start": 469,
                                "end": 477
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 477,
                                "end": 478
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 478,
                                "end": 479
                            },
                            "flags": 32,
                            "start": 469,
                            "end": 479
                        },
                        "flags": 32,
                        "start": 463,
                        "end": 479
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
                        "start": 485,
                        "end": 485
                    },
                    "flags": 32,
                    "start": 483,
                    "end": 486
                },
                "flags": 34,
                "start": 463,
                "end": 486
            },
            "flags": 16,
            "start": 463,
            "end": 487
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 491,
                    "end": 494
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 494,
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
                    "flags": 536870944,
                    "start": 494,
                    "end": 499
                },
                "flags": 32,
                "start": 487,
                "end": 499
            },
            "flags": 16,
            "start": 487,
            "end": 500
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 509,
                                    "end": 512
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 504,
                                        "end": 505
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 506,
                                        "end": 508
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
                                                    "flags": 80,
                                                    "start": 514,
                                                    "end": 521
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 521,
                                                        "end": 523
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "flags": 64,
                                                        "start": 523,
                                                        "end": 525
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 525,
                                                        "end": 527
                                                    },
                                                    "flags": 32,
                                                    "start": 521,
                                                    "end": 527
                                                },
                                                "flags": 16,
                                                "start": 0,
                                                "end": 514
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 514,
                                        "end": 528
                                    },
                                    "flags": 32,
                                    "start": 512,
                                    "end": 530
                                },
                                "flags": 32,
                                "start": 503,
                                "end": 530
                            },
                            "flags": 32,
                            "start": 500,
                            "end": 531
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 532,
                                    "end": 533
                                },
                                {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "start": 534,
                                    "end": 536
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 532,
                            "end": 536
                        },
                        "flags": 268435488,
                        "start": 500,
                        "end": 537
                    },
                    {
                        "kind": 201392130,
                        "text": 6,
                        "rawText": "6",
                        "flags": 96,
                        "start": 538,
                        "end": 540
                    }
                ],
                "flags": 32,
                "start": 500,
                "end": 540
            },
            "flags": 16,
            "start": 500,
            "end": 541
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 541,
                    "end": 546
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 553,
                                "end": 556
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 548,
                                    "end": 549
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 550,
                                    "end": 552
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
                                    "start": 558,
                                    "end": 558
                                },
                                "flags": 32,
                                "start": 556,
                                "end": 559
                            },
                            "flags": 32,
                            "start": 547,
                            "end": 559
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 547,
                    "end": 559
                },
                "flags": 268435488,
                "start": 541,
                "end": 560
            },
            "flags": 16,
            "start": 541,
            "end": 561
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 567,
                    "end": 570
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 564,
                        "end": 565
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
                        "start": 572,
                        "end": 572
                    },
                    "flags": 32,
                    "start": 570,
                    "end": 573
                },
                "flags": 32,
                "start": 561,
                "end": 573
            },
            "flags": 16,
            "start": 561,
            "end": 574
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 584,
                    "end": 587
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 577,
                        "end": 578
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 579,
                        "end": 580
                    },
                    {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 581,
                        "end": 582
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
                        "start": 589,
                        "end": 589
                    },
                    "flags": 32,
                    "start": 587,
                    "end": 590
                },
                "flags": 32,
                "start": 574,
                "end": 590
            },
            "flags": 16,
            "start": 574,
            "end": 591
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 604,
                    "end": 607
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
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
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 596,
                                                    "end": 597
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 599,
                                                    "end": 601
                                                },
                                                "flags": 32,
                                                "start": 596,
                                                "end": 601
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 596,
                                        "end": 601
                                    },
                                    "flags": 32,
                                    "start": 595,
                                    "end": 602
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 595,
                            "end": 602
                        },
                        "flags": 32,
                        "start": 594
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 607,
                    "end": 609
                },
                "flags": 34,
                "start": 591,
                "end": 609
            },
            "flags": 16,
            "start": 591,
            "end": 610
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 633,
                    "end": 635
                },
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
                                    "start": 614,
                                    "end": 615
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 616,
                                        "end": 617
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 618,
                                        "end": 619
                                    },
                                    "flags": 32,
                                    "start": 616,
                                    "end": 619
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 620,
                                        "end": 621
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 622,
                                        "end": 623
                                    },
                                    "flags": 32,
                                    "start": 620,
                                    "end": 623
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 625,
                                            "end": 626
                                        },
                                        "flags": 32,
                                        "start": 624,
                                        "end": 627
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 629,
                                                    "end": 630
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 629,
                                            "end": 630
                                        },
                                        "flags": 32,
                                        "start": 628,
                                        "end": 631
                                    },
                                    "flags": 32,
                                    "start": 624,
                                    "end": 631
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 614,
                            "end": 631
                        },
                        "flags": 32,
                        "start": 613,
                        "end": 632
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 635,
                    "end": 636
                },
                "flags": 34,
                "start": 610,
                "end": 636
            },
            "flags": 16,
            "start": 610,
            "end": 637
        }
    ],
    "isModule": false,
    "source": "(z = [...x.y]) => z;\n(...{x}) => x;\n(a, (a, (b, c) => 0));\n() => () => 0;\n() => 0, 1;\n\n() => f10({x: 6}, 2);\n\n(e) => \"test\";\n\n(x, y) => (u, v) => x*u + y*v;\n\nnew (() => {});\n\n([y]) => x;\n\n(() => 5)() === 5;\n\nfoo(([a,b]) => 42);\n\n([x = 0]) => {};\n\n(a, (a, (b, c) => 0));\n\nx = (a,b) =>{};\n\n(x, y) => x.a = y;\n\n([[x, y] = z]) => x;\n\n(a = 1, b = 2) => x;\n\nx(({x}, [y], z) => x);\nx(({x = 30}, [y], z) => x);\nx(([x] = 20, y) => x);\n\ndelete (() => ok);\n\n() => { let x };\n\n(a = await/r/g) => {};\n\n() => ok.x;\n\n((a, b) => { return a + b; })(1, 5), 6;\n\nfoo((x, y) => {});\n\n(b,) => {};\n\n(b,c,d,) => {};\n\n([{x = y}]) => z;\n\n({a,b=b,a:c,[a]:[d]})=>0;\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 639
}
```

### Printed

```javascript

(z = [...x.y]) =>  z;
(...{
  x
}) =>  x;
(a, (a, (b, c) =>  0));
() =>  () =>  0;
() =>  0, 1;
() =>  f10({ x: 6 }, 2);
(e) =>  "\"test\"";
(x, y) =>  (u, v) =>  x * u + y * v;
new  (() =>  {})();
([y]) =>  x;
(() =>  5)() === 5;
foo(([b, a]) =>  42);
([]) =>  {};
(a, (a, (b, c) =>  0));
x = (a, b) =>  {};
(x, y) =>  x.a = y;
([]) =>  x;
(a = 1, b = 2) =>  x;
x(({
  x
}, [y], z) =>  x);
x(({
  x = 30
}, [y], z) =>  x);
x(([x] = 20, y) =>  x);
delete (() =>  ok);
() =>  {
  let x;
};
(a = await / r / g) =>  {};
() =>  ok.x;
((a, b) =>  {
    return  a + b;
  })(1, 5), 6;
foo((x, y) =>  {});
(b) =>  {};
(b, c, d) =>  {};
([]) =>  z;
({
  a,
  b = b,
  a: c,
  [a]: [d]
}) =>  0;
```

### Diagnostics

```javascript
✔ No errors
```

