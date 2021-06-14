# Kataw parser test case

## Input

`````js
const specifierNumber1 = 1;
const specifierNumber2 = 2;
const specifierNumber3 = 3;
const groupedSpecifierNumber1 = 1;
const groupedSpecifierNumber2 = 2;

export {specifierNumber1};
export {specifierNumber2 as specifierNumber2Renamed};
export {specifierNumber3};
export {groupedSpecifierNumber1, groupedSpecifierNumber2};

export function givesANumber(): number { return 42; };
export class NumberGenerator { givesANumber(): number { return 42; }};

export const varDeclNumber1 = 1, varDeclNumber2 = 2;
export const {destructuredObjNumber} = {destructuredObjNumber: 1};
export const [destructuredArrNumber] = [1]
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
                            "text": "specifierNumber1",
                            "rawText": "specifierNumber1",
                            "flags": 96,
                            "start": 5,
                            "end": 22
                        },
                        "optionalToken": null,
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
                            "text": "specifierNumber2",
                            "rawText": "specifierNumber2",
                            "flags": 96,
                            "start": 33,
                            "end": 50
                        },
                        "optionalToken": null,
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
                            "text": "specifierNumber3",
                            "rawText": "specifierNumber3",
                            "flags": 96,
                            "start": 61,
                            "end": 78
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 80,
                            "end": 82
                        },
                        "flags": 16,
                        "start": 61,
                        "end": 82
                    }
                ],
                "flags": 16777232,
                "start": 61,
                "end": 82
            },
            "flags": 33554448,
            "start": 55,
            "end": 83
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 83,
                "end": 89
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "groupedSpecifierNumber1",
                            "rawText": "groupedSpecifierNumber1",
                            "flags": 96,
                            "start": 89,
                            "end": 113
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 115,
                            "end": 117
                        },
                        "flags": 16,
                        "start": 89,
                        "end": 117
                    }
                ],
                "flags": 16777232,
                "start": 89,
                "end": 117
            },
            "flags": 33554448,
            "start": 83,
            "end": 118
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 118,
                "end": 124
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "groupedSpecifierNumber2",
                            "rawText": "groupedSpecifierNumber2",
                            "flags": 96,
                            "start": 124,
                            "end": 148
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 150,
                            "end": 152
                        },
                        "flags": 16,
                        "start": 124,
                        "end": 152
                    }
                ],
                "flags": 16777232,
                "start": 124,
                "end": 152
            },
            "flags": 33554448,
            "start": 118,
            "end": 153
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 153,
                "end": 161
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
                                "text": "specifierNumber1",
                                "rawText": "specifierNumber1",
                                "flags": 96,
                                "start": 163,
                                "end": 179
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 163,
                            "end": 179
                        }
                    ],
                    "flags": 16,
                    "start": 163,
                    "end": 179
                },
                "flags": 0,
                "start": 161,
                "end": 180
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 153,
            "end": 181
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 181,
                "end": 188
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
                                "text": "specifierNumber2",
                                "rawText": "specifierNumber2",
                                "flags": 96,
                                "start": 190,
                                "end": 206
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 80,
                                "start": 206,
                                "end": 209
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "specifierNumber2Renamed",
                                "rawText": "specifierNumber2Renamed",
                                "flags": 96,
                                "start": 209,
                                "end": 233
                            },
                            "flags": 16,
                            "start": 190,
                            "end": 233
                        }
                    ],
                    "flags": 16,
                    "start": 190,
                    "end": 233
                },
                "flags": 0,
                "start": 188,
                "end": 234
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 181,
            "end": 235
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 235,
                "end": 242
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
                                "text": "specifierNumber3",
                                "rawText": "specifierNumber3",
                                "flags": 96,
                                "start": 244,
                                "end": 260
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 244,
                            "end": 260
                        }
                    ],
                    "flags": 16,
                    "start": 244,
                    "end": 260
                },
                "flags": 0,
                "start": 242,
                "end": 261
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 235,
            "end": 262
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 262,
                "end": 269
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
                                "text": "groupedSpecifierNumber1",
                                "rawText": "groupedSpecifierNumber1",
                                "flags": 96,
                                "start": 271,
                                "end": 294
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 271,
                            "end": 294
                        },
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "groupedSpecifierNumber2",
                                "rawText": "groupedSpecifierNumber2",
                                "flags": 96,
                                "start": 295,
                                "end": 319
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 295,
                            "end": 319
                        }
                    ],
                    "flags": 16,
                    "start": 271,
                    "end": 319
                },
                "flags": 0,
                "start": 269,
                "end": 320
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 262,
            "end": 321
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 321,
                "end": 329
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 329,
                    "end": 338
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "givesANumber",
                    "rawText": "givesANumber",
                    "flags": 96,
                    "start": 338,
                    "end": 351
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 351,
                    "end": 353
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
                                    "start": 363,
                                    "end": 370
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 370,
                                    "end": 373
                                },
                                "flags": 80,
                                "start": 363,
                                "end": 374
                            }
                        ],
                        "flags": 32,
                        "start": 363,
                        "end": 374
                    },
                    "flags": 32,
                    "start": 361,
                    "end": 376
                },
                "typeParameters": null,
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 354,
                            "end": 361
                        },
                        "flags": 2097152,
                        "start": 354,
                        "end": 361
                    },
                    "flags": 2097152,
                    "start": 329,
                    "end": 361
                },
                "flags": 16,
                "start": 329,
                "end": 376
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 321,
            "end": 376
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 376,
            "end": 377
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 377,
                "end": 384
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 384,
                    "end": 390
                },
                "name": {
                    "kind": 134299649,
                    "text": "NumberGenerator",
                    "rawText": "NumberGenerator",
                    "flags": 96,
                    "start": 390,
                    "end": 406
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "givesANumber",
                                        "rawText": "givesANumber",
                                        "flags": 96,
                                        "start": 408,
                                        "end": 421
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 422,
                                        "end": 423
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 424,
                                            "end": 431
                                        },
                                        "flags": 2097152,
                                        "start": 424,
                                        "end": 431
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
                                                        "start": 433,
                                                        "end": 440
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 440,
                                                        "end": 443
                                                    },
                                                    "flags": 80,
                                                    "start": 433,
                                                    "end": 444
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 433,
                                            "end": 444
                                        },
                                        "flags": 32,
                                        "start": 431,
                                        "end": 446
                                    },
                                    "flags": 0,
                                    "start": 421,
                                    "end": 446
                                },
                                "flags": 0,
                                "start": 408,
                                "end": 446
                            }
                        ],
                        "flags": 32,
                        "start": 408,
                        "end": 446
                    },
                    "flags": 406,
                    "start": 32,
                    "end": 447
                },
                "flags": 16,
                "start": 384,
                "end": 447
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 377,
            "end": 447
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 447,
            "end": 448
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 448,
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
                                "kind": 134299649,
                                "text": "varDeclNumber1",
                                "rawText": "varDeclNumber1",
                                "flags": 96,
                                "start": 462,
                                "end": 477
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 479,
                                "end": 481
                            },
                            "flags": 16,
                            "start": 462,
                            "end": 481
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "varDeclNumber2",
                                "rawText": "varDeclNumber2",
                                "flags": 96,
                                "start": 482,
                                "end": 497
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 499,
                                "end": 501
                            },
                            "flags": 16,
                            "start": 482,
                            "end": 501
                        }
                    ],
                    "flags": 16777232,
                    "start": 462,
                    "end": 501
                },
                "flags": 33554448,
                "start": 456,
                "end": 502
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 448,
            "end": 502
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 502,
                "end": 509
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 80,
                    "start": 509,
                    "end": 515
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
                                            "text": "destructuredObjNumber",
                                            "rawText": "destructuredObjNumber",
                                            "flags": 96,
                                            "start": 517,
                                            "end": 538
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 517,
                                    "end": 538
                                },
                                "flags": 32,
                                "start": 515,
                                "end": 539
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "destructuredObjNumber",
                                                "rawText": "destructuredObjNumber",
                                                "flags": 96,
                                                "start": 543,
                                                "end": 564
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 565,
                                                "end": 567
                                            },
                                            "flags": 32,
                                            "start": 543,
                                            "end": 567
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 543,
                                    "end": 567
                                },
                                "flags": 48,
                                "start": 541,
                                "end": 568
                            },
                            "flags": 16,
                            "start": 515,
                            "end": 568
                        }
                    ],
                    "flags": 16777232,
                    "start": 515,
                    "end": 568
                },
                "flags": 33554448,
                "start": 509,
                "end": 569
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 502,
            "end": 569
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 569,
                "end": 576
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 80,
                    "start": 576,
                    "end": 582
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
                                            "text": "destructuredArrNumber",
                                            "rawText": "destructuredArrNumber",
                                            "flags": 96,
                                            "start": 584,
                                            "end": 605
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 584,
                                    "end": 605
                                },
                                "flags": 32,
                                "start": 582,
                                "end": 606
                            },
                            "optionalToken": null,
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
                                            "start": 610,
                                            "end": 611
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 610,
                                    "end": 611
                                },
                                "flags": 32,
                                "start": 608,
                                "end": 612
                            },
                            "flags": 16,
                            "start": 582,
                            "end": 612
                        }
                    ],
                    "flags": 16777232,
                    "start": 582,
                    "end": 612
                },
                "flags": 33554448,
                "start": 576,
                "end": 612
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 569,
            "end": 612
        }
    ],
    "isModule": true,
    "source": "const specifierNumber1 = 1;\nconst specifierNumber2 = 2;\nconst specifierNumber3 = 3;\nconst groupedSpecifierNumber1 = 1;\nconst groupedSpecifierNumber2 = 2;\n\nexport {specifierNumber1};\nexport {specifierNumber2 as specifierNumber2Renamed};\nexport {specifierNumber3};\nexport {groupedSpecifierNumber1, groupedSpecifierNumber2};\n\nexport function givesANumber(): number { return 42; };\nexport class NumberGenerator { givesANumber(): number { return 42; }};\n\nexport const varDeclNumber1 = 1, varDeclNumber2 = 2;\nexport const {destructuredObjNumber} = {destructuredObjNumber: 1};\nexport const [destructuredArrNumber] = [1]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 612
}
```

### Printed

```javascript

const specifierNumber1 = 1;
const specifierNumber2 = 2;
const specifierNumber3 = 3;
const groupedSpecifierNumber1 = 1;
const groupedSpecifierNumber2 = 2;
export { specifierNumber1 };
export { specifierNumber2 as specifierNumber2Renamed };
export { specifierNumber3 };
export { groupedSpecifierNumber1, groupedSpecifierNumber2 };
export function givesANumber() {
  return  42;
}
export class NumberGenerator {
  givesANumber() {
    return  42;
  }
}
export const varDeclNumber1 = 1, varDeclNumber2 = 2;
export const {
  destructuredObjNumber
} = { destructuredObjNumber: 1 };
export const [destructuredArrNumber] = [1];
```

### Diagnostics

```javascript
✔ No errors
```

