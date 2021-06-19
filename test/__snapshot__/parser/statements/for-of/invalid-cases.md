# Kataw parser test case

## Input

`````js
for (({x}) of [{x:1}]) {};

for (var ({x}) of [{x:1}]) {};

for await (let.x of []) {};

for ( let of [] ) ;;

for (const [...,] = obj;;);

for (var {x} = 1 of []) {};

for ([].x);

for ({}.x);

for (const foo, zoo of x);

for (a, b of c);

for (var x of []) function f() {};

for (var x of []) function* g() {};

for (var x of []) let y;;

for (let x of [], []) {};

var x; for (x of [], []) {};

for (const foo = bar of x);

for(var x=1 of [1,2,3]) 0;

for(let x=1 of [1,2,3]) 0;

for ({x} = y of z);

for (a, b of c);

for (foo() of []) {};

for (let.a of x);

for ([x] = y of z);

for (let() of y);

for (let + in y);

for (a of b,c) d;;

for (a,b of c) d;;

for(([0]) of 0);

for(({a: 0}) of 0);

for(0 of 0);

for (let {x,,} of obj);

for (let x = void 0 of [1, 2, 3]) {};

for (var { x: (y) = foo() } of [{}]) {};

for ([a.b](foo) of c) d;

for ([a.b]`foo` of c) d;

for ({a: b.c}() of d) e;

for ({a: b.c}`z` of d) e;

for (let {x} = a, y of obj);

for (let {x} = a, obj of obj2);

for (var i, j of [1, 2, 3]) {};

for (var i, j = 1 of {}) {};

for (var i, j = void 0 of [1, 2, 3]) {};

for (let i, j of {}) {};

for (let i, j of [1, 2, 3]) {};

for (let i, j = 1 of {}) {};

for (let i, j of 1,

for (let i, j = 1 of {})

for (let i, j = void 0 of [1, 2, 3]) {};

for (const i, j of {}) {};

for (const i, j of [1, 2, 3]) {};

for (const i, j = 1 of {}) {};

for (const i, j = void 0 of [1, 2, 3]) {};

"use strict"; for (let[x];;);

"use strict"; for (let;;);

"use strict"; for (let.x in y);

for ({a: b.c}-- of d) e;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 48,
                    "start": 6,
                    "end": 9
                },
                "flags": 32,
                "start": 5,
                "end": 10
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 10,
                "end": 13
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
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 48,
                            "start": 15,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 20
                },
                "flags": 32,
                "start": 13,
                "end": 21
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 24,
                    "end": 24
                },
                "flags": 16,
                "start": 22,
                "end": 25
            },
            "flags": 80,
            "start": 0,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 25,
            "end": 26
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 26,
                "end": 31
            },
            "initializer": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 36,
                "end": 36
            },
            "condition": {
                "kind": 536871042,
                "member": {
                    "kind": 134299649,
                    "text": "of",
                    "rawText": "of",
                    "flags": 96,
                    "start": 42,
                    "end": 45
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
                                    "start": 48,
                                    "end": 49
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 50,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 48,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 48,
                        "end": 51
                    },
                    "flags": 48,
                    "start": 47,
                    "end": 52
                },
                "flags": 32,
                "start": 42,
                "end": 53
            },
            "incrementor": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 39,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 39,
                        "end": 40
                    },
                    "flags": 48,
                    "start": 38,
                    "end": 41
                },
                "flags": 32,
                "start": 36,
                "end": 42
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 56,
                    "end": 56
                },
                "flags": 16,
                "start": 54,
                "end": 57
            },
            "flags": 81,
            "start": 26,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 57,
            "end": 58
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 58,
                "end": 63
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "start": 63,
                "end": 69
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 71,
                    "end": 74
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 75,
                    "end": 76
                },
                "flags": 536870944,
                "start": 71,
                "end": 76
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 76,
                "end": 79
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 81,
                    "end": 81
                },
                "flags": 32,
                "start": 79,
                "end": 82
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 85,
                    "end": 85
                },
                "flags": 16,
                "start": 83,
                "end": 86
            },
            "flags": 81,
            "start": 58,
            "end": 86
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 86,
            "end": 87
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 87,
                "end": 92
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 98,
                            "end": 101
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 98,
                        "end": 101
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 103,
                                "end": 103
                            },
                            "flags": 32,
                            "start": 101,
                            "end": 104
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 101,
                        "end": 104
                    }
                ],
                "flags": 16,
                "start": 98,
                "end": 104
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 104,
                "end": 104
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 106,
                "end": 108
            },
            "flags": 81,
            "start": 87,
            "end": 108
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 108,
            "end": 109
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 109,
                "end": 114
            },
            "initializer": {
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
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 123,
                                            "end": 126
                                        },
                                        "left": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 126,
                                            "end": 126
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 123,
                                        "end": 126
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 123,
                                "end": 127
                            },
                            "flags": 32,
                            "start": 121,
                            "end": 128
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 130,
                            "end": 134
                        },
                        "flags": 16,
                        "start": 121,
                        "end": 134
                    }
                ],
                "flags": 16777232,
                "start": 121,
                "end": 134
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 137,
                "end": 138
            },
            "flags": 81,
            "start": 109,
            "end": 138
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 138,
                "end": 143
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 150,
                                        "end": 151
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 150,
                                "end": 151
                            },
                            "flags": 32,
                            "start": 148,
                            "end": 152
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 154,
                            "end": 156
                        },
                        "flags": 16,
                        "start": 148,
                        "end": 156
                    }
                ],
                "flags": 16,
                "start": 148,
                "end": 156
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 156,
                "end": 159
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 161,
                    "end": 161
                },
                "flags": 32,
                "start": 159,
                "end": 162
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 165,
                    "end": 165
                },
                "flags": 16,
                "start": 163,
                "end": 166
            },
            "flags": 81,
            "start": 138,
            "end": 166
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 166,
            "end": 167
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 167,
                "end": 172
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 175,
                        "end": 175
                    },
                    "flags": 32,
                    "start": 174,
                    "end": 176
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 177,
                    "end": 178
                },
                "flags": 536870944,
                "start": 167,
                "end": 178
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 178,
                "end": 178
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 179,
                "end": 180
            },
            "flags": 81,
            "start": 167,
            "end": 180
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 180,
                "end": 185
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
                        "start": 188,
                        "end": 188
                    },
                    "flags": 48,
                    "start": 187,
                    "end": 189
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 190,
                    "end": 191
                },
                "flags": 536870944,
                "start": 180,
                "end": 191
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 191,
                "end": 191
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 192,
                "end": 193
            },
            "flags": 81,
            "start": 180,
            "end": 193
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 193,
                "end": 198
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 205,
                            "end": 209
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 205,
                        "end": 209
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "zoo",
                            "rawText": "zoo",
                            "flags": 96,
                            "start": 210,
                            "end": 214
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 210,
                        "end": 214
                    }
                ],
                "flags": 16777232,
                "start": 205,
                "end": 214
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 214,
                "end": 217
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 217,
                "end": 219
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 220,
                "end": 221
            },
            "flags": 81,
            "start": 193,
            "end": 221
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 221,
                "end": 226
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 228,
                        "end": 229
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 230,
                        "end": 232
                    }
                ],
                "flags": 32,
                "start": 221,
                "end": 232
            },
            "condition": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 235,
                "end": 237
            },
            "incrementor": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 232,
                "end": 235
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 238,
                "end": 239
            },
            "flags": 81,
            "start": 221,
            "end": 239
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 239,
                "end": 244
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 249,
                            "end": 251
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 249,
                        "end": 251
                    }
                ],
                "flags": 16,
                "start": 249,
                "end": 251
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 251,
                "end": 254
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 256,
                    "end": 256
                },
                "flags": 32,
                "start": 254,
                "end": 257
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 258,
                    "end": 267
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 267,
                    "end": 269
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 269,
                    "end": 271
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 273,
                        "end": 273
                    },
                    "flags": 32,
                    "start": 271,
                    "end": 274
                },
                "returnType": null,
                "flags": 16,
                "start": 258,
                "end": 274
            },
            "flags": 81,
            "start": 239,
            "end": 274
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 274,
            "end": 275
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 275,
                "end": 280
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 285,
                            "end": 287
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 285,
                        "end": 287
                    }
                ],
                "flags": 16,
                "start": 285,
                "end": 287
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 287,
                "end": 290
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 292,
                    "end": 292
                },
                "flags": 32,
                "start": 290,
                "end": 293
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 294,
                    "end": 303
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 303,
                    "end": 304
                },
                "name": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 304,
                    "end": 306
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 306,
                    "end": 308
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 310,
                        "end": 310
                    },
                    "flags": 32,
                    "start": 308,
                    "end": 311
                },
                "returnType": null,
                "flags": 272,
                "start": 294,
                "end": 311
            },
            "flags": 81,
            "start": 275,
            "end": 311
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 311,
            "end": 312
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 312,
                "end": 317
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 322,
                            "end": 324
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 322,
                        "end": 324
                    }
                ],
                "flags": 16,
                "start": 322,
                "end": 324
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 324,
                "end": 327
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 329,
                    "end": 329
                },
                "flags": 32,
                "start": 327,
                "end": 330
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 331,
                    "end": 335
                },
                "flags": 16,
                "start": 331,
                "end": 335
            },
            "flags": 81,
            "start": 312,
            "end": 335
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 335,
                "end": 337
            },
            "flags": 16,
            "start": 335,
            "end": 338
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 338,
            "end": 339
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 339,
                "end": 344
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 349,
                            "end": 351
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 349,
                        "end": 351
                    }
                ],
                "flags": 16,
                "start": 349,
                "end": 351
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 351,
                "end": 354
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 356,
                    "end": 356
                },
                "flags": 32,
                "start": 354,
                "end": 357
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 357,
                            "end": 357
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 360,
                                "end": 360
                            },
                            "flags": 32,
                            "start": 358,
                            "end": 361
                        }
                    ],
                    "flags": 32,
                    "start": 357,
                    "end": 361
                },
                "flags": 16,
                "start": 357,
                "end": 361
            },
            "flags": 81,
            "start": 339,
            "end": 361
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 364,
                "end": 364
            },
            "flags": 16,
            "start": 362,
            "end": 365
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 365,
            "end": 366
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 366,
                "end": 371
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
                            "start": 371,
                            "end": 373
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 371,
                        "end": 373
                    }
                ],
                "flags": 16,
                "start": 371,
                "end": 373
            },
            "flags": 16,
            "start": 366,
            "end": 374
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 374,
                "end": 378
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 380,
                "end": 381
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 381,
                "end": 384
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 386,
                    "end": 386
                },
                "flags": 32,
                "start": 384,
                "end": 387
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 387,
                            "end": 387
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 390,
                                "end": 390
                            },
                            "flags": 32,
                            "start": 388,
                            "end": 391
                        }
                    ],
                    "flags": 32,
                    "start": 387,
                    "end": 391
                },
                "flags": 16,
                "start": 387,
                "end": 391
            },
            "flags": 80,
            "start": 374,
            "end": 391
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 394,
                "end": 394
            },
            "flags": 16,
            "start": 392,
            "end": 395
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 395,
            "end": 396
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 396,
                "end": 401
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 408,
                            "end": 412
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 414,
                            "end": 418
                        },
                        "flags": 16,
                        "start": 408,
                        "end": 418
                    }
                ],
                "flags": 16777232,
                "start": 408,
                "end": 418
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 418,
                "end": 421
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 421,
                "end": 423
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 424,
                "end": 425
            },
            "flags": 81,
            "start": 396,
            "end": 425
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 425,
                "end": 430
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 434,
                            "end": 436
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 437,
                            "end": 438
                        },
                        "flags": 16,
                        "start": 434,
                        "end": 438
                    }
                ],
                "flags": 16,
                "start": 434,
                "end": 438
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 438,
                "end": 441
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
                            "start": 443,
                            "end": 444
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 445,
                            "end": 446
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 447,
                            "end": 448
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 443,
                    "end": 448
                },
                "flags": 32,
                "start": 441,
                "end": 449
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 450,
                    "end": 452
                },
                "flags": 16,
                "start": 450,
                "end": 453
            },
            "flags": 81,
            "start": 425,
            "end": 453
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 453,
                "end": 458
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 462,
                            "end": 464
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 465,
                            "end": 466
                        },
                        "flags": 16,
                        "start": 462,
                        "end": 466
                    }
                ],
                "flags": 16,
                "start": 462,
                "end": 466
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 466,
                "end": 469
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
                            "start": 471,
                            "end": 472
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 473,
                            "end": 474
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 475,
                            "end": 476
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 471,
                    "end": 476
                },
                "flags": 32,
                "start": 469,
                "end": 477
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 478,
                    "end": 480
                },
                "flags": 16,
                "start": 478,
                "end": 481
            },
            "flags": 81,
            "start": 453,
            "end": 481
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 481,
                "end": 486
            },
            "awaitKeyword": null,
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
                                "start": 489,
                                "end": 490
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 489,
                        "end": 490
                    },
                    "flags": 48,
                    "start": 488,
                    "end": 491
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 491,
                    "end": 493
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 493,
                    "end": 495
                },
                "flags": 32,
                "start": 488,
                "end": 495
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 495,
                "end": 498
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 498,
                "end": 500
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 501,
                "end": 502
            },
            "flags": 81,
            "start": 481,
            "end": 502
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 502,
                "end": 507
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 509,
                        "end": 510
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 511,
                        "end": 513
                    }
                ],
                "flags": 32,
                "start": 502,
                "end": 513
            },
            "condition": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 516,
                "end": 518
            },
            "incrementor": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 513,
                "end": 516
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 519,
                "end": 520
            },
            "flags": 81,
            "start": 502,
            "end": 520
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 520,
                "end": 525
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 527,
                    "end": 530
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 531,
                    "end": 531
                },
                "flags": 268435488,
                "start": 527,
                "end": 532
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 532,
                "end": 535
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 537,
                    "end": 537
                },
                "flags": 32,
                "start": 535,
                "end": 538
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 541,
                    "end": 541
                },
                "flags": 16,
                "start": 539,
                "end": 542
            },
            "flags": 81,
            "start": 520,
            "end": 542
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 542,
            "end": 543
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 543,
                "end": 548
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 550,
                    "end": 553
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 554,
                    "end": 555
                },
                "flags": 536870944,
                "start": 550,
                "end": 555
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 555,
                "end": 558
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 558,
                "end": 560
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 561,
                "end": 562
            },
            "flags": 81,
            "start": 543,
            "end": 562
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 562,
                "end": 567
            },
            "awaitKeyword": null,
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
                                "start": 570,
                                "end": 571
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 570,
                        "end": 571
                    },
                    "flags": 32,
                    "start": 569,
                    "end": 572
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 572,
                    "end": 574
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 574,
                    "end": 576
                },
                "flags": 32,
                "start": 569,
                "end": 576
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 576,
                "end": 579
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 579,
                "end": 581
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 582,
                "end": 583
            },
            "flags": 81,
            "start": 562,
            "end": 583
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 583,
                "end": 588
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 590,
                    "end": 593
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 594,
                    "end": 594
                },
                "flags": 268435488,
                "start": 590,
                "end": 595
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 595,
                "end": 598
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 598,
                "end": 600
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 601,
                "end": 602
            },
            "flags": 81,
            "start": 583,
            "end": 602
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 602,
                "end": 607
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 609,
                    "end": 612
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 612,
                    "end": 614
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 614,
                        "end": 614
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 614,
                        "end": 617
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 617,
                        "end": 619
                    },
                    "flags": 32,
                    "start": 614,
                    "end": 619
                },
                "flags": 32,
                "start": 602,
                "end": 619
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 619,
                "end": 619
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 620,
                "end": 621
            },
            "flags": 81,
            "start": 602,
            "end": 621
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 621,
                "end": 626
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 628,
                "end": 629
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 629,
                "end": 632
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 632,
                "end": 634
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 634,
                            "end": 634
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 635,
                            "end": 636
                        }
                    ],
                    "flags": 32,
                    "start": 634,
                    "end": 636
                },
                "flags": 16,
                "start": 634,
                "end": 636
            },
            "flags": 81,
            "start": 621,
            "end": 636
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 637,
                "end": 639
            },
            "flags": 16,
            "start": 637,
            "end": 640
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 640,
            "end": 641
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 641,
                "end": 646
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 648,
                        "end": 649
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 650,
                        "end": 651
                    }
                ],
                "flags": 32,
                "start": 641,
                "end": 651
            },
            "condition": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 654,
                "end": 656
            },
            "incrementor": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 651,
                "end": 654
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 657,
                    "end": 659
                },
                "flags": 16,
                "start": 657,
                "end": 660
            },
            "flags": 81,
            "start": 641,
            "end": 660
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 660,
            "end": 661
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 661,
                "end": 666
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 669,
                                "end": 670
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 669,
                        "end": 670
                    },
                    "flags": 32,
                    "start": 668,
                    "end": 671
                },
                "flags": 32,
                "start": 667,
                "end": 672
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 672,
                "end": 675
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 675,
                "end": 677
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 678,
                "end": 679
            },
            "flags": 81,
            "start": 661,
            "end": 679
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 679,
                "end": 684
            },
            "awaitKeyword": null,
            "initializer": {
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 687,
                                    "end": 688
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 689,
                                    "end": 691
                                },
                                "flags": 32,
                                "start": 687,
                                "end": 691
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 687,
                        "end": 691
                    },
                    "flags": 48,
                    "start": 686,
                    "end": 692
                },
                "flags": 32,
                "start": 685,
                "end": 693
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 693,
                "end": 696
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 696,
                "end": 698
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 699,
                "end": 700
            },
            "flags": 81,
            "start": 679,
            "end": 700
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 700,
                "end": 705
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 706,
                "end": 707
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 707,
                "end": 710
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 710,
                "end": 712
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 713,
                "end": 714
            },
            "flags": 81,
            "start": 700,
            "end": 714
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 714,
                "end": 719
            },
            "initializer": {
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 726,
                                        "end": 727
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 726,
                                "end": 728
                            },
                            "flags": 32,
                            "start": 724,
                            "end": 728
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 724,
                        "end": 728
                    }
                ],
                "flags": 16,
                "start": 724,
                "end": 729
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 729,
                "end": 729
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 729,
                "end": 729
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 729,
                    "end": 729
                },
                "flags": 16,
                "start": 729,
                "end": 729
            },
            "flags": 81,
            "start": 714,
            "end": 729
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 730,
                "end": 733
            },
            "flags": 16,
            "start": 730,
            "end": 733
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 733,
                "end": 737
            },
            "flags": 16,
            "start": 733,
            "end": 737
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 738,
            "end": 739
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 739,
                "end": 744
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 749,
                            "end": 751
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477615,
                                "flags": 96,
                                "start": 753,
                                "end": 758
                            },
                            "operand": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 758,
                                "end": 760
                            },
                            "flags": 32,
                            "start": 753,
                            "end": 760
                        },
                        "flags": 16,
                        "start": 749,
                        "end": 760
                    }
                ],
                "flags": 16,
                "start": 749,
                "end": 760
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 760,
                "end": 763
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
                            "start": 765,
                            "end": 766
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 767,
                            "end": 769
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 770,
                            "end": 772
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 765,
                    "end": 772
                },
                "flags": 32,
                "start": 763,
                "end": 773
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 776,
                    "end": 776
                },
                "flags": 16,
                "start": 774,
                "end": 777
            },
            "flags": 81,
            "start": 739,
            "end": 777
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 777,
            "end": 778
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 778,
                "end": 783
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 790,
                                            "end": 792
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 793,
                                            "end": 793
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 790,
                                        "end": 793
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 790,
                                "end": 793
                            },
                            "flags": 32,
                            "start": 788,
                            "end": 793
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 788,
                        "end": 793
                    }
                ],
                "flags": 16,
                "start": 788,
                "end": 793
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 805,
                "end": 805
            },
            "incrementor": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 795,
                        "end": 796
                    },
                    "flags": 32,
                    "start": 793,
                    "end": 797
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 797,
                    "end": 799
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 799,
                        "end": 803
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 804,
                        "end": 804
                    },
                    "flags": 268435488,
                    "start": 799,
                    "end": 805
                },
                "flags": 32,
                "start": 793,
                "end": 805
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 805,
                    "end": 805
                },
                "flags": 16,
                "start": 805,
                "end": 805
            },
            "flags": 81,
            "start": 778,
            "end": 805
        },
        {
            "kind": 120,
            "expression": {
                "kind": 536871042,
                "member": {
                    "kind": 134299649,
                    "text": "of",
                    "rawText": "of",
                    "flags": 96,
                    "start": 807,
                    "end": 810
                },
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 813,
                        "end": 813
                    },
                    "flags": 48,
                    "start": 812,
                    "end": 814
                },
                "flags": 32,
                "start": 807,
                "end": 815
            },
            "flags": 16,
            "start": 807,
            "end": 815
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 818,
                "end": 818
            },
            "flags": 16,
            "start": 816,
            "end": 819
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 819,
            "end": 820
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 820,
                "end": 825
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 131,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 828,
                                    "end": 829
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 830,
                                    "end": 831
                                },
                                "flags": 536870944,
                                "start": 828,
                                "end": 831
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 828,
                        "end": 831
                    },
                    "flags": 32,
                    "start": 827,
                    "end": 832
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 833,
                            "end": 836
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 833,
                    "end": 836
                },
                "flags": 268435488,
                "start": 820,
                "end": 837
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 837,
                "end": 840
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 840,
                "end": 842
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 843,
                    "end": 845
                },
                "flags": 16,
                "start": 843,
                "end": 846
            },
            "flags": 81,
            "start": 820,
            "end": 846
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 846,
                "end": 851
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 226,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 854,
                                    "end": 855
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 856,
                                    "end": 857
                                },
                                "flags": 536870944,
                                "start": 854,
                                "end": 857
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 854,
                        "end": 857
                    },
                    "flags": 32,
                    "start": 853,
                    "end": 858
                },
                "template": {
                    "kind": 458761,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 134217824,
                    "start": 858,
                    "end": 863
                },
                "flags": 32,
                "start": 846,
                "end": 863
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 863,
                "end": 866
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 866,
                "end": 868
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 869,
                    "end": 871
                },
                "flags": 16,
                "start": 869,
                "end": 872
            },
            "flags": 81,
            "start": 846,
            "end": 872
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 872,
                "end": 877
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 131,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 880,
                                    "end": 881
                                },
                                "right": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 882,
                                        "end": 884
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 885,
                                        "end": 886
                                    },
                                    "flags": 536870944,
                                    "start": 880,
                                    "end": 886
                                },
                                "flags": 32,
                                "start": 880,
                                "end": 886
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 880,
                        "end": 886
                    },
                    "flags": 48,
                    "start": 879,
                    "end": 887
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 888,
                    "end": 888
                },
                "flags": 268435488,
                "start": 872,
                "end": 889
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 889,
                "end": 892
            },
            "expression": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 892,
                "end": 894
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 895,
                    "end": 897
                },
                "flags": 16,
                "start": 895,
                "end": 898
            },
            "flags": 81,
            "start": 872,
            "end": 898
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 898,
                "end": 903
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 226,
                "member": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 906,
                                    "end": 907
                                },
                                "right": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 908,
                                        "end": 910
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 911,
                                        "end": 912
                                    },
                                    "flags": 536870944,
                                    "start": 906,
                                    "end": 912
                                },
                                "flags": 32,
                                "start": 906,
                                "end": 912
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 906,
                        "end": 912
                    },
                    "flags": 48,
                    "start": 905,
                    "end": 913
                },
                "template": {
                    "kind": 458761,
                    "text": "z",
                    "rawText": "z",
                    "flags": 134217824,
                    "start": 913,
                    "end": 916
                },
                "flags": 32,
                "start": 898,
                "end": 916
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 916,
                "end": 919
            },
            "expression": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 919,
                "end": 921
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 922,
                    "end": 924
                },
                "flags": 16,
                "start": 922,
                "end": 925
            },
            "flags": 81,
            "start": 898,
            "end": 925
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 925,
                "end": 930
            },
            "awaitKeyword": null,
            "initializer": {
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 937,
                                        "end": 938
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 937,
                                "end": 938
                            },
                            "flags": 32,
                            "start": 935,
                            "end": 939
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 941,
                            "end": 943
                        },
                        "flags": 16,
                        "start": 935,
                        "end": 943
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 944,
                            "end": 946
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 944,
                        "end": 946
                    }
                ],
                "flags": 16,
                "start": 935,
                "end": 946
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 946,
                "end": 949
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 949,
                "end": 953
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 954,
                "end": 955
            },
            "flags": 81,
            "start": 925,
            "end": 955
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 955,
                "end": 960
            },
            "awaitKeyword": null,
            "initializer": {
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 967,
                                        "end": 968
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 967,
                                "end": 968
                            },
                            "flags": 32,
                            "start": 965,
                            "end": 969
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 971,
                            "end": 973
                        },
                        "flags": 16,
                        "start": 965,
                        "end": 973
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 974,
                            "end": 978
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 974,
                        "end": 978
                    }
                ],
                "flags": 16,
                "start": 965,
                "end": 978
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 978,
                "end": 981
            },
            "expression": {
                "kind": 134299649,
                "text": "obj2",
                "rawText": "obj2",
                "flags": 96,
                "start": 981,
                "end": 986
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 987,
                "end": 988
            },
            "flags": 81,
            "start": 955,
            "end": 988
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 988,
                "end": 993
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 998,
                            "end": 1000
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 998,
                        "end": 1000
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1001,
                            "end": 1003
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1001,
                        "end": 1003
                    }
                ],
                "flags": 16,
                "start": 998,
                "end": 1003
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1003,
                "end": 1006
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
                            "start": 1008,
                            "end": 1009
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1010,
                            "end": 1012
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1013,
                            "end": 1015
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1008,
                    "end": 1015
                },
                "flags": 32,
                "start": 1006,
                "end": 1016
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1019,
                    "end": 1019
                },
                "flags": 16,
                "start": 1017,
                "end": 1020
            },
            "flags": 81,
            "start": 988,
            "end": 1020
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1020,
            "end": 1021
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1021,
                "end": 1026
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1031,
                            "end": 1033
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1031,
                        "end": 1033
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1034,
                            "end": 1036
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1038,
                            "end": 1040
                        },
                        "flags": 16,
                        "start": 1034,
                        "end": 1040
                    }
                ],
                "flags": 16,
                "start": 1031,
                "end": 1040
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1040,
                "end": 1043
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1045,
                    "end": 1045
                },
                "flags": 48,
                "start": 1043,
                "end": 1046
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1049,
                    "end": 1049
                },
                "flags": 16,
                "start": 1047,
                "end": 1050
            },
            "flags": 81,
            "start": 1021,
            "end": 1050
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1050,
            "end": 1051
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1051,
                "end": 1056
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1061,
                            "end": 1063
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1061,
                        "end": 1063
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1064,
                            "end": 1066
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477615,
                                "flags": 96,
                                "start": 1068,
                                "end": 1073
                            },
                            "operand": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 1073,
                                "end": 1075
                            },
                            "flags": 32,
                            "start": 1068,
                            "end": 1075
                        },
                        "flags": 16,
                        "start": 1064,
                        "end": 1075
                    }
                ],
                "flags": 16,
                "start": 1061,
                "end": 1075
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1075,
                "end": 1078
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
                            "start": 1080,
                            "end": 1081
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1082,
                            "end": 1084
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1085,
                            "end": 1087
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1080,
                    "end": 1087
                },
                "flags": 32,
                "start": 1078,
                "end": 1088
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1091,
                    "end": 1091
                },
                "flags": 16,
                "start": 1089,
                "end": 1092
            },
            "flags": 81,
            "start": 1051,
            "end": 1092
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1092,
            "end": 1093
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1093,
                "end": 1098
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1103,
                            "end": 1105
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1103,
                        "end": 1105
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1106,
                            "end": 1108
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1106,
                        "end": 1108
                    }
                ],
                "flags": 16,
                "start": 1103,
                "end": 1108
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1108,
                "end": 1111
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1113,
                    "end": 1113
                },
                "flags": 48,
                "start": 1111,
                "end": 1114
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1117,
                    "end": 1117
                },
                "flags": 16,
                "start": 1115,
                "end": 1118
            },
            "flags": 81,
            "start": 1093,
            "end": 1118
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1118,
            "end": 1119
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1119,
                "end": 1124
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1129,
                            "end": 1131
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1129,
                        "end": 1131
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1132,
                            "end": 1134
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1132,
                        "end": 1134
                    }
                ],
                "flags": 16,
                "start": 1129,
                "end": 1134
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1134,
                "end": 1137
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
                            "start": 1139,
                            "end": 1140
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1141,
                            "end": 1143
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1144,
                            "end": 1146
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1139,
                    "end": 1146
                },
                "flags": 32,
                "start": 1137,
                "end": 1147
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1150,
                    "end": 1150
                },
                "flags": 16,
                "start": 1148,
                "end": 1151
            },
            "flags": 81,
            "start": 1119,
            "end": 1151
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1151,
            "end": 1152
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1152,
                "end": 1157
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1162,
                            "end": 1164
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1162,
                        "end": 1164
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1165,
                            "end": 1167
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1169,
                            "end": 1171
                        },
                        "flags": 16,
                        "start": 1165,
                        "end": 1171
                    }
                ],
                "flags": 16,
                "start": 1162,
                "end": 1171
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1171,
                "end": 1174
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1176,
                    "end": 1176
                },
                "flags": 48,
                "start": 1174,
                "end": 1177
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1180,
                    "end": 1180
                },
                "flags": 16,
                "start": 1178,
                "end": 1181
            },
            "flags": 81,
            "start": 1152,
            "end": 1181
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1181,
            "end": 1182
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1182,
                "end": 1187
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1192,
                            "end": 1194
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1192,
                        "end": 1194
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1195,
                            "end": 1197
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1195,
                        "end": 1197
                    }
                ],
                "flags": 16,
                "start": 1192,
                "end": 1197
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1197,
                "end": 1200
            },
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 1200,
                "end": 1202
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 1202,
                            "end": 1202
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 1203,
                            "end": 1203
                        }
                    ],
                    "flags": 32,
                    "start": 1202,
                    "end": 1203
                },
                "flags": 16,
                "start": 1202,
                "end": 1203
            },
            "flags": 81,
            "start": 1182,
            "end": 1203
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1203,
                "end": 1208
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1213,
                            "end": 1215
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1213,
                        "end": 1215
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1216,
                            "end": 1218
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1220,
                            "end": 1222
                        },
                        "flags": 16,
                        "start": 1216,
                        "end": 1222
                    }
                ],
                "flags": 16,
                "start": 1213,
                "end": 1222
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1222,
                "end": 1225
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1227,
                    "end": 1227
                },
                "flags": 48,
                "start": 1225,
                "end": 1228
            },
            "statement": {
                "kind": 167,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 81,
                    "start": 1229,
                    "end": 1234
                },
                "awaitKeyword": null,
                "initializer": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 1239,
                                "end": 1241
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 1239,
                            "end": 1241
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "j",
                                "rawText": "j",
                                "flags": 96,
                                "start": 1242,
                                "end": 1244
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477615,
                                    "flags": 96,
                                    "start": 1246,
                                    "end": 1251
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 1251,
                                    "end": 1253
                                },
                                "flags": 32,
                                "start": 1246,
                                "end": 1253
                            },
                            "flags": 16,
                            "start": 1242,
                            "end": 1253
                        }
                    ],
                    "flags": 16,
                    "start": 1239,
                    "end": 1253
                },
                "ofKeyword": {
                    "kind": 16793717,
                    "flags": 64,
                    "start": 1253,
                    "end": 1256
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
                                "start": 1258,
                                "end": 1259
                            },
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 1260,
                                "end": 1262
                            },
                            {
                                "kind": 201392130,
                                "text": 3,
                                "rawText": "3",
                                "flags": 96,
                                "start": 1263,
                                "end": 1265
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1258,
                        "end": 1265
                    },
                    "flags": 32,
                    "start": 1256,
                    "end": 1266
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 1269,
                        "end": 1269
                    },
                    "flags": 16,
                    "start": 1267,
                    "end": 1270
                },
                "flags": 81,
                "start": 1229,
                "end": 1270
            },
            "flags": 81,
            "start": 1203,
            "end": 1270
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1270,
            "end": 1271
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1271,
                "end": 1276
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1283,
                            "end": 1285
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1283,
                        "end": 1285
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1286,
                            "end": 1288
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1286,
                        "end": 1288
                    }
                ],
                "flags": 16777232,
                "start": 1283,
                "end": 1288
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1288,
                "end": 1291
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1293,
                    "end": 1293
                },
                "flags": 48,
                "start": 1291,
                "end": 1294
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1297,
                    "end": 1297
                },
                "flags": 16,
                "start": 1295,
                "end": 1298
            },
            "flags": 81,
            "start": 1271,
            "end": 1298
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1298,
            "end": 1299
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1299,
                "end": 1304
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1311,
                            "end": 1313
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1311,
                        "end": 1313
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1314,
                            "end": 1316
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1314,
                        "end": 1316
                    }
                ],
                "flags": 16777232,
                "start": 1311,
                "end": 1316
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1316,
                "end": 1319
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
                            "start": 1321,
                            "end": 1322
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1323,
                            "end": 1325
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1326,
                            "end": 1328
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1321,
                    "end": 1328
                },
                "flags": 32,
                "start": 1319,
                "end": 1329
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1332,
                    "end": 1332
                },
                "flags": 16,
                "start": 1330,
                "end": 1333
            },
            "flags": 81,
            "start": 1299,
            "end": 1333
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1333,
            "end": 1334
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1334,
                "end": 1339
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1346,
                            "end": 1348
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1346,
                        "end": 1348
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1349,
                            "end": 1351
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1353,
                            "end": 1355
                        },
                        "flags": 16,
                        "start": 1349,
                        "end": 1355
                    }
                ],
                "flags": 16777232,
                "start": 1346,
                "end": 1355
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1355,
                "end": 1358
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 1360,
                    "end": 1360
                },
                "flags": 48,
                "start": 1358,
                "end": 1361
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1364,
                    "end": 1364
                },
                "flags": 16,
                "start": 1362,
                "end": 1365
            },
            "flags": 81,
            "start": 1334,
            "end": 1365
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1365,
            "end": 1366
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1366,
                "end": 1371
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 1378,
                            "end": 1380
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1378,
                        "end": 1380
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "j",
                            "rawText": "j",
                            "flags": 96,
                            "start": 1381,
                            "end": 1383
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477615,
                                "flags": 96,
                                "start": 1385,
                                "end": 1390
                            },
                            "operand": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 1390,
                                "end": 1392
                            },
                            "flags": 32,
                            "start": 1385,
                            "end": 1392
                        },
                        "flags": 16,
                        "start": 1381,
                        "end": 1392
                    }
                ],
                "flags": 16777232,
                "start": 1378,
                "end": 1392
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1392,
                "end": 1395
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
                            "start": 1397,
                            "end": 1398
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1399,
                            "end": 1401
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1402,
                            "end": 1404
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1397,
                    "end": 1404
                },
                "flags": 32,
                "start": 1395,
                "end": 1405
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 1408,
                    "end": 1408
                },
                "flags": 16,
                "start": 1406,
                "end": 1409
            },
            "flags": 81,
            "start": 1366,
            "end": 1409
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1409,
            "end": 1410
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1410,
                "end": 1424
            },
            "flags": 16,
            "start": 1410,
            "end": 1425
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 1425,
                "end": 1429
            },
            "initializer": {
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1435,
                                        "end": 1436
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 1435,
                                "end": 1436
                            },
                            "flags": 32,
                            "start": 1434,
                            "end": 1437
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 1434,
                        "end": 1437
                    }
                ],
                "flags": 16,
                "start": 1434,
                "end": 1437
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1440,
                "end": 1441
            },
            "flags": 80,
            "start": 1425,
            "end": 1441
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1441,
                "end": 1455
            },
            "flags": 16,
            "start": 1441,
            "end": 1456
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 1456,
                "end": 1460
            },
            "initializer": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 1462,
                "end": 1465
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1468,
                "end": 1469
            },
            "flags": 80,
            "start": 1456,
            "end": 1469
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 1469,
                "end": 1483
            },
            "flags": 16,
            "start": 1469,
            "end": 1484
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 1484,
                "end": 1488
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 1490,
                    "end": 1493
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 1494,
                    "end": 1495
                },
                "flags": 536870944,
                "start": 1490,
                "end": 1495
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 1495,
                "end": 1498
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 1498,
                "end": 1500
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 1501,
                "end": 1502
            },
            "flags": 80,
            "start": 1484,
            "end": 1502
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1502,
                "end": 1507
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "start": 1517,
                    "end": 1519
                },
                "operand": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1510,
                                    "end": 1511
                                },
                                "right": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 1512,
                                        "end": 1514
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 1515,
                                        "end": 1516
                                    },
                                    "flags": 536870944,
                                    "start": 1510,
                                    "end": 1516
                                },
                                "flags": 32,
                                "start": 1510,
                                "end": 1516
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 1510,
                        "end": 1516
                    },
                    "flags": 48,
                    "start": 1509,
                    "end": 1517
                },
                "flags": 32,
                "start": 1502,
                "end": 1519
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 1519,
                "end": 1522
            },
            "expression": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 1522,
                "end": 1524
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 1525,
                    "end": 1527
                },
                "flags": 16,
                "start": 1525,
                "end": 1528
            },
            "flags": 81,
            "start": 1502,
            "end": 1528
        }
    ],
    "isModule": false,
    "source": "for (({x}) of [{x:1}]) {};\n\nfor (var ({x}) of [{x:1}]) {};\n\nfor await (let.x of []) {};\n\nfor ( let of [] ) ;;\n\nfor (const [...,] = obj;;);\n\nfor (var {x} = 1 of []) {};\n\nfor ([].x);\n\nfor ({}.x);\n\nfor (const foo, zoo of x);\n\nfor (a, b of c);\n\nfor (var x of []) function f() {};\n\nfor (var x of []) function* g() {};\n\nfor (var x of []) let y;;\n\nfor (let x of [], []) {};\n\nvar x; for (x of [], []) {};\n\nfor (const foo = bar of x);\n\nfor(var x=1 of [1,2,3]) 0;\n\nfor(let x=1 of [1,2,3]) 0;\n\nfor ({x} = y of z);\n\nfor (a, b of c);\n\nfor (foo() of []) {};\n\nfor (let.a of x);\n\nfor ([x] = y of z);\n\nfor (let() of y);\n\nfor (let + in y);\n\nfor (a of b,c) d;;\n\nfor (a,b of c) d;;\n\nfor(([0]) of 0);\n\nfor(({a: 0}) of 0);\n\nfor(0 of 0);\n\nfor (let {x,,} of obj);\n\nfor (let x = void 0 of [1, 2, 3]) {};\n\nfor (var { x: (y) = foo() } of [{}]) {};\n\nfor ([a.b](foo) of c) d;\n\nfor ([a.b]`foo` of c) d;\n\nfor ({a: b.c}() of d) e;\n\nfor ({a: b.c}`z` of d) e;\n\nfor (let {x} = a, y of obj);\n\nfor (let {x} = a, obj of obj2);\n\nfor (var i, j of [1, 2, 3]) {};\n\nfor (var i, j = 1 of {}) {};\n\nfor (var i, j = void 0 of [1, 2, 3]) {};\n\nfor (let i, j of {}) {};\n\nfor (let i, j of [1, 2, 3]) {};\n\nfor (let i, j = 1 of {}) {};\n\nfor (let i, j of 1,\n\nfor (let i, j = 1 of {})\n\nfor (let i, j = void 0 of [1, 2, 3]) {};\n\nfor (const i, j of {}) {};\n\nfor (const i, j of [1, 2, 3]) {};\n\nfor (const i, j = 1 of {}) {};\n\nfor (const i, j = void 0 of [1, 2, 3]) {};\n\n\"use strict\"; for (let[x];;);\n\n\"use strict\"; for (let;;);\n\n\"use strict\"; for (let.x in y);\n\nfor ({a: b.c}-- of d) e;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1529
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 13, end: 15
✖ A 'for-await-of' statement is only allowed within an async function or async generator. - start: 69, end: 71
✖ The left-hand side of a for-of loop cannot start with 'let' - start: 76, end: 79
✖ ',' expected - start: 101, end: 103
✖ Missing initializer in destructuring declaration - start: 104, end: 106
✖ ',' expected - start: 104, end: 106
✖ Identifier expected - start: 104, end: 106
✖ Binding identifier expected - start: 126, end: 127
✖ A rest element must be last in a destructuring pattern - start: 123, end: 128
✖ The variable declaration of a 'for...of ... in' statement cannot have an initializer. - start: 148, end: 156
✖ Identifier expected - start: 178, end: 179
✖ Identifier expected - start: 191, end: 192
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 214, end: 217
✖ Function declarations cannot be used in a single-statement context - start: 258, end: 267
✖ Function declarations cannot be used in a single-statement context - start: 294, end: 303
✖ Expected a `;` - start: 335, end: 337
✖ Expected a ')' to match the '(' token here - start: 357, end: 358
✖ Expected a `;` - start: 361, end: 362
✖ Expected a ')' to match the '(' token here - start: 387, end: 388
✖ Expected a `;` - start: 391, end: 392
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 408, end: 418
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 462, end: 466
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 535, end: 537
✖ The left-hand side of a for-of loop cannot start with 'let' - start: 555, end: 558
✖ The left-hand side of a for-of loop cannot start with 'let' - start: 595, end: 598
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 598, end: 600
✖ Identifier expected - start: 614, end: 617
✖ Identifier expected - start: 619, end: 620
✖ Expected a ')' to match the '(' token here - start: 634, end: 635
✖ Expected a `;` - start: 636, end: 637
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 675, end: 677
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 696, end: 698
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 710, end: 712
✖ The parser expected to find a '}' to match the '{' token here - start: 728, end: 729
✖ Missing initializer in destructuring declaration - start: 728, end: 729
✖ Trailing comma not allowed. - start: 729, end: 730
✖ Expected a `;` - start: 733, end: 737
✖ Expected a `;` - start: 737, end: 738
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 749, end: 760
✖ Object property expected - start: 793, end: 795
✖ ',' expected - start: 793, end: 795
✖ ',' expected - start: 793, end: 795
✖ Identifier expected - start: 805, end: 807
✖ Expected a `;` - start: 815, end: 816
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 840, end: 842
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 892, end: 894
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 946, end: 949
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 978, end: 981
✖ Only a single variable declaration is allowed in a 'for...of' statement. - start: 1003, end: 1006
✖ Only a single variable declaration is allowed in a 'for...of' statement. - start: 1040, end: 1043
✖ Only a single variable declaration is allowed in a 'for...of' statement. - start: 1075, end: 1078
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1108, end: 1111
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1134, end: 1137
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1165, end: 1171
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1171, end: 1174
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1197, end: 1200
✖ Expected a ')' to match the '(' token here - start: 1202, end: 1203
✖ Identifier expected - start: 1203, end: 1208
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1216, end: 1222
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1222, end: 1225
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1242, end: 1253
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1253, end: 1256
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1288, end: 1291
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1316, end: 1319
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1349, end: 1355
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1355, end: 1358
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 1381, end: 1392
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 1392, end: 1395
✖ Missing initializer in destructuring declaration - start: 1437, end: 1438
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 1522, end: 1524

```

