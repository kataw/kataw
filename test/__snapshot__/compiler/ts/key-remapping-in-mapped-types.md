# Kataw parser test case

## Input

`````js
type MappedTypeWithNewKeys<T> = {
  [K in keyof T as NewKeyType]: T[K]
};

type RemoveKindField<T> = {
  [K in keyof T as Exclude<K, "kind">]: T[K]
};

type PickByValueType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
};
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type MappedTypeWithNewKeys<T> = {\n  [K in keyof T as NewKeyType]: T[K]\n};\n\ntype RemoveKindField<T> = {\n  [K in keyof T as Exclude<K, \"kind\">]: T[K]\n};\n\ntype PickByValueType<T, U> = {\n  [K in keyof T as T[K] extends U ? K : never]: T[K]\n};",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "MappedTypeWithNewKeys",
                    "rawText": "MappedTypeWithNewKeys",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 26
                },
                "type": {
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
                            "start": 37,
                            "end": 38
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
                                    "start": 47,
                                    "end": 49
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 47,
                                "end": 52
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 41,
                            "end": 49
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 37,
                        "end": 49
                    },
                    "nameType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "NewKeyType",
                            "rawText": "NewKeyType",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 63
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 52,
                        "end": 64
                    },
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
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
                                "start": 65,
                                "end": 67
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 65,
                            "end": 68
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
                                "start": 68,
                                "end": 69
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 68,
                            "end": 70
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 65,
                        "end": 72
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 31,
                    "end": 72
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
                                "start": 27,
                                "end": 28
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 27,
                            "end": 28
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 27,
                    "end": 28
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 73
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "RemoveKindField",
                    "rawText": "RemoveKindField",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 95
                },
                "type": {
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
                            "start": 106,
                            "end": 107
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
                                    "start": 116,
                                    "end": 118
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 116,
                                "end": 121
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 110,
                            "end": 118
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 106,
                        "end": 118
                    },
                    "nameType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "Exclude",
                            "rawText": "Exclude",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 129
                        },
                        "typeArguments": {
                            "kind": 8419,
                            "typeArgumentsList": [
                                {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "K",
                                        "rawText": "K",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 130,
                                        "end": 131
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 130,
                                    "end": 132
                                },
                                {
                                    "kind": 8400,
                                    "text": "kind",
                                    "rawText": "kind",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 132,
                                    "end": 139
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 130,
                            "end": 139
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 121,
                        "end": 141
                    },
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
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
                                "start": 142,
                                "end": 144
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 142,
                            "end": 145
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
                                "start": 145,
                                "end": 146
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 145,
                            "end": 147
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 142,
                        "end": 149
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 100,
                    "end": 149
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
                                "start": 96,
                                "end": 97
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 96,
                            "end": 97
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 96,
                    "end": 97
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 73,
                "end": 150
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "PickByValueType",
                    "rawText": "PickByValueType",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 172
                },
                "type": {
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
                            "start": 186,
                            "end": 187
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
                                    "start": 196,
                                    "end": 198
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 196,
                                "end": 201
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 190,
                            "end": 198
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 186,
                        "end": 198
                    },
                    "nameType": {
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
                                    "start": 201,
                                    "end": 203
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 201,
                                "end": 204
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
                                    "start": 204,
                                    "end": 205
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 204,
                                "end": 206
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 201,
                            "end": 214
                        },
                        "extendsType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 214,
                                "end": 216
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 214,
                            "end": 218
                        },
                        "trueType": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 218,
                                "end": 220
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 218,
                            "end": 222
                        },
                        "falseType": {
                            "kind": 4202651,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 222,
                            "end": 228
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 201,
                        "end": 228
                    },
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
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
                                "start": 230,
                                "end": 232
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 230,
                            "end": 233
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
                                "start": 233,
                                "end": 234
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 233,
                            "end": 235
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 230,
                        "end": 237
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 180,
                    "end": 237
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
                                "start": 173,
                                "end": 174
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 173,
                            "end": 174
                        },
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 175,
                                "end": 177
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 175,
                            "end": 177
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 173,
                    "end": 177
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 150,
                "end": 238
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 238
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 238
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

