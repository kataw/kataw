# Kataw parser test case

## Input

`````js
type a = ((((() => T) => T) => T) => T) => T;
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
                    "start": 39,
                    "end": 42
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
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
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 21,
                                                        "end": 24
                                                    },
                                                    "parameters": {
                                                        "kind": 279,
                                                        "parameters": [
                                                            {
                                                                "kind": 261,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 15,
                                                                    "end": 18
                                                                },
                                                                "parameters": {
                                                                    "kind": 208,
                                                                    "parameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 14,
                                                                    "end": 14
                                                                },
                                                                "returnType": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 18,
                                                                        "end": 20
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 18,
                                                                    "end": 20
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 13,
                                                                "end": 20
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 11,
                                                        "end": 24
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 24,
                                                        "end": 26
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 26
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 11,
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
                                        "start": 11,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
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
                            "start": 8,
                            "end": 38
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 42
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
                "start": 8,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "type a = ((((() => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

