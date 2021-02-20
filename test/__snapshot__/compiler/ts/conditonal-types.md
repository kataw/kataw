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
    "kind": 149,
    "source": "type DeepReadonly<T> = T extends any[] ? DeepReadonlyArray<T[number]> : T extends object ? DeepReadonlyObject<T> : T;\n\ntype NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];\n\ninterface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}\n\ntype DeepReadonlyObject<T> = {\n    readonly [P in NonFunctionPropertyNames<T>]: DeepReadonly<T[P]>;\n};\n\ntype TypeName<T> =\n  T extends string ? \"string\" :\n  T extends number ? \"number\" :\n  T extends boolean ? \"boolean\" :\n  T extends undefined ? \"undefined\" :\n  T extends Function ? \"function\" :\n  \"object\";\n\ntype Type01 = 0 extends (1 extends 2  ? 3 : 4) ? 5 : 6;\ntype Type02 = 0 extends ((1 extends 2  ? 3 : 4)) ? 5 : 6;\ntype Type03 = 0 extends (((1 extends 2  ? 3 : 4))) ? 5 : 6;\ntype Type04 = 0 extends ((((1 extends 2  ? 3 : 4)))) ? 5 : 6;\ntype Type05 = (0 extends 1 ? 2 : 3) extends 4 ? 5 : 6;\ntype Type06 = ((0 extends 1 ? 2 : 3)) extends 4 ? 5 : 6;\ntype Type07 = (((0 extends 1 ? 2 : 3))) extends 4 ? 5 : 6;\ntype Type08 = ((((0 extends 1 ? 2 : 3)))) extends 4 ? 5 : 6;\n\ntype T1 = () => void extends T ? U : V;\ntype T1a = () => (void extends T ? U : V);\ntype T1b = () => (void) extends T ? U : V;\ntype T2 = (() => void) extends T ? U : V;\n\ntype U1 = new () => X extends T ? U : V;\ntype U1a = new () => (X extends T ? U : V);\ntype U1b = new () => (X) extends T ? U : V;\ntype U2 = (new () => X) extends T ? U : V;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "DeepReadonly",
                    "rawText": "DeepReadonly",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 17
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 22,
                            "end": 24
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 22,
                        "end": 32
                    },
                    "extendsType": {
                        "kind": 7,
                        "elementType": {
                            "kind": 4194306,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 32,
                            "end": 36
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 32,
                        "end": 40
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "DeepReadonlyArray",
                            "rawText": "DeepReadonlyArray",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 40,
                            "end": 58
                        },
                        "typeArguments": {
                            "kind": 227,
                            "typeArgumentsList": [
                                {
                                    "kind": 117,
                                    "objectType": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "indexType": {
                                        "kind": 161,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 61,
                                        "end": 67
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 59,
                                    "end": 69
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 59,
                            "end": 68
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 40,
                        "end": 71
                    },
                    "falseType": {
                        "kind": 57,
                        "checkType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 71,
                                "end": 73
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 71,
                            "end": 81
                        },
                        "extendsType": {
                            "kind": 4194471,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 81,
                            "end": 88
                        },
                        "trueType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "DeepReadonlyObject",
                                "rawText": "DeepReadonlyObject",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 90,
                                "end": 109
                            },
                            "typeArguments": {
                                "kind": 227,
                                "typeArgumentsList": [
                                    {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 110,
                                        "end": 112
                                    }
                                ],
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 110,
                                "end": 111
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 90,
                            "end": 114
                        },
                        "falseType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 114,
                                "end": 116
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 114,
                            "end": 117
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 71,
                        "end": 116
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 22,
                    "end": 116
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 19
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 18,
                            "end": 19
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 19
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 117
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "NonFunctionPropertyNames",
                    "rawText": "NonFunctionPropertyNames",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 123,
                    "end": 148
                },
                "type": {
                    "kind": 117,
                    "objectType": {
                        "kind": 143,
                        "typeParameter": {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 157,
                                "end": 158
                            },
                            "constraint": {
                                "kind": 231,
                                "operator": "keyof",
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 167,
                                        "end": 169
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 167,
                                    "end": 170
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 161,
                                "end": 169
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 157,
                            "end": 169
                        },
                        "nameType": null,
                        "isReadOnly": false,
                        "plus": false,
                        "minus": false,
                        "isOptional": false,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 117,
                                "objectType": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 171,
                                        "end": 173
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 171,
                                    "end": 174
                                },
                                "indexType": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "K",
                                        "rawText": "K",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 174,
                                        "end": 175
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 174,
                                    "end": 176
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 171,
                                "end": 184
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 184,
                                    "end": 193
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 184,
                                "end": 195
                            },
                            "trueType": {
                                "kind": 4194459,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 195,
                                "end": 201
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "K",
                                    "rawText": "K",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 203,
                                    "end": 205
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 203,
                                "end": 207
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 171,
                            "end": 205
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 153,
                        "end": 207
                    },
                    "indexType": {
                        "kind": 231,
                        "operator": "keyof",
                        "type": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 213,
                                "end": 215
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 213,
                            "end": 216
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 208,
                        "end": 215
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 153,
                    "end": 217
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 149,
                                "end": 150
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 149,
                            "end": 150
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 149,
                    "end": 150
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 117,
                "end": 217
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "DeepReadonlyArray",
                    "rawText": "DeepReadonlyArray",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 228,
                    "end": 246
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 247,
                                "end": 248
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 247,
                            "end": 248
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 247,
                    "end": 248
                },
                "heritageClauses": {
                    "kind": 102,
                    "clauses": [
                        {
                            "kind": 101,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ReadonlyArray",
                                    "rawText": "ReadonlyArray",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 257,
                                    "end": 271
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "DeepReadonly",
                                                "rawText": "DeepReadonly",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 272,
                                                "end": 284
                                            },
                                            "typeArguments": {
                                                "kind": 227,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 236,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 285,
                                                            "end": 286
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 285,
                                                        "end": 287
                                                    }
                                                ],
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 285,
                                                "end": 286
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 272,
                                            "end": 288
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 272,
                                    "end": 287
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 257,
                                "end": 290
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 257,
                            "end": 288
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 257,
                    "end": 288
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 290,
                    "end": 290
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 217,
                "end": 291
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "DeepReadonlyObject",
                    "rawText": "DeepReadonlyObject",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 297,
                    "end": 316
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "P",
                            "rawText": "P",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 338,
                            "end": 339
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "NonFunctionPropertyNames",
                                "rawText": "NonFunctionPropertyNames",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 342,
                                "end": 367
                            },
                            "typeArguments": {
                                "kind": 227,
                                "typeArgumentsList": [
                                    {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 368,
                                            "end": 369
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 368,
                                        "end": 370
                                    }
                                ],
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 368,
                                "end": 369
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 342,
                            "end": 371
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 338,
                        "end": 370
                    },
                    "nameType": null,
                    "isReadOnly": true,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "DeepReadonly",
                            "rawText": "DeepReadonly",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 372,
                            "end": 385
                        },
                        "typeArguments": {
                            "kind": 227,
                            "typeArgumentsList": [
                                {
                                    "kind": 117,
                                    "objectType": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 386,
                                            "end": 387
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 386,
                                        "end": 388
                                    },
                                    "indexType": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "P",
                                            "rawText": "P",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 388,
                                            "end": 389
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 388,
                                        "end": 390
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 386,
                                    "end": 391
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 386,
                            "end": 390
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 372,
                        "end": 392
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 321,
                    "end": 394
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 317,
                                "end": 318
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 317,
                            "end": 318
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 317,
                    "end": 318
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 291,
                "end": 395
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "TypeName",
                    "rawText": "TypeName",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 401,
                    "end": 410
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 415,
                            "end": 419
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 415,
                        "end": 427
                    },
                    "extendsType": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 427,
                        "end": 434
                    },
                    "trueType": {
                        "kind": 208,
                        "value": "string",
                        "rawValue": "string",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 436,
                        "end": 445
                    },
                    "falseType": {
                        "kind": 57,
                        "checkType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 447,
                                "end": 451
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 447,
                            "end": 459
                        },
                        "extendsType": {
                            "kind": 161,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 459,
                            "end": 466
                        },
                        "trueType": {
                            "kind": 208,
                            "value": "number",
                            "rawValue": "number",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 468,
                            "end": 477
                        },
                        "falseType": {
                            "kind": 57,
                            "checkType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 479,
                                    "end": 483
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 479,
                                "end": 491
                            },
                            "extendsType": {
                                "kind": 4259878,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 491,
                                "end": 499
                            },
                            "trueType": {
                                "kind": 208,
                                "value": "boolean",
                                "rawValue": "boolean",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 501,
                                "end": 511
                            },
                            "falseType": {
                                "kind": 57,
                                "checkType": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 513,
                                        "end": 517
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 513,
                                    "end": 525
                                },
                                "extendsType": {
                                    "kind": 4194543,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 525,
                                    "end": 535
                                },
                                "trueType": {
                                    "kind": 208,
                                    "value": "undefined",
                                    "rawValue": "undefined",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 537,
                                    "end": 549
                                },
                                "falseType": {
                                    "kind": 57,
                                    "checkType": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 551,
                                            "end": 555
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 551,
                                        "end": 563
                                    },
                                    "extendsType": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Function",
                                            "rawText": "Function",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 563,
                                            "end": 572
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 563,
                                        "end": 574
                                    },
                                    "trueType": {
                                        "kind": 208,
                                        "value": "function",
                                        "rawValue": "function",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 574,
                                        "end": 585
                                    },
                                    "falseType": {
                                        "kind": 208,
                                        "value": "object",
                                        "rawValue": "object",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 587,
                                        "end": 598
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 551,
                                    "end": 598
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 513,
                                "end": 598
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 479,
                            "end": 598
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 447,
                        "end": 598
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 415,
                    "end": 598
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 411,
                                "end": 412
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 411,
                            "end": 412
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 411,
                    "end": 412
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 395,
                "end": 599
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type01",
                    "rawText": "Type01",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 605,
                    "end": 612
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 163,
                        "value": 0,
                        "rawValue": "0",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 614,
                        "end": 616
                    },
                    "extendsType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 163,
                                "value": 1,
                                "rawValue": "1",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 626,
                                "end": 627
                            },
                            "extendsType": {
                                "kind": 163,
                                "value": 2,
                                "rawValue": "2",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 635,
                                "end": 637
                            },
                            "trueType": {
                                "kind": 163,
                                "value": 3,
                                "rawValue": "3",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 640,
                                "end": 642
                            },
                            "falseType": {
                                "kind": 163,
                                "value": 4,
                                "rawValue": "4",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 644,
                                "end": 646
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 626,
                            "end": 646
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 624,
                        "end": 647
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 649,
                        "end": 651
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 653,
                        "end": 655
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 614,
                    "end": 655
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 599,
                "end": 656
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type02",
                    "rawText": "Type02",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 661,
                    "end": 668
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 163,
                        "value": 0,
                        "rawValue": "0",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 670,
                        "end": 672
                    },
                    "extendsType": {
                        "kind": 177,
                        "type": {
                            "kind": 177,
                            "type": {
                                "kind": 57,
                                "checkType": {
                                    "kind": 163,
                                    "value": 1,
                                    "rawValue": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 683,
                                    "end": 684
                                },
                                "extendsType": {
                                    "kind": 163,
                                    "value": 2,
                                    "rawValue": "2",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 692,
                                    "end": 694
                                },
                                "trueType": {
                                    "kind": 163,
                                    "value": 3,
                                    "rawValue": "3",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 697,
                                    "end": 699
                                },
                                "falseType": {
                                    "kind": 163,
                                    "value": 4,
                                    "rawValue": "4",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 701,
                                    "end": 703
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 683,
                                "end": 703
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 682,
                            "end": 704
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 680,
                        "end": 705
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 707,
                        "end": 709
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 711,
                        "end": 713
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 670,
                    "end": 713
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 656,
                "end": 714
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type03",
                    "rawText": "Type03",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 719,
                    "end": 726
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 163,
                        "value": 0,
                        "rawValue": "0",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 728,
                        "end": 730
                    },
                    "extendsType": {
                        "kind": 177,
                        "type": {
                            "kind": 177,
                            "type": {
                                "kind": 177,
                                "type": {
                                    "kind": 57,
                                    "checkType": {
                                        "kind": 163,
                                        "value": 1,
                                        "rawValue": "1",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 742,
                                        "end": 743
                                    },
                                    "extendsType": {
                                        "kind": 163,
                                        "value": 2,
                                        "rawValue": "2",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 751,
                                        "end": 753
                                    },
                                    "trueType": {
                                        "kind": 163,
                                        "value": 3,
                                        "rawValue": "3",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 756,
                                        "end": 758
                                    },
                                    "falseType": {
                                        "kind": 163,
                                        "value": 4,
                                        "rawValue": "4",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 760,
                                        "end": 762
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 742,
                                    "end": 762
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 741,
                                "end": 763
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 740,
                            "end": 764
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 738,
                        "end": 765
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 767,
                        "end": 769
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 771,
                        "end": 773
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 728,
                    "end": 773
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 714,
                "end": 774
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type04",
                    "rawText": "Type04",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 779,
                    "end": 786
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 163,
                        "value": 0,
                        "rawValue": "0",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 788,
                        "end": 790
                    },
                    "extendsType": {
                        "kind": 177,
                        "type": {
                            "kind": 177,
                            "type": {
                                "kind": 177,
                                "type": {
                                    "kind": 177,
                                    "type": {
                                        "kind": 57,
                                        "checkType": {
                                            "kind": 163,
                                            "value": 1,
                                            "rawValue": "1",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 803,
                                            "end": 804
                                        },
                                        "extendsType": {
                                            "kind": 163,
                                            "value": 2,
                                            "rawValue": "2",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 812,
                                            "end": 814
                                        },
                                        "trueType": {
                                            "kind": 163,
                                            "value": 3,
                                            "rawValue": "3",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 817,
                                            "end": 819
                                        },
                                        "falseType": {
                                            "kind": 163,
                                            "value": 4,
                                            "rawValue": "4",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 821,
                                            "end": 823
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 803,
                                        "end": 823
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 802,
                                    "end": 824
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 801,
                                "end": 825
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 800,
                            "end": 826
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 798,
                        "end": 827
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 829,
                        "end": 831
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 833,
                        "end": 835
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 788,
                    "end": 835
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 774,
                "end": 836
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type05",
                    "rawText": "Type05",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 841,
                    "end": 848
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 163,
                                "value": 0,
                                "rawValue": "0",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 852,
                                "end": 853
                            },
                            "extendsType": {
                                "kind": 163,
                                "value": 1,
                                "rawValue": "1",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 861,
                                "end": 863
                            },
                            "trueType": {
                                "kind": 163,
                                "value": 2,
                                "rawValue": "2",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 865,
                                "end": 867
                            },
                            "falseType": {
                                "kind": 163,
                                "value": 3,
                                "rawValue": "3",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 869,
                                "end": 871
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 852,
                            "end": 871
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 850,
                        "end": 872
                    },
                    "extendsType": {
                        "kind": 163,
                        "value": 4,
                        "rawValue": "4",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 880,
                        "end": 882
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 884,
                        "end": 886
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 888,
                        "end": 890
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 850,
                    "end": 890
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 836,
                "end": 891
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type06",
                    "rawText": "Type06",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 896,
                    "end": 903
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 177,
                            "type": {
                                "kind": 57,
                                "checkType": {
                                    "kind": 163,
                                    "value": 0,
                                    "rawValue": "0",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 908,
                                    "end": 909
                                },
                                "extendsType": {
                                    "kind": 163,
                                    "value": 1,
                                    "rawValue": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 917,
                                    "end": 919
                                },
                                "trueType": {
                                    "kind": 163,
                                    "value": 2,
                                    "rawValue": "2",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 921,
                                    "end": 923
                                },
                                "falseType": {
                                    "kind": 163,
                                    "value": 3,
                                    "rawValue": "3",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 925,
                                    "end": 927
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 908,
                                "end": 927
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 907,
                            "end": 928
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 905,
                        "end": 929
                    },
                    "extendsType": {
                        "kind": 163,
                        "value": 4,
                        "rawValue": "4",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 937,
                        "end": 939
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 941,
                        "end": 943
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 945,
                        "end": 947
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 905,
                    "end": 947
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 891,
                "end": 948
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type07",
                    "rawText": "Type07",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 953,
                    "end": 960
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 177,
                            "type": {
                                "kind": 177,
                                "type": {
                                    "kind": 57,
                                    "checkType": {
                                        "kind": 163,
                                        "value": 0,
                                        "rawValue": "0",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 966,
                                        "end": 967
                                    },
                                    "extendsType": {
                                        "kind": 163,
                                        "value": 1,
                                        "rawValue": "1",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 975,
                                        "end": 977
                                    },
                                    "trueType": {
                                        "kind": 163,
                                        "value": 2,
                                        "rawValue": "2",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 979,
                                        "end": 981
                                    },
                                    "falseType": {
                                        "kind": 163,
                                        "value": 3,
                                        "rawValue": "3",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 983,
                                        "end": 985
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 966,
                                    "end": 985
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 965,
                                "end": 986
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 964,
                            "end": 987
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 962,
                        "end": 988
                    },
                    "extendsType": {
                        "kind": 163,
                        "value": 4,
                        "rawValue": "4",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 996,
                        "end": 998
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1000,
                        "end": 1002
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1004,
                        "end": 1006
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 962,
                    "end": 1006
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 948,
                "end": 1007
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Type08",
                    "rawText": "Type08",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1012,
                    "end": 1019
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 177,
                            "type": {
                                "kind": 177,
                                "type": {
                                    "kind": 177,
                                    "type": {
                                        "kind": 57,
                                        "checkType": {
                                            "kind": 163,
                                            "value": 0,
                                            "rawValue": "0",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 1026,
                                            "end": 1027
                                        },
                                        "extendsType": {
                                            "kind": 163,
                                            "value": 1,
                                            "rawValue": "1",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 1035,
                                            "end": 1037
                                        },
                                        "trueType": {
                                            "kind": 163,
                                            "value": 2,
                                            "rawValue": "2",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 1039,
                                            "end": 1041
                                        },
                                        "falseType": {
                                            "kind": 163,
                                            "value": 3,
                                            "rawValue": "3",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 1043,
                                            "end": 1045
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 1026,
                                        "end": 1045
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1025,
                                    "end": 1046
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1024,
                                "end": 1047
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1023,
                            "end": 1048
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1021,
                        "end": 1049
                    },
                    "extendsType": {
                        "kind": 163,
                        "value": 4,
                        "rawValue": "4",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1057,
                        "end": 1059
                    },
                    "trueType": {
                        "kind": 163,
                        "value": 5,
                        "rawValue": "5",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1061,
                        "end": 1063
                    },
                    "falseType": {
                        "kind": 163,
                        "value": 6,
                        "rawValue": "6",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1065,
                        "end": 1067
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1021,
                    "end": 1067
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1007,
                "end": 1068
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "T1",
                    "rawText": "T1",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1074,
                    "end": 1077
                },
                "type": {
                    "kind": 95,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1081,
                        "end": 1081
                    },
                    "returnType": {
                        "kind": 57,
                        "checkType": {
                            "kind": 4194550,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1085,
                            "end": 1090
                        },
                        "extendsType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1098,
                                "end": 1100
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1098,
                            "end": 1102
                        },
                        "trueType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1102,
                                "end": 1104
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1102,
                            "end": 1106
                        },
                        "falseType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1106,
                                "end": 1108
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1106,
                            "end": 1109
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1085,
                        "end": 1108
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1079,
                    "end": 1108
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1068,
                "end": 1109
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "T1a",
                    "rawText": "T1a",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1114,
                    "end": 1118
                },
                "type": {
                    "kind": 95,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1122,
                        "end": 1122
                    },
                    "returnType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 4194550,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1128,
                                "end": 1132
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1140,
                                    "end": 1142
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1140,
                                "end": 1144
                            },
                            "trueType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1144,
                                    "end": 1146
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1144,
                                "end": 1148
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "V",
                                    "rawText": "V",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1148,
                                    "end": 1150
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1148,
                                "end": 1151
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1128,
                            "end": 1150
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1126,
                        "end": 1151
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1120,
                    "end": 1151
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1109,
                "end": 1152
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "T1b",
                    "rawText": "T1b",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1157,
                    "end": 1161
                },
                "type": {
                    "kind": 95,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1165,
                        "end": 1165
                    },
                    "returnType": {
                        "kind": 57,
                        "checkType": {
                            "kind": 177,
                            "type": {
                                "kind": 4194550,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1171,
                                "end": 1175
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1169,
                            "end": 1176
                        },
                        "extendsType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1184,
                                "end": 1186
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1184,
                            "end": 1188
                        },
                        "trueType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1188,
                                "end": 1190
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1188,
                            "end": 1192
                        },
                        "falseType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1192,
                                "end": 1194
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1192,
                            "end": 1195
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1169,
                        "end": 1194
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1163,
                    "end": 1194
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1152,
                "end": 1195
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "T2",
                    "rawText": "T2",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1200,
                    "end": 1203
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 95,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1208,
                                "end": 1208
                            },
                            "returnType": {
                                "kind": 4194550,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1212,
                                "end": 1217
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1207,
                            "end": 1217
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1205,
                        "end": 1218
                    },
                    "extendsType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1226,
                            "end": 1228
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1226,
                        "end": 1230
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1230,
                            "end": 1232
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1230,
                        "end": 1234
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1234,
                            "end": 1236
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1234,
                        "end": 1237
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1205,
                    "end": 1236
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1195,
                "end": 1237
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "U1",
                    "rawText": "U1",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1243,
                    "end": 1246
                },
                "type": {
                    "kind": 59,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1254,
                        "end": 1254
                    },
                    "returnType": {
                        "kind": 57,
                        "checkType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "X",
                                "rawText": "X",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1258,
                                "end": 1260
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1258,
                            "end": 1268
                        },
                        "extendsType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1268,
                                "end": 1270
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1268,
                            "end": 1272
                        },
                        "trueType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1272,
                                "end": 1274
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1272,
                            "end": 1276
                        },
                        "falseType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1276,
                                "end": 1278
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1276,
                            "end": 1279
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1258,
                        "end": 1278
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1248,
                    "end": 1278
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1237,
                "end": 1279
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "U1a",
                    "rawText": "U1a",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1284,
                    "end": 1288
                },
                "type": {
                    "kind": 59,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1296,
                        "end": 1296
                    },
                    "returnType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1302,
                                    "end": 1303
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1302,
                                "end": 1311
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1311,
                                    "end": 1313
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1311,
                                "end": 1315
                            },
                            "trueType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1315,
                                    "end": 1317
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1315,
                                "end": 1319
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "V",
                                    "rawText": "V",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1319,
                                    "end": 1321
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1319,
                                "end": 1322
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1302,
                            "end": 1321
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1300,
                        "end": 1322
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1290,
                    "end": 1322
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1279,
                "end": 1323
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "U1b",
                    "rawText": "U1b",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1328,
                    "end": 1332
                },
                "type": {
                    "kind": 59,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1340,
                        "end": 1340
                    },
                    "returnType": {
                        "kind": 57,
                        "checkType": {
                            "kind": 177,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1346,
                                    "end": 1347
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1346,
                                "end": 1348
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1344,
                            "end": 1348
                        },
                        "extendsType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1356,
                                "end": 1358
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1356,
                            "end": 1360
                        },
                        "trueType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1360,
                                "end": 1362
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1360,
                            "end": 1364
                        },
                        "falseType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1364,
                                "end": 1366
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1364,
                            "end": 1367
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1344,
                        "end": 1366
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1334,
                    "end": 1366
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1323,
                "end": 1367
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "U2",
                    "rawText": "U2",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1372,
                    "end": 1375
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 59,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1384,
                                "end": 1384
                            },
                            "returnType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1388,
                                    "end": 1390
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 1388,
                                "end": 1391
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 1379,
                            "end": 1390
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1377,
                        "end": 1391
                    },
                    "extendsType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1399,
                            "end": 1401
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1399,
                        "end": 1403
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1403,
                            "end": 1405
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1403,
                        "end": 1407
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1407,
                            "end": 1409
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 1407,
                        "end": 1410
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 1377,
                    "end": 1409
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 1367,
                "end": 1410
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 1410
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
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

type DeepReadonly<T> = T extends any[] ? DeepReadonlyArray<T[number]> : T extends object ? DeepReadonlyObject<T> : T;

type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>>  {
}

type DeepReadonlyObject<T> = {
    readonly [P in NonFunctionPropertyNames<T>]: DeepReadonly<T[P]>;
};

type TypeName<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends undefined ? "undefined" : T extends Function ? "function" : "object";

type Type01 = 0 extends (1 extends 2 ? 3 : 4) ? 5 : 6;

type Type02 = 0 extends ((1 extends 2 ? 3 : 4)) ? 5 : 6;

type Type03 = 0 extends (((1 extends 2 ? 3 : 4))) ? 5 : 6;

type Type04 = 0 extends ((((1 extends 2 ? 3 : 4)))) ? 5 : 6;

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

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

