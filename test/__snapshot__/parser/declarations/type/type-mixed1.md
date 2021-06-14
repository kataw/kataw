# Kataw parser test case

## Input

`````js
type x<y> = z<<q>(r) => s>
`````

## Options

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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 7,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 7,
                    "end": 8
                },
                "flags": 2097152,
                "start": 6,
                "end": 9
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 9,
                "end": 11
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 288,
                                        "arrowTypeParameterList": {
                                            "kind": 292,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "arrowToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 288,
                                                "arrowTypeParameterList": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 23
                                                },
                                                "arrowToken": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "r",
                                                        "rawText": "r",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 17,
                                                    "end": 19
                                                },
                                                "returnType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "s",
                                                            "rawText": "s",
                                                            "flags": 96,
                                                            "start": 23,
                                                            "end": 25
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "flags": 2097152,
                                                    "start": 23,
                                                    "end": 25
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 17,
                                                "end": 25
                                            },
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 25
                                        },
                                        "typeParameters": {
                                            "kind": 307,
                                            "declarations": {
                                                "kind": 337,
                                                "parameters": [
                                                    {
                                                        "kind": 146,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "q",
                                                            "rawText": "q",
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "type": null,
                                                        "defaultType": null,
                                                        "flags": 2097152,
                                                        "start": 15,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "flags": 2097152,
                                            "start": 14,
                                            "end": 17
                                        },
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 25
                                    },
                                    "flags": 2097152,
                                    "start": 14,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 14,
                            "end": 25
                        },
                        "flags": 2097152,
                        "start": 13,
                        "end": 26
                    },
                    "flags": 2097152,
                    "start": 11,
                    "end": 26
                },
                "flags": 2097152,
                "start": 11,
                "end": 26
            },
            "flags": 2097152,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type x<y> = z<<q>(r) => s>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

