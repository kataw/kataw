# Kataw parser test case

## Input

`````js
type U = {};
type V = {};
type T1 = { ...U, };
type T2 = { ...U, ...V };
type T3 = { p: V, ...U };
type T4 = { ...U, p: V, };
type T5 = { ...{}|{ p: V, }};
type T6 = { foo(): number }
type T7 = { foo: () => number }
type T8 = { [string]: U };
type T9 = { [param: string]: U };
//type T10 = { ... };
//type T11 = { a: { b: { c: {...}, ... }, ... } }
//type T12 = { foo: number, ... };
//type T13 = { foo: number, bar: string, ... };
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "U",
                "rawText": "U",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 12,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "V",
                "rawText": "V",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 12,
            "end": 25
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 25,
                "end": 30
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "transformFlags": 0,
                "start": 30,
                "end": 33
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 33,
                "end": 35
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 41
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 42
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 42
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 42
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 42
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 45
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 35,
                "end": 45
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 25,
            "end": 46
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 46,
                "end": 51
            },
            "name": {
                "kind": 134299649,
                "text": "T2",
                "rawText": "T2",
                "flags": 96,
                "transformFlags": 0,
                "start": 51,
                "end": 54
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 54,
                "end": 56
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 62
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 62,
                                        "end": 63
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 63
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 63
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 63
                        },
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 68
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "V",
                                        "rawText": "V",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 69
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 69
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 69
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 69
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 71
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 56,
                "end": 71
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 46,
            "end": 72
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 72,
                "end": 77
            },
            "name": {
                "kind": 134299649,
                "text": "T3",
                "rawText": "T3",
                "flags": 96,
                "transformFlags": 0,
                "start": 77,
                "end": 80
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 80,
                "end": 82
            },
            "type": {
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
                                "text": "p",
                                "rawText": "p",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 86
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "V",
                                        "rawText": "V",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 87,
                                        "end": 89
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 89
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 89
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 90
                        },
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 94
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 94,
                                        "end": 95
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 95
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 95
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 95
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 97
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 82,
                "end": 97
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 72,
            "end": 98
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 98,
                "end": 103
            },
            "name": {
                "kind": 134299649,
                "text": "T4",
                "rawText": "T4",
                "flags": 96,
                "transformFlags": 0,
                "start": 103,
                "end": 106
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 106,
                "end": 108
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 114
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 115
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 115
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 115
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "p",
                                "rawText": "p",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 116,
                                "end": 118
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "V",
                                        "rawText": "V",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 119,
                                        "end": 121
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 119,
                                    "end": 121
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 121
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 122
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 124
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 108,
                "end": 124
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 98,
            "end": 125
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 125,
                "end": 130
            },
            "name": {
                "kind": 134299649,
                "text": "T5",
                "rawText": "T5",
                "flags": 96,
                "transformFlags": 0,
                "start": 130,
                "end": 133
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 133,
                "end": 135
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 141
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134234353,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 141,
                                            "end": 143
                                        },
                                        {
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
                                                        "text": "p",
                                                        "rawText": "p",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 145,
                                                        "end": 147
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "V",
                                                                "rawText": "V",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 148,
                                                                "end": 150
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 148,
                                                            "end": 150
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 148,
                                                        "end": 150
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 145,
                                                    "end": 151
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 144,
                                            "end": 153
                                        }
                                    ],
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 153
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 153
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 153
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 154
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 135,
                "end": 154
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 125,
            "end": 155
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 155,
                "end": 160
            },
            "name": {
                "kind": 134299649,
                "text": "T6",
                "rawText": "T6",
                "flags": 96,
                "transformFlags": 0,
                "start": 160,
                "end": 163
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 163,
                "end": 165
            },
            "type": {
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
                                "start": 167,
                                "end": 171
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 172,
                                    "end": 172
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 174,
                                        "end": 181
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 174,
                                    "end": 181
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 171,
                                "end": 181
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 167,
                            "end": 181
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 183
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 165,
                "end": 183
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 155,
            "end": 183
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 183,
                "end": 188
            },
            "name": {
                "kind": 134299649,
                "text": "T7",
                "rawText": "T7",
                "flags": 96,
                "transformFlags": 0,
                "start": 188,
                "end": 191
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 191,
                "end": 193
            },
            "type": {
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
                                "start": 195,
                                "end": 199
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 288,
                                    "typeParameters": null,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 202,
                                        "end": 202
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 203,
                                        "end": 206
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 206,
                                            "end": 213
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 213
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 200,
                                    "end": 213
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 200,
                                "end": 213
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 195,
                            "end": 213
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 193,
                    "end": 215
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 193,
                "end": 215
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 183,
            "end": 215
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 215,
                "end": 220
            },
            "name": {
                "kind": 134299649,
                "text": "T8",
                "rawText": "T8",
                "flags": 96,
                "transformFlags": 0,
                "start": 220,
                "end": 223
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 223,
                "end": 225
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "name": null,
                            "key": {
                                "kind": 134234347,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 229,
                                "end": 235
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 237,
                                        "end": 239
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 237,
                                    "end": 239
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 239
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 239
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 225,
                    "end": 241
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 225,
                "end": 241
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 215,
            "end": 242
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 242,
                "end": 247
            },
            "name": {
                "kind": 134299649,
                "text": "T9",
                "rawText": "T9",
                "flags": 96,
                "transformFlags": 0,
                "start": 247,
                "end": 250
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 250,
                "end": 252
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "name": {
                                "kind": 134299649,
                                "text": "param",
                                "rawText": "param",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 256,
                                "end": 261
                            },
                            "key": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 262,
                                    "end": 269
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 262,
                                "end": 269
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 271,
                                        "end": 273
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 271,
                                    "end": 273
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 271,
                                "end": 273
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 254,
                            "end": 273
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 252,
                    "end": 275
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 252,
                "end": 275
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 242,
            "end": 276
        }
    ],
    "isModule": false,
    "source": "type U = {};\ntype V = {};\ntype T1 = { ...U, };\ntype T2 = { ...U, ...V };\ntype T3 = { p: V, ...U };\ntype T4 = { ...U, p: V, };\ntype T5 = { ...{}|{ p: V, }};\ntype T6 = { foo(): number }\ntype T7 = { foo: () => number }\ntype T8 = { [string]: U };\ntype T9 = { [param: string]: U };\n//type T10 = { ... };\n//type T11 = { a: { b: { c: {...}, ... }, ... } }\n//type T12 = { foo: number, ... };\n//type T13 = { foo: number, bar: string, ... };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 431
}
```

### Printed

```javascript

type U = {}
type V = {}

type T1 = { ...U }

type T2 = { ...U, ...V }

type T3 = { p: V, ...U }

type T4 = { ...U, p: V }

type T5 = { ...{} | { p: V } }

type T6 = { foo(): number }

type T7 = { foo: () =>  number }

type T8 = { [string]: U }

type T9 = { [string]: U }

```

### Diagnostics

```javascript
✔ No errors
```

