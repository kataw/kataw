# Kataw parser test case

## Input

`````js
declare var Array: {
  new (arrayLength?: number): any[];
  new <T>(arrayLength: number): T[];
  new <T>(...items: T[]): T[];
  (arrayLength?: number): any[];
  <T>(arrayLength: number): T[];
  <T>(...items: T[]): T[];
  isArray(arg: any): boolean;
  prototype: Array<any>;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare var Array: {\n  new (arrayLength?: number): any[];\n  new <T>(arrayLength: number): T[];\n  new <T>(...items: T[]): T[];\n  (arrayLength?: number): any[];\n  <T>(arrayLength: number): T[];\n  <T>(...items: T[]): T[];\n  isArray(arg: any): boolean;\n  prototype: Array<any>;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 17
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8250,
                                        "isReadOnly": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "arrayLength",
                                                        "rawText": "arrayLength",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 28,
                                                        "end": 39
                                                    },
                                                    "isOptional": true,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 41,
                                                        "end": 48
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 28,
                                                    "end": 48
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 28,
                                            "end": 48
                                        },
                                        "returnType": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 50,
                                                "end": 54
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 50,
                                            "end": 57
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 26,
                                        "end": 57
                                    },
                                    {
                                        "kind": 8250,
                                        "isReadOnly": false,
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
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 65,
                                                        "end": 66
                                                    },
                                                    "constraint": null,
                                                    "defaultType": null,
                                                    "expression": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 65,
                                                    "end": 66
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 65,
                                            "end": 66
                                        },
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "arrayLength",
                                                        "rawText": "arrayLength",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 68,
                                                        "end": 79
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 80,
                                                        "end": 87
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 68,
                                                    "end": 87
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 68,
                                            "end": 87
                                        },
                                        "returnType": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 134226156,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 89,
                                                    "end": 91
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 89,
                                                "end": 92
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 89,
                                            "end": 94
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 63,
                                        "end": 94
                                    },
                                    {
                                        "kind": 8250,
                                        "isReadOnly": false,
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
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 102,
                                                        "end": 103
                                                    },
                                                    "constraint": null,
                                                    "defaultType": null,
                                                    "expression": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 102,
                                                    "end": 103
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 102,
                                            "end": 103
                                        },
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": true,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "items",
                                                        "rawText": "items",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 108,
                                                        "end": 113
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 8199,
                                                        "elementType": {
                                                            "kind": 134226156,
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
                                                        "start": 114,
                                                        "end": 119
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 4097,
                                                    "start": 105,
                                                    "end": 118
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 105,
                                            "end": 118
                                        },
                                        "returnType": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 134226156,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 120,
                                                    "end": 122
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 120,
                                                "end": 123
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 120,
                                            "end": 125
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 100,
                                        "end": 125
                                    },
                                    {
                                        "kind": 8236,
                                        "isReadOnly": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "arrayLength",
                                                        "rawText": "arrayLength",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 129,
                                                        "end": 140
                                                    },
                                                    "isOptional": true,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 142,
                                                        "end": 149
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 129,
                                                    "end": 149
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 129,
                                            "end": 149
                                        },
                                        "returnType": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 151,
                                                "end": 155
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 151,
                                            "end": 158
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 125,
                                        "end": 158
                                    },
                                    {
                                        "kind": 8236,
                                        "isReadOnly": false,
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
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 162,
                                                        "end": 163
                                                    },
                                                    "constraint": null,
                                                    "defaultType": null,
                                                    "expression": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 162,
                                                    "end": 163
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 162,
                                            "end": 163
                                        },
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "arrayLength",
                                                        "rawText": "arrayLength",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 165,
                                                        "end": 176
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
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
                                                    "transformFlags": 1,
                                                    "start": 165,
                                                    "end": 184
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 165,
                                            "end": 184
                                        },
                                        "returnType": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 134226156,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 186,
                                                    "end": 188
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 186,
                                                "end": 189
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 186,
                                            "end": 191
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 158,
                                        "end": 191
                                    },
                                    {
                                        "kind": 8236,
                                        "isReadOnly": false,
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
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 195,
                                                        "end": 196
                                                    },
                                                    "constraint": null,
                                                    "defaultType": null,
                                                    "expression": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 195,
                                                    "end": 196
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 195,
                                            "end": 196
                                        },
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": true,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "items",
                                                        "rawText": "items",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 201,
                                                        "end": 206
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 8199,
                                                        "elementType": {
                                                            "kind": 134226156,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 207,
                                                                "end": 209
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 207,
                                                            "end": 210
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 207,
                                                        "end": 212
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 4097,
                                                    "start": 198,
                                                    "end": 211
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 198,
                                            "end": 211
                                        },
                                        "returnType": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 134226156,
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
                                            "start": 213,
                                            "end": 218
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 191,
                                        "end": 218
                                    },
                                    {
                                        "kind": 8339,
                                        "name": {
                                            "kind": 196711,
                                            "text": "isArray",
                                            "rawText": "isArray",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 218,
                                            "end": 228
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "arg",
                                                        "rawText": "arg",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 229,
                                                        "end": 232
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202498,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 233,
                                                        "end": 237
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 229,
                                                    "end": 237
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 229,
                                            "end": 237
                                        },
                                        "returnType": {
                                            "kind": 4268070,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 239,
                                            "end": 247
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 218,
                                        "end": 248
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "prototype",
                                            "rawText": "prototype",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 248,
                                            "end": 260
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Array",
                                                "rawText": "Array",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 261,
                                                "end": 267
                                            },
                                            "typeArguments": {
                                                "kind": 8419,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 4202498,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 268,
                                                        "end": 271
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 268,
                                                "end": 271
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 261,
                                            "end": 273
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 248,
                                        "end": 273
                                    }
                                ],
                                "multiline": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 275
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 18,
                            "end": 275
                        },
                        "initializer": null,
                        "flags": 11,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 275
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 275
            },
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 0,
            "start": 7,
            "end": 275
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
    "end": 275
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

