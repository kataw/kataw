# Kataw parser test case

## Input

`````js
type DeepReadonly<T> = T extends any[] ? DeepReadonlyArray<T[number]> : T extends object ? DeepReadonlyObject<T> : T;

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonlyObject<T> = {
    readonly [P in NonFunctionPropertyNames<T>]: DeepReadonly<T[P]>;
};

type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

type Type01 = 0 extends (1 extends 2  ? 3 : 4) ? 5 : 6;
type Type02 = 0 extends ((1 extends 2  ? 3 : 4)) ? 5 : 6;
type Type03 = 0 extends (((1 extends 2  ? 3 : 4))) ? 5 : 6;
type Type04 = 0 extends ((((1 extends 2  ? 3 : 4)))) ? 5 : 6;
type Type05 = (0 extends 1 ? 2 : 3) extends 4 ? 5 : 6;
type Type06 = ((0 extends 1 ? 2 : 3)) extends 4 ? 5 : 6;
type Type07 = (((0 extends 1 ? 2 : 3))) extends 4 ? 5 : 6;
type Type08 = ((((0 extends 1 ? 2 : 3)))) extends 4 ? 5 : 6;

type T1 = () => void extends T ? U : V;
type T1a = () => (void extends T ? U : V);
type T1b = () => (void) extends T ? U : V;
type T2 = (() => void) extends T ? U : V;

type U1 = new () => X extends T ? U : V;
type U1a = new () => (X extends T ? U : V);
type U1b = new () => (X) extends T ? U : V;
type U2 = (new () => X) extends T ? U : V;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type DeepReadonly<T> = T extends any[] ? DeepReadonlyArray<T[number]> : T extends object ? DeepReadonlyObject<T> : T;\n\ntype NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];\n\ninterface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}\n\ntype DeepReadonlyObject<T> = {\n    readonly [P in NonFunctionPropertyNames<T>]: DeepReadonly<T[P]>;\n};\n\ntype TypeName<T> =\n  T extends string ? \"string\" :\n  T extends number ? \"number\" :\n  T extends boolean ? \"boolean\" :\n  T extends undefined ? \"undefined\" :\n  T extends Function ? \"function\" :\n  \"object\";\n\ntype Type01 = 0 extends (1 extends 2  ? 3 : 4) ? 5 : 6;\ntype Type02 = 0 extends ((1 extends 2  ? 3 : 4)) ? 5 : 6;\ntype Type03 = 0 extends (((1 extends 2  ? 3 : 4))) ? 5 : 6;\ntype Type04 = 0 extends ((((1 extends 2  ? 3 : 4)))) ? 5 : 6;\ntype Type05 = (0 extends 1 ? 2 : 3) extends 4 ? 5 : 6;\ntype Type06 = ((0 extends 1 ? 2 : 3)) extends 4 ? 5 : 6;\ntype Type07 = (((0 extends 1 ? 2 : 3))) extends 4 ? 5 : 6;\ntype Type08 = ((((0 extends 1 ? 2 : 3)))) extends 4 ? 5 : 6;\n\ntype T1 = () => void extends T ? U : V;\ntype T1a = () => (void extends T ? U : V);\ntype T1b = () => (void) extends T ? U : V;\ntype T2 = (() => void) extends T ? U : V;\n\ntype U1 = new () => X extends T ? U : V;\ntype U1a = new () => (X extends T ? U : V);\ntype U1b = new () => (X) extends T ? U : V;\ntype U2 = (new () => X) extends T ? U : V;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "DeepReadonly",
                    "rawText": "DeepReadonly",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 17
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 24
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 22,
                        "end": 32
                    },
                    "extendsType": {
                        "kind": 8199,
                        "elementType": {
                            "kind": 4202498,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 32,
                            "end": 36
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 32,
                        "end": 40
                    },
                    "trueType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "DeepReadonlyArray",
                            "rawText": "DeepReadonlyArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 58
                        },
                        "typeArguments": {
                            "kind": 8419,
                            "typeArgumentsList": [
                                {
                                    "kind": 8309,
                                    "objectType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "indexType": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 61,
                                        "end": 67
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 59,
                                    "end": 69
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 59,
                            "end": 68
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 40,
                        "end": 71
                    },
                    "falseType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 73
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 71,
                            "end": 81
                        },
                        "extendsType": {
                            "kind": 4202663,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 81,
                            "end": 88
                        },
                        "trueType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "DeepReadonlyObject",
                                "rawText": "DeepReadonlyObject",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 109
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 110,
                                        "end": 112
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 110,
                                "end": 111
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 90,
                            "end": 114
                        },
                        "falseType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 116
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 114,
                            "end": 117
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 71,
                        "end": 116
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 22,
                    "end": 116
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 18,
                            "end": 19
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 18,
                    "end": 19
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 117
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "NonFunctionPropertyNames",
                    "rawText": "NonFunctionPropertyNames",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 148
                },
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 8335,
                        "typeParameter": {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 157,
                                "end": 158
                            },
                            "constraint": {
                                "kind": 8423,
                                "operator": "keyof",
                                "type": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 167,
                                        "end": 169
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 167,
                                    "end": 170
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 161,
                                "end": 169
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 157,
                            "end": 169
                        },
                        "nameType": null,
                        "isReadOnly": false,
                        "plus": false,
                        "minus": false,
                        "isOptional": false,
                        "type": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 8309,
                                "objectType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 171,
                                        "end": 173
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 171,
                                    "end": 174
                                },
                                "indexType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "K",
                                        "rawText": "K",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 174,
                                        "end": 175
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 174,
                                    "end": 176
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 171,
                                "end": 184
                            },
                            "extendsType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 193
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 184,
                                "end": 195
                            },
                            "trueType": {
                                "kind": 4202651,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 195,
                                "end": 201
                            },
                            "falseType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "K",
                                    "rawText": "K",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 205
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 203,
                                "end": 207
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 171,
                            "end": 205
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 153,
                        "end": 207
                    },
                    "indexType": {
                        "kind": 8423,
                        "operator": "keyof",
                        "type": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 215
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 213,
                            "end": 216
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 208,
                        "end": 215
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 153,
                    "end": 217
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 150
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 149,
                            "end": 150
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 149,
                    "end": 150
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 117,
                "end": 217
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "DeepReadonlyArray",
                    "rawText": "DeepReadonlyArray",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 228,
                    "end": 246
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 247,
                                "end": 248
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 247,
                            "end": 248
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 247,
                    "end": 248
                },
                "heritageClauses": {
                    "kind": 8294,
                    "clauses": [
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ReadonlyArray",
                                    "rawText": "ReadonlyArray",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 257,
                                    "end": 271
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "DeepReadonly",
                                                "rawText": "DeepReadonly",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 272,
                                                "end": 284
                                            },
                                            "typeArguments": {
                                                "kind": 8419,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 8428,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 285,
                                                            "end": 286
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 285,
                                                        "end": 287
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 285,
                                                "end": 286
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 272,
                                            "end": 288
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 272,
                                    "end": 287
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 257,
                                "end": 290
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 257,
                            "end": 288
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 257,
                    "end": 288
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 290,
                    "end": 290
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 217,
                "end": 291
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "DeepReadonlyObject",
                    "rawText": "DeepReadonlyObject",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 297,
                    "end": 316
                },
                "type": {
                    "kind": 8335,
                    "typeParameter": {
                        "kind": 8424,
                        "name": {
                            "kind": 196711,
                            "text": "P",
                            "rawText": "P",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 338,
                            "end": 339
                        },
                        "constraint": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "NonFunctionPropertyNames",
                                "rawText": "NonFunctionPropertyNames",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 342,
                                "end": 367
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 368,
                                            "end": 369
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 368,
                                        "end": 370
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 368,
                                "end": 369
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 342,
                            "end": 371
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 338,
                        "end": 370
                    },
                    "nameType": null,
                    "isReadOnly": true,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "DeepReadonly",
                            "rawText": "DeepReadonly",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 372,
                            "end": 385
                        },
                        "typeArguments": {
                            "kind": 8419,
                            "typeArgumentsList": [
                                {
                                    "kind": 8309,
                                    "objectType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 386,
                                            "end": 387
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 386,
                                        "end": 388
                                    },
                                    "indexType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "P",
                                            "rawText": "P",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 388,
                                            "end": 389
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 388,
                                        "end": 390
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 386,
                                    "end": 391
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 386,
                            "end": 390
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 372,
                        "end": 392
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 321,
                    "end": 394
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 317,
                                "end": 318
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 317,
                            "end": 318
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 317,
                    "end": 318
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 291,
                "end": 395
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "TypeName",
                    "rawText": "TypeName",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 401,
                    "end": 410
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 415,
                            "end": 419
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 415,
                        "end": 427
                    },
                    "extendsType": {
                        "kind": 4202702,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 427,
                        "end": 434
                    },
                    "trueType": {
                        "kind": 8400,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 436,
                        "end": 445
                    },
                    "falseType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 447,
                                "end": 451
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 447,
                            "end": 459
                        },
                        "extendsType": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 459,
                            "end": 466
                        },
                        "trueType": {
                            "kind": 8400,
                            "text": "number",
                            "rawText": "number",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 468,
                            "end": 477
                        },
                        "falseType": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 479,
                                    "end": 483
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 479,
                                "end": 491
                            },
                            "extendsType": {
                                "kind": 4268070,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 491,
                                "end": 499
                            },
                            "trueType": {
                                "kind": 8400,
                                "text": "boolean",
                                "rawText": "boolean",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 501,
                                "end": 511
                            },
                            "falseType": {
                                "kind": 8249,
                                "checkType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 513,
                                        "end": 517
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 513,
                                    "end": 525
                                },
                                "extendsType": {
                                    "kind": 4202735,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 525,
                                    "end": 535
                                },
                                "trueType": {
                                    "kind": 8400,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 537,
                                    "end": 549
                                },
                                "falseType": {
                                    "kind": 8249,
                                    "checkType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 551,
                                            "end": 555
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 551,
                                        "end": 563
                                    },
                                    "extendsType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Function",
                                            "rawText": "Function",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 563,
                                            "end": 572
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 563,
                                        "end": 574
                                    },
                                    "trueType": {
                                        "kind": 8400,
                                        "text": "function",
                                        "rawText": "function",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 574,
                                        "end": 585
                                    },
                                    "falseType": {
                                        "kind": 8400,
                                        "text": "object",
                                        "rawText": "object",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 587,
                                        "end": 598
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 551,
                                    "end": 598
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 513,
                                "end": 598
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 479,
                            "end": 598
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 447,
                        "end": 598
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 415,
                    "end": 598
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 411,
                                "end": 412
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 411,
                            "end": 412
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 411,
                    "end": 412
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 395,
                "end": 599
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type01",
                    "rawText": "Type01",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 605,
                    "end": 612
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8355,
                        "text": 0,
                        "rawText": "0",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 614,
                        "end": 616
                    },
                    "extendsType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 8355,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 626,
                                "end": 627
                            },
                            "extendsType": {
                                "kind": 8355,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 635,
                                "end": 637
                            },
                            "trueType": {
                                "kind": 8355,
                                "text": 3,
                                "rawText": "3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 640,
                                "end": 642
                            },
                            "falseType": {
                                "kind": 8355,
                                "text": 4,
                                "rawText": "4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 644,
                                "end": 646
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 626,
                            "end": 646
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 624,
                        "end": 647
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 649,
                        "end": 651
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 653,
                        "end": 655
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 614,
                    "end": 655
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 599,
                "end": 656
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type02",
                    "rawText": "Type02",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 661,
                    "end": 668
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8355,
                        "text": 0,
                        "rawText": "0",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 670,
                        "end": 672
                    },
                    "extendsType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8249,
                                "checkType": {
                                    "kind": 8355,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 683,
                                    "end": 684
                                },
                                "extendsType": {
                                    "kind": 8355,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 692,
                                    "end": 694
                                },
                                "trueType": {
                                    "kind": 8355,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 697,
                                    "end": 699
                                },
                                "falseType": {
                                    "kind": 8355,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 701,
                                    "end": 703
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 683,
                                "end": 703
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 682,
                            "end": 704
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 680,
                        "end": 705
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 707,
                        "end": 709
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 711,
                        "end": 713
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 670,
                    "end": 713
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 656,
                "end": 714
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type03",
                    "rawText": "Type03",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 719,
                    "end": 726
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8355,
                        "text": 0,
                        "rawText": "0",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 728,
                        "end": 730
                    },
                    "extendsType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8249,
                                    "checkType": {
                                        "kind": 8355,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 742,
                                        "end": 743
                                    },
                                    "extendsType": {
                                        "kind": 8355,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 751,
                                        "end": 753
                                    },
                                    "trueType": {
                                        "kind": 8355,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 756,
                                        "end": 758
                                    },
                                    "falseType": {
                                        "kind": 8355,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 760,
                                        "end": 762
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 742,
                                    "end": 762
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 741,
                                "end": 763
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 740,
                            "end": 764
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 738,
                        "end": 765
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 767,
                        "end": 769
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 771,
                        "end": 773
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 728,
                    "end": 773
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 714,
                "end": 774
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type04",
                    "rawText": "Type04",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 779,
                    "end": 786
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8355,
                        "text": 0,
                        "rawText": "0",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 788,
                        "end": 790
                    },
                    "extendsType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8369,
                                    "type": {
                                        "kind": 8249,
                                        "checkType": {
                                            "kind": 8355,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 803,
                                            "end": 804
                                        },
                                        "extendsType": {
                                            "kind": 8355,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 812,
                                            "end": 814
                                        },
                                        "trueType": {
                                            "kind": 8355,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 817,
                                            "end": 819
                                        },
                                        "falseType": {
                                            "kind": 8355,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 821,
                                            "end": 823
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 803,
                                        "end": 823
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 802,
                                    "end": 824
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 801,
                                "end": 825
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 800,
                            "end": 826
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 798,
                        "end": 827
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 829,
                        "end": 831
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 833,
                        "end": 835
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 788,
                    "end": 835
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 774,
                "end": 836
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type05",
                    "rawText": "Type05",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 841,
                    "end": 848
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 8355,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 852,
                                "end": 853
                            },
                            "extendsType": {
                                "kind": 8355,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 861,
                                "end": 863
                            },
                            "trueType": {
                                "kind": 8355,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 865,
                                "end": 867
                            },
                            "falseType": {
                                "kind": 8355,
                                "text": 3,
                                "rawText": "3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 869,
                                "end": 871
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 852,
                            "end": 871
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 850,
                        "end": 872
                    },
                    "extendsType": {
                        "kind": 8355,
                        "text": 4,
                        "rawText": "4",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 880,
                        "end": 882
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 884,
                        "end": 886
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 888,
                        "end": 890
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 850,
                    "end": 890
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 836,
                "end": 891
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type06",
                    "rawText": "Type06",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 896,
                    "end": 903
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8249,
                                "checkType": {
                                    "kind": 8355,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 908,
                                    "end": 909
                                },
                                "extendsType": {
                                    "kind": 8355,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 917,
                                    "end": 919
                                },
                                "trueType": {
                                    "kind": 8355,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 921,
                                    "end": 923
                                },
                                "falseType": {
                                    "kind": 8355,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 925,
                                    "end": 927
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 908,
                                "end": 927
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 907,
                            "end": 928
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 905,
                        "end": 929
                    },
                    "extendsType": {
                        "kind": 8355,
                        "text": 4,
                        "rawText": "4",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 937,
                        "end": 939
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 941,
                        "end": 943
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 945,
                        "end": 947
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 905,
                    "end": 947
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 891,
                "end": 948
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type07",
                    "rawText": "Type07",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 953,
                    "end": 960
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8249,
                                    "checkType": {
                                        "kind": 8355,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 966,
                                        "end": 967
                                    },
                                    "extendsType": {
                                        "kind": 8355,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 975,
                                        "end": 977
                                    },
                                    "trueType": {
                                        "kind": 8355,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 979,
                                        "end": 981
                                    },
                                    "falseType": {
                                        "kind": 8355,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 983,
                                        "end": 985
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 966,
                                    "end": 985
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 965,
                                "end": 986
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 964,
                            "end": 987
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 962,
                        "end": 988
                    },
                    "extendsType": {
                        "kind": 8355,
                        "text": 4,
                        "rawText": "4",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 996,
                        "end": 998
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1000,
                        "end": 1002
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1004,
                        "end": 1006
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 962,
                    "end": 1006
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 948,
                "end": 1007
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "Type08",
                    "rawText": "Type08",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1012,
                    "end": 1019
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8369,
                                    "type": {
                                        "kind": 8249,
                                        "checkType": {
                                            "kind": 8355,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1026,
                                            "end": 1027
                                        },
                                        "extendsType": {
                                            "kind": 8355,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1035,
                                            "end": 1037
                                        },
                                        "trueType": {
                                            "kind": 8355,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1039,
                                            "end": 1041
                                        },
                                        "falseType": {
                                            "kind": 8355,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1043,
                                            "end": 1045
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 1026,
                                        "end": 1045
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1025,
                                    "end": 1046
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1024,
                                "end": 1047
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1023,
                            "end": 1048
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1021,
                        "end": 1049
                    },
                    "extendsType": {
                        "kind": 8355,
                        "text": 4,
                        "rawText": "4",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1057,
                        "end": 1059
                    },
                    "trueType": {
                        "kind": 8355,
                        "text": 5,
                        "rawText": "5",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1061,
                        "end": 1063
                    },
                    "falseType": {
                        "kind": 8355,
                        "text": 6,
                        "rawText": "6",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1065,
                        "end": 1067
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1021,
                    "end": 1067
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1007,
                "end": 1068
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T1",
                    "rawText": "T1",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1074,
                    "end": 1077
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1081,
                        "end": 1081
                    },
                    "returnType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 4202742,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1085,
                            "end": 1090
                        },
                        "extendsType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1098,
                                "end": 1100
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1098,
                            "end": 1102
                        },
                        "trueType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1102,
                                "end": 1104
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1102,
                            "end": 1106
                        },
                        "falseType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1106,
                                "end": 1108
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1106,
                            "end": 1109
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1085,
                        "end": 1108
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1079,
                    "end": 1108
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1068,
                "end": 1109
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T1a",
                    "rawText": "T1a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1114,
                    "end": 1118
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1122,
                        "end": 1122
                    },
                    "returnType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1128,
                                "end": 1132
                            },
                            "extendsType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1140,
                                    "end": 1142
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1140,
                                "end": 1144
                            },
                            "trueType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1144,
                                    "end": 1146
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1144,
                                "end": 1148
                            },
                            "falseType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "V",
                                    "rawText": "V",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1148,
                                    "end": 1150
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1148,
                                "end": 1151
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1128,
                            "end": 1150
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1126,
                        "end": 1151
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1120,
                    "end": 1151
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1109,
                "end": 1152
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T1b",
                    "rawText": "T1b",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1157,
                    "end": 1161
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1165,
                        "end": 1165
                    },
                    "returnType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 8369,
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1171,
                                "end": 1175
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1169,
                            "end": 1176
                        },
                        "extendsType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1184,
                                "end": 1186
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1184,
                            "end": 1188
                        },
                        "trueType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1188,
                                "end": 1190
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1188,
                            "end": 1192
                        },
                        "falseType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1192,
                                "end": 1194
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1192,
                            "end": 1195
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1169,
                        "end": 1194
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1163,
                    "end": 1194
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1152,
                "end": 1195
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T2",
                    "rawText": "T2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1200,
                    "end": 1203
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1208,
                                "end": 1208
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1212,
                                "end": 1217
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1207,
                            "end": 1217
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1205,
                        "end": 1218
                    },
                    "extendsType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1226,
                            "end": 1228
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1226,
                        "end": 1230
                    },
                    "trueType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1230,
                            "end": 1232
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1230,
                        "end": 1234
                    },
                    "falseType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1234,
                            "end": 1236
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1234,
                        "end": 1237
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1205,
                    "end": 1236
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1195,
                "end": 1237
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "U1",
                    "rawText": "U1",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1243,
                    "end": 1246
                },
                "type": {
                    "kind": 8251,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1254,
                        "end": 1254
                    },
                    "returnType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "X",
                                "rawText": "X",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1258,
                                "end": 1260
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1258,
                            "end": 1268
                        },
                        "extendsType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1268,
                                "end": 1270
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1268,
                            "end": 1272
                        },
                        "trueType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1272,
                                "end": 1274
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1272,
                            "end": 1276
                        },
                        "falseType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1276,
                                "end": 1278
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1276,
                            "end": 1279
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1258,
                        "end": 1278
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1248,
                    "end": 1278
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1237,
                "end": 1279
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "U1a",
                    "rawText": "U1a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1284,
                    "end": 1288
                },
                "type": {
                    "kind": 8251,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1296,
                        "end": 1296
                    },
                    "returnType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1302,
                                    "end": 1303
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1302,
                                "end": 1311
                            },
                            "extendsType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1311,
                                    "end": 1313
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1311,
                                "end": 1315
                            },
                            "trueType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1315,
                                    "end": 1317
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1315,
                                "end": 1319
                            },
                            "falseType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "V",
                                    "rawText": "V",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1319,
                                    "end": 1321
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1319,
                                "end": 1322
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1302,
                            "end": 1321
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1300,
                        "end": 1322
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1290,
                    "end": 1322
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1279,
                "end": 1323
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "U1b",
                    "rawText": "U1b",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1328,
                    "end": 1332
                },
                "type": {
                    "kind": 8251,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1340,
                        "end": 1340
                    },
                    "returnType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 8369,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1346,
                                    "end": 1347
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1346,
                                "end": 1348
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1344,
                            "end": 1348
                        },
                        "extendsType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1356,
                                "end": 1358
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1356,
                            "end": 1360
                        },
                        "trueType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1360,
                                "end": 1362
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1360,
                            "end": 1364
                        },
                        "falseType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1364,
                                "end": 1366
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1364,
                            "end": 1367
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1344,
                        "end": 1366
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1334,
                    "end": 1366
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1323,
                "end": 1367
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "U2",
                    "rawText": "U2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1372,
                    "end": 1375
                },
                "type": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8251,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1384,
                                "end": 1384
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1388,
                                    "end": 1390
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1388,
                                "end": 1391
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1379,
                            "end": 1390
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1377,
                        "end": 1391
                    },
                    "extendsType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1399,
                            "end": 1401
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1399,
                        "end": 1403
                    },
                    "trueType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1403,
                            "end": 1405
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1403,
                        "end": 1407
                    },
                    "falseType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1407,
                            "end": 1409
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1407,
                        "end": 1410
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1377,
                    "end": 1409
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1367,
                "end": 1410
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 1410
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 1410
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

