# Kataw parser test case

## Input

`````js
type a = (b[([x])=> c] | d) => c;
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
                "kind": 261,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 27,
                    "end": 30
                },
                "arrowToken": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 268,
                            "objectType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 11
                            },
                            "indexType": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 19
                                },
                                "arrowToken": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 147,
                                            "elementTypes": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 15
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 14,
                                                    "end": 15
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 13,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 19
                                },
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 12,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 12,
                            "end": 24
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        }
                    ],
                    "flags": 2097152,
                    "start": 22,
                    "end": 26
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 30,
                        "end": 32
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 30,
                    "end": 32
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 32
            },
            "flags": 2097152,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "type a = (b[([x])=> c] | d) => c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

