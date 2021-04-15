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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                            "flags": 768,
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
                                "flags": 256,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 13
                    }
                ],
                "flags": 128,
                "start": 4,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 14,
                "end": 24
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "source",
                "rawText": "source",
                "flags": 768,
                "start": 24,
                "end": 31
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                        "flags": 768,
                                        "start": 35,
                                        "end": 43
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 768,
                                        "start": 44,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 48
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "source",
                                            "rawText": "source",
                                            "flags": 768,
                                            "start": 49,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 49,
                                    "end": 57
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 58
                            },
                            "flags": 128,
                            "start": 35,
                            "end": 59
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
                                "start": 59,
                                "end": 70
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 768,
                                                "start": 84,
                                                "end": 86
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 8448,
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
                                                                        "flags": 768,
                                                                        "start": 90,
                                                                        "end": 106
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "push",
                                                                        "rawText": "push",
                                                                        "flags": 768,
                                                                        "start": 107,
                                                                        "end": 111
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 90,
                                                                    "end": 111
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392131,
                                                                            "text": "get",
                                                                            "rawText": "get",
                                                                            "flags": 768,
                                                                            "start": 112,
                                                                            "end": 117
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 112,
                                                                    "end": 117
                                                                },
                                                                "flags": 256,
                                                                "start": 90,
                                                                "end": 118
                                                            },
                                                            "flags": 128,
                                                            "start": 90,
                                                            "end": 119
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 256,
                                                    "start": 90,
                                                    "end": 119
                                                },
                                                "flags": 256,
                                                "start": 88,
                                                "end": 129
                                            },
                                            "flags": 8448,
                                            "start": 86,
                                            "end": 129
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 1,
                                    "start": 72,
                                    "end": 129
                                },
                                "flags": 256,
                                "start": 70,
                                "end": 135
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 59
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 35,
                    "end": 136
                },
                "flags": 256,
                "start": 33,
                "end": 138
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 14,
            "end": 138
        },
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 138,
                "end": 147
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "target",
                "rawText": "target",
                "flags": 768,
                "start": 147,
                "end": 154
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                        "flags": 768,
                                        "start": 158,
                                        "end": 166
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 768,
                                        "start": 167,
                                        "end": 171
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 158,
                                    "end": 171
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "target",
                                            "rawText": "target",
                                            "flags": 768,
                                            "start": 172,
                                            "end": 180
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 172,
                                    "end": 180
                                },
                                "flags": 256,
                                "start": 158,
                                "end": 181
                            },
                            "flags": 128,
                            "start": 158,
                            "end": 182
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
                                "start": 182,
                                "end": 193
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "q",
                                                "rawText": "q",
                                                "flags": 768,
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
                                                            "flags": 768,
                                                            "start": 210,
                                                            "end": 211
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 210,
                                                        "end": 211
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 4352,
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
                                                                        "flags": 768,
                                                                        "start": 214,
                                                                        "end": 230
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "push",
                                                                        "rawText": "push",
                                                                        "flags": 768,
                                                                        "start": 231,
                                                                        "end": 235
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 214,
                                                                    "end": 235
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392131,
                                                                            "text": "set",
                                                                            "rawText": "set",
                                                                            "flags": 768,
                                                                            "start": 236,
                                                                            "end": 241
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 236,
                                                                    "end": 241
                                                                },
                                                                "flags": 256,
                                                                "start": 214,
                                                                "end": 242
                                                            },
                                                            "flags": 128,
                                                            "start": 214,
                                                            "end": 243
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 256,
                                                    "start": 214,
                                                    "end": 243
                                                },
                                                "flags": 256,
                                                "start": 212,
                                                "end": 253
                                            },
                                            "flags": 4352,
                                            "start": 209,
                                            "end": 253
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 1,
                                    "start": 195,
                                    "end": 253
                                },
                                "flags": 256,
                                "start": 193,
                                "end": 259
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 182
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 158,
                    "end": 260
                },
                "flags": 256,
                "start": 156,
                "end": 262
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 138,
            "end": 262
        },
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 262,
                "end": 271
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "sourceKey",
                "rawText": "sourceKey",
                "flags": 768,
                "start": 271,
                "end": 281
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                        "flags": 768,
                                        "start": 285,
                                        "end": 293
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 768,
                                        "start": 294,
                                        "end": 298
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 285,
                                    "end": 298
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "source-key",
                                            "rawText": "source-key",
                                            "flags": 768,
                                            "start": 299,
                                            "end": 311
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 299,
                                    "end": 311
                                },
                                "flags": 256,
                                "start": 285,
                                "end": 312
                            },
                            "flags": 128,
                            "start": 285,
                            "end": 313
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
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
                                            "left": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 344,
                                                    "end": 353
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
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
                                                                            "flags": 768,
                                                                            "start": 357,
                                                                            "end": 373
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 768,
                                                                            "start": 374,
                                                                            "end": 378
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 357,
                                                                        "end": 378
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "source-key-tostring",
                                                                                "rawText": "source-key-tostring",
                                                                                "flags": 768,
                                                                                "start": 379,
                                                                                "end": 400
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 256,
                                                                        "start": 379,
                                                                        "end": 400
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 357,
                                                                    "end": 401
                                                                },
                                                                "flags": 128,
                                                                "start": 357,
                                                                "end": 402
                                                            },
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 768,
                                                                    "start": 402,
                                                                    "end": 421
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "p",
                                                                    "rawText": "p",
                                                                    "flags": 768,
                                                                    "start": 421,
                                                                    "end": 425
                                                                },
                                                                "flags": 128,
                                                                "start": 1,
                                                                "end": 402
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 256,
                                                        "start": 357,
                                                        "end": 426
                                                    },
                                                    "flags": 256,
                                                    "start": 355,
                                                    "end": 436
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 256,
                                                "start": 344,
                                                "end": 436
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "toString",
                                                "rawText": "toString",
                                                "flags": 768,
                                                "start": 326,
                                                "end": 343
                                            },
                                            "flags": 256,
                                            "start": 326,
                                            "end": 436
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 1,
                                    "start": 326,
                                    "end": 436
                                },
                                "flags": 256,
                                "start": 324,
                                "end": 442
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 313
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 285,
                    "end": 443
                },
                "flags": 256,
                "start": 283,
                "end": 445
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 262,
            "end": 445
        },
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 445,
                "end": 454
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "targetKey",
                "rawText": "targetKey",
                "flags": 768,
                "start": 454,
                "end": 464
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                        "flags": 768,
                                        "start": 468,
                                        "end": 476
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "push",
                                        "rawText": "push",
                                        "flags": 768,
                                        "start": 477,
                                        "end": 481
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 468,
                                    "end": 481
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "target-key",
                                            "rawText": "target-key",
                                            "flags": 768,
                                            "start": 482,
                                            "end": 494
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 482,
                                    "end": 494
                                },
                                "flags": 256,
                                "start": 468,
                                "end": 495
                            },
                            "flags": 128,
                            "start": 468,
                            "end": 496
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
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
                                            "left": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 527,
                                                    "end": 536
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
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
                                                                            "flags": 768,
                                                                            "start": 540,
                                                                            "end": 556
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 768,
                                                                            "start": 557,
                                                                            "end": 561
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 540,
                                                                        "end": 561
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "target-key-tostring",
                                                                                "rawText": "target-key-tostring",
                                                                                "flags": 768,
                                                                                "start": 562,
                                                                                "end": 583
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 256,
                                                                        "start": 562,
                                                                        "end": 583
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 540,
                                                                    "end": 584
                                                                },
                                                                "flags": 128,
                                                                "start": 540,
                                                                "end": 585
                                                            },
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 768,
                                                                    "start": 585,
                                                                    "end": 604
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "q",
                                                                    "rawText": "q",
                                                                    "flags": 768,
                                                                    "start": 604,
                                                                    "end": 608
                                                                },
                                                                "flags": 128,
                                                                "start": 1,
                                                                "end": 585
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 256,
                                                        "start": 540,
                                                        "end": 609
                                                    },
                                                    "flags": 256,
                                                    "start": 538,
                                                    "end": 619
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 256,
                                                "start": 527,
                                                "end": 619
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "toString",
                                                "rawText": "toString",
                                                "flags": 768,
                                                "start": 509,
                                                "end": 526
                                            },
                                            "flags": 256,
                                            "start": 509,
                                            "end": 619
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 1,
                                    "start": 509,
                                    "end": 619
                                },
                                "flags": 256,
                                "start": 507,
                                "end": 625
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 496
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 468,
                    "end": 626
                },
                "flags": 256,
                "start": 466,
                "end": 628
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
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
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "target",
                                                "rawText": "target",
                                                "flags": 768,
                                                "start": 647,
                                                "end": 654
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 655,
                                                "end": 655
                                            },
                                            "flags": 256,
                                            "start": 633,
                                            "end": 656
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "targetKey",
                                                "rawText": "targetKey",
                                                "flags": 768,
                                                "start": 657,
                                                "end": 666
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 667,
                                                "end": 667
                                            },
                                            "flags": 256,
                                            "start": 657,
                                            "end": 668
                                        },
                                        "flags": 256,
                                        "start": 633,
                                        "end": 669
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "sourceKey",
                                                "rawText": "sourceKey",
                                                "flags": 768,
                                                "start": 634,
                                                "end": 643
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 644,
                                                "end": 644
                                            },
                                            "flags": 256,
                                            "start": 634,
                                            "end": 645
                                        },
                                        "flags": 256,
                                        "start": 633,
                                        "end": 646
                                    },
                                    "flags": 256,
                                    "start": 633,
                                    "end": 669
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 633,
                            "end": 669
                        },
                        "flags": 256,
                        "start": 632,
                        "end": 670
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 670,
                        "end": 672
                    },
                    "right": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "source",
                            "rawText": "source",
                            "flags": 768,
                            "start": 672,
                            "end": 679
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 680,
                            "end": 680
                        },
                        "flags": 256,
                        "start": 672,
                        "end": 681
                    },
                    "flags": 256,
                    "start": 632,
                    "end": 681
                },
                "flags": 256,
                "start": 628,
                "end": 682
            },
            "flags": 128,
            "start": 628,
            "end": 683
        }
    ],
    "isModule": false,
    "text": "\nvar log = [];\n\nfunction source() {\n    log.push(\"source\");\n    return {\n        get p() {\n            log.push(\"get\");\n        }\n    };\n}\nfunction target() {\n    log.push(\"target\");\n    return {\n        set q(v) {\n            log.push(\"set\");\n        }\n    };\n}\nfunction sourceKey() {\n    log.push(\"source-key\");\n    return {\n        toString: function() {\n            log.push(\"source-key-tostring\");\n            return \"p\";\n        }\n    };\n}\nfunction targetKey() {\n    log.push(\"target-key\");\n    return {\n        toString: function() {\n            log.push(\"target-key-tostring\");\n            return \"q\";\n        }\n    };\n}\n\n\n({[sourceKey()]: target()[targetKey()]} = source());",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 683
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

