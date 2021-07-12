# Kataw parser test case

## Input

`````js
this._cumulativeHeights &&
 Math.abs(
   this._cachedItemHeight(this._firstVisibleIndex + i) -
     this._provider.fastHeight(i + this._firstVisibleIndex),
 ) >
   1

foooooooooooooooooooooooooooooooooooooooooooooooooooooooooo(
  aaaaaaaaaaaaaaaaaaa
) +
  a;

const isPartOfPackageJSON = dependenciesArray.indexOf(
  dependencyWithOutRelativePath.split('/')[0],
) !== -1;

defaultContent.filter(defaultLocale => {
  // ...
})[0] || null;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "_cumulativeHeights",
                        "rawText": "_cumulativeHeights",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 23
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 26
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "Math",
                                "rawText": "Math",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 32
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "abs",
                                "rawText": "abs",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 97,
                            "transformFlags": 2,
                            "start": 26,
                            "end": 36
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 198,
                                    "left": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 4276321,
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 45
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "_cachedItemHeight",
                                                "rawText": "_cachedItemHeight",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 63
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 37,
                                            "end": 63
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 64,
                                                            "end": 68
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "_firstVisibleIndex",
                                                            "rawText": "_firstVisibleIndex",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 69,
                                                            "end": 87
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 64,
                                                        "end": 87
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 87,
                                                        "end": 89
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "i",
                                                        "rawText": "i",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 89,
                                                        "end": 91
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 64,
                                                    "end": 91
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 64,
                                            "end": 91
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 37,
                                        "end": 92
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 92,
                                        "end": 94
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 4276321,
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 94,
                                                    "end": 104
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "_provider",
                                                    "rawText": "_provider",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 105,
                                                    "end": 114
                                                },
                                                "flags": 97,
                                                "transformFlags": 2,
                                                "start": 94,
                                                "end": 114
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fastHeight",
                                                "rawText": "fastHeight",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 115,
                                                "end": 125
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 94,
                                            "end": 125
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "i",
                                                        "rawText": "i",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 126,
                                                        "end": 127
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 127,
                                                        "end": 129
                                                    },
                                                    "right": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 129,
                                                            "end": 134
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "_firstVisibleIndex",
                                                            "rawText": "_firstVisibleIndex",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 135,
                                                            "end": 153
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 129,
                                                        "end": 153
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 126,
                                                    "end": 153
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 153
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 94,
                                        "end": 154
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 5120,
                                    "start": 37,
                                    "end": 154
                                }
                            ],
                            "trailingComma": true,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 155
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 26,
                        "end": 158
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 158,
                        "end": 160
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 160,
                        "end": 165
                    },
                    "flags": 268435488,
                    "transformFlags": 5120,
                    "start": 158,
                    "end": 165
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 165
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                        "rawText": "foooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 165,
                        "end": 226
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "aaaaaaaaaaaaaaaaaaa",
                                "rawText": "aaaaaaaaaaaaaaaaaaa",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 227,
                                "end": 249
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 227,
                        "end": 249
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 165,
                    "end": 251
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 251,
                    "end": 253
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 253,
                    "end": 257
                },
                "flags": 268435488,
                "transformFlags": 5120,
                "start": 165,
                "end": 257
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 165,
            "end": 258
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 258,
                "end": 265
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "isPartOfPackageJSON",
                            "rawText": "isPartOfPackageJSON",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 265,
                            "end": 285
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "dependenciesArray",
                                        "rawText": "dependenciesArray",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 287,
                                        "end": 305
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "indexOf",
                                        "rawText": "indexOf",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 306,
                                        "end": 313
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 287,
                                    "end": 313
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 130,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "dependencyWithOutRelativePath",
                                                        "rawText": "dependencyWithOutRelativePath",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 314,
                                                        "end": 346
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "split",
                                                        "rawText": "split",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 347,
                                                        "end": 352
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 314,
                                                    "end": 352
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "/",
                                                            "rawText": "'/'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 353,
                                                            "end": 356
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 353,
                                                    "end": 356
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 314,
                                                "end": 357
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 358,
                                                "end": 359
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 314,
                                            "end": 360
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 314,
                                    "end": 361
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 287,
                                "end": 363
                            },
                            "operatorToken": {
                                "kind": 34621,
                                "flags": 96,
                                "transformFlags": 16,
                                "start": 363,
                                "end": 367
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 367,
                                    "end": 369
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 369,
                                    "end": 370
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 367,
                                "end": 370
                            },
                            "flags": 268435488,
                            "transformFlags": 5120,
                            "start": 287,
                            "end": 370
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 265,
                        "end": 370
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 265,
                "end": 370
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 258,
            "end": 371
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "defaultContent",
                                "rawText": "defaultContent",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 371,
                                "end": 387
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "filter",
                                "rawText": "filter",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 388,
                                "end": 394
                            },
                            "flags": 97,
                            "transformFlags": 2,
                            "start": 371,
                            "end": 394
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "defaultLocale",
                                        "rawText": "defaultLocale",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 395,
                                        "end": 408
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 408,
                                        "end": 411
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 413,
                                            "end": 413
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 411,
                                        "end": 424
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 395,
                                    "end": 424
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 395,
                            "end": 424
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 371,
                        "end": 425
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 426,
                        "end": 427
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 371,
                    "end": 428
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 428,
                    "end": 431
                },
                "right": {
                    "kind": 138477575,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 431,
                    "end": 436
                },
                "flags": 536870944,
                "transformFlags": 5120,
                "start": 371,
                "end": 436
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 371,
            "end": 437
        }
    ],
    "isModule": false,
    "source": "this._cumulativeHeights &&\n Math.abs(\n   this._cachedItemHeight(this._firstVisibleIndex + i) -\n     this._provider.fastHeight(i + this._firstVisibleIndex),\n ) >\n   1\n\nfoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo(\n  aaaaaaaaaaaaaaaaaaa\n) +\n  a;\n\nconst isPartOfPackageJSON = dependenciesArray.indexOf(\n  dependencyWithOutRelativePath.split('/')[0],\n) !== -1;\n\ndefaultContent.filter(defaultLocale => {\n  // ...\n})[0] || null;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 438
}
```

### Printed

```javascript
this._cumulativeHeights &&
  Math.abs(

      this._cachedItemHeight(this._firstVisibleIndex + i) -
      this._provider.fastHeight(i + this._firstVisibleIndex)
    ,
  ) >
    1;
foooooooooooooooooooooooooooooooooooooooooooooooooooooooooo(aaaaaaaaaaaaaaaaaaa) +
  a;

const isPartOfPackageJSON =
    dependenciesArray.indexOf(dependencyWithOutRelativePath.split("'/'")[0]) !==
    -1
  ;

defaultContent.filter(defaultLocale => {// ...
})[0] || null;

```

### Diagnostics

```javascript
✔ No errors
```

