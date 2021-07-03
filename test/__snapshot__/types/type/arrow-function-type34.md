# Kataw parser test case

## Input

`````js
type a = (a[a & b][c | d][{a():string}][][][]) => T;
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 311,
                                                "objectType": {
                                                    "kind": 311,
                                                    "objectType": {
                                                        "kind": 311,
                                                        "objectType": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 10,
                                                                "end": 11
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 8,
                                                            "end": 11
                                                        },
                                                        "indexType": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 138,
                                                                "types": [
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 12,
                                                                            "end": 13
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 12,
                                                                        "end": 13
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 96,
                                                                            "start": 15,
                                                                            "end": 17
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 15,
                                                                        "end": 17
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 13,
                                                                "end": 17
                                                            },
                                                            "flags": 2097152,
                                                            "start": 12,
                                                            "end": 17
                                                        },
                                                        "flags": 0,
                                                        "start": 11,
                                                        "end": 19
                                                    },
                                                    "indexType": {
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
                                                                        "text": "c",
                                                                        "rawText": "c",
                                                                        "flags": 96,
                                                                        "start": 19,
                                                                        "end": 20
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 19,
                                                                    "end": 20
                                                                },
                                                                {
                                                                    "kind": 144,
                                                                    "typeName": {
                                                                        "kind": 134299649,
                                                                        "text": "d",
                                                                        "rawText": "d",
                                                                        "flags": 96,
                                                                        "start": 22,
                                                                        "end": 24
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 22,
                                                                    "end": 24
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "start": 20,
                                                            "end": 24
                                                        },
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 26
                                                },
                                                "indexType": {
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
                                                                    "start": 27,
                                                                    "end": 28
                                                                },
                                                                "optionalToken": null,
                                                                "type": {
                                                                    "kind": 148,
                                                                    "functionTypeParameterList": {
                                                                        "kind": 282,
                                                                        "parameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 2097152,
                                                                        "start": 29,
                                                                        "end": 29
                                                                    },
                                                                    "returnType": {
                                                                        "kind": 139,
                                                                        "bitwiseOrToken": null,
                                                                        "bitwiseAndToken": null,
                                                                        "type": {
                                                                            "kind": 134234347,
                                                                            "flags": 2097216,
                                                                            "start": 31,
                                                                            "end": 37
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 31,
                                                                        "end": 37
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 28,
                                                                    "end": 37
                                                                },
                                                                "flags": 2097152,
                                                                "start": 27,
                                                                "end": 37
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 26,
                                                        "end": 38
                                                    },
                                                    "flags": 2097152,
                                                    "start": 26,
                                                    "end": 38
                                                },
                                                "flags": 0,
                                                "start": 11,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 41
                                        },
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 43
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 45
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 46
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 46,
                        "end": 49
                    },
                    "returnType": {
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
                                "start": 49,
                                "end": 51
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 49,
                            "end": 51
                        },
                        "flags": 2097152,
                        "start": 49,
                        "end": 51
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 51
                },
                "flags": 2097152,
                "start": 8,
                "end": 51
            },
            "flags": 64,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b][c | d][{a():string}][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

type a = (a[ a & b][ c | d][ { a(): string }][][][]) => T

```

### Diagnostics

```javascript
✔ No errors
```

