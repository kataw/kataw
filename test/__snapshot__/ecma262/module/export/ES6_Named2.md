# Kataw parser test case

## Input

`````js
const specifierNumber4 = 1;
const specifierNumber5 = 2;
const groupedSpecifierNumber3 = 1;
const groupedSpecifierNumber4 = 2;

export {specifierNumber4};
export {specifierNumber5 as specifierNumber5Renamed};
export {groupedSpecifierNumber3, groupedSpecifierNumber4};

export function givesANumber2(): number { return 42; };
export class NumberGenerator2 { givesANumber(): number { return 42; }};

export const varDeclNumber3 = 1, varDeclNumber4 = 2;
export const {destructuredObjNumber2} = {destructuredObjNumber2: 1};
export const [destructuredArrNumber2] = [1]
`````

## Options

### Parser Options

`````js
{ allowTypes : true, module: true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "specifierNumber4",
                            "rawText": "specifierNumber4",
                            "flags": 96,
                            "start": 5,
                            "end": 22
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 27
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 27,
                "end": 33
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "specifierNumber5",
                            "rawText": "specifierNumber5",
                            "flags": 96,
                            "start": 33,
                            "end": 50
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 52,
                            "end": 54
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 54
                    }
                ],
                "flags": 16777232,
                "start": 33,
                "end": 54
            },
            "flags": 33554448,
            "start": 27,
            "end": 55
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 55,
                "end": 61
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "groupedSpecifierNumber3",
                            "rawText": "groupedSpecifierNumber3",
                            "flags": 96,
                            "start": 61,
                            "end": 85
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 87,
                            "end": 89
                        },
                        "flags": 16,
                        "start": 61,
                        "end": 89
                    }
                ],
                "flags": 16777232,
                "start": 61,
                "end": 89
            },
            "flags": 33554448,
            "start": 55,
            "end": 90
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 90,
                "end": 96
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "groupedSpecifierNumber4",
                            "rawText": "groupedSpecifierNumber4",
                            "flags": 96,
                            "start": 96,
                            "end": 120
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 122,
                            "end": 124
                        },
                        "flags": 16,
                        "start": 96,
                        "end": 124
                    }
                ],
                "flags": 16777232,
                "start": 96,
                "end": 124
            },
            "flags": 33554448,
            "start": 90,
            "end": 125
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 125,
                "end": 133
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "specifierNumber4",
                                "rawText": "specifierNumber4",
                                "flags": 96,
                                "start": 135,
                                "end": 151
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 135,
                            "end": 151
                        }
                    ],
                    "flags": 16,
                    "start": 135,
                    "end": 151
                },
                "flags": 0,
                "start": 133,
                "end": 152
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 125,
            "end": 153
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 153,
                "end": 160
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "specifierNumber5",
                                "rawText": "specifierNumber5",
                                "flags": 96,
                                "start": 162,
                                "end": 178
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 80,
                                "start": 178,
                                "end": 181
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "specifierNumber5Renamed",
                                "rawText": "specifierNumber5Renamed",
                                "flags": 96,
                                "start": 181,
                                "end": 205
                            },
                            "flags": 16,
                            "start": 162,
                            "end": 205
                        }
                    ],
                    "flags": 16,
                    "start": 162,
                    "end": 205
                },
                "flags": 0,
                "start": 160,
                "end": 206
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 153,
            "end": 207
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 207,
                "end": 214
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "groupedSpecifierNumber3",
                                "rawText": "groupedSpecifierNumber3",
                                "flags": 96,
                                "start": 216,
                                "end": 239
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 216,
                            "end": 239
                        },
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "groupedSpecifierNumber4",
                                "rawText": "groupedSpecifierNumber4",
                                "flags": 96,
                                "start": 240,
                                "end": 264
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 240,
                            "end": 264
                        }
                    ],
                    "flags": 16,
                    "start": 216,
                    "end": 264
                },
                "flags": 0,
                "start": 214,
                "end": 265
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 207,
            "end": 266
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 266,
                "end": 274
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 274,
                    "end": 283
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "givesANumber2",
                    "rawText": "givesANumber2",
                    "flags": 96,
                    "start": 283,
                    "end": 297
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 298,
                    "end": 298
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
                                    "flags": 80,
                                    "start": 309,
                                    "end": 316
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 316,
                                    "end": 319
                                },
                                "flags": 80,
                                "start": 309,
                                "end": 320
                            }
                        ],
                        "flags": 32,
                        "start": 309,
                        "end": 320
                    },
                    "flags": 32,
                    "start": 307,
                    "end": 322
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234345,
                        "flags": 2097216,
                        "start": 300,
                        "end": 307
                    },
                    "flags": 2097152,
                    "start": 300,
                    "end": 307
                },
                "flags": 16,
                "start": 274,
                "end": 322
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 266,
            "end": 322
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 322,
            "end": 323
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 323,
                "end": 330
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 330,
                    "end": 336
                },
                "name": {
                    "kind": 134299649,
                    "text": "NumberGenerator2",
                    "rawText": "NumberGenerator2",
                    "flags": 96,
                    "start": 336,
                    "end": 353
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "asteriskToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "givesANumber",
                                        "rawText": "givesANumber",
                                        "flags": 96,
                                        "start": 355,
                                        "end": 368
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 369,
                                        "end": 370
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 371,
                                            "end": 378
                                        },
                                        "flags": 2097152,
                                        "start": 371,
                                        "end": 378
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
                                                        "flags": 80,
                                                        "start": 380,
                                                        "end": 387
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 387,
                                                        "end": 390
                                                    },
                                                    "flags": 80,
                                                    "start": 380,
                                                    "end": 391
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 380,
                                            "end": 391
                                        },
                                        "flags": 32,
                                        "start": 378,
                                        "end": 393
                                    },
                                    "flags": 0,
                                    "start": 368,
                                    "end": 393
                                },
                                "flags": 0,
                                "start": 355,
                                "end": 393
                            }
                        ],
                        "flags": 32,
                        "start": 355,
                        "end": 393
                    },
                    "flags": 353,
                    "start": 32,
                    "end": 394
                },
                "flags": 16,
                "start": 330,
                "end": 394
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 323,
            "end": 394
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 394,
            "end": 395
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 395,
                "end": 403
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 80,
                    "start": 403,
                    "end": 409
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "varDeclNumber3",
                                "rawText": "varDeclNumber3",
                                "flags": 96,
                                "start": 409,
                                "end": 424
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 426,
                                "end": 428
                            },
                            "flags": 16,
                            "start": 409,
                            "end": 428
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "varDeclNumber4",
                                "rawText": "varDeclNumber4",
                                "flags": 96,
                                "start": 429,
                                "end": 444
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 446,
                                "end": 448
                            },
                            "flags": 16,
                            "start": 429,
                            "end": 448
                        }
                    ],
                    "flags": 16777232,
                    "start": 409,
                    "end": 448
                },
                "flags": 33554448,
                "start": 403,
                "end": 449
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 395,
            "end": 449
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 449,
                "end": 456
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 80,
                    "start": 456,
                    "end": 462
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
                                            "text": "destructuredObjNumber2",
                                            "rawText": "destructuredObjNumber2",
                                            "flags": 96,
                                            "start": 464,
                                            "end": 486
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 464,
                                    "end": 486
                                },
                                "flags": 32,
                                "start": 462,
                                "end": 487
                            },
                            "type": null,
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "destructuredObjNumber2",
                                                "rawText": "destructuredObjNumber2",
                                                "flags": 96,
                                                "start": 491,
                                                "end": 513
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 514,
                                                "end": 516
                                            },
                                            "flags": 32,
                                            "start": 491,
                                            "end": 516
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 491,
                                    "end": 516
                                },
                                "flags": 48,
                                "start": 489,
                                "end": 517
                            },
                            "flags": 16,
                            "start": 462,
                            "end": 517
                        }
                    ],
                    "flags": 16777232,
                    "start": 462,
                    "end": 517
                },
                "flags": 33554448,
                "start": 456,
                "end": 518
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 449,
            "end": 518
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 518,
                "end": 525
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 80,
                    "start": 525,
                    "end": 531
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "destructuredArrNumber2",
                                            "rawText": "destructuredArrNumber2",
                                            "flags": 96,
                                            "start": 533,
                                            "end": 555
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 533,
                                    "end": 555
                                },
                                "flags": 32,
                                "start": 531,
                                "end": 556
                            },
                            "type": null,
                            "initializer": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 560,
                                            "end": 561
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 560,
                                    "end": 561
                                },
                                "flags": 32,
                                "start": 558,
                                "end": 562
                            },
                            "flags": 16,
                            "start": 531,
                            "end": 562
                        }
                    ],
                    "flags": 16777232,
                    "start": 531,
                    "end": 562
                },
                "flags": 33554448,
                "start": 525,
                "end": 562
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 518,
            "end": 562
        }
    ],
    "isModule": true,
    "source": "const specifierNumber4 = 1;\nconst specifierNumber5 = 2;\nconst groupedSpecifierNumber3 = 1;\nconst groupedSpecifierNumber4 = 2;\n\nexport {specifierNumber4};\nexport {specifierNumber5 as specifierNumber5Renamed};\nexport {groupedSpecifierNumber3, groupedSpecifierNumber4};\n\nexport function givesANumber2(): number { return 42; };\nexport class NumberGenerator2 { givesANumber(): number { return 42; }};\n\nexport const varDeclNumber3 = 1, varDeclNumber4 = 2;\nexport const {destructuredObjNumber2} = {destructuredObjNumber2: 1};\nexport const [destructuredArrNumber2] = [1]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 562
}
```

### Printed

```javascript

const specifierNumber4 = 1;
const specifierNumber5 = 2;
const groupedSpecifierNumber3 = 1;
const groupedSpecifierNumber4 = 2;
export { specifierNumber4  };
export { specifierNumber5 as  specifierNumber5Renamed };
export { groupedSpecifierNumber3 , groupedSpecifierNumber4  };
export function givesANumber2(): number  {
  return 42;
}
export class NumberGenerator2 {
  givesANumber(): number {
    return 42;
  }
}
export const varDeclNumber3 = 1, varDeclNumber4 = 2;
export const {destructuredObjNumber2} = {destructuredObjNumber2: 1};
export const [destructuredArrNumber2] = [1];
```

### Diagnostics

```javascript
✔ No errors
```

