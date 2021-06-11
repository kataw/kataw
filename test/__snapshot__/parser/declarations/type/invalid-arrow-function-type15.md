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
            "type": {
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
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 53,
                                            "end": 56
                                        },
                                        "parameters": {
                                            "kind": 144,
                                            "id": {
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
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 47,
                                                        "end": 50
                                                    },
                                                    "parameters": {
                                                        "kind": 279,
                                                        "parameters": [
                                                            {
                                                                "kind": 261,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 41,
                                                                    "end": 44
                                                                },
                                                                "parameters": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 138,
                                                                        "types": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 24,
                                                                                "end": 25
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
                                                                                                "start": 33,
                                                                                                "end": 36
                                                                                            },
                                                                                            "parameters": {
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
                                                                                                "flags": 0,
                                                                                                "start": 30,
                                                                                                "end": 32
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
                                                                                                "flags": 0,
                                                                                                "start": 36,
                                                                                                "end": 38
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 0,
                                                                                            "start": 30,
                                                                                            "end": 38
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "start": 29,
                                                                                        "end": 39
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "start": 27,
                                                                                "end": 40
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "start": 25,
                                                                        "end": 40
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 23,
                                                                    "end": 40
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
                                                                    "flags": 0,
                                                                    "start": 44,
                                                                    "end": 46
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 23,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
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
                                                        "flags": 0,
                                                        "start": 50,
                                                        "end": 52
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 21,
                                                    "end": 52
                                                },
                                                "flags": 0,
                                                "start": 19,
                                                "end": 53
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 11,
                                            "end": 52
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
                                            "flags": 0,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 58
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
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
                            "start": 10,
                            "end": 64
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
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
                    "flags": 0,
                    "start": 68,
                    "end": 70
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 70
            },
            "flags": 16,
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

