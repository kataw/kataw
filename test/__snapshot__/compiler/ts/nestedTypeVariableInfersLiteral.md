# Kataw parser test case

## Input

`````js
// https://github.com/Microsoft/TypeScript/issues/19632
declare function direct<A extends string>(a: A | A[]): Record<A, string>
declare function nested<A extends string>(a: { fields: A }): Record<A, string>
declare function nestedUnion<A extends string>(a: { fields: A | A[] }): Record<A, string>

const directUnionSingle = direct("z")
const directUnionArray = direct(["z", "y"])
const nestedSingle = nested({fields: "z"})
const nestedUnionSingle = nestedUnion({fields: "z"})
const nestedUnionArray = nestedUnion({fields: ["z", "y"]})

declare function hasZField(arg: { z: string }): void

hasZField(directUnionSingle) // ok
hasZField(directUnionArray) // ok
hasZField(nestedSingle) // ok
hasZField(nestedUnionSingle) // ok
hasZField(nestedUnionArray) // ok

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "// https://github.com/Microsoft/TypeScript/issues/19632\ndeclare function direct<A extends string>(a: A | A[]): Record<A, string>\ndeclare function nested<A extends string>(a: { fields: A }): Record<A, string>\ndeclare function nestedUnion<A extends string>(a: { fields: A | A[] }): Record<A, string>\n\nconst directUnionSingle = direct(\"z\")\nconst directUnionArray = direct([\"z\", \"y\"])\nconst nestedSingle = nested({fields: \"z\"})\nconst nestedUnionSingle = nestedUnion({fields: \"z\"})\nconst nestedUnionArray = nestedUnion({fields: [\"z\", \"y\"]})\n\ndeclare function hasZField(arg: { z: string }): void\n\nhasZField(directUnionSingle) // ok\nhasZField(directUnionArray) // ok\nhasZField(nestedSingle) // ok\nhasZField(nestedUnionSingle) // ok\nhasZField(nestedUnionArray) // ok\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "direct",
                "rawText": "direct",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 72,
                "end": 79
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 98,
                            "end": 99
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 100,
                                        "end": 102
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 100,
                                    "end": 104
                                },
                                {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "A",
                                            "rawText": "A",
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
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 104,
                                    "end": 109
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 102,
                            "end": 108
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 98,
                        "end": 108
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 98,
                "end": 109
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Record",
                    "rawText": "Record",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 117
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 119
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 118,
                            "end": 120
                        },
                        {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 120,
                            "end": 127
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 118,
                    "end": 127
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 110,
                "end": 136
            },
            "contents": null,
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 81
                        },
                        "constraint": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 89,
                            "end": 96
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 80,
                        "end": 96
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 80,
                "end": 96
            },
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 63,
            "end": 128
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "nested",
                "rawText": "nested",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 145,
                "end": 152
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 171,
                            "end": 172
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "fields",
                                            "rawText": "fields",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 175,
                                            "end": 182
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 183,
                                                "end": 185
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 183,
                                            "end": 187
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 175,
                                        "end": 185
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 175,
                                "end": 187
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 173,
                            "end": 187
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 171,
                        "end": 187
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 171,
                "end": 188
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Record",
                    "rawText": "Record",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 196
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 197,
                                "end": 198
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 197,
                            "end": 199
                        },
                        {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 199,
                            "end": 206
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 197,
                    "end": 206
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 189,
                "end": 215
            },
            "contents": null,
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 154
                        },
                        "constraint": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 162,
                            "end": 169
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 153,
                        "end": 169
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 153,
                "end": 169
            },
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 136,
            "end": 207
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "nestedUnion",
                "rawText": "nestedUnion",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 224,
                "end": 236
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 255,
                            "end": 256
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "fields",
                                            "rawText": "fields",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 259,
                                            "end": 266
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 8432,
                                            "types": [
                                                {
                                                    "kind": 134226156,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "A",
                                                        "rawText": "A",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 267,
                                                        "end": 269
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 267,
                                                    "end": 271
                                                },
                                                {
                                                    "kind": 8199,
                                                    "elementType": {
                                                        "kind": 134226156,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "A",
                                                            "rawText": "A",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 271,
                                                            "end": 273
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 271,
                                                        "end": 274
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 271,
                                                    "end": 277
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 269,
                                            "end": 275
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 259,
                                        "end": 275
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 259,
                                "end": 277
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 257,
                            "end": 277
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 255,
                        "end": 277
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 255,
                "end": 278
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Record",
                    "rawText": "Record",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 279,
                    "end": 286
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 287,
                                "end": 288
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 287,
                            "end": 289
                        },
                        {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 289,
                            "end": 296
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 287,
                    "end": 296
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 279,
                "end": 304
            },
            "contents": null,
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 237,
                            "end": 238
                        },
                        "constraint": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 246,
                            "end": 253
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 237,
                        "end": 253
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 237,
                "end": 253
            },
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 215,
            "end": 297
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "directUnionSingle",
                            "rawText": "directUnionSingle",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 304,
                            "end": 322
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "direct",
                                "rawText": "direct",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 324,
                                "end": 331
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 332,
                                        "end": 335
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "intersects": false,
                                "start": 335,
                                "end": 336
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 331,
                            "end": 336
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 304,
                        "end": 336
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 304,
                "end": 336
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 297,
            "end": 336
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "directUnionArray",
                            "rawText": "directUnionArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 342,
                            "end": 359
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "direct",
                                "rawText": "direct",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 361,
                                "end": 368
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 4261583,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 370,
                                                    "end": 373
                                                },
                                                {
                                                    "kind": 4261583,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 374,
                                                    "end": 378
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 370,
                                            "end": 378
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 369,
                                        "end": 379
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "intersects": false,
                                "start": 370,
                                "end": 380
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 368,
                            "end": 380
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 342,
                        "end": 380
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 342,
                "end": 380
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 336,
            "end": 380
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "nestedSingle",
                            "rawText": "nestedSingle",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 386,
                            "end": 399
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "nested",
                                "rawText": "nested",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 401,
                                "end": 408
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "fields",
                                                        "rawText": "fields",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 410,
                                                        "end": 416
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 417,
                                                        "end": 421
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 410,
                                                    "end": 421
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 410,
                                            "end": 421
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 409,
                                        "end": 422
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "intersects": false,
                                "start": 410,
                                "end": 423
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 408,
                            "end": 423
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 386,
                        "end": 423
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 386,
                "end": 423
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 380,
            "end": 423
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "nestedUnionSingle",
                            "rawText": "nestedUnionSingle",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 429,
                            "end": 447
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "nestedUnion",
                                "rawText": "nestedUnion",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 449,
                                "end": 461
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "fields",
                                                        "rawText": "fields",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 463,
                                                        "end": 469
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 470,
                                                        "end": 474
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 463,
                                                    "end": 474
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 463,
                                            "end": 474
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 462,
                                        "end": 475
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "intersects": false,
                                "start": 463,
                                "end": 476
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 461,
                            "end": 476
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 429,
                        "end": 476
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 429,
                "end": 476
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 423,
            "end": 476
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "nestedUnionArray",
                            "rawText": "nestedUnionArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 482,
                            "end": 499
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "nestedUnion",
                                "rawText": "nestedUnion",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 501,
                                "end": 513
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "fields",
                                                        "rawText": "fields",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 515,
                                                        "end": 521
                                                    },
                                                    "right": {
                                                        "kind": 98822,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [
                                                                {
                                                                    "kind": 4261583,
                                                                    "text": "z",
                                                                    "rawText": "z",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 524,
                                                                    "end": 527
                                                                },
                                                                {
                                                                    "kind": 4261583,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 528,
                                                                    "end": 532
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 524,
                                                            "end": 532
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 522,
                                                        "end": 533
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 515,
                                                    "end": 533
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 515,
                                            "end": 533
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 514,
                                        "end": 534
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "intersects": false,
                                "start": 515,
                                "end": 535
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 513,
                            "end": 535
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 482,
                        "end": 535
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 482,
                "end": 535
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 476,
            "end": 535
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "hasZField",
                "rawText": "hasZField",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 553,
                "end": 563
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 564,
                            "end": 567
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 570,
                                            "end": 572
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 573,
                                            "end": 580
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 570,
                                        "end": 580
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 570,
                                "end": 582
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 568,
                            "end": 582
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 564,
                        "end": 582
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 564,
                "end": 583
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 584,
                "end": 589
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 544,
            "end": 589
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "hasZField",
                    "rawText": "hasZField",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 589,
                    "end": 600
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "directUnionSingle",
                            "rawText": "directUnionSingle",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 601,
                            "end": 618
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 32768,
                    "intersects": false,
                    "start": 618,
                    "end": 619
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 600,
                "end": 619
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 589,
            "end": 619
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "hasZField",
                    "rawText": "hasZField",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 619,
                    "end": 635
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "directUnionArray",
                            "rawText": "directUnionArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 636,
                            "end": 652
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 32768,
                    "intersects": false,
                    "start": 652,
                    "end": 653
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 635,
                "end": 653
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 619,
            "end": 653
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "hasZField",
                    "rawText": "hasZField",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 653,
                    "end": 669
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "nestedSingle",
                            "rawText": "nestedSingle",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 670,
                            "end": 682
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 32768,
                    "intersects": false,
                    "start": 682,
                    "end": 683
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 669,
                "end": 683
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 653,
            "end": 683
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "hasZField",
                    "rawText": "hasZField",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 683,
                    "end": 699
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "nestedUnionSingle",
                            "rawText": "nestedUnionSingle",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 700,
                            "end": 717
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 32768,
                    "intersects": false,
                    "start": 717,
                    "end": 718
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 699,
                "end": 718
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 683,
            "end": 718
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "hasZField",
                    "rawText": "hasZField",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 718,
                    "end": 734
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "nestedUnionArray",
                            "rawText": "nestedUnionArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 735,
                            "end": 751
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 32768,
                    "intersects": false,
                    "start": 751,
                    "end": 752
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 734,
                "end": 752
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 718,
            "end": 752
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
    "end": 759
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

