# Kataw parser test case

## Input

`````js
type a = (((symbol[{a:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;

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
                    "start": 82,
                    "end": 85
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 288,
                            "arrowTypeParameterList": {
                                "kind": 10,
                                "flags": 64,
                                "start": 76,
                                "end": 79
                            },
                            "arrowToken": {
                                "kind": 292,
                                "parameters": [
                                    {
                                        "kind": 288,
                                        "arrowTypeParameterList": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 70,
                                            "end": 73
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
                                                                "kind": 311,
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
                                                                            "kind": 193,
                                                                            "protoKeyword": null,
                                                                            "staticToken": null,
                                                                            "getKeyword": null,
                                                                            "setKeyword": null,
                                                                            "key": {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 96,
                                                                                "start": 20,
                                                                                "end": 21
                                                                            },
                                                                            "optionalToken": null,
                                                                            "value": {
                                                                                "kind": 134234347,
                                                                                "flags": 2097216,
                                                                                "start": 22,
                                                                                "end": 28
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 20,
                                                                            "end": 28
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "start": 19,
                                                                    "end": 29
                                                                },
                                                                "flags": 2097152,
                                                                "start": 19,
                                                                "end": 31
                                                            },
                                                            "flags": 2097152,
                                                            "start": 31,
                                                            "end": 32
                                                        },
                                                        "flags": 2097152,
                                                        "start": 33,
                                                        "end": 34
                                                    },
                                                    "flags": 2097152,
                                                    "start": 35,
                                                    "end": 36
                                                },
                                                {
                                                    "kind": 288,
                                                    "arrowTypeParameterList": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 64,
                                                        "end": 67
                                                    },
                                                    "arrowToken": {
                                                        "kind": 292,
                                                        "parameters": [
                                                            {
                                                                "kind": 288,
                                                                "arrowTypeParameterList": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 58,
                                                                    "end": 61
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
                                                                                        "start": 41,
                                                                                        "end": 42
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "start": 38,
                                                                                    "end": 42
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
                                                                                                    "start": 50,
                                                                                                    "end": 53
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
                                                                                                                "start": 48,
                                                                                                                "end": 49
                                                                                                            },
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 2097152,
                                                                                                            "start": 46,
                                                                                                            "end": 49
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 2097152,
                                                                                                    "start": 46,
                                                                                                    "end": 53
                                                                                                },
                                                                                                "returnType": {
                                                                                                    "kind": 144,
                                                                                                    "id": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "T",
                                                                                                        "rawText": "T",
                                                                                                        "flags": 96,
                                                                                                        "start": 53,
                                                                                                        "end": 55
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "flags": 2097152,
                                                                                                    "start": 53,
                                                                                                    "end": 55
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 2097152,
                                                                                                "start": 46,
                                                                                                "end": 55
                                                                                            },
                                                                                            "flags": 2097152,
                                                                                            "start": 46,
                                                                                            "end": 56
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 2097152,
                                                                                    "start": 44,
                                                                                    "end": 57
                                                                                }
                                                                            ],
                                                                            "flags": 2097152,
                                                                            "start": 42,
                                                                            "end": 57
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "start": 38,
                                                                    "end": 61
                                                                },
                                                                "returnType": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 61,
                                                                        "end": 63
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 61,
                                                                    "end": 63
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 38,
                                                                "end": 63
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 38,
                                                        "end": 67
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 67,
                                                            "end": 69
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 67,
                                                        "end": 69
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 38,
                                                    "end": 69
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 36,
                                            "end": 69
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 73,
                                                "end": 75
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 73,
                                            "end": 75
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 79
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 81
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 79,
                                "end": 81
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 81
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 85
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 85,
                        "end": 87
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 85,
                    "end": 87
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 87
            },
            "flags": 2097152,
            "start": 0,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{a:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;\n",
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

