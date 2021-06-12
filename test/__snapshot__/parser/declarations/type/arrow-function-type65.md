# Kataw parser test case

## Input

`````js
type a = (((x | ((y & z) => T) => T) => T) => T) => T;
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
                    "start": 48,
                    "end": 51
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 42,
                                "end": 45
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 36,
                                            "end": 39
                                        },
                                        "parameters": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 30,
                                                        "end": 33
                                                    },
                                                    "parameters": {
                                                        "kind": 279,
                                                        "parameters": [
                                                            {
                                                                "kind": 261,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 24,
                                                                    "end": 27
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
                                                                                        "start": 18,
                                                                                        "end": 19
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 0,
                                                                                    "start": 15,
                                                                                    "end": 19
                                                                                },
                                                                                {
                                                                                    "kind": 144,
                                                                                    "id": {
                                                                                        "kind": 134299649,
                                                                                        "text": "z",
                                                                                        "rawText": "z",
                                                                                        "flags": 96,
                                                                                        "start": 21,
                                                                                        "end": 23
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 0,
                                                                                    "start": 21,
                                                                                    "end": 23
                                                                                }
                                                                            ],
                                                                            "flags": 0,
                                                                            "start": 19,
                                                                            "end": 23
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 15,
                                                                    "end": 27
                                                                },
                                                                "returnType": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 27,
                                                                        "end": 29
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 27,
                                                                    "end": 29
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 15,
                                                                "end": 29
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 15,
                                                        "end": 33
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 15,
                                                    "end": 35
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 13,
                                            "end": 35
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 39,
                                            "end": 41
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 45
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 47
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
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
                "start": 8,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & z) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

