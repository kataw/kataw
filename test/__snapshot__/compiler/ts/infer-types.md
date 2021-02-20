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
    "kind": 149,
    "source": "type TestReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;\n\ntype Unpacked<T> =\n  T extends (infer U)[] ? U :\n  T extends (...args: any[]) => infer U ? U :\n  T extends Promise<infer U> ? U :\n  T;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "TestReturnType",
                    "rawText": "TestReturnType",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 19
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
                            "start": 56,
                            "end": 58
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 56,
                        "end": 66
                    },
                    "extendsType": {
                        "kind": 95,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 175,
                            "parameterList": [
                                {
                                    "kind": 174,
                                    "ellipsis": true,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "args",
                                        "rawText": "args",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 71,
                                        "end": 75
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 7,
                                        "elementType": {
                                            "kind": 4194306,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 76,
                                            "end": 80
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 76,
                                        "end": 83
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 4097,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 68,
                                    "end": 82
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 68,
                            "end": 82
                        },
                        "returnType": {
                            "kind": 118,
                            "typeParameter": {
                                "kind": 232,
                                "name": {
                                    "kind": 196712,
                                    "text": "R",
                                    "rawText": "R",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 92,
                                    "end": 94
                                },
                                "constraint": null,
                                "defaultType": null,
                                "expression": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 92,
                                "end": 94
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 86,
                            "end": 94
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 66,
                        "end": 94
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "R",
                            "rawText": "R",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 96,
                            "end": 98
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 96,
                        "end": 100
                    },
                    "falseType": {
                        "kind": 4194306,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 100,
                        "end": 104
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 56,
                    "end": 104
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
                                "start": 20,
                                "end": 21
                            },
                            "constraint": {
                                "kind": 95,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 175,
                                    "parameterList": [
                                        {
                                            "kind": 174,
                                            "ellipsis": true,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "args",
                                                "rawText": "args",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 34,
                                                "end": 38
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 7,
                                                "elementType": {
                                                    "kind": 4194306,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 39,
                                                    "end": 43
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 39,
                                                "end": 46
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 4097,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 31,
                                            "end": 45
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 31,
                                    "end": 45
                                },
                                "returnType": {
                                    "kind": 4194306,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 49,
                                    "end": 53
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 29,
                                "end": 53
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 20,
                            "end": 53
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 20,
                    "end": 53
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 105
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Unpacked",
                    "rawText": "Unpacked",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 111,
                    "end": 120
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
                            "start": 125,
                            "end": 129
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 125,
                        "end": 137
                    },
                    "extendsType": {
                        "kind": 7,
                        "elementType": {
                            "kind": 177,
                            "type": {
                                "kind": 118,
                                "typeParameter": {
                                    "kind": 232,
                                    "name": {
                                        "kind": 196712,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 144,
                                        "end": 146
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 144,
                                    "end": 146
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 139,
                                "end": 146
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 137,
                            "end": 147
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 137,
                        "end": 151
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
                            "start": 151,
                            "end": 153
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 151,
                        "end": 155
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
                                "start": 155,
                                "end": 159
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 155,
                            "end": 167
                        },
                        "extendsType": {
                            "kind": 95,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "args",
                                            "rawText": "args",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 172,
                                            "end": 176
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 7,
                                            "elementType": {
                                                "kind": 4194306,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 177,
                                                "end": 181
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 177,
                                            "end": 184
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 169,
                                        "end": 183
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 169,
                                "end": 183
                            },
                            "returnType": {
                                "kind": 118,
                                "typeParameter": {
                                    "kind": 232,
                                    "name": {
                                        "kind": 196712,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 193,
                                        "end": 195
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 193,
                                    "end": 195
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 187,
                                "end": 195
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 167,
                            "end": 195
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
                                "start": 197,
                                "end": 199
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 197,
                            "end": 201
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
                                    "start": 201,
                                    "end": 205
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 201,
                                "end": 213
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Promise",
                                    "rawText": "Promise",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 213,
                                    "end": 221
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 118,
                                            "typeParameter": {
                                                "kind": 232,
                                                "name": {
                                                    "kind": 196712,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 227,
                                                    "end": 229
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 227,
                                                "end": 229
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 222,
                                            "end": 229
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 222,
                                    "end": 229
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 213,
                                "end": 232
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
                                    "start": 232,
                                    "end": 234
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 232,
                                "end": 236
                            },
                            "falseType": {
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
                                    "start": 236,
                                    "end": 240
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 236,
                                "end": 241
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 201,
                            "end": 240
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 155,
                        "end": 240
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 125,
                    "end": 240
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
                                "start": 121,
                                "end": 122
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 121,
                            "end": 122
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 121,
                    "end": 122
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 105,
                "end": 241
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 241
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
    "end": 241
}
```

### Printed


```javascript

type TestReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

type Unpacked<T> = T extends (infer U)[] ? U : T extends (...args: any[]) => infer U ? U : T extends Promise<infer U> ? U : T;

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

