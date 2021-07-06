# Kataw parser test case

## Input

`````js
function f() {
  throw (
    property.isIdentifier() &&
     FUNCTIONS[property.node.name] &&
     (object.isIdentifier(JEST_GLOBAL) ||
       (callee.isMemberExpression() && shouldHoistExpression(object))) &&
    FUNCTIONS[property.node.name](expr.get('arguments'))
  );

  throw (
    chalk.bold(
      'No tests found related to files changed since last commit.\n',
    ) +
    chalk.dim(
      patternInfo.watch ?
        'Press `a` to run all tests, or run Jest with `--watchAll`.' :
        'Run Jest without `-o` to run all tests.',
    )
  );

  throw !filePath.includes(coverageDirectory) &&
    !filePath.endsWith(`.${SNAPSHOT_EXTENSION}`);
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 22
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "property",
                                                        "rawText": "property",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 37
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "isIdentifier",
                                                        "rawText": "isIdentifier",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 50
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 22,
                                                    "end": 50
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 51
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 22,
                                                "end": 52
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 55
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "FUNCTIONS",
                                                    "rawText": "FUNCTIONS",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 70
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "property",
                                                            "rawText": "property",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 71,
                                                            "end": 79
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "node",
                                                            "rawText": "node",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 80,
                                                            "end": 84
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 71,
                                                        "end": 84
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 85,
                                                        "end": 89
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 71,
                                                    "end": 89
                                                },
                                                "flags": 536870944,
                                                "transformFlags": 4,
                                                "start": 55,
                                                "end": 90
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1024,
                                            "start": 22,
                                            "end": 90
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 90,
                                            "end": 93
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "object",
                                                            "rawText": "object",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 100,
                                                            "end": 106
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "isIdentifier",
                                                            "rawText": "isIdentifier",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 107,
                                                            "end": 119
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 93,
                                                        "end": 119
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "JEST_GLOBAL",
                                                                "rawText": "JEST_GLOBAL",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 120,
                                                                "end": 131
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 120,
                                                        "end": 131
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 93,
                                                    "end": 132
                                                },
                                                "operatorToken": {
                                                    "kind": 33339,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 132,
                                                    "end": 135
                                                },
                                                "right": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "callee",
                                                                    "rawText": "callee",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 144,
                                                                    "end": 150
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "isMemberExpression",
                                                                    "rawText": "isMemberExpression",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 151,
                                                                    "end": 169
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 135,
                                                                "end": 169
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 170,
                                                                "end": 170
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 135,
                                                            "end": 171
                                                        },
                                                        "operatorToken": {
                                                            "kind": 33594,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 171,
                                                            "end": 174
                                                        },
                                                        "right": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "shouldHoistExpression",
                                                                "rawText": "shouldHoistExpression",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 174,
                                                                "end": 196
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "object",
                                                                        "rawText": "object",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 197,
                                                                        "end": 203
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 197,
                                                                "end": 203
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 174,
                                                            "end": 204
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1024,
                                                        "start": 135,
                                                        "end": 204
                                                    },
                                                    "flags": 135,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 205
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1024,
                                                "start": 93,
                                                "end": 205
                                            },
                                            "flags": 93,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 206
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1024,
                                        "start": 22,
                                        "end": 206
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 209
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "FUNCTIONS",
                                                "rawText": "FUNCTIONS",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 209,
                                                "end": 223
                                            },
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "property",
                                                        "rawText": "property",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 224,
                                                        "end": 232
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "node",
                                                        "rawText": "node",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 233,
                                                        "end": 237
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 224,
                                                    "end": 237
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 238,
                                                    "end": 242
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 224,
                                                "end": 242
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 209,
                                            "end": 243
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
                                                            "text": "expr",
                                                            "rawText": "expr",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 244,
                                                            "end": 248
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "get",
                                                            "rawText": "get",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 249,
                                                            "end": 252
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 244,
                                                        "end": 252
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392131,
                                                                "text": "arguments",
                                                                "rawText": "'arguments'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 253,
                                                                "end": 264
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 253,
                                                        "end": 264
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 244,
                                                    "end": 265
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 244,
                                            "end": 265
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 209,
                                        "end": 266
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1024,
                                    "start": 22,
                                    "end": 266
                                },
                                "flags": 22,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 270
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 271
                        },
                        {
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 271,
                                "end": 280
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "chalk",
                                                "rawText": "chalk",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 282,
                                                "end": 292
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bold",
                                                "rawText": "bold",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 293,
                                                "end": 297
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 280,
                                            "end": 297
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "No tests found related to files changed since last commit.\n",
                                                    "rawText": "'No tests found related to files changed since last commit.\\n'",
                                                    "flags": 4194401,
                                                    "transformFlags": 0,
                                                    "start": 298,
                                                    "end": 367
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 298,
                                            "end": 368
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 280,
                                        "end": 374
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 374,
                                        "end": 376
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "chalk",
                                                "rawText": "chalk",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 376,
                                                "end": 386
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "dim",
                                                "rawText": "dim",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 387,
                                                "end": 390
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 376,
                                            "end": 390
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 197,
                                                    "shortCircuit": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "patternInfo",
                                                            "rawText": "patternInfo",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 391,
                                                            "end": 409
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "watch",
                                                            "rawText": "watch",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 410,
                                                            "end": 415
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 391,
                                                        "end": 415
                                                    },
                                                    "questionToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 415,
                                                        "end": 417
                                                    },
                                                    "consequent": {
                                                        "kind": 201392131,
                                                        "text": "Press `a` to run all tests, or run Jest with `--watchAll`.",
                                                        "rawText": "'Press `a` to run all tests, or run Jest with `--watchAll`.'",
                                                        "flags": 4194401,
                                                        "transformFlags": 0,
                                                        "start": 417,
                                                        "end": 486
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 486,
                                                        "end": 488
                                                    },
                                                    "alternate": {
                                                        "kind": 201392131,
                                                        "text": "Run Jest without `-o` to run all tests.",
                                                        "rawText": "'Run Jest without `-o` to run all tests.'",
                                                        "flags": 4194401,
                                                        "transformFlags": 0,
                                                        "start": 488,
                                                        "end": 538
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 391,
                                                    "end": 538
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 391,
                                            "end": 539
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 376,
                                        "end": 545
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1024,
                                    "start": 280,
                                    "end": 545
                                },
                                "flags": 280,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 549
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 271,
                            "end": 550
                        },
                        {
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 550,
                                "end": 559
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 559,
                                        "end": 561
                                    },
                                    "operand": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "filePath",
                                                "rawText": "filePath",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 561,
                                                "end": 569
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "includes",
                                                "rawText": "includes",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 570,
                                                "end": 578
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 561,
                                            "end": 578
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "coverageDirectory",
                                                    "rawText": "coverageDirectory",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 579,
                                                    "end": 596
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 579,
                                            "end": 596
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 561,
                                        "end": 597
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 559,
                                    "end": 597
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 597,
                                    "end": 600
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 600,
                                        "end": 606
                                    },
                                    "operand": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "filePath",
                                                "rawText": "filePath",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 606,
                                                "end": 614
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "endsWith",
                                                "rawText": "endsWith",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 615,
                                                "end": 623
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 606,
                                            "end": 623
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 227,
                                                    "spans": [
                                                        {
                                                            "kind": 65764,
                                                            "rawText": ".",
                                                            "text": ".",
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "SNAPSHOT_EXTENSION",
                                                                "rawText": "SNAPSHOT_EXTENSION",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 628,
                                                                "end": 646
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 624,
                                                            "end": 646
                                                        }
                                                    ],
                                                    "tail": {
                                                        "kind": 458761,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 646,
                                                        "end": 648
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 624,
                                                    "end": 648
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 624,
                                            "end": 648
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 606,
                                        "end": 649
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 600,
                                    "end": 649
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 559,
                                "end": 649
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 550,
                            "end": 650
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 650
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 652
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 652
        }
    ],
    "isModule": false,
    "source": "function f() {\n  throw (\n    property.isIdentifier() &&\n     FUNCTIONS[property.node.name] &&\n     (object.isIdentifier(JEST_GLOBAL) ||\n       (callee.isMemberExpression() && shouldHoistExpression(object))) &&\n    FUNCTIONS[property.node.name](expr.get('arguments'))\n  );\n\n  throw (\n    chalk.bold(\n      'No tests found related to files changed since last commit.\\n',\n    ) +\n    chalk.dim(\n      patternInfo.watch ?\n        'Press `a` to run all tests, or run Jest with `--watchAll`.' :\n        'Run Jest without `-o` to run all tests.',\n    )\n  );\n\n  throw !filePath.includes(coverageDirectory) &&\n    !filePath.endsWith(`.${SNAPSHOT_EXTENSION}`);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 652
}
```

### Printed

```javascript

function f() {
  throw (
    property.isIdentifier() &&
    FUNCTIONS[property.node.name] &&
    (
      object.isIdentifier(JEST_GLOBAL) ||
      (callee.isMemberExpression() && shouldHoistExpression(object))
    ) &&
    FUNCTIONS[property.node.name](expr.get("'arguments'"))
  );
  throw (
    chalk.bold(
      "'No tests found related to files changed since last commit.\n'",
    ) +
    chalk.dim(
      patternInfo.watch
        ? "'Press `a` to run all tests, or run Jest with `--watchAll`.'"
        : "'Run Jest without `-o` to run all tests.'",
    )
  );
  throw !filePath.includes(coverageDirectory) &&
    !filePath.endsWith(`.${SNAPSHOT_EXTENSION}`);
}
```

### Diagnostics

```javascript
✔ No errors
```

