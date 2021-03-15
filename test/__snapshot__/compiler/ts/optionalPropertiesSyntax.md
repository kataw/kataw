# Kataw parser test case

## Input

`````js
interface fnSigs {
    //functions signatures can be optional
    fn(): void;
    fn?(): void; //err
    fn2?(): void;
}

interface callSig {
    //Call signatures can't be optional
    (): any;
    ()?: any; //err
    ?(): any; //err
}

interface constructSig {
    //Construct signatures can't be optional
    new (): any;
    new ()?: any; //err
    new ?(): any; //err
}

interface propertySig {
    //Property signatures can be optional
    prop: any;
    prop?: any;
    prop2?: any;
}

interface indexSig {
    //Index signatures can't be optional
    [idx: number]: any;
    [idx: number]?: any; //err
    ? [idx: number]: any; //err
    [idx?: number]: any; //err
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface fnSigs {\n    //functions signatures can be optional\n    fn(): void;\n    fn?(): void; //err\n    fn2?(): void;\n}\n\ninterface callSig {\n    //Call signatures can't be optional\n    (): any;\n    ()?: any; //err\n    ?(): any; //err\n}\n\ninterface constructSig {\n    //Construct signatures can't be optional\n    new (): any;\n    new ()?: any; //err\n    new ?(): any; //err\n}\n\ninterface propertySig {\n    //Property signatures can be optional\n    prop: any;\n    prop?: any;\n    prop2?: any;\n}\n\ninterface indexSig {\n    //Index signatures can't be optional\n    [idx: number]: any;\n    [idx: number]?: any; //err\n    ? [idx: number]: any; //err\n    [idx?: number]: any; //err\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "fnSigs",
                "rawText": "fnSigs",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 16
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 68
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 69,
                            "end": 69
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 71,
                            "end": 76
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 18,
                        "end": 77
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 84
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": true,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 86,
                            "end": 86
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 88,
                            "end": 93
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 77,
                        "end": 94
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "fn2",
                            "rawText": "fn2",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 108
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": true,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 110,
                            "end": 110
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 112,
                            "end": 117
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 94,
                        "end": 118
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 18,
                "end": 118
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 120
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "callSig",
                "rawText": "callSig",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 131,
                "end": 139
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8236,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 187,
                            "end": 187
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 189,
                            "end": 193
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 141,
                        "end": 194
                    },
                    {
                        "kind": 8236,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 200,
                            "end": 200
                        },
                        "returnType": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 194,
                        "end": 201
                    }
                ],
                "multiline": true,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 141,
                "end": 201
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 120,
            "end": 201
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "any",
                "rawText": "any",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 203,
                "end": 207
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 203,
            "end": 208
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 81929,
                "elements": [],
                "type": {
                    "kind": 4202498,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 223,
                    "end": 227
                },
                "accessModifier": null,
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 220,
                "end": 220
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 220,
            "end": 228
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "constructSig",
                "rawText": "constructSig",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 247,
                "end": 260
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 317,
                            "end": 317
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 319,
                            "end": 323
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 315,
                        "end": 324
                    },
                    {
                        "kind": 8250,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 334,
                            "end": 334
                        },
                        "returnType": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 332,
                        "end": 335
                    }
                ],
                "multiline": true,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 262,
                "end": 335
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 236,
            "end": 335
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "any",
                "rawText": "any",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 337,
                "end": 341
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 337,
            "end": 342
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 66204,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 356,
                        "end": 356
                    },
                    "typeArguments": null,
                    "argumentList": null,
                    "flags": 342,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 1,
                    "end": 356
                },
                "consequent": {
                    "kind": 81929,
                    "elements": [],
                    "type": {
                        "kind": 4202498,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 361,
                        "end": 365
                    },
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 358,
                    "end": 358
                },
                "alternate": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 365
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 342,
                "end": 365
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 342,
            "end": 366
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "propertySig",
                "rawText": "propertySig",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 385,
                "end": 397
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "prop",
                            "rawText": "prop",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 399,
                            "end": 450
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 451,
                            "end": 455
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 399,
                        "end": 456
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "prop",
                            "rawText": "prop",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 456,
                            "end": 465
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 467,
                            "end": 471
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 456,
                        "end": 472
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "prop2",
                            "rawText": "prop2",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 472,
                            "end": 482
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 484,
                            "end": 488
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 472,
                        "end": 489
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 399,
                "end": 489
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 374,
            "end": 491
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "indexSig",
                "rawText": "indexSig",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 502,
                "end": 511
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 73844,
                        "accessModifier": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "idx",
                                        "rawText": "idx",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 560,
                                        "end": 563
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 564,
                                        "end": 571
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 560,
                                    "end": 571
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 560,
                            "end": 571
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 573,
                            "end": 577
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 560,
                        "end": 578
                    },
                    {
                        "kind": 73844,
                        "accessModifier": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "idx",
                                        "rawText": "idx",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 584,
                                        "end": 587
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 588,
                                        "end": 595
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 584,
                                    "end": 595
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 584,
                            "end": 595
                        },
                        "returnType": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 584,
                        "end": 596
                    }
                ],
                "multiline": true,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 513,
                "end": 596
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 491,
            "end": 596
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "any",
                "rawText": "any",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 598,
                "end": 602
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 598,
            "end": 603
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "idx",
                            "rawText": "idx",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 617,
                            "end": 620
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 617,
                    "end": 620
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 615,
                "end": 620
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 615,
            "end": 620
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "number",
                "rawText": "number",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 621,
                "end": 628
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 621,
            "end": 628
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "any",
                "rawText": "any",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 630,
                "end": 634
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 630,
            "end": 635
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 65592,
                            "shortCircuit": {
                                "kind": 196712,
                                "text": "idx",
                                "rawText": "idx",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 647,
                                "end": 650
                            },
                            "consequent": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 651,
                                "end": 651
                            },
                            "alternate": {
                                "kind": 196712,
                                "text": "number",
                                "rawText": "number",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 652,
                                "end": 659
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 647,
                            "end": 659
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 647,
                    "end": 659
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 635,
                "end": 660
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 635,
            "end": 660
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "any",
                "rawText": "any",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 661,
                "end": 665
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 661,
            "end": 666
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 596,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 597,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 614,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 620,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 628,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 629,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 651,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 660,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 673,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 674
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

