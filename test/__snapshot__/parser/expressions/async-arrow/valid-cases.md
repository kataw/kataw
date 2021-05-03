# Kataw parser test case

## Input

`````js
    async(async(async(async(async(async())))));
    async()(async() => {});
    async(a)(s)(y)(n)(c);
    x[async () => x];
    ({async foo() { }});
    ({async() { }});
    async () => {};
    async () => { return 42 };
    (async x => y);
    (async (x, z) => y);
    ({x: async (y,w) => z});
    async({x = yield}) => 1; ;
    async (icefapper = bad) => {  };
    async ({a: b = c});
    async ({a = b}) => a;
    async (a, b) => a;
    async () => a;
    asyncFn = async({ foo = 1 }) => foo;;
    asyncFn = async({ foo = 1 } = {}) => foo;;
    foo = ({ async = true }) => {};;
    foo = async ({ async: bar }) => { await baz; };;
    async ({}) => 0;
    async(a,);
     var x = async(x);
     var x = async (a, b) => await a + b;
     var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;
     async (a,) => b;
     [async(x,y) => z];
     [async x => z];
     id = async x => x, square = async (y) => { y * y };
     f(a, async b => await b);
     async (x, y) => { x * y };
     async (x, y) => y;
     async a => { await a };
     async (y) => y;
     async (x, ...y) => x;
     async (x,y,) => x;
     async ({a = b}) => a;
     (async (x) => {}) + 1;
     (async (x) => {}) / 1;
     async a => a;
     async function foo(a = async () => await b) {};
     ({async: 1});
    async yield => 1;
    () => ({ async f() { return "test4"; } }).f();

    async({x = yield}) => 1;

    async (async) => 1;
    async ([a]) => 1;
    async ([a, b]) => 1;
    async ({a}) => 1;
    async ({a, b}) => 1;
    async a => async b => c;
    async a => async function() {};
    async a => async function b() {};
    async a => await 1;

    async x => x => x;

    async x => { return () => x; }

    var f = cond ? x=>{x.foo } : x=>x + x + x + x + x + x + (x =>x)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 9
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 10,
                            "end": 15
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "async",
                                                    "rawText": "async",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 27
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "async",
                                                                "rawText": "async",
                                                                "flags": 96,
                                                                "start": 28,
                                                                "end": 33
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "async",
                                                                            "rawText": "async",
                                                                            "flags": 96,
                                                                            "start": 34,
                                                                            "end": 39
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 34,
                                                                            "end": 34
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 34,
                                                                        "end": 41
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 28,
                                                                "end": 28
                                                            },
                                                            "flags": 32,
                                                            "start": 28,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 22
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 43
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 44
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 45
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 32,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 46,
            "end": 47
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 47,
                "end": 57
            },
            "argumentList": {
                "kind": 256,
                "elements": [],
                "trailingComma": false,
                "flags": 32,
                "start": 47,
                "end": 47
            },
            "flags": 32,
            "start": 47,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 67,
                        "end": 70
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 60,
                        "end": 65
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 72,
                            "end": 72
                        },
                        "flags": 32,
                        "start": 70,
                        "end": 73
                    },
                    "flags": 288,
                    "start": 60,
                    "end": 73
                },
                "flags": 32,
                "start": 59,
                "end": 74
            },
            "flags": 16,
            "start": 59,
            "end": 75
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 75,
                "end": 85
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 86,
                        "end": 87
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 75,
                "end": 75
            },
            "flags": 32,
            "start": 75,
            "end": 88
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
                                "kind": 134299649,
                                "text": "s",
                                "rawText": "s",
                                "flags": 96,
                                "start": 89,
                                "end": 90
                            },
                            "flags": 32,
                            "start": 88,
                            "end": 91
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 92,
                                    "end": 93
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 92,
                            "end": 93
                        },
                        "flags": 32,
                        "start": 88,
                        "end": 94
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "n",
                                "rawText": "n",
                                "flags": 96,
                                "start": 95,
                                "end": 96
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 95,
                        "end": 96
                    },
                    "flags": 32,
                    "start": 88,
                    "end": 97
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 98,
                            "end": 99
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 98,
                    "end": 99
                },
                "flags": 32,
                "start": 88,
                "end": 100
            },
            "flags": 16,
            "start": 88,
            "end": 101
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 101,
                    "end": 107
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 116,
                        "end": 119
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 108,
                        "end": 113
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 119,
                        "end": 121
                    },
                    "flags": 288,
                    "start": 108,
                    "end": 121
                },
                "flags": 32,
                "start": 101,
                "end": 122
            },
            "flags": 16,
            "start": 101,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 130,
                                    "end": 135
                                },
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 135,
                                        "end": 139
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 140,
                                        "end": 141
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 143,
                                            "end": 143
                                        },
                                        "flags": 32,
                                        "start": 141,
                                        "end": 145
                                    },
                                    "flags": 288,
                                    "start": 139,
                                    "end": 145
                                },
                                "flags": 32,
                                "start": 130,
                                "end": 145
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 130,
                        "end": 145
                    },
                    "flags": 32,
                    "start": 129,
                    "end": 146
                },
                "flags": 32,
                "start": 123,
                "end": 147
            },
            "flags": 16,
            "start": 123,
            "end": 148
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 155,
                                        "end": 160
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 161,
                                        "end": 162
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 164,
                                            "end": 164
                                        },
                                        "flags": 32,
                                        "start": 162,
                                        "end": 166
                                    },
                                    "flags": 32,
                                    "start": 160,
                                    "end": 166
                                },
                                "flags": 32,
                                "start": 155,
                                "end": 166
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 155,
                        "end": 166
                    },
                    "flags": 32,
                    "start": 154,
                    "end": 167
                },
                "flags": 32,
                "start": 148,
                "end": 168
            },
            "flags": 16,
            "start": 148,
            "end": 169
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 182,
                "end": 185
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 169,
                "end": 179
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 187,
                    "end": 187
                },
                "flags": 32,
                "start": 185,
                "end": 188
            },
            "flags": 288,
            "start": 169,
            "end": 188
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 188,
            "end": 189
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 202,
                "end": 205
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 189,
                "end": 199
            },
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
                                "start": 207,
                                "end": 214
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 214,
                                "end": 217
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 207
                        }
                    ],
                    "flags": 32,
                    "start": 207,
                    "end": 217
                },
                "flags": 32,
                "start": 205,
                "end": 219
            },
            "flags": 288,
            "start": 189,
            "end": 219
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 219,
            "end": 220
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 233,
                        "end": 236
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 231,
                        "end": 233
                    },
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 226,
                        "end": 231
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 236,
                        "end": 238
                    },
                    "flags": 288,
                    "start": 226,
                    "end": 238
                },
                "flags": 32,
                "start": 220,
                "end": 239
            },
            "flags": 16,
            "start": 220,
            "end": 240
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 258,
                        "end": 261
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 253,
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
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 246,
                        "end": 251
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 261,
                        "end": 263
                    },
                    "flags": 288,
                    "start": 246,
                    "end": 263
                },
                "flags": 32,
                "start": 240,
                "end": 264
            },
            "flags": 16,
            "start": 240,
            "end": 265
        },
        {
            "kind": 120,
            "expression": {
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
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 0,
                                        "start": 286,
                                        "end": 289
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 282,
                                            "end": 283
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "w",
                                            "rawText": "w",
                                            "flags": 96,
                                            "start": 284,
                                            "end": 285
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 274,
                                        "end": 280
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 289,
                                        "end": 291
                                    },
                                    "flags": 288,
                                    "start": 274,
                                    "end": 291
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 272,
                                    "end": 273
                                },
                                "flags": 32,
                                "start": 272,
                                "end": 291
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 272,
                        "end": 291
                    },
                    "flags": 32,
                    "start": 271,
                    "end": 292
                },
                "flags": 32,
                "start": 265,
                "end": 293
            },
            "flags": 16,
            "start": 265,
            "end": 294
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 317,
                "end": 320
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 306,
                                    "end": 307
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 309,
                                    "end": 315
                                },
                                "flags": 32,
                                "start": 306,
                                "end": 315
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 306,
                        "end": 315
                    },
                    "flags": 32,
                    "start": 305,
                    "end": 316
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 294,
                "end": 304
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 320,
                "end": 322
            },
            "flags": 290,
            "start": 294,
            "end": 322
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 322,
            "end": 323
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 323,
            "end": 325
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 353,
                "end": 356
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "icefapper",
                        "rawText": "icefapper",
                        "flags": 96,
                        "start": 337,
                        "end": 346
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 346,
                        "end": 348
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "bad",
                        "rawText": "bad",
                        "flags": 96,
                        "start": 348,
                        "end": 352
                    },
                    "flags": 32,
                    "start": 337,
                    "end": 352
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 325,
                "end": 335
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 358,
                    "end": 358
                },
                "flags": 32,
                "start": 356,
                "end": 361
            },
            "flags": 290,
            "start": 325,
            "end": 361
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 361,
            "end": 362
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 362,
                "end": 372
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 377,
                                            "end": 379
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 379,
                                            "end": 381
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 381,
                                            "end": 383
                                        },
                                        "flags": 32,
                                        "start": 375,
                                        "end": 383
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 375,
                                        "end": 376
                                    },
                                    "flags": 32,
                                    "start": 375,
                                    "end": 383
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 375,
                            "end": 383
                        },
                        "flags": 32,
                        "start": 374,
                        "end": 384
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 362,
                "end": 362
            },
            "flags": 32,
            "start": 362,
            "end": 385
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 385,
            "end": 386
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 406,
                "end": 409
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
                                    "start": 399,
                                    "end": 400
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 402,
                                    "end": 404
                                },
                                "flags": 32,
                                "start": 399,
                                "end": 404
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 399,
                        "end": 404
                    },
                    "flags": 32,
                    "start": 398,
                    "end": 405
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 386,
                "end": 396
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 409,
                "end": 411
            },
            "flags": 290,
            "start": 386,
            "end": 411
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 411,
            "end": 412
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 429,
                "end": 432
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 424,
                    "end": 425
                },
                {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 426,
                    "end": 428
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 412,
                "end": 422
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 432,
                "end": 434
            },
            "flags": 288,
            "start": 412,
            "end": 434
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 434,
            "end": 435
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 448,
                "end": 451
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 435,
                "end": 445
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 451,
                "end": 453
            },
            "flags": 288,
            "start": 435,
            "end": 453
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 453,
            "end": 454
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "asyncFn",
                    "rawText": "asyncFn",
                    "flags": 96,
                    "start": 454,
                    "end": 466
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 466,
                    "end": 468
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 487,
                        "end": 490
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
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 476,
                                            "end": 480
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 482,
                                            "end": 484
                                        },
                                        "flags": 32,
                                        "start": 476,
                                        "end": 484
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 476,
                                "end": 484
                            },
                            "flags": 32,
                            "start": 475,
                            "end": 486
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 468,
                        "end": 474
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 490,
                        "end": 494
                    },
                    "flags": 290,
                    "start": 468,
                    "end": 494
                },
                "flags": 32,
                "start": 454,
                "end": 494
            },
            "flags": 16,
            "start": 454,
            "end": 495
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 495,
            "end": 496
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "asyncFn",
                    "rawText": "asyncFn",
                    "flags": 96,
                    "start": 496,
                    "end": 508
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 508,
                    "end": 510
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 534,
                        "end": 537
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
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 518,
                                                "end": 522
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 524,
                                                "end": 526
                                            },
                                            "flags": 32,
                                            "start": 518,
                                            "end": 526
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 518,
                                    "end": 526
                                },
                                "flags": 32,
                                "start": 517,
                                "end": 528
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 528,
                                "end": 530
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 532,
                                    "end": 532
                                },
                                "flags": 32,
                                "start": 530,
                                "end": 533
                            },
                            "flags": 32,
                            "start": 517,
                            "end": 533
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 510,
                        "end": 516
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 537,
                        "end": 541
                    },
                    "flags": 290,
                    "start": 510,
                    "end": 541
                },
                "flags": 32,
                "start": 496,
                "end": 541
            },
            "flags": 16,
            "start": 496,
            "end": 542
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 542,
            "end": 543
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 543,
                    "end": 551
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 551,
                    "end": 553
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 572,
                        "end": 575
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
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 556,
                                            "end": 562
                                        },
                                        "right": {
                                            "kind": 134,
                                            "text": true,
                                            "flags": 96,
                                            "start": 564,
                                            "end": 569
                                        },
                                        "flags": 32,
                                        "start": 556,
                                        "end": 569
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 556,
                                "end": 569
                            },
                            "flags": 32,
                            "start": 555,
                            "end": 571
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
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
                    "flags": 34,
                    "start": 553,
                    "end": 578
                },
                "flags": 32,
                "start": 543,
                "end": 578
            },
            "flags": 16,
            "start": 543,
            "end": 579
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 579,
            "end": 580
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 580,
                    "end": 588
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 588,
                    "end": 590
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 613,
                        "end": 616
                    },
                    "typeParameters": null,
                    "parameters": [
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
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 606,
                                            "end": 610
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 599,
                                            "end": 605
                                        },
                                        "flags": 32,
                                        "start": 599,
                                        "end": 610
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 599,
                                "end": 610
                            },
                            "flags": 32,
                            "start": 598,
                            "end": 612
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 590,
                        "end": 596
                    },
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
                                        "kind": 208,
                                        "awaitToken": {
                                            "kind": 82032,
                                            "flags": 0,
                                            "start": 618,
                                            "end": 624
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "start": 624,
                                            "end": 628
                                        },
                                        "flags": 32,
                                        "start": 618,
                                        "end": 628
                                    },
                                    "flags": 16,
                                    "start": 618,
                                    "end": 629
                                }
                            ],
                            "flags": 32,
                            "start": 618,
                            "end": 629
                        },
                        "flags": 32,
                        "start": 616,
                        "end": 631
                    },
                    "flags": 290,
                    "start": 590,
                    "end": 631
                },
                "flags": 32,
                "start": 580,
                "end": 631
            },
            "flags": 16,
            "start": 580,
            "end": 632
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 632,
            "end": 633
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 648,
                "end": 651
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
                        "start": 646,
                        "end": 646
                    },
                    "flags": 32,
                    "start": 645,
                    "end": 647
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 633,
                "end": 643
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 651,
                "end": 653
            },
            "flags": 290,
            "start": 633,
            "end": 653
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 653,
            "end": 654
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 654,
                "end": 664
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 665,
                        "end": 666
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 654,
                "end": 654
            },
            "flags": 32,
            "start": 654,
            "end": 668
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 668,
            "end": 669
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 669,
                "end": 678
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 678,
                            "end": 680
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 682,
                                "end": 688
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 689,
                                        "end": 690
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 682,
                                "end": 682
                            },
                            "flags": 32,
                            "start": 682,
                            "end": 691
                        },
                        "flags": 16,
                        "start": 678,
                        "end": 691
                    }
                ],
                "flags": 16,
                "start": 678,
                "end": 691
            },
            "flags": 16,
            "start": 669,
            "end": 692
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 692,
                "end": 701
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 701,
                            "end": 703
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 718,
                                "end": 721
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 713,
                                    "end": 714
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 715,
                                    "end": 717
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 705,
                                "end": 711
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 208,
                                    "awaitToken": {
                                        "kind": 82032,
                                        "flags": 0,
                                        "start": 721,
                                        "end": 727
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 727,
                                        "end": 729
                                    },
                                    "flags": 32,
                                    "start": 721,
                                    "end": 729
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 729,
                                    "end": 731
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 731,
                                    "end": 733
                                },
                                "flags": 32,
                                "start": 721,
                                "end": 733
                            },
                            "flags": 288,
                            "start": 705,
                            "end": 733
                        },
                        "flags": 16,
                        "start": 701,
                        "end": 733
                    }
                ],
                "flags": 16,
                "start": 701,
                "end": 733
            },
            "flags": 16,
            "start": 692,
            "end": 734
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 734,
                "end": 743
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 743,
                            "end": 745
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 775,
                                "end": 778
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 755,
                                    "end": 756
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 757,
                                    "end": 759
                                },
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 760,
                                    "end": 762
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 763,
                                    "end": 765
                                },
                                {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 766,
                                    "end": 768
                                },
                                {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 769,
                                    "end": 771
                                },
                                {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 772,
                                    "end": 774
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 747,
                                "end": 753
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 208,
                                                        "awaitToken": {
                                                            "kind": 82032,
                                                            "flags": 0,
                                                            "start": 778,
                                                            "end": 784
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 784,
                                                            "end": 786
                                                        },
                                                        "flags": 32,
                                                        "start": 778,
                                                        "end": 786
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "flags": 64,
                                                        "start": 786,
                                                        "end": 788
                                                    },
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitToken": {
                                                            "kind": 82032,
                                                            "flags": 0,
                                                            "start": 788,
                                                            "end": 794
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 794,
                                                            "end": 796
                                                        },
                                                        "flags": 32,
                                                        "start": 788,
                                                        "end": 796
                                                    },
                                                    "flags": 32,
                                                    "start": 778,
                                                    "end": 796
                                                },
                                                "operatorToken": {
                                                    "kind": 34098,
                                                    "flags": 64,
                                                    "start": 796,
                                                    "end": 798
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 798,
                                                    "end": 800
                                                },
                                                "flags": 32,
                                                "start": 778,
                                                "end": 800
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 800,
                                                "end": 802
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 802,
                                                "end": 804
                                            },
                                            "flags": 32,
                                            "start": 778,
                                            "end": 804
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 804,
                                            "end": 806
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 806,
                                            "end": 808
                                        },
                                        "flags": 32,
                                        "start": 778,
                                        "end": 808
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 808,
                                        "end": 810
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 810,
                                        "end": 812
                                    },
                                    "flags": 32,
                                    "start": 778,
                                    "end": 812
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 812,
                                    "end": 814
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 814,
                                    "end": 816
                                },
                                "flags": 32,
                                "start": 778,
                                "end": 816
                            },
                            "flags": 288,
                            "start": 747,
                            "end": 816
                        },
                        "flags": 16,
                        "start": 743,
                        "end": 816
                    }
                ],
                "flags": 16,
                "start": 743,
                "end": 816
            },
            "flags": 16,
            "start": 734,
            "end": 817
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 833,
                "end": 836
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 830,
                    "end": 831
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 817,
                "end": 828
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 836,
                "end": 838
            },
            "flags": 288,
            "start": 817,
            "end": 838
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 838,
            "end": 839
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 856,
                                "end": 859
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 852,
                                    "end": 853
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 854,
                                    "end": 855
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 846,
                                "end": 851
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 859,
                                "end": 861
                            },
                            "flags": 288,
                            "start": 846,
                            "end": 861
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 846,
                    "end": 861
                },
                "flags": 32,
                "start": 839,
                "end": 862
            },
            "flags": 16,
            "start": 839,
            "end": 863
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 877,
                                "end": 880
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 875,
                                "end": 877
                            },
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 870,
                                "end": 875
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 880,
                                "end": 882
                            },
                            "flags": 288,
                            "start": 870,
                            "end": 882
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 870,
                    "end": 882
                },
                "flags": 32,
                "start": 863,
                "end": 883
            },
            "flags": 16,
            "start": 863,
            "end": 884
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "id",
                            "rawText": "id",
                            "flags": 96,
                            "start": 884,
                            "end": 892
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 892,
                            "end": 894
                        },
                        "right": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 902,
                                "end": 905
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 900,
                                "end": 902
                            },
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 894,
                                "end": 900
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 905,
                                "end": 907
                            },
                            "flags": 288,
                            "start": 894,
                            "end": 907
                        },
                        "flags": 32,
                        "start": 884,
                        "end": 907
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "square",
                            "rawText": "square",
                            "flags": 96,
                            "start": 908,
                            "end": 915
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 915,
                            "end": 917
                        },
                        "right": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 927,
                                "end": 930
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 925,
                                    "end": 926
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 917,
                                "end": 923
                            },
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 932,
                                                    "end": 934
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 934,
                                                    "end": 936
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 936,
                                                    "end": 938
                                                },
                                                "flags": 32,
                                                "start": 932,
                                                "end": 938
                                            },
                                            "flags": 16,
                                            "start": 932,
                                            "end": 938
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 932,
                                    "end": 938
                                },
                                "flags": 32,
                                "start": 930,
                                "end": 940
                            },
                            "flags": 288,
                            "start": 917,
                            "end": 940
                        },
                        "flags": 32,
                        "start": 908,
                        "end": 940
                    }
                ],
                "flags": 32,
                "start": 884,
                "end": 940
            },
            "flags": 16,
            "start": 884,
            "end": 941
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 941,
                    "end": 948
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 949,
                            "end": 950
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 959,
                                "end": 962
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 957,
                                "end": 959
                            },
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 951,
                                "end": 957
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 0,
                                    "start": 962,
                                    "end": 968
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 968,
                                    "end": 970
                                },
                                "flags": 32,
                                "start": 962,
                                "end": 970
                            },
                            "flags": 288,
                            "start": 951,
                            "end": 970
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 949,
                    "end": 970
                },
                "flags": 32,
                "start": 941,
                "end": 971
            },
            "flags": 16,
            "start": 941,
            "end": 972
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 990,
                "end": 993
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 985,
                    "end": 986
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 987,
                    "end": 989
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 972,
                "end": 983
            },
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
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 995,
                                    "end": 997
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 997,
                                    "end": 999
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 999,
                                    "end": 1001
                                },
                                "flags": 32,
                                "start": 995,
                                "end": 1001
                            },
                            "flags": 16,
                            "start": 995,
                            "end": 1001
                        }
                    ],
                    "flags": 32,
                    "start": 995,
                    "end": 1001
                },
                "flags": 32,
                "start": 993,
                "end": 1003
            },
            "flags": 288,
            "start": 972,
            "end": 1003
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1003,
            "end": 1004
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1022,
                "end": 1025
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1017,
                    "end": 1018
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1019,
                    "end": 1021
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1004,
                "end": 1015
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 1025,
                "end": 1027
            },
            "flags": 288,
            "start": 1004,
            "end": 1027
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1027,
            "end": 1028
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1041,
                    "end": 1044
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1039,
                    "end": 1041
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1028,
                    "end": 1039
                },
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
                                    "kind": 208,
                                    "awaitToken": {
                                        "kind": 82032,
                                        "flags": 0,
                                        "start": 1046,
                                        "end": 1052
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1052,
                                        "end": 1054
                                    },
                                    "flags": 32,
                                    "start": 1046,
                                    "end": 1054
                                },
                                "flags": 16,
                                "start": 1046,
                                "end": 1054
                            }
                        ],
                        "flags": 32,
                        "start": 1046,
                        "end": 1054
                    },
                    "flags": 32,
                    "start": 1044,
                    "end": 1056
                },
                "flags": 288,
                "start": 1028,
                "end": 1056
            },
            "flags": 16,
            "start": 1028,
            "end": 1057
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1072,
                "end": 1075
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1070,
                    "end": 1071
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1057,
                "end": 1068
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 1075,
                "end": 1077
            },
            "flags": 288,
            "start": 1057,
            "end": 1077
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1077,
            "end": 1078
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1099,
                "end": 1102
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1091,
                    "end": 1092
                },
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 0,
                        "start": 1093,
                        "end": 1097
                    },
                    "flags": 32,
                    "start": 1093,
                    "end": 1098
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1078,
                "end": 1089
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1102,
                "end": 1104
            },
            "flags": 290,
            "start": 1078,
            "end": 1104
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1104,
            "end": 1105
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1123,
                "end": 1126
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1118,
                    "end": 1119
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 1120,
                    "end": 1121
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1105,
                "end": 1116
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 1126,
                "end": 1128
            },
            "flags": 288,
            "start": 1105,
            "end": 1128
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1128,
            "end": 1129
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1150,
                "end": 1153
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
                                    "start": 1143,
                                    "end": 1144
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 1146,
                                    "end": 1148
                                },
                                "flags": 32,
                                "start": 1143,
                                "end": 1148
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1143,
                        "end": 1148
                    },
                    "flags": 32,
                    "start": 1142,
                    "end": 1149
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1129,
                "end": 1140
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 1153,
                "end": 1155
            },
            "flags": 290,
            "start": 1129,
            "end": 1155
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1155,
            "end": 1156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 1172,
                            "end": 1175
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1170,
                                "end": 1171
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1163,
                            "end": 1168
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1177,
                                "end": 1177
                            },
                            "flags": 32,
                            "start": 1175,
                            "end": 1178
                        },
                        "flags": 288,
                        "start": 1163,
                        "end": 1178
                    },
                    "flags": 32,
                    "start": 1156,
                    "end": 1179
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 1179,
                    "end": 1181
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 1181,
                    "end": 1183
                },
                "flags": 32,
                "start": 1156,
                "end": 1183
            },
            "flags": 16,
            "start": 1156,
            "end": 1184
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 1200,
                            "end": 1203
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1198,
                                "end": 1199
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1191,
                            "end": 1196
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1205,
                                "end": 1205
                            },
                            "flags": 32,
                            "start": 1203,
                            "end": 1206
                        },
                        "flags": 288,
                        "start": 1191,
                        "end": 1206
                    },
                    "flags": 32,
                    "start": 1184,
                    "end": 1207
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 1207,
                    "end": 1209
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 1209,
                    "end": 1211
                },
                "flags": 32,
                "start": 1184,
                "end": 1211
            },
            "flags": 16,
            "start": 1184,
            "end": 1212
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1225,
                    "end": 1228
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1223,
                    "end": 1225
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1212,
                    "end": 1223
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1228,
                    "end": 1230
                },
                "flags": 288,
                "start": 1212,
                "end": 1230
            },
            "flags": 16,
            "start": 1212,
            "end": 1231
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1231,
                "end": 1242
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 1242,
                "end": 1251
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 1251,
                "end": 1255
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1256,
                            "end": 1257
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 1268,
                                "end": 1271
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 1259,
                                "end": 1265
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 0,
                                    "start": 1271,
                                    "end": 1277
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 1277,
                                    "end": 1279
                                },
                                "flags": 32,
                                "start": 1271,
                                "end": 1279
                            },
                            "flags": 288,
                            "start": 1259,
                            "end": 1279
                        },
                        "flags": 34,
                        "start": 1256,
                        "end": 1279
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 1255,
                "end": 1280
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 1282,
                    "end": 1282
                },
                "flags": 32,
                "start": 1280,
                "end": 1283
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 1231,
            "end": 1283
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1283,
            "end": 1284
        },
        {
            "kind": 120,
            "expression": {
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
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1298,
                                    "end": 1300
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 1292,
                                    "end": 1297
                                },
                                "flags": 32,
                                "start": 1292,
                                "end": 1300
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1292,
                        "end": 1300
                    },
                    "flags": 32,
                    "start": 1291,
                    "end": 1301
                },
                "flags": 32,
                "start": 1284,
                "end": 1302
            },
            "flags": 16,
            "start": 1284,
            "end": 1303
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1319,
                    "end": 1322
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 1313,
                    "end": 1319
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1303,
                    "end": 1313
                },
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 1322,
                    "end": 1324
                },
                "flags": 288,
                "start": 1303,
                "end": 1324
            },
            "flags": 16,
            "start": 1303,
            "end": 1325
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1332,
                    "end": 1335
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 257,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 1338,
                                                "end": 1344
                                            },
                                            "generatorToken": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 1344,
                                                    "end": 1346
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 288,
                                                    "start": 1347,
                                                    "end": 1348
                                                },
                                                "type": null,
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
                                                                    "start": 1350,
                                                                    "end": 1357
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "test4",
                                                                    "rawText": "\"test4\"",
                                                                    "flags": 96,
                                                                    "start": 1357,
                                                                    "end": 1365
                                                                },
                                                                "flags": 16,
                                                                "start": 0,
                                                                "end": 1350
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 1350,
                                                        "end": 1366
                                                    },
                                                    "flags": 32,
                                                    "start": 1348,
                                                    "end": 1368
                                                },
                                                "flags": 288,
                                                "start": 1346,
                                                "end": 1368
                                            },
                                            "flags": 32,
                                            "start": 1338,
                                            "end": 1368
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 1338,
                                    "end": 1368
                                },
                                "flags": 32,
                                "start": 1337,
                                "end": 1370
                            },
                            "flags": 32,
                            "start": 1335,
                            "end": 1371
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 1372,
                            "end": 1373
                        },
                        "flags": 32,
                        "start": 1335,
                        "end": 1373
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1374,
                        "end": 1374
                    },
                    "flags": 32,
                    "start": 1335,
                    "end": 1375
                },
                "flags": 32,
                "start": 1325,
                "end": 1375
            },
            "flags": 16,
            "start": 1325,
            "end": 1376
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1400,
                "end": 1403
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1389,
                                    "end": 1390
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 1392,
                                    "end": 1398
                                },
                                "flags": 32,
                                "start": 1389,
                                "end": 1398
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1389,
                        "end": 1398
                    },
                    "flags": 32,
                    "start": 1388,
                    "end": 1399
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1376,
                "end": 1387
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1403,
                "end": 1405
            },
            "flags": 290,
            "start": 1376,
            "end": 1405
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1405,
            "end": 1406
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1425,
                "end": 1428
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 1419,
                    "end": 1424
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1406,
                "end": 1417
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1428,
                "end": 1430
            },
            "flags": 288,
            "start": 1406,
            "end": 1430
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1430,
            "end": 1431
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1447,
                "end": 1450
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1444,
                                "end": 1445
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1444,
                        "end": 1445
                    },
                    "flags": 32,
                    "start": 1443,
                    "end": 1446
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1431,
                "end": 1441
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1450,
                "end": 1452
            },
            "flags": 290,
            "start": 1431,
            "end": 1452
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1452,
            "end": 1453
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1472,
                "end": 1475
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1466,
                                "end": 1467
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 1468,
                                "end": 1470
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1466,
                        "end": 1470
                    },
                    "flags": 32,
                    "start": 1465,
                    "end": 1471
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1453,
                "end": 1463
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1475,
                "end": 1477
            },
            "flags": 290,
            "start": 1453,
            "end": 1477
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1477,
            "end": 1478
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1494,
                "end": 1497
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
                                "start": 1491,
                                "end": 1492
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1491,
                        "end": 1492
                    },
                    "flags": 32,
                    "start": 1490,
                    "end": 1493
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1478,
                "end": 1488
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1497,
                "end": 1499
            },
            "flags": 290,
            "start": 1478,
            "end": 1499
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1499,
            "end": 1500
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 1519,
                "end": 1522
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
                                "start": 1513,
                                "end": 1514
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 1515,
                                "end": 1517
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1513,
                        "end": 1517
                    },
                    "flags": 32,
                    "start": 1512,
                    "end": 1518
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 1500,
                "end": 1510
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1522,
                "end": 1524
            },
            "flags": 290,
            "start": 1500,
            "end": 1524
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1524,
            "end": 1525
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1537,
                    "end": 1540
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1535,
                    "end": 1537
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1525,
                    "end": 1535
                },
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 1548,
                        "end": 1551
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1546,
                        "end": 1548
                    },
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1540,
                        "end": 1546
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 1551,
                        "end": 1553
                    },
                    "flags": 288,
                    "start": 1540,
                    "end": 1553
                },
                "flags": 288,
                "start": 1525,
                "end": 1553
            },
            "flags": 16,
            "start": 1525,
            "end": 1554
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1566,
                    "end": 1569
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1564,
                    "end": 1566
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1554,
                    "end": 1564
                },
                "returnType": null,
                "contents": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1569,
                        "end": 1575
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1575,
                        "end": 1584
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1584,
                        "end": 1586
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1588,
                            "end": 1588
                        },
                        "flags": 32,
                        "start": 1586,
                        "end": 1589
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 1569,
                    "end": 1589
                },
                "flags": 288,
                "start": 1554,
                "end": 1589
            },
            "flags": 16,
            "start": 1554,
            "end": 1590
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1602,
                    "end": 1605
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1600,
                    "end": 1602
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1590,
                    "end": 1600
                },
                "returnType": null,
                "contents": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1605,
                        "end": 1611
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1611,
                        "end": 1620
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1620,
                        "end": 1622
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1622,
                        "end": 1624
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 1626,
                            "end": 1626
                        },
                        "flags": 32,
                        "start": 1624,
                        "end": 1627
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 1605,
                    "end": 1627
                },
                "flags": 288,
                "start": 1590,
                "end": 1627
            },
            "flags": 16,
            "start": 1590,
            "end": 1628
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1640,
                    "end": 1643
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1638,
                    "end": 1640
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1628,
                    "end": 1638
                },
                "returnType": null,
                "contents": {
                    "kind": 208,
                    "awaitToken": {
                        "kind": 82032,
                        "flags": 0,
                        "start": 1643,
                        "end": 1649
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 1649,
                        "end": 1651
                    },
                    "flags": 32,
                    "start": 1643,
                    "end": 1651
                },
                "flags": 288,
                "start": 1628,
                "end": 1651
            },
            "flags": 16,
            "start": 1628,
            "end": 1652
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1665,
                    "end": 1668
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1663,
                    "end": 1665
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1652,
                    "end": 1663
                },
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 1670,
                        "end": 1673
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1668,
                        "end": 1670
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1673,
                        "end": 1675
                    },
                    "flags": 32,
                    "start": 1668,
                    "end": 1675
                },
                "flags": 288,
                "start": 1652,
                "end": 1675
            },
            "flags": 16,
            "start": 1652,
            "end": 1676
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1689,
                    "end": 1692
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1687,
                    "end": 1689
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 1676,
                    "end": 1687
                },
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
                                    "start": 1694,
                                    "end": 1701
                                },
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 0,
                                        "start": 1704,
                                        "end": 1707
                                    },
                                    "typeParameters": null,
                                    "parameters": [],
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1707,
                                        "end": 1709
                                    },
                                    "flags": 32,
                                    "start": 1701,
                                    "end": 1709
                                },
                                "flags": 16,
                                "start": 0,
                                "end": 1694
                            }
                        ],
                        "flags": 32,
                        "start": 1694,
                        "end": 1710
                    },
                    "flags": 32,
                    "start": 1692,
                    "end": 1712
                },
                "flags": 288,
                "start": 1676,
                "end": 1712
            },
            "flags": 16,
            "start": 1676,
            "end": 1712
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 1712,
                "end": 1721
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
                            "start": 1721,
                            "end": 1723
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "cond",
                                "rawText": "cond",
                                "flags": 96,
                                "start": 1725,
                                "end": 1730
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 0,
                                "start": 1730,
                                "end": 1732
                            },
                            "consequent": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 1734,
                                    "end": 1736
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1732,
                                    "end": 1734
                                },
                                "asyncToken": null,
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 1737,
                                                        "end": 1738
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 1739,
                                                        "end": 1742
                                                    },
                                                    "flags": 32,
                                                    "start": 1737,
                                                    "end": 1742
                                                },
                                                "flags": 16,
                                                "start": 1737,
                                                "end": 1742
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 1737,
                                        "end": 1742
                                    },
                                    "flags": 32,
                                    "start": 1736,
                                    "end": 1744
                                },
                                "flags": 32,
                                "start": 1732,
                                "end": 1744
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 1744,
                                "end": 1746
                            },
                            "alternate": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 1748,
                                    "end": 1750
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1746,
                                    "end": 1748
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1750,
                                                            "end": 1751
                                                        },
                                                        "operatorToken": {
                                                            "kind": 34098,
                                                            "flags": 64,
                                                            "start": 1751,
                                                            "end": 1753
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1753,
                                                            "end": 1755
                                                        },
                                                        "flags": 32,
                                                        "start": 1750,
                                                        "end": 1755
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "flags": 64,
                                                        "start": 1755,
                                                        "end": 1757
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 1757,
                                                        "end": 1759
                                                    },
                                                    "flags": 32,
                                                    "start": 1750,
                                                    "end": 1759
                                                },
                                                "operatorToken": {
                                                    "kind": 34098,
                                                    "flags": 64,
                                                    "start": 1759,
                                                    "end": 1761
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 1761,
                                                    "end": 1763
                                                },
                                                "flags": 32,
                                                "start": 1750,
                                                "end": 1763
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 1763,
                                                "end": 1765
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 1765,
                                                "end": 1767
                                            },
                                            "flags": 32,
                                            "start": 1750,
                                            "end": 1767
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 1767,
                                            "end": 1769
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1769,
                                            "end": 1771
                                        },
                                        "flags": 32,
                                        "start": 1750,
                                        "end": 1771
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 1771,
                                        "end": 1773
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 0,
                                                "start": 1776,
                                                "end": 1779
                                            },
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 1775,
                                                "end": 1776
                                            },
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 1779,
                                                "end": 1780
                                            },
                                            "flags": 32,
                                            "start": 1775,
                                            "end": 1780
                                        },
                                        "flags": 32,
                                        "start": 1773,
                                        "end": 1781
                                    },
                                    "flags": 32,
                                    "start": 1750,
                                    "end": 1781
                                },
                                "flags": 32,
                                "start": 1746,
                                "end": 1781
                            },
                            "flags": 32,
                            "start": 1725,
                            "end": 1781
                        },
                        "flags": 16,
                        "start": 1721,
                        "end": 1781
                    }
                ],
                "flags": 16,
                "start": 1721,
                "end": 1781
            },
            "flags": 16,
            "start": 1712,
            "end": 1781
        }
    ],
    "isModule": false,
    "source": "    async(async(async(async(async(async())))));\n    async()(async() => {});\n    async(a)(s)(y)(n)(c);\n    x[async () => x];\n    ({async foo() { }});\n    ({async() { }});\n    async () => {};\n    async () => { return 42 };\n    (async x => y);\n    (async (x, z) => y);\n    ({x: async (y,w) => z});\n    async({x = yield}) => 1; ;\n    async (icefapper = bad) => {  };\n    async ({a: b = c});\n    async ({a = b}) => a;\n    async (a, b) => a;\n    async () => a;\n    asyncFn = async({ foo = 1 }) => foo;;\n    asyncFn = async({ foo = 1 } = {}) => foo;;\n    foo = ({ async = true }) => {};;\n    foo = async ({ async: bar }) => { await baz; };;\n    async ({}) => 0;\n    async(a,);\n     var x = async(x);\n     var x = async (a, b) => await a + b;\n     var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;\n     async (a,) => b;\n     [async(x,y) => z];\n     [async x => z];\n     id = async x => x, square = async (y) => { y * y };\n     f(a, async b => await b);\n     async (x, y) => { x * y };\n     async (x, y) => y;\n     async a => { await a };\n     async (y) => y;\n     async (x, ...y) => x;\n     async (x,y,) => x;\n     async ({a = b}) => a;\n     (async (x) => {}) + 1;\n     (async (x) => {}) / 1;\n     async a => a;\n     async function foo(a = async () => await b) {};\n     ({async: 1});\n    async yield => 1;\n    () => ({ async f() { return \"test4\"; } }).f();\n\n    async({x = yield}) => 1;\n\n    async (async) => 1;\n    async ([a]) => 1;\n    async ([a, b]) => 1;\n    async ({a}) => 1;\n    async ({a, b}) => 1;\n    async a => async b => c;\n    async a => async function() {};\n    async a => async function b() {};\n    async a => await 1;\n\n    async x => x => x;\n\n    async x => { return () => x; }\n\n    var f = cond ? x=>{x.foo } : x=>x + x + x + x + x + x + (x =>x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1781
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

