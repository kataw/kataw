# Kataw parser test case

## Input

`````js
type a = (((symbol[{():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 83,
                    "end": 86
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 77,
                                "end": 80
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "parameters": {
                                            "kind": 144,
                                            "id": {
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
                                                                        "kind": 134299649,
                                                                        "text": "symbol",
                                                                        "rawText": "symbol",
                                                                        "flags": 96,
                                                                        "start": 12,
                                                                        "end": 18
                                                                    },
                                                                    "indexType": {
                                                                        "kind": 134234353,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 196,
                                                                                "protoKeyword": null,
                                                                                "typeParameter": null,
                                                                                "value": {
                                                                                    "kind": 208,
                                                                                    "parameters": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 21,
                                                                                    "end": 21
                                                                                },
                                                                                "staticToken": null,
                                                                                "returnType": {
                                                                                    "kind": 134234347,
                                                                                    "flags": 64,
                                                                                    "start": 23,
                                                                                    "end": 29
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 20,
                                                                                "end": 29
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "start": 19,
                                                                        "end": 30
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 19,
                                                                    "end": 32
                                                                },
                                                                "flags": 0,
                                                                "start": 32,
                                                                "end": 33
                                                            },
                                                            "flags": 0,
                                                            "start": 34,
                                                            "end": 35
                                                        },
                                                        "flags": 0,
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    {
                                                        "kind": 261,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 65,
                                                            "end": 68
                                                        },
                                                        "parameters": {
                                                            "kind": 279,
                                                            "parameters": [
                                                                {
                                                                    "kind": 261,
                                                                    "arrowToken": {
                                                                        "kind": 10,
                                                                        "flags": 64,
                                                                        "start": 59,
                                                                        "end": 62
                                                                    },
                                                                    "parameters": {
                                                                        "kind": 279,
                                                                        "parameters": [
                                                                            {
                                                                                "kind": 138,
                                                                                "types": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "y",
                                                                                        "rawText": "y",
                                                                                        "flags": 96,
                                                                                        "start": 42,
                                                                                        "end": 43
                                                                                    },
                                                                                    {
                                                                                        "kind": 147,
                                                                                        "elementTypes": [
                                                                                            {
                                                                                                "kind": 260,
                                                                                                "type": {
                                                                                                    "kind": 261,
                                                                                                    "arrowToken": {
                                                                                                        "kind": 10,
                                                                                                        "flags": 64,
                                                                                                        "start": 51,
                                                                                                        "end": 54
                                                                                                    },
                                                                                                    "parameters": {
                                                                                                        "kind": 279,
                                                                                                        "parameters": [
                                                                                                            {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "x",
                                                                                                                "rawText": "x",
                                                                                                                "flags": 96,
                                                                                                                "start": 49,
                                                                                                                "end": 50
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "start": 47,
                                                                                                        "end": 54
                                                                                                    },
                                                                                                    "returnType": {
                                                                                                        "kind": 144,
                                                                                                        "id": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "T",
                                                                                                            "rawText": "T",
                                                                                                            "flags": 96,
                                                                                                            "start": 54,
                                                                                                            "end": 56
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 0,
                                                                                                        "start": 54,
                                                                                                        "end": 56
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "flags": 0,
                                                                                                    "start": 47,
                                                                                                    "end": 56
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "start": 47,
                                                                                                "end": 57
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "start": 45,
                                                                                        "end": 58
                                                                                    }
                                                                                ],
                                                                                "flags": 0,
                                                                                "start": 43,
                                                                                "end": 58
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 62
                                                                    },
                                                                    "returnType": {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 62,
                                                                            "end": 64
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 0,
                                                                        "start": 62,
                                                                        "end": 64
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 39,
                                                                    "end": 64
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 39,
                                                            "end": 68
                                                        },
                                                        "returnType": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "start": 68,
                                                                "end": 70
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "start": 68,
                                                            "end": 70
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 39,
                                                        "end": 70
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 37,
                                                "end": 70
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 11,
                                            "end": 70
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 74,
                                                "end": 76
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 74,
                                            "end": 76
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 76
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 80
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 80,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 80,
                                "end": 82
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 82
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 86
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 86,
                        "end": 88
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 86,
                    "end": 88
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 88
            },
            "flags": 16,
            "start": 0,
            "end": 89
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

