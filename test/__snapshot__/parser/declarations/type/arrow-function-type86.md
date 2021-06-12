# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [((x) => T)]) => T) => T))) => T;
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
                    "start": 49,
                    "end": 52
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 260,
                            "type": {
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
                                            "start": 41,
                                            "end": 44
                                        },
                                        "parameters": {
                                            "kind": 279,
                                            "parameters": [
                                                {
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 35,
                                                        "end": 38
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
                                                                                        "start": 27,
                                                                                        "end": 30
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
                                                                                    "start": 23,
                                                                                    "end": 32
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 23,
                                                                                "end": 33
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "start": 21,
                                                                        "end": 34
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "start": 19,
                                                                "end": 34
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 15,
                                                        "end": 38
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 38,
                                                            "end": 40
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 15,
                                                    "end": 40
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 15,
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
                                            "flags": 0,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 15,
                                        "end": 46
                                    }
                                ],
                                "flags": 0,
                                "start": 13,
                                "end": 46
                            },
                            "flags": 0,
                            "start": 11,
                            "end": 47
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 52
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 52,
                        "end": 54
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 52,
                    "end": 54
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [((x) => T)]) => T) => T))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

