# Kataw parser test case

## Input

`````js
let f = (/* ... */) => {}
(function (/* ... */) {})(/* ... */)
function fx(/* ... */) {}

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
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 9
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 25
            },
            "flags": 33554448,
            "transformFlags": 0,
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
                            "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 49,
                                "end": 49
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 50
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 50
                    },
                    "flags": 25,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 51
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 52
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 25,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 62,
                "end": 71
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "fx",
                "rawText": "fx",
                "flags": 96,
                "transformFlags": 0,
                "start": 71,
                "end": 74
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 75,
                "end": 75
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 87
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 85,
                "end": 88
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 62,
            "end": 88
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 88,
                "end": 95
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
                            "transformFlags": 0,
                            "start": 95,
                            "end": 99
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
                                                "transformFlags": 0,
                                                "start": 103,
                                                "end": 107
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 108,
                                                "end": 118
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
                                                    "start": 120,
                                                    "end": 120
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 118,
                                                "end": 121
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 107,
                                            "end": 121
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 103,
                                        "end": 121
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 126
                                        },
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 129,
                                                "end": 129
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 139,
                                                "end": 142
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 144,
                                                    "end": 144
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 142,
                                                "end": 145
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 127,
                                            "end": 145
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 122,
                                        "end": 145
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 146,
                                            "end": 150
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 151,
                                                "end": 160
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 161,
                                                "end": 161
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 173,
                                                    "end": 173
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 171,
                                                "end": 174
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 151,
                                            "end": 174
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 146,
                                        "end": 174
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 175,
                                            "end": 179
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 180,
                                                "end": 189
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 189,
                                                "end": 191
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 192,
                                                "end": 192
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 204,
                                                    "end": 204
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 202,
                                                "end": 205
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 180,
                                            "end": 205
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 175,
                                        "end": 205
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 103,
                                "end": 205
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 101,
                            "end": 207
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 95,
                        "end": 207
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 95,
                "end": 207
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 88,
            "end": 207
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 207,
                "end": 214
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 214,
                "end": 218
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
                                    "transformFlags": 0,
                                    "start": 220,
                                    "end": 224
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 225,
                                    "end": 235
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
                                        "start": 237,
                                        "end": 237
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 235,
                                    "end": 238
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 224,
                                "end": 238
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 220,
                            "end": 238
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
                                "transformFlags": 0,
                                "start": 238,
                                "end": 242
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
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 246,
                                    "end": 246
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 256,
                                    "end": 259
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 261,
                                        "end": 261
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 262
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 244,
                                "end": 262
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 238,
                            "end": 262
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 262,
                                "end": 271
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
                                    "transformFlags": 0,
                                    "start": 271,
                                    "end": 273
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 274,
                                    "end": 283
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
                                        "start": 285,
                                        "end": 285
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 283,
                                    "end": 286
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 286
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 271,
                            "end": 286
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 286,
                                "end": 295
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 297
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
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 301,
                                    "end": 301
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 311,
                                    "end": 314
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 316,
                                        "end": 316
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 314,
                                    "end": 317
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 299,
                                "end": 317
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 295,
                            "end": 317
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 317,
                                "end": 326
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 326,
                                "end": 328
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 330,
                                    "end": 339
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 340,
                                    "end": 340
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 352,
                                        "end": 352
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 350,
                                    "end": 353
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 330,
                                "end": 353
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 326,
                            "end": 353
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 353,
                                "end": 362
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 364
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 366,
                                    "end": 375
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 375,
                                    "end": 377
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 378,
                                    "end": 378
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 390,
                                        "end": 390
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 388,
                                    "end": 391
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 366,
                                "end": 391
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 362,
                            "end": 391
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 220,
                    "end": 391
                },
                "flags": 218,
                "transformFlags": 0,
                "start": 32,
                "end": 393
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 207,
            "end": 393
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
                    "transformFlags": 0,
                    "start": 393,
                    "end": 396
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 397,
                    "end": 397
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 393,
                "end": 407
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 393,
            "end": 408
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
                    "transformFlags": 0,
                    "start": 408,
                    "end": 410
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 411,
                            "end": 412
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 411,
                    "end": 413
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 408,
                "end": 424
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 408,
            "end": 425
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
                    "transformFlags": 0,
                    "start": 425,
                    "end": 427
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 428,
                            "end": 429
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 430,
                            "end": 442
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 428,
                    "end": 442
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 425,
                "end": 443
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 425,
            "end": 444
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
                    "transformFlags": 0,
                    "start": 444,
                    "end": 446
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 447,
                            "end": 458
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 459,
                            "end": 461
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 447,
                    "end": 461
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 444,
                "end": 462
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 444,
            "end": 463
        }
    ],
    "isModule": false,
    "source": "let f = (/* ... */) => {}\n(function (/* ... */) {})(/* ... */)\nfunction fx(/* ... */) {}\n\nconst obj = {\n  f(/* ... */) {},\n  f: (/* ... */) => {},\n  f: function(/* ... */) {},\n  f: function f(/* ... */) {}\n}\n\nclass Foo {\n  f(/* ... */) {}\n  f = (/* ... */) => {}\n  static f(/* .. */) {}\n  static f = (/* ... */) => {}\n  static f = function(/* ... */) {}\n  static f = function f(/* ... */) {}\n}\n\nf(/* ... */);\nf(a, /* ... */);\nf(a, /* ... */ b);\nf(/* ... */ a, b);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 463
}
```

### Printed

```javascript
let f = (/* ... */ ) => {};
(function (/* ... */ ) {})(/* ... */ );

function fx(/* ... */ ) {}

const obj = {
    f(/* ... */ ) {},
    f: (/* ... */ ) => {},
    f: function (/* ... */ ) {},
    f: function f(/* ... */ ) {}
  };

class Foo {
  f(/* ... */ ) {}
  f = (/* ... */ ) => {};
  static f(/* .. */ ) {}
  static f = (/* ... */ ) => {};
  static f = function (/* ... */ ) {};
  static f = function f(/* ... */ ) {};
}

f(/* ... */ );

f(a);

f(a, /* ... */ b);

f(/* ... */ a, b);

```

### Diagnostics

```javascript
✔ No errors
```

