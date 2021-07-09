# Kataw parser test case

## Input

`````js
function relativeComplement() {
  outer: for (; offsetB < arrayB.length; offsetB++) {
    inner: for (; offsetA < arrayA.length; offsetA++) {
     switch (comparer(arrayB[offsetB], arrayA[offsetA])) {
       case -1: break inner;
       case 0: continue outer;
       case 1: continue inner;
      }
    }
  result.push(arrayB[offsetB]);
 }
 return result;
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
                "text": "relativeComplement",
                "rawText": "relativeComplement",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 27
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 28,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "outer",
                                "rawText": "outer",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 39
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 40
                            },
                            "statement": {
                                "kind": 165,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 44
                                },
                                "initializer": null,
                                "condition": {
                                    "kind": 127,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 82
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "offsetB",
                                        "rawText": "offsetB",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 82
                                },
                                "incrementor": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "offsetB",
                                        "rawText": "offsetB",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 55
                                    },
                                    "operatorToken": {
                                        "kind": 536971330,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "arrayB",
                                            "rawText": "arrayB",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 64
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "length",
                                            "rawText": "length",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 71
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 57,
                                        "end": 71
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 47,
                                    "end": 71
                                },
                                "statement": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 163,
                                                "label": {
                                                    "kind": 134299649,
                                                    "text": "inner",
                                                    "rawText": "inner",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 95
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 95,
                                                    "end": 96
                                                },
                                                "statement": {
                                                    "kind": 165,
                                                    "forKeyword": {
                                                        "kind": 37757017,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 96,
                                                        "end": 100
                                                    },
                                                    "initializer": null,
                                                    "condition": {
                                                        "kind": 127,
                                                        "operandToken": {
                                                            "kind": 196635,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 136,
                                                            "end": 138
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "offsetA",
                                                            "rawText": "offsetA",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 128,
                                                            "end": 136
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 128,
                                                        "end": 138
                                                    },
                                                    "incrementor": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "offsetA",
                                                            "rawText": "offsetA",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 103,
                                                            "end": 111
                                                        },
                                                        "operatorToken": {
                                                            "kind": 536971330,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 111,
                                                            "end": 113
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arrayA",
                                                                "rawText": "arrayA",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 113,
                                                                "end": 120
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 121,
                                                                "end": 127
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 113,
                                                            "end": 127
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 103,
                                                        "end": 127
                                                    },
                                                    "statement": {
                                                        "kind": 124,
                                                        "block": {
                                                            "kind": 249,
                                                            "statements": [
                                                                {
                                                                    "kind": 160,
                                                                    "switchKeyword": {
                                                                        "kind": 37757024,
                                                                        "flags": 81,
                                                                        "transformFlags": 0,
                                                                        "start": 141,
                                                                        "end": 153
                                                                    },
                                                                    "expression": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "comparer",
                                                                            "rawText": "comparer",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 155,
                                                                            "end": 163
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 130,
                                                                                    "member": {
                                                                                        "kind": 134299649,
                                                                                        "text": "arrayB",
                                                                                        "rawText": "arrayB",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 164,
                                                                                        "end": 170
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "offsetB",
                                                                                        "rawText": "offsetB",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 171,
                                                                                        "end": 178
                                                                                    },
                                                                                    "flags": 536870944,
                                                                                    "transformFlags": 4,
                                                                                    "start": 164,
                                                                                    "end": 179
                                                                                },
                                                                                {
                                                                                    "kind": 130,
                                                                                    "member": {
                                                                                        "kind": 134299649,
                                                                                        "text": "arrayA",
                                                                                        "rawText": "arrayA",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 180,
                                                                                        "end": 187
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "offsetA",
                                                                                        "rawText": "offsetA",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 188,
                                                                                        "end": 195
                                                                                    },
                                                                                    "flags": 536870944,
                                                                                    "transformFlags": 4,
                                                                                    "start": 180,
                                                                                    "end": 196
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 164,
                                                                            "end": 196
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 1,
                                                                        "start": 155,
                                                                        "end": 197
                                                                    },
                                                                    "caseBlock": {
                                                                        "kind": 152,
                                                                        "clauses": [
                                                                            {
                                                                                "kind": 175,
                                                                                "caseKeyword": {
                                                                                    "kind": 4194382,
                                                                                    "flags": 81,
                                                                                    "transformFlags": 0,
                                                                                    "start": 200,
                                                                                    "end": 212
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 126,
                                                                                    "operandToken": {
                                                                                        "kind": 134318643,
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 212,
                                                                                        "end": 214
                                                                                    },
                                                                                    "operand": {
                                                                                        "kind": 201392130,
                                                                                        "text": 1,
                                                                                        "rawText": "1",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 214,
                                                                                        "end": 215
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 1024,
                                                                                    "start": 212,
                                                                                    "end": 215
                                                                                },
                                                                                "colonToken": {
                                                                                    "kind": 21,
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 215,
                                                                                    "end": 216
                                                                                },
                                                                                "statements": [
                                                                                    {
                                                                                        "kind": 150,
                                                                                        "breakKeyword": {
                                                                                            "kind": 37757005,
                                                                                            "flags": 80,
                                                                                            "transformFlags": 0,
                                                                                            "start": 216,
                                                                                            "end": 222
                                                                                        },
                                                                                        "label": {
                                                                                            "kind": 134299649,
                                                                                            "text": "inner",
                                                                                            "rawText": "inner",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 222,
                                                                                            "end": 228
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "transformFlags": 0,
                                                                                        "start": 216,
                                                                                        "end": 229
                                                                                    }
                                                                                ],
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 200,
                                                                                "end": 229
                                                                            },
                                                                            {
                                                                                "kind": 175,
                                                                                "caseKeyword": {
                                                                                    "kind": 4194382,
                                                                                    "flags": 81,
                                                                                    "transformFlags": 0,
                                                                                    "start": 229,
                                                                                    "end": 241
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 0,
                                                                                    "rawText": "0",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 241,
                                                                                    "end": 243
                                                                                },
                                                                                "colonToken": {
                                                                                    "kind": 21,
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 243,
                                                                                    "end": 244
                                                                                },
                                                                                "statements": [
                                                                                    {
                                                                                        "kind": 172,
                                                                                        "continueKeyword": {
                                                                                            "kind": 37757009,
                                                                                            "flags": 80,
                                                                                            "transformFlags": 0,
                                                                                            "start": 244,
                                                                                            "end": 253
                                                                                        },
                                                                                        "label": {
                                                                                            "kind": 134299649,
                                                                                            "text": "outer",
                                                                                            "rawText": "outer",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 253,
                                                                                            "end": 259
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "transformFlags": 0,
                                                                                        "start": 244,
                                                                                        "end": 260
                                                                                    }
                                                                                ],
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 229,
                                                                                "end": 260
                                                                            },
                                                                            {
                                                                                "kind": 175,
                                                                                "caseKeyword": {
                                                                                    "kind": 4194382,
                                                                                    "flags": 81,
                                                                                    "transformFlags": 0,
                                                                                    "start": 260,
                                                                                    "end": 272
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 1,
                                                                                    "rawText": "1",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 272,
                                                                                    "end": 274
                                                                                },
                                                                                "colonToken": {
                                                                                    "kind": 21,
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 274,
                                                                                    "end": 275
                                                                                },
                                                                                "statements": [
                                                                                    {
                                                                                        "kind": 172,
                                                                                        "continueKeyword": {
                                                                                            "kind": 37757009,
                                                                                            "flags": 80,
                                                                                            "transformFlags": 0,
                                                                                            "start": 275,
                                                                                            "end": 284
                                                                                        },
                                                                                        "label": {
                                                                                            "kind": 134299649,
                                                                                            "text": "inner",
                                                                                            "rawText": "inner",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 284,
                                                                                            "end": 290
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "transformFlags": 0,
                                                                                        "start": 275,
                                                                                        "end": 291
                                                                                    }
                                                                                ],
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 260,
                                                                                "end": 291
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 200,
                                                                        "end": 291
                                                                    },
                                                                    "flags": 81,
                                                                    "transformFlags": 0,
                                                                    "start": 141,
                                                                    "end": 299
                                                                }
                                                            ],
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 141,
                                                            "end": 299
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 139,
                                                        "end": 305
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 96,
                                                    "end": 305
                                                },
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 305
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "result",
                                                            "rawText": "result",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 305,
                                                            "end": 314
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "push",
                                                            "rawText": "push",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 315,
                                                            "end": 319
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 305,
                                                        "end": 319
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 130,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "arrayB",
                                                                    "rawText": "arrayB",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 320,
                                                                    "end": 326
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "offsetB",
                                                                    "rawText": "offsetB",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 327,
                                                                    "end": 334
                                                                },
                                                                "flags": 536870944,
                                                                "transformFlags": 4,
                                                                "start": 320,
                                                                "end": 335
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 320,
                                                        "end": 335
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 305,
                                                    "end": 336
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 305,
                                                "end": 337
                                            }
                                        ],
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 85,
                                        "end": 337
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 340
                                },
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 340
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 340
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 340,
                                "end": 348
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "result",
                                "rawText": "result",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 348,
                                "end": 355
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 340,
                            "end": 356
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 356
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 29,
                "end": 358
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 358
        }
    ],
    "isModule": false,
    "source": "function relativeComplement() {\n  outer: for (; offsetB < arrayB.length; offsetB++) {\n    inner: for (; offsetA < arrayA.length; offsetA++) {\n     switch (comparer(arrayB[offsetB], arrayA[offsetA])) {\n       case -1: break inner;\n       case 0: continue outer;\n       case 1: continue inner;\n      }\n    }\n  result.push(arrayB[offsetB]);\n }\n return result;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 358
}
```

### Printed

```javascript
function relativeComplement() {
  outer:  for (; offsetB++; offsetB  < arrayB.length) {
      inner:  for (; offsetA++; offsetA  < arrayA.length) {
          switch (comparer(arrayB[offsetB], arrayA[offsetA])) {
            case -1:
              break inner;
            case 0:
              continue outer;
            case 1:
              continue inner;
          }
        }
      result.push(arrayB[offsetB]);
    }
  return result;
}
```

### Diagnostics

```javascript
✔ No errors
```

