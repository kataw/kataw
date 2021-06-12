# Kataw parser test case

## Input

`````js
type a = (((symbol[][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "start": 72,
                    "end": 75
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 66,
                                "end": 69
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 60,
                                            "end": 63
                                        },
                                        "parameters": {
                                            "kind": 134234343,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 59
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 63,
                                                "end": 65
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 65
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 69
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 69,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 69,
                                "end": 71
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 71
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 75
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 75,
                        "end": 77
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 75,
                    "end": 77
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 77
            },
            "flags": 16,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

