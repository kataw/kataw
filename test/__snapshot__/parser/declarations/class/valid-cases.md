# Kataw parser test case

## Input

`````js
	class One { foo() {} }
	class Two { *foo() {} }
	class Three { get foo() {} }
	class Four { set foo(x) {} }
	class Five { static foo() {} }
	class Six { static *foo() {} }
	class Seven { static get foo() {} }
	class Eigth { static set foo(x) {} }
	class Nine { async foo() {} }
	class Ten { static async foo() {} }
	class Eleven { static async *foo() {} }

	class Twelwe { if() {} }
	class Thirteen { *if() {} }
	class Fourtin { get if() {} }
	class Fiveteen { set if(x) {} }
	class Sixteen { static if() {} }
	class Seventeen { static *if() {} }
	class Eigtheen { static async *if() {} }

	class Nineteen { a() {} b() {} }
	class Twenty { a() {} get b() {} }
	class Twentyone { a() {} set b(x) {} }
	class Twentytwo { a() {} static b() {} }
	class TwentyThree { a() {} static async *b() {} }

  class TwentyFour { [arguments] }
  class TwentySix { arguments = 1 }

  class TwentySeven { static get 'constructor'() {} }
  class TwentyEigth { *['constructor']() {} }

  class TwentyNine { async 'prototype'() {} }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "One",
                "rawText": "One",
                "flags": 96,
                "start": 6,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 18
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 21
                                },
                                "flags": 0,
                                "start": 16,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 21
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 21
                },
                "flags": 10,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 23,
                "end": 30
            },
            "name": {
                "kind": 134299649,
                "text": "Two",
                "rawText": "Two",
                "flags": 96,
                "start": 30,
                "end": 34
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 36,
                                "end": 38
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 41
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 42,
                                    "end": 43
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 46
                                },
                                "flags": 0,
                                "start": 41,
                                "end": 46
                            },
                            "flags": 0,
                            "start": 36,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "start": 36,
                    "end": 46
                },
                "flags": 34,
                "start": 32,
                "end": 48
            },
            "flags": 17,
            "start": 23,
            "end": 48
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 48,
                "end": 55
            },
            "name": {
                "kind": 134299649,
                "text": "Three",
                "rawText": "Three",
                "flags": 96,
                "start": 55,
                "end": 61
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 63,
                                "end": 67
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 67,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 72,
                                    "end": 73
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 75,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "start": 73,
                                    "end": 76
                                },
                                "flags": 1024,
                                "start": 71,
                                "end": 76
                            },
                            "flags": 1024,
                            "start": 63,
                            "end": 76
                        }
                    ],
                    "flags": 32,
                    "start": 63,
                    "end": 76
                },
                "flags": 61,
                "start": 32,
                "end": 78
            },
            "flags": 17,
            "start": 48,
            "end": 78
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 78,
                "end": 85
            },
            "name": {
                "kind": 134299649,
                "text": "Four",
                "rawText": "Four",
                "flags": 96,
                "start": 85,
                "end": 90
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 92,
                                "end": 96
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 96,
                                    "end": 100
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 101,
                                            "end": 102
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 101,
                                    "end": 103
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 105,
                                        "end": 105
                                    },
                                    "flags": 32,
                                    "start": 103,
                                    "end": 106
                                },
                                "flags": 512,
                                "start": 100,
                                "end": 106
                            },
                            "flags": 512,
                            "start": 92,
                            "end": 106
                        }
                    ],
                    "flags": 32,
                    "start": 92,
                    "end": 106
                },
                "flags": 90,
                "start": 32,
                "end": 108
            },
            "flags": 17,
            "start": 78,
            "end": 108
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 108,
                "end": 115
            },
            "name": {
                "kind": 134299649,
                "text": "Five",
                "rawText": "Five",
                "flags": 96,
                "start": 115,
                "end": 120
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 122,
                                "end": 129
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 129,
                                    "end": 133
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 134,
                                    "end": 135
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 137,
                                        "end": 137
                                    },
                                    "flags": 32,
                                    "start": 135,
                                    "end": 138
                                },
                                "flags": 0,
                                "start": 133,
                                "end": 138
                            },
                            "flags": 0,
                            "start": 129,
                            "end": 138
                        }
                    ],
                    "flags": 32,
                    "start": 122,
                    "end": 138
                },
                "flags": 120,
                "start": 32,
                "end": 140
            },
            "flags": 17,
            "start": 108,
            "end": 140
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 140,
                "end": 147
            },
            "name": {
                "kind": 134299649,
                "text": "Six",
                "rawText": "Six",
                "flags": 96,
                "start": 147,
                "end": 151
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 160,
                                "end": 162
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 153,
                                "end": 160
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 162,
                                    "end": 165
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 166,
                                    "end": 167
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 169,
                                        "end": 169
                                    },
                                    "flags": 32,
                                    "start": 167,
                                    "end": 170
                                },
                                "flags": 0,
                                "start": 165,
                                "end": 170
                            },
                            "flags": 0,
                            "start": 160,
                            "end": 170
                        }
                    ],
                    "flags": 32,
                    "start": 153,
                    "end": 170
                },
                "flags": 151,
                "start": 32,
                "end": 172
            },
            "flags": 17,
            "start": 140,
            "end": 172
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 172,
                "end": 179
            },
            "name": {
                "kind": 134299649,
                "text": "Seven",
                "rawText": "Seven",
                "flags": 96,
                "start": 179,
                "end": 185
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 187,
                                "end": 194
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 194,
                                "end": 198
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 198,
                                    "end": 202
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 203,
                                    "end": 204
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 206,
                                        "end": 206
                                    },
                                    "flags": 32,
                                    "start": 204,
                                    "end": 207
                                },
                                "flags": 1024,
                                "start": 202,
                                "end": 207
                            },
                            "flags": 1024,
                            "start": 194,
                            "end": 207
                        }
                    ],
                    "flags": 32,
                    "start": 187,
                    "end": 207
                },
                "flags": 185,
                "start": 32,
                "end": 209
            },
            "flags": 17,
            "start": 172,
            "end": 209
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 209,
                "end": 216
            },
            "name": {
                "kind": 134299649,
                "text": "Eigth",
                "rawText": "Eigth",
                "flags": 96,
                "start": 216,
                "end": 222
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 224,
                                "end": 231
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 231,
                                "end": 235
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 235,
                                    "end": 239
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 240,
                                            "end": 241
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 240,
                                    "end": 242
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 244,
                                        "end": 244
                                    },
                                    "flags": 32,
                                    "start": 242,
                                    "end": 245
                                },
                                "flags": 512,
                                "start": 239,
                                "end": 245
                            },
                            "flags": 512,
                            "start": 231,
                            "end": 245
                        }
                    ],
                    "flags": 32,
                    "start": 224,
                    "end": 245
                },
                "flags": 222,
                "start": 32,
                "end": 247
            },
            "flags": 17,
            "start": 209,
            "end": 247
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 247,
                "end": 254
            },
            "name": {
                "kind": 134299649,
                "text": "Nine",
                "rawText": "Nine",
                "flags": 96,
                "start": 254,
                "end": 259
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 261,
                                "end": 267
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 267,
                                    "end": 271
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 272,
                                    "end": 273
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 275,
                                        "end": 275
                                    },
                                    "flags": 32,
                                    "start": 273,
                                    "end": 276
                                },
                                "flags": 256,
                                "start": 271,
                                "end": 276
                            },
                            "flags": 256,
                            "start": 261,
                            "end": 276
                        }
                    ],
                    "flags": 32,
                    "start": 261,
                    "end": 276
                },
                "flags": 259,
                "start": 32,
                "end": 278
            },
            "flags": 17,
            "start": 247,
            "end": 278
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 278,
                "end": 285
            },
            "name": {
                "kind": 134299649,
                "text": "Ten",
                "rawText": "Ten",
                "flags": 96,
                "start": 285,
                "end": 289
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 291,
                                "end": 298
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 298,
                                "end": 304
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 304,
                                    "end": 308
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 309,
                                    "end": 310
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 312,
                                        "end": 312
                                    },
                                    "flags": 32,
                                    "start": 310,
                                    "end": 313
                                },
                                "flags": 256,
                                "start": 308,
                                "end": 313
                            },
                            "flags": 256,
                            "start": 298,
                            "end": 313
                        }
                    ],
                    "flags": 32,
                    "start": 291,
                    "end": 313
                },
                "flags": 289,
                "start": 32,
                "end": 315
            },
            "flags": 17,
            "start": 278,
            "end": 315
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 315,
                "end": 322
            },
            "name": {
                "kind": 134299649,
                "text": "Eleven",
                "rawText": "Eleven",
                "flags": 96,
                "start": 322,
                "end": 329
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 344,
                                "end": 346
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 331,
                                "end": 338
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 338,
                                "end": 344
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 346,
                                    "end": 349
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "start": 350,
                                    "end": 351
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 353,
                                        "end": 353
                                    },
                                    "flags": 32,
                                    "start": 351,
                                    "end": 354
                                },
                                "flags": 384,
                                "start": 349,
                                "end": 354
                            },
                            "flags": 384,
                            "start": 338,
                            "end": 354
                        }
                    ],
                    "flags": 32,
                    "start": 331,
                    "end": 354
                },
                "flags": 329,
                "start": 32,
                "end": 356
            },
            "flags": 17,
            "start": 315,
            "end": 356
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 356,
                "end": 364
            },
            "name": {
                "kind": 134299649,
                "text": "Twelwe",
                "rawText": "Twelwe",
                "flags": 96,
                "start": 364,
                "end": 371
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 373,
                                    "end": 376
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 377,
                                    "end": 378
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 380,
                                        "end": 380
                                    },
                                    "flags": 32,
                                    "start": 378,
                                    "end": 381
                                },
                                "flags": 0,
                                "start": 376,
                                "end": 381
                            },
                            "flags": 0,
                            "start": 373,
                            "end": 381
                        }
                    ],
                    "flags": 32,
                    "start": 373,
                    "end": 381
                },
                "flags": 371,
                "start": 32,
                "end": 383
            },
            "flags": 17,
            "start": 356,
            "end": 383
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 383,
                "end": 390
            },
            "name": {
                "kind": 134299649,
                "text": "Thirteen",
                "rawText": "Thirteen",
                "flags": 96,
                "start": 390,
                "end": 399
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 401,
                                "end": 403
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 403,
                                    "end": 405
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 406,
                                    "end": 407
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 409,
                                        "end": 409
                                    },
                                    "flags": 32,
                                    "start": 407,
                                    "end": 410
                                },
                                "flags": 0,
                                "start": 405,
                                "end": 410
                            },
                            "flags": 0,
                            "start": 401,
                            "end": 410
                        }
                    ],
                    "flags": 32,
                    "start": 401,
                    "end": 410
                },
                "flags": 399,
                "start": 32,
                "end": 412
            },
            "flags": 17,
            "start": 383,
            "end": 412
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 412,
                "end": 419
            },
            "name": {
                "kind": 134299649,
                "text": "Fourtin",
                "rawText": "Fourtin",
                "flags": 96,
                "start": 419,
                "end": 427
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 429,
                                "end": 433
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 433,
                                    "end": 436
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 437,
                                    "end": 438
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 440,
                                        "end": 440
                                    },
                                    "flags": 32,
                                    "start": 438,
                                    "end": 441
                                },
                                "flags": 1024,
                                "start": 436,
                                "end": 441
                            },
                            "flags": 1024,
                            "start": 429,
                            "end": 441
                        }
                    ],
                    "flags": 32,
                    "start": 429,
                    "end": 441
                },
                "flags": 427,
                "start": 32,
                "end": 443
            },
            "flags": 17,
            "start": 412,
            "end": 443
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 443,
                "end": 450
            },
            "name": {
                "kind": 134299649,
                "text": "Fiveteen",
                "rawText": "Fiveteen",
                "flags": 96,
                "start": 450,
                "end": 459
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 461,
                                "end": 465
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 465,
                                    "end": 468
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 469,
                                            "end": 470
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 469,
                                    "end": 471
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 473,
                                        "end": 473
                                    },
                                    "flags": 32,
                                    "start": 471,
                                    "end": 474
                                },
                                "flags": 512,
                                "start": 468,
                                "end": 474
                            },
                            "flags": 512,
                            "start": 461,
                            "end": 474
                        }
                    ],
                    "flags": 32,
                    "start": 461,
                    "end": 474
                },
                "flags": 459,
                "start": 32,
                "end": 476
            },
            "flags": 17,
            "start": 443,
            "end": 476
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 476,
                "end": 483
            },
            "name": {
                "kind": 134299649,
                "text": "Sixteen",
                "rawText": "Sixteen",
                "flags": 96,
                "start": 483,
                "end": 491
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 493,
                                "end": 500
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 500,
                                    "end": 503
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 504,
                                    "end": 505
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 507,
                                        "end": 507
                                    },
                                    "flags": 32,
                                    "start": 505,
                                    "end": 508
                                },
                                "flags": 0,
                                "start": 503,
                                "end": 508
                            },
                            "flags": 0,
                            "start": 500,
                            "end": 508
                        }
                    ],
                    "flags": 32,
                    "start": 493,
                    "end": 508
                },
                "flags": 491,
                "start": 32,
                "end": 510
            },
            "flags": 17,
            "start": 476,
            "end": 510
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 510,
                "end": 517
            },
            "name": {
                "kind": 134299649,
                "text": "Seventeen",
                "rawText": "Seventeen",
                "flags": 96,
                "start": 517,
                "end": 527
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 536,
                                "end": 538
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 529,
                                "end": 536
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 538,
                                    "end": 540
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 541,
                                    "end": 542
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 544,
                                        "end": 544
                                    },
                                    "flags": 32,
                                    "start": 542,
                                    "end": 545
                                },
                                "flags": 0,
                                "start": 540,
                                "end": 545
                            },
                            "flags": 0,
                            "start": 536,
                            "end": 545
                        }
                    ],
                    "flags": 32,
                    "start": 529,
                    "end": 545
                },
                "flags": 527,
                "start": 32,
                "end": 547
            },
            "flags": 17,
            "start": 510,
            "end": 547
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 547,
                "end": 554
            },
            "name": {
                "kind": 134299649,
                "text": "Eigtheen",
                "rawText": "Eigtheen",
                "flags": 96,
                "start": 554,
                "end": 563
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 578,
                                "end": 580
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 565,
                                "end": 572
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 572,
                                "end": 578
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 580,
                                    "end": 582
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "start": 583,
                                    "end": 584
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 586,
                                        "end": 586
                                    },
                                    "flags": 32,
                                    "start": 584,
                                    "end": 587
                                },
                                "flags": 384,
                                "start": 582,
                                "end": 587
                            },
                            "flags": 384,
                            "start": 572,
                            "end": 587
                        }
                    ],
                    "flags": 32,
                    "start": 565,
                    "end": 587
                },
                "flags": 563,
                "start": 32,
                "end": 589
            },
            "flags": 17,
            "start": 547,
            "end": 589
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 589,
                "end": 597
            },
            "name": {
                "kind": 134299649,
                "text": "Nineteen",
                "rawText": "Nineteen",
                "flags": 96,
                "start": 597,
                "end": 606
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 608,
                                    "end": 610
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 611,
                                    "end": 612
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 614,
                                        "end": 614
                                    },
                                    "flags": 32,
                                    "start": 612,
                                    "end": 615
                                },
                                "flags": 0,
                                "start": 610,
                                "end": 615
                            },
                            "flags": 0,
                            "start": 608,
                            "end": 615
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 615,
                                    "end": 617
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 618,
                                    "end": 619
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 621,
                                        "end": 621
                                    },
                                    "flags": 32,
                                    "start": 619,
                                    "end": 622
                                },
                                "flags": 0,
                                "start": 617,
                                "end": 622
                            },
                            "flags": 0,
                            "start": 615,
                            "end": 622
                        }
                    ],
                    "flags": 32,
                    "start": 608,
                    "end": 622
                },
                "flags": 606,
                "start": 32,
                "end": 624
            },
            "flags": 17,
            "start": 589,
            "end": 624
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 624,
                "end": 631
            },
            "name": {
                "kind": 134299649,
                "text": "Twenty",
                "rawText": "Twenty",
                "flags": 96,
                "start": 631,
                "end": 638
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 640,
                                    "end": 642
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 643,
                                    "end": 644
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 646,
                                        "end": 646
                                    },
                                    "flags": 32,
                                    "start": 644,
                                    "end": 647
                                },
                                "flags": 0,
                                "start": 642,
                                "end": 647
                            },
                            "flags": 0,
                            "start": 640,
                            "end": 647
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 647,
                                "end": 651
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 651,
                                    "end": 653
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 654,
                                    "end": 655
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 657,
                                        "end": 657
                                    },
                                    "flags": 32,
                                    "start": 655,
                                    "end": 658
                                },
                                "flags": 1024,
                                "start": 653,
                                "end": 658
                            },
                            "flags": 1024,
                            "start": 647,
                            "end": 658
                        }
                    ],
                    "flags": 32,
                    "start": 640,
                    "end": 658
                },
                "flags": 638,
                "start": 32,
                "end": 660
            },
            "flags": 17,
            "start": 624,
            "end": 660
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 660,
                "end": 667
            },
            "name": {
                "kind": 134299649,
                "text": "Twentyone",
                "rawText": "Twentyone",
                "flags": 96,
                "start": 667,
                "end": 677
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 679,
                                    "end": 681
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 682,
                                    "end": 683
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 685,
                                        "end": 685
                                    },
                                    "flags": 32,
                                    "start": 683,
                                    "end": 686
                                },
                                "flags": 0,
                                "start": 681,
                                "end": 686
                            },
                            "flags": 0,
                            "start": 679,
                            "end": 686
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 686,
                                "end": 690
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 690,
                                    "end": 692
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 693,
                                            "end": 694
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 693,
                                    "end": 695
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 697,
                                        "end": 697
                                    },
                                    "flags": 32,
                                    "start": 695,
                                    "end": 698
                                },
                                "flags": 512,
                                "start": 692,
                                "end": 698
                            },
                            "flags": 512,
                            "start": 686,
                            "end": 698
                        }
                    ],
                    "flags": 32,
                    "start": 679,
                    "end": 698
                },
                "flags": 677,
                "start": 32,
                "end": 700
            },
            "flags": 17,
            "start": 660,
            "end": 700
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 700,
                "end": 707
            },
            "name": {
                "kind": 134299649,
                "text": "Twentytwo",
                "rawText": "Twentytwo",
                "flags": 96,
                "start": 707,
                "end": 717
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 719,
                                    "end": 721
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 722,
                                    "end": 723
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 725,
                                        "end": 725
                                    },
                                    "flags": 32,
                                    "start": 723,
                                    "end": 726
                                },
                                "flags": 0,
                                "start": 721,
                                "end": 726
                            },
                            "flags": 0,
                            "start": 719,
                            "end": 726
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 726,
                                "end": 733
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 733,
                                    "end": 735
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 736,
                                    "end": 737
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 739,
                                        "end": 739
                                    },
                                    "flags": 32,
                                    "start": 737,
                                    "end": 740
                                },
                                "flags": 0,
                                "start": 735,
                                "end": 740
                            },
                            "flags": 0,
                            "start": 733,
                            "end": 740
                        }
                    ],
                    "flags": 32,
                    "start": 719,
                    "end": 740
                },
                "flags": 717,
                "start": 32,
                "end": 742
            },
            "flags": 17,
            "start": 700,
            "end": 742
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 742,
                "end": 749
            },
            "name": {
                "kind": 134299649,
                "text": "TwentyThree",
                "rawText": "TwentyThree",
                "flags": 96,
                "start": 749,
                "end": 761
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 763,
                                    "end": 765
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 766,
                                    "end": 767
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 769,
                                        "end": 769
                                    },
                                    "flags": 32,
                                    "start": 767,
                                    "end": 770
                                },
                                "flags": 0,
                                "start": 765,
                                "end": 770
                            },
                            "flags": 0,
                            "start": 763,
                            "end": 770
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 783,
                                "end": 785
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 770,
                                "end": 777
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 777,
                                "end": 783
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 785,
                                    "end": 786
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "start": 787,
                                    "end": 788
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 790,
                                        "end": 790
                                    },
                                    "flags": 32,
                                    "start": 788,
                                    "end": 791
                                },
                                "flags": 384,
                                "start": 786,
                                "end": 791
                            },
                            "flags": 384,
                            "start": 777,
                            "end": 791
                        }
                    ],
                    "flags": 32,
                    "start": 763,
                    "end": 791
                },
                "flags": 761,
                "start": 32,
                "end": 793
            },
            "flags": 17,
            "start": 742,
            "end": 793
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 793,
                "end": 802
            },
            "name": {
                "kind": 134299649,
                "text": "TwentyFour",
                "rawText": "TwentyFour",
                "flags": 96,
                "start": 802,
                "end": 813
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 96,
                                    "start": 817,
                                    "end": 826
                                },
                                "flags": 32,
                                "start": 815,
                                "end": 827
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 815,
                            "end": 827
                        }
                    ],
                    "flags": 32,
                    "start": 815,
                    "end": 827
                },
                "flags": 813,
                "start": 32,
                "end": 829
            },
            "flags": 17,
            "start": 793,
            "end": 829
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 829,
                "end": 837
            },
            "name": {
                "kind": 134299649,
                "text": "TwentySix",
                "rawText": "TwentySix",
                "flags": 96,
                "start": 837,
                "end": 847
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "arguments",
                                "rawText": "arguments",
                                "flags": 96,
                                "start": 849,
                                "end": 859
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 861,
                                "end": 863
                            },
                            "flags": 32,
                            "start": 849,
                            "end": 863
                        }
                    ],
                    "flags": 32,
                    "start": 849,
                    "end": 863
                },
                "flags": 847,
                "start": 32,
                "end": 865
            },
            "flags": 17,
            "start": 829,
            "end": 865
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 865,
                "end": 874
            },
            "name": {
                "kind": 134299649,
                "text": "TwentySeven",
                "rawText": "TwentySeven",
                "flags": 96,
                "start": 874,
                "end": 886
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 888,
                                "end": 895
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 895,
                                "end": 899
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "start": 899,
                                    "end": 913
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 3072,
                                    "start": 914,
                                    "end": 915
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 917,
                                        "end": 917
                                    },
                                    "flags": 32,
                                    "start": 915,
                                    "end": 918
                                },
                                "flags": 3072,
                                "start": 913,
                                "end": 918
                            },
                            "flags": 3072,
                            "start": 895,
                            "end": 918
                        }
                    ],
                    "flags": 32,
                    "start": 888,
                    "end": 918
                },
                "flags": 886,
                "start": 32,
                "end": 920
            },
            "flags": 17,
            "start": 865,
            "end": 920
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 920,
                "end": 928
            },
            "name": {
                "kind": 134299649,
                "text": "TwentyEigth",
                "rawText": "TwentyEigth",
                "flags": 96,
                "start": 928,
                "end": 940
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 942,
                                "end": 944
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "start": 945,
                                        "end": 958
                                    },
                                    "flags": 32,
                                    "start": 944,
                                    "end": 959
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 960,
                                    "end": 961
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 963,
                                        "end": 963
                                    },
                                    "flags": 32,
                                    "start": 961,
                                    "end": 964
                                },
                                "flags": 0,
                                "start": 959,
                                "end": 964
                            },
                            "flags": 0,
                            "start": 942,
                            "end": 964
                        }
                    ],
                    "flags": 32,
                    "start": 942,
                    "end": 964
                },
                "flags": 940,
                "start": 32,
                "end": 966
            },
            "flags": 17,
            "start": 920,
            "end": 966
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 966,
                "end": 975
            },
            "name": {
                "kind": 134299649,
                "text": "TwentyNine",
                "rawText": "TwentyNine",
                "flags": 96,
                "start": 975,
                "end": 986
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 988,
                                "end": 994
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "prototype",
                                    "rawText": "'prototype'",
                                    "flags": 4194400,
                                    "start": 994,
                                    "end": 1006
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 1007,
                                    "end": 1008
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 1010,
                                        "end": 1010
                                    },
                                    "flags": 32,
                                    "start": 1008,
                                    "end": 1011
                                },
                                "flags": 256,
                                "start": 1006,
                                "end": 1011
                            },
                            "flags": 256,
                            "start": 988,
                            "end": 1011
                        }
                    ],
                    "flags": 32,
                    "start": 988,
                    "end": 1011
                },
                "flags": 986,
                "start": 32,
                "end": 1013
            },
            "flags": 17,
            "start": 966,
            "end": 1013
        }
    ],
    "isModule": false,
    "source": "\tclass One { foo() {} }\n\tclass Two { *foo() {} }\n\tclass Three { get foo() {} }\n\tclass Four { set foo(x) {} }\n\tclass Five { static foo() {} }\n\tclass Six { static *foo() {} }\n\tclass Seven { static get foo() {} }\n\tclass Eigth { static set foo(x) {} }\n\tclass Nine { async foo() {} }\n\tclass Ten { static async foo() {} }\n\tclass Eleven { static async *foo() {} }\n\n\tclass Twelwe { if() {} }\n\tclass Thirteen { *if() {} }\n\tclass Fourtin { get if() {} }\n\tclass Fiveteen { set if(x) {} }\n\tclass Sixteen { static if() {} }\n\tclass Seventeen { static *if() {} }\n\tclass Eigtheen { static async *if() {} }\n\n\tclass Nineteen { a() {} b() {} }\n\tclass Twenty { a() {} get b() {} }\n\tclass Twentyone { a() {} set b(x) {} }\n\tclass Twentytwo { a() {} static b() {} }\n\tclass TwentyThree { a() {} static async *b() {} }\n\n  class TwentyFour { [arguments] }\n  class TwentySix { arguments = 1 }\n\n  class TwentySeven { static get 'constructor'() {} }\n  class TwentyEigth { *['constructor']() {} }\n\n  class TwentyNine { async 'prototype'() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1013
}
```

### Printed

```javascript

class One {
  foo {}
}
class Two {
  foo {}
}
class Three {
  get foo {}
}
class Four {
  set foo {}
}
class Five {
  static static foo {}
}
class Six {
  static static foo {}
}
class Seven {
  static get static foo {}
}
class Eigth {
  static set static foo {}
}
class Nine {
  async foo {}
}
class Ten {
  async static static foo {}
}
class Eleven {
  async static static foo {}
}
class Twelwe {
  if {}
}
class Thirteen {
  if {}
}
class Fourtin {
  get if {}
}
class Fiveteen {
  set if {}
}
class Sixteen {
  static static if {}
}
class Seventeen {
  static static if {}
}
class Eigtheen {
  async static static if {}
}
class Nineteen {
  a {}
  b {}
}
class Twenty {
  a {}
  get b {}
}
class Twentyone {
  a {}
  set b {}
}
class Twentytwo {
  a {}
  static static b {}
}
class TwentyThree {
  a {}
  async static static b {}
}
class TwentyFour {
  [arguments];
}
class TwentySix {
  arguments = 1;
}
class TwentySeven {
  static get static "'constructor'" {}
}
class TwentyEigth {
  ["'constructor'"] {}
}
class TwentyNine {
  async "'prototype'" {}
}
```

### Diagnostics

```javascript
✔ No errors
```

