# Kataw parser test case

## Input

`````js
class One { ['prototype'] = 0 }
class Two { ['prototype']() {} }
class Three { *['prototype']() {} }
class Four { get ['prototype']() {} }
class Five { set ['prototype'](x) {} }
class Six { async ['prototype']() {} }

class Seven { static ['prototype'] = 0 }
class Eigth { static ['prototype']() {} }
class Nine { static *['prototype']() {} }
class Ten { static get ['prototype']() {} }
class Eleven { static set ['prototype'](x) {} }
class Twelve { static async ['prototype']() {} }
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
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "One",
                "rawText": "One",
                "flags": 96,
                "start": 5,
                "end": 9
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
                                    "kind": 201392131,
                                    "text": "prototype",
                                    "rawText": "'prototype'",
                                    "flags": 4194400,
                                    "start": 13,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 27,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 29
                },
                "flags": 9,
                "start": 32,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 31,
                "end": 37
            },
            "name": {
                "kind": 134299649,
                "text": "Two",
                "rawText": "Two",
                "flags": 96,
                "start": 37,
                "end": 41
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 45,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 57
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 58,
                                    "end": 59
                                },
                                "returnType": null,
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
                                "flags": 0,
                                "start": 57,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 43,
                            "end": 62
                        }
                    ],
                    "flags": 32,
                    "start": 43,
                    "end": 62
                },
                "flags": 41,
                "start": 32,
                "end": 64
            },
            "flags": 17,
            "start": 31,
            "end": 64
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 64,
                "end": 70
            },
            "name": {
                "kind": 134299649,
                "text": "Three",
                "rawText": "Three",
                "flags": 96,
                "start": 70,
                "end": 76
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
                                "start": 78,
                                "end": 80
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
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 81,
                                        "end": 92
                                    },
                                    "flags": 32,
                                    "start": 80,
                                    "end": 93
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 94,
                                    "end": 95
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 97,
                                        "end": 97
                                    },
                                    "flags": 32,
                                    "start": 95,
                                    "end": 98
                                },
                                "flags": 0,
                                "start": 93,
                                "end": 98
                            },
                            "flags": 0,
                            "start": 78,
                            "end": 98
                        }
                    ],
                    "flags": 32,
                    "start": 78,
                    "end": 98
                },
                "flags": 76,
                "start": 32,
                "end": 100
            },
            "flags": 17,
            "start": 64,
            "end": 100
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 100,
                "end": 106
            },
            "name": {
                "kind": 134299649,
                "text": "Four",
                "rawText": "Four",
                "flags": 96,
                "start": 106,
                "end": 111
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
                                "start": 113,
                                "end": 117
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 119,
                                        "end": 130
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 131
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 132,
                                    "end": 133
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 135,
                                        "end": 135
                                    },
                                    "flags": 32,
                                    "start": 133,
                                    "end": 136
                                },
                                "flags": 1024,
                                "start": 131,
                                "end": 136
                            },
                            "flags": 1024,
                            "start": 113,
                            "end": 136
                        }
                    ],
                    "flags": 32,
                    "start": 113,
                    "end": 136
                },
                "flags": 111,
                "start": 32,
                "end": 138
            },
            "flags": 17,
            "start": 100,
            "end": 138
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 138,
                "end": 144
            },
            "name": {
                "kind": 134299649,
                "text": "Five",
                "rawText": "Five",
                "flags": 96,
                "start": 144,
                "end": 149
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
                                "start": 151,
                                "end": 155
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 157,
                                        "end": 168
                                    },
                                    "flags": 32,
                                    "start": 155,
                                    "end": 169
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 170,
                                            "end": 171
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 170,
                                    "end": 172
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 174,
                                        "end": 174
                                    },
                                    "flags": 32,
                                    "start": 172,
                                    "end": 175
                                },
                                "flags": 512,
                                "start": 169,
                                "end": 175
                            },
                            "flags": 512,
                            "start": 151,
                            "end": 175
                        }
                    ],
                    "flags": 32,
                    "start": 151,
                    "end": 175
                },
                "flags": 149,
                "start": 32,
                "end": 177
            },
            "flags": 17,
            "start": 138,
            "end": 177
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 177,
                "end": 183
            },
            "name": {
                "kind": 134299649,
                "text": "Six",
                "rawText": "Six",
                "flags": 96,
                "start": 183,
                "end": 187
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
                                "start": 189,
                                "end": 195
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 197,
                                        "end": 208
                                    },
                                    "flags": 32,
                                    "start": 195,
                                    "end": 209
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 210,
                                    "end": 211
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 213,
                                        "end": 213
                                    },
                                    "flags": 32,
                                    "start": 211,
                                    "end": 214
                                },
                                "flags": 256,
                                "start": 209,
                                "end": 214
                            },
                            "flags": 256,
                            "start": 189,
                            "end": 214
                        }
                    ],
                    "flags": 32,
                    "start": 189,
                    "end": 214
                },
                "flags": 187,
                "start": 32,
                "end": 216
            },
            "flags": 17,
            "start": 177,
            "end": 216
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 216,
                "end": 223
            },
            "name": {
                "kind": 134299649,
                "text": "Seven",
                "rawText": "Seven",
                "flags": 96,
                "start": 223,
                "end": 229
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
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 231,
                                "end": 238
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "prototype",
                                    "rawText": "'prototype'",
                                    "flags": 4194400,
                                    "start": 240,
                                    "end": 251
                                },
                                "flags": 32,
                                "start": 238,
                                "end": 252
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 254,
                                "end": 256
                            },
                            "flags": 32,
                            "start": 238,
                            "end": 256
                        }
                    ],
                    "flags": 32,
                    "start": 231,
                    "end": 256
                },
                "flags": 229,
                "start": 32,
                "end": 258
            },
            "flags": 17,
            "start": 216,
            "end": 258
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 258,
                "end": 264
            },
            "name": {
                "kind": 134299649,
                "text": "Eigth",
                "rawText": "Eigth",
                "flags": 96,
                "start": 264,
                "end": 270
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
                                "start": 272,
                                "end": 279
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 281,
                                        "end": 292
                                    },
                                    "flags": 32,
                                    "start": 279,
                                    "end": 293
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 294,
                                    "end": 295
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 297,
                                        "end": 297
                                    },
                                    "flags": 32,
                                    "start": 295,
                                    "end": 298
                                },
                                "flags": 0,
                                "start": 293,
                                "end": 298
                            },
                            "flags": 0,
                            "start": 279,
                            "end": 298
                        }
                    ],
                    "flags": 32,
                    "start": 272,
                    "end": 298
                },
                "flags": 270,
                "start": 32,
                "end": 300
            },
            "flags": 17,
            "start": 258,
            "end": 300
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 300,
                "end": 306
            },
            "name": {
                "kind": 134299649,
                "text": "Nine",
                "rawText": "Nine",
                "flags": 96,
                "start": 306,
                "end": 311
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
                                "start": 320,
                                "end": 322
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 313,
                                "end": 320
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 323,
                                        "end": 334
                                    },
                                    "flags": 32,
                                    "start": 322,
                                    "end": 335
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 336,
                                    "end": 337
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 339,
                                        "end": 339
                                    },
                                    "flags": 32,
                                    "start": 337,
                                    "end": 340
                                },
                                "flags": 0,
                                "start": 335,
                                "end": 340
                            },
                            "flags": 0,
                            "start": 320,
                            "end": 340
                        }
                    ],
                    "flags": 32,
                    "start": 313,
                    "end": 340
                },
                "flags": 311,
                "start": 32,
                "end": 342
            },
            "flags": 17,
            "start": 300,
            "end": 342
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 342,
                "end": 348
            },
            "name": {
                "kind": 134299649,
                "text": "Ten",
                "rawText": "Ten",
                "flags": 96,
                "start": 348,
                "end": 352
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
                                "start": 354,
                                "end": 361
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 361,
                                "end": 365
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 367,
                                        "end": 378
                                    },
                                    "flags": 32,
                                    "start": 365,
                                    "end": 379
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 380,
                                    "end": 381
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 383,
                                        "end": 383
                                    },
                                    "flags": 32,
                                    "start": 381,
                                    "end": 384
                                },
                                "flags": 1024,
                                "start": 379,
                                "end": 384
                            },
                            "flags": 1024,
                            "start": 361,
                            "end": 384
                        }
                    ],
                    "flags": 32,
                    "start": 354,
                    "end": 384
                },
                "flags": 352,
                "start": 32,
                "end": 386
            },
            "flags": 17,
            "start": 342,
            "end": 386
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 386,
                "end": 392
            },
            "name": {
                "kind": 134299649,
                "text": "Eleven",
                "rawText": "Eleven",
                "flags": 96,
                "start": 392,
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
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 401,
                                "end": 408
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 408,
                                "end": 412
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 414,
                                        "end": 425
                                    },
                                    "flags": 32,
                                    "start": 412,
                                    "end": 426
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 427,
                                            "end": 428
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 427,
                                    "end": 429
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 431,
                                        "end": 431
                                    },
                                    "flags": 32,
                                    "start": 429,
                                    "end": 432
                                },
                                "flags": 512,
                                "start": 426,
                                "end": 432
                            },
                            "flags": 512,
                            "start": 408,
                            "end": 432
                        }
                    ],
                    "flags": 32,
                    "start": 401,
                    "end": 432
                },
                "flags": 399,
                "start": 32,
                "end": 434
            },
            "flags": 17,
            "start": 386,
            "end": 434
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 434,
                "end": 440
            },
            "name": {
                "kind": 134299649,
                "text": "Twelve",
                "rawText": "Twelve",
                "flags": 96,
                "start": 440,
                "end": 447
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
                                "start": 449,
                                "end": 456
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 456,
                                "end": 462
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "prototype",
                                        "rawText": "'prototype'",
                                        "flags": 4194400,
                                        "start": 464,
                                        "end": 475
                                    },
                                    "flags": 32,
                                    "start": 462,
                                    "end": 476
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 477,
                                    "end": 478
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 480,
                                        "end": 480
                                    },
                                    "flags": 32,
                                    "start": 478,
                                    "end": 481
                                },
                                "flags": 256,
                                "start": 476,
                                "end": 481
                            },
                            "flags": 256,
                            "start": 456,
                            "end": 481
                        }
                    ],
                    "flags": 32,
                    "start": 449,
                    "end": 481
                },
                "flags": 447,
                "start": 32,
                "end": 483
            },
            "flags": 17,
            "start": 434,
            "end": 483
        }
    ],
    "isModule": false,
    "source": "class One { ['prototype'] = 0 }\nclass Two { ['prototype']() {} }\nclass Three { *['prototype']() {} }\nclass Four { get ['prototype']() {} }\nclass Five { set ['prototype'](x) {} }\nclass Six { async ['prototype']() {} }\n\nclass Seven { static ['prototype'] = 0 }\nclass Eigth { static ['prototype']() {} }\nclass Nine { static *['prototype']() {} }\nclass Ten { static get ['prototype']() {} }\nclass Eleven { static set ['prototype'](x) {} }\nclass Twelve { static async ['prototype']() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 483
}
```

### Printed

```javascript

class One {
  ["'prototype'"] = 0;
}
class Two {
  ["'prototype'"]() {}
}
class Three {
  ["'prototype'"]() {}
}
class Four {
  get ["'prototype'"]() {}
}
class Five {
  set ["'prototype'"](x) {}
}
class Six {
  async ["'prototype'"]() {}
}
class Seven {
  static ["'prototype'"] = 0;
}
class Eigth {
  static static ["'prototype'"]() {}
}
class Nine {
  static static ["'prototype'"]() {}
}
class Ten {
  static get static ["'prototype'"]() {}
}
class Eleven {
  static set static ["'prototype'"](x) {}
}
class Twelve {
  async static static ["'prototype'"]() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

