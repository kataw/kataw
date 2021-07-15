
# Kataw parser test case

## Input

`````js
if (x); else let y = x;

if (x); else function * f() {};

if (a) class A {};

if catch else;

if (x) break;

if (!a) return false;;

if (x) async function f(){};

if (x) function *f(){};

if (true) return
2 else {};

if (true) class C {};

if (true) const x = null;;

if (true) async function f() {  } else async function _f() {};

if (false) ; else let x;;

if (false) let
    [a] = 0;

if ([ x ] ||= [ 2 ]) { foo(); };

if ([ x ||= 2 ] = [ 2 ]) { foo(); };

if ({ x } ||= { x: 2 }) { foo(); };

if ({ x: x ||= 2 ] = { x: 2 }) { foo(); };

if ([ x ] &&= [ 2 ]) { foo(); };

if ([ x &&= 2 ] = [ 2 ]) { foo(); };

if ({ x } &&= { x: 2 }) { foo(); };
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 6,
                "end": 7
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 12
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 12,
                "end": 16
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 16,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 23
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 23,
                "end": 27
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 30
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 32
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 32,
                "end": 37
            },
            "alternate": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 46
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 46,
                    "end": 48
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 50
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 51
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 54
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 55
                },
                "returnType": null,
                "flags": 272,
                "transformFlags": 0,
                "start": 37,
                "end": 55
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 23,
            "end": 55
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 55,
            "end": 56
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 56,
                "end": 60
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 62,
                "end": 63
            },
            "consequent": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 70
                },
                "name": {
                    "kind": 134299649,
                    "text": "A",
                    "rawText": "A",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 72
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 74
                    },
                    "flags": 72,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 75
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 64,
                "end": 75
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 56,
            "end": 75
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 75,
            "end": 76
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 76,
                "end": 80
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 80,
                "end": 80
            },
            "consequent": {
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 80
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 80
                },
                "catchClause": {
                    "kind": 173,
                    "catchKeyword": {
                        "kind": 4202575,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 86
                    },
                    "catchParameter": null,
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 86
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 86
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 86
                },
                "finallyKeyword": null,
                "finallyBlock": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 80,
                "end": 86
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 86,
                "end": 91
            },
            "alternate": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 91,
                "end": 92
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 76,
            "end": 92
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 92,
                "end": 96
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 98,
                "end": 99
            },
            "consequent": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 106
                },
                "label": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 100,
                "end": 107
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 92,
            "end": 107
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 107,
                "end": 111
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 114
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 115
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 113,
                "end": 115
            },
            "consequent": {
                "kind": 161,
                "returnKeyword": {
                    "kind": 37757022,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 123
                },
                "expression": {
                    "kind": 205586437,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 129
                },
                "flags": 80,
                "transformFlags": 256,
                "start": 116,
                "end": 130
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 107,
            "end": 130
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 130,
            "end": 131
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 131,
                "end": 135
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 137,
                "end": 138
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 145
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 154
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 156
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 157,
                    "end": 157
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 159,
                        "end": 159
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 160
                },
                "returnType": null,
                "flags": 144,
                "transformFlags": 0,
                "start": 139,
                "end": 160
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 131,
            "end": 160
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 160,
            "end": 161
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 161,
                "end": 165
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 167,
                "end": 168
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 169,
                    "end": 178
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 178,
                    "end": 180
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 180,
                    "end": 181
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 182,
                    "end": 182
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 184,
                        "end": 184
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 185
                },
                "returnType": null,
                "flags": 272,
                "transformFlags": 0,
                "start": 169,
                "end": 185
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 161,
            "end": 185
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 185,
            "end": 186
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 186,
                "end": 190
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 192,
                "end": 196
            },
            "consequent": {
                "kind": 161,
                "returnKeyword": {
                    "kind": 37757022,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 197,
                    "end": 204
                },
                "expression": null,
                "flags": 80,
                "transformFlags": 256,
                "start": 197,
                "end": 204
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 186,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "2",
                "flags": 97,
                "transformFlags": 0,
                "start": 204,
                "end": 206
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 204,
            "end": 206
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 213,
                "end": 213
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 211,
            "end": 214
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 214,
            "end": 215
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 215,
                "end": 219
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 221,
                "end": 225
            },
            "consequent": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 226,
                    "end": 232
                },
                "name": {
                    "kind": 134299649,
                    "text": "C",
                    "rawText": "C",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 234
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 236,
                        "end": 236
                    },
                    "flags": 234,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 237
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 226,
                "end": 237
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 215,
            "end": 237
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 237,
            "end": 238
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 238,
                "end": 242
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 244,
                "end": 248
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 249,
                    "end": 249
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 249,
                "end": 249
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 238,
            "end": 249
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 249,
                "end": 255
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 255,
                            "end": 257
                        },
                        "type": null,
                        "initializer": {
                            "kind": 138477575,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 259,
                            "end": 264
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 255,
                        "end": 264
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 255,
                "end": 264
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 249,
            "end": 265
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 265,
            "end": 266
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 266,
                "end": 270
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 272,
                "end": 276
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 277,
                    "end": 283
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 283,
                    "end": 292
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 294
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 295,
                    "end": 295
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 298,
                        "end": 298
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 296,
                    "end": 301
                },
                "returnType": null,
                "flags": 144,
                "transformFlags": 0,
                "start": 277,
                "end": 301
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 301,
                "end": 306
            },
            "alternate": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 306,
                    "end": 312
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 312,
                    "end": 321
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "_f",
                    "rawText": "_f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 321,
                    "end": 324
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 325,
                    "end": 325
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 328,
                        "end": 328
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 326,
                    "end": 329
                },
                "returnType": null,
                "flags": 144,
                "transformFlags": 0,
                "start": 306,
                "end": 329
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 266,
            "end": 329
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 329,
            "end": 330
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 330,
                "end": 334
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 336,
                "end": 341
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 342,
                "end": 344
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 344,
                "end": 349
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 349,
                    "end": 353
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 349,
                "end": 353
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 330,
            "end": 353
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 353,
                "end": 355
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 353,
            "end": 356
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 356,
            "end": 357
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 357,
                "end": 361
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 363,
                "end": 368
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 369,
                            "end": 373
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 379,
                            "end": 380
                        },
                        "flags": 536870944,
                        "transformFlags": 4,
                        "start": 369,
                        "end": 381
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 381,
                        "end": 383
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 383,
                        "end": 385
                    },
                    "flags": 1,
                    "transformFlags": 128,
                    "start": 369,
                    "end": 385
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 369,
                "end": 386
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 357,
            "end": 386
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 386,
                "end": 390
            },
            "expression": {
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
                                "transformFlags": 0,
                                "start": 393,
                                "end": 395
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 393,
                        "end": 395
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 392,
                    "end": 397
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 397,
                    "end": 401
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 403,
                                "end": 405
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 403,
                        "end": 405
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 401,
                    "end": 407
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 392,
                "end": 407
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 410,
                                    "end": 414
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 415,
                                    "end": 415
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 410,
                                "end": 416
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 410,
                            "end": 417
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 410,
                    "end": 417
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 408,
                "end": 419
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 386,
            "end": 419
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 419,
            "end": 420
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 420,
                "end": 424
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 427,
                                    "end": 429
                                },
                                "operatorToken": {
                                    "kind": 4138,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 429,
                                    "end": 433
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 433,
                                    "end": 435
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 427,
                                "end": 435
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 427,
                        "end": 435
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 426,
                    "end": 437
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 437,
                    "end": 439
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 441,
                                "end": 443
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 441,
                        "end": 443
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 439,
                    "end": 445
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 426,
                "end": 445
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 448,
                                    "end": 452
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 453,
                                    "end": 453
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 448,
                                "end": 454
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 448,
                            "end": 455
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 448,
                    "end": 455
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 446,
                "end": 457
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 420,
            "end": 457
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 457,
            "end": 458
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 458,
                "end": 462
            },
            "expression": {
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
                                "transformFlags": 0,
                                "start": 465,
                                "end": 467
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 465,
                        "end": 467
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 464,
                    "end": 469
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 469,
                    "end": 473
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 475,
                                    "end": 477
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 478,
                                    "end": 480
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 475,
                                "end": 480
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 475,
                        "end": 480
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 473,
                    "end": 482
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 464,
                "end": 482
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 485,
                                    "end": 489
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 490,
                                    "end": 490
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 485,
                                "end": 491
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 485,
                            "end": 492
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 485,
                    "end": 492
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 483,
                "end": 494
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 458,
            "end": 494
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 494,
            "end": 495
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 495,
                "end": 499
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 502,
                                "end": 504
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 505,
                                    "end": 507
                                },
                                "operatorToken": {
                                    "kind": 4138,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 507,
                                    "end": 511
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 511,
                                    "end": 513
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 502,
                                "end": 513
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 502,
                            "end": 513
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 502,
                    "end": 513
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 501,
                "end": 513
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 513,
                    "end": 513
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 513,
                "end": 513
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 495,
            "end": 513
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 519,
                            "end": 521
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 521,
                            "end": 522
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 522,
                                "end": 524
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 522,
                            "end": 524
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 519,
                        "end": 524
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 519,
                "end": 524
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 517,
            "end": 526
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 529,
                                "end": 533
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 534,
                                "end": 534
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 529,
                            "end": 535
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 529,
                        "end": 536
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 529,
                "end": 536
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 527,
            "end": 538
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 538,
            "end": 539
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 539,
                "end": 543
            },
            "expression": {
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
                                "transformFlags": 0,
                                "start": 546,
                                "end": 548
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 546,
                        "end": 548
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 545,
                    "end": 550
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 550,
                    "end": 554
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 556,
                                "end": 558
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 556,
                        "end": 558
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 554,
                    "end": 560
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 545,
                "end": 560
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 563,
                                    "end": 567
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 568,
                                    "end": 568
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 563,
                                "end": 569
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 563,
                            "end": 570
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 563,
                    "end": 570
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 561,
                "end": 572
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 539,
            "end": 572
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 572,
            "end": 573
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 573,
                "end": 577
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 580,
                                    "end": 582
                                },
                                "operatorToken": {
                                    "kind": 4139,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 582,
                                    "end": 586
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 586,
                                    "end": 588
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 580,
                                "end": 588
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 580,
                        "end": 588
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 579,
                    "end": 590
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 590,
                    "end": 592
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 594,
                                "end": 596
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 594,
                        "end": 596
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 592,
                    "end": 598
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 579,
                "end": 598
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 601,
                                    "end": 605
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 606,
                                    "end": 606
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 601,
                                "end": 607
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 601,
                            "end": 608
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 601,
                    "end": 608
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 599,
                "end": 610
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 573,
            "end": 610
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 610,
            "end": 611
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 611,
                "end": 615
            },
            "expression": {
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
                                "transformFlags": 0,
                                "start": 618,
                                "end": 620
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 618,
                        "end": 620
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 617,
                    "end": 622
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 622,
                    "end": 626
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 628,
                                    "end": 630
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 631,
                                    "end": 633
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 628,
                                "end": 633
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 628,
                        "end": 633
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 626,
                    "end": 635
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 617,
                "end": 635
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 638,
                                    "end": 642
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 643,
                                    "end": 643
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 638,
                                "end": 644
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 638,
                            "end": 645
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 638,
                    "end": 645
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 636,
                "end": 647
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 611,
            "end": 647
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 647,
            "end": 648
        }
    ],
    "isModule": false,
    "source": "if (x); else let y = x;\n\nif (x); else function * f() {};\n\nif (a) class A {};\n\nif catch else;\n\nif (x) break;\n\nif (!a) return false;;\n\nif (x) async function f(){};\n\nif (x) function *f(){};\n\nif (true) return\n2 else {};\n\nif (true) class C {};\n\nif (true) const x = null;;\n\nif (true) async function f() {  } else async function _f() {};\n\nif (false) ; else let x;;\n\nif (false) let\n    [a] = 0;\n\nif ([ x ] ||= [ 2 ]) { foo(); };\n\nif ([ x ||= 2 ] = [ 2 ]) { foo(); };\n\nif ({ x } ||= { x: 2 }) { foo(); };\n\nif ({ x: x ||= 2 ] = { x: 2 }) { foo(); };\n\nif ([ x ] &&= [ 2 ]) { foo(); };\n\nif ([ x &&= 2 ] = [ 2 ]) { foo(); };\n\nif ({ x } &&= { x: 2 }) { foo(); };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 648
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 16, end: 18
✖ Generators can only be declared at the top level or inside a block - start: 48, end: 50
✖ Class declarations cannot be used in a single-statement context - start: 64, end: 70
✖ Missing an opening parentheses - '( - start: 81, end: 86
✖ 'try' expected - start: 80, end: 86
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 106, end: 107
✖ A return statement can only be used within a function_body - start: 116, end: 123
✖ An async function declaration is not allowed as `if-else` child - start: 139, end: 145
✖ Generators can only be declared at the top level or inside a block - start: 180, end: 181
✖ A return statement can only be used within a function_body - start: 197, end: 204
✖ Expected a `;` - start: 206, end: 211
✖ Class declarations cannot be used in a single-statement context - start: 226, end: 232
✖ Identifier expected - start: 249, end: 255
✖ An async function declaration is not allowed as `if-else` child - start: 277, end: 283
✖ An async function declaration is not allowed as `if-else` child - start: 306, end: 312
✖ Expected a `;` - start: 353, end: 355
✖ `let 
 [` is a restricted production at the start of a statement - start: 369, end: 379
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 397, end: 401
✖ The left-hand side must be a variable or a property access. - start: 437, end: 439
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 464, end: 473
✖ ',' expected - start: 514, end: 515
✖ Declaration or statement expected - start: 515, end: 517
✖ Declaration or statement expected - start: 526, end: 527
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 550, end: 554
✖ The left-hand side must be a variable or a property access. - start: 590, end: 592
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 617, end: 626

```

