# Kataw parser test case

## Input

`````js
function f() {
  return (
    property.isIdentifier() &&
     FUNCTIONS[property.node.name] &&
     (object.isIdentifier(JEST_GLOBAL) ||
       (callee.isMemberExpression() && shouldHoistExpression(object))) &&
    FUNCTIONS[property.node.name](expr.get('arguments'))
  );

  return (
    chalk.bold(
      'No tests found related to files changed since last commit.\n',
    ) +
    chalk.dim(
      patternInfo.watch ?
        'Press `a` to run all tests, or run Jest with `--watchAll`.' :
        'Run Jest without `-o` to run all tests.',
    )
  );

  return !filePath.includes(coverageDirectory) &&
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 23
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
                                                        "start": 25,
                                                        "end": 38
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "isIdentifier",
                                                        "rawText": "isIdentifier",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 51
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 23,
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
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 23,
                                                "end": 53
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 56
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "FUNCTIONS",
                                                    "rawText": "FUNCTIONS",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 71
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
                                                            "start": 72,
                                                            "end": 80
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "node",
                                                            "rawText": "node",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 85
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 72,
                                                        "end": 85
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 86,
                                                        "end": 90
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 72,
                                                    "end": 90
                                                },
                                                "flags": 536870944,
                                                "transformFlags": 4,
                                                "start": 56,
                                                "end": 91
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1024,
                                            "start": 23,
                                            "end": 91
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 94
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
                                                            "start": 101,
                                                            "end": 107
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "isIdentifier",
                                                            "rawText": "isIdentifier",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 108,
                                                            "end": 120
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 94,
                                                        "end": 120
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
                                                                "start": 121,
                                                                "end": 132
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 121,
                                                        "end": 132
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 94,
                                                    "end": 133
                                                },
                                                "operatorToken": {
                                                    "kind": 33339,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 133,
                                                    "end": 136
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
                                                                    "start": 145,
                                                                    "end": 151
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "isMemberExpression",
                                                                    "rawText": "isMemberExpression",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 152,
                                                                    "end": 170
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 136,
                                                                "end": 170
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 171,
                                                                "end": 171
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 136,
                                                            "end": 172
                                                        },
                                                        "operatorToken": {
                                                            "kind": 33594,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 172,
                                                            "end": 175
                                                        },
                                                        "right": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "shouldHoistExpression",
                                                                "rawText": "shouldHoistExpression",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 175,
                                                                "end": 197
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
                                                                        "start": 198,
                                                                        "end": 204
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 198,
                                                                "end": 204
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 175,
                                                            "end": 205
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1024,
                                                        "start": 136,
                                                        "end": 205
                                                    },
                                                    "flags": 136,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 206
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1024,
                                                "start": 94,
                                                "end": 206
                                            },
                                            "flags": 94,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 207
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1024,
                                        "start": 23,
                                        "end": 207
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 207,
                                        "end": 210
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
                                                "start": 210,
                                                "end": 224
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
                                                        "start": 225,
                                                        "end": 233
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "node",
                                                        "rawText": "node",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 234,
                                                        "end": 238
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 225,
                                                    "end": 238
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 239,
                                                    "end": 243
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 225,
                                                "end": 243
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 210,
                                            "end": 244
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
                                                            "start": 245,
                                                            "end": 249
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "get",
                                                            "rawText": "get",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 250,
                                                            "end": 253
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 245,
                                                        "end": 253
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
                                                                "start": 254,
                                                                "end": 265
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 254,
                                                        "end": 265
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 245,
                                                    "end": 266
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 245,
                                            "end": 266
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 210,
                                        "end": 267
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1024,
                                    "start": 23,
                                    "end": 267
                                },
                                "flags": 23,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 271
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 14,
                            "end": 272
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 272,
                                "end": 282
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
                                                "start": 284,
                                                "end": 294
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bold",
                                                "rawText": "bold",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 295,
                                                "end": 299
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 282,
                                            "end": 299
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
                                                    "start": 300,
                                                    "end": 369
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 300,
                                            "end": 370
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 282,
                                        "end": 376
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 376,
                                        "end": 378
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
                                                "start": 378,
                                                "end": 388
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "dim",
                                                "rawText": "dim",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 389,
                                                "end": 392
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 378,
                                            "end": 392
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
                                                            "start": 393,
                                                            "end": 411
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "watch",
                                                            "rawText": "watch",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 412,
                                                            "end": 417
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 393,
                                                        "end": 417
                                                    },
                                                    "questionToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 417,
                                                        "end": 419
                                                    },
                                                    "consequent": {
                                                        "kind": 201392131,
                                                        "text": "Press `a` to run all tests, or run Jest with `--watchAll`.",
                                                        "rawText": "'Press `a` to run all tests, or run Jest with `--watchAll`.'",
                                                        "flags": 4194401,
                                                        "transformFlags": 0,
                                                        "start": 419,
                                                        "end": 488
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 488,
                                                        "end": 490
                                                    },
                                                    "alternate": {
                                                        "kind": 201392131,
                                                        "text": "Run Jest without `-o` to run all tests.",
                                                        "rawText": "'Run Jest without `-o` to run all tests.'",
                                                        "flags": 4194401,
                                                        "transformFlags": 0,
                                                        "start": 490,
                                                        "end": 540
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 393,
                                                    "end": 540
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 393,
                                            "end": 541
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 378,
                                        "end": 547
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1024,
                                    "start": 282,
                                    "end": 547
                                },
                                "flags": 282,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 551
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 272,
                            "end": 552
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 552,
                                "end": 562
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 562,
                                        "end": 564
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
                                                "start": 564,
                                                "end": 572
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "includes",
                                                "rawText": "includes",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 573,
                                                "end": 581
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 564,
                                            "end": 581
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
                                                    "start": 582,
                                                    "end": 599
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 582,
                                            "end": 599
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 564,
                                        "end": 600
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 562,
                                    "end": 600
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 600,
                                    "end": 603
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 603,
                                        "end": 609
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
                                                "start": 609,
                                                "end": 617
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "endsWith",
                                                "rawText": "endsWith",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 618,
                                                "end": 626
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 609,
                                            "end": 626
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
                                                                "start": 631,
                                                                "end": 649
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 627,
                                                            "end": 649
                                                        }
                                                    ],
                                                    "tail": {
                                                        "kind": 458761,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 649,
                                                        "end": 651
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 627,
                                                    "end": 651
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 627,
                                            "end": 651
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 609,
                                        "end": 652
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 603,
                                    "end": 652
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 562,
                                "end": 652
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 552,
                            "end": 653
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 653
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 655
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 655
        }
    ],
    "isModule": false,
    "source": "function f() {\n  return (\n    property.isIdentifier() &&\n     FUNCTIONS[property.node.name] &&\n     (object.isIdentifier(JEST_GLOBAL) ||\n       (callee.isMemberExpression() && shouldHoistExpression(object))) &&\n    FUNCTIONS[property.node.name](expr.get('arguments'))\n  );\n\n  return (\n    chalk.bold(\n      'No tests found related to files changed since last commit.\\n',\n    ) +\n    chalk.dim(\n      patternInfo.watch ?\n        'Press `a` to run all tests, or run Jest with `--watchAll`.' :\n        'Run Jest without `-o` to run all tests.',\n    )\n  );\n\n  return !filePath.includes(coverageDirectory) &&\n    !filePath.endsWith(`.${SNAPSHOT_EXTENSION}`);\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 656
}
```

### Printed

```javascript
function f() {
  return (
    property.isIdentifier() &&
    FUNCTIONS[property.node.name] &&
    (
      object.isIdentifier(JEST_GLOBAL) ||
      (callee.isMemberExpression() && shouldHoistExpression(object))
    ) &&
    FUNCTIONS[property.node.name](expr.get("'arguments'"))
  );
  return (
    chalk.bold(
      "'No tests found related to files changed since last commit.\n'",
    ) +
    chalk.dim(
      patternInfo.watch
        ? "'Press `a` to run all tests, or run Jest with `--watchAll`.'"
        : "'Run Jest without `-o` to run all tests.'",
    )
  );
  return !filePath.includes(coverageDirectory) &&
    !filePath.endsWith(`.${SNAPSHOT_EXTENSION}`);
}
```

### Diagnostics

```javascript
✔ No errors
```

