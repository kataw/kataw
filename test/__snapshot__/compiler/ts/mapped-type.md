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
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Mapped",
                "rawText": "Mapped",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            "type": {
                "kind": 8335,
                "typeParameter": {
                    "kind": 134226152,
                    "name": {
                        "kind": 196711,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 32
                    },
                    "constraint": {
                        "kind": 8423,
                        "operator": "keyof",
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 43
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 41,
                            "end": 45
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 35,
                        "end": 43
                    },
                    "defaultType": null,
                    "expression": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 31,
                    "end": 43
                },
                "nameType": null,
                "isReadOnly": true,
                "plus": false,
                "minus": false,
                "isOptional": false,
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 48
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 46,
                        "end": 49
                    },
                    "indexType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 50
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 49,
                        "end": 51
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 46,
                    "end": 53
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 18,
                "end": 53
            },
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
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 15
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 14,
                "end": 15
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 53
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Mapped",
                "rawText": "Mapped",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 61,
                "end": 68
            },
            "type": {
                "kind": 8335,
                "typeParameter": {
                    "kind": 134226152,
                    "name": {
                        "kind": 196711,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 89,
                        "end": 90
                    },
                    "constraint": {
                        "kind": 8423,
                        "operator": "keyof",
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 101
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 99,
                            "end": 103
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 93,
                        "end": 101
                    },
                    "defaultType": null,
                    "expression": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 89,
                    "end": 101
                },
                "nameType": null,
                "isReadOnly": true,
                "plus": true,
                "minus": false,
                "isOptional": false,
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 106
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 104,
                        "end": 107
                    },
                    "indexType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 108
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 107,
                        "end": 109
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 104,
                    "end": 111
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 73,
                "end": 111
            },
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
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 70
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 69,
                        "end": 70
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 69,
                "end": 70
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 53,
            "end": 111
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Mapped",
                "rawText": "Mapped",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 119,
                "end": 126
            },
            "type": {
                "kind": 8335,
                "typeParameter": {
                    "kind": 134226152,
                    "name": {
                        "kind": 196711,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 135,
                        "end": 136
                    },
                    "constraint": {
                        "kind": 8423,
                        "operator": "keyof",
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 145,
                                "end": 147
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 145,
                            "end": 149
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 139,
                        "end": 147
                    },
                    "defaultType": null,
                    "expression": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 135,
                    "end": 147
                },
                "nameType": null,
                "isReadOnly": false,
                "plus": false,
                "minus": false,
                "isOptional": true,
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 151,
                            "end": 153
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 151,
                        "end": 154
                    },
                    "indexType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 154,
                            "end": 155
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 154,
                        "end": 156
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 151,
                    "end": 160
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 131,
                "end": 160
            },
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
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 127,
                            "end": 128
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 127,
                        "end": 128
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 127,
                "end": 128
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 111,
            "end": 160
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
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

