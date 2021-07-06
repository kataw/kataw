# Kataw parser test case

## Input

`````js
type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;
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
                "text": "X",
                "rawText": "X",
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
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "$Call",
                        "rawText": "$Call",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
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
                                        "kind": 138,
                                        "types": [
                                            {
                                                "kind": 290,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 288,
                                                        "typeParameters": {
                                                            "kind": 307,
                                                            "declarations": {
                                                                "kind": 337,
                                                                "parameters": [
                                                                    {
                                                                        "kind": 146,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 17,
                                                                            "end": 18
                                                                        },
                                                                        "type": null,
                                                                        "assignToken": null,
                                                                        "defaultType": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 17,
                                                                        "end": 18
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 17,
                                                                "end": 18
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 16,
                                                            "end": 19
                                                        },
                                                        "arrowTypeParameterList": {
                                                            "kind": 292,
                                                            "parameters": [
                                                                {
                                                                    "kind": 284,
                                                                    "ellipsisToken": null,
                                                                    "name": null,
                                                                    "optionalToken": null,
                                                                    "types": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 20,
                                                                            "end": 21
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 20,
                                                                        "end": 21
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 20,
                                                                    "end": 21
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 21
                                                        },
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 25
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
                                                                    "start": 25,
                                                                    "end": 27
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 25,
                                                                "end": 27
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 27
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 27
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 27
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 28
                                            },
                                            {
                                                "kind": 290,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 288,
                                                        "typeParameters": {
                                                            "kind": 307,
                                                            "declarations": {
                                                                "kind": 337,
                                                                "parameters": [
                                                                    {
                                                                        "kind": 146,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 33,
                                                                            "end": 34
                                                                        },
                                                                        "type": null,
                                                                        "assignToken": null,
                                                                        "defaultType": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 33,
                                                                        "end": 34
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 33,
                                                                "end": 34
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 35
                                                        },
                                                        "arrowTypeParameterList": {
                                                            "kind": 292,
                                                            "parameters": [
                                                                {
                                                                    "kind": 284,
                                                                    "ellipsisToken": null,
                                                                    "name": null,
                                                                    "optionalToken": null,
                                                                    "types": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 36,
                                                                            "end": 37
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 36,
                                                                        "end": 37
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 36,
                                                                    "end": 37
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 37
                                                        },
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 41
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
                                                                    "start": 41,
                                                                    "end": 43
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 43
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 43
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 44
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 44
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 44
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 47
                                            },
                                            {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 49,
                                                    "end": 51
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 51
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 51
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 51
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 51
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 52
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 52
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 52
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

type X = $Call<(<T>(T) =>  T) & (<T>(T) =>  T),
A | B>
```

### Diagnostics

```javascript
✔ No errors
```

