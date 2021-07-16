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
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 25
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 14,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 26,
                "end": 29
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 29,
                "end": 38
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "transformFlags": 0,
                "start": 38,
                "end": 43
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 58
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 58
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 44,
                        "end": 58
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 44,
                "end": 58
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 61
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 59,
                "end": 62
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 62
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 62,
                "end": 71
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "transformFlags": 0,
                "start": 71,
                "end": 76
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 83
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 91
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 91
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 77,
                        "end": 91
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "strVal",
                            "rawText": "strVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 99
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 107
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 107
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 92,
                        "end": 107
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 77,
                "end": 107
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 110
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 108,
                "end": 111
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 62,
            "end": 111
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 111,
                "end": 120
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo4",
                "rawText": "foo4",
                "flags": 96,
                "transformFlags": 0,
                "start": 120,
                "end": 125
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 132
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 140
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 133,
                            "end": 140
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 126,
                        "end": 140
                    },
                    {
                        "kind": 134299649,
                        "text": "untypedVal",
                        "rawText": "untypedVal",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 141,
                        "end": 152
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 126,
                "end": 152
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 155
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 153,
                "end": 156
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 111,
            "end": 156
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 156,
                "end": 165
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo5",
                "rawText": "foo5",
                "flags": 96,
                "transformFlags": 0,
                "start": 165,
                "end": 170
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "untypedVal",
                        "rawText": "untypedVal",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 171,
                        "end": 181
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 182,
                            "end": 189
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 197
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 197
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 182,
                        "end": 197
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 171,
                "end": 197
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 200
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 198,
                "end": 201
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 156,
            "end": 201
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 201,
                "end": 210
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo6",
                "rawText": "foo6",
                "flags": 96,
                "transformFlags": 0,
                "start": 210,
                "end": 215
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "nullableNum",
                            "rawText": "nullableNum",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 216,
                            "end": 227
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 228,
                                    "end": 230
                                },
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 230,
                                    "end": 236
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 228,
                                "end": 236
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 228,
                            "end": 236
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 216,
                        "end": 236
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 216,
                "end": 236
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 239,
                    "end": 239
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 237,
                "end": 240
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 201,
            "end": 240
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 240,
                "end": 249
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo7",
                "rawText": "foo7",
                "flags": 96,
                "transformFlags": 0,
                "start": 249,
                "end": 254
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 255,
                            "end": 263
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 266,
                                    "end": 266
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 267,
                                    "end": 270
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "transformFlags": 8192,
                                        "start": 270,
                                        "end": 275
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 270,
                                    "end": 275
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 264,
                                "end": 275
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 264,
                            "end": 275
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 255,
                        "end": 275
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 255,
                "end": 275
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 278,
                    "end": 278
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 276,
                "end": 279
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 240,
            "end": 279
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 279,
                "end": 288
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo8",
                "rawText": "foo8",
                "flags": 96,
                "transformFlags": 0,
                "start": 288,
                "end": 293
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 294,
                            "end": 302
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 305,
                                    "end": 305
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 306,
                                    "end": 309
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 309,
                                        "end": 316
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 309,
                                    "end": 316
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 303,
                                "end": 316
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 303,
                            "end": 316
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 294,
                        "end": 316
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 294,
                "end": 316
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 319,
                    "end": 319
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 317,
                "end": 320
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 279,
            "end": 320
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 320,
                "end": 329
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo9",
                "rawText": "foo9",
                "flags": 96,
                "transformFlags": 0,
                "start": 329,
                "end": 334
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 335,
                            "end": 343
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 346,
                                                "end": 347
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "bool",
                                                        "rawText": "bool",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 348,
                                                        "end": 353
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 348,
                                                    "end": 353
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 348,
                                                "end": 353
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 344,
                                            "end": 353
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 344,
                                    "end": 353
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 354,
                                    "end": 357
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 357,
                                        "end": 364
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 357,
                                    "end": 364
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 344,
                                "end": 364
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 344,
                            "end": 364
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 335,
                        "end": 364
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 335,
                "end": 364
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 367
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 365,
                "end": 368
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 320,
            "end": 368
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 368,
                "end": 377
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo10",
                "rawText": "foo10",
                "flags": 96,
                "transformFlags": 0,
                "start": 377,
                "end": 383
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 384,
                            "end": 392
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 395,
                                                "end": 397
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "bool",
                                                        "rawText": "bool",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 398,
                                                        "end": 403
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 398,
                                                    "end": 403
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 398,
                                                "end": 403
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 393,
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
                                                "transformFlags": 0,
                                                "start": 404,
                                                "end": 407
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 408,
                                                    "end": 415
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 408,
                                                "end": 415
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 404,
                                            "end": 415
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 393,
                                    "end": 415
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 416,
                                    "end": 419
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 419,
                                        "end": 426
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 419,
                                    "end": 426
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 393,
                                "end": 426
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 393,
                            "end": 426
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 384,
                        "end": 426
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 384,
                "end": 426
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 429,
                    "end": 429
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 427,
                "end": 430
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 368,
            "end": 430
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 430,
                "end": 439
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo11",
                "rawText": "foo11",
                "flags": 96,
                "transformFlags": 0,
                "start": 439,
                "end": 445
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 446,
                            "end": 454
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 457,
                                                "end": 459
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "bool",
                                                        "rawText": "bool",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 460,
                                                        "end": 465
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 460,
                                                    "end": 465
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 460,
                                                "end": 465
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 455,
                                            "end": 465
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 466,
                                                "end": 470
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 470,
                                                "end": 473
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "Array",
                                                        "rawText": "Array",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 474,
                                                        "end": 480
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "typeInstantiations": {
                                                            "kind": 309,
                                                            "types": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 134234345,
                                                                        "flags": 2097216,
                                                                        "transformFlags": 0,
                                                                        "start": 481,
                                                                        "end": 487
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 481,
                                                                    "end": 487
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 481,
                                                            "end": 487
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 512,
                                                        "start": 480,
                                                        "end": 488
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 474,
                                                    "end": 488
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 474,
                                                "end": 488
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 466,
                                            "end": 488
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 455,
                                    "end": 488
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 489,
                                    "end": 492
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 492,
                                        "end": 499
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 492,
                                    "end": 499
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 455,
                                "end": 499
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 455,
                            "end": 499
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 446,
                        "end": 499
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 446,
                "end": 499
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 502,
                    "end": 502
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 500,
                "end": 503
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 430,
            "end": 503
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 503,
                "end": 512
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo12",
                "rawText": "foo12",
                "flags": 96,
                "transformFlags": 0,
                "start": 512,
                "end": 518
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 519,
                "end": 519
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 529,
                    "end": 529
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 528,
                "end": 530
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 521,
                    "end": 528
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 521,
                "end": 528
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 503,
            "end": 530
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 530,
                "end": 539
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo13",
                "rawText": "foo13",
                "flags": 96,
                "transformFlags": 0,
                "start": 539,
                "end": 545
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 546,
                "end": 546
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 560,
                    "end": 560
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 558,
                "end": 561
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 549,
                        "end": 549
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 550,
                        "end": 553
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "transformFlags": 8192,
                            "start": 553,
                            "end": 558
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 553,
                        "end": 558
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 548,
                    "end": 558
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 548,
                "end": 558
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 530,
            "end": 561
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 561,
                "end": 570
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo14",
                "rawText": "foo14",
                "flags": 96,
                "transformFlags": 0,
                "start": 570,
                "end": 576
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 577,
                "end": 577
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 598,
                    "end": 598
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 597,
                "end": 599
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_",
                                    "rawText": "_",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 580,
                                    "end": 581
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "bool",
                                            "rawText": "bool",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 582,
                                            "end": 586
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 582,
                                        "end": 586
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 582,
                                    "end": 586
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 579,
                                "end": 586
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 579,
                        "end": 586
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 587,
                        "end": 590
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 590,
                            "end": 597
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 590,
                        "end": 597
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 579,
                    "end": 597
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 579,
                "end": 597
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 561,
            "end": 599
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 599,
                "end": 608
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo15",
                "rawText": "foo15",
                "flags": 96,
                "transformFlags": 0,
                "start": 608,
                "end": 614
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 615,
                "end": 615
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 637,
                    "end": 637
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 636,
                "end": 638
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_",
                                    "rawText": "_",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 618,
                                    "end": 619
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 619,
                                    "end": 620
                                },
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "bool",
                                            "rawText": "bool",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 621,
                                            "end": 625
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 621,
                                        "end": 625
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 621,
                                    "end": 625
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 617,
                                "end": 625
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 617,
                        "end": 625
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 626,
                        "end": 629
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 629,
                            "end": 636
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 629,
                        "end": 636
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 617,
                    "end": 636
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 617,
                "end": 636
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 599,
            "end": 638
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 638,
                "end": 647
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo16",
                "rawText": "foo16",
                "flags": 96,
                "transformFlags": 0,
                "start": 647,
                "end": 653
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 654,
                "end": 654
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 661,
                    "end": 661
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 659,
                "end": 662
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 656,
                    "end": 659
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 656,
                "end": 659
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 638,
            "end": 662
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 662,
                "end": 671
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo17",
                "rawText": "foo17",
                "flags": 96,
                "transformFlags": 0,
                "start": 671,
                "end": 677
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 678,
                                "end": 679
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 678,
                            "end": 679
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 678,
                    "end": 679
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 677,
                "end": 680
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 681,
                "end": 681
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 684,
                    "end": 684
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 682,
                "end": 685
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 662,
            "end": 685
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 685,
                "end": 694
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo21",
                "rawText": "foo21",
                "flags": 96,
                "transformFlags": 0,
                "start": 694,
                "end": 700
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 702,
                                        "end": 703
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 702,
                                "end": 703
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 701,
                            "end": 704
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 707,
                                            "end": 709
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 710,
                                                "end": 717
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 710,
                                            "end": 717
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 707,
                                        "end": 718
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 705,
                                "end": 720
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 705,
                            "end": 720
                        },
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 701,
                        "end": 720
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 701,
                "end": 720
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 723,
                    "end": 723
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 721,
                "end": 724
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 685,
            "end": 724
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 724,
                "end": 733
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo22",
                "rawText": "foo22",
                "flags": 96,
                "transformFlags": 0,
                "start": 733,
                "end": 739
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 741,
                                        "end": 742
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 741,
                                "end": 742
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 740,
                            "end": 743
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 744,
                                    "end": 750
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 751,
                                                    "end": 757
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 751,
                                                "end": 757
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 751,
                                        "end": 757
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 750,
                                    "end": 758
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 744,
                                "end": 758
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 744,
                            "end": 758
                        },
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 740,
                        "end": 758
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 740,
                "end": 758
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 761,
                    "end": 761
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 759,
                "end": 762
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 724,
            "end": 762
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 762,
                "end": 771
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo23",
                "rawText": "foo23",
                "flags": 96,
                "transformFlags": 0,
                "start": 771,
                "end": 777
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 778,
                            "end": 781
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "rest",
                            "rawText": "rest",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 781,
                            "end": 785
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 786,
                                    "end": 792
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 793,
                                                    "end": 799
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 793,
                                                "end": 799
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 793,
                                        "end": 799
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 792,
                                    "end": 800
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 786,
                                "end": 800
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 786,
                            "end": 800
                        },
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 778,
                        "end": 800
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 778,
                "end": 800
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 803,
                    "end": 803
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 801,
                "end": 804
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 762,
            "end": 804
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 804,
                "end": 813
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo27",
                "rawText": "foo27",
                "flags": 96,
                "transformFlags": 0,
                "start": 813,
                "end": 819
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 820,
                            "end": 826
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 827,
                                "end": 834
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 827,
                            "end": 834
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 836,
                            "end": 838
                        },
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 820,
                        "end": 838
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 820,
                "end": 838
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 841,
                    "end": 841
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 839,
                "end": 842
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 804,
            "end": 842
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 842,
                "end": 851
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo28",
                "rawText": "foo28",
                "flags": 96,
                "transformFlags": 0,
                "start": 851,
                "end": 857
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 858,
                            "end": 864
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 864,
                            "end": 865
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 866,
                                "end": 873
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 866,
                            "end": 873
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 875,
                            "end": 877
                        },
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 858,
                        "end": 877
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 858,
                "end": 877
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 880,
                    "end": 880
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 878,
                "end": 881
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 842,
            "end": 881
        }
    ],
    "isModule": false,
    "source": "function foo1(numVal: any) {}\nfunction foo2(numVal: number) {}\nfunction foo3(numVal: number, strVal: string) {}\nfunction foo4(numVal: number, untypedVal) {}\nfunction foo5(untypedVal, numVal: number) {}\nfunction foo6(nullableNum: ?number) {}\nfunction foo7(callback: () => void) {}\nfunction foo8(callback: () => number) {}\nfunction foo9(callback: (_: bool) => number) {}\nfunction foo10(callback: (_1: bool, _2: string) => number) {}\nfunction foo11(callback: (_1: bool, ...foo: Array<number>) => number) {}\nfunction foo12(): number{}\nfunction foo13():() => void {}\nfunction foo14():(_:bool) => number{}\nfunction foo15():(_?:bool) => number{}\nfunction foo16(): {} {}\nfunction foo17<T>() {}\nfunction foo21({x}: { x: string; }) {}\nfunction foo22([x]: Array<string>) {}\nfunction foo23(...rest: Array<number>) {}\nfunction foo27(numVal: number = 2) {}\nfunction foo28(numVal?: number = 2) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 881
}
```

### Printed

```javascript
function foo1(numVal: any) {}
function foo2(numVal: number) {}

function foo3(numVal: number, strVal: string) {}

function foo4(numVal: number, untypedVal) {}

function foo5(untypedVal, numVal: number) {}

function foo6(nullableNum: ? number) {}

function foo7(callback: () => void) {}

function foo8(callback: () => number) {}

function foo9(callback: (_: bool) => number) {}

function foo10(callback: (_1: bool, _2: string) => number) {}

function foo11(callback: (_1: bool, ...foo: Array<number>) => number) {}

function foo12(): number {}

function foo13(): () => void {}

function foo14(): (_: bool) => number {}

function foo15(): (_?: bool) => number {}

function foo16(): {} {}

function foo17<T>() {}

function foo21({ x }: { x: string }) {}

function foo22([x]: Array<string>) {}

function foo23(...rest: Array<number>) {}

function foo27(numVal: number = 2) {}

function foo28(numVal? : number = 2) {}

```

### Diagnostics

```javascript
✔ No errors
```

