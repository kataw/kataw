# Kataw parser test case

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
// $ExpectType { kind: "a"; a: 3; }
export const yun = unwrap(y);
// $ExpectType { kind: "a"; a: 3; }
export const yone = unwrap(sepsis({ low: 1, sign: { kind: 'a', a: 3 }}));
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type Signs = { kind: 'a'; a: 3; } | { kind: 'b'; b: 2; } | { kind: 'c'; c: 1; };\ninterface Opts<T> {\n    low?: number;\n    sign?: T\n}\ninterface Wrapper<T> {\n}\ndeclare function sepsis<T extends Signs>(opts: Opts<T>): Wrapper<T>;\ndeclare function unwrap<T>(w: Wrapper<T>): T;\nexport const y = sepsis({ low: 1, sign: { kind: 'a', a: 3 }});\n// $ExpectType { kind: \"a\"; a: 3; }\nexport const yun = unwrap(y);\n// $ExpectType { kind: \"a\"; a: 3; }\nexport const yone = unwrap(sepsis({ low: 1, sign: { kind: 'a', a: 3 }}));",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Signs",
                    "rawText": "Signs",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 10
                },
                "type": {
                    "kind": 240,
                    "types": [
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "kind",
                                            "rawText": "kind",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "a",
                                            "rawValue": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 14,
                                        "end": 25
                                    },
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 163,
                                            "value": 3,
                                            "rawValue": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 25,
                                        "end": 31
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 33
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 33
                        },
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "kind",
                                            "rawText": "kind",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "b",
                                            "rawValue": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 43,
                                            "end": 47
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 37,
                                        "end": 48
                                    },
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 163,
                                            "value": 2,
                                            "rawValue": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 48,
                                        "end": 54
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 37,
                                "end": 56
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 35,
                            "end": 56
                        },
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "kind",
                                            "rawText": "kind",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 60,
                                            "end": 65
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "c",
                                            "rawValue": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 66,
                                            "end": 70
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 60,
                                        "end": 71
                                    },
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 71,
                                            "end": 73
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 163,
                                            "value": 1,
                                            "rawValue": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 74,
                                            "end": 76
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 71,
                                        "end": 77
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 60,
                                "end": 79
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 58,
                            "end": 79
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 79
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 80
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "Opts",
                    "rawText": "Opts",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 90,
                    "end": 95
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
                                "start": 96,
                                "end": 97
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 96,
                            "end": 97
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 96,
                    "end": 97
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "low",
                                "rawText": "low",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 100,
                                "end": 108
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 161,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 110,
                                "end": 117
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 100,
                            "end": 118
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "sign",
                                "rawText": "sign",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 118,
                                "end": 127
                            },
                            "isOptional": true,
                            "accessModifier": null,
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
                                    "start": 129,
                                    "end": 131
                                },
                                "typeArguments": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 129,
                                "end": 133
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 118,
                            "end": 131
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 100,
                    "end": 131
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 80,
                "end": 133
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "Wrapper",
                    "rawText": "Wrapper",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 143,
                    "end": 151
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
                                "start": 152,
                                "end": 153
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 152,
                            "end": 153
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 152,
                    "end": 153
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 156,
                    "end": 156
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 133,
                "end": 158
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
                    "parent": null,
                    "emitNode": null,
                    "start": 175,
                    "end": 182
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "opts",
                                "rawText": "opts",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 200,
                                "end": 204
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Opts",
                                    "rawText": "Opts",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 205,
                                    "end": 210
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
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
                                                "start": 211,
                                                "end": 212
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 211,
                                            "end": 213
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 211,
                                    "end": 212
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 205,
                                "end": 214
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 200,
                            "end": 213
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 200,
                    "end": 214
                },
                "type": {
                    "kind": 236,
                    "typeName": {
                        "kind": 196711,
                        "text": "Wrapper",
                        "rawText": "Wrapper",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 215,
                        "end": 223
                    },
                    "typeArguments": {
                        "kind": 227,
                        "typeArgumentsList": [
                            {
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
                                    "start": 224,
                                    "end": 225
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 224,
                                "end": 226
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 224,
                        "end": 225
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 215,
                    "end": 227
                },
                "contents": null,
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
                                "start": 183,
                                "end": 184
                            },
                            "constraint": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Signs",
                                    "rawText": "Signs",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 192,
                                    "end": 198
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 192,
                                "end": 199
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 183,
                            "end": 198
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 183,
                    "end": 198
                },
                "flags": 201342976,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 166,
                "end": 227
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
                    "parent": null,
                    "emitNode": null,
                    "start": 244,
                    "end": 251
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "w",
                                "rawText": "w",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 255,
                                "end": 256
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Wrapper",
                                    "rawText": "Wrapper",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 257,
                                    "end": 265
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
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
                                                "start": 266,
                                                "end": 267
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 266,
                                            "end": 268
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 266,
                                    "end": 267
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 257,
                                "end": 269
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 255,
                            "end": 268
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 255,
                    "end": 269
                },
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
                        "start": 270,
                        "end": 272
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 270,
                    "end": 273
                },
                "contents": null,
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
                                "start": 252,
                                "end": 253
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 252,
                            "end": 253
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 252,
                    "end": 253
                },
                "flags": 201342976,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 235,
                "end": 273
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
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 286,
                                    "end": 288
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "sepsis",
                                        "rawText": "sepsis",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 290,
                                        "end": 297
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 67224232,
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
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 299,
                                                                "end": 303
                                                            },
                                                            "right": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 304,
                                                                "end": 306
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 299,
                                                            "end": 306
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
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 307,
                                                                "end": 312
                                                            },
                                                            "right": {
                                                                "kind": 67224232,
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
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 315,
                                                                                "end": 320
                                                                            },
                                                                            "right": {
                                                                                "kind": 67279,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 16777216,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 321,
                                                                                "end": 325
                                                                            },
                                                                            "accessModifier": null,
                                                                            "decorators": null,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 315,
                                                                            "end": 325
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
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 326,
                                                                                "end": 328
                                                                            },
                                                                            "right": {
                                                                                "kind": 4261540,
                                                                                "text": 3,
                                                                                "rawText": "3",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 329,
                                                                                "end": 331
                                                                            },
                                                                            "accessModifier": null,
                                                                            "decorators": null,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 326,
                                                                            "end": 331
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 315,
                                                                    "end": 331
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 313,
                                                                "end": 333
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 307,
                                                            "end": 333
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 299,
                                                    "end": 333
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 298,
                                                "end": 334
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 299,
                                        "end": 335
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 297,
                                    "end": 335
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 286,
                                "end": 335
                            }
                        ],
                        "flags": 16,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 286,
                        "end": 335
                    },
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 769,
                    "parent": null,
                    "emitNode": null,
                    "start": 273,
                    "end": 336
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 273,
                "end": 336
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
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "yun",
                                    "rawText": "yun",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 385,
                                    "end": 389
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "unwrap",
                                        "rawText": "unwrap",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 391,
                                        "end": 398
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
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 399,
                                                "end": 400
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 400,
                                        "end": 401
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 398,
                                    "end": 401
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 385,
                                "end": 401
                            }
                        ],
                        "flags": 16,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 385,
                        "end": 401
                    },
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 769,
                    "parent": null,
                    "emitNode": null,
                    "start": 336,
                    "end": 402
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 336,
                "end": 402
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
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "yone",
                                    "rawText": "yone",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 451,
                                    "end": 456
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "unwrap",
                                        "rawText": "unwrap",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 458,
                                        "end": 465
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 66091,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "sepsis",
                                                    "rawText": "sepsis",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 466,
                                                    "end": 472
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67224232,
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
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 474,
                                                                            "end": 478
                                                                        },
                                                                        "right": {
                                                                            "kind": 4261540,
                                                                            "text": 1,
                                                                            "rawText": "1",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 479,
                                                                            "end": 481
                                                                        },
                                                                        "accessModifier": null,
                                                                        "decorators": null,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 474,
                                                                        "end": 481
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
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 482,
                                                                            "end": 487
                                                                        },
                                                                        "right": {
                                                                            "kind": 67224232,
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
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 490,
                                                                                            "end": 495
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 67279,
                                                                                            "text": "a",
                                                                                            "rawText": "a",
                                                                                            "flags": 16777216,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 496,
                                                                                            "end": 500
                                                                                        },
                                                                                        "accessModifier": null,
                                                                                        "decorators": null,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 490,
                                                                                        "end": 500
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
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 501,
                                                                                            "end": 503
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 4261540,
                                                                                            "text": 3,
                                                                                            "rawText": "3",
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 504,
                                                                                            "end": 506
                                                                                        },
                                                                                        "accessModifier": null,
                                                                                        "decorators": null,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 501,
                                                                                        "end": 506
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 490,
                                                                                "end": 506
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 488,
                                                                            "end": 508
                                                                        },
                                                                        "accessModifier": null,
                                                                        "decorators": null,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 482,
                                                                        "end": 508
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 474,
                                                                "end": 508
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 473,
                                                            "end": 509
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 474,
                                                    "end": 510
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 472,
                                                "end": 510
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 472,
                                        "end": 511
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 465,
                                    "end": 511
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 451,
                                "end": 511
                            }
                        ],
                        "flags": 16,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 451,
                        "end": 511
                    },
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 769,
                    "parent": null,
                    "emitNode": null,
                    "start": 402,
                    "end": 512
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 402,
                "end": 512
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 512
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 274,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 373,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 439,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 512
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

