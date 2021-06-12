# Kataw parser test case

## Input

`````js
type a = (((symbol[{():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "start": 83,
                    "end": 86
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 77,
                                "end": 80
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "parameters": {
                                            "kind": 134234343,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 70
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 74,
                                                "end": 76
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 74,
                                            "end": 76
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 76
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 80
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 80,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 80,
                                "end": 82
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 82
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 86
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 86,
                        "end": 88
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 86,
                    "end": 88
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 88
            },
            "flags": 16,
            "start": 0,
            "end": 89
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

