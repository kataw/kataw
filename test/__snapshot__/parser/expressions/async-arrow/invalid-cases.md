# Kataw parser test case

## Input

`````js
async (a,...b)[c]=>{};

async 32 => {};

async x => (catch) = 1;

async if => {};

async (foo ? bar : baz) => {};

async enum => 1;

async ) => {}

a + async () => {};

async => ;

(async function() { } () => 1);

let f = a + b + async()=>d;

async().foo10 => 1;

(async function foo3() { } () => 1);

(async`foo28`.bar29 foo30 => 1);
(async`foo31`.bar32 () => 1);
(async["foo15"] foo16 => 1);
(async().foo13 () => 1);
let f = async\n(g) => g;
let f = async\n(g) => g;
var aaf = async\n(x, y) => { };;
async (a, b = await 1) => {};
async () => { await => { }; };
async (a, b = await 1) => {};
function () { a = async await => { } };
async await => { };
async (a, await) => { };

async () => {1} ? a : b;

async({a = 1}, {b = 2} = {}, {c = 3} = {});

async ([a]:string)=>c;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

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
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 0,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 13
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 32,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 14,
                "end": 17
            },
            "flags": 16,
            "start": 14,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 19,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 21,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 22,
                "end": 29
            },
            "flags": 16,
            "start": 22,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 32,
                "rawText": "32",
                "flags": 96,
                "start": 29,
                "end": 32
            },
            "flags": 16,
            "start": 29,
            "end": 32
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 37,
                "end": 37
            },
            "flags": 16,
            "start": 35,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 38,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 48,
                    "end": 51
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 46,
                    "end": 48
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 39,
                    "end": 46
                },
                "returnType": null,
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 53,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 51,
                    "end": 53
                },
                "flags": 288,
                "start": 39,
                "end": 53
            },
            "flags": 16,
            "start": 39,
            "end": 53
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 58,
                    "end": 58
                },
                "flags": 16,
                "start": 58,
                "end": 58
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 59,
                    "end": 59
                },
                "flags": 16,
                "start": 59,
                "end": 59
            },
            "flags": 16,
            "start": 53,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 61,
                "end": 63
            },
            "flags": 16,
            "start": 61,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 64,
                "end": 71
            },
            "flags": 16,
            "start": 64,
            "end": 71
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 71,
                "end": 74
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 74,
                "end": 74
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 74,
                    "end": 74
                },
                "flags": 16,
                "start": 74,
                "end": 74
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 71,
            "end": 74
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 79,
                "end": 79
            },
            "flags": 16,
            "start": 77,
            "end": 80
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 80,
            "end": 81
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 81,
                "end": 88
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 90,
                            "end": 93
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 93,
                            "end": 95
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 95,
                            "end": 99
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 99,
                            "end": 101
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "start": 101,
                            "end": 105
                        },
                        "flags": 32,
                        "start": 90,
                        "end": 105
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 81,
                "end": 81
            },
            "flags": 32,
            "start": 81,
            "end": 106
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 111,
                "end": 111
            },
            "flags": 16,
            "start": 109,
            "end": 112
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 112,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 125,
                    "end": 128
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "enum",
                    "rawText": "enum",
                    "flags": 96,
                    "start": 120,
                    "end": 125
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 113,
                    "end": 120
                },
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 128,
                    "end": 130
                },
                "flags": 288,
                "start": 113,
                "end": 130
            },
            "flags": 16,
            "start": 113,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 131,
                "end": 138
            },
            "flags": 16,
            "start": 131,
            "end": 138
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 145,
                "end": 145
            },
            "flags": 16,
            "start": 143,
            "end": 146
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 146,
                    "end": 149
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 149,
                    "end": 151
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 160,
                        "end": 163
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 151,
                        "end": 157
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 165,
                            "end": 165
                        },
                        "flags": 32,
                        "start": 163,
                        "end": 166
                    },
                    "flags": 288,
                    "start": 151,
                    "end": 166
                },
                "flags": 32,
                "start": 146,
                "end": 166
            },
            "flags": 16,
            "start": 146,
            "end": 167
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 174,
                    "end": 177
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 167,
                    "end": 174
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 167,
                    "end": 174
                },
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 177,
                    "end": 177
                },
                "flags": 288,
                "start": 167,
                "end": 177
            },
            "flags": 16,
            "start": 167,
            "end": 179
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 179,
                    "end": 205
                },
                "flags": 32,
                "start": 179,
                "end": 205
            },
            "flags": 16,
            "start": 179,
            "end": 205
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 208,
                "end": 210
            },
            "flags": 16,
            "start": 208,
            "end": 210
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 211,
            "end": 212
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 212,
                "end": 217
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 217,
                            "end": 219
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 221,
                                    "end": 223
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 223,
                                    "end": 225
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 225,
                                    "end": 227
                                },
                                "flags": 32,
                                "start": 221,
                                "end": 227
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 227,
                                "end": 229
                            },
                            "right": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 237,
                                    "end": 239
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 229,
                                    "end": 235
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 239,
                                    "end": 240
                                },
                                "flags": 288,
                                "start": 229,
                                "end": 240
                            },
                            "flags": 32,
                            "start": 221,
                            "end": 240
                        },
                        "flags": 16,
                        "start": 217,
                        "end": 240
                    }
                ],
                "flags": 33554448,
                "start": 217,
                "end": 240
            },
            "flags": 33554448,
            "start": 212,
            "end": 241
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 241,
                "end": 248
            },
            "argumentList": {
                "kind": 256,
                "elements": [],
                "trailingComma": false,
                "flags": 32,
                "start": 241,
                "end": 241
            },
            "flags": 32,
            "start": 241,
            "end": 250
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 256,
                    "end": 259
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "foo10",
                    "rawText": "foo10",
                    "flags": 96,
                    "start": 251,
                    "end": 256
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 259,
                    "end": 261
                },
                "flags": 32,
                "start": 251,
                "end": 261
            },
            "flags": 16,
            "start": 251,
            "end": 262
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 262,
                    "end": 293
                },
                "flags": 32,
                "start": 262,
                "end": 293
            },
            "flags": 16,
            "start": 262,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 296,
                "end": 298
            },
            "flags": 16,
            "start": 296,
            "end": 298
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 299,
            "end": 300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 300,
                    "end": 321
                },
                "flags": 32,
                "start": 300,
                "end": 321
            },
            "flags": 16,
            "start": 300,
            "end": 321
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 327,
                    "end": 330
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "foo30",
                    "rawText": "foo30",
                    "flags": 96,
                    "start": 321,
                    "end": 327
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 330,
                    "end": 332
                },
                "flags": 32,
                "start": 321,
                "end": 332
            },
            "flags": 16,
            "start": 321,
            "end": 332
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 333,
            "end": 334
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 334,
                    "end": 357
                },
                "flags": 32,
                "start": 334,
                "end": 357
            },
            "flags": 16,
            "start": 334,
            "end": 357
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 360,
                "end": 362
            },
            "flags": 16,
            "start": 360,
            "end": 362
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 363,
            "end": 364
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 364,
                    "end": 380
                },
                "flags": 32,
                "start": 364,
                "end": 380
            },
            "flags": 16,
            "start": 364,
            "end": 380
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 386,
                    "end": 389
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "foo16",
                    "rawText": "foo16",
                    "flags": 96,
                    "start": 380,
                    "end": 386
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 389,
                    "end": 391
                },
                "flags": 32,
                "start": 380,
                "end": 391
            },
            "flags": 16,
            "start": 380,
            "end": 391
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 392,
            "end": 393
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 393,
                    "end": 411
                },
                "flags": 32,
                "start": 393,
                "end": 411
            },
            "flags": 16,
            "start": 393,
            "end": 411
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 414,
                "end": 416
            },
            "flags": 16,
            "start": 414,
            "end": 416
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 417,
            "end": 418
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 418,
                "end": 422
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 422,
                            "end": 424
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 426,
                            "end": 432
                        },
                        "flags": 16,
                        "start": 422,
                        "end": 432
                    }
                ],
                "flags": 33554448,
                "start": 422,
                "end": 432
            },
            "flags": 33554448,
            "start": 418,
            "end": 432
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "start": 433,
                    "end": 434
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 435,
                            "end": 436
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 435,
                    "end": 436
                },
                "flags": 32,
                "start": 433,
                "end": 437
            },
            "flags": 16,
            "start": 433,
            "end": 437
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 440,
                "end": 442
            },
            "flags": 16,
            "start": 440,
            "end": 443
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 443,
                "end": 447
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 447,
                            "end": 449
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 451,
                            "end": 457
                        },
                        "flags": 16,
                        "start": 447,
                        "end": 457
                    }
                ],
                "flags": 33554448,
                "start": 447,
                "end": 457
            },
            "flags": 33554448,
            "start": 443,
            "end": 457
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "start": 458,
                    "end": 459
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 460,
                            "end": 461
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 460,
                    "end": 461
                },
                "flags": 32,
                "start": 458,
                "end": 462
            },
            "flags": 16,
            "start": 458,
            "end": 462
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 465,
                "end": 467
            },
            "flags": 16,
            "start": 465,
            "end": 468
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 468,
                "end": 472
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "aaf",
                            "rawText": "aaf",
                            "flags": 96,
                            "start": 472,
                            "end": 476
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 478,
                            "end": 484
                        },
                        "flags": 16,
                        "start": 472,
                        "end": 484
                    }
                ],
                "flags": 16,
                "start": 472,
                "end": 484
            },
            "flags": 16,
            "start": 468,
            "end": 484
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "start": 485,
                    "end": 486
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 487,
                            "end": 488
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 489,
                            "end": 491
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 487,
                    "end": 491
                },
                "flags": 32,
                "start": 485,
                "end": 492
            },
            "flags": 16,
            "start": 485,
            "end": 492
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 497,
                "end": 497
            },
            "flags": 16,
            "start": 495,
            "end": 499
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 499,
            "end": 500
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 500,
            "end": 501
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 501,
                "end": 507
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 509,
                        "end": 510
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 511,
                            "end": 513
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 513,
                            "end": 515
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 515,
                            "end": 521
                        },
                        "flags": 32,
                        "start": 511,
                        "end": 521
                    },
                    {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 521,
                        "end": 523
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 501,
                "end": 523
            },
            "flags": 32,
            "start": 501,
            "end": 524
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 529,
                "end": 529
            },
            "flags": 16,
            "start": 527,
            "end": 530
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 530,
            "end": 531
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 540,
                "end": 543
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 531,
                "end": 537
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
                                "awaitKeyword": {
                                    "kind": 82032,
                                    "flags": 0,
                                    "start": 545,
                                    "end": 551
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 551,
                                    "end": 551
                                },
                                "flags": 32,
                                "start": 545,
                                "end": 551
                            },
                            "flags": 16,
                            "start": 545,
                            "end": 551
                        }
                    ],
                    "flags": 32,
                    "start": 545,
                    "end": 551
                },
                "flags": 32,
                "start": 543,
                "end": 551
            },
            "flags": 288,
            "start": 531,
            "end": 551
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 556,
                "end": 556
            },
            "flags": 16,
            "start": 554,
            "end": 558
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 558,
            "end": 559
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 561,
            "end": 562
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 562,
                "end": 568
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 570,
                        "end": 571
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 572,
                            "end": 574
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 574,
                            "end": 576
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 576,
                            "end": 582
                        },
                        "flags": 32,
                        "start": 572,
                        "end": 582
                    },
                    {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 582,
                        "end": 584
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 562,
                "end": 584
            },
            "flags": 32,
            "start": 562,
            "end": 585
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 590,
                "end": 590
            },
            "flags": 16,
            "start": 588,
            "end": 591
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 591,
            "end": 592
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 592,
                "end": 601
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 601,
                "end": 601
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 601,
                "end": 604
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 606,
                                    "end": 608
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 608,
                                    "end": 610
                                },
                                "right": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 0,
                                        "start": 622,
                                        "end": 625
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 616,
                                        "end": 622
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 610,
                                        "end": 616
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 627,
                                            "end": 627
                                        },
                                        "flags": 32,
                                        "start": 625,
                                        "end": 629
                                    },
                                    "flags": 288,
                                    "start": 610,
                                    "end": 629
                                },
                                "flags": 32,
                                "start": 606,
                                "end": 629
                            },
                            "flags": 16,
                            "start": 606,
                            "end": 629
                        }
                    ],
                    "flags": 32,
                    "start": 606,
                    "end": 629
                },
                "flags": 32,
                "start": 604,
                "end": 631
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 592,
            "end": 631
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 631,
            "end": 632
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 644,
                    "end": 647
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 638,
                    "end": 644
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 632,
                    "end": 638
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 649,
                        "end": 649
                    },
                    "flags": 32,
                    "start": 647,
                    "end": 651
                },
                "flags": 288,
                "start": 632,
                "end": 651
            },
            "flags": 16,
            "start": 632,
            "end": 652
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 669,
                "end": 672
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 660,
                    "end": 661
                },
                {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 662,
                    "end": 668
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 652,
                "end": 658
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 674,
                    "end": 674
                },
                "flags": 32,
                "start": 672,
                "end": 676
            },
            "flags": 288,
            "start": 652,
            "end": 676
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 676,
            "end": 677
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 687,
                "end": 690
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 677,
                "end": 684
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
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 692,
                                "end": 693
                            },
                            "flags": 16,
                            "start": 692,
                            "end": 693
                        }
                    ],
                    "flags": 32,
                    "start": 692,
                    "end": 693
                },
                "flags": 32,
                "start": 690,
                "end": 694
            },
            "flags": 288,
            "start": 677,
            "end": 694
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 696,
                "end": 698
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "a",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 696,
                    "end": 698
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 698,
                "end": 700
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 700,
                    "end": 702
                },
                "flags": 16,
                "start": 700,
                "end": 703
            },
            "flags": 16,
            "start": 696,
            "end": 703
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 703,
                "end": 710
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 712,
                                        "end": 713
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 715,
                                        "end": 717
                                    },
                                    "flags": 32,
                                    "start": 712,
                                    "end": 717
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 712,
                            "end": 717
                        },
                        "flags": 32,
                        "start": 711,
                        "end": 718
                    },
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
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 721,
                                            "end": 722
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 724,
                                            "end": 726
                                        },
                                        "flags": 32,
                                        "start": 721,
                                        "end": 726
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 721,
                                "end": 726
                            },
                            "flags": 32,
                            "start": 719,
                            "end": 727
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 727,
                            "end": 729
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 731,
                                "end": 731
                            },
                            "flags": 32,
                            "start": 729,
                            "end": 732
                        },
                        "flags": 32,
                        "start": 719,
                        "end": 732
                    },
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
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 735,
                                            "end": 736
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 738,
                                            "end": 740
                                        },
                                        "flags": 32,
                                        "start": 735,
                                        "end": 740
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 735,
                                "end": 740
                            },
                            "flags": 32,
                            "start": 733,
                            "end": 741
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 741,
                            "end": 743
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 745,
                                "end": 745
                            },
                            "flags": 32,
                            "start": 743,
                            "end": 746
                        },
                        "flags": 32,
                        "start": 733,
                        "end": 746
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 703,
                "end": 703
            },
            "flags": 32,
            "start": 703,
            "end": 747
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 747,
            "end": 748
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 768,
                "end": 770
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 758,
                                    "end": 759
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 758,
                            "end": 759
                        },
                        "flags": 32,
                        "start": 757,
                        "end": 760
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 761,
                            "end": 767
                        },
                        "flags": 0,
                        "start": 760,
                        "end": 767
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 757,
                    "end": 767
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 748,
                "end": 755
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 770,
                "end": 771
            },
            "flags": 290,
            "start": 748,
            "end": 771
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 771,
            "end": 772
        }
    ],
    "isModule": false,
    "source": "async (a,...b)[c]=>{};\n\nasync 32 => {};\n\nasync x => (catch) = 1;\n\nasync if => {};\n\nasync (foo ? bar : baz) => {};\n\nasync enum => 1;\n\nasync ) => {}\n\na + async () => {};\n\nasync => ;\n\n(async function() { } () => 1);\n\nlet f = a + b + async()=>d;\n\nasync().foo10 => 1;\n\n(async function foo3() { } () => 1);\n\n(async`foo28`.bar29 foo30 => 1);\n(async`foo31`.bar32 () => 1);\n(async[\"foo15\"] foo16 => 1);\n(async().foo13 () => 1);\nlet f = async\\n(g) => g;\nlet f = async\\n(g) => g;\nvar aaf = async\\n(x, y) => { };;\nasync (a, b = await 1) => {};\nasync () => { await => { }; };\nasync (a, b = await 1) => {};\nfunction () { a = async await => { } };\nasync await => { };\nasync (a, await) => { };\n\nasync () => {1} ? a : b;\n\nasync({a = 1}, {b = 2} = {}, {c = 3} = {});\n\nasync ([a]:string)=>c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 772
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 29, end: 32
✖ Expected a `;` - start: 32, end: 35
✖ Expression expected - start: 53, end: 58
✖ 'try' expected - start: 53, end: 58
✖ Declaration or statement expected - start: 59, end: 61
✖ Expected a `;` - start: 71, end: 74
✖ Expression expected - start: 74, end: 77
✖ Declaration or statement expected - start: 106, end: 109
✖ Expected a `;` - start: 138, end: 140
✖ Declaration or statement expected - start: 140, end: 143
✖ Expression expected - start: 177, end: 179
✖ Expected a ')' to match the '(' token here - start: 205, end: 208
✖ Expected a `;` - start: 210, end: 211
✖ Declaration or statement expected - start: 250, end: 251
✖ Expected a ')' to match the '(' token here - start: 293, end: 296
✖ Expected a `;` - start: 298, end: 299
✖ Expected a ')' to match the '(' token here - start: 321, end: 327
✖ Expected a `;` - start: 332, end: 333
✖ Expected a ')' to match the '(' token here - start: 357, end: 360
✖ Expected a `;` - start: 362, end: 363
✖ Expected a ')' to match the '(' token here - start: 380, end: 386
✖ Expected a `;` - start: 391, end: 392
✖ Expected a ')' to match the '(' token here - start: 411, end: 414
✖ Expected a `;` - start: 416, end: 417
✖ Invalid hexadecimal escape sequence - start: 426, end: 432
✖ Invalid hexadecimal escape sequence - start: 432, end: 432
✖ ',' expected - start: 432, end: 433
✖ Expected a `;` - start: 432, end: 433
✖ Expected a `;` - start: 437, end: 440
✖ Invalid hexadecimal escape sequence - start: 451, end: 457
✖ Invalid hexadecimal escape sequence - start: 457, end: 457
✖ ',' expected - start: 457, end: 458
✖ Expected a `;` - start: 457, end: 458
✖ Expected a `;` - start: 462, end: 465
✖ Invalid hexadecimal escape sequence - start: 478, end: 484
✖ Invalid hexadecimal escape sequence - start: 484, end: 484
✖ ',' expected - start: 484, end: 485
✖ Expected a `;` - start: 484, end: 485
✖ Expected a `;` - start: 492, end: 495
✖ Declaration or statement expected - start: 524, end: 527
✖ Expression expected - start: 551, end: 554
✖ Declaration or statement expected - start: 559, end: 561
✖ Declaration or statement expected - start: 585, end: 588
✖ Binding identifier expected - start: 601, end: 603
✖ An arrow function can not be part of an operator to the right - start: 694, end: 696
✖ Declaration or statement expected - start: 694, end: 696

```

