# Kataw parser test case

## Input

`````js
for (x = yield in y) ;

for (x+b in y);

for (b++ in y);

for ([{__proto__: 1, __proto__: 2}];;);

for ({__proto__: 1, __proto__: 2};;);

for ([x + y] in obj);

for ([x.y] = z in obj);

for ([...x,] in [[]]);

for ({}.x);

for ([[(x, y)]] in [[[]]]) ;

for ([{ get x() {} }] in [[{}]]) ;

for ([...x = 1] in [[]]) ;

for (a, b in c);

for ({} = y in y);

for(let x=1 in [1,2,3]) 0

"use strict"; for (let in x) {}

for (foo() in {}) {}

for (x in a>c;;) x

for(const a in b) label: function f(){}

for(let let in 0);

for(let let of 0);

for(let a in 0) { var a; }

for(const a in 0) { var a; }

for(const {a, a} in 0);

for (true ? 0 : 0 in {}; false; )

for (...x in y){}

for (const ...x in y){}

for ({x=y}=x in x) ;

for ([x] = y);

for ([(x, y)] in {}) {}

for (const x in {}) label1: label2: function f() {}

for ([{x=y}]=x in x) ;

for ((x = y) in z) ;

for (x = y in z) ;

for ({x=y} = b in x) ;

for ({x=y}=x in x) ;

for ({x} = y in z);

for ({} = y in y);

for ([{x = y}] ;;);

for ({x=y};;);

for ([...[a]] = 0 in {});

for ({a: x, {b: x}} in obj);

function *f(){   for (yield x in y in z);   }

for ({ x: { set y(val) { }}?.y = 42} in [{x: 42}]) ;

for ({ x: { set y(val) {} }?.y} in [{x: 42}]) ;

for(delete(x in y) in z)x

for (((a,b)) in c);

for ((a,b) in c);

"use strict"; for(const x = 4, y of [1,2,3]) {}

for(const x,y = 1; ; ) {}

for(const x = 4 in [1,2,3]) {}

for(const x = 4, y in [1,2,3]) {}

for(const x = 4 of [1,2,3]) {}

for(const x = 4, y of [1,2,3]) {}

for(const x = 1, y = 2 in []) {}

for(const x,y in []) {}

for(const x = 1, y = 2 of []) {}

for(const x,y of []) {}

for ((a?b:c) in y)z;

for(delete((1)?y:x in y) in z)x

for ([] = x in y);

for (x = y in z) ;

for (++a().b in c);

for ({x} = z in obj);

for ({a: x.y} = z in obj);

for ({a: x + y} = z in obj);

for (let [let] in obj);

for (const [let] in obj);

for ({a: x + y} in obj);

for ([].bar = x in obj);

for ({}.bar = x in obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 8,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 14,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 96,
                    "start": 8,
                    "end": 19
                },
                "flags": 0,
                "start": 0,
                "end": 19
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 19,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 22
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 22,
                "end": 27
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 29,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 30,
                    "end": 31
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 31,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 32,
                        "end": 35
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 35,
                        "end": 37
                    },
                    "flags": 96,
                    "start": 32,
                    "end": 37
                },
                "flags": 96,
                "start": 22,
                "end": 37
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 37,
                "end": 37
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 38,
                "end": 39
            },
            "flags": 81,
            "start": 22,
            "end": 39
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 39,
                "end": 44
            },
            "initializer": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 47,
                    "end": 49
                },
                "operand": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 46,
                    "end": 47
                },
                "flags": 32,
                "start": 46,
                "end": 49
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 49,
                "end": 52
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 52,
                "end": 54
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 55,
                "end": 56
            },
            "flags": 81,
            "start": 39,
            "end": 56
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 56,
                "end": 61
            },
            "initializer": {
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
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 65,
                                            "end": 74
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 75,
                                            "end": 77
                                        },
                                        "flags": 36,
                                        "start": 65,
                                        "end": 77
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 78,
                                            "end": 88
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 89,
                                            "end": 91
                                        },
                                        "flags": 36,
                                        "start": 78,
                                        "end": 91
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 20,
                                "start": 65,
                                "end": 91
                            },
                            "flags": 52,
                            "start": 64,
                            "end": 92
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 64,
                    "end": 92
                },
                "flags": 32,
                "start": 63,
                "end": 93
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 96,
                "end": 97
            },
            "flags": 81,
            "start": 56,
            "end": 97
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 97,
                "end": 102
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "start": 105,
                                "end": 114
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 115,
                                "end": 117
                            },
                            "flags": 36,
                            "start": 105,
                            "end": 117
                        },
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "start": 118,
                                "end": 128
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 129,
                                "end": 131
                            },
                            "flags": 36,
                            "start": 118,
                            "end": 131
                        }
                    ],
                    "trailingComma": false,
                    "flags": 20,
                    "start": 105,
                    "end": 131
                },
                "flags": 52,
                "start": 104,
                "end": 132
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 135,
                "end": 136
            },
            "flags": 81,
            "start": 97,
            "end": 136
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 136,
                "end": 141
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 144,
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
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 147,
                                "end": 149
                            },
                            "flags": 96,
                            "start": 144,
                            "end": 149
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 144,
                    "end": 149
                },
                "flags": 32,
                "start": 143,
                "end": 150
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 150,
                "end": 153
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 153,
                "end": 157
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 158,
                "end": 159
            },
            "flags": 81,
            "start": 136,
            "end": 159
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 159,
                "end": 164
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 167,
                                    "end": 168
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 169,
                                    "end": 170
                                },
                                "flags": 96,
                                "start": 167,
                                "end": 170
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 167,
                        "end": 170
                    },
                    "flags": 32,
                    "start": 166,
                    "end": 171
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 171,
                    "end": 173
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 173,
                        "end": 175
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 175,
                        "end": 178
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 178,
                        "end": 182
                    },
                    "flags": 96,
                    "start": 173,
                    "end": 182
                },
                "flags": 32,
                "start": 166,
                "end": 182
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 182,
                "end": 182
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 183,
                "end": 184
            },
            "flags": 81,
            "start": 159,
            "end": 184
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 184,
                "end": 189
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 192,
                                "end": 195
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 195,
                                "end": 196
                            },
                            "flags": 1073741856,
                            "start": 192,
                            "end": 196
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 192,
                    "end": 197
                },
                "flags": 32,
                "start": 191,
                "end": 198
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 198,
                "end": 201
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 204,
                                "end": 204
                            },
                            "flags": 32,
                            "start": 203,
                            "end": 205
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 203,
                    "end": 205
                },
                "flags": 32,
                "start": 201,
                "end": 206
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 207,
                "end": 208
            },
            "flags": 81,
            "start": 184,
            "end": 208
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 208,
                "end": 213
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 216,
                        "end": 216
                    },
                    "flags": 48,
                    "start": 215,
                    "end": 217
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 218,
                    "end": 219
                },
                "flags": 48,
                "start": 208,
                "end": 219
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 219,
                "end": 219
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 220,
                "end": 221
            },
            "flags": 81,
            "start": 208,
            "end": 221
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 221,
                "end": 226
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 132,
                                            "expressions": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 231,
                                                    "end": 232
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 233,
                                                    "end": 235
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 230,
                                            "end": 236
                                        },
                                        "flags": 230,
                                        "start": 32,
                                        "end": 236
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 230,
                                "end": 236
                            },
                            "flags": 32,
                            "start": 229,
                            "end": 237
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 229,
                    "end": 237
                },
                "flags": 32,
                "start": 228,
                "end": 238
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 238,
                "end": 241
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 245,
                                            "end": 245
                                        },
                                        "flags": 32,
                                        "start": 244,
                                        "end": 246
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 244,
                                "end": 246
                            },
                            "flags": 32,
                            "start": 243,
                            "end": 247
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 243,
                    "end": 247
                },
                "flags": 32,
                "start": 241,
                "end": 248
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 249,
                "end": 251
            },
            "flags": 81,
            "start": 221,
            "end": 251
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 251,
                "end": 256
            },
            "initializer": {
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
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 96,
                                            "start": 260,
                                            "end": 264
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 264,
                                                "end": 266
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 1056,
                                                "start": 267,
                                                "end": 268
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 270,
                                                    "end": 270
                                                },
                                                "flags": 32,
                                                "start": 268,
                                                "end": 271
                                            },
                                            "flags": 1056,
                                            "start": 266,
                                            "end": 271
                                        },
                                        "flags": 32,
                                        "start": 260,
                                        "end": 271
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 260,
                                "end": 271
                            },
                            "flags": 48,
                            "start": 259,
                            "end": 273
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 259,
                    "end": 273
                },
                "flags": 32,
                "start": 258,
                "end": 274
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 274,
                "end": 277
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 281,
                                            "end": 281
                                        },
                                        "flags": 48,
                                        "start": 280,
                                        "end": 282
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 280,
                                "end": 282
                            },
                            "flags": 32,
                            "start": 279,
                            "end": 283
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 279,
                    "end": 283
                },
                "flags": 32,
                "start": 277,
                "end": 284
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 285,
                "end": 287
            },
            "flags": 81,
            "start": 251,
            "end": 287
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 287,
                "end": 292
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 295,
                                "end": 298
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 298,
                                    "end": 299
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 299,
                                    "end": 301
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 301,
                                    "end": 303
                                },
                                "flags": 0,
                                "start": 298,
                                "end": 303
                            },
                            "flags": 1073741856,
                            "start": 295,
                            "end": 303
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 295,
                    "end": 303
                },
                "flags": 32,
                "start": 294,
                "end": 304
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 304,
                "end": 307
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 310,
                                "end": 310
                            },
                            "flags": 32,
                            "start": 309,
                            "end": 311
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 309,
                    "end": 311
                },
                "flags": 32,
                "start": 307,
                "end": 312
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 313,
                "end": 315
            },
            "flags": 81,
            "start": 287,
            "end": 315
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 315,
                "end": 320
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 322,
                        "end": 323
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 324,
                            "end": 326
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "start": 326,
                            "end": 329
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 329,
                            "end": 331
                        },
                        "flags": 96,
                        "start": 324,
                        "end": 331
                    }
                ],
                "flags": 32,
                "start": 315,
                "end": 331
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 331,
                "end": 331
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 332,
                "end": 333
            },
            "flags": 81,
            "start": 315,
            "end": 333
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 333,
                "end": 338
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 341,
                        "end": 341
                    },
                    "flags": 48,
                    "start": 340,
                    "end": 342
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 342,
                    "end": 344
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 344,
                        "end": 346
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 346,
                        "end": 349
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 349,
                        "end": 351
                    },
                    "flags": 96,
                    "start": 344,
                    "end": 351
                },
                "flags": 32,
                "start": 340,
                "end": 351
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 351,
                "end": 351
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 352,
                "end": 353
            },
            "flags": 81,
            "start": 333,
            "end": 353
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 353,
                "end": 358
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 353,
                    "end": 362
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
                                "start": 362,
                                "end": 364
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 365,
                                "end": 366
                            },
                            "flags": 16,
                            "start": 362,
                            "end": 366
                        }
                    ],
                    "flags": 16,
                    "start": 362,
                    "end": 366
                },
                "flags": 33554448,
                "start": 353,
                "end": 366
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 366,
                "end": 369
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 371,
                            "end": 372
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 373,
                            "end": 374
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 375,
                            "end": 376
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 371,
                    "end": 376
                },
                "flags": 32,
                "start": 369,
                "end": 377
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 378,
                    "end": 380
                },
                "flags": 16,
                "start": 378,
                "end": 380
            },
            "flags": 81,
            "start": 353,
            "end": 380
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 380,
                "end": 394
            },
            "flags": 16,
            "start": 380,
            "end": 395
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 395,
                "end": 399
            },
            "initializer": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 401,
                "end": 404
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 404,
                "end": 407
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 407,
                "end": 409
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 412,
                    "end": 412
                },
                "flags": 16,
                "start": 410,
                "end": 413
            },
            "flags": 80,
            "start": 395,
            "end": 413
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 413,
                "end": 418
            },
            "initializer": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 420,
                    "end": 423
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 424,
                    "end": 424
                },
                "flags": 268435488,
                "start": 420,
                "end": 425
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 425,
                "end": 428
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 430,
                    "end": 430
                },
                "flags": 48,
                "start": 428,
                "end": 431
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 434,
                    "end": 434
                },
                "flags": 16,
                "start": 432,
                "end": 435
            },
            "flags": 81,
            "start": 413,
            "end": 435
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 435,
                "end": 440
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 442,
                "end": 443
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 443,
                "end": 446
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 446,
                    "end": 448
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 448,
                    "end": 449
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 449,
                    "end": 450
                },
                "flags": 96,
                "start": 446,
                "end": 450
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 450,
                "end": 451
            },
            "flags": 81,
            "start": 435,
            "end": 451
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 451,
            "end": 452
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 453,
                "end": 455
            },
            "flags": 16,
            "start": 453,
            "end": 455
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 455,
                "end": 460
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 461,
                    "end": 466
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
                                "start": 466,
                                "end": 468
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 466,
                            "end": 468
                        }
                    ],
                    "flags": 16777232,
                    "start": 466,
                    "end": 468
                },
                "flags": 33554448,
                "start": 455,
                "end": 468
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 468,
                "end": 471
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 471,
                "end": 473
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 474,
                    "end": 480
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 480,
                    "end": 481
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 481,
                        "end": 490
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 490,
                        "end": 492
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 493,
                        "end": 493
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 495,
                            "end": 495
                        },
                        "flags": 32,
                        "start": 494,
                        "end": 496
                    },
                    "returnType": null,
                    "flags": 16,
                    "start": 481,
                    "end": 496
                },
                "flags": 16,
                "start": 474,
                "end": 496
            },
            "flags": 81,
            "start": 455,
            "end": 496
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 496,
                "end": 501
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 496,
                    "end": 505
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "start": 505,
                                "end": 509
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 505,
                            "end": 509
                        }
                    ],
                    "flags": 16,
                    "start": 505,
                    "end": 509
                },
                "flags": 33554448,
                "start": 496,
                "end": 509
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 509,
                "end": 512
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 512,
                "end": 514
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 515,
                "end": 516
            },
            "flags": 81,
            "start": 496,
            "end": 516
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 516,
                "end": 521
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 516,
                    "end": 525
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "start": 525,
                                "end": 529
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 525,
                            "end": 529
                        }
                    ],
                    "flags": 16,
                    "start": 525,
                    "end": 529
                },
                "flags": 33554448,
                "start": 516,
                "end": 529
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 529,
                "end": 532
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 532,
                "end": 534
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 535,
                "end": 536
            },
            "flags": 81,
            "start": 516,
            "end": 536
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 536,
                "end": 541
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 536,
                    "end": 545
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
                                "start": 545,
                                "end": 547
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 545,
                            "end": 547
                        }
                    ],
                    "flags": 16,
                    "start": 545,
                    "end": 547
                },
                "flags": 33554448,
                "start": 536,
                "end": 547
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 547,
                "end": 550
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 550,
                "end": 552
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 555,
                                "end": 559
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
                                            "start": 559,
                                            "end": 561
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 559,
                                        "end": 561
                                    }
                                ],
                                "flags": 16,
                                "start": 559,
                                "end": 561
                            },
                            "flags": 16,
                            "start": 555,
                            "end": 562
                        }
                    ],
                    "flags": 16,
                    "start": 555,
                    "end": 562
                },
                "flags": 16,
                "start": 553,
                "end": 564
            },
            "flags": 81,
            "start": 536,
            "end": 564
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 564,
                "end": 569
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 570,
                    "end": 575
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
                                "start": 575,
                                "end": 577
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 575,
                            "end": 577
                        }
                    ],
                    "flags": 16777232,
                    "start": 575,
                    "end": 577
                },
                "flags": 33554448,
                "start": 564,
                "end": 577
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 577,
                "end": 580
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 580,
                "end": 582
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 585,
                                "end": 589
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
                                            "start": 589,
                                            "end": 591
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 589,
                                        "end": 591
                                    }
                                ],
                                "flags": 16,
                                "start": 589,
                                "end": 591
                            },
                            "flags": 16,
                            "start": 585,
                            "end": 592
                        }
                    ],
                    "flags": 16,
                    "start": 585,
                    "end": 592
                },
                "flags": 16,
                "start": 583,
                "end": 594
            },
            "flags": 81,
            "start": 564,
            "end": 594
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 594,
                "end": 599
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 600,
                    "end": 605
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 607,
                                            "end": 608
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 609,
                                            "end": 611
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 607,
                                    "end": 611
                                },
                                "flags": 32,
                                "start": 605,
                                "end": 612
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 605,
                            "end": 612
                        }
                    ],
                    "flags": 16777232,
                    "start": 605,
                    "end": 612
                },
                "flags": 33554448,
                "start": 594,
                "end": 612
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 612,
                "end": 615
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 615,
                "end": 617
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 618,
                "end": 619
            },
            "flags": 81,
            "start": 594,
            "end": 619
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 619,
                "end": 624
            },
            "initializer": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 626,
                    "end": 630
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 630,
                    "end": 632
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 632,
                    "end": 634
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 634,
                    "end": 636
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 636,
                        "end": 638
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 638,
                        "end": 641
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 643,
                            "end": 643
                        },
                        "flags": 48,
                        "start": 641,
                        "end": 644
                    },
                    "flags": 96,
                    "start": 636,
                    "end": 644
                },
                "flags": 96,
                "start": 619,
                "end": 644
            },
            "condition": null,
            "incrementor": {
                "kind": 205586437,
                "flags": 96,
                "start": 645,
                "end": 651
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 81,
                    "start": 654,
                    "end": 659
                },
                "initializer": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 661,
                    "end": 661
                },
                "condition": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 661,
                    "end": 661
                },
                "incrementor": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 661,
                    "end": 661
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 661,
                        "end": 661
                    },
                    "flags": 16,
                    "start": 661,
                    "end": 661
                },
                "flags": 81,
                "start": 654,
                "end": 661
            },
            "flags": 81,
            "start": 619,
            "end": 661
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 664,
                    "end": 665
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 665,
                    "end": 668
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 668,
                    "end": 670
                },
                "flags": 96,
                "start": 664,
                "end": 670
            },
            "flags": 16,
            "start": 664,
            "end": 670
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 672,
                "end": 672
            },
            "flags": 16,
            "start": 671,
            "end": 673
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 673,
                "end": 678
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 680,
                    "end": 685
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [],
                    "flags": 16777232,
                    "start": 685,
                    "end": 685
                },
                "flags": 33554448,
                "start": 673,
                "end": 685
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 685,
                "end": 685
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 685,
                "end": 685
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 685,
                    "end": 685
                },
                "flags": 16,
                "start": 685,
                "end": 685
            },
            "flags": 81,
            "start": 673,
            "end": 685
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 689,
                    "end": 690
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 690,
                    "end": 693
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 693,
                    "end": 695
                },
                "flags": 96,
                "start": 689,
                "end": 695
            },
            "flags": 16,
            "start": 689,
            "end": 695
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 697,
                "end": 697
            },
            "flags": 16,
            "start": 696,
            "end": 698
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 698,
                "end": 703
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 301,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 706,
                                    "end": 707
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 708,
                                    "end": 709
                                },
                                "flags": 32,
                                "start": 706,
                                "end": 709
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 706,
                        "end": 709
                    },
                    "flags": 48,
                    "start": 705,
                    "end": 710
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 710,
                    "end": 711
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 711,
                        "end": 712
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 712,
                        "end": 715
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 715,
                        "end": 717
                    },
                    "flags": 96,
                    "start": 711,
                    "end": 717
                },
                "flags": 32,
                "start": 705,
                "end": 717
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 717,
                "end": 717
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 718,
                "end": 720
            },
            "flags": 81,
            "start": 698,
            "end": 720
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 720,
                "end": 725
            },
            "initializer": {
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
                                "start": 728,
                                "end": 729
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 728,
                        "end": 729
                    },
                    "flags": 32,
                    "start": 727,
                    "end": 730
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 730,
                    "end": 732
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 732,
                    "end": 734
                },
                "flags": 32,
                "start": 727,
                "end": 734
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 734,
                "end": 734
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 735,
                "end": 736
            },
            "flags": 81,
            "start": 720,
            "end": 736
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 736,
                "end": 741
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 745,
                                        "end": 746
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 747,
                                        "end": 749
                                    }
                                ],
                                "flags": 32,
                                "start": 744,
                                "end": 750
                            },
                            "flags": 744,
                            "start": 32,
                            "end": 750
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 744,
                    "end": 750
                },
                "flags": 32,
                "start": 743,
                "end": 751
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 751,
                "end": 754
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 756,
                    "end": 756
                },
                "flags": 48,
                "start": 754,
                "end": 757
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 760,
                    "end": 760
                },
                "flags": 16,
                "start": 758,
                "end": 761
            },
            "flags": 81,
            "start": 736,
            "end": 761
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 761,
                "end": 766
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 768,
                    "end": 773
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
                                "start": 773,
                                "end": 775
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 773,
                            "end": 775
                        }
                    ],
                    "flags": 16777232,
                    "start": 773,
                    "end": 775
                },
                "flags": 33554448,
                "start": 761,
                "end": 775
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 775,
                "end": 778
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 780,
                    "end": 780
                },
                "flags": 48,
                "start": 778,
                "end": 781
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label1",
                    "rawText": "label1",
                    "flags": 96,
                    "start": 782,
                    "end": 789
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 789,
                    "end": 790
                },
                "statement": {
                    "kind": 163,
                    "label": {
                        "kind": 134299649,
                        "text": "label2",
                        "rawText": "label2",
                        "flags": 96,
                        "start": 790,
                        "end": 797
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 797,
                        "end": 798
                    },
                    "statement": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 798,
                            "end": 807
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 807,
                            "end": 809
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 810,
                            "end": 810
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 813,
                                "end": 813
                            },
                            "flags": 32,
                            "start": 811,
                            "end": 814
                        },
                        "returnType": null,
                        "flags": 16,
                        "start": 798,
                        "end": 814
                    },
                    "flags": 16,
                    "start": 790,
                    "end": 814
                },
                "flags": 16,
                "start": 782,
                "end": 814
            },
            "flags": 81,
            "start": 761,
            "end": 814
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 814,
                "end": 819
            },
            "initializer": {
                "kind": 125,
                "left": {
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
                                            "kind": 301,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 823,
                                                "end": 824
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 825,
                                                "end": 826
                                            },
                                            "flags": 32,
                                            "start": 823,
                                            "end": 826
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 823,
                                    "end": 826
                                },
                                "flags": 48,
                                "start": 822,
                                "end": 827
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 822,
                        "end": 827
                    },
                    "flags": 32,
                    "start": 821,
                    "end": 828
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 828,
                    "end": 829
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 829,
                        "end": 830
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 830,
                        "end": 833
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 833,
                        "end": 835
                    },
                    "flags": 96,
                    "start": 829,
                    "end": 835
                },
                "flags": 32,
                "start": 821,
                "end": 835
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 835,
                "end": 835
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 836,
                "end": 838
            },
            "flags": 81,
            "start": 814,
            "end": 838
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 838,
                "end": 843
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 846,
                        "end": 847
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 847,
                        "end": 849
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 849,
                        "end": 851
                    },
                    "flags": 32,
                    "start": 845,
                    "end": 851
                },
                "flags": 845,
                "start": 34,
                "end": 852
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 852,
                "end": 855
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 855,
                "end": 857
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 858,
                "end": 860
            },
            "flags": 81,
            "start": 838,
            "end": 860
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 860,
                "end": 865
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 867,
                    "end": 868
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 868,
                    "end": 870
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 870,
                        "end": 872
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 872,
                        "end": 875
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 875,
                        "end": 877
                    },
                    "flags": 96,
                    "start": 870,
                    "end": 877
                },
                "flags": 0,
                "start": 860,
                "end": 877
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 877,
                "end": 877
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 878,
                "end": 880
            },
            "flags": 81,
            "start": 860,
            "end": 880
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 880,
                "end": 885
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 301,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 888,
                                    "end": 889
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 890,
                                    "end": 891
                                },
                                "flags": 32,
                                "start": 888,
                                "end": 891
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 888,
                        "end": 891
                    },
                    "flags": 48,
                    "start": 887,
                    "end": 892
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 892,
                    "end": 894
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 894,
                        "end": 896
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 896,
                        "end": 899
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 899,
                        "end": 901
                    },
                    "flags": 96,
                    "start": 894,
                    "end": 901
                },
                "flags": 32,
                "start": 887,
                "end": 901
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 901,
                "end": 901
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 902,
                "end": 904
            },
            "flags": 81,
            "start": 880,
            "end": 904
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 904,
                "end": 909
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 301,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 912,
                                    "end": 913
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 914,
                                    "end": 915
                                },
                                "flags": 32,
                                "start": 912,
                                "end": 915
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 912,
                        "end": 915
                    },
                    "flags": 48,
                    "start": 911,
                    "end": 916
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 916,
                    "end": 917
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 917,
                        "end": 918
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 918,
                        "end": 921
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 921,
                        "end": 923
                    },
                    "flags": 96,
                    "start": 917,
                    "end": 923
                },
                "flags": 32,
                "start": 911,
                "end": 923
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 923,
                "end": 923
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 924,
                "end": 926
            },
            "flags": 81,
            "start": 904,
            "end": 926
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 926,
                "end": 931
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 934,
                                "end": 935
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 934,
                        "end": 935
                    },
                    "flags": 48,
                    "start": 933,
                    "end": 936
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 936,
                    "end": 938
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 938,
                        "end": 940
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 940,
                        "end": 943
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 943,
                        "end": 945
                    },
                    "flags": 96,
                    "start": 938,
                    "end": 945
                },
                "flags": 32,
                "start": 933,
                "end": 945
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 945,
                "end": 945
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 946,
                "end": 947
            },
            "flags": 81,
            "start": 926,
            "end": 947
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 947,
                "end": 952
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 955,
                        "end": 955
                    },
                    "flags": 48,
                    "start": 954,
                    "end": 956
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 956,
                    "end": 958
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 958,
                        "end": 960
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 960,
                        "end": 963
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 963,
                        "end": 965
                    },
                    "flags": 96,
                    "start": 958,
                    "end": 965
                },
                "flags": 32,
                "start": 954,
                "end": 965
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 965,
                "end": 965
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 966,
                "end": 967
            },
            "flags": 81,
            "start": 947,
            "end": 967
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 967,
                "end": 972
            },
            "initializer": {
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
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 976,
                                            "end": 977
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 979,
                                            "end": 981
                                        },
                                        "flags": 32,
                                        "start": 976,
                                        "end": 981
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 976,
                                "end": 981
                            },
                            "flags": 48,
                            "start": 975,
                            "end": 982
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 975,
                    "end": 982
                },
                "flags": 32,
                "start": 974,
                "end": 983
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 987,
                "end": 988
            },
            "flags": 81,
            "start": 967,
            "end": 988
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 988,
                "end": 993
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 301,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 996,
                                "end": 997
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 998,
                                "end": 999
                            },
                            "flags": 32,
                            "start": 996,
                            "end": 999
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 996,
                    "end": 999
                },
                "flags": 48,
                "start": 995,
                "end": 1000
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1003,
                "end": 1004
            },
            "flags": 81,
            "start": 988,
            "end": 1004
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1004,
                "end": 1009
            },
            "initializer": {
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
                                    "flags": 64,
                                    "start": 1012,
                                    "end": 1015
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 1016,
                                                "end": 1017
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 1016,
                                        "end": 1017
                                    },
                                    "flags": 32,
                                    "start": 1015,
                                    "end": 1018
                                },
                                "flags": 1073741856,
                                "start": 1012,
                                "end": 1018
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1012,
                        "end": 1018
                    },
                    "flags": 32,
                    "start": 1011,
                    "end": 1019
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1019,
                    "end": 1021
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 1021,
                        "end": 1023
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1023,
                        "end": 1026
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1028,
                            "end": 1028
                        },
                        "flags": 48,
                        "start": 1026,
                        "end": 1029
                    },
                    "flags": 96,
                    "start": 1021,
                    "end": 1029
                },
                "flags": 32,
                "start": 1011,
                "end": 1029
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1029,
                "end": 1029
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1030,
                "end": 1031
            },
            "flags": 81,
            "start": 1004,
            "end": 1031
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1031,
                "end": 1036
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1039,
                                "end": 1040
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1041,
                                "end": 1043
                            },
                            "flags": 32,
                            "start": 1039,
                            "end": 1043
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1039,
                    "end": 1044
                },
                "flags": 48,
                "start": 1038,
                "end": 1044
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1051,
                "end": 1051
            },
            "incrementor": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 1046,
                                "end": 1047
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1048,
                                "end": 1050
                            },
                            "flags": 32,
                            "start": 1046,
                            "end": 1050
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1046,
                    "end": 1050
                },
                "flags": 48,
                "start": 1044,
                "end": 1051
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 1051,
                    "end": 1051
                },
                "flags": 16,
                "start": 1051,
                "end": 1051
            },
            "flags": 81,
            "start": 1031,
            "end": 1051
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 1052,
                    "end": 1052
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 1052,
                    "end": 1055
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "start": 1055,
                    "end": 1059
                },
                "flags": 96,
                "start": 1052,
                "end": 1059
            },
            "flags": 16,
            "start": 1052,
            "end": 1059
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1060,
            "end": 1061
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1061,
                "end": 1071
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1071,
                "end": 1073
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 1073,
                "end": 1074
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1075,
                "end": 1075
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 1077,
                                "end": 1083
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1085,
                                    "end": 1090
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1090,
                                    "end": 1092
                                },
                                "flags": 32,
                                "start": 1085,
                                "end": 1092
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 1092,
                                "end": 1095
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 1095,
                                    "end": 1097
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 96,
                                    "start": 1097,
                                    "end": 1100
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 1100,
                                    "end": 1102
                                },
                                "flags": 96,
                                "start": 1095,
                                "end": 1102
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 1103,
                                "end": 1104
                            },
                            "flags": 80,
                            "start": 1077,
                            "end": 1104
                        }
                    ],
                    "flags": 32,
                    "start": 1077,
                    "end": 1104
                },
                "flags": 32,
                "start": 1076,
                "end": 1108
            },
            "returnType": null,
            "flags": 272,
            "start": 1061,
            "end": 1108
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1108,
                "end": 1113
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1116,
                                "end": 1118
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 1137,
                                        "end": 1139
                                    },
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 351,
                                                    "asyncKeyword": null,
                                                    "asteriskToken": null,
                                                    "getKeyword": null,
                                                    "setKeyword": {
                                                        "kind": 16499,
                                                        "flags": 96,
                                                        "start": 1121,
                                                        "end": 1125
                                                    },
                                                    "method": {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 1125,
                                                            "end": 1127
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "val",
                                                                    "rawText": "val",
                                                                    "flags": 96,
                                                                    "start": 1128,
                                                                    "end": 1131
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 608,
                                                            "start": 1128,
                                                            "end": 1132
                                                        },
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 1134,
                                                                "end": 1134
                                                            },
                                                            "flags": 32,
                                                            "start": 1132,
                                                            "end": 1136
                                                        },
                                                        "flags": 544,
                                                        "start": 1127,
                                                        "end": 1136
                                                    },
                                                    "flags": 32,
                                                    "start": 1121,
                                                    "end": 1136
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 1121,
                                            "end": 1136
                                        },
                                        "flags": 48,
                                        "start": 1119,
                                        "end": 1137
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 1139,
                                                "end": 1140
                                            },
                                            "flags": 536870944,
                                            "start": 1139,
                                            "end": 1140
                                        },
                                        "flags": 32,
                                        "start": 1139,
                                        "end": 1140
                                    },
                                    "flags": 32,
                                    "start": 1116,
                                    "end": 1140
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 1140,
                                    "end": 1142
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 1142,
                                    "end": 1145
                                },
                                "flags": 32,
                                "start": 1116,
                                "end": 1145
                            },
                            "flags": 32,
                            "start": 1116,
                            "end": 1145
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1116,
                    "end": 1145
                },
                "flags": 48,
                "start": 1115,
                "end": 1146
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1146,
                "end": 1149
            },
            "expression": {
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
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1152,
                                            "end": 1153
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 1154,
                                            "end": 1157
                                        },
                                        "flags": 32,
                                        "start": 1152,
                                        "end": 1157
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1152,
                                "end": 1157
                            },
                            "flags": 48,
                            "start": 1151,
                            "end": 1158
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1151,
                    "end": 1158
                },
                "flags": 32,
                "start": 1149,
                "end": 1159
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1160,
                "end": 1162
            },
            "flags": 81,
            "start": 1108,
            "end": 1162
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1162,
                "end": 1167
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1170,
                                "end": 1172
                            },
                            "right": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 1191,
                                    "end": 1193
                                },
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 351,
                                                "asyncKeyword": null,
                                                "asteriskToken": null,
                                                "getKeyword": null,
                                                "setKeyword": {
                                                    "kind": 16499,
                                                    "flags": 96,
                                                    "start": 1175,
                                                    "end": 1179
                                                },
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 1179,
                                                        "end": 1181
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "val",
                                                                "rawText": "val",
                                                                "flags": 96,
                                                                "start": 1182,
                                                                "end": 1185
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 608,
                                                        "start": 1182,
                                                        "end": 1186
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 1188,
                                                            "end": 1188
                                                        },
                                                        "flags": 32,
                                                        "start": 1186,
                                                        "end": 1189
                                                    },
                                                    "flags": 544,
                                                    "start": 1181,
                                                    "end": 1189
                                                },
                                                "flags": 32,
                                                "start": 1175,
                                                "end": 1189
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 1175,
                                        "end": 1189
                                    },
                                    "flags": 48,
                                    "start": 1173,
                                    "end": 1191
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 1193,
                                            "end": 1194
                                        },
                                        "flags": 536870944,
                                        "start": 1193,
                                        "end": 1194
                                    },
                                    "flags": 32,
                                    "start": 1193,
                                    "end": 1194
                                },
                                "flags": 32,
                                "start": 1170,
                                "end": 1194
                            },
                            "flags": 32,
                            "start": 1170,
                            "end": 1194
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1170,
                    "end": 1194
                },
                "flags": 48,
                "start": 1169,
                "end": 1195
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1195,
                "end": 1198
            },
            "expression": {
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
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1201,
                                            "end": 1202
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 1203,
                                            "end": 1206
                                        },
                                        "flags": 32,
                                        "start": 1201,
                                        "end": 1206
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1201,
                                "end": 1206
                            },
                            "flags": 48,
                            "start": 1200,
                            "end": 1207
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1200,
                    "end": 1207
                },
                "flags": 32,
                "start": 1198,
                "end": 1208
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1209,
                "end": 1211
            },
            "flags": 81,
            "start": 1162,
            "end": 1211
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1211,
                "end": 1216
            },
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "start": 1217,
                    "end": 1223
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1224,
                            "end": 1225
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "start": 1225,
                            "end": 1228
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1228,
                            "end": 1230
                        },
                        "flags": 96,
                        "start": 1223,
                        "end": 1230
                    },
                    "flags": 1223,
                    "start": 32,
                    "end": 1231
                },
                "flags": 32,
                "start": 1217,
                "end": 1231
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1231,
                "end": 1234
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 1234,
                "end": 1236
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1237,
                    "end": 1238
                },
                "flags": 16,
                "start": 1237,
                "end": 1238
            },
            "flags": 81,
            "start": 1211,
            "end": 1238
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1238,
                "end": 1243
            },
            "initializer": {
                "kind": 121,
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
                                "start": 1247,
                                "end": 1248
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 1249,
                                "end": 1250
                            }
                        ],
                        "flags": 32,
                        "start": 1246,
                        "end": 1251
                    },
                    "flags": 1246,
                    "start": 32,
                    "end": 1251
                },
                "flags": 1245,
                "start": 32,
                "end": 1252
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1252,
                "end": 1255
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 1255,
                "end": 1257
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1258,
                "end": 1259
            },
            "flags": 81,
            "start": 1238,
            "end": 1259
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1259,
                "end": 1264
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1267,
                            "end": 1268
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1269,
                            "end": 1270
                        }
                    ],
                    "flags": 32,
                    "start": 1266,
                    "end": 1271
                },
                "flags": 1266,
                "start": 32,
                "end": 1271
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1271,
                "end": 1274
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 1274,
                "end": 1276
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1277,
                "end": 1278
            },
            "flags": 81,
            "start": 1259,
            "end": 1278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1278,
                "end": 1292
            },
            "flags": 16,
            "start": 1278,
            "end": 1293
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 1293,
                "end": 1297
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1298,
                    "end": 1303
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
                                "start": 1303,
                                "end": 1305
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 4,
                                "rawText": "4",
                                "flags": 96,
                                "start": 1307,
                                "end": 1309
                            },
                            "flags": 16,
                            "start": 1303,
                            "end": 1309
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1310,
                                "end": 1312
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1310,
                            "end": 1312
                        }
                    ],
                    "flags": 16777232,
                    "start": 1303,
                    "end": 1312
                },
                "flags": 33554448,
                "start": 1293,
                "end": 1312
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1312,
                "end": 1315
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1317,
                            "end": 1318
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1319,
                            "end": 1320
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1321,
                            "end": 1322
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1317,
                    "end": 1322
                },
                "flags": 32,
                "start": 1315,
                "end": 1323
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1326,
                    "end": 1326
                },
                "flags": 16,
                "start": 1324,
                "end": 1327
            },
            "flags": 80,
            "start": 1293,
            "end": 1327
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1327,
                "end": 1332
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1333,
                    "end": 1338
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
                                "start": 1338,
                                "end": 1340
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1338,
                            "end": 1340
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1341,
                                "end": 1342
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 1344,
                                "end": 1346
                            },
                            "flags": 16,
                            "start": 1341,
                            "end": 1346
                        }
                    ],
                    "flags": 16777232,
                    "start": 1338,
                    "end": 1346
                },
                "flags": 33554448,
                "start": 1327,
                "end": 1346
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1353,
                    "end": 1353
                },
                "flags": 16,
                "start": 1351,
                "end": 1354
            },
            "flags": 81,
            "start": 1327,
            "end": 1354
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1354,
                "end": 1359
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1360,
                    "end": 1365
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
                                "start": 1365,
                                "end": 1367
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 4,
                                "rawText": "4",
                                "flags": 96,
                                "start": 1369,
                                "end": 1371
                            },
                            "flags": 16,
                            "start": 1365,
                            "end": 1371
                        }
                    ],
                    "flags": 16777232,
                    "start": 1365,
                    "end": 1371
                },
                "flags": 33554448,
                "start": 1354,
                "end": 1371
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1371,
                "end": 1374
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1376,
                            "end": 1377
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1378,
                            "end": 1379
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1380,
                            "end": 1381
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1376,
                    "end": 1381
                },
                "flags": 32,
                "start": 1374,
                "end": 1382
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1385,
                    "end": 1385
                },
                "flags": 16,
                "start": 1383,
                "end": 1386
            },
            "flags": 81,
            "start": 1354,
            "end": 1386
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1386,
                "end": 1391
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1392,
                    "end": 1397
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
                                "start": 1397,
                                "end": 1399
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 4,
                                "rawText": "4",
                                "flags": 96,
                                "start": 1401,
                                "end": 1403
                            },
                            "flags": 16,
                            "start": 1397,
                            "end": 1403
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1404,
                                "end": 1406
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1404,
                            "end": 1406
                        }
                    ],
                    "flags": 16777232,
                    "start": 1397,
                    "end": 1406
                },
                "flags": 33554448,
                "start": 1386,
                "end": 1406
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1406,
                "end": 1409
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1411,
                            "end": 1412
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1413,
                            "end": 1414
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1415,
                            "end": 1416
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1411,
                    "end": 1416
                },
                "flags": 32,
                "start": 1409,
                "end": 1417
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1420,
                    "end": 1420
                },
                "flags": 16,
                "start": 1418,
                "end": 1421
            },
            "flags": 81,
            "start": 1386,
            "end": 1421
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1421,
                "end": 1426
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1427,
                    "end": 1432
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
                                "start": 1432,
                                "end": 1434
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 4,
                                "rawText": "4",
                                "flags": 96,
                                "start": 1436,
                                "end": 1438
                            },
                            "flags": 16,
                            "start": 1432,
                            "end": 1438
                        }
                    ],
                    "flags": 16777232,
                    "start": 1432,
                    "end": 1438
                },
                "flags": 33554448,
                "start": 1421,
                "end": 1438
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1438,
                "end": 1441
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1443,
                            "end": 1444
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1445,
                            "end": 1446
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1447,
                            "end": 1448
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1443,
                    "end": 1448
                },
                "flags": 32,
                "start": 1441,
                "end": 1449
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1452,
                    "end": 1452
                },
                "flags": 16,
                "start": 1450,
                "end": 1453
            },
            "flags": 81,
            "start": 1421,
            "end": 1453
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1453,
                "end": 1458
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1459,
                    "end": 1464
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
                                "start": 1464,
                                "end": 1466
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 4,
                                "rawText": "4",
                                "flags": 96,
                                "start": 1468,
                                "end": 1470
                            },
                            "flags": 16,
                            "start": 1464,
                            "end": 1470
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1471,
                                "end": 1473
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1471,
                            "end": 1473
                        }
                    ],
                    "flags": 16777232,
                    "start": 1464,
                    "end": 1473
                },
                "flags": 33554448,
                "start": 1453,
                "end": 1473
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1473,
                "end": 1476
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1478,
                            "end": 1479
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1480,
                            "end": 1481
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1482,
                            "end": 1483
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1478,
                    "end": 1483
                },
                "flags": 32,
                "start": 1476,
                "end": 1484
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1487,
                    "end": 1487
                },
                "flags": 16,
                "start": 1485,
                "end": 1488
            },
            "flags": 81,
            "start": 1453,
            "end": 1488
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1488,
                "end": 1493
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1494,
                    "end": 1499
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
                                "start": 1499,
                                "end": 1501
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 1503,
                                "end": 1505
                            },
                            "flags": 16,
                            "start": 1499,
                            "end": 1505
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1506,
                                "end": 1508
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 1510,
                                "end": 1512
                            },
                            "flags": 16,
                            "start": 1506,
                            "end": 1512
                        }
                    ],
                    "flags": 16777232,
                    "start": 1499,
                    "end": 1512
                },
                "flags": 33554448,
                "start": 1488,
                "end": 1512
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1512,
                "end": 1515
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1517,
                    "end": 1517
                },
                "flags": 32,
                "start": 1515,
                "end": 1518
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1521,
                    "end": 1521
                },
                "flags": 16,
                "start": 1519,
                "end": 1522
            },
            "flags": 81,
            "start": 1488,
            "end": 1522
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1522,
                "end": 1527
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1528,
                    "end": 1533
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
                                "start": 1533,
                                "end": 1535
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1533,
                            "end": 1535
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1536,
                                "end": 1537
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1536,
                            "end": 1537
                        }
                    ],
                    "flags": 16777232,
                    "start": 1533,
                    "end": 1537
                },
                "flags": 33554448,
                "start": 1522,
                "end": 1537
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1537,
                "end": 1540
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1542,
                    "end": 1542
                },
                "flags": 32,
                "start": 1540,
                "end": 1543
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1546,
                    "end": 1546
                },
                "flags": 16,
                "start": 1544,
                "end": 1547
            },
            "flags": 81,
            "start": 1522,
            "end": 1547
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1547,
                "end": 1552
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1553,
                    "end": 1558
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
                                "start": 1558,
                                "end": 1560
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 1562,
                                "end": 1564
                            },
                            "flags": 16,
                            "start": 1558,
                            "end": 1564
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1565,
                                "end": 1567
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 1569,
                                "end": 1571
                            },
                            "flags": 16,
                            "start": 1565,
                            "end": 1571
                        }
                    ],
                    "flags": 16777232,
                    "start": 1558,
                    "end": 1571
                },
                "flags": 33554448,
                "start": 1547,
                "end": 1571
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1571,
                "end": 1574
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1576,
                    "end": 1576
                },
                "flags": 32,
                "start": 1574,
                "end": 1577
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1580,
                    "end": 1580
                },
                "flags": 16,
                "start": 1578,
                "end": 1581
            },
            "flags": 81,
            "start": 1547,
            "end": 1581
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1581,
                "end": 1586
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1587,
                    "end": 1592
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
                                "start": 1592,
                                "end": 1594
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1592,
                            "end": 1594
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1595,
                                "end": 1596
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1595,
                            "end": 1596
                        }
                    ],
                    "flags": 16777232,
                    "start": 1592,
                    "end": 1596
                },
                "flags": 33554448,
                "start": 1581,
                "end": 1596
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1596,
                "end": 1599
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1601,
                    "end": 1601
                },
                "flags": 32,
                "start": 1599,
                "end": 1602
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1605,
                    "end": 1605
                },
                "flags": 16,
                "start": 1603,
                "end": 1606
            },
            "flags": 81,
            "start": 1581,
            "end": 1606
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1606,
                "end": 1611
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1614,
                        "end": 1615
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 1615,
                        "end": 1616
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1616,
                        "end": 1617
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 1617,
                        "end": 1618
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 1618,
                        "end": 1619
                    },
                    "flags": 96,
                    "start": 1613,
                    "end": 1619
                },
                "flags": 1613,
                "start": 32,
                "end": 1620
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1620,
                "end": 1623
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 1623,
                "end": 1625
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 1626,
                    "end": 1627
                },
                "flags": 16,
                "start": 1626,
                "end": 1628
            },
            "flags": 81,
            "start": 1606,
            "end": 1628
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1628,
                "end": 1633
            },
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "start": 1634,
                    "end": 1640
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 1642,
                                "end": 1643
                            },
                            "flags": 1641,
                            "start": 32,
                            "end": 1644
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 1644,
                            "end": 1645
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 1645,
                            "end": 1646
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 1646,
                            "end": 1647
                        },
                        "alternate": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1647,
                                "end": 1648
                            },
                            "operatorToken": {
                                "kind": 21006388,
                                "flags": 96,
                                "start": 1648,
                                "end": 1651
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1651,
                                "end": 1653
                            },
                            "flags": 96,
                            "start": 1647,
                            "end": 1653
                        },
                        "flags": 1641,
                        "start": 1641,
                        "end": 1653
                    },
                    "flags": 1640,
                    "start": 32,
                    "end": 1654
                },
                "flags": 32,
                "start": 1634,
                "end": 1654
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1654,
                "end": 1657
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 1657,
                "end": 1659
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1660,
                    "end": 1661
                },
                "flags": 16,
                "start": 1660,
                "end": 1661
            },
            "flags": 81,
            "start": 1628,
            "end": 1661
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1661,
                "end": 1666
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1669,
                        "end": 1669
                    },
                    "flags": 32,
                    "start": 1668,
                    "end": 1670
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1670,
                    "end": 1672
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1672,
                        "end": 1674
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1674,
                        "end": 1677
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 1677,
                        "end": 1679
                    },
                    "flags": 96,
                    "start": 1672,
                    "end": 1679
                },
                "flags": 32,
                "start": 1668,
                "end": 1679
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1679,
                "end": 1679
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1680,
                "end": 1681
            },
            "flags": 81,
            "start": 1661,
            "end": 1681
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1681,
                "end": 1686
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1688,
                    "end": 1689
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1689,
                    "end": 1691
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 1691,
                        "end": 1693
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1693,
                        "end": 1696
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 1696,
                        "end": 1698
                    },
                    "flags": 96,
                    "start": 1691,
                    "end": 1698
                },
                "flags": 0,
                "start": 1681,
                "end": 1698
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1698,
                "end": 1698
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1699,
                "end": 1701
            },
            "flags": 81,
            "start": 1681,
            "end": 1701
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1701,
                "end": 1706
            },
            "initializer": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 1708,
                    "end": 1710
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1710,
                            "end": 1711
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1712,
                            "end": 1712
                        },
                        "flags": 268435488,
                        "start": 1710,
                        "end": 1713
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1714,
                        "end": 1715
                    },
                    "flags": 268435488,
                    "start": 1710,
                    "end": 1715
                },
                "flags": 32,
                "start": 1708,
                "end": 1715
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1715,
                "end": 1718
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 1718,
                "end": 1720
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1721,
                "end": 1722
            },
            "flags": 81,
            "start": 1701,
            "end": 1722
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1722,
                "end": 1727
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1730,
                                "end": 1731
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1730,
                        "end": 1731
                    },
                    "flags": 48,
                    "start": 1729,
                    "end": 1732
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1732,
                    "end": 1734
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 1734,
                        "end": 1736
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1736,
                        "end": 1739
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 1739,
                        "end": 1743
                    },
                    "flags": 96,
                    "start": 1734,
                    "end": 1743
                },
                "flags": 32,
                "start": 1729,
                "end": 1743
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1743,
                "end": 1743
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1744,
                "end": 1745
            },
            "flags": 81,
            "start": 1722,
            "end": 1745
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1745,
                "end": 1750
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1753,
                                    "end": 1754
                                },
                                "right": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1755,
                                        "end": 1757
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1758,
                                        "end": 1759
                                    },
                                    "flags": 96,
                                    "start": 1753,
                                    "end": 1759
                                },
                                "flags": 32,
                                "start": 1753,
                                "end": 1759
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1753,
                        "end": 1759
                    },
                    "flags": 48,
                    "start": 1752,
                    "end": 1760
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1760,
                    "end": 1762
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 1762,
                        "end": 1764
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1764,
                        "end": 1767
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 1767,
                        "end": 1771
                    },
                    "flags": 96,
                    "start": 1762,
                    "end": 1771
                },
                "flags": 32,
                "start": 1752,
                "end": 1771
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1771,
                "end": 1771
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1772,
                "end": 1773
            },
            "flags": 81,
            "start": 1745,
            "end": 1773
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1773,
                "end": 1778
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1781,
                                    "end": 1782
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1783,
                                        "end": 1785
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 1785,
                                        "end": 1787
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1787,
                                        "end": 1789
                                    },
                                    "flags": 96,
                                    "start": 1781,
                                    "end": 1789
                                },
                                "flags": 32,
                                "start": 1781,
                                "end": 1789
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1781,
                        "end": 1789
                    },
                    "flags": 48,
                    "start": 1780,
                    "end": 1790
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1790,
                    "end": 1792
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 1792,
                        "end": 1794
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1794,
                        "end": 1797
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 1797,
                        "end": 1801
                    },
                    "flags": 96,
                    "start": 1792,
                    "end": 1801
                },
                "flags": 32,
                "start": 1780,
                "end": 1801
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1801,
                "end": 1801
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1802,
                "end": 1803
            },
            "flags": 81,
            "start": 1773,
            "end": 1803
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1803,
                "end": 1808
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 1803,
                    "end": 1813
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 96,
                                            "start": 1815,
                                            "end": 1818
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1815,
                                    "end": 1818
                                },
                                "flags": 32,
                                "start": 1813,
                                "end": 1819
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1813,
                            "end": 1819
                        }
                    ],
                    "flags": 16,
                    "start": 1813,
                    "end": 1819
                },
                "flags": 33554448,
                "start": 1803,
                "end": 1819
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1819,
                "end": 1822
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 1822,
                "end": 1826
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1827,
                "end": 1828
            },
            "flags": 81,
            "start": 1803,
            "end": 1828
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1828,
                "end": 1833
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 1835,
                    "end": 1840
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 96,
                                            "start": 1842,
                                            "end": 1845
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1842,
                                    "end": 1845
                                },
                                "flags": 32,
                                "start": 1840,
                                "end": 1846
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1840,
                            "end": 1846
                        }
                    ],
                    "flags": 16777232,
                    "start": 1840,
                    "end": 1846
                },
                "flags": 33554448,
                "start": 1828,
                "end": 1846
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1846,
                "end": 1849
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 1849,
                "end": 1853
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1854,
                "end": 1855
            },
            "flags": 81,
            "start": 1828,
            "end": 1855
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1855,
                "end": 1860
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1863,
                                "end": 1864
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1865,
                                    "end": 1867
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 1867,
                                    "end": 1869
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 1869,
                                    "end": 1871
                                },
                                "flags": 96,
                                "start": 1863,
                                "end": 1871
                            },
                            "flags": 32,
                            "start": 1863,
                            "end": 1871
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1863,
                    "end": 1871
                },
                "flags": 48,
                "start": 1862,
                "end": 1872
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1872,
                "end": 1875
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 1875,
                "end": 1879
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1880,
                "end": 1881
            },
            "flags": 81,
            "start": 1855,
            "end": 1881
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1881,
                "end": 1886
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1889,
                            "end": 1889
                        },
                        "flags": 32,
                        "start": 1888,
                        "end": 1890
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 1891,
                        "end": 1894
                    },
                    "flags": 32,
                    "start": 1881,
                    "end": 1894
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1894,
                    "end": 1896
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1896,
                        "end": 1898
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1898,
                        "end": 1901
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 1901,
                        "end": 1905
                    },
                    "flags": 96,
                    "start": 1896,
                    "end": 1905
                },
                "flags": 0,
                "start": 1881,
                "end": 1905
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1905,
                "end": 1905
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1906,
                "end": 1907
            },
            "flags": 81,
            "start": 1881,
            "end": 1907
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1907,
                "end": 1912
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1915,
                            "end": 1915
                        },
                        "flags": 48,
                        "start": 1914,
                        "end": 1916
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 1917,
                        "end": 1920
                    },
                    "flags": 48,
                    "start": 1907,
                    "end": 1920
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1920,
                    "end": 1922
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1922,
                        "end": 1924
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 1924,
                        "end": 1927
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 1927,
                        "end": 1931
                    },
                    "flags": 96,
                    "start": 1922,
                    "end": 1931
                },
                "flags": 0,
                "start": 1907,
                "end": 1931
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 1931,
                "end": 1931
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1932,
                "end": 1933
            },
            "flags": 81,
            "start": 1907,
            "end": 1933
        }
    ],
    "isModule": false,
    "source": "for (x = yield in y) ;\n\nfor (x+b in y);\n\nfor (b++ in y);\n\nfor ([{__proto__: 1, __proto__: 2}];;);\n\nfor ({__proto__: 1, __proto__: 2};;);\n\nfor ([x + y] in obj);\n\nfor ([x.y] = z in obj);\n\nfor ([...x,] in [[]]);\n\nfor ({}.x);\n\nfor ([[(x, y)]] in [[[]]]) ;\n\nfor ([{ get x() {} }] in [[{}]]) ;\n\nfor ([...x = 1] in [[]]) ;\n\nfor (a, b in c);\n\nfor ({} = y in y);\n\nfor(let x=1 in [1,2,3]) 0\n\n\"use strict\"; for (let in x) {}\n\nfor (foo() in {}) {}\n\nfor (x in a>c;;) x\n\nfor(const a in b) label: function f(){}\n\nfor(let let in 0);\n\nfor(let let of 0);\n\nfor(let a in 0) { var a; }\n\nfor(const a in 0) { var a; }\n\nfor(const {a, a} in 0);\n\nfor (true ? 0 : 0 in {}; false; )\n\nfor (...x in y){}\n\nfor (const ...x in y){}\n\nfor ({x=y}=x in x) ;\n\nfor ([x] = y);\n\nfor ([(x, y)] in {}) {}\n\nfor (const x in {}) label1: label2: function f() {}\n\nfor ([{x=y}]=x in x) ;\n\nfor ((x = y) in z) ;\n\nfor (x = y in z) ;\n\nfor ({x=y} = b in x) ;\n\nfor ({x=y}=x in x) ;\n\nfor ({x} = y in z);\n\nfor ({} = y in y);\n\nfor ([{x = y}] ;;);\n\nfor ({x=y};;);\n\nfor ([...[a]] = 0 in {});\n\nfor ({a: x, {b: x}} in obj);\n\nfunction *f(){   for (yield x in y in z);   }\n\nfor ({ x: { set y(val) { }}?.y = 42} in [{x: 42}]) ;\n\nfor ({ x: { set y(val) {} }?.y} in [{x: 42}]) ;\n\nfor(delete(x in y) in z)x\n\nfor (((a,b)) in c);\n\nfor ((a,b) in c);\n\n\"use strict\"; for(const x = 4, y of [1,2,3]) {}\n\nfor(const x,y = 1; ; ) {}\n\nfor(const x = 4 in [1,2,3]) {}\n\nfor(const x = 4, y in [1,2,3]) {}\n\nfor(const x = 4 of [1,2,3]) {}\n\nfor(const x = 4, y of [1,2,3]) {}\n\nfor(const x = 1, y = 2 in []) {}\n\nfor(const x,y in []) {}\n\nfor(const x = 1, y = 2 of []) {}\n\nfor(const x,y of []) {}\n\nfor ((a?b:c) in y)z;\n\nfor(delete((1)?y:x in y) in z)x\n\nfor ([] = x in y);\n\nfor (x = y in z) ;\n\nfor (++a().b in c);\n\nfor ({x} = z in obj);\n\nfor ({a: x.y} = z in obj);\n\nfor ({a: x + y} = z in obj);\n\nfor (let [let] in obj);\n\nfor (const [let] in obj);\n\nfor ({a: x + y} in obj);\n\nfor ([].bar = x in obj);\n\nfor ({}.bar = x in obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1933
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 19, end: 20
✖ Identifier expected - start: 37, end: 38
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 52, end: 54
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 132, end: 133
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 153, end: 157
✖ Identifier expected - start: 182, end: 183
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 201, end: 203
✖ Identifier expected - start: 219, end: 220
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 241, end: 243
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 277, end: 279
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 307, end: 309
✖ Identifier expected - start: 331, end: 332
✖ Identifier expected - start: 351, end: 352
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 362, end: 366
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 428, end: 430
✖ Expected a ')' to match the '(' token here - start: 450, end: 451
✖ Declaration or statement expected - start: 452, end: 453
✖ Function declarations cannot be used in a single-statement context - start: 481, end: 490
✖ A lexical declaration can't define a 'let' binding - start: 505, end: 509
✖ 'let' is not allowed to be used as a name in 'let' or 'const' declarations. - start: 505, end: 509
✖ A lexical declaration can't define a 'let' binding - start: 525, end: 529
✖ 'let' is not allowed to be used as a name in 'let' or 'const' declarations. - start: 525, end: 529
✖ Cannot redeclare block-scoped variable - start: 559, end: 561
✖ Cannot redeclare block-scoped variable - start: 589, end: 591
✖ Duplicate identifier - start: 611, end: 612
✖ Identifier expected - start: 661, end: 664
✖ Expected a `;` - start: 670, end: 671
✖ Identifier expected - start: 685, end: 689
✖ Expected a `;` - start: 695, end: 696
✖ Identifier expected - start: 717, end: 718
✖ Identifier expected - start: 734, end: 735
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 754, end: 756
✖ Function declarations cannot be used in a single-statement context - start: 798, end: 807
✖ Identifier expected - start: 835, end: 836
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 855, end: 857
✖ Identifier expected - start: 877, end: 878
✖ Identifier expected - start: 901, end: 902
✖ Identifier expected - start: 923, end: 924
✖ Identifier expected - start: 945, end: 946
✖ Identifier expected - start: 965, end: 966
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 983, end: 985
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 1000, end: 1001
✖ Identifier expected - start: 1029, end: 1030
✖ The parser expected to find a '}' to match the '{' token here - start: 1045, end: 1046
✖ Identifier expected - start: 1051, end: 1052
✖ Identifier expected - start: 1052, end: 1055
✖ Expected a `;` - start: 1059, end: 1060
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 1085, end: 1092
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1095, end: 1097
✖ The left-hand side of an assignment expression may not be an optional property access - start: 1139, end: 1142
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1140, end: 1142
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1149, end: 1151
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1198, end: 1200
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1234, end: 1236
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1274, end: 1276
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1312, end: 1315
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1365, end: 1371
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1406, end: 1409
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1432, end: 1438
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1473, end: 1476
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1506, end: 1512
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1512, end: 1515
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1537, end: 1540
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1565, end: 1571
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1571, end: 1574
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1596, end: 1599
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1623, end: 1625
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1657, end: 1659
✖ Identifier expected - start: 1679, end: 1680
✖ Identifier expected - start: 1698, end: 1699
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1718, end: 1720
✖ Identifier expected - start: 1743, end: 1744
✖ Identifier expected - start: 1771, end: 1772
✖ The left-hand side must be a variable or a property access. - start: 1780, end: 1792
✖ Identifier expected - start: 1801, end: 1802
✖ 'let' is not allowed to be used as a name in 'let' or 'const' declarations. - start: 1815, end: 1818
✖ 'let' is not allowed to be used as a name in 'let' or 'const' declarations. - start: 1842, end: 1845
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 1875, end: 1879
✖ Identifier expected - start: 1905, end: 1906
✖ Identifier expected - start: 1931, end: 1932

```

