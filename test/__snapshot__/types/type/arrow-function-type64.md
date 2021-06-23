# Kataw parser test case

## Input

`````js
type a = (((x | (() => T) => T) => T) => T) => T;
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
                                                "kind": 288,
                                                "typeParameters": null,
                                                "arrowTypeParameterList": {
                                                    "kind": 292,
                                                    "parameters": [
                                                        {
                                                            "kind": 284,
                                                            "ellipsisToken": null,
                                                            "name": {
                                                                "kind": 137,
                                                                "types": [
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 12,
                                                                            "end": 13
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 11,
                                                                        "end": 13
                                                                    },
                                                                    {
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
                                                                                            []
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2097152,
                                                                                        "start": 15,
                                                                                        "end": 19
                                                                                    },
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 64,
                                                                                        "start": 19,
                                                                                        "end": 22
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
                                                                                                "start": 22,
                                                                                                "end": 24
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "start": 22,
                                                                                            "end": 24
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 22,
                                                                                        "end": 24
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 15,
                                                                                    "end": 24
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "start": 15,
                                                                            "end": 25
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
                                                                        "start": 15,
                                                                        "end": 30
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 13,
                                                                "end": 30
                                                            },
                                                            "optionalToken": null,
                                                            "types": null,
                                                            "flags": 2097152,
                                                            "start": 11,
                                                            "end": 31
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 11,
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
                                                "start": 11,
                                                "end": 36
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 40
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 40
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
                                            "start": 40,
                                            "end": 42
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 2097152,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 43
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 43,
                        "end": 46
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
                                "start": 46,
                                "end": 48
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 46,
                            "end": 48
                        },
                        "flags": 2097152,
                        "start": 46,
                        "end": 48
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 48
                },
                "flags": 2097152,
                "start": 8,
                "end": 48
            },
            "flags": 2097152,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "type a = (((x | (() => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

