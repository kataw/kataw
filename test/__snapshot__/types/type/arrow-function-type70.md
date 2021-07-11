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
                "end": 4
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
                                                                        "kind": 136,
                                                                        "type": {
                                                                            "kind": 136,
                                                                            "type": {
                                                                                "kind": 136,
                                                                                "type": {
                                                                                    "kind": 136,
                                                                                    "type": {
                                                                                        "kind": 134234343,
                                                                                        "flags": 64,
                                                                                        "start": 12,
                                                                                        "end": 18
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 18,
                                                                                    "end": 20
                                                                                },
                                                                                "flags": 2097152,
                                                                                "start": 18,
                                                                                "end": 22
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 18,
                                                                            "end": 24
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 18,
                                                                        "end": 26
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
                                                                                                            "start": 31,
                                                                                                            "end": 32
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 28,
                                                                                                        "end": 32
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 147,
                                                                                                        "elementTypes": [
                                                                                                            {
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
                                                                                                                                    "kind": 144,
                                                                                                                                    "typeName": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "x",
                                                                                                                                        "rawText": "x",
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 38,
                                                                                                                                        "end": 39
                                                                                                                                    },
                                                                                                                                    "typeParameters": null,
                                                                                                                                    "flags": 2097152,
                                                                                                                                    "start": 36,
                                                                                                                                    "end": 39
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 2097152,
                                                                                                                            "start": 36,
                                                                                                                            "end": 43
                                                                                                                        },
                                                                                                                        "arrowToken": {
                                                                                                                            "kind": 10,
                                                                                                                            "flags": 64,
                                                                                                                            "start": 40,
                                                                                                                            "end": 43
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
                                                                                                                                    "start": 43,
                                                                                                                                    "end": 45
                                                                                                                                },
                                                                                                                                "typeParameters": null,
                                                                                                                                "flags": 2097152,
                                                                                                                                "start": 43,
                                                                                                                                "end": 45
                                                                                                                            },
                                                                                                                            "flags": 2097152,
                                                                                                                            "start": 43,
                                                                                                                            "end": 45
                                                                                                                        },
                                                                                                                        "flags": 2097152,
                                                                                                                        "start": 36,
                                                                                                                        "end": 45
                                                                                                                    },
                                                                                                                    "flags": 2097152,
                                                                                                                    "start": 36,
                                                                                                                    "end": 46
                                                                                                                },
                                                                                                                "flags": 2097152,
                                                                                                                "start": 36,
                                                                                                                "end": 46
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 34,
                                                                                                        "end": 47
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 2097152,
                                                                                                "start": 32,
                                                                                                "end": 47
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2097152,
                                                                                        "start": 28,
                                                                                        "end": 51
                                                                                    },
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 64,
                                                                                        "start": 48,
                                                                                        "end": 51
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
                                                                                                "start": 51,
                                                                                                "end": 53
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "start": 51,
                                                                                            "end": 53
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 51,
                                                                                        "end": 53
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 28,
                                                                                    "end": 53
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "start": 28,
                                                                            "end": 54
                                                                        },
                                                                        "arrowToken": {
                                                                            "kind": 10,
                                                                            "flags": 64,
                                                                            "start": 54,
                                                                            "end": 57
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
                                                                                    "start": 57,
                                                                                    "end": 59
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "start": 57,
                                                                                "end": 59
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 57,
                                                                            "end": 59
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 28,
                                                                        "end": 59
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 26,
                                                                "end": 59
                                                            },
                                                            "optionalToken": null,
                                                            "types": null,
                                                            "flags": 2097152,
                                                            "start": 11,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 11,
                                                    "end": 60
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 60,
                                                    "end": 63
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
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 63,
                                                        "end": 65
                                                    },
                                                    "flags": 2097152,
                                                    "start": 63,
                                                    "end": 65
                                                },
                                                "flags": 2097152,
                                                "start": 11,
                                                "end": 65
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 65
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 69
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 66,
                                    "end": 69
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
                                            "start": 69,
                                            "end": 71
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 69,
                                        "end": 71
                                    },
                                    "flags": 2097152,
                                    "start": 69,
                                    "end": 71
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 71
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 72
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 72,
                        "end": 75
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
                                "start": 75,
                                "end": 77
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 75,
                            "end": 77
                        },
                        "flags": 2097152,
                        "start": 75,
                        "end": 77
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 77
                },
                "flags": 2097152,
                "start": 8,
                "end": 77
            },
            "flags": 64,
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

type a = ( ( (  symbol[][][][] | ( (  y & [[ (( x ) => T) ]]  ) => T ) => T  ) => T ) => T ) => T

```

### Diagnostics

```javascript
✔ No errors
```

