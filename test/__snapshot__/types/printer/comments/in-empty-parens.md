# Kataw parser test case

## Input

`````js
let f = (/* ... */) => {}
(function (/* ... */) {})(/* ... */)
function f(/* ... */) {}

const obj = {
  f(/* ... */) {},
  f: (/* ... */) => {},
  f: function(/* ... */) {},
  f: function f(/* ... */) {}
}

class Foo {
  f(/* ... */) {}
  f = (/* ... */) => {}
  static f(/* .. */) {}
  static f = (/* ... */) => {}
  static f = function(/* ... */) {}
  static f = function f(/* ... */) {}
}

f(/* ... */);
f(a, /* ... */);
f(a, /* ... */ b);
f(/* ... */ a, b);
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 9,
                                "end": 9
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 19,
                                "end": 22
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 25
            },
            "flags": 33554448,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 27,
                            "end": 35
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 37,
                            "end": 37
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 49,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 47,
                            "end": 50
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 27,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 51
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 52,
                    "end": 52
                },
                "flags": 268435488,
                "start": 25,
                "end": 62
            },
            "flags": 16,
            "start": 25,
            "end": 62
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 62,
                "end": 71
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 71,
                "end": 73
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 74,
                "end": 74
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 86,
                    "end": 86
                },
                "flags": 32,
                "start": 84,
                "end": 87
            },
            "returnType": null,
            "flags": 16,
            "start": 62,
            "end": 87
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 87,
                "end": 94
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 94,
                            "end": 98
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 97,
                                                "start": 102,
                                                "end": 106
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 107,
                                                "end": 117
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 119,
                                                    "end": 119
                                                },
                                                "flags": 32,
                                                "start": 117,
                                                "end": 120
                                            },
                                            "flags": 33,
                                            "start": 106,
                                            "end": 120
                                        },
                                        "flags": 32,
                                        "start": 102,
                                        "end": 120
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 97,
                                            "start": 121,
                                            "end": 125
                                        },
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 128,
                                                "end": 128
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 138,
                                                "end": 141
                                            },
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
                                                "end": 144
                                            },
                                            "flags": 32,
                                            "start": 126,
                                            "end": 144
                                        },
                                        "flags": 33,
                                        "start": 121,
                                        "end": 144
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 97,
                                            "start": 145,
                                            "end": 149
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 150,
                                                "end": 159
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 160,
                                                "end": 160
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 172,
                                                    "end": 172
                                                },
                                                "flags": 32,
                                                "start": 170,
                                                "end": 173
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 150,
                                            "end": 173
                                        },
                                        "flags": 33,
                                        "start": 145,
                                        "end": 173
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 97,
                                            "start": 174,
                                            "end": 178
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 179,
                                                "end": 188
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 188,
                                                "end": 190
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 191,
                                                "end": 191
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 203,
                                                    "end": 203
                                                },
                                                "flags": 32,
                                                "start": 201,
                                                "end": 204
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 179,
                                            "end": 204
                                        },
                                        "flags": 33,
                                        "start": 174,
                                        "end": 204
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 102,
                                "end": 204
                            },
                            "flags": 49,
                            "start": 100,
                            "end": 206
                        },
                        "flags": 16,
                        "start": 94,
                        "end": 206
                    }
                ],
                "flags": 16777232,
                "start": 94,
                "end": 206
            },
            "flags": 33554448,
            "start": 87,
            "end": 206
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 206,
                "end": 213
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 213,
                "end": 217
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
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 97,
                                    "start": 219,
                                    "end": 223
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 224,
                                    "end": 234
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 236,
                                        "end": 236
                                    },
                                    "flags": 32,
                                    "start": 234,
                                    "end": 237
                                },
                                "flags": 0,
                                "start": 223,
                                "end": 237
                            },
                            "flags": 0,
                            "start": 219,
                            "end": 237
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 97,
                                "start": 237,
                                "end": 241
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 245,
                                    "end": 245
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 255,
                                    "end": 258
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 260,
                                        "end": 260
                                    },
                                    "flags": 32,
                                    "start": 258,
                                    "end": 261
                                },
                                "flags": 32,
                                "start": 243,
                                "end": 261
                            },
                            "flags": 32,
                            "start": 237,
                            "end": 261
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 261,
                                "end": 270
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 270,
                                    "end": 272
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 273,
                                    "end": 282
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 284,
                                        "end": 284
                                    },
                                    "flags": 32,
                                    "start": 282,
                                    "end": 285
                                },
                                "flags": 0,
                                "start": 272,
                                "end": 285
                            },
                            "flags": 0,
                            "start": 270,
                            "end": 285
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 285,
                                "end": 294
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 294,
                                "end": 296
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 300,
                                    "end": 300
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 310,
                                    "end": 313
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 315,
                                        "end": 315
                                    },
                                    "flags": 32,
                                    "start": 313,
                                    "end": 316
                                },
                                "flags": 32,
                                "start": 298,
                                "end": 316
                            },
                            "flags": 32,
                            "start": 294,
                            "end": 316
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 316,
                                "end": 325
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 325,
                                "end": 327
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 329,
                                    "end": 338
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 339,
                                    "end": 339
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 351,
                                        "end": 351
                                    },
                                    "flags": 32,
                                    "start": 349,
                                    "end": 352
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 329,
                                "end": 352
                            },
                            "flags": 32,
                            "start": 325,
                            "end": 352
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 352,
                                "end": 361
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 361,
                                "end": 363
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 365,
                                    "end": 374
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 374,
                                    "end": 376
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 377,
                                    "end": 377
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 389,
                                        "end": 389
                                    },
                                    "flags": 32,
                                    "start": 387,
                                    "end": 390
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 365,
                                "end": 390
                            },
                            "flags": 32,
                            "start": 361,
                            "end": 390
                        }
                    ],
                    "flags": 32,
                    "start": 219,
                    "end": 390
                },
                "flags": 217,
                "start": 32,
                "end": 392
            },
            "flags": 17,
            "start": 206,
            "end": 392
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 392,
                    "end": 395
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 396,
                    "end": 396
                },
                "flags": 268435488,
                "start": 392,
                "end": 406
            },
            "flags": 16,
            "start": 392,
            "end": 407
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 407,
                    "end": 409
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 410,
                            "end": 411
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 410,
                    "end": 412
                },
                "flags": 268435488,
                "start": 407,
                "end": 423
            },
            "flags": 16,
            "start": 407,
            "end": 424
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 424,
                    "end": 426
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 427,
                            "end": 428
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 429,
                            "end": 441
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 427,
                    "end": 441
                },
                "flags": 268435488,
                "start": 424,
                "end": 442
            },
            "flags": 16,
            "start": 424,
            "end": 443
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 443,
                    "end": 445
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 446,
                            "end": 457
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 458,
                            "end": 460
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 446,
                    "end": 460
                },
                "flags": 268435488,
                "start": 443,
                "end": 461
            },
            "flags": 16,
            "start": 443,
            "end": 462
        }
    ],
    "isModule": false,
    "source": "let f = (/* ... */) => {}\n(function (/* ... */) {})(/* ... */)\nfunction f(/* ... */) {}\n\nconst obj = {\n  f(/* ... */) {},\n  f: (/* ... */) => {},\n  f: function(/* ... */) {},\n  f: function f(/* ... */) {}\n}\n\nclass Foo {\n  f(/* ... */) {}\n  f = (/* ... */) => {}\n  static f(/* .. */) {}\n  static f = (/* ... */) => {}\n  static f = function(/* ... */) {}\n  static f = function f(/* ... */) {}\n}\n\nf(/* ... */);\nf(a, /* ... */);\nf(a, /* ... */ b);\nf(/* ... */ a, b);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 462
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 71, end: 73

```

