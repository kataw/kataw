# Kataw parser test case

## Input

`````js
type a = (bj[c] & a | b) => T;
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
                    "start": 24,
                    "end": 27
                },
                "parameters": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 138,
                            "types": [
                                {
                                    "kind": 268,
                                    "objectType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "bj",
                                            "rawText": "bj",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "indexType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "start": 13,
                                    "end": 17
                                },
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 19
                                }
                            ],
                            "flags": 0,
                            "start": 15,
                            "end": 19
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
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
                "start": 8,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c] & a | b) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

