# Kataw parser test case

## Input

`````js
type a = (((symbol[ | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "start": 65,
                    "end": 68
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 288,
                            "arrowTypeParameterList": {
                                "kind": 10,
                                "flags": 64,
                                "start": 59,
                                "end": 62
                            },
                            "arrowToken": {
                                "kind": 292,
                                "parameters": [
                                    {
                                        "kind": 288,
                                        "arrowTypeParameterList": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 53,
                                            "end": 56
                                        },
                                        "arrowToken": {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 134234343,
                                                "flags": 64,
                                                "start": 12,
                                                "end": 18
                                            },
                                            "indexType": {
                                                "kind": 288,
                                                "arrowTypeParameterList": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 47,
                                                    "end": 50
                                                },
                                                "arrowToken": {
                                                    "kind": 292,
                                                    "parameters": [
                                                        {
                                                            "kind": 288,
                                                            "arrowTypeParameterList": {
                                                                "kind": 10,
                                                                "flags": 64,
                                                                "start": 41,
                                                                "end": 44
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
                                                                                    "start": 24,
                                                                                    "end": 25
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "start": 21,
                                                                                "end": 25
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
                                                                                                "start": 33,
                                                                                                "end": 36
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
                                                                                                            "start": 31,
                                                                                                            "end": 32
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 29,
                                                                                                        "end": 32
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 2097152,
                                                                                                "start": 29,
                                                                                                "end": 36
                                                                                            },
                                                                                            "returnType": {
                                                                                                "kind": 144,
                                                                                                "id": {
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
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "start": 29,
                                                                                            "end": 38
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 29,
                                                                                        "end": 39
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 2097152,
                                                                                "start": 27,
                                                                                "end": 40
                                                                            }
                                                                        ],
                                                                        "flags": 2097152,
                                                                        "start": 25,
                                                                        "end": 40
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 2097152,
                                                                "start": 21,
                                                                "end": 44
                                                            },
                                                            "returnType": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 96,
                                                                    "start": 44,
                                                                    "end": 46
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 44,
                                                                "end": 46
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 21,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 21,
                                                    "end": 50
                                                },
                                                "returnType": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 50,
                                                        "end": 52
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 21,
                                                "end": 52
                                            },
                                            "flags": 0,
                                            "start": 18,
                                            "end": 53
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 56,
                                                "end": 58
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 58
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
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
                                "flags": 2097152,
                                "start": 62,
                                "end": 64
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 64
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
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
                    "flags": 2097152,
                    "start": 68,
                    "end": 70
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 70
            },
            "flags": 2097152,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[ | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 52, end: 53

```

