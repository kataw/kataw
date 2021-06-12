# Kataw parser test case

## Input

`````js
type a = (b[([x])=> c]) => c;
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
                    "start": 23,
                    "end": 26
                },
                "parameters": {
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
                        "flags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "indexType": {
                        "kind": 261,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 17,
                            "end": 19
                        },
                        "parameters": {
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
                                            "flags": 0,
                                            "start": 14,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
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
                            "flags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 12,
                        "end": 21
                    },
                    "flags": 0,
                    "start": 12,
                    "end": 23
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type a = (b[([x])=> c]) => c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

