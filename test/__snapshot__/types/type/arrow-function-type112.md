# Kataw parser test case

## Input

`````js
type a = ((bj[c] & d) => T);

type a = ((bj[c] | e) => T);

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
                    "kind": 290,
                    "type": {
                        "kind": 288,
                        "typeParameters": null,
                        "arrowTypeParameterList": {
                            "kind": 292,
                            "parameters": [
                                {
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "bj",
                                                    "rawText": "bj",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 8,
                                                "end": 13
                                            },
                                            "indexType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
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
                                            },
                                            "flags": 0,
                                            "start": 13,
                                            "end": 18
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 20
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 8,
                            "end": 24
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 21,
                            "end": 24
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
                                    "start": 24,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 8,
                        "end": 26
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 27
                },
                "flags": 2097152,
                "start": 8,
                "end": 27
            },
            "flags": 2097152,
            "start": 0,
            "end": 28
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 28,
                "end": 36
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 34,
                "end": 36
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 36,
                "end": 38
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 290,
                    "type": {
                        "kind": 288,
                        "typeParameters": null,
                        "arrowTypeParameterList": {
                            "kind": 292,
                            "parameters": [
                                {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "bj",
                                                    "rawText": "bj",
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 38,
                                                "end": 43
                                            },
                                            "indexType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 45
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 44,
                                                    "end": 45
                                                },
                                                "flags": 2097152,
                                                "start": 44,
                                                "end": 45
                                            },
                                            "flags": 0,
                                            "start": 43,
                                            "end": 48
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 48,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 46,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 38,
                            "end": 54
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 51,
                            "end": 54
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
                                    "start": 54,
                                    "end": 56
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 54,
                                "end": 56
                            },
                            "flags": 2097152,
                            "start": 54,
                            "end": 56
                        },
                        "flags": 2097152,
                        "start": 38,
                        "end": 56
                    },
                    "flags": 2097152,
                    "start": 38,
                    "end": 57
                },
                "flags": 2097152,
                "start": 38,
                "end": 57
            },
            "flags": 2097153,
            "start": 28,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "type a = ((bj[c] & d) => T);\n\ntype a = ((bj[c] | e) => T);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```

