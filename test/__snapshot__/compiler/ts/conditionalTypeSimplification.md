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
    "kind": 2243,
    "source": "interface AbstractSchema<S, V> {\n  m1<T> (v: T): SchemaType<S, Exclude<V, T>>;\n  m2<T> (v: T): SchemaType<S, T>;\n}\n\ntype SchemaType<S, V> = S extends object ? AnySchema<V> : never;\ninterface AnySchema<V> extends AnySchemaType<AnySchema<undefined>, V> { }\ninterface AnySchemaType<S extends AbstractSchema<any, any>, V> extends AbstractSchema<S, V> { }",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "AbstractSchema",
                "rawText": "AbstractSchema",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 24
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "S",
                            "rawText": "S",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 26
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 25,
                        "end": 26
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 29
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 27,
                        "end": 29
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 25,
                "end": 29
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "m1",
                            "rawText": "m1",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 37
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": {
                            "kind": 134226153,
                            "typeParameterList": [
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 38,
                                    "end": 39
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 39
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "v",
                                        "rawText": "v",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 42,
                                        "end": 43
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 44,
                                        "end": 47
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 42,
                                    "end": 46
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 42,
                            "end": 46
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "SchemaType",
                                "rawText": "SchemaType",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 59
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "S",
                                            "rawText": "S",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 60,
                                            "end": 61
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 60,
                                        "end": 62
                                    },
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Exclude",
                                            "rawText": "Exclude",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 62,
                                            "end": 70
                                        },
                                        "typeArguments": {
                                            "kind": 8419,
                                            "typeArgumentsList": [
                                                {
                                                    "kind": 134226156,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "V",
                                                        "rawText": "V",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 71,
                                                        "end": 72
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 71,
                                                    "end": 73
                                                },
                                                {
                                                    "kind": 134226156,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 73,
                                                        "end": 75
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 73,
                                                    "end": 76
                                                }
                                            ],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 71,
                                            "end": 75
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 62,
                                        "end": 77
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 76
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 48,
                            "end": 78
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 32,
                        "end": 78
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "m2",
                            "rawText": "m2",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 78,
                            "end": 83
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": {
                            "kind": 134226153,
                            "typeParameterList": [
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 84,
                                    "end": 85
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 84,
                            "end": 85
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "v",
                                        "rawText": "v",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 88,
                                        "end": 89
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 90,
                                            "end": 92
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 90,
                                        "end": 93
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 88,
                                    "end": 92
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 88,
                            "end": 92
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "SchemaType",
                                "rawText": "SchemaType",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 105
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "S",
                                            "rawText": "S",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 106,
                                            "end": 107
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 106,
                                        "end": 108
                                    },
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 108,
                                            "end": 110
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 108,
                                        "end": 111
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 106,
                                "end": 110
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 94,
                            "end": 112
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 78,
                        "end": 112
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 32,
                "end": 112
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 114
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "SchemaType",
                "rawText": "SchemaType",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 120,
                "end": 131
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "S",
                        "rawText": "S",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 141
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 139,
                    "end": 149
                },
                "extendsType": {
                    "kind": 4202663,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 149,
                    "end": 156
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "AnySchema",
                        "rawText": "AnySchema",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 158,
                        "end": 168
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "V",
                                    "rawText": "V",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 169,
                                    "end": 170
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 169,
                                "end": 171
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 169,
                        "end": 170
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 158,
                    "end": 173
                },
                "falseType": {
                    "kind": 4202651,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 173,
                    "end": 179
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 139,
                "end": 179
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "S",
                            "rawText": "S",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 133
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 132,
                        "end": 133
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 134,
                            "end": 136
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 134,
                        "end": 136
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 132,
                "end": 136
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 114,
            "end": 180
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "AnySchema",
                "rawText": "AnySchema",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 190,
                "end": 200
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 201,
                            "end": 202
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 201,
                        "end": 202
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 201,
                "end": 202
            },
            "heritageClauses": {
                "kind": 8294,
                "clauses": [
                    {
                        "kind": 8293,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "AnySchemaType",
                                "rawText": "AnySchemaType",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 211,
                                "end": 225
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "AnySchema",
                                            "rawText": "AnySchema",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 226,
                                            "end": 235
                                        },
                                        "typeArguments": {
                                            "kind": 8419,
                                            "typeArgumentsList": [
                                                {
                                                    "kind": 4202735,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 236,
                                                    "end": 245
                                                }
                                            ],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 236,
                                            "end": 245
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 226,
                                        "end": 247
                                    },
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "V",
                                            "rawText": "V",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 247,
                                            "end": 249
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 247,
                                        "end": 250
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 226,
                                "end": 249
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 211,
                            "end": 252
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 211,
                        "end": 250
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 211,
                "end": 250
            },
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 252,
                "end": 252
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 180,
            "end": 254
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "AnySchemaType",
                "rawText": "AnySchemaType",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 264,
                "end": 278
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "S",
                            "rawText": "S",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 279,
                            "end": 280
                        },
                        "constraint": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "AbstractSchema",
                                "rawText": "AbstractSchema",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 288,
                                "end": 303
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 304,
                                        "end": 307
                                    },
                                    {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 308,
                                        "end": 312
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 304,
                                "end": 312
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 288,
                            "end": 314
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 279,
                        "end": 313
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "V",
                            "rawText": "V",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 314,
                            "end": 316
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 314,
                        "end": 316
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 279,
                "end": 316
            },
            "heritageClauses": {
                "kind": 8294,
                "clauses": [
                    {
                        "kind": 8293,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "AbstractSchema",
                                "rawText": "AbstractSchema",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 325,
                                "end": 340
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "S",
                                            "rawText": "S",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 341,
                                            "end": 342
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 341,
                                        "end": 343
                                    },
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "V",
                                            "rawText": "V",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 343,
                                            "end": 345
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 343,
                                        "end": 346
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 341,
                                "end": 345
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 325,
                            "end": 348
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 325,
                        "end": 346
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 325,
                "end": 346
            },
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 348,
                "end": 348
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 254,
            "end": 350
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
    "end": 350
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

