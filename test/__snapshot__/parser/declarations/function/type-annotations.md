# Kataw parser test case

## Input

`````js
function foo1(numVal: any) {}
function foo2(numVal: number) {}
function foo3(numVal: number, strVal: string) {}
function foo4(numVal: number, untypedVal) {}
function foo5(untypedVal, numVal: number) {}
function foo6(nullableNum: ?number) {}
function foo7(callback: () => void) {}
function foo8(callback: () => number) {}
function foo9(callback: (_: bool) => number) {}
function foo10(callback: (_1: bool, _2: string) => number) {}
function foo11(callback: (_1: bool, ...foo: Array<number>) => number) {}
function foo12(): number{}
function foo13():() => void {}
function foo14():(_:bool) => number{}
function foo15():(_?:bool) => number{}
function foo16(): {} {}
function foo17<T>() {}
function foo21({x}: { x: string; }) {}
function foo22([x]: Array<string>) {}
function foo23(...rest: Array<number>) {}
function foo27(numVal: number = 2) {}
function foo28(numVal?: number = 2) {}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 14,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 25
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 14,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 29,
                "end": 38
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 38,
                "end": 43
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 44,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 51,
                                "end": 58
                            },
                            "flags": 0,
                            "start": 50,
                            "end": 58
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 44,
                        "end": 58
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 43,
                "end": 59
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 61,
                    "end": 61
                },
                "flags": 32,
                "start": 59,
                "end": 62
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 29,
            "end": 62
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 62,
                "end": 71
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "start": 71,
                "end": 76
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 77,
                            "end": 83
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 84,
                                "end": 91
                            },
                            "flags": 0,
                            "start": 83,
                            "end": 91
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 77,
                        "end": 91
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "strVal",
                            "rawText": "strVal",
                            "flags": 96,
                            "start": 92,
                            "end": 99
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 100,
                                "end": 107
                            },
                            "flags": 0,
                            "start": 99,
                            "end": 107
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 92,
                        "end": 107
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 76,
                "end": 108
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 110,
                    "end": 110
                },
                "flags": 32,
                "start": 108,
                "end": 111
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 62,
            "end": 111
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 111,
                "end": 120
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo4",
                "rawText": "foo4",
                "flags": 96,
                "start": 120,
                "end": 125
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 126,
                            "end": 132
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 133,
                                "end": 140
                            },
                            "flags": 0,
                            "start": 132,
                            "end": 140
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 126,
                        "end": 140
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "untypedVal",
                            "rawText": "untypedVal",
                            "flags": 96,
                            "start": 141,
                            "end": 152
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 141,
                        "end": 152
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 125,
                "end": 153
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 155,
                    "end": 155
                },
                "flags": 32,
                "start": 153,
                "end": 156
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 111,
            "end": 156
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 156,
                "end": 165
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo5",
                "rawText": "foo5",
                "flags": 96,
                "start": 165,
                "end": 170
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "untypedVal",
                            "rawText": "untypedVal",
                            "flags": 96,
                            "start": 171,
                            "end": 181
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 171,
                        "end": 181
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 182,
                            "end": 189
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 190,
                                "end": 197
                            },
                            "flags": 0,
                            "start": 189,
                            "end": 197
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 182,
                        "end": 197
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 170,
                "end": 198
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 200,
                    "end": 200
                },
                "flags": 32,
                "start": 198,
                "end": 201
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 156,
            "end": 201
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 201,
                "end": 210
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo6",
                "rawText": "foo6",
                "flags": 96,
                "start": 210,
                "end": 215
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "nullableNum",
                            "rawText": "nullableNum",
                            "flags": 96,
                            "start": 216,
                            "end": 227
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 228,
                                    "end": 230
                                },
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 230,
                                    "end": 236
                                },
                                "flags": 0,
                                "start": 228,
                                "end": 236
                            },
                            "flags": 0,
                            "start": 227,
                            "end": 236
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 216,
                        "end": 236
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 215,
                "end": 237
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 239,
                    "end": 239
                },
                "flags": 32,
                "start": 237,
                "end": 240
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 201,
            "end": 240
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 240,
                "end": 249
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo7",
                "rawText": "foo7",
                "flags": 96,
                "start": 249,
                "end": 254
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 255,
                            "end": 263
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 267,
                                    "end": 270
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 266,
                                    "end": 266
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 270,
                                    "end": 275
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 264,
                                "end": 275
                            },
                            "flags": 0,
                            "start": 263,
                            "end": 275
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 255,
                        "end": 275
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 254,
                "end": 276
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 278,
                    "end": 278
                },
                "flags": 32,
                "start": 276,
                "end": 279
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 240,
            "end": 279
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 279,
                "end": 288
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo8",
                "rawText": "foo8",
                "flags": 96,
                "start": 288,
                "end": 293
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 294,
                            "end": 302
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 306,
                                    "end": 309
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 305,
                                    "end": 305
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 309,
                                    "end": 316
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 303,
                                "end": 316
                            },
                            "flags": 0,
                            "start": 302,
                            "end": 316
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 294,
                        "end": 316
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 293,
                "end": 317
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 319,
                    "end": 319
                },
                "flags": 32,
                "start": 317,
                "end": 320
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 279,
            "end": 320
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 320,
                "end": 329
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo9",
                "rawText": "foo9",
                "flags": 96,
                "start": 329,
                "end": 334
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 335,
                            "end": 343
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 354,
                                    "end": 357
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 346,
                                                "end": 347
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "bool",
                                                    "rawText": "bool",
                                                    "flags": 96,
                                                    "start": 348,
                                                    "end": 353
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 348,
                                                "end": 353
                                            },
                                            "flags": 0,
                                            "start": 346,
                                            "end": 353
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 346,
                                    "end": 353
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 357,
                                    "end": 364
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 344,
                                "end": 364
                            },
                            "flags": 0,
                            "start": 343,
                            "end": 364
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 335,
                        "end": 364
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 334,
                "end": 365
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 367,
                    "end": 367
                },
                "flags": 32,
                "start": 365,
                "end": 368
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 320,
            "end": 368
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 368,
                "end": 377
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo10",
                "rawText": "foo10",
                "flags": 96,
                "start": 377,
                "end": 383
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 384,
                            "end": 392
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 416,
                                    "end": 419
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "start": 395,
                                                "end": 397
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "bool",
                                                    "rawText": "bool",
                                                    "flags": 96,
                                                    "start": 398,
                                                    "end": 403
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 398,
                                                "end": 403
                                            },
                                            "flags": 0,
                                            "start": 395,
                                            "end": 403
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_2",
                                                "rawText": "_2",
                                                "flags": 96,
                                                "start": 404,
                                                "end": 407
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 408,
                                                "end": 415
                                            },
                                            "flags": 0,
                                            "start": 404,
                                            "end": 415
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 395,
                                    "end": 415
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 419,
                                    "end": 426
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 393,
                                "end": 426
                            },
                            "flags": 0,
                            "start": 392,
                            "end": 426
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 384,
                        "end": 426
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 383,
                "end": 427
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 429,
                    "end": 429
                },
                "flags": 32,
                "start": 427,
                "end": 430
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 368,
            "end": 430
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 430,
                "end": 439
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo11",
                "rawText": "foo11",
                "flags": 96,
                "start": 439,
                "end": 445
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 446,
                            "end": 454
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 489,
                                    "end": 492
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "start": 457,
                                                "end": 459
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "bool",
                                                    "rawText": "bool",
                                                    "flags": 96,
                                                    "start": 460,
                                                    "end": 465
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 460,
                                                "end": 465
                                            },
                                            "flags": 0,
                                            "start": 457,
                                            "end": 465
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 466,
                                                "end": 470
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 470,
                                                "end": 473
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 96,
                                                    "start": 474,
                                                    "end": 480
                                                },
                                                "typeParameters": {
                                                    "kind": 266,
                                                    "parameters": [
                                                        {
                                                            "kind": 267,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 64,
                                                                "start": 481,
                                                                "end": 487
                                                            },
                                                            "flags": 0,
                                                            "start": 481,
                                                            "end": 487
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "start": 480,
                                                    "end": 488
                                                },
                                                "flags": 0,
                                                "start": 474,
                                                "end": 488
                                            },
                                            "flags": 0,
                                            "start": 466,
                                            "end": 488
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 457,
                                    "end": 488
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 492,
                                    "end": 499
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 455,
                                "end": 499
                            },
                            "flags": 0,
                            "start": 454,
                            "end": 499
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 446,
                        "end": 499
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 445,
                "end": 500
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 502,
                    "end": 502
                },
                "flags": 32,
                "start": 500,
                "end": 503
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 430,
            "end": 503
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 503,
                "end": 512
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo12",
                "rawText": "foo12",
                "flags": 96,
                "start": 512,
                "end": 518
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 518,
                "end": 520
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 529,
                    "end": 529
                },
                "flags": 32,
                "start": 528,
                "end": 530
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234345,
                    "flags": 64,
                    "start": 521,
                    "end": 528
                },
                "flags": 0,
                "start": 503,
                "end": 528
            },
            "flags": 16,
            "start": 503,
            "end": 530
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 530,
                "end": 539
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo13",
                "rawText": "foo13",
                "flags": 96,
                "start": 539,
                "end": 545
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 545,
                "end": 547
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
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 550,
                        "end": 553
                    },
                    "parameters": {
                        "kind": 208,
                        "functionTypeParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 549,
                        "end": 549
                    },
                    "returnType": {
                        "kind": 138477615,
                        "flags": 64,
                        "start": 553,
                        "end": 558
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 548,
                    "end": 558
                },
                "flags": 0,
                "start": 530,
                "end": 558
            },
            "flags": 16,
            "start": 530,
            "end": 561
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 561,
                "end": 570
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo14",
                "rawText": "foo14",
                "flags": 96,
                "start": 570,
                "end": 576
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 576,
                "end": 578
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 598,
                    "end": 598
                },
                "flags": 32,
                "start": 597,
                "end": 599
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 587,
                        "end": 590
                    },
                    "parameters": {
                        "kind": 208,
                        "functionTypeParameterList": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_",
                                    "rawText": "_",
                                    "flags": 96,
                                    "start": 580,
                                    "end": 581
                                },
                                "optionalToken": null,
                                "typeAnnotation": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "bool",
                                        "rawText": "bool",
                                        "flags": 96,
                                        "start": 582,
                                        "end": 586
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 582,
                                    "end": 586
                                },
                                "flags": 0,
                                "start": 580,
                                "end": 586
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 580,
                        "end": 586
                    },
                    "returnType": {
                        "kind": 134234345,
                        "flags": 64,
                        "start": 590,
                        "end": 597
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 579,
                    "end": 597
                },
                "flags": 0,
                "start": 561,
                "end": 597
            },
            "flags": 16,
            "start": 561,
            "end": 599
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 599,
                "end": 608
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo15",
                "rawText": "foo15",
                "flags": 96,
                "start": 608,
                "end": 614
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 614,
                "end": 616
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 637,
                    "end": 637
                },
                "flags": 32,
                "start": 636,
                "end": 638
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 626,
                        "end": 629
                    },
                    "parameters": {
                        "kind": 208,
                        "functionTypeParameterList": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_",
                                    "rawText": "_",
                                    "flags": 96,
                                    "start": 618,
                                    "end": 619
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 619,
                                    "end": 620
                                },
                                "typeAnnotation": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "bool",
                                        "rawText": "bool",
                                        "flags": 96,
                                        "start": 621,
                                        "end": 625
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 621,
                                    "end": 625
                                },
                                "flags": 0,
                                "start": 618,
                                "end": 625
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 618,
                        "end": 625
                    },
                    "returnType": {
                        "kind": 134234345,
                        "flags": 64,
                        "start": 629,
                        "end": 636
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 617,
                    "end": 636
                },
                "flags": 0,
                "start": 599,
                "end": 636
            },
            "flags": 16,
            "start": 599,
            "end": 638
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 638,
                "end": 647
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo16",
                "rawText": "foo16",
                "flags": 96,
                "start": 647,
                "end": 653
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 653,
                "end": 655
            },
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
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234353,
                    "properties": [],
                    "indexers": [],
                    "callProperties": [],
                    "internalSlots": [],
                    "flags": 0,
                    "start": 656,
                    "end": 659
                },
                "flags": 0,
                "start": 638,
                "end": 659
            },
            "flags": 16,
            "start": 638,
            "end": 662
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 662,
                "end": 671
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo17",
                "rawText": "foo17",
                "flags": 96,
                "start": 671,
                "end": 677
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 680,
                "end": 682
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 684,
                    "end": 684
                },
                "flags": 32,
                "start": 682,
                "end": 685
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 678,
                            "end": 679
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 678,
                        "end": 679
                    }
                ],
                "flags": 0,
                "start": 677,
                "end": 680
            },
            "returnType": null,
            "flags": 16,
            "start": 662,
            "end": 685
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 685,
                "end": 694
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo21",
                "rawText": "foo21",
                "flags": 96,
                "start": 694,
                "end": 700
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 702,
                                            "end": 703
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 702,
                                        "end": 703
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 702,
                                "end": 703
                            },
                            "flags": 32,
                            "start": 701,
                            "end": 704
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 707,
                                            "end": 709
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 710,
                                            "end": 717
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 707,
                                        "end": 717
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 705,
                                "end": 720
                            },
                            "flags": 0,
                            "start": 704,
                            "end": 720
                        },
                        "initializer": null,
                        "flags": 34,
                        "start": 701,
                        "end": 720
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 700,
                "end": 721
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 723,
                    "end": 723
                },
                "flags": 32,
                "start": 721,
                "end": 724
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 685,
            "end": 724
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 724,
                "end": 733
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo22",
                "rawText": "foo22",
                "flags": 96,
                "start": 733,
                "end": 739
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
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
                                            "start": 741,
                                            "end": 742
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 741,
                                        "end": 742
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 741,
                                "end": 742
                            },
                            "flags": 32,
                            "start": 740,
                            "end": 743
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 744,
                                    "end": 750
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 751,
                                                "end": 757
                                            },
                                            "flags": 0,
                                            "start": 751,
                                            "end": 757
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 750,
                                    "end": 758
                                },
                                "flags": 0,
                                "start": 744,
                                "end": 758
                            },
                            "flags": 0,
                            "start": 743,
                            "end": 758
                        },
                        "initializer": null,
                        "flags": 34,
                        "start": 740,
                        "end": 758
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 739,
                "end": 759
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 761,
                    "end": 761
                },
                "flags": 32,
                "start": 759,
                "end": 762
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 724,
            "end": 762
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 762,
                "end": 771
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo23",
                "rawText": "foo23",
                "flags": 96,
                "start": 771,
                "end": 777
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 778,
                            "end": 781
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "rest",
                            "rawText": "rest",
                            "flags": 96,
                            "start": 781,
                            "end": 785
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 786,
                                    "end": 792
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 793,
                                                "end": 799
                                            },
                                            "flags": 0,
                                            "start": 793,
                                            "end": 799
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 792,
                                    "end": 800
                                },
                                "flags": 0,
                                "start": 786,
                                "end": 800
                            },
                            "flags": 0,
                            "start": 785,
                            "end": 800
                        },
                        "initializer": null,
                        "flags": 34,
                        "start": 778,
                        "end": 800
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 777,
                "end": 801
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 803,
                    "end": 803
                },
                "flags": 32,
                "start": 801,
                "end": 804
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 762,
            "end": 804
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 804,
                "end": 813
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo27",
                "rawText": "foo27",
                "flags": 96,
                "start": 813,
                "end": 819
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 820,
                            "end": 826
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 827,
                                "end": 834
                            },
                            "flags": 0,
                            "start": 826,
                            "end": 834
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 836,
                            "end": 838
                        },
                        "flags": 34,
                        "start": 820,
                        "end": 838
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 819,
                "end": 839
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 841,
                    "end": 841
                },
                "flags": 32,
                "start": 839,
                "end": 842
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 804,
            "end": 842
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 842,
                "end": 851
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo28",
                "rawText": "foo28",
                "flags": 96,
                "start": 851,
                "end": 857
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 858,
                            "end": 864
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 864,
                            "end": 865
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 866,
                                "end": 873
                            },
                            "flags": 0,
                            "start": 865,
                            "end": 873
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 875,
                            "end": 877
                        },
                        "flags": 34,
                        "start": 858,
                        "end": 877
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 857,
                "end": 878
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 880,
                    "end": 880
                },
                "flags": 32,
                "start": 878,
                "end": 881
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 842,
            "end": 881
        }
    ],
    "isModule": false,
    "source": "function foo1(numVal: any) {}\nfunction foo2(numVal: number) {}\nfunction foo3(numVal: number, strVal: string) {}\nfunction foo4(numVal: number, untypedVal) {}\nfunction foo5(untypedVal, numVal: number) {}\nfunction foo6(nullableNum: ?number) {}\nfunction foo7(callback: () => void) {}\nfunction foo8(callback: () => number) {}\nfunction foo9(callback: (_: bool) => number) {}\nfunction foo10(callback: (_1: bool, _2: string) => number) {}\nfunction foo11(callback: (_1: bool, ...foo: Array<number>) => number) {}\nfunction foo12(): number{}\nfunction foo13():() => void {}\nfunction foo14():(_:bool) => number{}\nfunction foo15():(_?:bool) => number{}\nfunction foo16(): {} {}\nfunction foo17<T>() {}\nfunction foo21({x}: { x: string; }) {}\nfunction foo22([x]: Array<string>) {}\nfunction foo23(...rest: Array<number>) {}\nfunction foo27(numVal: number = 2) {}\nfunction foo28(numVal?: number = 2) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 881
}
```

### Printed

```javascript

function foo1(numVal) {}
function foo2(numVal) {}
function foo3(numVal, strVal) {}
function foo4(numVal, untypedVal) {}
function foo5(untypedVal, numVal) {}
function foo6(nullableNum) {}
function foo7(callback) {}
function foo8(callback) {}
function foo9(callback) {}
function foo10(callback) {}
function foo11(callback) {}
function foo12() {}
function foo13() {}
function foo14() {}
function foo15() {}
function foo16() {}
function foo17() {}
function foo21({
  x
}) {}
function foo22([x]) {}
function foo23(...rest) {}
function foo27(numVal = 2) {}
function foo28(numVal? = 2) {}
```

### Diagnostics

```javascript
✔ No errors
```

