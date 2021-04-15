# Kataw parser test case

## Input

`````js
var source = [3, 4, 5];
var target;

var callCount = 0;

(function() {
  assert.sameValue(arguments.length, 5);
  assert.sameValue(arguments[0], 1);
  assert.sameValue(arguments[1], 2);
  assert.sameValue(arguments[2], 3);
  assert.sameValue(arguments[3], 4);
  assert.sameValue(arguments[4], 5);
  assert.sameValue(target, source);
  callCount += 1;
}.apply(null, [1, 2, ...target = source]));
`````

## Output

### Hybrid CST

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
                "flags": 768,
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
                            "text": "source",
                            "rawText": "source",
                            "flags": 768,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 768,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 18
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 768,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 12,
                            "end": 22
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 23,
                "end": 27
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "target",
                            "rawText": "target",
                            "flags": 768,
                            "start": 27,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 27,
                        "end": 34
                    }
                ],
                "flags": 128,
                "start": 27,
                "end": 34
            },
            "flags": 128,
            "start": 23,
            "end": 35
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 35,
                "end": 40
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "callCount",
                            "rawText": "callCount",
                            "flags": 768,
                            "start": 40,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 52,
                            "end": 54
                        },
                        "flags": 128,
                        "start": 40,
                        "end": 54
                    }
                ],
                "flags": 128,
                "start": 40,
                "end": 54
            },
            "flags": 128,
            "start": 35,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 58,
                                "end": 66
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 66,
                                "end": 68
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 70,
                                                        "end": 79
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 80,
                                                        "end": 89
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 70,
                                                    "end": 89
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 768,
                                                                "start": 90,
                                                                "end": 99
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 768,
                                                                "start": 100,
                                                                "end": 106
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 90,
                                                            "end": 106
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": 5,
                                                            "rawText": "5",
                                                            "flags": 768,
                                                            "start": 107,
                                                            "end": 109
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 90,
                                                    "end": 109
                                                },
                                                "flags": 256,
                                                "start": 70,
                                                "end": 110
                                            },
                                            "flags": 128,
                                            "start": 70,
                                            "end": 111
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 111,
                                                        "end": 120
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 121,
                                                        "end": 130
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 111,
                                                    "end": 130
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 768,
                                                                "start": 131,
                                                                "end": 140
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 768,
                                                                "start": 141,
                                                                "end": 142
                                                            },
                                                            "flags": 256,
                                                            "start": 131,
                                                            "end": 143
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 144,
                                                            "end": 146
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 131,
                                                    "end": 146
                                                },
                                                "flags": 256,
                                                "start": 111,
                                                "end": 147
                                            },
                                            "flags": 128,
                                            "start": 111,
                                            "end": 148
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 148,
                                                        "end": 157
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 158,
                                                        "end": 167
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 148,
                                                    "end": 167
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 768,
                                                                "start": 168,
                                                                "end": 177
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 768,
                                                                "start": 178,
                                                                "end": 179
                                                            },
                                                            "flags": 256,
                                                            "start": 168,
                                                            "end": 180
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 768,
                                                            "start": 181,
                                                            "end": 183
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 168,
                                                    "end": 183
                                                },
                                                "flags": 256,
                                                "start": 148,
                                                "end": 184
                                            },
                                            "flags": 128,
                                            "start": 148,
                                            "end": 185
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 185,
                                                        "end": 194
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 195,
                                                        "end": 204
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 185,
                                                    "end": 204
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 768,
                                                                "start": 205,
                                                                "end": 214
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 768,
                                                                "start": 215,
                                                                "end": 216
                                                            },
                                                            "flags": 256,
                                                            "start": 205,
                                                            "end": 217
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": 3,
                                                            "rawText": "3",
                                                            "flags": 768,
                                                            "start": 218,
                                                            "end": 220
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 205,
                                                    "end": 220
                                                },
                                                "flags": 256,
                                                "start": 185,
                                                "end": 221
                                            },
                                            "flags": 128,
                                            "start": 185,
                                            "end": 222
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 222,
                                                        "end": 231
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 232,
                                                        "end": 241
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 222,
                                                    "end": 241
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 768,
                                                                "start": 242,
                                                                "end": 251
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": 3,
                                                                "rawText": "3",
                                                                "flags": 768,
                                                                "start": 252,
                                                                "end": 253
                                                            },
                                                            "flags": 256,
                                                            "start": 242,
                                                            "end": 254
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": 4,
                                                            "rawText": "4",
                                                            "flags": 768,
                                                            "start": 255,
                                                            "end": 257
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 242,
                                                    "end": 257
                                                },
                                                "flags": 256,
                                                "start": 222,
                                                "end": 258
                                            },
                                            "flags": 128,
                                            "start": 222,
                                            "end": 259
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 259,
                                                        "end": 268
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 269,
                                                        "end": 278
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 259,
                                                    "end": 278
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 768,
                                                                "start": 279,
                                                                "end": 288
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": 4,
                                                                "rawText": "4",
                                                                "flags": 768,
                                                                "start": 289,
                                                                "end": 290
                                                            },
                                                            "flags": 256,
                                                            "start": 279,
                                                            "end": 291
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": 5,
                                                            "rawText": "5",
                                                            "flags": 768,
                                                            "start": 292,
                                                            "end": 294
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 279,
                                                    "end": 294
                                                },
                                                "flags": 256,
                                                "start": 259,
                                                "end": 295
                                            },
                                            "flags": 128,
                                            "start": 259,
                                            "end": 296
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 768,
                                                        "start": 296,
                                                        "end": 305
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 768,
                                                        "start": 306,
                                                        "end": 315
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 296,
                                                    "end": 315
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "target",
                                                            "rawText": "target",
                                                            "flags": 768,
                                                            "start": 316,
                                                            "end": 322
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "source",
                                                            "rawText": "source",
                                                            "flags": 768,
                                                            "start": 323,
                                                            "end": 330
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 316,
                                                    "end": 330
                                                },
                                                "flags": 256,
                                                "start": 296,
                                                "end": 331
                                            },
                                            "flags": 128,
                                            "start": 296,
                                            "end": 332
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "callCount",
                                                    "rawText": "callCount",
                                                    "flags": 768,
                                                    "start": 332,
                                                    "end": 344
                                                },
                                                "operatorToken": {
                                                    "kind": 4130,
                                                    "flags": 768,
                                                    "start": 344,
                                                    "end": 347
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 347,
                                                    "end": 349
                                                },
                                                "flags": 256,
                                                "start": 332,
                                                "end": 349
                                            },
                                            "flags": 128,
                                            "start": 332,
                                            "end": 350
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 70,
                                    "end": 350
                                },
                                "flags": 256,
                                "start": 68,
                                "end": 352
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 58,
                            "end": 352
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "apply",
                            "rawText": "apply",
                            "flags": 768,
                            "start": 353,
                            "end": 358
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 58,
                        "end": 358
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 269,
                                "text": null,
                                "flags": 768,
                                "start": 359,
                                "end": 363
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 366,
                                            "end": 367
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 768,
                                            "start": 368,
                                            "end": 370
                                        },
                                        {
                                            "kind": 223,
                                            "argument": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "target",
                                                    "rawText": "target",
                                                    "flags": 768,
                                                    "start": 375,
                                                    "end": 381
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 381,
                                                    "end": 383
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 768,
                                                    "start": 383,
                                                    "end": 390
                                                },
                                                "flags": 256,
                                                "start": 375,
                                                "end": 390
                                            },
                                            "flags": 256,
                                            "start": 371,
                                            "end": 390
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 366,
                                    "end": 390
                                },
                                "flags": 256,
                                "start": 364,
                                "end": 391
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 359,
                        "end": 391
                    },
                    "flags": 256,
                    "start": 58,
                    "end": 392
                },
                "flags": 256,
                "start": 55,
                "end": 393
            },
            "flags": 128,
            "start": 55,
            "end": 394
        }
    ],
    "isModule": false,
    "text": "var source = [3, 4, 5];\nvar target;\n\nvar callCount = 0;\n\n(function() {\n  assert.sameValue(arguments.length, 5);\n  assert.sameValue(arguments[0], 1);\n  assert.sameValue(arguments[1], 2);\n  assert.sameValue(arguments[2], 3);\n  assert.sameValue(arguments[3], 4);\n  assert.sameValue(arguments[4], 5);\n  assert.sameValue(target, source);\n  callCount += 1;\n}.apply(null, [1, 2, ...target = source]));",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 394
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

