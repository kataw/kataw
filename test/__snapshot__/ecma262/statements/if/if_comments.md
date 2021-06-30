# Kataw parser test case

## Input

`````js
async function f1() {
  if (untrackedChoice === 0) /* Cancel */ {
    return null;
  } else if (untrackedChoice === 1) /* Add */ {
    await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  } else if (untrackedChoice === 2) /* Allow Untracked */ {
    allowUntracked = true;
  }
}

async function f2() {
  if (untrackedChoice === 0) /* Cancel */
    null;
  else if (untrackedChoice === 1) /* Add */
    shouldAmend = true;
  else if (untrackedChoice === 2) /* Allow Untracked */
    allowUntracked = true;
}

async function f3() {
  if (untrackedChoice === 0) /* Cancel */ // Cancel
    null;
  else if (untrackedChoice === 1) /* Add */ // Add
    shouldAmend = true;
  else if (untrackedChoice === 2) /* Allow Untracked */ // Allow Untracked
    allowUntracked = true;
}

async function f4() {
  if (untrackedChoice === 0)
    /* Cancel */ {
      return null;
    }
  else if (untrackedChoice === 1)
    /* Add */ {
      await repository.addAll(Array.from(untrackedChanges.keys()));
      shouldAmend = true;
    }
  else if (untrackedChoice === 2)
    /* Allow Untracked */ {
      allowUntracked = true;
    }
}

async function f5() {
  if (untrackedChoice === 0) {
    /* Cancel */ return null;
  } else if (untrackedChoice === 1) {
    /* Add */ await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  } else if (untrackedChoice === 2) {
    /* Allow Untracked */ allowUntracked = true;
  }
}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "start": 21,
                                "end": 26
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "untrackedChoice",
                                    "rawText": "untrackedChoice",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 43
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 43,
                                    "end": 47
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 49
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "start": 65,
                                                "end": 76
                                            },
                                            "expression": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "start": 76,
                                                "end": 81
                                            },
                                            "flags": 81,
                                            "start": 65,
                                            "end": 82
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 65,
                                    "end": 82
                                },
                                "flags": 16,
                                "start": 50,
                                "end": 86
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 64,
                                "start": 86,
                                "end": 91
                            },
                            "alternate": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 91,
                                    "end": 94
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "untrackedChoice",
                                        "rawText": "untrackedChoice",
                                        "flags": 96,
                                        "start": 96,
                                        "end": 111
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "start": 111,
                                        "end": 115
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 115,
                                        "end": 117
                                    },
                                    "flags": 32,
                                    "start": 96,
                                    "end": 117
                                },
                                "consequent": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 65,
                                                        "start": 130,
                                                        "end": 140
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "repository",
                                                                "rawText": "repository",
                                                                "flags": 96,
                                                                "start": 140,
                                                                "end": 151
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "addAll",
                                                                "rawText": "addAll",
                                                                "flags": 96,
                                                                "start": 152,
                                                                "end": 158
                                                            },
                                                            "flags": 96,
                                                            "start": 140,
                                                            "end": 158
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "Array",
                                                                            "rawText": "Array",
                                                                            "flags": 96,
                                                                            "start": 159,
                                                                            "end": 164
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "from",
                                                                            "rawText": "from",
                                                                            "flags": 96,
                                                                            "start": 165,
                                                                            "end": 169
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 159,
                                                                        "end": 169
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 134299649,
                                                                                        "text": "untrackedChanges",
                                                                                        "rawText": "untrackedChanges",
                                                                                        "flags": 96,
                                                                                        "start": 170,
                                                                                        "end": 186
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "keys",
                                                                                        "rawText": "keys",
                                                                                        "flags": 96,
                                                                                        "start": 187,
                                                                                        "end": 191
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 170,
                                                                                    "end": 191
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 192,
                                                                                    "end": 192
                                                                                },
                                                                                "flags": 268435488,
                                                                                "start": 170,
                                                                                "end": 193
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 170,
                                                                        "end": 193
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 159,
                                                                    "end": 194
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 159,
                                                            "end": 194
                                                        },
                                                        "flags": 268435488,
                                                        "start": 140,
                                                        "end": 195
                                                    },
                                                    "flags": 32,
                                                    "start": 130,
                                                    "end": 195
                                                },
                                                "flags": 16,
                                                "start": 130,
                                                "end": 196
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "shouldAmend",
                                                        "rawText": "shouldAmend",
                                                        "flags": 96,
                                                        "start": 196,
                                                        "end": 212
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 212,
                                                        "end": 214
                                                    },
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "start": 214,
                                                        "end": 219
                                                    },
                                                    "flags": 32,
                                                    "start": 196,
                                                    "end": 219
                                                },
                                                "flags": 16,
                                                "start": 196,
                                                "end": 220
                                            }
                                        ],
                                        "flags": 17,
                                        "start": 130,
                                        "end": 220
                                    },
                                    "flags": 16,
                                    "start": 118,
                                    "end": 224
                                },
                                "elseKeyword": {
                                    "kind": 4194389,
                                    "flags": 64,
                                    "start": 224,
                                    "end": 229
                                },
                                "alternate": {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 80,
                                        "start": 229,
                                        "end": 232
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "untrackedChoice",
                                            "rawText": "untrackedChoice",
                                            "flags": 96,
                                            "start": 234,
                                            "end": 249
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 249,
                                            "end": 253
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 253,
                                            "end": 255
                                        },
                                        "flags": 32,
                                        "start": 234,
                                        "end": 255
                                    },
                                    "consequent": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "allowUntracked",
                                                            "rawText": "allowUntracked",
                                                            "flags": 96,
                                                            "start": 280,
                                                            "end": 299
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 299,
                                                            "end": 301
                                                        },
                                                        "right": {
                                                            "kind": 24752947,
                                                            "flags": 96,
                                                            "start": 301,
                                                            "end": 306
                                                        },
                                                        "flags": 32,
                                                        "start": 280,
                                                        "end": 306
                                                    },
                                                    "flags": 16,
                                                    "start": 280,
                                                    "end": 307
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 280,
                                            "end": 307
                                        },
                                        "flags": 16,
                                        "start": 256,
                                        "end": 311
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "start": 229,
                                    "end": 311
                                },
                                "flags": 80,
                                "start": 91,
                                "end": 311
                            },
                            "flags": 81,
                            "start": 21,
                            "end": 311
                        }
                    ],
                    "flags": 33,
                    "start": 21,
                    "end": 311
                },
                "flags": 32,
                "start": 19,
                "end": 313
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 313
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 313,
                "end": 320
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 320,
                "end": 329
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 329,
                "end": 332
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 333,
                "end": 333
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "start": 336,
                                "end": 341
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "untrackedChoice",
                                    "rawText": "untrackedChoice",
                                    "flags": 96,
                                    "start": 343,
                                    "end": 358
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 358,
                                    "end": 362
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 362,
                                    "end": 364
                                },
                                "flags": 32,
                                "start": 343,
                                "end": 364
                            },
                            "consequent": {
                                "kind": 120,
                                "expression": {
                                    "kind": 138477575,
                                    "flags": 97,
                                    "start": 365,
                                    "end": 387
                                },
                                "flags": 16,
                                "start": 365,
                                "end": 388
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 65,
                                "start": 388,
                                "end": 395
                            },
                            "alternate": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 395,
                                    "end": 398
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "untrackedChoice",
                                        "rawText": "untrackedChoice",
                                        "flags": 96,
                                        "start": 400,
                                        "end": 415
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "start": 415,
                                        "end": 419
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 419,
                                        "end": 421
                                    },
                                    "flags": 32,
                                    "start": 400,
                                    "end": 421
                                },
                                "consequent": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "shouldAmend",
                                            "rawText": "shouldAmend",
                                            "flags": 96,
                                            "start": 422,
                                            "end": 448
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 448,
                                            "end": 450
                                        },
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "start": 450,
                                            "end": 455
                                        },
                                        "flags": 32,
                                        "start": 422,
                                        "end": 455
                                    },
                                    "flags": 16,
                                    "start": 422,
                                    "end": 456
                                },
                                "elseKeyword": {
                                    "kind": 4194389,
                                    "flags": 65,
                                    "start": 456,
                                    "end": 463
                                },
                                "alternate": {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 80,
                                        "start": 463,
                                        "end": 466
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "untrackedChoice",
                                            "rawText": "untrackedChoice",
                                            "flags": 96,
                                            "start": 468,
                                            "end": 483
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 483,
                                            "end": 487
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 487,
                                            "end": 489
                                        },
                                        "flags": 32,
                                        "start": 468,
                                        "end": 489
                                    },
                                    "consequent": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "allowUntracked",
                                                "rawText": "allowUntracked",
                                                "flags": 96,
                                                "start": 490,
                                                "end": 531
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 531,
                                                "end": 533
                                            },
                                            "right": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 533,
                                                "end": 538
                                            },
                                            "flags": 32,
                                            "start": 490,
                                            "end": 538
                                        },
                                        "flags": 16,
                                        "start": 490,
                                        "end": 539
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "start": 463,
                                    "end": 539
                                },
                                "flags": 80,
                                "start": 395,
                                "end": 539
                            },
                            "flags": 81,
                            "start": 336,
                            "end": 539
                        }
                    ],
                    "flags": 33,
                    "start": 336,
                    "end": 539
                },
                "flags": 32,
                "start": 334,
                "end": 541
            },
            "returnType": null,
            "flags": 144,
            "start": 313,
            "end": 541
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 541,
                "end": 548
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 548,
                "end": 557
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f3",
                "rawText": "f3",
                "flags": 96,
                "start": 557,
                "end": 560
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 561,
                "end": 561
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "start": 564,
                                "end": 569
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "untrackedChoice",
                                    "rawText": "untrackedChoice",
                                    "flags": 96,
                                    "start": 571,
                                    "end": 586
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 586,
                                    "end": 590
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 590,
                                    "end": 592
                                },
                                "flags": 32,
                                "start": 571,
                                "end": 592
                            },
                            "consequent": {
                                "kind": 120,
                                "expression": {
                                    "kind": 138477575,
                                    "flags": 97,
                                    "start": 593,
                                    "end": 625
                                },
                                "flags": 16,
                                "start": 593,
                                "end": 626
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 65,
                                "start": 626,
                                "end": 633
                            },
                            "alternate": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 633,
                                    "end": 636
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "untrackedChoice",
                                        "rawText": "untrackedChoice",
                                        "flags": 96,
                                        "start": 638,
                                        "end": 653
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "start": 653,
                                        "end": 657
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 657,
                                        "end": 659
                                    },
                                    "flags": 32,
                                    "start": 638,
                                    "end": 659
                                },
                                "consequent": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "shouldAmend",
                                            "rawText": "shouldAmend",
                                            "flags": 96,
                                            "start": 660,
                                            "end": 693
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 693,
                                            "end": 695
                                        },
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "start": 695,
                                            "end": 700
                                        },
                                        "flags": 32,
                                        "start": 660,
                                        "end": 700
                                    },
                                    "flags": 16,
                                    "start": 660,
                                    "end": 701
                                },
                                "elseKeyword": {
                                    "kind": 4194389,
                                    "flags": 65,
                                    "start": 701,
                                    "end": 708
                                },
                                "alternate": {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 80,
                                        "start": 708,
                                        "end": 711
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "untrackedChoice",
                                            "rawText": "untrackedChoice",
                                            "flags": 96,
                                            "start": 713,
                                            "end": 728
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 728,
                                            "end": 732
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 732,
                                            "end": 734
                                        },
                                        "flags": 32,
                                        "start": 713,
                                        "end": 734
                                    },
                                    "consequent": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "allowUntracked",
                                                "rawText": "allowUntracked",
                                                "flags": 96,
                                                "start": 735,
                                                "end": 795
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 795,
                                                "end": 797
                                            },
                                            "right": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 797,
                                                "end": 802
                                            },
                                            "flags": 32,
                                            "start": 735,
                                            "end": 802
                                        },
                                        "flags": 16,
                                        "start": 735,
                                        "end": 803
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "start": 708,
                                    "end": 803
                                },
                                "flags": 80,
                                "start": 633,
                                "end": 803
                            },
                            "flags": 81,
                            "start": 564,
                            "end": 803
                        }
                    ],
                    "flags": 33,
                    "start": 564,
                    "end": 803
                },
                "flags": 32,
                "start": 562,
                "end": 805
            },
            "returnType": null,
            "flags": 144,
            "start": 541,
            "end": 805
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 805,
                "end": 812
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 812,
                "end": 821
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f4",
                "rawText": "f4",
                "flags": 96,
                "start": 821,
                "end": 824
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 825,
                "end": 825
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "start": 828,
                                "end": 833
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "untrackedChoice",
                                    "rawText": "untrackedChoice",
                                    "flags": 96,
                                    "start": 835,
                                    "end": 850
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 850,
                                    "end": 854
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 854,
                                    "end": 856
                                },
                                "flags": 32,
                                "start": 835,
                                "end": 856
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "start": 876,
                                                "end": 889
                                            },
                                            "expression": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "start": 889,
                                                "end": 894
                                            },
                                            "flags": 81,
                                            "start": 876,
                                            "end": 895
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 876,
                                    "end": 895
                                },
                                "flags": 17,
                                "start": 857,
                                "end": 901
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 65,
                                "start": 901,
                                "end": 908
                            },
                            "alternate": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 908,
                                    "end": 911
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "untrackedChoice",
                                        "rawText": "untrackedChoice",
                                        "flags": 96,
                                        "start": 913,
                                        "end": 928
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "start": 928,
                                        "end": 932
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 932,
                                        "end": 934
                                    },
                                    "flags": 32,
                                    "start": 913,
                                    "end": 934
                                },
                                "consequent": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 65,
                                                        "start": 951,
                                                        "end": 963
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "repository",
                                                                "rawText": "repository",
                                                                "flags": 96,
                                                                "start": 963,
                                                                "end": 974
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "addAll",
                                                                "rawText": "addAll",
                                                                "flags": 96,
                                                                "start": 975,
                                                                "end": 981
                                                            },
                                                            "flags": 96,
                                                            "start": 963,
                                                            "end": 981
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "Array",
                                                                            "rawText": "Array",
                                                                            "flags": 96,
                                                                            "start": 982,
                                                                            "end": 987
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "from",
                                                                            "rawText": "from",
                                                                            "flags": 96,
                                                                            "start": 988,
                                                                            "end": 992
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 982,
                                                                        "end": 992
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 134299649,
                                                                                        "text": "untrackedChanges",
                                                                                        "rawText": "untrackedChanges",
                                                                                        "flags": 96,
                                                                                        "start": 993,
                                                                                        "end": 1009
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "keys",
                                                                                        "rawText": "keys",
                                                                                        "flags": 96,
                                                                                        "start": 1010,
                                                                                        "end": 1014
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 993,
                                                                                    "end": 1014
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 1015,
                                                                                    "end": 1015
                                                                                },
                                                                                "flags": 268435488,
                                                                                "start": 993,
                                                                                "end": 1016
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 993,
                                                                        "end": 1016
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 982,
                                                                    "end": 1017
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 982,
                                                            "end": 1017
                                                        },
                                                        "flags": 268435488,
                                                        "start": 963,
                                                        "end": 1018
                                                    },
                                                    "flags": 32,
                                                    "start": 951,
                                                    "end": 1018
                                                },
                                                "flags": 16,
                                                "start": 951,
                                                "end": 1019
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "shouldAmend",
                                                        "rawText": "shouldAmend",
                                                        "flags": 96,
                                                        "start": 1019,
                                                        "end": 1037
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 1037,
                                                        "end": 1039
                                                    },
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "start": 1039,
                                                        "end": 1044
                                                    },
                                                    "flags": 32,
                                                    "start": 1019,
                                                    "end": 1044
                                                },
                                                "flags": 16,
                                                "start": 1019,
                                                "end": 1045
                                            }
                                        ],
                                        "flags": 17,
                                        "start": 951,
                                        "end": 1045
                                    },
                                    "flags": 17,
                                    "start": 935,
                                    "end": 1051
                                },
                                "elseKeyword": {
                                    "kind": 4194389,
                                    "flags": 65,
                                    "start": 1051,
                                    "end": 1058
                                },
                                "alternate": {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 80,
                                        "start": 1058,
                                        "end": 1061
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "untrackedChoice",
                                            "rawText": "untrackedChoice",
                                            "flags": 96,
                                            "start": 1063,
                                            "end": 1078
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 1078,
                                            "end": 1082
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 1082,
                                            "end": 1084
                                        },
                                        "flags": 32,
                                        "start": 1063,
                                        "end": 1084
                                    },
                                    "consequent": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "allowUntracked",
                                                            "rawText": "allowUntracked",
                                                            "flags": 96,
                                                            "start": 1113,
                                                            "end": 1134
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 1134,
                                                            "end": 1136
                                                        },
                                                        "right": {
                                                            "kind": 24752947,
                                                            "flags": 96,
                                                            "start": 1136,
                                                            "end": 1141
                                                        },
                                                        "flags": 32,
                                                        "start": 1113,
                                                        "end": 1141
                                                    },
                                                    "flags": 16,
                                                    "start": 1113,
                                                    "end": 1142
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 1113,
                                            "end": 1142
                                        },
                                        "flags": 17,
                                        "start": 1085,
                                        "end": 1148
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "start": 1058,
                                    "end": 1148
                                },
                                "flags": 80,
                                "start": 908,
                                "end": 1148
                            },
                            "flags": 81,
                            "start": 828,
                            "end": 1148
                        }
                    ],
                    "flags": 33,
                    "start": 828,
                    "end": 1148
                },
                "flags": 32,
                "start": 826,
                "end": 1150
            },
            "returnType": null,
            "flags": 144,
            "start": 805,
            "end": 1150
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1150,
                "end": 1157
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1157,
                "end": 1166
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f5",
                "rawText": "f5",
                "flags": 96,
                "start": 1166,
                "end": 1169
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1170,
                "end": 1170
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "start": 1173,
                                "end": 1178
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "untrackedChoice",
                                    "rawText": "untrackedChoice",
                                    "flags": 96,
                                    "start": 1180,
                                    "end": 1195
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1195,
                                    "end": 1199
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 1199,
                                    "end": 1201
                                },
                                "flags": 32,
                                "start": 1180,
                                "end": 1201
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "start": 1204,
                                                "end": 1228
                                            },
                                            "expression": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "start": 1228,
                                                "end": 1233
                                            },
                                            "flags": 81,
                                            "start": 1204,
                                            "end": 1234
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1204,
                                    "end": 1234
                                },
                                "flags": 16,
                                "start": 1202,
                                "end": 1238
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 64,
                                "start": 1238,
                                "end": 1243
                            },
                            "alternate": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 1243,
                                    "end": 1246
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "untrackedChoice",
                                        "rawText": "untrackedChoice",
                                        "flags": 96,
                                        "start": 1248,
                                        "end": 1263
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "start": 1263,
                                        "end": 1267
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 1267,
                                        "end": 1269
                                    },
                                    "flags": 32,
                                    "start": 1248,
                                    "end": 1269
                                },
                                "consequent": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 65,
                                                        "start": 1272,
                                                        "end": 1292
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "repository",
                                                                "rawText": "repository",
                                                                "flags": 96,
                                                                "start": 1292,
                                                                "end": 1303
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "addAll",
                                                                "rawText": "addAll",
                                                                "flags": 96,
                                                                "start": 1304,
                                                                "end": 1310
                                                            },
                                                            "flags": 96,
                                                            "start": 1292,
                                                            "end": 1310
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "Array",
                                                                            "rawText": "Array",
                                                                            "flags": 96,
                                                                            "start": 1311,
                                                                            "end": 1316
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "from",
                                                                            "rawText": "from",
                                                                            "flags": 96,
                                                                            "start": 1317,
                                                                            "end": 1321
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 1311,
                                                                        "end": 1321
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 134299649,
                                                                                        "text": "untrackedChanges",
                                                                                        "rawText": "untrackedChanges",
                                                                                        "flags": 96,
                                                                                        "start": 1322,
                                                                                        "end": 1338
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "keys",
                                                                                        "rawText": "keys",
                                                                                        "flags": 96,
                                                                                        "start": 1339,
                                                                                        "end": 1343
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 1322,
                                                                                    "end": 1343
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 1344,
                                                                                    "end": 1344
                                                                                },
                                                                                "flags": 268435488,
                                                                                "start": 1322,
                                                                                "end": 1345
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 1322,
                                                                        "end": 1345
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 1311,
                                                                    "end": 1346
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 1311,
                                                            "end": 1346
                                                        },
                                                        "flags": 268435488,
                                                        "start": 1292,
                                                        "end": 1347
                                                    },
                                                    "flags": 32,
                                                    "start": 1272,
                                                    "end": 1347
                                                },
                                                "flags": 16,
                                                "start": 1272,
                                                "end": 1348
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "shouldAmend",
                                                        "rawText": "shouldAmend",
                                                        "flags": 96,
                                                        "start": 1348,
                                                        "end": 1364
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 1364,
                                                        "end": 1366
                                                    },
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "start": 1366,
                                                        "end": 1371
                                                    },
                                                    "flags": 32,
                                                    "start": 1348,
                                                    "end": 1371
                                                },
                                                "flags": 16,
                                                "start": 1348,
                                                "end": 1372
                                            }
                                        ],
                                        "flags": 17,
                                        "start": 1272,
                                        "end": 1372
                                    },
                                    "flags": 16,
                                    "start": 1270,
                                    "end": 1376
                                },
                                "elseKeyword": {
                                    "kind": 4194389,
                                    "flags": 64,
                                    "start": 1376,
                                    "end": 1381
                                },
                                "alternate": {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 80,
                                        "start": 1381,
                                        "end": 1384
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "untrackedChoice",
                                            "rawText": "untrackedChoice",
                                            "flags": 96,
                                            "start": 1386,
                                            "end": 1401
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 1401,
                                            "end": 1405
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 1405,
                                            "end": 1407
                                        },
                                        "flags": 32,
                                        "start": 1386,
                                        "end": 1407
                                    },
                                    "consequent": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "allowUntracked",
                                                            "rawText": "allowUntracked",
                                                            "flags": 96,
                                                            "start": 1410,
                                                            "end": 1451
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 1451,
                                                            "end": 1453
                                                        },
                                                        "right": {
                                                            "kind": 24752947,
                                                            "flags": 96,
                                                            "start": 1453,
                                                            "end": 1458
                                                        },
                                                        "flags": 32,
                                                        "start": 1410,
                                                        "end": 1458
                                                    },
                                                    "flags": 16,
                                                    "start": 1410,
                                                    "end": 1459
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 1410,
                                            "end": 1459
                                        },
                                        "flags": 16,
                                        "start": 1408,
                                        "end": 1463
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "start": 1381,
                                    "end": 1463
                                },
                                "flags": 80,
                                "start": 1243,
                                "end": 1463
                            },
                            "flags": 81,
                            "start": 1173,
                            "end": 1463
                        }
                    ],
                    "flags": 33,
                    "start": 1173,
                    "end": 1463
                },
                "flags": 32,
                "start": 1171,
                "end": 1465
            },
            "returnType": null,
            "flags": 144,
            "start": 1150,
            "end": 1465
        }
    ],
    "isModule": false,
    "source": "async function f1() {\n  if (untrackedChoice === 0) /* Cancel */ {\n    return null;\n  } else if (untrackedChoice === 1) /* Add */ {\n    await repository.addAll(Array.from(untrackedChanges.keys()));\n    shouldAmend = true;\n  } else if (untrackedChoice === 2) /* Allow Untracked */ {\n    allowUntracked = true;\n  }\n}\n\nasync function f2() {\n  if (untrackedChoice === 0) /* Cancel */\n    null;\n  else if (untrackedChoice === 1) /* Add */\n    shouldAmend = true;\n  else if (untrackedChoice === 2) /* Allow Untracked */\n    allowUntracked = true;\n}\n\nasync function f3() {\n  if (untrackedChoice === 0) /* Cancel */ // Cancel\n    null;\n  else if (untrackedChoice === 1) /* Add */ // Add\n    shouldAmend = true;\n  else if (untrackedChoice === 2) /* Allow Untracked */ // Allow Untracked\n    allowUntracked = true;\n}\n\nasync function f4() {\n  if (untrackedChoice === 0)\n    /* Cancel */ {\n      return null;\n    }\n  else if (untrackedChoice === 1)\n    /* Add */ {\n      await repository.addAll(Array.from(untrackedChanges.keys()));\n      shouldAmend = true;\n    }\n  else if (untrackedChoice === 2)\n    /* Allow Untracked */ {\n      allowUntracked = true;\n    }\n}\n\nasync function f5() {\n  if (untrackedChoice === 0) {\n    /* Cancel */ return null;\n  } else if (untrackedChoice === 1) {\n    /* Add */ await repository.addAll(Array.from(untrackedChanges.keys()));\n    shouldAmend = true;\n  } else if (untrackedChoice === 2) {\n    /* Allow Untracked */ allowUntracked = true;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1465
}
```

### Printed

```javascript

async function f1() {
  if (untrackedChoice === 0)/* Cancel */ {
    return null;
  }
  else if (untrackedChoice === 1)/* Add */ {
    await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  }
  else if (untrackedChoice === 2)/* Allow Untracked */ {
    allowUntracked = true;
  }
}
async function f2() {
  if (untrackedChoice === 0)/* Cancel */
    null;
  else if (untrackedChoice === 1)/* Add */
    shouldAmend = true;
  else if (untrackedChoice === 2)/* Allow Untracked */
    allowUntracked = true;
}
async function f3() {
  if (untrackedChoice === 0)/* Cancel */ // Cancel
    null;
  else if (untrackedChoice === 1)/* Add */ // Add
    shouldAmend = true;
  else if (untrackedChoice === 2)/* Allow Untracked */ // Allow Untracked
    allowUntracked = true;
}
async function f4() {
  if (untrackedChoice === 0) {
    return null;
  }
  else if (untrackedChoice === 1) {
    await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  }
  else if (untrackedChoice === 2) {
    allowUntracked = true;
  }
}
async function f5() {
  if (untrackedChoice === 0) {
     /* Cancel */return null;
  }
  else if (untrackedChoice === 1) {
     /* Add */await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  }
  else if (untrackedChoice === 2) {
     /* Allow Untracked */allowUntracked = true;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

