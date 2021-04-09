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

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 336003091,
                            "autofix": 0,
                            "flags": 0,
                            "start": 0,
                            "end": 4
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "argument": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 12
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 4,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 13
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "autofix": 0,
                            "flags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 26,
                                        "end": 27
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 25,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 28
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 32,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 20,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
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
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 37,
                            "end": 38
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 41,
                                        "end": 42
                                    },
                                    {
                                        "kind": 271,
                                        "typeParameters": null,
                                        "parameters": [
                                            [
                                                {
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "c",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 47,
                                                    "end": 49
                                                }
                                            ]
                                        ],
                                        "asyncToken": false,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 53,
                                            "end": 55
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 55
                                    }
                                ],
                                "autofix": 0,
                                "flags": 256,
                                "start": 39,
                                "end": 55
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 39,
                            "end": 56
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 35,
                    "end": 56
                },
                "autofix": 0,
                "flags": 256,
                "start": 35,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 81921,
                        "value": 0,
                        "autofix": 0,
                        "flags": 768,
                        "start": 70,
                        "end": 72
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 64,
                    "end": 72
                },
                "autofix": 0,
                "flags": 256,
                "start": 58,
                "end": 72
            },
            "autofix": 0,
            "flags": 128,
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
                        "typeParameters": null,
                        "parameters": [],
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "value": 0,
                            "autofix": 0,
                            "flags": 768,
                            "start": 79,
                            "end": 81
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 73,
                        "end": 81
                    },
                    {
                        "kind": 81921,
                        "value": 1,
                        "autofix": 0,
                        "flags": 768,
                        "start": 82,
                        "end": 84
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 73,
                "end": 84
            },
            "autofix": 0,
            "flags": 128,
            "start": 73,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "value": "f10",
                        "autofix": 0,
                        "flags": 768,
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
                                            "left": {
                                                "kind": 81921,
                                                "value": 6,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 100,
                                                "end": 102
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 98,
                                                "end": 99
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 98,
                                            "end": 102
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 98,
                                    "end": 102
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 97,
                                "end": 103
                            },
                            {
                                "kind": 81921,
                                "value": 2,
                                "autofix": 0,
                                "flags": 768,
                                "start": 104,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 97,
                        "end": 106
                    },
                    "flags": 256,
                    "start": 92,
                    "end": 107
                },
                "autofix": 0,
                "flags": 256,
                "start": 85,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 85,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 81921,
                        "value": "e",
                        "autofix": 0,
                        "flags": 768,
                        "start": 111,
                        "end": 112
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 67174403,
                    "value": "test",
                    "autofix": 0,
                    "flags": 768,
                    "start": 116,
                    "end": 123
                },
                "autofix": 0,
                "flags": 256,
                "start": 108,
                "end": 123
            },
            "autofix": 0,
            "flags": 128,
            "start": 108,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 127,
                            "end": 128
                        },
                        {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 129,
                            "end": 131
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 81921,
                                "value": "u",
                                "autofix": 0,
                                "flags": 768,
                                "start": 137,
                                "end": 138
                            },
                            {
                                "kind": 81921,
                                "value": "v",
                                "autofix": 0,
                                "flags": 768,
                                "start": 139,
                                "end": 141
                            }
                        ]
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 145,
                                "end": 147
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 147,
                                "end": 148
                            },
                            "right": {
                                "kind": 81921,
                                "value": "u",
                                "autofix": 0,
                                "flags": 768,
                                "start": 148,
                                "end": 149
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 145,
                            "end": 149
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "autofix": 0,
                            "flags": 0,
                            "start": 149,
                            "end": 151
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 151,
                                "end": 153
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 153,
                                "end": 154
                            },
                            "right": {
                                "kind": 81921,
                                "value": "v",
                                "autofix": 0,
                                "flags": 768,
                                "start": 154,
                                "end": 155
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 153,
                            "end": 155
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 145,
                        "end": 155
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 135,
                    "end": 155
                },
                "autofix": 0,
                "flags": 256,
                "start": 124,
                "end": 155
            },
            "autofix": 0,
            "flags": 128,
            "start": 124,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [],
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 170,
                                "end": 170
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 168,
                            "end": 171
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 163,
                        "end": 171
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 161,
                    "end": 172
                },
                "argumentList": null,
                "autofix": 0,
                "flags": 256,
                "start": 156,
                "end": 172
            },
            "autofix": 0,
            "flags": 128,
            "start": 156,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 177,
                                    "end": 178
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 177,
                            "end": 178
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 176,
                        "end": 179
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 183,
                    "end": 185
                },
                "autofix": 0,
                "flags": 256,
                "start": 173,
                "end": 185
            },
            "autofix": 0,
            "flags": 128,
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
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": 5,
                                "autofix": 0,
                                "flags": 768,
                                "start": 194,
                                "end": 196
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 189,
                            "end": 196
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 186,
                        "end": 197
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 198,
                        "end": 198
                    },
                    "flags": 256,
                    "start": 186,
                    "end": 199
                },
                "operatorToken": {
                    "kind": 34620,
                    "autofix": 0,
                    "flags": 0,
                    "start": 199,
                    "end": 203
                },
                "right": {
                    "kind": 81921,
                    "value": 5,
                    "autofix": 0,
                    "flags": 768,
                    "start": 203,
                    "end": 205
                },
                "autofix": 0,
                "flags": 256,
                "start": 186,
                "end": 205
            },
            "autofix": 0,
            "flags": 128,
            "start": 186,
            "end": 206
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 206,
                    "end": 211
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 214,
                                                "end": 215
                                            },
                                            {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 216,
                                                "end": 217
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 214,
                                        "end": 217
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 213,
                                    "end": 218
                                }
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": 42,
                                "autofix": 0,
                                "flags": 768,
                                "start": 222,
                                "end": 225
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 212,
                            "end": 225
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 212,
                    "end": 225
                },
                "flags": 256,
                "start": 206,
                "end": 226
            },
            "autofix": 0,
            "flags": 128,
            "start": 206,
            "end": 227
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
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
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 231,
                                        "end": 232
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 231,
                                        "end": 234
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 234,
                                        "end": 236
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 231,
                                    "end": 236
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 231,
                            "end": 236
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 230,
                        "end": 237
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 243,
                        "end": 243
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 241,
                    "end": 244
                },
                "autofix": 0,
                "flags": 256,
                "start": 227,
                "end": 244
            },
            "autofix": 0,
            "flags": 128,
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
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 248,
                            "end": 249
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 252,
                                        "end": 253
                                    },
                                    {
                                        "kind": 271,
                                        "typeParameters": null,
                                        "parameters": [
                                            [
                                                {
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 256,
                                                    "end": 257
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "c",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 258,
                                                    "end": 260
                                                }
                                            ]
                                        ],
                                        "asyncToken": false,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 264,
                                            "end": 266
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 254,
                                        "end": 266
                                    }
                                ],
                                "autofix": 0,
                                "flags": 256,
                                "start": 250,
                                "end": 266
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 250,
                            "end": 267
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 245,
                    "end": 267
                },
                "autofix": 0,
                "flags": 256,
                "start": 245,
                "end": 268
            },
            "autofix": 0,
            "flags": 128,
            "start": 245,
            "end": 269
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 269,
                    "end": 272
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 269,
                    "end": 274
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 276,
                                "end": 277
                            },
                            {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 278,
                                "end": 279
                            }
                        ]
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 284,
                            "end": 284
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 283,
                        "end": 285
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 274,
                    "end": 285
                },
                "autofix": 0,
                "flags": 256,
                "start": 269,
                "end": 285
            },
            "autofix": 0,
            "flags": 128,
            "start": 269,
            "end": 286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 289,
                            "end": 290
                        },
                        {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 291,
                            "end": 293
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 297,
                            "end": 299
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 300,
                            "end": 301
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 297,
                        "end": 301
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 297,
                        "end": 303
                    },
                    "right": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 303,
                        "end": 305
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 297,
                    "end": 305
                },
                "autofix": 0,
                "flags": 256,
                "start": 286,
                "end": 305
            },
            "autofix": 0,
            "flags": 128,
            "start": 286,
            "end": 306
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
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
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 311,
                                                    "end": 312
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 313,
                                                    "end": 315
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 311,
                                            "end": 315
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 310,
                                        "end": 316
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 316,
                                        "end": 318
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 318,
                                        "end": 320
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 310,
                                    "end": 320
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 310,
                            "end": 320
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 309,
                        "end": 321
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 325,
                    "end": 327
                },
                "autofix": 0,
                "flags": 256,
                "start": 306,
                "end": 327
            },
            "autofix": 0,
            "flags": 128,
            "start": 306,
            "end": 328
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 331,
                                "end": 332
                            },
                            "operatorToken": {
                                "kind": 67174402,
                                "autofix": 0,
                                "flags": 0,
                                "start": 328,
                                "end": 334
                            },
                            "right": {
                                "kind": 81921,
                                "value": 1,
                                "autofix": 0,
                                "flags": 768,
                                "start": 334,
                                "end": 336
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 328,
                            "end": 336
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 337,
                                "end": 339
                            },
                            "operatorToken": {
                                "kind": 67174402,
                                "autofix": 0,
                                "flags": 0,
                                "start": 328,
                                "end": 341
                            },
                            "right": {
                                "kind": 81921,
                                "value": 2,
                                "autofix": 0,
                                "flags": 768,
                                "start": 341,
                                "end": 343
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 328,
                            "end": 343
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 347,
                    "end": 349
                },
                "autofix": 0,
                "flags": 256,
                "start": 328,
                "end": 349
            },
            "autofix": 0,
            "flags": 128,
            "start": 328,
            "end": 350
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 350,
                    "end": 353
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 356,
                                                    "end": 357
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 356,
                                            "end": 357
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 355,
                                        "end": 358
                                    },
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 361,
                                                    "end": 362
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 361,
                                            "end": 362
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 359,
                                        "end": 363
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 364,
                                        "end": 366
                                    }
                                ]
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 370,
                                "end": 372
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 354,
                            "end": 372
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 354,
                    "end": 372
                },
                "flags": 256,
                "start": 350,
                "end": 373
            },
            "autofix": 0,
            "flags": 128,
            "start": 350,
            "end": 374
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 374,
                    "end": 376
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 205,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 379,
                                                        "end": 380
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": 30,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 382,
                                                        "end": 385
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 379,
                                                    "end": 385
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 379,
                                            "end": 385
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 378,
                                        "end": 386
                                    },
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 389,
                                                    "end": 390
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 389,
                                            "end": 390
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 387,
                                        "end": 391
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 392,
                                        "end": 394
                                    }
                                ]
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 398,
                                "end": 400
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 377,
                            "end": 400
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 377,
                    "end": 400
                },
                "flags": 256,
                "start": 374,
                "end": 401
            },
            "autofix": 0,
            "flags": 128,
            "start": 374,
            "end": 402
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 402,
                    "end": 404
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 407,
                                                        "end": 408
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 407,
                                                "end": 408
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 406,
                                            "end": 409
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 409,
                                            "end": 411
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 20,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 411,
                                            "end": 414
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 406,
                                        "end": 414
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 415,
                                        "end": 417
                                    }
                                ]
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 421,
                                "end": 423
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 405,
                            "end": 423
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 405,
                    "end": 423
                },
                "flags": 256,
                "start": 402,
                "end": 424
            },
            "autofix": 0,
            "flags": 128,
            "start": 402,
            "end": 425
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "autofix": 0,
                    "flags": 0,
                    "start": 425,
                    "end": 433
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [],
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "value": "ok",
                            "autofix": 0,
                            "flags": 768,
                            "start": 440,
                            "end": 443
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 435,
                        "end": 443
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 433,
                    "end": 444
                },
                "autofix": 0,
                "flags": 256,
                "start": 425,
                "end": 444
            },
            "autofix": 0,
            "flags": 128,
            "start": 425,
            "end": 445
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 162,
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 458,
                                                "end": 460
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 458,
                                            "end": 460
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 458,
                                    "end": 460
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 454,
                                "end": 460
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 454,
                        "end": 460
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 452,
                    "end": 462
                },
                "autofix": 0,
                "flags": 256,
                "start": 445,
                "end": 462
            },
            "autofix": 0,
            "flags": 128,
            "start": 445,
            "end": 463
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 466,
                            "end": 467
                        },
                        "operatorToken": {
                            "kind": 82032,
                            "autofix": 0,
                            "flags": 0,
                            "start": 463,
                            "end": 469
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "await",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 469,
                                    "end": 475
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 475,
                                    "end": 476
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "r",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 476,
                                    "end": 477
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 469,
                                "end": 477
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "autofix": 0,
                                "flags": 0,
                                "start": 477,
                                "end": 478
                            },
                            "right": {
                                "kind": 81921,
                                "value": "g",
                                "autofix": 0,
                                "flags": 768,
                                "start": 478,
                                "end": 479
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 469,
                            "end": 479
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 463,
                        "end": 479
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 485,
                        "end": 485
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 483,
                    "end": 486
                },
                "autofix": 0,
                "flags": 256,
                "start": 463,
                "end": 486
            },
            "autofix": 0,
            "flags": 128,
            "start": 463,
            "end": 487
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "ok",
                        "autofix": 0,
                        "flags": 768,
                        "start": 494,
                        "end": 497
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 498,
                        "end": 499
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 494,
                    "end": 499
                },
                "autofix": 0,
                "flags": 256,
                "start": 487,
                "end": 499
            },
            "autofix": 0,
            "flags": 128,
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
                                "typeParameters": null,
                                "parameters": [
                                    [
                                        {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 504,
                                            "end": 505
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 506,
                                            "end": 508
                                        }
                                    ]
                                ],
                                "asyncToken": false,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 521,
                                                        "end": 523
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 523,
                                                        "end": 525
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "b",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 525,
                                                        "end": 527
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 521,
                                                    "end": 527
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 0,
                                                "end": 514
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 514,
                                        "end": 528
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 512,
                                    "end": 530
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 503,
                                "end": 530
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 500,
                            "end": 531
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 532,
                                    "end": 533
                                },
                                {
                                    "kind": 81921,
                                    "value": 5,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 534,
                                    "end": 536
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 532,
                            "end": 536
                        },
                        "flags": 256,
                        "start": 500,
                        "end": 537
                    },
                    {
                        "kind": 81921,
                        "value": 6,
                        "autofix": 0,
                        "flags": 768,
                        "start": 538,
                        "end": 540
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 500,
                "end": 540
            },
            "autofix": 0,
            "flags": 128,
            "start": 500,
            "end": 541
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 541,
                    "end": 546
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 548,
                                        "end": 549
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 550,
                                        "end": 552
                                    }
                                ]
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 558,
                                    "end": 558
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 556,
                                "end": 559
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 547,
                            "end": 559
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 547,
                    "end": 559
                },
                "flags": 256,
                "start": 541,
                "end": 560
            },
            "autofix": 0,
            "flags": 128,
            "start": 541,
            "end": 561
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 564,
                            "end": 565
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 572,
                        "end": 572
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 570,
                    "end": 573
                },
                "autofix": 0,
                "flags": 256,
                "start": 561,
                "end": 573
            },
            "autofix": 0,
            "flags": 128,
            "start": 561,
            "end": 574
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 577,
                            "end": 578
                        },
                        {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 579,
                            "end": 580
                        },
                        {
                            "kind": 81921,
                            "value": "d",
                            "autofix": 0,
                            "flags": 768,
                            "start": 581,
                            "end": 582
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 589,
                        "end": 589
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 587,
                    "end": 590
                },
                "autofix": 0,
                "flags": 256,
                "start": 574,
                "end": 590
            },
            "autofix": 0,
            "flags": 128,
            "start": 574,
            "end": 591
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 596,
                                                    "end": 597
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 599,
                                                    "end": 601
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 596,
                                                "end": 601
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 596,
                                        "end": 601
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 595,
                                    "end": 602
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 595,
                            "end": 602
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 594,
                        "end": 603
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 607,
                    "end": 609
                },
                "autofix": 0,
                "flags": 256,
                "start": 591,
                "end": 609
            },
            "autofix": 0,
            "flags": 128,
            "start": 591,
            "end": 610
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 614,
                                    "end": 615
                                },
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 616,
                                        "end": 617
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 618,
                                        "end": 619
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 616,
                                    "end": 619
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 622,
                                        "end": 623
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 620,
                                        "end": 621
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 620,
                                    "end": 623
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "d",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 629,
                                                    "end": 630
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 629,
                                            "end": 630
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 628,
                                        "end": 631
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 625,
                                            "end": 626
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 624,
                                        "end": 627
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 624,
                                    "end": 631
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 614,
                            "end": 631
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 613,
                        "end": 632
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 635,
                    "end": 636
                },
                "autofix": 0,
                "flags": 256,
                "start": 610,
                "end": 636
            },
            "autofix": 0,
            "flags": 128,
            "start": 610,
            "end": 637
        }
    ],
    "isModule": false,
    "text": "(z = [...x.y]) => z;\n(...{x}) => x;\n(a, (a, (b, c) => 0));\n() => () => 0;\n() => 0, 1;\n\n() => f10({x: 6}, 2);\n\n(e) => \"test\";\n\n(x, y) => (u, v) => x*u + y*v;\n\nnew (() => {});\n\n([y]) => x;\n\n(() => 5)() === 5;\n\nfoo(([a,b]) => 42);\n\n([x = 0]) => {};\n\n(a, (a, (b, c) => 0));\n\nx = (a,b) =>{};\n\n(x, y) => x.a = y;\n\n([[x, y] = z]) => x;\n\n(a = 1, b = 2) => x;\n\nx(({x}, [y], z) => x);\nx(({x = 30}, [y], z) => x);\nx(([x] = 20, y) => x);\n\ndelete (() => ok);\n\n() => { let x };\n\n(a = await/r/g) => {};\n\n() => ok.x;\n\n((a, b) => { return a + b; })(1, 5), 6;\n\nfoo((x, y) => {});\n\n(b,) => {};\n\n(b,c,d,) => {};\n\n([{x = y}]) => z;\n\n({a,b=b,a:c,[a]:[d]})=>0;\n\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 639
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

