# Kataw parser test case

## Input

`````js
declare var arrOfObjs: Array<{ foo: string }>;
declare var roArrOfObjs: $ReadOnlyArray<{foo: string}>;
declare var tup: [{foo: string}, {bar: number}];
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "arrOfObjs",
                            "rawText": "arrOfObjs",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 21
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 28
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234353,
                                                    "properties": [
                                                        {
                                                            "kind": 193,
                                                            "protoKeyword": null,
                                                            "staticKeyword": null,
                                                            "getKeyword": null,
                                                            "setKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 34
                                                            },
                                                            "optionalToken": null,
                                                            "type": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 134234347,
                                                                    "flags": 2097216,
                                                                    "transformFlags": 0,
                                                                    "start": 35,
                                                                    "end": 42
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 35,
                                                                "end": 42
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 44
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 44
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 44
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 28,
                                    "end": 45
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 45
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 45
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 11,
                        "end": 45
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 45
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 46
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 46,
                "end": 54
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 54,
                "end": 58
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "roArrOfObjs",
                            "rawText": "roArrOfObjs",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 70
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "$ReadOnlyArray",
                                    "rawText": "$ReadOnlyArray",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 86
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234353,
                                                    "properties": [
                                                        {
                                                            "kind": 193,
                                                            "protoKeyword": null,
                                                            "staticKeyword": null,
                                                            "getKeyword": null,
                                                            "setKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 88,
                                                                "end": 91
                                                            },
                                                            "optionalToken": null,
                                                            "type": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 134234347,
                                                                    "flags": 2097216,
                                                                    "transformFlags": 0,
                                                                    "start": 92,
                                                                    "end": 99
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 92,
                                                                "end": 99
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 88,
                                                            "end": 99
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 87,
                                                    "end": 100
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 100
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 87,
                                        "end": 100
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 86,
                                    "end": 101
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 101
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 101
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 58,
                        "end": 101
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 58,
                "end": 101
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 54,
            "end": 102
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 102,
                "end": 110
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 110,
                "end": 114
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "tup",
                            "rawText": "tup",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 118
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234353,
                                            "properties": [
                                                {
                                                    "kind": 193,
                                                    "protoKeyword": null,
                                                    "staticKeyword": null,
                                                    "getKeyword": null,
                                                    "setKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 122,
                                                        "end": 125
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "transformFlags": 0,
                                                            "start": 126,
                                                            "end": 133
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 126,
                                                        "end": 133
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 122,
                                                    "end": 133
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 134
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 121,
                                        "end": 134
                                    },
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234353,
                                            "properties": [
                                                {
                                                    "kind": 193,
                                                    "protoKeyword": null,
                                                    "staticKeyword": null,
                                                    "getKeyword": null,
                                                    "setKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 140
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "transformFlags": 0,
                                                            "start": 141,
                                                            "end": 148
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 141,
                                                        "end": 148
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 148
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 135,
                                            "end": 149
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 135,
                                        "end": 149
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 150
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 150
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 114,
                        "end": 150
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 114,
                "end": 150
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 110,
            "end": 151
        }
    ],
    "isModule": false,
    "source": "declare var arrOfObjs: Array<{ foo: string }>;\ndeclare var roArrOfObjs: $ReadOnlyArray<{foo: string}>;\ndeclare var tup: [{foo: string}, {bar: number}];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 151
}
```

### Printed

```javascript
declare var arrOfObjs: Array<{ foo: string }>;
declare var roArrOfObjs: $ReadOnlyArray<{ foo: string }>;

declare var tup: [{ foo: string }, { bar: number }];

```

### Diagnostics

```javascript
✔ No errors
```

