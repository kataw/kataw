# Kataw parser test case

## Input

`````js
	class one { ['constructor'] = 0 }
	class two { ['constructor']() {} }
	class three { *['constructor']() {} }
	class four { get ['constructor']() {} }
	class five { set ['constructor'](x) {} }
	class six { async ['constructor']() {} }

	class seven { static ['constructor'] = 0 }
	class eigth { static ['constructor']() {} }
	class nine { static *['constructor']() {} }
	class ten { static get ['constructor']() {} }
	class eleven { static set ['constructor'](x) {} }
	class twelve { static async ['constructor']() {} }
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
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "transformFlags": 0,
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 27
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 12,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 32
                },
                "flags": 10,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 34,
                "end": 41
            },
            "name": {
                "kind": 134299649,
                "text": "two",
                "rawText": "two",
                "flags": 96,
                "transformFlags": 0,
                "start": 41,
                "end": 45
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 62
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 64,
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
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 68
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 68
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 68
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 68
                },
                "flags": 45,
                "transformFlags": 0,
                "start": 32,
                "end": 70
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 34,
            "end": 70
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 70,
                "end": 77
            },
            "name": {
                "kind": 134299649,
                "text": "three",
                "rawText": "three",
                "flags": 96,
                "transformFlags": 0,
                "start": 77,
                "end": 83
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 85,
                                "end": 87
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 101
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 102
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 103,
                                    "end": 104
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 106,
                                        "end": 106
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 104,
                                    "end": 107
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 107
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 107
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 107
                },
                "flags": 83,
                "transformFlags": 0,
                "start": 32,
                "end": 109
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 70,
            "end": 109
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 109,
                "end": 116
            },
            "name": {
                "kind": 134299649,
                "text": "four",
                "rawText": "four",
                "flags": 96,
                "transformFlags": 0,
                "start": 116,
                "end": 121
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 127
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 129,
                                        "end": 142
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 127,
                                    "end": 143
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 144,
                                    "end": 145
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 147
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 145,
                                    "end": 148
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 148
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 148
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 148
                },
                "flags": 121,
                "transformFlags": 0,
                "start": 32,
                "end": 150
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 109,
            "end": 150
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 150,
                "end": 157
            },
            "name": {
                "kind": 134299649,
                "text": "five",
                "rawText": "five",
                "flags": 96,
                "transformFlags": 0,
                "start": 157,
                "end": 162
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 164,
                                "end": 168
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 170,
                                        "end": 183
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 168,
                                    "end": 184
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 185,
                                            "end": 186
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 185,
                                    "end": 187
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 189,
                                        "end": 189
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 187,
                                    "end": 190
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 184,
                                "end": 190
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 164,
                            "end": 190
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 190
                },
                "flags": 162,
                "transformFlags": 0,
                "start": 32,
                "end": 192
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 150,
            "end": 192
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 192,
                "end": 199
            },
            "name": {
                "kind": 134299649,
                "text": "six",
                "rawText": "six",
                "flags": 96,
                "transformFlags": 0,
                "start": 199,
                "end": 203
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
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 205,
                                "end": 211
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 213,
                                        "end": 226
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 211,
                                    "end": 227
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 228,
                                    "end": 229
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 231,
                                        "end": 231
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 229,
                                    "end": 232
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 227,
                                "end": 232
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 232
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 205,
                    "end": 232
                },
                "flags": 203,
                "transformFlags": 0,
                "start": 32,
                "end": 234
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 192,
            "end": 234
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 234,
                "end": 242
            },
            "name": {
                "kind": 134299649,
                "text": "seven",
                "rawText": "seven",
                "flags": 96,
                "transformFlags": 0,
                "start": 242,
                "end": 248
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 250,
                                "end": 257
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 272
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 273
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 275,
                                "end": 277
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 257,
                            "end": 277
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 250,
                    "end": 277
                },
                "flags": 248,
                "transformFlags": 0,
                "start": 32,
                "end": 279
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 234,
            "end": 279
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 279,
                "end": 286
            },
            "name": {
                "kind": 134299649,
                "text": "eigth",
                "rawText": "eigth",
                "flags": 96,
                "transformFlags": 0,
                "start": 286,
                "end": 292
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 294,
                                "end": 301
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 303,
                                        "end": 316
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 301,
                                    "end": 317
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 318,
                                    "end": 319
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 321,
                                        "end": 321
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 319,
                                    "end": 322
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 317,
                                "end": 322
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 301,
                            "end": 322
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 294,
                    "end": 322
                },
                "flags": 292,
                "transformFlags": 0,
                "start": 32,
                "end": 324
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 279,
            "end": 324
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 324,
                "end": 331
            },
            "name": {
                "kind": 134299649,
                "text": "nine",
                "rawText": "nine",
                "flags": 96,
                "transformFlags": 0,
                "start": 331,
                "end": 336
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 338,
                                "end": 345
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 345,
                                "end": 347
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 348,
                                        "end": 361
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 347,
                                    "end": 362
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 363,
                                    "end": 364
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 366,
                                        "end": 366
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 364,
                                    "end": 367
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 367
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 367
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 338,
                    "end": 367
                },
                "flags": 336,
                "transformFlags": 0,
                "start": 32,
                "end": 369
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 324,
            "end": 369
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 369,
                "end": 376
            },
            "name": {
                "kind": 134299649,
                "text": "ten",
                "rawText": "ten",
                "flags": 96,
                "transformFlags": 0,
                "start": 376,
                "end": 380
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 382,
                                "end": 389
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 389,
                                "end": 393
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 395,
                                        "end": 408
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 393,
                                    "end": 409
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 410,
                                    "end": 411
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 413,
                                        "end": 413
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 411,
                                    "end": 414
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 409,
                                "end": 414
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 389,
                            "end": 414
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 382,
                    "end": 414
                },
                "flags": 380,
                "transformFlags": 0,
                "start": 32,
                "end": 416
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 369,
            "end": 416
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 416,
                "end": 423
            },
            "name": {
                "kind": 134299649,
                "text": "eleven",
                "rawText": "eleven",
                "flags": 96,
                "transformFlags": 0,
                "start": 423,
                "end": 430
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 432,
                                "end": 439
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 439,
                                "end": 443
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 445,
                                        "end": 458
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 443,
                                    "end": 459
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 460,
                                            "end": 461
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 460,
                                    "end": 462
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 464,
                                        "end": 464
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 462,
                                    "end": 465
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 459,
                                "end": 465
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 439,
                            "end": 465
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 432,
                    "end": 465
                },
                "flags": 430,
                "transformFlags": 0,
                "start": 32,
                "end": 467
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 416,
            "end": 467
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 467,
                "end": 474
            },
            "name": {
                "kind": 134299649,
                "text": "twelve",
                "rawText": "twelve",
                "flags": 96,
                "transformFlags": 0,
                "start": 474,
                "end": 481
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 483,
                                "end": 490
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 490,
                                "end": 496
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "'constructor'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 498,
                                        "end": 511
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 496,
                                    "end": 512
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 513,
                                    "end": 514
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 516,
                                        "end": 516
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 514,
                                    "end": 517
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 512,
                                "end": 517
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 490,
                            "end": 517
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 483,
                    "end": 517
                },
                "flags": 481,
                "transformFlags": 0,
                "start": 32,
                "end": 519
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 467,
            "end": 519
        }
    ],
    "isModule": false,
    "source": "\tclass one { ['constructor'] = 0 }\n\tclass two { ['constructor']() {} }\n\tclass three { *['constructor']() {} }\n\tclass four { get ['constructor']() {} }\n\tclass five { set ['constructor'](x) {} }\n\tclass six { async ['constructor']() {} }\n\n\tclass seven { static ['constructor'] = 0 }\n\tclass eigth { static ['constructor']() {} }\n\tclass nine { static *['constructor']() {} }\n\tclass ten { static get ['constructor']() {} }\n\tclass eleven { static set ['constructor'](x) {} }\n\tclass twelve { static async ['constructor']() {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 519
}
```

### Printed

```javascript
class one {
  ["'constructor'"] = 0;
}
class two {
  ["'constructor'"]() {}
}

class three {
  *["'constructor'"]() {}
}

class four {
  get ["'constructor'"]() {}
}

class five {
  set ["'constructor'"](x) {}
}

class six {
  async ["'constructor'"]() {}
}

class seven {
  static ["'constructor'"] = 0;
}

class eigth {
  static ["'constructor'"]() {}
}

class nine {
  static *["'constructor'"]() {}
}

class ten {
  static get ["'constructor'"]() {}
}

class eleven {
  static set ["'constructor'"](x) {}
}

class twelve {
  static async ["'constructor'"]() {}
}

```

### Diagnostics

```javascript
✔ No errors
```

