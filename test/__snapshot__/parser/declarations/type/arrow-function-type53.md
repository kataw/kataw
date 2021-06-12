# Kataw parser test case

## Input

`````js
type a = (a[a & b[a]][c]) => T;
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
                    "start": 25,
                    "end": 28
                },
                "parameters": {
                    "kind": 268,
                    "objectType": {
                        "kind": 268,
                        "objectType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
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
                            "kind": 138,
                            "types": [
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 13
                                },
                                {
                                    "kind": 268,
                                    "objectType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "indexType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "start": 18,
                                    "end": 21
                                }
                            ],
                            "flags": 0,
                            "start": 13,
                            "end": 20
                        },
                        "flags": 0,
                        "start": 12,
                        "end": 22
                    },
                    "indexType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 22,
                            "end": 23
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 22,
                        "end": 23
                    },
                    "flags": 0,
                    "start": 22,
                    "end": 25
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 28,
                        "end": 30
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 28,
                    "end": 30
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[a]][c]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

