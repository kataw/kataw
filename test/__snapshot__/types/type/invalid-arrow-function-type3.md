# Kataw parser test case

## Input

`````js
type a = (a[a & b[]][c | d][(x) => T][][][]) => T;
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
                                                                        "kind": 136,
                                                                        "type": {
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
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 17,
                                                                        "end": 19
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 13,
                                                                "end": 19
                                                            },
                                                            "flags": 2097152,
                                                            "start": 12,
                                                            "end": 19
                                                        },
                                                        "flags": 0,
                                                        "start": 11,
                                                        "end": 21
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
                                                                        "start": 21,
                                                                        "end": 22
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 21,
                                                                    "end": 22
                                                                },
                                                                {
                                                                    "kind": 144,
                                                                    "typeName": {
                                                                        "kind": 134299649,
                                                                        "text": "d",
                                                                        "rawText": "d",
                                                                        "flags": 96,
                                                                        "start": 24,
                                                                        "end": 26
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 24,
                                                                    "end": 26
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "start": 22,
                                                            "end": 26
                                                        },
                                                        "flags": 2097152,
                                                        "start": 21,
                                                        "end": 26
                                                    },
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 28
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
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 29,
                                                                            "end": 30
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 28,
                                                                        "end": 30
                                                                    },
                                                                    "optionalToken": null,
                                                                    "types": null,
                                                                    "flags": 2097152,
                                                                    "start": 28,
                                                                    "end": 31
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "start": 28,
                                                            "end": 31
                                                        },
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 31,
                                                            "end": 34
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
                                                                    "start": 34,
                                                                    "end": 36
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 34,
                                                                "end": 36
                                                            },
                                                            "flags": 2097152,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "flags": 2097152,
                                                        "start": 28,
                                                        "end": 36
                                                    },
                                                    "flags": 2097152,
                                                    "start": 28,
                                                    "end": 36
                                                },
                                                "flags": 0,
                                                "start": 11,
                                                "end": 38
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 39
                                        },
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 41
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 43
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 44
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 44,
                        "end": 47
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
                                "start": 47,
                                "end": 49
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 47,
                            "end": 49
                        },
                        "flags": 2097152,
                        "start": 47,
                        "end": 49
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 49
                },
                "flags": 2097152,
                "start": 8,
                "end": 49
            },
            "flags": 64,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[]][c | d][(x) => T][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

type a = (a[a & b[]][c | d][(x) =>  T][][][]) =>  T
```

### Diagnostics

```javascript
✔ No errors
```

