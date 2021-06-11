# Kataw parser test case

## Input

`````js
type a = (a[][][][][][]) => T;
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
                    "kind": 144,
                    "id": {
                        "kind": 136,
                        "type": {
                            "kind": 136,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "flags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 21
                        },
                        "flags": 0,
                        "start": 22,
                        "end": 23
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
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
    "source": "type a = (a[][][][][][]) => T;",
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

