# Kataw parser test case

## Input

`````js
type a = (([-1]| q & (x)) => T) => T
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
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 147,
                                                        "elementTypes": [
                                                            {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 313,
                                                                    "subtractionToken": {
                                                                        "kind": 134318643,
                                                                        "flags": 64,
                                                                        "start": 12,
                                                                        "end": 13
                                                                    },
                                                                    "text": 1,
                                                                    "flags": 2097216,
                                                                    "start": 12,
                                                                    "end": 14
                                                                },
                                                                "flags": 2097152,
                                                                "start": 12,
                                                                "end": 14
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 11,
                                                        "end": 15
                                                    },
                                                    {
                                                        "kind": 138,
                                                        "types": [
                                                            {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "q",
                                                                    "rawText": "q",
                                                                    "flags": 96,
                                                                    "start": 16,
                                                                    "end": 18
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 16,
                                                                "end": 18
                                                            },
                                                            {
                                                                "kind": 290,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "typeName": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 22,
                                                                        "end": 23
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 20,
                                                                    "end": 23
                                                                },
                                                                "flags": 2097152,
                                                                "start": 20,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 18,
                                                        "end": 24
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 24
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 28
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 28
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "flags": 2097152,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 31
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 31,
                        "end": 34
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 2097152,
                        "start": 34,
                        "end": 36
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 36
                },
                "flags": 2097152,
                "start": 8,
                "end": 36
            },
            "flags": 2097152,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = (([-1]| q & (x)) => T) => T",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

