# Kataw parser test case

## Input

`````js
type a = (a[a & b[a]][c][-1][][]) => T;
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
                                                                    "kind": 311,
                                                                    "objectType": {
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
                                                                    "indexType": {
                                                                        "kind": 139,
                                                                        "bitwiseOrToken": null,
                                                                        "bitwiseAndToken": null,
                                                                        "type": {
                                                                            "kind": 144,
                                                                            "typeName": {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 96,
                                                                                "start": 18,
                                                                                "end": 19
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 18,
                                                                            "end": 19
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 18,
                                                                        "end": 19
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 17,
                                                                    "end": 21
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "start": 13,
                                                            "end": 20
                                                        },
                                                        "flags": 2097152,
                                                        "start": 12,
                                                        "end": 20
                                                    },
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 22
                                                },
                                                "indexType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 22,
                                                            "end": 23
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "flags": 2097152,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                "flags": 0,
                                                "start": 11,
                                                "end": 25
                                            },
                                            "indexType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 313,
                                                    "subtractionToken": {
                                                        "kind": 134318643,
                                                        "flags": 64,
                                                        "start": 25,
                                                        "end": 26
                                                    },
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 2097216,
                                                    "start": 25,
                                                    "end": 27
                                                },
                                                "flags": 2097152,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 0,
                                            "start": 11,
                                            "end": 29
                                        },
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 30
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 32
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 33
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 33,
                        "end": 36
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
                                "start": 36,
                                "end": 38
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 36,
                            "end": 38
                        },
                        "flags": 2097152,
                        "start": 36,
                        "end": 38
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 38
                },
                "flags": 2097152,
                "start": 8,
                "end": 38
            },
            "flags": 64,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[a]][c][-1][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  type a = (a[ a & b[ a]][ c][ -1][][]) => T

```

### Diagnostics

```javascript
✔ No errors
```

