# Kataw parser test case

## Input

`````js
type a = (a[a & b[a|b|c|d|e]][c][-1][][]) => T;
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
                    "start": 41,
                    "end": 44
                },
                "arrowToken": {
                    "kind": 136,
                    "type": {
                        "kind": 136,
                        "type": {
                            "kind": 268,
                            "objectType": {
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
                                        "flags": 2097152,
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
                                                "flags": 2097152,
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
                                                    "flags": 2097152,
                                                    "start": 15,
                                                    "end": 17
                                                },
                                                "indexType": {
                                                    "kind": 137,
                                                    "types": [
                                                        {
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
                                                            "flags": 2097152,
                                                            "start": 18,
                                                            "end": 19
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "start": 20,
                                                                "end": 21
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 20,
                                                            "end": 21
                                                        },
                                                        {
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
                                                            "flags": 2097152,
                                                            "start": 22,
                                                            "end": 23
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "d",
                                                                "rawText": "d",
                                                                "flags": 96,
                                                                "start": 24,
                                                                "end": 25
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 24,
                                                            "end": 25
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "e",
                                                                "rawText": "e",
                                                                "flags": 96,
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 26,
                                                            "end": 27
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 27
                                                },
                                                "flags": 0,
                                                "start": 18,
                                                "end": 29
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 28
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 30
                                },
                                "indexType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 30,
                                    "end": 31
                                },
                                "flags": 2097152,
                                "start": 30,
                                "end": 33
                            },
                            "indexType": {
                                "kind": 271,
                                "subtractionToken": {
                                    "kind": 134318643,
                                    "flags": 64,
                                    "start": 33,
                                    "end": 34
                                },
                                "text": 1,
                                "flags": 2097216,
                                "start": 33,
                                "end": 35
                            },
                            "flags": 2097152,
                            "start": 33,
                            "end": 37
                        },
                        "flags": 2097152,
                        "start": 37,
                        "end": 38
                    },
                    "flags": 2097152,
                    "start": 39,
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
                    "flags": 2097152,
                    "start": 44,
                    "end": 46
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 46
            },
            "flags": 2097152,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[a|b|c|d|e]][c][-1][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

