# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
interface A {
    prop: string;
    raw: string;
    m(): void;
}
abstract class B implements A {
    abstract prop: string;
    abstract raw: string;
    abstract readonly ro: string;
    abstract get readonlyProp(): string;
    abstract set readonlyProp(val: string);
    abstract m(): void;
}
class C extends B {
    get prop() { return "foo"; }
    set prop(v) { }
    raw = "edge";
    readonly ro = "readonly please";
    readonlyProp: string; // don't have to give a value, in fact
    m() { }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface A {\n    prop: string;\n    raw: string;\n    m(): void;\n}\nabstract class B implements A {\n    abstract prop: string;\n    abstract raw: string;\n    abstract readonly ro: string;\n    abstract get readonlyProp(): string;\n    abstract set readonlyProp(val: string);\n    abstract m(): void;\n}\nclass C extends B {\n    get prop() { return \"foo\"; }\n    set prop(v) { }\n    raw = \"edge\";\n    readonly ro = \"readonly please\";\n    readonlyProp: string; // don't have to give a value, in fact\n    m() { }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
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
                            "start": 13,
                            "end": 22
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 23,
                            "end": 30
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 13,
                        "end": 31
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "raw",
                            "rawText": "raw",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 39
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 40,
                            "end": 47
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 31,
                        "end": 48
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "m",
                            "rawText": "m",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 54
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
                            "start": 55,
                            "end": 55
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 57,
                            "end": 62
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 48,
                        "end": 63
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 13,
                "end": 63
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 65
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
                "start": 80,
                "end": 82
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": {
                "kind": 107,
                "clauses": [
                    {
                        "kind": 106,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 93,
                                "end": 95
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 93,
                            "end": 97
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 93,
                        "end": 95
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 93,
                "end": 95
            },
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "prop",
                            "rawText": "prop",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 115
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 116,
                            "end": 123
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 97,
                        "end": 124
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "raw",
                            "rawText": "raw",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 141
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 142,
                            "end": 149
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 124,
                        "end": 150
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "ro",
                            "rawText": "ro",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 172,
                            "end": 175
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": true,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 176,
                            "end": 183
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 150,
                        "end": 184
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "readonlyProp",
                                "rawText": "readonlyProp",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 201,
                                "end": 214
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 215,
                                "end": 216
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": null,
                            "decorators": null,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 217,
                                "end": 224
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 214,
                            "end": 225
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 184,
                        "end": 225
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "readonlyProp",
                                "rawText": "readonlyProp",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 242,
                                "end": 255
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "val",
                                            "rawText": "val",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 256,
                                            "end": 259
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 260,
                                            "end": 267
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 256,
                                        "end": 267
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 256,
                                "end": 268
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 255,
                            "end": 269
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 225,
                        "end": 269
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "m",
                                "rawText": "m",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 282,
                                "end": 284
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 285,
                                "end": 286
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 287,
                                "end": 292
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 284,
                            "end": 293
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 269,
                        "end": 293
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 97,
                "end": 295
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "symbol": null,
            "transformFlags": 2097153,
            "start": 74,
            "end": 295
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 301,
                "end": 303
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "B",
                    "rawText": "B",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 311,
                    "end": 313
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 311,
                "end": 313
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
                                "text": "prop",
                                "rawText": "prop",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 323,
                                "end": 328
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 329,
                                "end": 330
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
                                                "kind": 4261583,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 339,
                                                "end": 345
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 332,
                                            "end": 346
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 332,
                                    "end": 346
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 330,
                                "end": 348
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 328,
                            "end": 348
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 315,
                        "end": 348
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
                                "text": "prop",
                                "rawText": "prop",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 356,
                                "end": 361
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 362,
                                            "end": 363
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
                                        "start": 362,
                                        "end": 363
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 364
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
                                    "start": 366,
                                    "end": 366
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 364,
                                "end": 368
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 361,
                            "end": 368
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 348,
                        "end": 368
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "raw",
                            "rawText": "raw",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 368,
                            "end": 376
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "edge",
                            "rawText": "edge",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 378,
                            "end": 385
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 368,
                        "end": 386
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "ro",
                            "rawText": "ro",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 399,
                            "end": 402
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": true,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "readonly please",
                            "rawText": "readonly please",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 404,
                            "end": 422
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 386,
                        "end": 423
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "readonlyProp",
                            "rawText": "readonlyProp",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 423,
                            "end": 440
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
                            "start": 441,
                            "end": 448
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 423,
                        "end": 449
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
                                "text": "m",
                                "rawText": "m",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 449,
                                "end": 494
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 495,
                                "end": 496
                            },
                            "isSetter": false,
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
                                    "start": 498,
                                    "end": 498
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 496,
                                "end": 500
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 494,
                            "end": 500
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 449,
                        "end": 500
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 315,
                "end": 502
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 295,
            "end": 502
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 502
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

