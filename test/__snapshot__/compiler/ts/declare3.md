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
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 11,
                                "end": 17
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 230,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 58,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "arrayLength",
                                                            "rawText": "arrayLength",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 28,
                                                            "end": 39
                                                        },
                                                        "isOptional": true,
                                                        "type": {
                                                            "kind": 161,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 41,
                                                            "end": 48
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 28,
                                                        "end": 48
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 28,
                                                "end": 48
                                            },
                                            "returnType": {
                                                "kind": 7,
                                                "elementType": {
                                                    "kind": 4194306,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 50,
                                                    "end": 54
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 50,
                                                "end": 57
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 26,
                                            "end": 57
                                        },
                                        {
                                            "kind": 58,
                                            "isReadOnly": false,
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
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 65,
                                                            "end": 66
                                                        },
                                                        "constraint": null,
                                                        "defaultType": null,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 65,
                                                        "end": 66
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 65,
                                                "end": 66
                                            },
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "arrayLength",
                                                            "rawText": "arrayLength",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 68,
                                                            "end": 79
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 161,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 80,
                                                            "end": 87
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 68,
                                                        "end": 87
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 68,
                                                "end": 87
                                            },
                                            "returnType": {
                                                "kind": 7,
                                                "elementType": {
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
                                                        "start": 89,
                                                        "end": 91
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 89,
                                                    "end": 92
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 89,
                                                "end": 94
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 63,
                                            "end": 94
                                        },
                                        {
                                            "kind": 58,
                                            "isReadOnly": false,
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
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 102,
                                                            "end": 103
                                                        },
                                                        "constraint": null,
                                                        "defaultType": null,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 102,
                                                        "end": 103
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 102,
                                                "end": 103
                                            },
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": true,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "items",
                                                            "rawText": "items",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 108,
                                                            "end": 113
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 7,
                                                            "elementType": {
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
                                                                    "start": 114,
                                                                    "end": 116
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 114,
                                                                "end": 117
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 114,
                                                            "end": 119
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 4097,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 105,
                                                        "end": 118
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 105,
                                                "end": 118
                                            },
                                            "returnType": {
                                                "kind": 7,
                                                "elementType": {
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
                                                        "start": 120,
                                                        "end": 122
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 120,
                                                    "end": 123
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 120,
                                                "end": 125
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 100,
                                            "end": 125
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "arrayLength",
                                                            "rawText": "arrayLength",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 129,
                                                            "end": 140
                                                        },
                                                        "isOptional": true,
                                                        "type": {
                                                            "kind": 161,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 142,
                                                            "end": 149
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 129,
                                                        "end": 149
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 129,
                                                "end": 149
                                            },
                                            "returnType": {
                                                "kind": 7,
                                                "elementType": {
                                                    "kind": 4194306,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 151,
                                                    "end": 155
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 151,
                                                "end": 158
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 125,
                                            "end": 158
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
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
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 162,
                                                            "end": 163
                                                        },
                                                        "constraint": null,
                                                        "defaultType": null,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 162,
                                                        "end": 163
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 162,
                                                "end": 163
                                            },
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "arrayLength",
                                                            "rawText": "arrayLength",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 165,
                                                            "end": 176
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 161,
                                                            "flags": 0,
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
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 165,
                                                        "end": 184
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 165,
                                                "end": 184
                                            },
                                            "returnType": {
                                                "kind": 7,
                                                "elementType": {
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
                                                        "start": 186,
                                                        "end": 188
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 186,
                                                    "end": 189
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 186,
                                                "end": 191
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 158,
                                            "end": 191
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
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
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 195,
                                                            "end": 196
                                                        },
                                                        "constraint": null,
                                                        "defaultType": null,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 195,
                                                        "end": 196
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 195,
                                                "end": 196
                                            },
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": true,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "items",
                                                            "rawText": "items",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 201,
                                                            "end": 206
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 7,
                                                            "elementType": {
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
                                                                    "start": 207,
                                                                    "end": 209
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 207,
                                                                "end": 210
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 207,
                                                            "end": 212
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 4097,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 198,
                                                        "end": 211
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 198,
                                                "end": 211
                                            },
                                            "returnType": {
                                                "kind": 7,
                                                "elementType": {
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
                                                        "start": 213,
                                                        "end": 215
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 213,
                                                    "end": 216
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 213,
                                                "end": 218
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 191,
                                            "end": 218
                                        },
                                        {
                                            "kind": 147,
                                            "name": {
                                                "kind": 196711,
                                                "text": "isArray",
                                                "rawText": "isArray",
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 218,
                                                "end": 228
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "arg",
                                                            "rawText": "arg",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 229,
                                                            "end": 232
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4194306,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 233,
                                                            "end": 237
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 229,
                                                        "end": 237
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 229,
                                                "end": 237
                                            },
                                            "returnType": {
                                                "kind": 4259878,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 239,
                                                "end": 247
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 218,
                                            "end": 248
                                        },
                                        {
                                            "kind": 188,
                                            "name": {
                                                "kind": 196711,
                                                "text": "prototype",
                                                "rawText": "prototype",
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 248,
                                                "end": 260
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 236,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 261,
                                                    "end": 267
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
                                                            "start": 268,
                                                            "end": 271
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 268,
                                                    "end": 271
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 261,
                                                "end": 273
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 248,
                                            "end": 273
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 275
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 275
                            },
                            "initializer": null,
                            "flags": 11,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 275
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 11,
                    "end": 275
                },
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 7,
                "end": 275
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 275
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

