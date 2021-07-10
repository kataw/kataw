# Kataw parser test case

## Input

`````js
/*1*/

function /*2*/identity/*3*/(value/*4*/: string/*5*/): string/*6*/ {
  return value;/*7*/

/*8*/

  /*9*/
}


function identity<T>(value: T): T {
  /*1*/ return value; /*2*/
}

type IdentityWrapper = /*5*/ {
  func</*1*/T/*2*/>(/*3*/T/*4*/): T
}

function method<T>(param: /*1*/ T): T {
  // ...
}


function /*1*/ method/*2*/ (func: </*3*/ T/*4*/ >(/*5*/ param/*6*/ : T/*7*/ ) /*1*/  => /*1*/ T) {
}


function /*1*/ constant/*2*/<T>(value/*3*/: T/*4*/): () => T {
  /*5*/return /*6*/function(/*7*/):/*8*/ T/*9*/ {/*10*/
    return/*11*/ value;/*12*/
  };/*13*/
}
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
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "identity",
                "rawText": "identity",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 29
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
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 40
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
                                "start": 46,
                                "end": 53
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 53
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 35,
                        "end": 53
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 35,
                "end": 53
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 83
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "value",
                                "rawText": "value",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 89
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 74,
                            "end": 90
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 90
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 67,
                "end": 113
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 67
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 60,
                "end": 67
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 113
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 113,
                "end": 124
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "identity",
                "rawText": "identity",
                "flags": 96,
                "transformFlags": 0,
                "start": 124,
                "end": 133
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
                                "start": 134,
                                "end": 135
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 134,
                            "end": 135
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 135
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 133,
                "end": 136
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 142
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
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 145
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 145
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 143,
                            "end": 145
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 137,
                        "end": 145
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 137,
                "end": 145
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 151,
                                "end": 166
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "value",
                                "rawText": "value",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 166,
                                "end": 172
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 151,
                            "end": 173
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 151,
                    "end": 173
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 149,
                "end": 181
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
                        "transformFlags": 0,
                        "start": 147,
                        "end": 149
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 149
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 147,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 113,
            "end": 181
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 181,
                "end": 187
            },
            "name": {
                "kind": 134299649,
                "text": "IdentityWrapper",
                "rawText": "IdentityWrapper",
                "flags": 96,
                "transformFlags": 0,
                "start": 187,
                "end": 203
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 203,
                "end": 205
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
                                "kind": 134299649,
                                "text": "func",
                                "rawText": "func",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 220
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
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
                                                    "transformFlags": 0,
                                                    "start": 234,
                                                    "end": 240
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 234,
                                                "end": 240
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 234,
                                            "end": 240
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 234,
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
                                            "transformFlags": 0,
                                            "start": 247,
                                            "end": 249
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 247,
                                        "end": 249
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 247,
                                    "end": 249
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
                                                    "start": 221,
                                                    "end": 227
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 221,
                                                "end": 227
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 221,
                                        "end": 227
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 220,
                                    "end": 233
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 249
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 213,
                            "end": 249
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 205,
                    "end": 251
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 205,
                "end": 251
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 181,
            "end": 251
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 251,
                "end": 261
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "method",
                "rawText": "method",
                "flags": 96,
                "transformFlags": 0,
                "start": 261,
                "end": 268
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
                                "start": 269,
                                "end": 270
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 269,
                            "end": 270
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 269,
                    "end": 270
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 268,
                "end": 271
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "param",
                            "rawText": "param",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 272,
                            "end": 277
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
                                    "transformFlags": 0,
                                    "start": 278,
                                    "end": 286
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 278,
                                "end": 286
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 278,
                            "end": 286
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 272,
                        "end": 286
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 272,
                "end": 286
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 292
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 290,
                "end": 303
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
                        "transformFlags": 0,
                        "start": 288,
                        "end": 290
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 288,
                    "end": 290
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 288,
                "end": 290
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 251,
            "end": 303
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 303,
                "end": 314
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "method",
                "rawText": "method",
                "flags": 96,
                "transformFlags": 0,
                "start": 314,
                "end": 327
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
                            "text": "func",
                            "rawText": "func",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 334,
                            "end": 338
                        },
                        "optionalToken": null,
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
                                                    "transformFlags": 0,
                                                    "start": 341,
                                                    "end": 348
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 341,
                                                "end": 348
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 341,
                                        "end": 348
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 339,
                                    "end": 355
                                },
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "param",
                                                "rawText": "param",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 356,
                                                "end": 367
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
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 374,
                                                        "end": 376
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 374,
                                                    "end": 376
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 374,
                                                "end": 376
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 356,
                                            "end": 376
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 356,
                                    "end": 376
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 383,
                                    "end": 393
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
                                            "transformFlags": 0,
                                            "start": 393,
                                            "end": 401
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 393,
                                        "end": 401
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 393,
                                    "end": 401
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 339,
                                "end": 401
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 339,
                            "end": 401
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 334,
                        "end": 401
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 334,
                "end": 401
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 404,
                    "end": 404
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 402,
                "end": 406
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 303,
            "end": 406
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 406,
                "end": 417
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "constant",
                "rawText": "constant",
                "flags": 96,
                "transformFlags": 0,
                "start": 417,
                "end": 432
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
                                "start": 438,
                                "end": 439
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 438,
                            "end": 439
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 438,
                    "end": 439
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 432,
                "end": 440
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 441,
                            "end": 446
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
                                    "transformFlags": 0,
                                    "start": 452,
                                    "end": 454
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 452,
                                "end": 454
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 452,
                            "end": 454
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 441,
                        "end": 454
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 441,
                "end": 454
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 471,
                                "end": 485
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 485,
                                    "end": 499
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
                                    "start": 500,
                                    "end": 500
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 521,
                                                    "end": 538
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 538,
                                                    "end": 550
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 521,
                                                "end": 551
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 521,
                                        "end": 551
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 514,
                                    "end": 561
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
                                            "transformFlags": 0,
                                            "start": 507,
                                            "end": 514
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 507,
                                        "end": 514
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 507,
                                    "end": 514
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 485,
                                "end": 561
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 471,
                            "end": 562
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 471,
                    "end": 562
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 469,
                "end": 570
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
                        "start": 463,
                        "end": 463
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 464,
                        "end": 467
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
                                "transformFlags": 0,
                                "start": 467,
                                "end": 469
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 467,
                            "end": 469
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 467,
                        "end": 469
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 461,
                    "end": 469
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 461,
                "end": 469
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 406,
            "end": 570
        }
    ],
    "isModule": false,
    "source": "/*1*/\n\nfunction /*2*/identity/*3*/(value/*4*/: string/*5*/): string/*6*/ {\n  return value;/*7*/\n\n/*8*/\n\n  /*9*/\n}\n\n\nfunction identity<T>(value: T): T {\n  /*1*/ return value; /*2*/\n}\n\ntype IdentityWrapper = /*5*/ {\n  func</*1*/T/*2*/>(/*3*/T/*4*/): T\n}\n\nfunction method<T>(param: /*1*/ T): T {\n  // ...\n}\n\n\nfunction /*1*/ method/*2*/ (func: </*3*/ T/*4*/ >(/*5*/ param/*6*/ : T/*7*/ ) /*1*/  => /*1*/ T) {\n}\n\n\nfunction /*1*/ constant/*2*/<T>(value/*3*/: T/*4*/): () => T {\n  /*5*/return /*6*/function(/*7*/):/*8*/ T/*9*/ {/*10*/\n    return/*11*/ value;/*12*/\n  };/*13*/\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 570
}
```

### Printed

```javascript

/*1*/
function identity(value: string): string {
  return value;
}
function identity<T>(value: T): T
/*1*/{
  return value;
}

type IdentityWrapper = { func<T> (T): T }

function method<T>(param: T): T {}

function method(func: <T>(param: T) => T) {}

function constant<T>(value: T): () => T
/*5*/{
  return function (): T {
    return value;
  };
}

```

### Diagnostics

```javascript
✔ No errors
```

