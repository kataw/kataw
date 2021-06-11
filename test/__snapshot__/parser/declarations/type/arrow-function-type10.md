# Kataw parser test case

## Input

`````js
type X = (x | y & z, q[t]) => T;
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
                "text": "X",
                "rawText": "X",
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
                    "start": 26,
                    "end": 29
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 144,
                                "id": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
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
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
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
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 11,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 8,
                                "end": 19
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 0,
                            "start": 8,
                            "end": 19
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 268,
                                "objectType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "q",
                                        "rawText": "q",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "indexType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "t",
                                        "rawText": "t",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "flags": 0,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 25
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
                "start": 8,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type X = (x | y & z, q[t]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

