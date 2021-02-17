# Kataw parser test case

## Input

`````js
  type Mapped<T> = { readonly [K in keyof T ]: T[K] }

  type Mapped<T> = { + readonly  [K in keyof T ]: T[K] }

  type Mapped<T> = { [K in keyof T ]?: T[K]   }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "  type Mapped<T> = { readonly [K in keyof T ]: T[K] }\n\n  type Mapped<T> = { + readonly  [K in keyof T ]: T[K] }\n\n  type Mapped<T> = { [K in keyof T ]?: T[K]   }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Mapped",
                    "rawText": "Mapped",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 13
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 31,
                            "end": 32
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
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 41,
                                    "end": 43
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 41,
                                "end": 45
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 35,
                            "end": 43
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 31,
                        "end": 43
                    },
                    "nameType": null,
                    "isReadOnly": true,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 117,
                        "objectType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 46,
                                "end": 48
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 46,
                            "end": 49
                        },
                        "indexType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 49,
                                "end": 50
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 49,
                            "end": 51
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 46,
                        "end": 53
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 53
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
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 15
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 15
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 53
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Mapped",
                    "rawText": "Mapped",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 61,
                    "end": 68
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 89,
                            "end": 90
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
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 99,
                                    "end": 101
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 99,
                                "end": 103
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 93,
                            "end": 101
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 89,
                        "end": 101
                    },
                    "nameType": null,
                    "isReadOnly": true,
                    "plus": false,
                    "minus": true,
                    "isOptional": false,
                    "type": {
                        "kind": 117,
                        "objectType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 104,
                                "end": 106
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 104,
                            "end": 107
                        },
                        "indexType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 107,
                                "end": 108
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 107,
                            "end": 109
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 104,
                        "end": 111
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 73,
                    "end": 111
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
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 69,
                                "end": 70
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 69,
                            "end": 70
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 69,
                    "end": 70
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 53,
                "end": 111
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Mapped",
                    "rawText": "Mapped",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 119,
                    "end": 126
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 135,
                            "end": 136
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
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 145,
                                    "end": 147
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 145,
                                "end": 149
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 139,
                            "end": 147
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 135,
                        "end": 147
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": true,
                    "type": {
                        "kind": 117,
                        "objectType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 151,
                                "end": 153
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 151,
                            "end": 154
                        },
                        "indexType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 154,
                                "end": 155
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 154,
                            "end": 156
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 151,
                        "end": 160
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 131,
                    "end": 160
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
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 127,
                                "end": 128
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 127,
                            "end": 128
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 127,
                    "end": 128
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 111,
                "end": 160
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 160
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
    "end": 160
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

