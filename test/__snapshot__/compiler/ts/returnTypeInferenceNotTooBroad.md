# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
type Signs = { kind: 'a'; a: 3; } | { kind: 'b'; b: 2; } | { kind: 'c'; c: 1; };

interface Opts<T> {
    low?: number;
    sign?: T
}
interface Wrapper<T> {
}

declare function sepsis<T extends Signs>(opts: Opts<T>): Wrapper<T>;

declare function unwrap<T>(w: Wrapper<T>): T;

export const y = sepsis({ low: 1, sign: { kind: 'a', a: 3 }});

export const yun = unwrap(y);

export const yone = unwrap(sepsis({ low: 1, sign: { kind: 'a', a: 3 }}));
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type Signs = { kind: 'a'; a: 3; } | { kind: 'b'; b: 2; } | { kind: 'c'; c: 1; };\n\ninterface Opts<T> {\n    low?: number;\n    sign?: T\n}\ninterface Wrapper<T> {\n}\n\ndeclare function sepsis<T extends Signs>(opts: Opts<T>): Wrapper<T>;\n\ndeclare function unwrap<T>(w: Wrapper<T>): T;\n\nexport const y = sepsis({ low: 1, sign: { kind: 'a', a: 3 }});\n\nexport const yun = unwrap(y);\n\nexport const yone = unwrap(sepsis({ low: 1, sign: { kind: 'a', a: 3 }}));",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Signs",
                "rawText": "Signs",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 10
            },
            "type": {
                "kind": 8432,
                "types": [
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "kind",
                                        "rawText": "kind",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 19
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 14,
                                    "end": 25
                                },
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8355,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 25,
                                    "end": 31
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 14,
                            "end": 33
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 12,
                        "end": 33
                    },
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "kind",
                                        "rawText": "kind",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 42
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 43,
                                        "end": 47
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 37,
                                    "end": 48
                                },
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8355,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 48,
                                    "end": 54
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 37,
                            "end": 56
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 35,
                        "end": 56
                    },
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "kind",
                                        "rawText": "kind",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 65
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 66,
                                        "end": 70
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 60,
                                    "end": 71
                                },
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 71,
                                        "end": 73
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8355,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 74,
                                        "end": 76
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 71,
                                    "end": 77
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 60,
                            "end": 79
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 58,
                        "end": 79
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 33,
                "end": 79
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 80
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Opts",
                "rawText": "Opts",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 91,
                "end": 96
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
                            "start": 97,
                            "end": 98
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 97,
                        "end": 98
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 97,
                "end": 98
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "low",
                            "rawText": "low",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 109
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 111,
                            "end": 118
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 101,
                        "end": 119
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "sign",
                            "rawText": "sign",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 128
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 130,
                                "end": 132
                            },
                            "typeArguments": null,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 130,
                            "end": 134
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 119,
                        "end": 132
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 101,
                "end": 132
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 80,
            "end": 134
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Wrapper",
                "rawText": "Wrapper",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 144,
                "end": 152
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
                            "start": 153,
                            "end": 154
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 153,
                        "end": 154
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 153,
                "end": 154
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 157,
                "end": 157
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 134,
            "end": 159
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "sepsis",
                "rawText": "sepsis",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 177,
                "end": 184
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "opts",
                            "rawText": "opts",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 202,
                            "end": 206
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Opts",
                                "rawText": "Opts",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 212
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 213,
                                            "end": 214
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 213,
                                        "end": 215
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 213,
                                "end": 214
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 207,
                            "end": 216
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 202,
                        "end": 215
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 202,
                "end": 216
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Wrapper",
                    "rawText": "Wrapper",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 217,
                    "end": 225
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 227
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 226,
                            "end": 228
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 226,
                    "end": 227
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 217,
                "end": 229
            },
            "contents": null,
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
                            "start": 185,
                            "end": 186
                        },
                        "constraint": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Signs",
                                "rawText": "Signs",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 194,
                                "end": 200
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 194,
                            "end": 201
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 185,
                        "end": 200
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 185,
                "end": 200
            },
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 168,
            "end": 229
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "unwrap",
                "rawText": "unwrap",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 247,
                "end": 254
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "w",
                            "rawText": "w",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 258,
                            "end": 259
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Wrapper",
                                "rawText": "Wrapper",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 260,
                                "end": 268
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 269,
                                            "end": 270
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 269,
                                        "end": 271
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 269,
                                "end": 270
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 260,
                            "end": 272
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 258,
                        "end": 271
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 258,
                "end": 272
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "T",
                    "rawText": "T",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 273,
                    "end": 275
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 273,
                "end": 276
            },
            "contents": null,
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
                            "start": 255,
                            "end": 256
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 255,
                        "end": 256
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 255,
                "end": 256
            },
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 238,
            "end": 276
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 290,
                                "end": 292
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "sepsis",
                                    "rawText": "sepsis",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 294,
                                    "end": 301
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
                                                            "text": "low",
                                                            "rawText": "low",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 303,
                                                            "end": 307
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 308,
                                                            "end": 310
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 303,
                                                        "end": 310
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "sign",
                                                            "rawText": "sign",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 311,
                                                            "end": 316
                                                        },
                                                        "right": {
                                                            "kind": 98984,
                                                            "propertyList": {
                                                                "kind": 65722,
                                                                "properties": [
                                                                    {
                                                                        "kind": 65721,
                                                                        "left": {
                                                                            "kind": 196711,
                                                                            "text": "kind",
                                                                            "rawText": "kind",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 319,
                                                                            "end": 324
                                                                        },
                                                                        "right": {
                                                                            "kind": 4261583,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 33554432,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 325,
                                                                            "end": 329
                                                                        },
                                                                        "accessModifier": null,
                                                                        "decorators": null,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 319,
                                                                        "end": 329
                                                                    },
                                                                    {
                                                                        "kind": 65721,
                                                                        "left": {
                                                                            "kind": 196711,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 330,
                                                                            "end": 332
                                                                        },
                                                                        "right": {
                                                                            "kind": 4261540,
                                                                            "text": 3,
                                                                            "rawText": "3",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 333,
                                                                            "end": 335
                                                                        },
                                                                        "accessModifier": null,
                                                                        "decorators": null,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 330,
                                                                        "end": 335
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 319,
                                                                "end": 335
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 317,
                                                            "end": 337
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 311,
                                                        "end": 337
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 303,
                                                "end": 337
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 302,
                                            "end": 338
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 303,
                                    "end": 339
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 301,
                                "end": 339
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 290,
                            "end": 339
                        }
                    ],
                    "flags": 8,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 290,
                    "end": 339
                },
                "flags": 32776,
                "intersects": false,
                "transformFlags": 769,
                "start": 276,
                "end": 340
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 0,
            "start": 276,
            "end": 340
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "yun",
                                "rawText": "yun",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 354,
                                "end": 358
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "unwrap",
                                    "rawText": "unwrap",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 360,
                                    "end": 367
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 368,
                                            "end": 369
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 369,
                                    "end": 370
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 367,
                                "end": 370
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 354,
                            "end": 370
                        }
                    ],
                    "flags": 8,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 354,
                    "end": 370
                },
                "flags": 32776,
                "intersects": false,
                "transformFlags": 769,
                "start": 340,
                "end": 371
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 0,
            "start": 340,
            "end": 371
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "yone",
                                "rawText": "yone",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 385,
                                "end": 390
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "unwrap",
                                    "rawText": "unwrap",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 392,
                                    "end": 399
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "sepsis",
                                                "rawText": "sepsis",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 400,
                                                "end": 406
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
                                                                        "text": "low",
                                                                        "rawText": "low",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 408,
                                                                        "end": 412
                                                                    },
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 413,
                                                                        "end": 415
                                                                    },
                                                                    "accessModifier": null,
                                                                    "decorators": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 408,
                                                                    "end": 415
                                                                },
                                                                {
                                                                    "kind": 65721,
                                                                    "left": {
                                                                        "kind": 196711,
                                                                        "text": "sign",
                                                                        "rawText": "sign",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 416,
                                                                        "end": 421
                                                                    },
                                                                    "right": {
                                                                        "kind": 98984,
                                                                        "propertyList": {
                                                                            "kind": 65722,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 65721,
                                                                                    "left": {
                                                                                        "kind": 196711,
                                                                                        "text": "kind",
                                                                                        "rawText": "kind",
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 424,
                                                                                        "end": 429
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 4261583,
                                                                                        "text": "a",
                                                                                        "rawText": "a",
                                                                                        "flags": 33554432,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 430,
                                                                                        "end": 434
                                                                                    },
                                                                                    "accessModifier": null,
                                                                                    "decorators": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 424,
                                                                                    "end": 434
                                                                                },
                                                                                {
                                                                                    "kind": 65721,
                                                                                    "left": {
                                                                                        "kind": 196711,
                                                                                        "text": "a",
                                                                                        "rawText": "a",
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 435,
                                                                                        "end": 437
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 4261540,
                                                                                        "text": 3,
                                                                                        "rawText": "3",
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 438,
                                                                                        "end": 440
                                                                                    },
                                                                                    "accessModifier": null,
                                                                                    "decorators": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 435,
                                                                                    "end": 440
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 424,
                                                                            "end": 440
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 422,
                                                                        "end": 442
                                                                    },
                                                                    "accessModifier": null,
                                                                    "decorators": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 416,
                                                                    "end": 442
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 408,
                                                            "end": 442
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 407,
                                                        "end": 443
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "intersects": false,
                                                "start": 408,
                                                "end": 444
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 406,
                                            "end": 444
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 406,
                                    "end": 445
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 399,
                                "end": 445
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 385,
                            "end": 445
                        }
                    ],
                    "flags": 8,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 385,
                    "end": 445
                },
                "flags": 8,
                "intersects": false,
                "transformFlags": 769,
                "start": 371,
                "end": 446
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 0,
            "start": 371,
            "end": 446
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 278,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 342,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 373,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 446
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

