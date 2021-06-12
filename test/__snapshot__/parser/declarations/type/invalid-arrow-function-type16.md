# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [((x => T)]) => T) => T) => T) => T) => T;
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
                    "start": 58,
                    "end": 61
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 52,
                                "end": 55
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 46,
                                            "end": 49
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
                                                        "start": 40,
                                                        "end": 43
                                                    },
                                                    "parameters": {
                                                        "kind": 279,
                                                        "parameters": [
                                                            {
                                                                "kind": 261,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 34,
                                                                    "end": 37
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
                                                                                    "kind": 147,
                                                                                    "elementTypes": [
                                                                                        {
                                                                                            "kind": 260,
                                                                                            "type": {
                                                                                                "kind": 261,
                                                                                                "arrowToken": {
                                                                                                    "kind": 10,
                                                                                                    "flags": 64,
                                                                                                    "start": 26,
                                                                                                    "end": 29
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
                                                                                                                "start": 25,
                                                                                                                "end": 26
                                                                                                            },
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 0,
                                                                                                            "start": 23,
                                                                                                            "end": 26
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 23,
                                                                                                    "end": 29
                                                                                                },
                                                                                                "returnType": {
                                                                                                    "kind": 144,
                                                                                                    "id": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "T",
                                                                                                        "rawText": "T",
                                                                                                        "flags": 96,
                                                                                                        "start": 29,
                                                                                                        "end": 31
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "flags": 0,
                                                                                                    "start": 29,
                                                                                                    "end": 31
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 0,
                                                                                                "start": 23,
                                                                                                "end": 31
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "start": 23,
                                                                                            "end": 32
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "start": 21,
                                                                                    "end": 33
                                                                                }
                                                                            ],
                                                                            "flags": 0,
                                                                            "start": 19,
                                                                            "end": 33
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 15,
                                                                    "end": 37
                                                                },
                                                                "returnType": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 37,
                                                                        "end": 39
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "start": 37,
                                                                    "end": 39
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 15,
                                                                "end": 39
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 15,
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
                                                    "start": 15,
                                                    "end": 45
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 13,
                                            "end": 45
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 49,
                                                "end": 51
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 49,
                                            "end": 51
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 51
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
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
                                "flags": 0,
                                "start": 55,
                                "end": 57
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 57
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
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
                    "flags": 0,
                    "start": 61,
                    "end": 63
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [((x => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

