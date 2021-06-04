# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js

(class C { get constructor() {}});

(class C {get constructor(_) {} });

(class C { get 'constructor'() {} });

(class C { get c\\u006fnstructor() {} });

(class C { get 'c\\u006fnstructor'() {} });

(class C { get 'c\\u006fnstructor'(_) {} });

(class C { *'c\\u006fnstructor'() {} });

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 2,
                        "end": 7
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
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
                                        "start": 11,
                                        "end": 15
                                    },
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 27
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 3072,
                                            "start": 28,
                                            "end": 29
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 32
                                        },
                                        "flags": 3072,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "flags": 3072,
                                    "start": 11,
                                    "end": 32
                                }
                            ],
                            "flags": 32,
                            "start": 11,
                            "end": 32
                        },
                        "flags": 9,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 38,
                        "end": 43
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 43,
                        "end": 45
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
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
                                        "start": 47,
                                        "end": 50
                                    },
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "start": 50,
                                            "end": 62
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "_",
                                                    "rawText": "_",
                                                    "flags": 96,
                                                    "start": 63,
                                                    "end": 64
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 3168,
                                            "start": 63,
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
                                                "start": 67,
                                                "end": 67
                                            },
                                            "flags": 32,
                                            "start": 65,
                                            "end": 68
                                        },
                                        "flags": 3072,
                                        "start": 62,
                                        "end": 68
                                    },
                                    "flags": 3072,
                                    "start": 47,
                                    "end": 68
                                }
                            ],
                            "flags": 32,
                            "start": 47,
                            "end": 68
                        },
                        "flags": 45,
                        "start": 32,
                        "end": 70
                    },
                    "flags": 32,
                    "start": 38,
                    "end": 70
                },
                "flags": 32,
                "start": 35,
                "end": 71
            },
            "flags": 16,
            "start": 35,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 75,
                        "end": 80
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 80,
                        "end": 82
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
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
                                        "start": 84,
                                        "end": 88
                                    },
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "constructor",
                                            "rawText": "'constructor'",
                                            "flags": 4194400,
                                            "start": 88,
                                            "end": 102
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 3072,
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
                                                "start": 106,
                                                "end": 106
                                            },
                                            "flags": 32,
                                            "start": 104,
                                            "end": 107
                                        },
                                        "flags": 3072,
                                        "start": 102,
                                        "end": 107
                                    },
                                    "flags": 3072,
                                    "start": 84,
                                    "end": 107
                                }
                            ],
                            "flags": 32,
                            "start": 84,
                            "end": 107
                        },
                        "flags": 82,
                        "start": 32,
                        "end": 109
                    },
                    "flags": 32,
                    "start": 75,
                    "end": 109
                },
                "flags": 32,
                "start": 72,
                "end": 110
            },
            "flags": 16,
            "start": 72,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 114,
                        "end": 119
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 119,
                        "end": 121
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
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
                                        "start": 123,
                                        "end": 127
                                    },
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 127,
                                            "end": 129
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 129,
                                            "end": 129
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 129,
                                                "end": 129
                                            },
                                            "flags": 32,
                                            "start": 129,
                                            "end": 129
                                        },
                                        "flags": 1024,
                                        "start": 129,
                                        "end": 129
                                    },
                                    "flags": 1024,
                                    "start": 123,
                                    "end": 129
                                }
                            ],
                            "flags": 32,
                            "start": 123,
                            "end": 129
                        },
                        "flags": 121,
                        "start": 32,
                        "end": 129
                    },
                    "flags": 32,
                    "start": 114,
                    "end": 129
                },
                "flags": 32,
                "start": 111,
                "end": 129
            },
            "flags": 16,
            "start": 111,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "onstructor",
                    "rawText": "\\u006fnstructor",
                    "flags": 96,
                    "start": 130,
                    "end": 145
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 146,
                    "end": 146
                },
                "flags": 268435488,
                "start": 130,
                "end": 147
            },
            "flags": 16,
            "start": 130,
            "end": 147
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 149,
                "end": 149
            },
            "flags": 16,
            "start": 147,
            "end": 150
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 153,
            "end": 154
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 157,
                        "end": 162
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 162,
                        "end": 164
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
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
                                        "start": 166,
                                        "end": 170
                                    },
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "c\\u006fnstructor",
                                            "rawText": "'c\\\\u006fnstructor'",
                                            "flags": 4194400,
                                            "start": 170,
                                            "end": 190
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 191,
                                            "end": 192
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 194,
                                                "end": 194
                                            },
                                            "flags": 32,
                                            "start": 192,
                                            "end": 195
                                        },
                                        "flags": 1024,
                                        "start": 190,
                                        "end": 195
                                    },
                                    "flags": 1024,
                                    "start": 166,
                                    "end": 195
                                }
                            ],
                            "flags": 32,
                            "start": 166,
                            "end": 195
                        },
                        "flags": 164,
                        "start": 32,
                        "end": 197
                    },
                    "flags": 32,
                    "start": 157,
                    "end": 197
                },
                "flags": 32,
                "start": 154,
                "end": 198
            },
            "flags": 16,
            "start": 154,
            "end": 199
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 202,
                        "end": 207
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 207,
                        "end": 209
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
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
                                        "start": 211,
                                        "end": 215
                                    },
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "c\\u006fnstructor",
                                            "rawText": "'c\\\\u006fnstructor'",
                                            "flags": 4194400,
                                            "start": 215,
                                            "end": 235
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "_",
                                                    "rawText": "_",
                                                    "flags": 96,
                                                    "start": 236,
                                                    "end": 237
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 1120,
                                            "start": 236,
                                            "end": 238
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 240,
                                                "end": 240
                                            },
                                            "flags": 32,
                                            "start": 238,
                                            "end": 241
                                        },
                                        "flags": 1024,
                                        "start": 235,
                                        "end": 241
                                    },
                                    "flags": 1024,
                                    "start": 211,
                                    "end": 241
                                }
                            ],
                            "flags": 32,
                            "start": 211,
                            "end": 241
                        },
                        "flags": 209,
                        "start": 32,
                        "end": 243
                    },
                    "flags": 32,
                    "start": 202,
                    "end": 243
                },
                "flags": 32,
                "start": 199,
                "end": 244
            },
            "flags": 16,
            "start": 199,
            "end": 245
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 248,
                        "end": 253
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 253,
                        "end": 255
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 257,
                                        "end": 259
                                    },
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "c\\u006fnstructor",
                                            "rawText": "'c\\\\u006fnstructor'",
                                            "flags": 4194400,
                                            "start": 259,
                                            "end": 278
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 279,
                                            "end": 280
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 282,
                                                "end": 282
                                            },
                                            "flags": 32,
                                            "start": 280,
                                            "end": 283
                                        },
                                        "flags": 0,
                                        "start": 278,
                                        "end": 283
                                    },
                                    "flags": 0,
                                    "start": 257,
                                    "end": 283
                                }
                            ],
                            "flags": 32,
                            "start": 257,
                            "end": 283
                        },
                        "flags": 255,
                        "start": 32,
                        "end": 285
                    },
                    "flags": 32,
                    "start": 248,
                    "end": 285
                },
                "flags": 32,
                "start": 245,
                "end": 286
            },
            "flags": 16,
            "start": 245,
            "end": 287
        }
    ],
    "isModule": false,
    "source": "\n(class C { get constructor() {}});\n\n(class C {get constructor(_) {} });\n\n(class C { get 'constructor'() {} });\n\n(class C { get c\\\\u006fnstructor() {} });\n\n(class C { get 'c\\\\u006fnstructor'() {} });\n\n(class C { get 'c\\\\u006fnstructor'(_) {} });\n\n(class C { *'c\\\\u006fnstructor'() {} });\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 288
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class constructor may not be a accessor - start: 27, end: 28
✖ Class constructor may not be a accessor - start: 62, end: 63
✖ A 'get' accessor cannot have parameters. - start: 63, end: 64
✖ Class constructor may not be a accessor - start: 102, end: 103
✖ Invalid hexadecimal escape sequence - start: 127, end: 129
✖ Invalid hexadecimal escape sequence - start: 129, end: 129
✖ Method definition expected - start: 129, end: 130
✖ Expected a `;` - start: 147, end: 149
✖ Declaration or statement expected - start: 150, end: 152
✖ Declaration or statement expected - start: 152, end: 153
✖ A 'get' accessor cannot have parameters. - start: 236, end: 237

```

