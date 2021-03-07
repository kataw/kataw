# Kataw parser test case

## Input

`````js
var union: { a: number, c: boolean } | { a: string, b: string };

var rest1: { c: boolean } | { b: string };
var {a, ...rest1 } = union;


var undefinedUnion: { n: number } | undefined;
var rest2: {};
var {n, ...rest2 } = undefinedUnion;


var nullUnion: { n: number } | null;
var rest3: {};
var {n, ...rest3 } = nullUnion;

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var union: { a: number, c: boolean } | { a: string, b: string };\n\nvar rest1: { c: boolean } | { b: string };\nvar {a, ...rest1 } = union;\n\n\nvar undefinedUnion: { n: number } | undefined;\nvar rest2: {};\nvar {n, ...rest2 } = undefinedUnion;\n\n\nvar nullUnion: { n: number } | null;\nvar rest3: {};\nvar {n, ...rest3 } = nullUnion;\n",
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
                                "text": "union",
                                "rawText": "union",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 15,
                                                        "end": 22
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 12,
                                                    "end": 23
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
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4268070,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 26,
                                                        "end": 34
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 23,
                                                    "end": 34
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 12,
                                            "end": 36
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 10,
                                        "end": 36
                                    },
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 43,
                                                        "end": 50
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 40,
                                                    "end": 51
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
                                                        "start": 51,
                                                        "end": 53
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 54,
                                                        "end": 61
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 51,
                                                    "end": 61
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 40,
                                            "end": 63
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 38,
                                        "end": 63
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 36,
                                "end": 63
                            },
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 63
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 63
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 64
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "rest1",
                                "rawText": "rest1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 69,
                                "end": 75
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 78,
                                                        "end": 80
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4268070,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 81,
                                                        "end": 89
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 78,
                                                    "end": 89
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 78,
                                            "end": 91
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 76,
                                        "end": 91
                                    },
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 95,
                                                        "end": 97
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 98,
                                                        "end": 105
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 95,
                                                    "end": 105
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 95,
                                            "end": 107
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 93,
                                        "end": 107
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 91,
                                "end": 107
                            },
                            "initializer": null,
                            "flags": 69,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 107
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 107
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 64,
                "end": 108
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 114,
                                                "end": 115
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 114,
                                            "end": 115
                                        },
                                        {
                                            "kind": 203,
                                            "ellipsis": true,
                                            "left": {
                                                "kind": 131102,
                                                "text": "rest1",
                                                "rawText": "rest1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 116,
                                                "end": 125
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 116,
                                            "end": 125
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 114,
                                    "end": 125
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 112,
                                "end": 127
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 196712,
                                "text": "union",
                                "rawText": "union",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 135
                            },
                            "flags": 112,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 135
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 135
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 108,
                "end": 136
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "undefinedUnion",
                                "rawText": "undefinedUnion",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 142,
                                "end": 157
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "n",
                                                        "rawText": "n",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 160,
                                                        "end": 162
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 163,
                                                        "end": 170
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 160,
                                                    "end": 170
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 160,
                                            "end": 172
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 158,
                                        "end": 172
                                    },
                                    {
                                        "kind": 4202735,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 174,
                                        "end": 184
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 172,
                                "end": 184
                            },
                            "initializer": null,
                            "flags": 142,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 184
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 142,
                    "end": 184
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 136,
                "end": 185
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "rest2",
                                "rawText": "rest2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 189,
                                "end": 195
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 198,
                                    "end": 199
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 196,
                                "end": 199
                            },
                            "initializer": null,
                            "flags": 189,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 199
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 199
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 185,
                "end": 200
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 206,
                                                "end": 207
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 206,
                                            "end": 207
                                        },
                                        {
                                            "kind": 203,
                                            "ellipsis": true,
                                            "left": {
                                                "kind": 131102,
                                                "text": "rest2",
                                                "rawText": "rest2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 208,
                                                "end": 217
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 208,
                                            "end": 217
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 206,
                                    "end": 217
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 204,
                                "end": 219
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 196712,
                                "text": "undefinedUnion",
                                "rawText": "undefinedUnion",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 221,
                                "end": 236
                            },
                            "flags": 204,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 236
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 204,
                    "end": 236
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 200,
                "end": 237
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "nullUnion",
                                "rawText": "nullUnion",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 243,
                                "end": 253
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "n",
                                                        "rawText": "n",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 256,
                                                        "end": 258
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 259,
                                                        "end": 266
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 256,
                                                    "end": 266
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 256,
                                            "end": 268
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 254,
                                        "end": 268
                                    },
                                    {
                                        "kind": 4202655,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 270,
                                        "end": 275
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 268,
                                "end": 275
                            },
                            "initializer": null,
                            "flags": 243,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 275
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 243,
                    "end": 275
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 237,
                "end": 276
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "rest3",
                                "rawText": "rest3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 280,
                                "end": 286
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 289,
                                    "end": 290
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 287,
                                "end": 290
                            },
                            "initializer": null,
                            "flags": 280,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 290
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 280,
                    "end": 290
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 276,
                "end": 291
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 297,
                                                "end": 298
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 297,
                                            "end": 298
                                        },
                                        {
                                            "kind": 203,
                                            "ellipsis": true,
                                            "left": {
                                                "kind": 131102,
                                                "text": "rest3",
                                                "rawText": "rest3",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 299,
                                                "end": 308
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 299,
                                            "end": 308
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 297,
                                    "end": 308
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 295,
                                "end": 310
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 196712,
                                "text": "nullUnion",
                                "rawText": "nullUnion",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 312,
                                "end": 322
                            },
                            "flags": 295,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 322
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 295,
                    "end": 322
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 291,
                "end": 323
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 323
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 324
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

