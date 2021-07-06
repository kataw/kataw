# Kataw parser test case

## Input

`````js
type a = (a[a & b][c | d][{a():string}][][][(a[a & b][c | d][{a():string}][][][]) => T]) => T;
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
                "text": "a",
                "rawText": "a",
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
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 311,
                                    "objectType": {
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
                                                                "transformFlags": 0,
                                                                "start": 10,
                                                                "end": 11
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
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
                                                                            "transformFlags": 0,
                                                                            "start": 12,
                                                                            "end": 13
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
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
                                                                            "transformFlags": 0,
                                                                            "start": 15,
                                                                            "end": 17
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 15,
                                                                        "end": 17
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 13,
                                                                "end": 17
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 17
                                                        },
                                                        "flags": 0,
                                                        "transformFlags": 0,
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
                                                                        "transformFlags": 0,
                                                                        "start": 19,
                                                                        "end": 20
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
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
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 24
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 24
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 24
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 0,
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
                                                                    "transformFlags": 0,
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
                                                                        "transformFlags": 0,
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
                                                                            "transformFlags": 0,
                                                                            "start": 31,
                                                                            "end": 37
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 31,
                                                                        "end": 37
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 28,
                                                                    "end": 37
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 27,
                                                                "end": 37
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 38
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 38
                                                },
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 41
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 43
                                    },
                                    "indexType": {
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
                                                                                        "transformFlags": 0,
                                                                                        "start": 45,
                                                                                        "end": 46
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 44,
                                                                                    "end": 46
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
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 47,
                                                                                                    "end": 48
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 2097152,
                                                                                                "transformFlags": 0,
                                                                                                "start": 47,
                                                                                                "end": 48
                                                                                            },
                                                                                            {
                                                                                                "kind": 144,
                                                                                                "typeName": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "b",
                                                                                                    "rawText": "b",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 50,
                                                                                                    "end": 52
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 2097152,
                                                                                                "transformFlags": 0,
                                                                                                "start": 50,
                                                                                                "end": 52
                                                                                            }
                                                                                        ],
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 48,
                                                                                        "end": 52
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 47,
                                                                                    "end": 52
                                                                                },
                                                                                "flags": 0,
                                                                                "transformFlags": 0,
                                                                                "start": 46,
                                                                                "end": 54
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
                                                                                                "transformFlags": 0,
                                                                                                "start": 54,
                                                                                                "end": 55
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 54,
                                                                                            "end": 55
                                                                                        },
                                                                                        {
                                                                                            "kind": 144,
                                                                                            "typeName": {
                                                                                                "kind": 134299649,
                                                                                                "text": "d",
                                                                                                "rawText": "d",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 57,
                                                                                                "end": 59
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 57,
                                                                                            "end": 59
                                                                                        }
                                                                                    ],
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 55,
                                                                                    "end": 59
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 54,
                                                                                "end": 59
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 0,
                                                                            "start": 46,
                                                                            "end": 61
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
                                                                                            "transformFlags": 0,
                                                                                            "start": 62,
                                                                                            "end": 63
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
                                                                                                "start": 64,
                                                                                                "end": 64
                                                                                            },
                                                                                            "returnType": {
                                                                                                "kind": 139,
                                                                                                "bitwiseOrToken": null,
                                                                                                "bitwiseAndToken": null,
                                                                                                "type": {
                                                                                                    "kind": 134234347,
                                                                                                    "flags": 2097216,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 66,
                                                                                                    "end": 72
                                                                                                },
                                                                                                "flags": 2097152,
                                                                                                "transformFlags": 0,
                                                                                                "start": 66,
                                                                                                "end": 72
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 63,
                                                                                            "end": 72
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 62,
                                                                                        "end": 72
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 61,
                                                                                "end": 73
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 61,
                                                                            "end": 73
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 46,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 76
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 78
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 80
                                                        },
                                                        "optionalToken": null,
                                                        "types": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 81
                                            },
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 81,
                                                "end": 84
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
                                                        "transformFlags": 0,
                                                        "start": 84,
                                                        "end": 86
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 84,
                                                    "end": 86
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 86
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 86
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 86
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 88
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 88
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 88
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 91
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
                                "transformFlags": 0,
                                "start": 91,
                                "end": 93
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 93
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 91,
                        "end": 93
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 93
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 93
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b][c | d][{a():string}][][][(a[a & b][c | d][{a():string}][][][]) => T]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

type a = (a[a & b][c | d][{ a(): string }][][][(a[a & b][c | d][{
  a(): string
}][][][]) =>  T]) =>  T
```

### Diagnostics

```javascript
✔ No errors
```

