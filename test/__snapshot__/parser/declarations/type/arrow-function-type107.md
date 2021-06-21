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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 23,
                        "end": 26
                    },
                    "arrowToken": {
                        "kind": 311,
                        "objectType": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
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
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 19
                                },
                                "arrowToken": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 147,
                                                "elementTypes": [
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 14,
                                                                "end": 15
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 14,
                                                            "end": 15
                                                        },
                                                        "flags": 2097152,
                                                        "start": 14,
                                                        "end": 15
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 16
                                            },
                                            "flags": 2097152,
                                            "start": 13,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 19
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 12,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 12,
                            "end": 21
                        },
                        "flags": 0,
                        "start": 11,
                        "end": 23
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 26,
                            "end": 28
                        },
                        "flags": 2097152,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 28
                },
                "flags": 2097152,
                "start": 8,
                "end": 28
            },
            "flags": 2097152,
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

