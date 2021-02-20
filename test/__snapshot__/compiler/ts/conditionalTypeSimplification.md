# Kataw parser test case

## Input

`````js
interface AbstractSchema<S, V> {
  m1<T> (v: T): SchemaType<S, Exclude<V, T>>;
  m2<T> (v: T): SchemaType<S, T>;
}

type SchemaType<S, V> = S extends object ? AnySchema<V> : never;
interface AnySchema<V> extends AnySchemaType<AnySchema<undefined>, V> { }
interface AnySchemaType<S extends AbstractSchema<any, any>, V> extends AbstractSchema<S, V> { }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "interface AbstractSchema<S, V> {\n  m1<T> (v: T): SchemaType<S, Exclude<V, T>>;\n  m2<T> (v: T): SchemaType<S, T>;\n}\n\ntype SchemaType<S, V> = S extends object ? AnySchema<V> : never;\ninterface AnySchema<V> extends AnySchemaType<AnySchema<undefined>, V> { }\ninterface AnySchemaType<S extends AbstractSchema<any, any>, V> extends AbstractSchema<S, V> { }",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "AbstractSchema",
                    "rawText": "AbstractSchema",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 24
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "S",
                                "rawText": "S",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 25,
                                "end": 26
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 25,
                            "end": 26
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 27,
                                "end": 29
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 27,
                            "end": 29
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 25,
                    "end": 29
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 147,
                            "name": {
                                "kind": 196711,
                                "text": "m1",
                                "rawText": "m1",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 32,
                                "end": 37
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
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
                                            "start": 38,
                                            "end": 39
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 38,
                                        "end": 39
                                    }
                                ],
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 38,
                                "end": 39
                            },
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "isOptional": false,
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
                                                "start": 44,
                                                "end": 46
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 44,
                                            "end": 47
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 42,
                                        "end": 46
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 42,
                                "end": 46
                            },
                            "returnType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "SchemaType",
                                    "rawText": "SchemaType",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 48,
                                    "end": 59
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 60,
                                                "end": 61
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 60,
                                            "end": 62
                                        },
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Exclude",
                                                "rawText": "Exclude",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 62,
                                                "end": 70
                                            },
                                            "typeArguments": {
                                                "kind": 227,
                                                "typeArgumentsList": [
                                                    {
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
                                                            "start": 71,
                                                            "end": 72
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 71,
                                                        "end": 73
                                                    },
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
                                                            "start": 73,
                                                            "end": 75
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 73,
                                                        "end": 76
                                                    }
                                                ],
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 71,
                                                "end": 75
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 62,
                                            "end": 77
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 60,
                                    "end": 76
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 48,
                                "end": 78
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 32,
                            "end": 78
                        },
                        {
                            "kind": 147,
                            "name": {
                                "kind": 196711,
                                "text": "m2",
                                "rawText": "m2",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 78,
                                "end": 83
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
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
                                            "start": 84,
                                            "end": 85
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 84,
                                        "end": 85
                                    }
                                ],
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 84,
                                "end": 85
                            },
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 88,
                                            "end": 89
                                        },
                                        "isOptional": false,
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
                                                "start": 90,
                                                "end": 92
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 90,
                                            "end": 93
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 88,
                                        "end": 92
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 88,
                                "end": 92
                            },
                            "returnType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "SchemaType",
                                    "rawText": "SchemaType",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 94,
                                    "end": 105
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 106,
                                                "end": 107
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 106,
                                            "end": 108
                                        },
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
                                                "start": 108,
                                                "end": 110
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 108,
                                            "end": 111
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 106,
                                    "end": 110
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 94,
                                "end": 112
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 78,
                            "end": 112
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 32,
                    "end": 112
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 114
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "SchemaType",
                    "rawText": "SchemaType",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 120,
                    "end": 131
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "S",
                            "rawText": "S",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 139,
                            "end": 141
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 139,
                        "end": 149
                    },
                    "extendsType": {
                        "kind": 4194471,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 149,
                        "end": 156
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "AnySchema",
                            "rawText": "AnySchema",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 158,
                            "end": 168
                        },
                        "typeArguments": {
                            "kind": 227,
                            "typeArgumentsList": [
                                {
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
                                        "start": 169,
                                        "end": 170
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 169,
                                    "end": 171
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 169,
                            "end": 170
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 158,
                        "end": 173
                    },
                    "falseType": {
                        "kind": 4194459,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 173,
                        "end": 179
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 139,
                    "end": 179
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "S",
                                "rawText": "S",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 132,
                                "end": 133
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 132,
                            "end": 133
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 134,
                                "end": 136
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 134,
                            "end": 136
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 132,
                    "end": 136
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 114,
                "end": 180
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "AnySchema",
                    "rawText": "AnySchema",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 190,
                    "end": 200
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 201,
                                "end": 202
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 201,
                            "end": 202
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 201,
                    "end": 202
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
                                    "text": "AnySchemaType",
                                    "rawText": "AnySchemaType",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 211,
                                    "end": 225
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "AnySchema",
                                                "rawText": "AnySchema",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 226,
                                                "end": 235
                                            },
                                            "typeArguments": {
                                                "kind": 227,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 4194543,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 236,
                                                        "end": 245
                                                    }
                                                ],
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 236,
                                                "end": 245
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 226,
                                            "end": 247
                                        },
                                        {
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
                                                "start": 247,
                                                "end": 249
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 247,
                                            "end": 250
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 226,
                                    "end": 249
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 211,
                                "end": 252
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 211,
                            "end": 250
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 211,
                    "end": 250
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 252,
                    "end": 252
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 180,
                "end": 254
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "AnySchemaType",
                    "rawText": "AnySchemaType",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 264,
                    "end": 278
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "S",
                                "rawText": "S",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 279,
                                "end": 280
                            },
                            "constraint": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "AbstractSchema",
                                    "rawText": "AbstractSchema",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 288,
                                    "end": 303
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 4194306,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 304,
                                            "end": 307
                                        },
                                        {
                                            "kind": 4194306,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 308,
                                            "end": 312
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 304,
                                    "end": 312
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 288,
                                "end": 314
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 279,
                            "end": 313
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "V",
                                "rawText": "V",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 314,
                                "end": 316
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 314,
                            "end": 316
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 279,
                    "end": 316
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
                                    "text": "AbstractSchema",
                                    "rawText": "AbstractSchema",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 325,
                                    "end": 340
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 341,
                                                "end": 342
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 341,
                                            "end": 343
                                        },
                                        {
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
                                                "start": 343,
                                                "end": 345
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 343,
                                            "end": 346
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 341,
                                    "end": 345
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 325,
                                "end": 348
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 325,
                            "end": 346
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 325,
                    "end": 346
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 348,
                    "end": 348
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 254,
                "end": 350
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 350
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
    "end": 350
}
```

### Printed


```javascript

interface AbstractSchema<S, V> {
    m1<T>(v: T): SchemaType<S, Exclude<V, T>>;
    m2<T>(v: T): SchemaType<S, T>;
}

type SchemaType<S, V> = S extends object ? AnySchema<V> : never;

interface AnySchema<V> extends AnySchemaType<AnySchema<undefined>, V>  {
}

interface AnySchemaType<S extends AbstractSchema<any, any>, V> extends AbstractSchema<S, V>  {
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

