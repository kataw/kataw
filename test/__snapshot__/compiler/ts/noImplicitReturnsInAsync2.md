# Kataw parser test case

## Input

`````js
// @target: es6
// @noImplicitReturns: true

// Should be an error, Promise<number>, currently retorted correctly
async function test3(isError: boolean = true) {
    if (isError === true) {
        return 6;
    }
}

// Should not be an error, Promise<any>, currently **not** working
async function test4(isError: boolean = true) {
    if (isError === true) {
        return undefined;
    }
}

// should not be error, Promise<any> currently working correctly
async function test5(isError: boolean = true): Promise<any> { //should not be error
    if (isError === true) {
        return undefined;
    }
}


// should be error, currently reported correctly
async function test6(isError: boolean = true): Promise<number> {
    if (isError === true) {
        return undefined;
    }
}

// infered to be Promise<void>, should not be an error, currently reported correctly
async function test7(isError: boolean = true) {
    if (isError === true) {
        return;
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "// @target: es6\n// @noImplicitReturns: true\n\n// Should be an error, Promise<number>, currently retorted correctly\nasync function test3(isError: boolean = true) {\n    if (isError === true) {\n        return 6;\n    }\n}\n\n// Should not be an error, Promise<any>, currently **not** working\nasync function test4(isError: boolean = true) {\n    if (isError === true) {\n        return undefined;\n    }\n}\n\n// should not be error, Promise<any> currently working correctly\nasync function test5(isError: boolean = true): Promise<any> { //should not be error\n    if (isError === true) {\n        return undefined;\n    }\n}\n\n\n// should be error, currently reported correctly\nasync function test6(isError: boolean = true): Promise<number> {\n    if (isError === true) {\n        return undefined;\n    }\n}\n\n// infered to be Promise<void>, should not be an error, currently reported correctly\nasync function test7(isError: boolean = true) {\n    if (isError === true) {\n        return;\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "test3",
                "rawText": "test3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 128,
                "end": 134
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isError",
                            "rawText": "isError",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 135,
                            "end": 142
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 143,
                            "end": 151
                        },
                        "initializer": {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 158
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 135,
                        "end": 158
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 135,
                "end": 159
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "isError",
                                    "rawText": "isError",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 170,
                                    "end": 177
                                },
                                "operator": "===",
                                "right": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 186
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 186
                            },
                            "consequent": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 6,
                                                "rawText": "6",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 204,
                                                "end": 206
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 207
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 189,
                                    "end": 207
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 213
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 213
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 161,
                    "end": 213
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 159,
                "end": 215
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 215
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "test4",
                "rawText": "test4",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 298,
                "end": 304
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isError",
                            "rawText": "isError",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 305,
                            "end": 312
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 313,
                            "end": 321
                        },
                        "initializer": {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 323,
                            "end": 328
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 305,
                        "end": 328
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 305,
                "end": 329
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "isError",
                                    "rawText": "isError",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 340,
                                    "end": 347
                                },
                                "operator": "===",
                                "right": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 351,
                                    "end": 356
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 340,
                                "end": 356
                            },
                            "consequent": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 374,
                                                "end": 384
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 359,
                                            "end": 385
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 359,
                                    "end": 385
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 357,
                                "end": 391
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 331,
                            "end": 391
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 331,
                    "end": 391
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 329,
                "end": 393
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 260,
            "start": 215,
            "end": 393
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "test5",
                "rawText": "test5",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 474,
                "end": 480
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isError",
                            "rawText": "isError",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 481,
                            "end": 488
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 489,
                            "end": 497
                        },
                        "initializer": {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 499,
                            "end": 504
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 481,
                        "end": 504
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 481,
                "end": 505
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Promise",
                    "rawText": "Promise",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 506,
                    "end": 514
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 515,
                            "end": 518
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 515,
                    "end": 518
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 506,
                "end": 521
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "isError",
                                    "rawText": "isError",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 552,
                                    "end": 559
                                },
                                "operator": "===",
                                "right": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 563,
                                    "end": 568
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 552,
                                "end": 568
                            },
                            "consequent": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 586,
                                                "end": 596
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 571,
                                            "end": 597
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 571,
                                    "end": 597
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 569,
                                "end": 603
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 521,
                            "end": 603
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 521,
                    "end": 603
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 519,
                "end": 605
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 260,
            "start": 393,
            "end": 605
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "test6",
                "rawText": "test6",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 671,
                "end": 677
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isError",
                            "rawText": "isError",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 678,
                            "end": 685
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 686,
                            "end": 694
                        },
                        "initializer": {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 696,
                            "end": 701
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 678,
                        "end": 701
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 678,
                "end": 702
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Promise",
                    "rawText": "Promise",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 703,
                    "end": 711
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 712,
                            "end": 718
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 712,
                    "end": 718
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 703,
                "end": 721
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "isError",
                                    "rawText": "isError",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 730,
                                    "end": 737
                                },
                                "operator": "===",
                                "right": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 741,
                                    "end": 746
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 730,
                                "end": 746
                            },
                            "consequent": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 764,
                                                "end": 774
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 749,
                                            "end": 775
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 749,
                                    "end": 775
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 747,
                                "end": 781
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 721,
                            "end": 781
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 721,
                    "end": 781
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 719,
                "end": 783
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 260,
            "start": 605,
            "end": 783
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "test7",
                "rawText": "test7",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 884,
                "end": 890
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isError",
                            "rawText": "isError",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 891,
                            "end": 898
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 899,
                            "end": 907
                        },
                        "initializer": {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 909,
                            "end": 914
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 891,
                        "end": 914
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 891,
                "end": 915
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "isError",
                                    "rawText": "isError",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 926,
                                    "end": 933
                                },
                                "operator": "===",
                                "right": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 937,
                                    "end": 942
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 926,
                                "end": 942
                            },
                            "consequent": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": null,
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 945,
                                            "end": 961
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 945,
                                    "end": 961
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 943,
                                "end": 967
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 917,
                            "end": 967
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 917,
                    "end": 967
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 915,
                "end": 969
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 260,
            "start": 783,
            "end": 969
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 969
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

