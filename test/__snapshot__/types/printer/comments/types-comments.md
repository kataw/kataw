# Kataw parser test case

## Input

`````js
/*1*/
type/*1*/ a = (Array<string>) => void;


type A = (Array<string>, .../*1*/Array<string>) => void;

type A = (Array</*1*/string/*2*/>, .../*3*/Array<string>)/*4*/ => void

type Fn1 /*1*/ = /*2*/  </*3*/ T/*4*/ >(/*5*/ T/*6*/ )/*7*/  =>/*8*/  T;

type E = Obj/*1*/['bar'][];

type E = Obj/*1*/[/*2*/'bar'/*3*/]/*4*/[/*5*/];

type O1 = {/*1*/...{/*2*/p:T/*3*/}/*4*/|{/*5*/q:U}/*6*/};

type/*1*/ a/*2*/ =/*3*/ {/*4*/"string"/*5*/:/*6*/y.
/*7*/
z};

type C = { .../*1*/A&B /*1*/};

type foo<number>/*1*/ = /*2*/string;

type x = {get x (/*1*/): string }

/*4*/

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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 0,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 10,
                "end": 17
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 17,
                "end": 19
            },
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
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 26
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
                                                        "start": 27,
                                                        "end": 33
                                                    },
                                                    "flags": 2097152,
                                                    "start": 27,
                                                    "end": 33
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 27,
                                            "end": 33
                                        },
                                        "flags": 2097152,
                                        "start": 26,
                                        "end": 34
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 34
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 19,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 19,
                        "end": 35
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 35,
                        "end": 38
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "start": 38,
                            "end": 43
                        },
                        "flags": 2097152,
                        "start": 38,
                        "end": 43
                    },
                    "flags": 2097152,
                    "start": 19,
                    "end": 43
                },
                "flags": 2097152,
                "start": 19,
                "end": 43
            },
            "flags": 65,
            "start": 0,
            "end": 44
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 44,
                "end": 51
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 51,
                "end": 53
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 53,
                "end": 55
            },
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
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 96,
                                                    "start": 57,
                                                    "end": 62
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
                                                                    "start": 63,
                                                                    "end": 69
                                                                },
                                                                "flags": 2097152,
                                                                "start": 63,
                                                                "end": 69
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 63,
                                                        "end": 69
                                                    },
                                                    "flags": 2097152,
                                                    "start": 62,
                                                    "end": 70
                                                },
                                                "flags": 2097152,
                                                "start": 55,
                                                "end": 70
                                            },
                                            "optionalToken": null,
                                            "types": null,
                                            "flags": 2097152,
                                            "start": 55,
                                            "end": 70
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 71,
                                                "end": 75
                                            },
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 96,
                                                    "start": 75,
                                                    "end": 85
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
                                                                    "start": 86,
                                                                    "end": 92
                                                                },
                                                                "flags": 2097152,
                                                                "start": 86,
                                                                "end": 92
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 86,
                                                        "end": 92
                                                    },
                                                    "flags": 2097152,
                                                    "start": 85,
                                                    "end": 93
                                                },
                                                "flags": 2097152,
                                                "start": 71,
                                                "end": 93
                                            },
                                            "flags": 2097152,
                                            "start": 71,
                                            "end": 93
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 55,
                                    "end": 93
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 55,
                                "end": 94
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 55,
                        "end": 94
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 94,
                        "end": 97
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "start": 97,
                            "end": 102
                        },
                        "flags": 2097152,
                        "start": 97,
                        "end": 102
                    },
                    "flags": 2097152,
                    "start": 55,
                    "end": 102
                },
                "flags": 2097152,
                "start": 55,
                "end": 102
            },
            "flags": 65,
            "start": 44,
            "end": 103
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 103,
                "end": 109
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 109,
                "end": 111
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 111,
                "end": 113
            },
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
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 96,
                                                    "start": 115,
                                                    "end": 120
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
                                                                    "start": 121,
                                                                    "end": 132
                                                                },
                                                                "flags": 2097152,
                                                                "start": 121,
                                                                "end": 132
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 121,
                                                        "end": 132
                                                    },
                                                    "flags": 2097152,
                                                    "start": 120,
                                                    "end": 138
                                                },
                                                "flags": 2097152,
                                                "start": 113,
                                                "end": 138
                                            },
                                            "optionalToken": null,
                                            "types": null,
                                            "flags": 2097152,
                                            "start": 113,
                                            "end": 138
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 139,
                                                "end": 143
                                            },
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 96,
                                                    "start": 143,
                                                    "end": 153
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
                                                                    "start": 154,
                                                                    "end": 160
                                                                },
                                                                "flags": 2097152,
                                                                "start": 154,
                                                                "end": 160
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 154,
                                                        "end": 160
                                                    },
                                                    "flags": 2097152,
                                                    "start": 153,
                                                    "end": 161
                                                },
                                                "flags": 2097152,
                                                "start": 139,
                                                "end": 161
                                            },
                                            "flags": 2097152,
                                            "start": 139,
                                            "end": 161
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 113,
                                    "end": 161
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 113,
                                "end": 162
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 113,
                        "end": 162
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 162,
                        "end": 170
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "start": 170,
                            "end": 175
                        },
                        "flags": 2097152,
                        "start": 170,
                        "end": 175
                    },
                    "flags": 2097152,
                    "start": 113,
                    "end": 175
                },
                "flags": 2097152,
                "start": 113,
                "end": 175
            },
            "flags": 65,
            "start": 103,
            "end": 175
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 175,
                "end": 181
            },
            "name": {
                "kind": 134299649,
                "text": "Fn1",
                "rawText": "Fn1",
                "flags": 96,
                "start": 181,
                "end": 185
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 185,
                "end": 193
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
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
                                        "start": 202,
                                        "end": 209
                                    },
                                    "type": null,
                                    "assignToken": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 202,
                                    "end": 209
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 202,
                            "end": 209
                        },
                        "flags": 2097152,
                        "start": 193,
                        "end": 216
                    },
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 217,
                                        "end": 224
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 217,
                                    "end": 224
                                },
                                "flags": 2097152,
                                "start": 217,
                                "end": 224
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 217,
                        "end": 224
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 231,
                        "end": 240
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 240,
                                "end": 248
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 240,
                            "end": 248
                        },
                        "flags": 2097152,
                        "start": 240,
                        "end": 248
                    },
                    "flags": 2097152,
                    "start": 193,
                    "end": 248
                },
                "flags": 2097152,
                "start": 193,
                "end": 248
            },
            "flags": 65,
            "start": 175,
            "end": 249
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 249,
                "end": 255
            },
            "name": {
                "kind": 134299649,
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "start": 255,
                "end": 257
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 257,
                "end": 259
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 136,
                    "type": {
                        "kind": 311,
                        "objectType": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Obj",
                                "rawText": "Obj",
                                "flags": 96,
                                "start": 259,
                                "end": 263
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 259,
                            "end": 263
                        },
                        "indexType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217967,
                                "text": "bar",
                                "rawText": "'bar'",
                                "flags": 6291520,
                                "start": 269,
                                "end": 274
                            },
                            "flags": 2097152,
                            "start": 269,
                            "end": 274
                        },
                        "flags": 0,
                        "start": 259,
                        "end": 276
                    },
                    "flags": 2097152,
                    "start": 259,
                    "end": 277
                },
                "flags": 2097152,
                "start": 259,
                "end": 277
            },
            "flags": 65,
            "start": 249,
            "end": 278
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 278,
                "end": 284
            },
            "name": {
                "kind": 134299649,
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "start": 284,
                "end": 286
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 286,
                "end": 288
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 136,
                    "type": {
                        "kind": 311,
                        "objectType": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Obj",
                                "rawText": "Obj",
                                "flags": 96,
                                "start": 288,
                                "end": 292
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 288,
                            "end": 292
                        },
                        "indexType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217967,
                                "text": "bar",
                                "rawText": "'bar'",
                                "flags": 6291520,
                                "start": 298,
                                "end": 308
                            },
                            "flags": 2097152,
                            "start": 298,
                            "end": 308
                        },
                        "flags": 0,
                        "start": 288,
                        "end": 320
                    },
                    "flags": 2097152,
                    "start": 288,
                    "end": 326
                },
                "flags": 2097152,
                "start": 288,
                "end": 326
            },
            "flags": 65,
            "start": 278,
            "end": 327
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 327,
                "end": 333
            },
            "name": {
                "kind": 134299649,
                "text": "O1",
                "rawText": "O1",
                "flags": 96,
                "start": 333,
                "end": 336
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 336,
                "end": 338
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 340,
                                "end": 348
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
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
                                                        "text": "p",
                                                        "rawText": "p",
                                                        "flags": 96,
                                                        "start": 349,
                                                        "end": 355
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
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "start": 356,
                                                                "end": 357
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 356,
                                                            "end": 357
                                                        },
                                                        "flags": 2097152,
                                                        "start": 356,
                                                        "end": 357
                                                    },
                                                    "flags": 2097152,
                                                    "start": 349,
                                                    "end": 357
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 348,
                                            "end": 363
                                        },
                                        {
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
                                                        "text": "q",
                                                        "rawText": "q",
                                                        "flags": 96,
                                                        "start": 370,
                                                        "end": 376
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
                                                                "text": "U",
                                                                "rawText": "U",
                                                                "flags": 96,
                                                                "start": 377,
                                                                "end": 378
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 377,
                                                            "end": 378
                                                        },
                                                        "flags": 2097152,
                                                        "start": 377,
                                                        "end": 378
                                                    },
                                                    "flags": 2097152,
                                                    "start": 370,
                                                    "end": 378
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 369,
                                            "end": 379
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 363,
                                    "end": 379
                                },
                                "flags": 2097152,
                                "start": 348,
                                "end": 379
                            },
                            "flags": 2097152,
                            "start": 340,
                            "end": 379
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 338,
                    "end": 385
                },
                "flags": 2097152,
                "start": 338,
                "end": 385
            },
            "flags": 65,
            "start": 327,
            "end": 386
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 386,
                "end": 392
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 392,
                "end": 399
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 399,
                "end": 406
            },
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
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "\"string\"",
                                "flags": 96,
                                "start": 413,
                                "end": 426
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 145,
                                        "qualification": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 432,
                                            "end": 438
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 97,
                                            "start": 439,
                                            "end": 447
                                        },
                                        "flags": 2097152,
                                        "start": 432,
                                        "end": 447
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 432,
                                    "end": 447
                                },
                                "flags": 2097152,
                                "start": 432,
                                "end": 447
                            },
                            "flags": 2097152,
                            "start": 413,
                            "end": 447
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 406,
                    "end": 448
                },
                "flags": 2097152,
                "start": 406,
                "end": 448
            },
            "flags": 65,
            "start": 386,
            "end": 449
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 449,
                "end": 455
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 455,
                "end": 457
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 457,
                "end": 459
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 461,
                                "end": 465
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 96,
                                                "start": 465,
                                                "end": 471
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 465,
                                            "end": 471
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 96,
                                                "start": 472,
                                                "end": 473
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 472,
                                            "end": 473
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 471,
                                    "end": 473
                                },
                                "flags": 2097152,
                                "start": 465,
                                "end": 473
                            },
                            "flags": 2097152,
                            "start": 461,
                            "end": 473
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 459,
                    "end": 480
                },
                "flags": 2097152,
                "start": 459,
                "end": 480
            },
            "flags": 65,
            "start": 449,
            "end": 481
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 481,
                "end": 487
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 487,
                "end": 491
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
                                "text": "number",
                                "rawText": "number",
                                "flags": 96,
                                "start": 492,
                                "end": 498
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 492,
                            "end": 498
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 492,
                    "end": 498
                },
                "flags": 2097152,
                "start": 491,
                "end": 499
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 499,
                "end": 506
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "start": 506,
                    "end": 518
                },
                "flags": 2097152,
                "start": 506,
                "end": 518
            },
            "flags": 65,
            "start": 481,
            "end": 519
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 519,
                "end": 525
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 525,
                "end": 527
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 527,
                "end": 529
            },
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
                            "getKeyword": {
                                "kind": 16498,
                                "flags": 96,
                                "start": 531,
                                "end": 534
                            },
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 534,
                                "end": 536
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 538,
                                    "end": 538
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 545,
                                        "end": 552
                                    },
                                    "flags": 2097152,
                                    "start": 545,
                                    "end": 552
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 536,
                                "end": 552
                            },
                            "flags": 2097152,
                            "start": 531,
                            "end": 552
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 529,
                    "end": 554
                },
                "flags": 2097152,
                "start": 529,
                "end": 554
            },
            "flags": 65,
            "start": 519,
            "end": 554
        }
    ],
    "isModule": false,
    "source": "/*1*/\ntype/*1*/ a = (Array<string>) => void;\n\n\ntype A = (Array<string>, .../*1*/Array<string>) => void;\n\ntype A = (Array</*1*/string/*2*/>, .../*3*/Array<string>)/*4*/ => void\n\ntype Fn1 /*1*/ = /*2*/  </*3*/ T/*4*/ >(/*5*/ T/*6*/ )/*7*/  =>/*8*/  T;\n\ntype E = Obj/*1*/['bar'][];\n\ntype E = Obj/*1*/[/*2*/'bar'/*3*/]/*4*/[/*5*/];\n\ntype O1 = {/*1*/...{/*2*/p:T/*3*/}/*4*/|{/*5*/q:U}/*6*/};\n\ntype/*1*/ a/*2*/ =/*3*/ {/*4*/\"string\"/*5*/:/*6*/y.\n/*7*/\nz};\n\ntype C = { .../*1*/A&B /*1*/};\n\ntype foo<number>/*1*/ = /*2*/string;\n\ntype x = {get x (/*1*/): string }\n\n/*4*/\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 562
}
```

### Printed

```javascript
/*1*/
type/*1*/ a = (Array<string>) => void
type A = (Array<string>, .../*1*/Array<string>) => void
type A = (Array</*1*/string> /*2*/, .../*3*/Array<string> /*4*/) => void
type Fn1 /*1*/ =/*2*/ </*3*/T> /*4*/(/*5*/T /*6*/)/*7*/ =>/*8*/ T
type E = Obj /*1*/[ "'bar'"][]
type E = Obj /*1*/[/*2*/ "'bar'" /*3*/]/*4*/ /*5*/[]
type O1 = { /*1*/...{ /*2*/p: T /*3*/ } /*4*/ | { /*5*/q: U } /*6*/ }
type/*1*/ a /*2*/ =/*3*/ { /*4*/"\"string\"" /*5*/:/*6*/ y.
 /*7*/
z }
type C = { .../*1*//*1*/A & B /*1*/ }
type foo<number> /*1*/ =/*2*/ string
type x = { x(): string }
 /*4*/

```

### Diagnostics

```javascript
✔ No errors
```

