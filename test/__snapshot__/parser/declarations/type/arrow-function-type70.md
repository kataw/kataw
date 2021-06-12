# Kataw parser test case

## Input

`````js
type a = (((symbol[][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "start": 72,
                    "end": 75
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 66,
                                "end": 69
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 60,
                                            "end": 63
                                        },
                                        "parameters": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 136,
                                                    "type": {
                                                        "kind": 136,
                                                        "type": {
                                                            "kind": 136,
                                                            "type": {
                                                                "kind": 136,
                                                                "type": {
                                                                    "kind": 134234343,
                                                                    "flags": 64,
                                                                    "start": 12,
                                                                    "end": 18
                                                                },
                                                                "flags": 0,
                                                                "start": 19,
                                                                "end": 20
                                                            },
                                                            "flags": 0,
                                                            "start": 21,
                                                            "end": 22
                                                        },
                                                        "flags": 0,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    "flags": 0,
                                                    "start": 25,
                                                    "end": 26
                                                },
                                                {
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 54,
                                                        "end": 57
                                                    },
                                                    "parameters": {
                                                        "kind": 279,
                                                        "parameters": [
                                                            {
                                                                "kind": 261,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 48,
                                                                    "end": 51
                                                                },
                                                                "parameters": {
                                                                    "kind": 279,
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
                                                                                        "start": 31,
                                                                                        "end": 32
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 0,
                                                                                    "start": 28,
                                                                                    "end": 32
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
                                                                                                    "start": 40,
                                                                                                    "end": 43
                                                                                                },
                                                                                                "parameters": {
                                                                                                    "kind": 279,
                                                                                                    "parameters": [
                                                                                                        {
                                                                                                            "kind": 144,
                                                                                                            "id": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "x",
                                                                                                                "rawText": "x",
                                                                                                                "flags": 96,
                                                                                                                "start": 38,
                                                                                                                "end": 39
                                                                                                            },
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 0,
                                                                                                            "start": 36,
                                                                                                            "end": 39
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 36,
                                                                                                    "end": 43
                                                                                                },
                                                                                                "returnType": {
                                                                                                    "kind": 144,
                                                                                                    "id": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "T",
                                                                                                        "rawText": "T",
                                                                                                        "flags": 96,
                                                                                                        "start": 43,
                                                                                                        "end": 45
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "flags": 0,
                                                                                                    "start": 43,
                                                                                                    "end": 45
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 0,
                                                                                                "start": 36,
                                                                                                "end": 45
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "start": 36,
                                                                                            "end": 46
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "start": 34,
                                                                                    "end": 47
                                                                                }
                                                                            ],
                                                                            "flags": 0,
                                                                            "start": 32,
                                                                            "end": 47
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 28,
                                                                    "end": 51
                                                                },
                                                                "returnType": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 51,
                                                                        "end": 53
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 51,
                                                                    "end": 53
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 28,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 28,
                                                        "end": 57
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 57,
                                                            "end": 59
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 57,
                                                        "end": 59
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 28,
                                                    "end": 59
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 26,
                                            "end": 59
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
                                            "flags": 0,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 65
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
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
                                "flags": 0,
                                "start": 69,
                                "end": 71
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 71
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 75
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
                    "flags": 0,
                    "start": 75,
                    "end": 77
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 77
            },
            "flags": 16,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

