# Kataw parser test case

## Input

`````js
type a = (((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                "end": 6
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
                "kind": 288,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 84,
                    "end": 87
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 288,
                            "arrowTypeParameterList": {
                                "kind": 10,
                                "flags": 64,
                                "start": 78,
                                "end": 81
                            },
                            "arrowToken": {
                                "kind": 292,
                                "parameters": [
                                    {
                                        "kind": 288,
                                        "arrowTypeParameterList": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 72,
                                            "end": 75
                                        },
                                        "arrowToken": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 136,
                                                    "type": {
                                                        "kind": 136,
                                                        "type": {
                                                            "kind": 136,
                                                            "type": {
                                                                "kind": 268,
                                                                "objectType": {
                                                                    "kind": 134234343,
                                                                    "flags": 64,
                                                                    "start": 12,
                                                                    "end": 18
                                                                },
                                                                "indexType": {
                                                                    "kind": 134234353,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 195,
                                                                            "protoKeyword": null,
                                                                            "staticToken": null,
                                                                            "name": null,
                                                                            "key": {
                                                                                "kind": 144,
                                                                                "id": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 21,
                                                                                    "end": 22
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "start": 20,
                                                                                "end": 22
                                                                            },
                                                                            "type": {
                                                                                "kind": 134234347,
                                                                                "flags": 2097216,
                                                                                "start": 24,
                                                                                "end": 30
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 20,
                                                                            "end": 30
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "start": 19,
                                                                    "end": 31
                                                                },
                                                                "flags": 2097152,
                                                                "start": 19,
                                                                "end": 33
                                                            },
                                                            "flags": 2097152,
                                                            "start": 33,
                                                            "end": 34
                                                        },
                                                        "flags": 2097152,
                                                        "start": 35,
                                                        "end": 36
                                                    },
                                                    "flags": 2097152,
                                                    "start": 37,
                                                    "end": 38
                                                },
                                                {
                                                    "kind": 288,
                                                    "arrowTypeParameterList": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 66,
                                                        "end": 69
                                                    },
                                                    "arrowToken": {
                                                        "kind": 292,
                                                        "parameters": [
                                                            {
                                                                "kind": 288,
                                                                "arrowTypeParameterList": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 60,
                                                                    "end": 63
                                                                },
                                                                "arrowToken": {
                                                                    "kind": 292,
                                                                    "parameters": [
                                                                        {
                                                                            "kind": 138,
                                                                            "types": [
                                                                                {
                                                                                    "kind": 144,
                                                                                    "id": {
                                                                                        "kind": 134299649,
                                                                                        "text": "y",
                                                                                        "rawText": "y",
                                                                                        "flags": 96,
                                                                                        "start": 43,
                                                                                        "end": 44
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "start": 40,
                                                                                    "end": 44
                                                                                },
                                                                                {
                                                                                    "kind": 147,
                                                                                    "elementTypes": [
                                                                                        {
                                                                                            "kind": 290,
                                                                                            "type": {
                                                                                                "kind": 288,
                                                                                                "arrowTypeParameterList": {
                                                                                                    "kind": 10,
                                                                                                    "flags": 64,
                                                                                                    "start": 52,
                                                                                                    "end": 55
                                                                                                },
                                                                                                "arrowToken": {
                                                                                                    "kind": 292,
                                                                                                    "parameters": [
                                                                                                        {
                                                                                                            "kind": 144,
                                                                                                            "id": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "x",
                                                                                                                "rawText": "x",
                                                                                                                "flags": 96,
                                                                                                                "start": 50,
                                                                                                                "end": 51
                                                                                                            },
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 2097152,
                                                                                                            "start": 48,
                                                                                                            "end": 51
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 2097152,
                                                                                                    "start": 48,
                                                                                                    "end": 55
                                                                                                },
                                                                                                "returnType": {
                                                                                                    "kind": 144,
                                                                                                    "id": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "T",
                                                                                                        "rawText": "T",
                                                                                                        "flags": 96,
                                                                                                        "start": 55,
                                                                                                        "end": 57
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "flags": 2097152,
                                                                                                    "start": 55,
                                                                                                    "end": 57
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 2097152,
                                                                                                "start": 48,
                                                                                                "end": 57
                                                                                            },
                                                                                            "flags": 2097152,
                                                                                            "start": 48,
                                                                                            "end": 58
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 2097152,
                                                                                    "start": 46,
                                                                                    "end": 59
                                                                                }
                                                                            ],
                                                                            "flags": 2097152,
                                                                            "start": 44,
                                                                            "end": 59
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "start": 40,
                                                                    "end": 63
                                                                },
                                                                "returnType": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 63,
                                                                        "end": 65
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 63,
                                                                    "end": 65
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 40,
                                                                "end": 65
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 40,
                                                        "end": 69
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 69,
                                                            "end": 71
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 69,
                                                        "end": 71
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 40,
                                                    "end": 71
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 38,
                                            "end": 71
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 75,
                                                "end": 77
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 75,
                                            "end": 77
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 77
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 81
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 81,
                                    "end": 83
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 81,
                                "end": 83
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 83
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 87
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 87,
                        "end": 89
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 87,
                    "end": 89
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 89
            },
            "flags": 2097152,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

