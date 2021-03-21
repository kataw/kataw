# Kataw parser test case

## Input

`````js
class A { }
class B extends A { }

class LanguageSpec_section_4_5_inference {

    public set InferredGetterFromSetterAnnotation(a: A) { }
    public get InferredGetterFromSetterAnnotation() { return new B(); }

    public get InferredGetterFromSetterAnnotation_GetterFirst() { return new B(); }
    public set InferredGetterFromSetterAnnotation_GetterFirst(a: A) { }


    public get InferredFromGetter() { return new B(); }
    public set InferredFromGetter(a) { }

    public set InferredFromGetter_SetterFirst(a) { }
    public get InferredFromGetter_SetterFirst() { return new B(); }

    public set InferredSetterFromGetterAnnotation(a) { }
    public get InferredSetterFromGetterAnnotation() : A { return new B(); }

    public get InferredSetterFromGetterAnnotation_GetterFirst() : A { return new B(); }
    public set InferredSetterFromGetterAnnotation_GetterFirst(a) { }
}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A { }\nclass B extends A { }\n\nclass LanguageSpec_section_4_5_inference {\n\n    public set InferredGetterFromSetterAnnotation(a: A) { }\n    public get InferredGetterFromSetterAnnotation() { return new B(); }\n\n    public get InferredGetterFromSetterAnnotation_GetterFirst() { return new B(); }\n    public set InferredGetterFromSetterAnnotation_GetterFirst(a: A) { }\n\n\n    public get InferredFromGetter() { return new B(); }\n    public set InferredFromGetter(a) { }\n\n    public set InferredFromGetter_SetterFirst(a) { }\n    public get InferredFromGetter_SetterFirst() { return new B(); }\n\n    public set InferredSetterFromGetterAnnotation(a) { }\n    public get InferredSetterFromGetterAnnotation() : A { return new B(); }\n\n    public get InferredSetterFromGetterAnnotation_GetterFirst() : A { return new B(); }\n    public set InferredSetterFromGetterAnnotation_GetterFirst(a) { }\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 11
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 11
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 17,
                "end": 19
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 29
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 31,
                "end": 33
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 11,
            "end": 33
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "LanguageSpec_section_4_5_inference",
                "rawText": "LanguageSpec_section_4_5_inference",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 40,
                "end": 75
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredGetterFromSetterAnnotation",
                                "rawText": "InferredGetterFromSetterAnnotation",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 93,
                                "end": 128
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
                                            "start": 129,
                                            "end": 130
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 131,
                                                "end": 133
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 131,
                                            "end": 134
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 129,
                                        "end": 133
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 134
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 136,
                                    "end": 136
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 134,
                                "end": 138
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 77,
                                "end": 89
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 128,
                            "end": 138
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 77,
                        "end": 138
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredGetterFromSetterAnnotation",
                                "rawText": "InferredGetterFromSetterAnnotation",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 153,
                                "end": 188
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 189,
                                "end": 190
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 203,
                                                    "end": 205
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 206,
                                                    "end": 206
                                                },
                                                "flags": 199,
                                                "symbol": null,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 207
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 192,
                                            "end": 208
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 192,
                                    "end": 208
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 210
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 138,
                                "end": 149
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 188,
                            "end": 210
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 138,
                        "end": 210
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredGetterFromSetterAnnotation_GetterFirst",
                                "rawText": "InferredGetterFromSetterAnnotation_GetterFirst",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 273
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 274,
                                "end": 275
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 288,
                                                    "end": 290
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 291,
                                                    "end": 291
                                                },
                                                "flags": 284,
                                                "symbol": null,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 292
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 277,
                                            "end": 293
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 277,
                                    "end": 293
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 275,
                                "end": 295
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 210,
                                "end": 222
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 273,
                            "end": 295
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 210,
                        "end": 295
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredGetterFromSetterAnnotation_GetterFirst",
                                "rawText": "InferredGetterFromSetterAnnotation_GetterFirst",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 357
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
                                            "start": 358,
                                            "end": 359
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 360,
                                                "end": 362
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 360,
                                            "end": 363
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 358,
                                        "end": 362
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 358,
                                "end": 363
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 365,
                                    "end": 365
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 363,
                                "end": 367
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 295,
                                "end": 306
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 357,
                            "end": 367
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 295,
                        "end": 367
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredFromGetter",
                                "rawText": "InferredFromGetter",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 384,
                                "end": 403
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 404,
                                "end": 405
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 418,
                                                    "end": 420
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 421,
                                                    "end": 421
                                                },
                                                "flags": 414,
                                                "symbol": null,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 422
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 407,
                                            "end": 423
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 407,
                                    "end": 423
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 405,
                                "end": 425
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 367,
                                "end": 380
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 403,
                            "end": 425
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 367,
                        "end": 425
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredFromGetter",
                                "rawText": "InferredFromGetter",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 440,
                                "end": 459
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
                                            "start": 460,
                                            "end": 461
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 460,
                                        "end": 461
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 460,
                                "end": 462
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 464,
                                    "end": 464
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 462,
                                "end": 466
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 425,
                                "end": 436
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 459,
                            "end": 466
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 425,
                        "end": 466
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredFromGetter_SetterFirst",
                                "rawText": "InferredFromGetter_SetterFirst",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 482,
                                "end": 513
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
                                            "start": 514,
                                            "end": 515
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 514,
                                        "end": 515
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 514,
                                "end": 516
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 518,
                                    "end": 518
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 516,
                                "end": 520
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 466,
                                "end": 478
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 513,
                            "end": 520
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 466,
                        "end": 520
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredFromGetter_SetterFirst",
                                "rawText": "InferredFromGetter_SetterFirst",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 535,
                                "end": 566
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 567,
                                "end": 568
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 581,
                                                    "end": 583
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 584,
                                                    "end": 584
                                                },
                                                "flags": 577,
                                                "symbol": null,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 585
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 570,
                                            "end": 586
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 570,
                                    "end": 586
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 568,
                                "end": 588
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 520,
                                "end": 531
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 566,
                            "end": 588
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 520,
                        "end": 588
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredSetterFromGetterAnnotation",
                                "rawText": "InferredSetterFromGetterAnnotation",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 604,
                                "end": 639
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
                                            "start": 640,
                                            "end": 641
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 640,
                                        "end": 641
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 640,
                                "end": 642
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 644,
                                    "end": 644
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 642,
                                "end": 646
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 588,
                                "end": 600
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 639,
                            "end": 646
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 588,
                        "end": 646
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredSetterFromGetterAnnotation",
                                "rawText": "InferredSetterFromGetterAnnotation",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 661,
                                "end": 696
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 697,
                                "end": 698
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 715,
                                                    "end": 717
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 718,
                                                    "end": 718
                                                },
                                                "flags": 711,
                                                "symbol": null,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 719
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 704,
                                            "end": 720
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 704,
                                    "end": 720
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 702,
                                "end": 722
                            },
                            "decorators": null,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 700,
                                    "end": 702
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 700,
                                "end": 704
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 646,
                                "end": 657
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 696,
                            "end": 722
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 646,
                        "end": 722
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredSetterFromGetterAnnotation_GetterFirst",
                                "rawText": "InferredSetterFromGetterAnnotation_GetterFirst",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 738,
                                "end": 785
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 786,
                                "end": 787
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 804,
                                                    "end": 806
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 807,
                                                    "end": 807
                                                },
                                                "flags": 800,
                                                "symbol": null,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 808
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 793,
                                            "end": 809
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 793,
                                    "end": 809
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 791,
                                "end": 811
                            },
                            "decorators": null,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 789,
                                    "end": 791
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 789,
                                "end": 793
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 722,
                                "end": 734
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 785,
                            "end": 811
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 722,
                        "end": 811
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "InferredSetterFromGetterAnnotation_GetterFirst",
                                "rawText": "InferredSetterFromGetterAnnotation_GetterFirst",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 826,
                                "end": 873
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
                                            "start": 874,
                                            "end": 875
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 874,
                                        "end": 875
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 874,
                                "end": 876
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 878,
                                    "end": 878
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 876,
                                "end": 880
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 811,
                                "end": 822
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 873,
                            "end": 880
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 811,
                        "end": 880
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 77,
                "end": 882
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 33,
            "end": 882
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
    "end": 883
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

