# Kataw parser test case

## Input

`````js

var log = [];

function source() {
    log.push("source");
    return {
        get p() {
            log.push("get");
        }
    };
}
function target() {
    log.push("target");
    return {
        set q(v) {
            log.push("set");
        }
    };
}
function sourceKey() {
    log.push("source-key");
    return {
        toString: function() {
            log.push("source-key-tostring");
            return "p";
        }
    };
}
function targetKey() {
    log.push("target-key");
    return {
        toString: function() {
            log.push("target-key-tostring");
            return "q";
        }
    };
}


({[sourceKey()]: target()[targetKey()]} = source());
`````

## Output

### CST

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
                "flags": 1,
                "start": 0,
                "end": 4
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "log",
                            "rawText": "log",
                            "flags": 96,
                            "start": 4,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 4,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 14,
                "end": 24
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "source",
                "rawText": "source",
                "flags": 96,
                "start": 24,
                "end": 31
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 31,
                "end": 33
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
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 43
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 96,
                                        "start": 44,
                                        "end": 48
                                    },
                                    "flags": 536870944,
                                    "start": 35,
                                    "end": 48
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "source",
                                            "rawText": "\"source\"",
                                            "flags": 96,
                                            "start": 49,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 49,
                                    "end": 57
                                },
                                "flags": 268435488,
                                "start": 35,
                                "end": 58
                            },
                            "flags": 16,
                            "start": 35,
                            "end": 59
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 1,
                                "start": 59,
                                "end": 70
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 257,
                                            "asyncKeyword": null,
                                            "generatorToken": null,
                                            "getKeyword": {
                                                "kind": 16498,
                                                "flags": 64,
                                                "start": 72,
                                                "end": 84
                                            },
                                            "setKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "p",
                                                    "rawText": "p",
                                                    "flags": 96,
                                                    "start": 84,
                                                    "end": 86
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 1056,
                                                    "start": 87,
                                                    "end": 88
                                                },
                                                "type": null,
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
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 96,
                                                                            "start": 90,
                                                                            "end": 106
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 96,
                                                                            "start": 107,
                                                                            "end": 111
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 90,
                                                                        "end": 111
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "get",
                                                                                "rawText": "\"get\"",
                                                                                "flags": 96,
                                                                                "start": 112,
                                                                                "end": 117
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 112,
                                                                        "end": 117
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 90,
                                                                    "end": 118
                                                                },
                                                                "flags": 16,
                                                                "start": 90,
                                                                "end": 119
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 90,
                                                        "end": 119
                                                    },
                                                    "flags": 32,
                                                    "start": 88,
                                                    "end": 129
                                                },
                                                "flags": 1056,
                                                "start": 86,
                                                "end": 129
                                            },
                                            "flags": 32,
                                            "start": 72,
                                            "end": 129
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "start": 72,
                                    "end": 129
                                },
                                "flags": 49,
                                "start": 70,
                                "end": 135
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 59
                        }
                    ],
                    "flags": 33,
                    "start": 35,
                    "end": 136
                },
                "flags": 32,
                "start": 33,
                "end": 138
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 14,
            "end": 138
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 138,
                "end": 147
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "target",
                "rawText": "target",
                "flags": 96,
                "start": 147,
                "end": 154
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 154,
                "end": 156
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
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "start": 158,
                                        "end": 166
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 96,
                                        "start": 167,
                                        "end": 171
                                    },
                                    "flags": 536870944,
                                    "start": 158,
                                    "end": 171
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "target",
                                            "rawText": "\"target\"",
                                            "flags": 96,
                                            "start": 172,
                                            "end": 180
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 172,
                                    "end": 180
                                },
                                "flags": 268435488,
                                "start": 158,
                                "end": 181
                            },
                            "flags": 16,
                            "start": 158,
                            "end": 182
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 1,
                                "start": 182,
                                "end": 193
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 257,
                                            "asyncKeyword": null,
                                            "generatorToken": null,
                                            "getKeyword": null,
                                            "setKeyword": {
                                                "kind": 16499,
                                                "flags": 64,
                                                "start": 195,
                                                "end": 207
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "q",
                                                    "rawText": "q",
                                                    "flags": 96,
                                                    "start": 207,
                                                    "end": 209
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 215,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 96,
                                                                "start": 210,
                                                                "end": 211
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 210,
                                                            "end": 211
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 544,
                                                    "start": 210,
                                                    "end": 212
                                                },
                                                "type": null,
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
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 96,
                                                                            "start": 214,
                                                                            "end": 230
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 96,
                                                                            "start": 231,
                                                                            "end": 235
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 214,
                                                                        "end": 235
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "set",
                                                                                "rawText": "\"set\"",
                                                                                "flags": 96,
                                                                                "start": 236,
                                                                                "end": 241
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 236,
                                                                        "end": 241
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 214,
                                                                    "end": 242
                                                                },
                                                                "flags": 16,
                                                                "start": 214,
                                                                "end": 243
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 214,
                                                        "end": 243
                                                    },
                                                    "flags": 32,
                                                    "start": 212,
                                                    "end": 253
                                                },
                                                "flags": 544,
                                                "start": 209,
                                                "end": 253
                                            },
                                            "flags": 32,
                                            "start": 195,
                                            "end": 253
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "start": 195,
                                    "end": 253
                                },
                                "flags": 49,
                                "start": 193,
                                "end": 259
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 182
                        }
                    ],
                    "flags": 33,
                    "start": 158,
                    "end": 260
                },
                "flags": 32,
                "start": 156,
                "end": 262
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 138,
            "end": 262
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 262,
                "end": 271
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "sourceKey",
                "rawText": "sourceKey",
                "flags": 96,
                "start": 271,
                "end": 281
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 281,
                "end": 283
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
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "start": 285,
                                        "end": 293
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 96,
                                        "start": 294,
                                        "end": 298
                                    },
                                    "flags": 536870944,
                                    "start": 285,
                                    "end": 298
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "source-key",
                                            "rawText": "\"source-key\"",
                                            "flags": 96,
                                            "start": 299,
                                            "end": 311
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 299,
                                    "end": 311
                                },
                                "flags": 268435488,
                                "start": 285,
                                "end": 312
                            },
                            "flags": 16,
                            "start": 285,
                            "end": 313
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 1,
                                "start": 313,
                                "end": 324
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "toString",
                                                "rawText": "toString",
                                                "flags": 96,
                                                "start": 326,
                                                "end": 343
                                            },
                                            "right": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 0,
                                                    "start": 344,
                                                    "end": 353
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 353,
                                                    "end": 355
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
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 96,
                                                                            "start": 357,
                                                                            "end": 373
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 96,
                                                                            "start": 374,
                                                                            "end": 378
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 357,
                                                                        "end": 378
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "source-key-tostring",
                                                                                "rawText": "\"source-key-tostring\"",
                                                                                "flags": 96,
                                                                                "start": 379,
                                                                                "end": 400
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 379,
                                                                        "end": 400
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 357,
                                                                    "end": 401
                                                                },
                                                                "flags": 16,
                                                                "start": 357,
                                                                "end": 402
                                                            },
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 1,
                                                                    "start": 402,
                                                                    "end": 421
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "p",
                                                                    "rawText": "\"p\"",
                                                                    "flags": 96,
                                                                    "start": 421,
                                                                    "end": 425
                                                                },
                                                                "flags": 16,
                                                                "start": 1,
                                                                "end": 402
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 357,
                                                        "end": 426
                                                    },
                                                    "flags": 32,
                                                    "start": 355,
                                                    "end": 436
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 32,
                                                "start": 344,
                                                "end": 436
                                            },
                                            "flags": 32,
                                            "start": 326,
                                            "end": 436
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "start": 326,
                                    "end": 436
                                },
                                "flags": 49,
                                "start": 324,
                                "end": 442
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 313
                        }
                    ],
                    "flags": 33,
                    "start": 285,
                    "end": 443
                },
                "flags": 32,
                "start": 283,
                "end": 445
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 262,
            "end": 445
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 445,
                "end": 454
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "targetKey",
                "rawText": "targetKey",
                "flags": 96,
                "start": 454,
                "end": 464
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 464,
                "end": 466
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
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "start": 468,
                                        "end": 476
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 96,
                                        "start": 477,
                                        "end": 481
                                    },
                                    "flags": 536870944,
                                    "start": 468,
                                    "end": 481
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "target-key",
                                            "rawText": "\"target-key\"",
                                            "flags": 96,
                                            "start": 482,
                                            "end": 494
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 482,
                                    "end": 494
                                },
                                "flags": 268435488,
                                "start": 468,
                                "end": 495
                            },
                            "flags": 16,
                            "start": 468,
                            "end": 496
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 1,
                                "start": 496,
                                "end": 507
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "toString",
                                                "rawText": "toString",
                                                "flags": 96,
                                                "start": 509,
                                                "end": 526
                                            },
                                            "right": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 0,
                                                    "start": 527,
                                                    "end": 536
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 536,
                                                    "end": 538
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
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 96,
                                                                            "start": 540,
                                                                            "end": 556
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 96,
                                                                            "start": 557,
                                                                            "end": 561
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 540,
                                                                        "end": 561
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "target-key-tostring",
                                                                                "rawText": "\"target-key-tostring\"",
                                                                                "flags": 96,
                                                                                "start": 562,
                                                                                "end": 583
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 562,
                                                                        "end": 583
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 540,
                                                                    "end": 584
                                                                },
                                                                "flags": 16,
                                                                "start": 540,
                                                                "end": 585
                                                            },
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 1,
                                                                    "start": 585,
                                                                    "end": 604
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "q",
                                                                    "rawText": "\"q\"",
                                                                    "flags": 96,
                                                                    "start": 604,
                                                                    "end": 608
                                                                },
                                                                "flags": 16,
                                                                "start": 1,
                                                                "end": 585
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 540,
                                                        "end": 609
                                                    },
                                                    "flags": 32,
                                                    "start": 538,
                                                    "end": 619
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 32,
                                                "start": 527,
                                                "end": 619
                                            },
                                            "flags": 32,
                                            "start": 509,
                                            "end": 619
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "start": 509,
                                    "end": 619
                                },
                                "flags": 49,
                                "start": 507,
                                "end": 625
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 496
                        }
                    ],
                    "flags": 33,
                    "start": 468,
                    "end": 626
                },
                "flags": 32,
                "start": 466,
                "end": 628
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 445,
            "end": 628
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "sourceKey",
                                                "rawText": "sourceKey",
                                                "flags": 96,
                                                "start": 634,
                                                "end": 643
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 644,
                                                "end": 644
                                            },
                                            "flags": 268435488,
                                            "start": 634,
                                            "end": 645
                                        },
                                        "flags": 32,
                                        "start": 633,
                                        "end": 646
                                    },
                                    "right": {
                                        "kind": 536871042,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "target",
                                                "rawText": "target",
                                                "flags": 96,
                                                "start": 647,
                                                "end": 654
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 655,
                                                "end": 655
                                            },
                                            "flags": 268435488,
                                            "start": 633,
                                            "end": 656
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "targetKey",
                                                "rawText": "targetKey",
                                                "flags": 96,
                                                "start": 657,
                                                "end": 666
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 667,
                                                "end": 667
                                            },
                                            "flags": 268435488,
                                            "start": 657,
                                            "end": 668
                                        },
                                        "flags": 32,
                                        "start": 633,
                                        "end": 669
                                    },
                                    "flags": 32,
                                    "start": 633,
                                    "end": 669
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 633,
                            "end": 669
                        },
                        "flags": 48,
                        "start": 632,
                        "end": 670
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 670,
                        "end": 672
                    },
                    "right": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "source",
                            "rawText": "source",
                            "flags": 96,
                            "start": 672,
                            "end": 679
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 680,
                            "end": 680
                        },
                        "flags": 268435488,
                        "start": 672,
                        "end": 681
                    },
                    "flags": 32,
                    "start": 632,
                    "end": 681
                },
                "flags": 32,
                "start": 628,
                "end": 682
            },
            "flags": 16,
            "start": 628,
            "end": 683
        }
    ],
    "isModule": false,
    "source": "\nvar log = [];\n\nfunction source() {\n    log.push(\"source\");\n    return {\n        get p() {\n            log.push(\"get\");\n        }\n    };\n}\nfunction target() {\n    log.push(\"target\");\n    return {\n        set q(v) {\n            log.push(\"set\");\n        }\n    };\n}\nfunction sourceKey() {\n    log.push(\"source-key\");\n    return {\n        toString: function() {\n            log.push(\"source-key-tostring\");\n            return \"p\";\n        }\n    };\n}\nfunction targetKey() {\n    log.push(\"target-key\");\n    return {\n        toString: function() {\n            log.push(\"target-key-tostring\");\n            return \"q\";\n        }\n    };\n}\n\n\n({[sourceKey()]: target()[targetKey()]} = source());",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 683
}
```

### Printed

```javascript

var log = [];
function source() {
  log.push("\"source\"");
  return  { get p() {
      log.push("\"get\"");
    } };
}
function target() {
  log.push("\"target\"");
  return  { set q(v) {
      log.push("\"set\"");
    } };
}
function sourceKey() {
  log.push("\"source-key\"");
  return  { toString: function () {
      log.push("\"source-key-tostring\"");
      return  "\"p\"";
    } };
}
function targetKey() {
  log.push("\"target-key\"");
  return  { toString: function () {
      log.push("\"target-key-tostring\"");
      return  "\"q\"";
    } };
}
({ [sourceKey()]:  } = source());
```

### Diagnostics

```javascript
✔ No errors
```

