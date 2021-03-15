# Kataw parser test case

## Input

`````js
interface Foo {
    method(a: number): string;
    optionalMethod?(a: number): string;
    property: string;
    optionalProperty?: string;
}

class Foo {
    additionalProperty: string;

    additionalMethod(a: number): string {
        return this.method(0);
    }
}

class Bar extends Foo {
    method(a: number) {
        return this.optionalProperty;
    }
}


var bar = new Bar();
bar.method(0);
bar.optionalMethod(1);
bar.property;
bar.optionalProperty;
bar.additionalProperty;
bar.additionalMethod(2);

var obj: {
    method(a: number): string;
    property: string;
    additionalProperty: string;
    additionalMethod(a: number): string;
};

bar = obj;
obj = bar;

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface Foo {\n    method(a: number): string;\n    optionalMethod?(a: number): string;\n    property: string;\n    optionalProperty?: string;\n}\n\nclass Foo {\n    additionalProperty: string;\n\n    additionalMethod(a: number): string {\n        return this.method(0);\n    }\n}\n\nclass Bar extends Foo {\n    method(a: number) {\n        return this.optionalProperty;\n    }\n}\n\n\nvar bar = new Bar();\nbar.method(0);\nbar.optionalMethod(1);\nbar.property;\nbar.optionalProperty;\nbar.additionalProperty;\nbar.additionalMethod(2);\n\nvar obj: {\n    method(a: number): string;\n    property: string;\n    additionalProperty: string;\n    additionalMethod(a: number): string;\n};\n\nbar = obj;\nobj = bar;\n",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 13
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
                            "text": "method",
                            "rawText": "method",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 26
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 29,
                                        "end": 36
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 27,
                                    "end": 36
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 27,
                            "end": 36
                        },
                        "returnType": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 15,
                        "end": 46
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "optionalMethod",
                            "rawText": "optionalMethod",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 65
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": true,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 67,
                                        "end": 68
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 69,
                                        "end": 76
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 67,
                                    "end": 76
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 67,
                            "end": 76
                        },
                        "returnType": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 78,
                            "end": 85
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 46,
                        "end": 86
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "property",
                            "rawText": "property",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 99
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 100,
                            "end": 107
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 86,
                        "end": 108
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "optionalProperty",
                            "rawText": "optionalProperty",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 108,
                            "end": 129
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 131,
                            "end": 138
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 108,
                        "end": 139
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 15,
                "end": 139
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 141
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 148,
                "end": 152
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "additionalProperty",
                            "rawText": "additionalProperty",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 154,
                            "end": 177
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 178,
                            "end": 185
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 154,
                        "end": 186
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
                                "text": "additionalMethod",
                                "rawText": "additionalMethod",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 186,
                                "end": 208
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
                                            "start": 209,
                                            "end": 210
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 211,
                                            "end": 218
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 209,
                                        "end": 218
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 219
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
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260571,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 244,
                                                        "end": 249
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "method",
                                                        "rawText": "method",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 250,
                                                        "end": 256
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 249,
                                                    "end": 256,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 249,
                                                        "end": 250
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 4261540,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 257,
                                                            "end": 258
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 258,
                                                    "end": 259
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 256,
                                                "end": 259
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 229,
                                            "end": 260
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 229,
                                    "end": 260
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 227,
                                "end": 266
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 220,
                                "end": 227
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 208,
                            "end": 266
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 186,
                        "end": 266
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 154,
                "end": 268
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 141,
            "end": 268
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Bar",
                "rawText": "Bar",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 275,
                "end": 279
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 287,
                    "end": 291
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 287,
                "end": 291
            },
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
                                "text": "method",
                                "rawText": "method",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 293,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 305,
                                            "end": 306
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 307,
                                            "end": 314
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 305,
                                        "end": 314
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 305,
                                "end": 315
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
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 332,
                                                    "end": 337
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "optionalProperty",
                                                    "rawText": "optionalProperty",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 338,
                                                    "end": 354
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 337,
                                                "end": 354,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 337,
                                                    "end": 338
                                                }
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 317,
                                            "end": 355
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 317,
                                    "end": 355
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 315,
                                "end": 361
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 304,
                            "end": 361
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 293,
                        "end": 361
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 293,
                "end": 363
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 268,
            "end": 363
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 369,
                            "end": 373
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "Bar",
                                "rawText": "Bar",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 379,
                                "end": 383
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 384,
                                "end": 384
                            },
                            "flags": 375,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 385
                        },
                        "flags": 369,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 385
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 369,
                "end": 385
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 363,
            "end": 386
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 386,
                        "end": 390
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "method",
                        "rawText": "method",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 391,
                        "end": 397
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 390,
                    "end": 397,
                    "period": {
                        "kind": 255,
                        "pos": 390,
                        "end": 391
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 398,
                            "end": 399
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 399,
                    "end": 400
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 397,
                "end": 400
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 386,
            "end": 401
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 401,
                        "end": 405
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "optionalMethod",
                        "rawText": "optionalMethod",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 406,
                        "end": 420
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 405,
                    "end": 420,
                    "period": {
                        "kind": 255,
                        "pos": 405,
                        "end": 406
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 421,
                            "end": 422
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 422,
                    "end": 423
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 420,
                "end": 423
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 401,
            "end": 424
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 424,
                    "end": 428
                },
                "expression": {
                    "kind": 196711,
                    "text": "property",
                    "rawText": "property",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 429,
                    "end": 437
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 428,
                "end": 437,
                "period": {
                    "kind": 255,
                    "pos": 428,
                    "end": 429
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 424,
            "end": 438
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 438,
                    "end": 442
                },
                "expression": {
                    "kind": 196711,
                    "text": "optionalProperty",
                    "rawText": "optionalProperty",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 443,
                    "end": 459
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 442,
                "end": 459,
                "period": {
                    "kind": 255,
                    "pos": 442,
                    "end": 443
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 438,
            "end": 460
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 460,
                    "end": 464
                },
                "expression": {
                    "kind": 196711,
                    "text": "additionalProperty",
                    "rawText": "additionalProperty",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 465,
                    "end": 483
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 464,
                "end": 483,
                "period": {
                    "kind": 255,
                    "pos": 464,
                    "end": 465
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 460,
            "end": 484
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 484,
                        "end": 488
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "additionalMethod",
                        "rawText": "additionalMethod",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 489,
                        "end": 505
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 488,
                    "end": 505,
                    "period": {
                        "kind": 255,
                        "pos": 488,
                        "end": 489
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 506,
                            "end": 507
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 507,
                    "end": 508
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 505,
                "end": 508
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 484,
            "end": 509
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 514,
                            "end": 518
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8339,
                                        "name": {
                                            "kind": 196711,
                                            "text": "method",
                                            "rawText": "method",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 521,
                                            "end": 532
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 533,
                                                        "end": 534
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 535,
                                                        "end": 542
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 533,
                                                    "end": 542
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 533,
                                            "end": 542
                                        },
                                        "returnType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 544,
                                            "end": 551
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 521,
                                        "end": 552
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "property",
                                            "rawText": "property",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 552,
                                            "end": 565
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 566,
                                            "end": 573
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 552,
                                        "end": 574
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "additionalProperty",
                                            "rawText": "additionalProperty",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 574,
                                            "end": 597
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 598,
                                            "end": 605
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 574,
                                        "end": 606
                                    },
                                    {
                                        "kind": 8339,
                                        "name": {
                                            "kind": 196711,
                                            "text": "additionalMethod",
                                            "rawText": "additionalMethod",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 606,
                                            "end": 627
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 628,
                                                        "end": 629
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 630,
                                                        "end": 637
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 628,
                                                    "end": 637
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 628,
                                            "end": 637
                                        },
                                        "returnType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 639,
                                            "end": 646
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 606,
                                        "end": 647
                                    }
                                ],
                                "multiline": true,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 521,
                                "end": 649
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 519,
                            "end": 649
                        },
                        "initializer": null,
                        "flags": 514,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 649
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 514,
                "end": 649
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 509,
            "end": 650
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 650,
                    "end": 655
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 657,
                    "end": 661
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 650,
                "end": 661
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 650,
            "end": 662
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 662,
                    "end": 666
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 668,
                    "end": 672
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 662,
                "end": 672
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 662,
            "end": 673
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

