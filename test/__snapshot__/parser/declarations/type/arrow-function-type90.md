# Kataw parser test case

## Input

`````js
type a = (((x | (y & [((x) => T)])))) => T;
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
                    "start": 37,
                    "end": 40
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 260,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        {
                                            "kind": 260,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 138,
                                                    "types": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 18
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
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 24,
                                                                                    "end": 25
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 22,
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
                                                                        "start": 22,
                                                                        "end": 31
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 22,
                                                                    "end": 32
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "start": 20,
                                                            "end": 33
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "start": 18,
                                                    "end": 33
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 15,
                                                "end": 33
                                            },
                                            "flags": 0,
                                            "start": 15,
                                            "end": 34
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 13,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 11,
                                "end": 34
                            },
                            "flags": 0,
                            "start": 11,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 40
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 40,
                        "end": 42
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 40,
                    "end": 42
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "type a = (((x | (y & [((x) => T)])))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

