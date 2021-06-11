# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [((x) => T)]))))) => T;
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
                    "start": 39,
                    "end": 42
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 260,
                            "type": {
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
                                                                    "start": 18,
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
                                                                                    "start": 24,
                                                                                    "end": 26
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
                                                                                "start": 24,
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
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 17,
                                                        "end": 34
                                                    },
                                                    "flags": 0,
                                                    "start": 17,
                                                    "end": 35
                                                },
                                                "flags": 0,
                                                "start": 15,
                                                "end": 36
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 13,
                                        "end": 36
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 36
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 38
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 42
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 42,
                        "end": 44
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 42,
                    "end": 44
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [((x) => T)]))))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

