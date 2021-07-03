# Kataw parser test case

## Input

`````js
var inspect = 4 === util.inspect.length
  ? // node <= 0.8.x
    (function(v, colors) {
      return util.inspect(v, void 0, void 0, colors);
    })
  : // node > 0.8.x
    (function(v, colors) {
      return util.inspect(v, { colors: colors });
    });

var inspect = 4 === util.inspect.length
  ? // node <= 0.8.x
    (function(v, colors) {
      return util.inspect(v, void 0, void 0, colors);
    })
  : // node > 0.8.x
    (function(v, colors) {
      return util.inspect(v, { colors: colors });
    });

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  // Making sure that the publicPath goes back to to build folder.
  ? { publicPath: Array(cssFilename.split('/').length).join('../') } :
  {};

const extractTextPluginOptions2 = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
    { publicPath: Array(cssFilename.split("/").length).join("../") }
  : {};

const extractTextPluginOptions3 = shouldUseRelativeAssetPaths // Making sure that the publicPath goes back to to build folder.
  ? { publicPath: Array(cssFilename.split("/").length).join("../") }
  : {};

const { configureStore } = process.env.NODE_ENV === "production"
  ? require("./configureProdStore") // a
  : require("./configureDevStore"); // b

test /* comment
  comment
      comment
*/
  ? foo
  : bar;

test
  ? /* comment
          comment
    comment
          comment
  */
    foo
  : bar;

test
  ? /* comment
       comment
       comment
       comment
    */
    foo
  : test
  ? /* comment
  comment
    comment */
    foo
  : bar;

test
  ? /* comment */
    foo
  : bar;

test
  ? foo
  : /* comment
         comment
     comment
           comment
    */
  bar;

test
  ? foo
  : /* comment
         comment
     comment
           comment
    */
  test
  ? foo
  : /* comment
  comment
    comment
   */
    bar;

test
  ? foo
  : /* comment */
  bar;

test ? test /* c
c */? foo : bar : bar;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "inspect",
                            "rawText": "inspect",
                            "flags": 96,
                            "start": 3,
                            "end": 11
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 15,
                                    "end": 19
                                },
                                "right": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "util",
                                            "rawText": "util",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 24
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "inspect",
                                            "rawText": "inspect",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 32
                                        },
                                        "flags": 96,
                                        "start": 19,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 39
                                    },
                                    "flags": 96,
                                    "start": 19,
                                    "end": 39
                                },
                                "flags": 96,
                                "start": 13,
                                "end": 39
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 39,
                                "end": 43
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 66,
                                        "end": 74
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 75,
                                                "end": 76
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "colors",
                                                "rawText": "colors",
                                                "flags": 96,
                                                "start": 77,
                                                "end": 84
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 75,
                                        "end": 84
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
                                                        "start": 87,
                                                        "end": 100
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "util",
                                                                "rawText": "util",
                                                                "flags": 96,
                                                                "start": 100,
                                                                "end": 105
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "inspect",
                                                                "rawText": "inspect",
                                                                "flags": 96,
                                                                "start": 106,
                                                                "end": 113
                                                            },
                                                            "flags": 96,
                                                            "start": 100,
                                                            "end": 113
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "v",
                                                                    "rawText": "v",
                                                                    "flags": 96,
                                                                    "start": 114,
                                                                    "end": 115
                                                                },
                                                                {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "start": 116,
                                                                        "end": 121
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "start": 121,
                                                                        "end": 123
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 116,
                                                                    "end": 123
                                                                },
                                                                {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "start": 124,
                                                                        "end": 129
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "start": 129,
                                                                        "end": 131
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 124,
                                                                    "end": 131
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "colors",
                                                                    "rawText": "colors",
                                                                    "flags": 96,
                                                                    "start": 132,
                                                                    "end": 139
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 114,
                                                            "end": 139
                                                        },
                                                        "flags": 268435488,
                                                        "start": 100,
                                                        "end": 140
                                                    },
                                                    "flags": 81,
                                                    "start": 87,
                                                    "end": 141
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 87,
                                            "end": 141
                                        },
                                        "flags": 32,
                                        "start": 85,
                                        "end": 147
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 66,
                                    "end": 147
                                },
                                "flags": 43,
                                "start": 33,
                                "end": 148
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 148,
                                "end": 152
                            },
                            "alternate": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 174,
                                        "end": 182
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 183,
                                                "end": 184
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "colors",
                                                "rawText": "colors",
                                                "flags": 96,
                                                "start": 185,
                                                "end": 192
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 183,
                                        "end": 192
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
                                                        "start": 195,
                                                        "end": 208
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "util",
                                                                "rawText": "util",
                                                                "flags": 96,
                                                                "start": 208,
                                                                "end": 213
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "inspect",
                                                                "rawText": "inspect",
                                                                "flags": 96,
                                                                "start": 214,
                                                                "end": 221
                                                            },
                                                            "flags": 96,
                                                            "start": 208,
                                                            "end": 221
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "v",
                                                                    "rawText": "v",
                                                                    "flags": 96,
                                                                    "start": 222,
                                                                    "end": 223
                                                                },
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "colors",
                                                                                    "rawText": "colors",
                                                                                    "flags": 96,
                                                                                    "start": 226,
                                                                                    "end": 233
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "colors",
                                                                                    "rawText": "colors",
                                                                                    "flags": 96,
                                                                                    "start": 234,
                                                                                    "end": 241
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 226,
                                                                                "end": 241
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 226,
                                                                        "end": 241
                                                                    },
                                                                    "flags": 48,
                                                                    "start": 224,
                                                                    "end": 243
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 222,
                                                            "end": 243
                                                        },
                                                        "flags": 268435488,
                                                        "start": 208,
                                                        "end": 244
                                                    },
                                                    "flags": 81,
                                                    "start": 195,
                                                    "end": 245
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 195,
                                            "end": 245
                                        },
                                        "flags": 32,
                                        "start": 193,
                                        "end": 251
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 174,
                                    "end": 251
                                },
                                "flags": 152,
                                "start": 33,
                                "end": 252
                            },
                            "flags": 96,
                            "start": 13,
                            "end": 252
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 252
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 252
            },
            "flags": 16,
            "start": 0,
            "end": 253
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 253,
                "end": 258
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "inspect",
                            "rawText": "inspect",
                            "flags": 96,
                            "start": 258,
                            "end": 266
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 268,
                                    "end": 270
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 270,
                                    "end": 274
                                },
                                "right": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "util",
                                            "rawText": "util",
                                            "flags": 96,
                                            "start": 274,
                                            "end": 279
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "inspect",
                                            "rawText": "inspect",
                                            "flags": 96,
                                            "start": 280,
                                            "end": 287
                                        },
                                        "flags": 96,
                                        "start": 274,
                                        "end": 287
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 288,
                                        "end": 294
                                    },
                                    "flags": 96,
                                    "start": 274,
                                    "end": 294
                                },
                                "flags": 96,
                                "start": 268,
                                "end": 294
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 294,
                                "end": 298
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 321,
                                        "end": 329
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 330,
                                                "end": 331
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "colors",
                                                "rawText": "colors",
                                                "flags": 96,
                                                "start": 332,
                                                "end": 339
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 330,
                                        "end": 339
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
                                                        "start": 342,
                                                        "end": 355
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "util",
                                                                "rawText": "util",
                                                                "flags": 96,
                                                                "start": 355,
                                                                "end": 360
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "inspect",
                                                                "rawText": "inspect",
                                                                "flags": 96,
                                                                "start": 361,
                                                                "end": 368
                                                            },
                                                            "flags": 96,
                                                            "start": 355,
                                                            "end": 368
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "v",
                                                                    "rawText": "v",
                                                                    "flags": 96,
                                                                    "start": 369,
                                                                    "end": 370
                                                                },
                                                                {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "start": 371,
                                                                        "end": 376
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "start": 376,
                                                                        "end": 378
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 371,
                                                                    "end": 378
                                                                },
                                                                {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "start": 379,
                                                                        "end": 384
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "start": 384,
                                                                        "end": 386
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 379,
                                                                    "end": 386
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "colors",
                                                                    "rawText": "colors",
                                                                    "flags": 96,
                                                                    "start": 387,
                                                                    "end": 394
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 369,
                                                            "end": 394
                                                        },
                                                        "flags": 268435488,
                                                        "start": 355,
                                                        "end": 395
                                                    },
                                                    "flags": 81,
                                                    "start": 342,
                                                    "end": 396
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 342,
                                            "end": 396
                                        },
                                        "flags": 32,
                                        "start": 340,
                                        "end": 402
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 321,
                                    "end": 402
                                },
                                "flags": 298,
                                "start": 33,
                                "end": 403
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 403,
                                "end": 407
                            },
                            "alternate": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 429,
                                        "end": 437
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 438,
                                                "end": 439
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "colors",
                                                "rawText": "colors",
                                                "flags": 96,
                                                "start": 440,
                                                "end": 447
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 438,
                                        "end": 447
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
                                                        "start": 450,
                                                        "end": 463
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "util",
                                                                "rawText": "util",
                                                                "flags": 96,
                                                                "start": 463,
                                                                "end": 468
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "inspect",
                                                                "rawText": "inspect",
                                                                "flags": 96,
                                                                "start": 469,
                                                                "end": 476
                                                            },
                                                            "flags": 96,
                                                            "start": 463,
                                                            "end": 476
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "v",
                                                                    "rawText": "v",
                                                                    "flags": 96,
                                                                    "start": 477,
                                                                    "end": 478
                                                                },
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "colors",
                                                                                    "rawText": "colors",
                                                                                    "flags": 96,
                                                                                    "start": 481,
                                                                                    "end": 488
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "colors",
                                                                                    "rawText": "colors",
                                                                                    "flags": 96,
                                                                                    "start": 489,
                                                                                    "end": 496
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 481,
                                                                                "end": 496
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 481,
                                                                        "end": 496
                                                                    },
                                                                    "flags": 48,
                                                                    "start": 479,
                                                                    "end": 498
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 477,
                                                            "end": 498
                                                        },
                                                        "flags": 268435488,
                                                        "start": 463,
                                                        "end": 499
                                                    },
                                                    "flags": 81,
                                                    "start": 450,
                                                    "end": 500
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 450,
                                            "end": 500
                                        },
                                        "flags": 32,
                                        "start": 448,
                                        "end": 506
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 429,
                                    "end": 506
                                },
                                "flags": 407,
                                "start": 33,
                                "end": 507
                            },
                            "flags": 96,
                            "start": 268,
                            "end": 507
                        },
                        "flags": 16,
                        "start": 258,
                        "end": 507
                    }
                ],
                "flags": 16,
                "start": 258,
                "end": 507
            },
            "flags": 16,
            "start": 253,
            "end": 508
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 508,
                "end": 515
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "extractTextPluginOptions",
                            "rawText": "extractTextPluginOptions",
                            "flags": 96,
                            "start": 515,
                            "end": 540
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "shouldUseRelativeAssetPaths",
                                "rawText": "shouldUseRelativeAssetPaths",
                                "flags": 96,
                                "start": 542,
                                "end": 570
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 570,
                                "end": 641
                            },
                            "consequent": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "publicPath",
                                                "rawText": "publicPath",
                                                "flags": 96,
                                                "start": 643,
                                                "end": 654
                                            },
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "Array",
                                                            "rawText": "Array",
                                                            "flags": 96,
                                                            "start": 655,
                                                            "end": 661
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "cssFilename",
                                                                                "rawText": "cssFilename",
                                                                                "flags": 96,
                                                                                "start": 662,
                                                                                "end": 673
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "split",
                                                                                "rawText": "split",
                                                                                "flags": 96,
                                                                                "start": 674,
                                                                                "end": 679
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 662,
                                                                            "end": 679
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 201392131,
                                                                                    "text": "/",
                                                                                    "rawText": "'/'",
                                                                                    "flags": 4194400,
                                                                                    "start": 680,
                                                                                    "end": 683
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 680,
                                                                            "end": 683
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 662,
                                                                        "end": 684
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "length",
                                                                        "rawText": "length",
                                                                        "flags": 96,
                                                                        "start": 685,
                                                                        "end": 691
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 662,
                                                                    "end": 691
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 662,
                                                            "end": 691
                                                        },
                                                        "flags": 268435488,
                                                        "start": 643,
                                                        "end": 692
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "join",
                                                        "rawText": "join",
                                                        "flags": 96,
                                                        "start": 693,
                                                        "end": 697
                                                    },
                                                    "flags": 268435488,
                                                    "start": 643,
                                                    "end": 697
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "../",
                                                            "rawText": "'../'",
                                                            "flags": 4194400,
                                                            "start": 698,
                                                            "end": 703
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 698,
                                                    "end": 703
                                                },
                                                "flags": 268435488,
                                                "start": 643,
                                                "end": 704
                                            },
                                            "flags": 32,
                                            "start": 643,
                                            "end": 704
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 643,
                                    "end": 704
                                },
                                "flags": 48,
                                "start": 641,
                                "end": 706
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 706,
                                "end": 708
                            },
                            "alternate": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 712,
                                    "end": 712
                                },
                                "flags": 49,
                                "start": 708,
                                "end": 713
                            },
                            "flags": 96,
                            "start": 542,
                            "end": 713
                        },
                        "flags": 16,
                        "start": 515,
                        "end": 713
                    }
                ],
                "flags": 16777232,
                "start": 515,
                "end": 713
            },
            "flags": 33554448,
            "start": 508,
            "end": 714
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 714,
                "end": 721
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "extractTextPluginOptions2",
                            "rawText": "extractTextPluginOptions2",
                            "flags": 96,
                            "start": 721,
                            "end": 747
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "shouldUseRelativeAssetPaths",
                                "rawText": "shouldUseRelativeAssetPaths",
                                "flags": 96,
                                "start": 749,
                                "end": 777
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 777,
                                "end": 781
                            },
                            "consequent": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "publicPath",
                                                "rawText": "publicPath",
                                                "flags": 96,
                                                "start": 852,
                                                "end": 863
                                            },
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "Array",
                                                            "rawText": "Array",
                                                            "flags": 96,
                                                            "start": 864,
                                                            "end": 870
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "cssFilename",
                                                                                "rawText": "cssFilename",
                                                                                "flags": 96,
                                                                                "start": 871,
                                                                                "end": 882
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "split",
                                                                                "rawText": "split",
                                                                                "flags": 96,
                                                                                "start": 883,
                                                                                "end": 888
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 871,
                                                                            "end": 888
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 201392131,
                                                                                    "text": "/",
                                                                                    "rawText": "\"/\"",
                                                                                    "flags": 96,
                                                                                    "start": 889,
                                                                                    "end": 892
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 889,
                                                                            "end": 892
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 871,
                                                                        "end": 893
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "length",
                                                                        "rawText": "length",
                                                                        "flags": 96,
                                                                        "start": 894,
                                                                        "end": 900
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 871,
                                                                    "end": 900
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 871,
                                                            "end": 900
                                                        },
                                                        "flags": 268435488,
                                                        "start": 852,
                                                        "end": 901
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "join",
                                                        "rawText": "join",
                                                        "flags": 96,
                                                        "start": 902,
                                                        "end": 906
                                                    },
                                                    "flags": 268435488,
                                                    "start": 852,
                                                    "end": 906
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "../",
                                                            "rawText": "\"../\"",
                                                            "flags": 96,
                                                            "start": 907,
                                                            "end": 912
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 907,
                                                    "end": 912
                                                },
                                                "flags": 268435488,
                                                "start": 852,
                                                "end": 913
                                            },
                                            "flags": 32,
                                            "start": 852,
                                            "end": 913
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 852,
                                    "end": 913
                                },
                                "flags": 49,
                                "start": 781,
                                "end": 915
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 915,
                                "end": 919
                            },
                            "alternate": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 921,
                                    "end": 921
                                },
                                "flags": 48,
                                "start": 919,
                                "end": 922
                            },
                            "flags": 96,
                            "start": 749,
                            "end": 922
                        },
                        "flags": 16,
                        "start": 721,
                        "end": 922
                    }
                ],
                "flags": 16777232,
                "start": 721,
                "end": 922
            },
            "flags": 33554448,
            "start": 714,
            "end": 923
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 923,
                "end": 930
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "extractTextPluginOptions3",
                            "rawText": "extractTextPluginOptions3",
                            "flags": 96,
                            "start": 930,
                            "end": 956
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "shouldUseRelativeAssetPaths",
                                "rawText": "shouldUseRelativeAssetPaths",
                                "flags": 96,
                                "start": 958,
                                "end": 986
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 986,
                                "end": 1055
                            },
                            "consequent": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "publicPath",
                                                "rawText": "publicPath",
                                                "flags": 96,
                                                "start": 1057,
                                                "end": 1068
                                            },
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "Array",
                                                            "rawText": "Array",
                                                            "flags": 96,
                                                            "start": 1069,
                                                            "end": 1075
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "cssFilename",
                                                                                "rawText": "cssFilename",
                                                                                "flags": 96,
                                                                                "start": 1076,
                                                                                "end": 1087
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "split",
                                                                                "rawText": "split",
                                                                                "flags": 96,
                                                                                "start": 1088,
                                                                                "end": 1093
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 1076,
                                                                            "end": 1093
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 201392131,
                                                                                    "text": "/",
                                                                                    "rawText": "\"/\"",
                                                                                    "flags": 96,
                                                                                    "start": 1094,
                                                                                    "end": 1097
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 1094,
                                                                            "end": 1097
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 1076,
                                                                        "end": 1098
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "length",
                                                                        "rawText": "length",
                                                                        "flags": 96,
                                                                        "start": 1099,
                                                                        "end": 1105
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 1076,
                                                                    "end": 1105
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 1076,
                                                            "end": 1105
                                                        },
                                                        "flags": 268435488,
                                                        "start": 1057,
                                                        "end": 1106
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "join",
                                                        "rawText": "join",
                                                        "flags": 96,
                                                        "start": 1107,
                                                        "end": 1111
                                                    },
                                                    "flags": 268435488,
                                                    "start": 1057,
                                                    "end": 1111
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "../",
                                                            "rawText": "\"../\"",
                                                            "flags": 96,
                                                            "start": 1112,
                                                            "end": 1117
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1112,
                                                    "end": 1117
                                                },
                                                "flags": 268435488,
                                                "start": 1057,
                                                "end": 1118
                                            },
                                            "flags": 32,
                                            "start": 1057,
                                            "end": 1118
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 1057,
                                    "end": 1118
                                },
                                "flags": 48,
                                "start": 1055,
                                "end": 1120
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 1120,
                                "end": 1124
                            },
                            "alternate": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 1126,
                                    "end": 1126
                                },
                                "flags": 48,
                                "start": 1124,
                                "end": 1127
                            },
                            "flags": 96,
                            "start": 958,
                            "end": 1127
                        },
                        "flags": 16,
                        "start": 930,
                        "end": 1127
                    }
                ],
                "flags": 16777232,
                "start": 930,
                "end": 1127
            },
            "flags": 33554448,
            "start": 923,
            "end": 1128
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 1128,
                "end": 1135
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "configureStore",
                                        "rawText": "configureStore",
                                        "flags": 96,
                                        "start": 1137,
                                        "end": 1152
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1137,
                                "end": 1152
                            },
                            "flags": 32,
                            "start": 1135,
                            "end": 1154
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "process",
                                            "rawText": "process",
                                            "flags": 96,
                                            "start": 1156,
                                            "end": 1164
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "env",
                                            "rawText": "env",
                                            "flags": 96,
                                            "start": 1165,
                                            "end": 1168
                                        },
                                        "flags": 96,
                                        "start": 1156,
                                        "end": 1168
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "NODE_ENV",
                                        "rawText": "NODE_ENV",
                                        "flags": 96,
                                        "start": 1169,
                                        "end": 1177
                                    },
                                    "flags": 96,
                                    "start": 1156,
                                    "end": 1177
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1177,
                                    "end": 1181
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "production",
                                    "rawText": "\"production\"",
                                    "flags": 96,
                                    "start": 1181,
                                    "end": 1194
                                },
                                "flags": 96,
                                "start": 1156,
                                "end": 1194
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 1194,
                                "end": 1198
                            },
                            "consequent": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "require",
                                    "rawText": "require",
                                    "flags": 96,
                                    "start": 1198,
                                    "end": 1206
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "./configureProdStore",
                                            "rawText": "\"./configureProdStore\"",
                                            "flags": 96,
                                            "start": 1207,
                                            "end": 1229
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1207,
                                    "end": 1229
                                },
                                "flags": 268435488,
                                "start": 1198,
                                "end": 1230
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 1230,
                                "end": 1239
                            },
                            "alternate": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "require",
                                    "rawText": "require",
                                    "flags": 96,
                                    "start": 1239,
                                    "end": 1247
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "./configureDevStore",
                                            "rawText": "\"./configureDevStore\"",
                                            "flags": 96,
                                            "start": 1248,
                                            "end": 1269
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1248,
                                    "end": 1269
                                },
                                "flags": 268435488,
                                "start": 1239,
                                "end": 1270
                            },
                            "flags": 96,
                            "start": 1156,
                            "end": 1270
                        },
                        "flags": 16,
                        "start": 1135,
                        "end": 1270
                    }
                ],
                "flags": 16777232,
                "start": 1135,
                "end": 1270
            },
            "flags": 33554448,
            "start": 1128,
            "end": 1271
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1271,
                    "end": 1282
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1282,
                    "end": 1324
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 1324,
                    "end": 1328
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1328,
                    "end": 1332
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 1332,
                    "end": 1336
                },
                "flags": 97,
                "start": 1271,
                "end": 1336
            },
            "flags": 16,
            "start": 1271,
            "end": 1337
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1337,
                    "end": 1343
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1343,
                    "end": 1347
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "start": 1347,
                    "end": 1419
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1419,
                    "end": 1423
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 1423,
                    "end": 1427
                },
                "flags": 97,
                "start": 1337,
                "end": 1427
            },
            "flags": 16,
            "start": 1337,
            "end": 1428
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1428,
                    "end": 1434
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1434,
                    "end": 1438
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "start": 1438,
                    "end": 1509
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1509,
                    "end": 1513
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "test",
                        "rawText": "test",
                        "flags": 96,
                        "start": 1513,
                        "end": 1518
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 65,
                        "start": 1518,
                        "end": 1522
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 97,
                        "start": 1522,
                        "end": 1566
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 65,
                        "start": 1566,
                        "end": 1570
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 1570,
                        "end": 1574
                    },
                    "flags": 96,
                    "start": 1513,
                    "end": 1574
                },
                "flags": 97,
                "start": 1428,
                "end": 1574
            },
            "flags": 16,
            "start": 1428,
            "end": 1575
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1575,
                    "end": 1581
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1581,
                    "end": 1585
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "start": 1585,
                    "end": 1607
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1607,
                    "end": 1611
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 1611,
                    "end": 1615
                },
                "flags": 97,
                "start": 1575,
                "end": 1615
            },
            "flags": 16,
            "start": 1575,
            "end": 1616
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1616,
                    "end": 1622
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1622,
                    "end": 1626
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 1626,
                    "end": 1630
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1630,
                    "end": 1634
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 97,
                    "start": 1634,
                    "end": 1707
                },
                "flags": 97,
                "start": 1616,
                "end": 1707
            },
            "flags": 16,
            "start": 1616,
            "end": 1708
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1708,
                    "end": 1714
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1714,
                    "end": 1718
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 1718,
                    "end": 1722
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1722,
                    "end": 1726
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "test",
                        "rawText": "test",
                        "flags": 97,
                        "start": 1726,
                        "end": 1800
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 65,
                        "start": 1800,
                        "end": 1804
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 1804,
                        "end": 1808
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 65,
                        "start": 1808,
                        "end": 1812
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 97,
                        "start": 1812,
                        "end": 1859
                    },
                    "flags": 97,
                    "start": 1726,
                    "end": 1859
                },
                "flags": 97,
                "start": 1708,
                "end": 1859
            },
            "flags": 16,
            "start": 1708,
            "end": 1860
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1860,
                    "end": 1866
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "start": 1866,
                    "end": 1870
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 1870,
                    "end": 1874
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "start": 1874,
                    "end": 1878
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 97,
                    "start": 1878,
                    "end": 1898
                },
                "flags": 97,
                "start": 1860,
                "end": 1898
            },
            "flags": 16,
            "start": 1860,
            "end": 1899
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 97,
                    "start": 1899,
                    "end": 1905
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1905,
                    "end": 1907
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "test",
                        "rawText": "test",
                        "flags": 96,
                        "start": 1907,
                        "end": 1912
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 65,
                        "start": 1912,
                        "end": 1923
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 1923,
                        "end": 1927
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 1927,
                        "end": 1929
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 1929,
                        "end": 1933
                    },
                    "flags": 96,
                    "start": 1907,
                    "end": 1933
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1933,
                    "end": 1935
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 1935,
                    "end": 1939
                },
                "flags": 97,
                "start": 1899,
                "end": 1939
            },
            "flags": 16,
            "start": 1899,
            "end": 1940
        }
    ],
    "isModule": false,
    "source": "var inspect = 4 === util.inspect.length\n  ? // node <= 0.8.x\n    (function(v, colors) {\n      return util.inspect(v, void 0, void 0, colors);\n    })\n  : // node > 0.8.x\n    (function(v, colors) {\n      return util.inspect(v, { colors: colors });\n    });\n\nvar inspect = 4 === util.inspect.length\n  ? // node <= 0.8.x\n    (function(v, colors) {\n      return util.inspect(v, void 0, void 0, colors);\n    })\n  : // node > 0.8.x\n    (function(v, colors) {\n      return util.inspect(v, { colors: colors });\n    });\n\nconst extractTextPluginOptions = shouldUseRelativeAssetPaths\n  // Making sure that the publicPath goes back to to build folder.\n  ? { publicPath: Array(cssFilename.split('/').length).join('../') } :\n  {};\n\nconst extractTextPluginOptions2 = shouldUseRelativeAssetPaths\n  ? // Making sure that the publicPath goes back to to build folder.\n    { publicPath: Array(cssFilename.split(\"/\").length).join(\"../\") }\n  : {};\n\nconst extractTextPluginOptions3 = shouldUseRelativeAssetPaths // Making sure that the publicPath goes back to to build folder.\n  ? { publicPath: Array(cssFilename.split(\"/\").length).join(\"../\") }\n  : {};\n\nconst { configureStore } = process.env.NODE_ENV === \"production\"\n  ? require(\"./configureProdStore\") // a\n  : require(\"./configureDevStore\"); // b\n\ntest /* comment\n  comment\n      comment\n*/\n  ? foo\n  : bar;\n\ntest\n  ? /* comment\n          comment\n    comment\n          comment\n  */\n    foo\n  : bar;\n\ntest\n  ? /* comment\n       comment\n       comment\n       comment\n    */\n    foo\n  : test\n  ? /* comment\n  comment\n    comment */\n    foo\n  : bar;\n\ntest\n  ? /* comment */\n    foo\n  : bar;\n\ntest\n  ? foo\n  : /* comment\n         comment\n     comment\n           comment\n    */\n  bar;\n\ntest\n  ? foo\n  : /* comment\n         comment\n     comment\n           comment\n    */\n  test\n  ? foo\n  : /* comment\n  comment\n    comment\n   */\n    bar;\n\ntest\n  ? foo\n  : /* comment */\n  bar;\n\ntest ? test /* c\nc */? foo : bar : bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1940
}
```

### Printed

```javascript

var inspect = 4 === util.inspect.length ?// node <= 0.8.x
 (function (v, colors) {
  return util.inspect(v, void  0, void  0, colors);
}) :// node > 0.8.x
 ;
var inspect = 4 === util.inspect.length ?// node <= 0.8.x
 (function (v, colors) {
  return util.inspect(v, void  0, void  0, colors);
}) :// node > 0.8.x
 ;
const extractTextPluginOptions = shouldUseRelativeAssetPaths 
 // Making sure that the publicPath goes back to to build folder.
? { publicPath : Array(cssFilename.split('\'/\'').length).join('\'../\'') } : {};
const extractTextPluginOptions2 = shouldUseRelativeAssetPaths ?// Making sure that the publicPath goes back to to build folder.
 { publicPath : Array(cssFilename.split('"/"').length).join('"../"') } : {};
const extractTextPluginOptions3 = shouldUseRelativeAssetPaths// Making sure that the publicPath goes back to to build folder.
 ? { publicPath : Array(cssFilename.split('"/"').length).join('"../"') } : {};
const {
  configureStore
} = process.env.NODE_ENV === '"production"' ? require('"./configureProdStore"')// a
 : require('"./configureDevStore"');// b
test/* comment
  comment
      comment
*/ ? foo : bar;
test ?/* comment
          comment
    comment
          comment
  */ foo : bar;
test ?/* comment
       comment
       comment
       comment
    */ foo : test ?/* comment
  comment
    comment */ foo : bar;
test ?/* comment */ foo : bar;
test ? foo :/* comment
         comment
     comment
           comment
    */ bar;
test ? foo :/* comment
         comment
     comment
           comment
    */ test ? foo :/* comment
  comment
    comment
   */ bar;
test ? foo :/* comment */ bar;
test ? test/* c
c */ ? foo : bar : bar;

```

### Diagnostics

```javascript
✔ No errors
```

