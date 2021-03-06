# Kataw parser test case

## Input

`````js
type O1 = {...{p:T}|{q:U}};

type UnsealedInUnion = Union1 | Union2 | typeof y;
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
                "text": "O1",
                "rawText": "O1",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 11,
                                "end": 14
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
                                                        "start": 15,
                                                        "end": 16
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
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 17,
                                                                "end": 18
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 18
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 19
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
                                                        "text": "q",
                                                        "rawText": "q",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 22
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
                                                                "text": "U",
                                                                "rawText": "U",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 23,
                                                                "end": 24
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 23,
                                                            "end": 24
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 25
                                        }
                                    ],
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 25
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 26
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 9,
                "end": 26
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "name": {
                "kind": 134299649,
                "text": "UnsealedInUnion",
                "rawText": "UnsealedInUnion",
                "flags": 96,
                "transformFlags": 0,
                "start": 33,
                "end": 49
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 49,
                "end": 51
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Union1",
                                "rawText": "Union1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 58
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 58
                        },
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Union2",
                                "rawText": "Union2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 67
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 67
                        },
                        {
                            "kind": 134299891,
                            "typeOfKeyword": {
                                "kind": 138477613,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 76
                            },
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 78
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 78
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 78
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 78
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 51,
                "end": 78
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 27,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "type O1 = {...{p:T}|{q:U}};\n\ntype UnsealedInUnion = Union1 | Union2 | typeof y;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
type O1 = { ...{ p: T } | { q: U } }
type UnsealedInUnion = Union1 | Union2 | typeof y

```

### Diagnostics

```javascript
✔ No errors
```

