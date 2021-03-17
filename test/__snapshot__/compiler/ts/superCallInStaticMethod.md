# Kataw parser test case

## Input

`````js
class Doing {
    public static staticMethod() {
    }
}

class Other extends Doing {
    // in static method
    public static staticMethod() {
        super.staticMethod();
    }

    // in a lambda inside a static method
    public static lambdaInsideAStaticMethod() {
        () => {
            super.staticMethod();
        }
    }

    // in an object literal inside a static method
    public static objectLiteralInsideAStaticMethod() {
        return {
            a: () => {
                super.staticMethod();
            },
            b: super.staticMethod()
        };
    }

    // in a getter
    public static get staticGetter() {
        super.staticMethod();

        return 0;
    }

    // in a setter
    public static set staticGetter(value: number) {
        super.staticMethod();
    }

    // in static method
    public static initializerInAStaticMethod(a = super.staticMethod()) {
        super.staticMethod();
    }
}


`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class Doing {\n    public static staticMethod() {\n    }\n}\n\nclass Other extends Doing {\n    // in static method\n    public static staticMethod() {\n        super.staticMethod();\n    }\n\n    // in a lambda inside a static method\n    public static lambdaInsideAStaticMethod() {\n        () => {\n            super.staticMethod();\n        }\n    }\n\n    // in an object literal inside a static method\n    public static objectLiteralInsideAStaticMethod() {\n        return {\n            a: () => {\n                super.staticMethod();\n            },\n            b: super.staticMethod()\n        };\n    }\n\n    // in a getter\n    public static get staticGetter() {\n        super.staticMethod();\n\n        return 0;\n    }\n\n    // in a setter\n    public static set staticGetter(value: number) {\n        super.staticMethod();\n    }\n\n    // in static method\n    public static initializerInAStaticMethod(a = super.staticMethod()) {\n        super.staticMethod();\n    }\n}\n\n",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Doing",
                "rawText": "Doing",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 11
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "staticMethod",
                                "rawText": "staticMethod",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 44
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 46
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 54
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 13,
                                "end": 24
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 44,
                            "end": 54
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 13,
                        "end": 54
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 13,
                "end": 56
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 56
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Other",
                "rawText": "Other",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 63,
                "end": 69
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "Doing",
                    "rawText": "Doing",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 83
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 77,
                "end": 83
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "staticMethod",
                                "rawText": "staticMethod",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 140
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 142
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 144,
                                                        "end": 158
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "staticMethod",
                                                        "rawText": "staticMethod",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 159,
                                                        "end": 171
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 158,
                                                    "end": 171,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 158,
                                                        "end": 159
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 173,
                                                    "end": 173
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 171,
                                                "end": 173
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 144,
                                            "end": 174
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 144,
                                    "end": 174
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 180
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 85,
                                "end": 120
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 140,
                            "end": 180
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 85,
                        "end": 180
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "lambdaInsideAStaticMethod",
                                "rawText": "lambdaInsideAStaticMethod",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 241,
                                "end": 267
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 268,
                                "end": 269
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 83976,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 81929,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 271,
                                                    "end": 271
                                                },
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 1073807915,
                                                                    "expression": {
                                                                        "kind": 67175096,
                                                                        "member": {
                                                                            "kind": 4260561,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 287,
                                                                            "end": 305
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "staticMethod",
                                                                            "rawText": "staticMethod",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 306,
                                                                            "end": 318
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 305,
                                                                        "end": 318,
                                                                        "period": {
                                                                            "kind": 255,
                                                                            "pos": 305,
                                                                            "end": 306
                                                                        }
                                                                    },
                                                                    "typeArguments": null,
                                                                    "argumentList": {
                                                                        "kind": 3,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "transformFlags": 0,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "start": 320,
                                                                        "end": 320
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 318,
                                                                    "end": 320
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 287,
                                                                "end": 321
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 287,
                                                        "end": 321
                                                    },
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 285,
                                                    "end": 331
                                                },
                                                "flags": 1073774592,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 271,
                                                "end": 331
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 271,
                                            "end": 331
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 271,
                                    "end": 331
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 269,
                                "end": 337
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 180,
                                "end": 234
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 267,
                            "end": 337
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 180,
                        "end": 337
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "objectLiteralInsideAStaticMethod",
                                "rawText": "objectLiteralInsideAStaticMethod",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 407,
                                "end": 440
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 441,
                                "end": 442
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 98984,
                                                "propertyList": {
                                                    "kind": 65722,
                                                    "properties": [
                                                        {
                                                            "kind": 65721,
                                                            "left": {
                                                                "kind": 196711,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 461,
                                                                "end": 475
                                                            },
                                                            "right": {
                                                                "kind": 83976,
                                                                "typeParameters": null,
                                                                "parameters": {
                                                                    "kind": 81929,
                                                                    "elements": [],
                                                                    "type": null,
                                                                    "accessModifier": null,
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 476,
                                                                    "end": 476
                                                                },
                                                                "contents": {
                                                                    "kind": 91,
                                                                    "functionStatementList": {
                                                                        "kind": 94,
                                                                        "statements": [
                                                                            {
                                                                                "kind": 2097233,
                                                                                "expression": {
                                                                                    "kind": 1073807915,
                                                                                    "expression": {
                                                                                        "kind": 67175096,
                                                                                        "member": {
                                                                                            "kind": 4260561,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 484,
                                                                                            "end": 506
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 196711,
                                                                                            "text": "staticMethod",
                                                                                            "rawText": "staticMethod",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 507,
                                                                                            "end": 519
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 506,
                                                                                        "end": 519,
                                                                                        "period": {
                                                                                            "kind": 255,
                                                                                            "pos": 506,
                                                                                            "end": 507
                                                                                        }
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "argumentList": {
                                                                                        "kind": 3,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 0,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "start": 521,
                                                                                        "end": 521
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 519,
                                                                                    "end": 521
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 484,
                                                                                "end": 522
                                                                            }
                                                                        ],
                                                                        "multiline": true,
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 484,
                                                                        "end": 522
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 482,
                                                                    "end": 536
                                                                },
                                                                "flags": 1073741824,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 476,
                                                                "end": 536
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 461,
                                                            "end": 536
                                                        },
                                                        {
                                                            "kind": 65721,
                                                            "left": {
                                                                "kind": 196711,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 537,
                                                                "end": 551
                                                            },
                                                            "right": {
                                                                "kind": 1073807915,
                                                                "expression": {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 4260561,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 552,
                                                                        "end": 558
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "staticMethod",
                                                                        "rawText": "staticMethod",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 559,
                                                                        "end": 571
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 558,
                                                                    "end": 571,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 558,
                                                                        "end": 559
                                                                    }
                                                                },
                                                                "typeArguments": null,
                                                                "argumentList": {
                                                                    "kind": 3,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "transformFlags": 0,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "start": 573,
                                                                    "end": 573
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 571,
                                                                "end": 573
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 537,
                                                            "end": 573
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": true,
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 461,
                                                    "end": 573
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 459,
                                                "end": 583
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 444,
                                            "end": 584
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 444,
                                    "end": 584
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 442,
                                "end": 590
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 337,
                                "end": 400
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 440,
                            "end": 590
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 337,
                        "end": 590
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "staticGetter",
                                "rawText": "staticGetter",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 632,
                                "end": 645
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 646,
                                "end": 647
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 649,
                                                        "end": 663
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "staticMethod",
                                                        "rawText": "staticMethod",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 664,
                                                        "end": 676
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 663,
                                                    "end": 676,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 663,
                                                        "end": 664
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 678,
                                                    "end": 678
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 676,
                                                "end": 678
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 649,
                                            "end": 679
                                        },
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 695,
                                                "end": 697
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 679,
                                            "end": 698
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 649,
                                    "end": 698
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 647,
                                "end": 704
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 590,
                                "end": 621
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 645,
                            "end": 704
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 590,
                        "end": 704
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "staticGetter",
                                "rawText": "staticGetter",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 746,
                                "end": 759
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 760,
                                            "end": 765
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 766,
                                            "end": 773
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 760,
                                        "end": 773
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 760,
                                "end": 774
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 776,
                                                        "end": 790
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "staticMethod",
                                                        "rawText": "staticMethod",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 791,
                                                        "end": 803
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 790,
                                                    "end": 803,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 790,
                                                        "end": 791
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 805,
                                                    "end": 805
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 803,
                                                "end": 805
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 776,
                                            "end": 806
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 776,
                                    "end": 806
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 774,
                                "end": 812
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 704,
                                "end": 735
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 759,
                            "end": 812
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 704,
                        "end": 812
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "initializerInAStaticMethod",
                                "rawText": "initializerInAStaticMethod",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 855,
                                "end": 882
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 883,
                                            "end": 884
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260561,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 886,
                                                    "end": 892
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "staticMethod",
                                                    "rawText": "staticMethod",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 893,
                                                    "end": 905
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 892,
                                                "end": 905,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 892,
                                                    "end": 893
                                                }
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 907,
                                                "end": 907
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 905,
                                            "end": 907
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 883,
                                        "end": 907
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 883,
                                "end": 908
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 910,
                                                        "end": 924
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "staticMethod",
                                                        "rawText": "staticMethod",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 925,
                                                        "end": 937
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 924,
                                                    "end": 937,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 924,
                                                        "end": 925
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 939,
                                                    "end": 939
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 937,
                                                "end": 939
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 910,
                                            "end": 940
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 910,
                                    "end": 940
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 908,
                                "end": 946
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 812,
                                "end": 848
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 882,
                            "end": 946
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 812,
                        "end": 946
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 85,
                "end": 948
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 56,
            "end": 948
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
    "end": 950
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

