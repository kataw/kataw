# Kataw parser test case

## Input

`````js
type T1 = { ... };
type T2 = { a: { b: { c: {...}, ... }, ... } }
type T3 = { foo: number, ... };
type T4 = { foo: number, bar: string, ... };
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
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 7,
                "end": 9
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
                                "start": 11,
                                "end": 15
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 9,
                    "end": 17
                },
                "flags": 2097152,
                "start": 9,
                "end": 17
            },
            "flags": 64,
            "start": 0,
            "end": 18
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 18,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "T2",
                "rawText": "T2",
                "flags": 96,
                "start": 23,
                "end": 26
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 26,
                "end": 28
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "optionalToken": null,
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
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "optionalToken": null,
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
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 42
                                                            },
                                                            "optionalToken": null,
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
                                                                                "start": 45,
                                                                                "end": 48
                                                                            },
                                                                            "type": {
                                                                                "kind": 139,
                                                                                "bitwiseOrToken": null,
                                                                                "bitwiseAndToken": null,
                                                                                "type": {
                                                                                    "kind": 144,
                                                                                    "typeName": {
                                                                                        "kind": 16637,
                                                                                        "text": "",
                                                                                        "rawText": "",
                                                                                        "flags": 64,
                                                                                        "start": 48,
                                                                                        "end": 48
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "start": 48,
                                                                                    "end": 48
                                                                                },
                                                                                "flags": 2097152,
                                                                                "start": 48,
                                                                                "end": 48
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 45,
                                                                            "end": 48
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "start": 43,
                                                                    "end": 49
                                                                },
                                                                "flags": 2097152,
                                                                "start": 43,
                                                                "end": 49
                                                            },
                                                            "flags": 2097152,
                                                            "start": 40,
                                                            "end": 50
                                                        },
                                                        {
                                                            "kind": 247,
                                                            "protoKeyword": null,
                                                            "staticKeyword": null,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "start": 50,
                                                                "end": 54
                                                            },
                                                            "type": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "typeName": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 64,
                                                                        "start": 54,
                                                                        "end": 54
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 54,
                                                                    "end": 54
                                                                },
                                                                "flags": 2097152,
                                                                "start": 54,
                                                                "end": 54
                                                            },
                                                            "flags": 2097152,
                                                            "start": 50,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 38,
                                                    "end": 56
                                                },
                                                "flags": 2097152,
                                                "start": 38,
                                                "end": 56
                                            },
                                            "flags": 2097152,
                                            "start": 35,
                                            "end": 57
                                        },
                                        {
                                            "kind": 247,
                                            "protoKeyword": null,
                                            "staticKeyword": null,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 57,
                                                "end": 61
                                            },
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "start": 61,
                                                        "end": 61
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 61,
                                                    "end": 61
                                                },
                                                "flags": 2097152,
                                                "start": 61,
                                                "end": 61
                                            },
                                            "flags": 2097152,
                                            "start": 57,
                                            "end": 61
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 33,
                                    "end": 63
                                },
                                "flags": 2097152,
                                "start": 33,
                                "end": 63
                            },
                            "flags": 2097152,
                            "start": 30,
                            "end": 63
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 28,
                    "end": 65
                },
                "flags": 2097152,
                "start": 28,
                "end": 65
            },
            "flags": 65,
            "start": 18,
            "end": 65
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 65,
                "end": 70
            },
            "name": {
                "kind": 134299649,
                "text": "T3",
                "rawText": "T3",
                "flags": 96,
                "start": 70,
                "end": 73
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 73,
                "end": 75
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
                                "start": 77,
                                "end": 81
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 82,
                                    "end": 89
                                },
                                "flags": 2097152,
                                "start": 82,
                                "end": 89
                            },
                            "flags": 2097152,
                            "start": 77,
                            "end": 90
                        },
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
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
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 94,
                                        "end": 94
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 94,
                                    "end": 94
                                },
                                "flags": 2097152,
                                "start": 94,
                                "end": 94
                            },
                            "flags": 2097152,
                            "start": 90,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 75,
                    "end": 96
                },
                "flags": 2097152,
                "start": 75,
                "end": 96
            },
            "flags": 65,
            "start": 65,
            "end": 97
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 97,
                "end": 102
            },
            "name": {
                "kind": 134299649,
                "text": "T4",
                "rawText": "T4",
                "flags": 96,
                "start": 102,
                "end": 105
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 105,
                "end": 107
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
                                "start": 109,
                                "end": 113
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 114,
                                    "end": 121
                                },
                                "flags": 2097152,
                                "start": 114,
                                "end": 121
                            },
                            "flags": 2097152,
                            "start": 109,
                            "end": 122
                        },
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
                                "start": 122,
                                "end": 126
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 127,
                                    "end": 134
                                },
                                "flags": 2097152,
                                "start": 127,
                                "end": 134
                            },
                            "flags": 2097152,
                            "start": 122,
                            "end": 135
                        },
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 135,
                                "end": 139
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 139,
                                        "end": 139
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 139,
                                    "end": 139
                                },
                                "flags": 2097152,
                                "start": 139,
                                "end": 139
                            },
                            "flags": 2097152,
                            "start": 135,
                            "end": 139
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 107,
                    "end": 141
                },
                "flags": 2097152,
                "start": 107,
                "end": 141
            },
            "flags": 65,
            "start": 97,
            "end": 142
        }
    ],
    "isModule": false,
    "source": "type T1 = { ... };\ntype T2 = { a: { b: { c: {...}, ... }, ... } }\ntype T3 = { foo: number, ... };\ntype T4 = { foo: number, bar: string, ... };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 142
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 15, end: 17
✖ Type expected - start: 48, end: 49
✖ Type expected - start: 54, end: 56
✖ Type expected - start: 61, end: 63
✖ Type expected - start: 94, end: 96
✖ Type expected - start: 139, end: 141

```

