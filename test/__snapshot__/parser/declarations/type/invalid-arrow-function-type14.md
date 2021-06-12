# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [()]) => T) => T) => T) => T) => T;
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
                    "start": 51,
                    "end": 54
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 45,
                                "end": 48
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "parameters": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    {
                                                        "kind": 261,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 33,
                                                            "end": 36
                                                        },
                                                        "parameters": {
                                                            "kind": 279,
                                                            "parameters": [
                                                                {
                                                                    "kind": 261,
                                                                    "arrowToken": {
                                                                        "kind": 10,
                                                                        "flags": 64,
                                                                        "start": 27,
                                                                        "end": 30
                                                                    },
                                                                    "parameters": {
                                                                        "kind": 279,
                                                                        "parameters": [
                                                                            {
                                                                                "kind": 144,
                                                                                "id": {
                                                                                    "kind": 138,
                                                                                    "types": [
                                                                                        {
                                                                                            "kind": 134299649,
                                                                                            "text": "y",
                                                                                            "rawText": "y",
                                                                                            "flags": 96,
                                                                                            "start": 18,
                                                                                            "end": 19
                                                                                        },
                                                                                        {
                                                                                            "kind": 147,
                                                                                            "elementTypes": [
                                                                                                {
                                                                                                    "kind": 261,
                                                                                                    "arrowToken": null,
                                                                                                    "parameters": {
                                                                                                        "kind": 208,
                                                                                                        "parameters": [],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "start": 24,
                                                                                                        "end": 24
                                                                                                    },
                                                                                                    "returnType": {
                                                                                                        "kind": 144,
                                                                                                        "id": {
                                                                                                            "kind": 16637,
                                                                                                            "text": "",
                                                                                                            "flags": 64,
                                                                                                            "start": 25,
                                                                                                            "end": 25
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 0,
                                                                                                        "start": 25,
                                                                                                        "end": 25
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "flags": 0,
                                                                                                    "start": 23,
                                                                                                    "end": 25
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 0,
                                                                                            "start": 21,
                                                                                            "end": 26
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "start": 19,
                                                                                    "end": 26
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 0,
                                                                                "start": 15,
                                                                                "end": 26
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 15,
                                                                        "end": 30
                                                                    },
                                                                    "returnType": {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 30,
                                                                            "end": 32
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 0,
                                                                        "start": 30,
                                                                        "end": 32
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 15,
                                                                    "end": 32
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 15,
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
                                                            "flags": 0,
                                                            "start": 36,
                                                            "end": 38
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 15,
                                                        "end": 38
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 13,
                                                "end": 38
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 11,
                                            "end": 38
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 44
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 42,
                                            "end": 44
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 44
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 48
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 48,
                                "end": 50
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 50
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
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
                "start": 8,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [()]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 25, end: 26

```

