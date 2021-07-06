# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [()]) => T) => T) => T) => T) => T;
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
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
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
                                                                            "transformFlags": 0,
                                                                            "start": 12,
                                                                            "end": 13
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
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
                                                                                            {
                                                                                                "kind": 138,
                                                                                                "types": [
                                                                                                    {
                                                                                                        "kind": 144,
                                                                                                        "typeName": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "y",
                                                                                                            "rawText": "y",
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 18,
                                                                                                            "end": 19
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 15,
                                                                                                        "end": 19
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 147,
                                                                                                        "elementTypes": [
                                                                                                            {
                                                                                                                "kind": 139,
                                                                                                                "bitwiseOrToken": null,
                                                                                                                "bitwiseAndToken": null,
                                                                                                                "type": {
                                                                                                                    "kind": 288,
                                                                                                                    "typeParameters": null,
                                                                                                                    "arrowTypeParameterList": {
                                                                                                                        "kind": 292,
                                                                                                                        "parameters": [],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 2097152,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 24,
                                                                                                                        "end": 24
                                                                                                                    },
                                                                                                                    "arrowToken": null,
                                                                                                                    "returnType": {
                                                                                                                        "kind": 139,
                                                                                                                        "bitwiseOrToken": null,
                                                                                                                        "bitwiseAndToken": null,
                                                                                                                        "type": {
                                                                                                                            "kind": 144,
                                                                                                                            "typeName": {
                                                                                                                                "kind": 16637,
                                                                                                                                "text": "",
                                                                                                                                "rawText": "",
                                                                                                                                "flags": 64,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 25,
                                                                                                                                "end": 25
                                                                                                                            },
                                                                                                                            "typeParameters": null,
                                                                                                                            "flags": 2097152,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 25,
                                                                                                                            "end": 25
                                                                                                                        },
                                                                                                                        "flags": 2097152,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 25,
                                                                                                                        "end": 25
                                                                                                                    },
                                                                                                                    "flags": 2097152,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 23,
                                                                                                                    "end": 25
                                                                                                                },
                                                                                                                "flags": 2097152,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 23,
                                                                                                                "end": 25
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 2097152,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 21,
                                                                                                        "end": 26
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 2097152,
                                                                                                "transformFlags": 0,
                                                                                                "start": 19,
                                                                                                "end": 26
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 15,
                                                                                        "end": 30
                                                                                    },
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 64,
                                                                                        "transformFlags": 0,
                                                                                        "start": 27,
                                                                                        "end": 30
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
                                                                                                "transformFlags": 0,
                                                                                                "start": 30,
                                                                                                "end": 32
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 30,
                                                                                            "end": 32
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 30,
                                                                                        "end": 32
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 15,
                                                                                    "end": 32
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 15,
                                                                            "end": 33
                                                                        },
                                                                        "arrowToken": {
                                                                            "kind": 10,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 33,
                                                                            "end": 36
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
                                                                                    "transformFlags": 0,
                                                                                    "start": 36,
                                                                                    "end": 38
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 36,
                                                                                "end": 38
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 36,
                                                                            "end": 38
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 15,
                                                                        "end": 38
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 13,
                                                                "end": 38
                                                            },
                                                            "optionalToken": null,
                                                            "types": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 39
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 39
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 42
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
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 44
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 44
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 44
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 44
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 44
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 48
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 48
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
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 51
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 54,
                                "end": 56
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 56
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 56
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 56
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 56
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [()]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 25, end: 26

```

