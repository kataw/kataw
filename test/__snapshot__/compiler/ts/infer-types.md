# Kataw parser test case

## Input

`````js
type TestReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type TestReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;\n\ntype Unpacked<T> =\n  T extends (infer U)[] ? U :\n  T extends (...args: any[]) => infer U ? U :\n  T extends Promise<infer U> ? U :\n  T;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "TestReturnType",
                "rawText": "TestReturnType",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 19
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "T",
                        "rawText": "T",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 58
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 56,
                    "end": 66
                },
                "extendsType": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134226095,
                        "parameterList": [
                            {
                                "kind": 134226094,
                                "ellipsis": true,
                                "binding": {
                                    "kind": 131102,
                                    "text": "args",
                                    "rawText": "args",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 71,
                                    "end": 75
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 76,
                                        "end": 80
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 76,
                                    "end": 83
                                },
                                "initializer": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 4097,
                                "start": 68,
                                "end": 82
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 68,
                        "end": 82
                    },
                    "returnType": {
                        "kind": 8310,
                        "typeParameter": {
                            "kind": 134226152,
                            "name": {
                                "kind": 196712,
                                "text": "R",
                                "rawText": "R",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 94
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 92,
                            "end": 94
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 86,
                        "end": 94
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 66,
                    "end": 94
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "R",
                        "rawText": "R",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 96,
                        "end": 98
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 96,
                    "end": 100
                },
                "falseType": {
                    "kind": 4202498,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 100,
                    "end": 104
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 56,
                "end": 104
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
                            "start": 20,
                            "end": 21
                        },
                        "constraint": {
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [
                                    {
                                        "kind": 134226094,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "args",
                                            "rawText": "args",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 34,
                                            "end": 38
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 39,
                                            "end": 46
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 31,
                                        "end": 45
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 31,
                                "end": 45
                            },
                            "returnType": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 49,
                                "end": 53
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 29,
                            "end": 53
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 20,
                        "end": 53
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 20,
                "end": 53
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 105
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Unpacked",
                "rawText": "Unpacked",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 111,
                "end": 120
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "T",
                        "rawText": "T",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 125,
                        "end": 129
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 125,
                    "end": 137
                },
                "extendsType": {
                    "kind": 8199,
                    "elementType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8310,
                            "typeParameter": {
                                "kind": 134226152,
                                "name": {
                                    "kind": 196712,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 144,
                                    "end": 146
                                },
                                "constraint": null,
                                "defaultType": null,
                                "expression": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 144,
                                "end": 146
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 139,
                            "end": 146
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 137,
                        "end": 147
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 137,
                    "end": 151
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "U",
                        "rawText": "U",
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
                    "end": 155
                },
                "falseType": {
                    "kind": 8249,
                    "checkType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 159
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 155,
                        "end": 167
                    },
                    "extendsType": {
                        "kind": 8287,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": true,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "args",
                                        "rawText": "args",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 172,
                                        "end": 176
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 177,
                                            "end": 181
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 177,
                                        "end": 184
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4097,
                                    "start": 169,
                                    "end": 183
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 169,
                            "end": 183
                        },
                        "returnType": {
                            "kind": 8310,
                            "typeParameter": {
                                "kind": 134226152,
                                "name": {
                                    "kind": 196712,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 193,
                                    "end": 195
                                },
                                "constraint": null,
                                "defaultType": null,
                                "expression": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 193,
                                "end": 195
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 187,
                            "end": 195
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 167,
                        "end": 195
                    },
                    "trueType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 197,
                            "end": 199
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 197,
                        "end": 201
                    },
                    "falseType": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 201,
                                "end": 205
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 201,
                            "end": 213
                        },
                        "extendsType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Promise",
                                "rawText": "Promise",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 221
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8310,
                                        "typeParameter": {
                                            "kind": 134226152,
                                            "name": {
                                                "kind": 196712,
                                                "text": "U",
                                                "rawText": "U",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 227,
                                                "end": 229
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 227,
                                            "end": 229
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 222,
                                        "end": 229
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 222,
                                "end": 229
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 213,
                            "end": 232
                        },
                        "trueType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 232,
                                "end": 234
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 232,
                            "end": 236
                        },
                        "falseType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 236,
                                "end": 240
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 236,
                            "end": 241
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 201,
                        "end": 240
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 155,
                    "end": 240
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 125,
                "end": 240
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
                            "start": 121,
                            "end": 122
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 121,
                        "end": 122
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 121,
                "end": 122
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 105,
            "end": 241
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
    "end": 241
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

