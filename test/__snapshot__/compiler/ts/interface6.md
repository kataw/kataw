# Kataw parser test case

## Input

`````js
interface SymbolMap {
  [x: symbol]: string;
}

interface PropertyMap {
  [x: string | number | symbol]: string;
}

// same as
interface PropertyMap {
  [x: PropertyKey]: string;
}

 interface I13 {
   [x: string]: <T>(x: T) => T;
   foo: E;
 }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface SymbolMap {\n  [x: symbol]: string;\n}\n\ninterface PropertyMap {\n  [x: string | number | symbol]: string;\n}\n\n// same as\ninterface PropertyMap {\n  [x: PropertyKey]: string;\n}\n\n interface I13 {\n   [x: string]: <T>(x: T) => T;\n   foo: E;\n }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "SymbolMap",
                    "rawText": "SymbolMap",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 19
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 116,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 211,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 27,
                                            "end": 34
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 25,
                                        "end": 34
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 25,
                                "end": 34
                            },
                            "returnType": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 36,
                                "end": 43
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 25,
                            "end": 44
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 21,
                    "end": 44
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 46
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "PropertyMap",
                    "rawText": "PropertyMap",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 57,
                    "end": 69
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 116,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 75,
                                            "end": 76
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 240,
                                            "types": [
                                                {
                                                    "kind": 4194510,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 77,
                                                    "end": 84
                                                },
                                                {
                                                    "kind": 161,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 86,
                                                    "end": 93
                                                },
                                                {
                                                    "kind": 211,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 95,
                                                    "end": 102
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 84,
                                            "end": 102
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 75,
                                        "end": 102
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 75,
                                "end": 102
                            },
                            "returnType": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 104,
                                "end": 111
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 75,
                            "end": 112
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 71,
                    "end": 112
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 46,
                "end": 114
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "PropertyMap",
                    "rawText": "PropertyMap",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 136,
                    "end": 148
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 116,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 154,
                                            "end": 155
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "PropertyKey",
                                                "rawText": "PropertyKey",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 156,
                                                "end": 168
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 156,
                                            "end": 169
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 154,
                                        "end": 168
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 154,
                                "end": 168
                            },
                            "returnType": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 170,
                                "end": 177
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 154,
                            "end": 178
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 150,
                    "end": 178
                },
                "flags": 16384,
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
                    "text": "I13",
                    "rawText": "I13",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 192,
                    "end": 196
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 116,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [
                                    {
                                        "kind": 174,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 203,
                                            "end": 204
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4194510,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 205,
                                            "end": 212
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 203,
                                        "end": 212
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 203,
                                "end": 212
                            },
                            "returnType": {
                                "kind": 95,
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
                                                "start": 216,
                                                "end": 217
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 216,
                                            "end": 217
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 216,
                                    "end": 217
                                },
                                "parameters": {
                                    "kind": 175,
                                    "parameterList": [
                                        {
                                            "kind": 174,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 219,
                                                "end": 220
                                            },
                                            "isOptional": false,
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
                                                    "start": 221,
                                                    "end": 223
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 221,
                                                "end": 224
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 219,
                                            "end": 223
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 219,
                                    "end": 223
                                },
                                "returnType": {
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
                                        "start": 227,
                                        "end": 229
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 227,
                                    "end": 230
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 214,
                                "end": 229
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 203,
                            "end": 230
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 230,
                                "end": 237
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 238,
                                    "end": 240
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 238,
                                "end": 241
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 230,
                            "end": 241
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 198,
                    "end": 241
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 180,
                "end": 244
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 244
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
    "end": 244
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

