# Kataw parser test case

## Input

`````js
type a = (((symbol[{[x]:string}][(((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                                                                        "kind": 136,
                                                                        "type": {
                                                                            "kind": 136,
                                                                            "type": {
                                                                                "kind": 311,
                                                                                "objectType": {
                                                                                    "kind": 311,
                                                                                    "objectType": {
                                                                                        "kind": 134234343,
                                                                                        "flags": 64,
                                                                                        "start": 12,
                                                                                        "end": 18
                                                                                    },
                                                                                    "indexType": {
                                                                                        "kind": 139,
                                                                                        "bitwiseOrToken": null,
                                                                                        "bitwiseAndToken": null,
                                                                                        "type": {
                                                                                            "kind": 134234353,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 195,
                                                                                                    "protoKeyword": null,
                                                                                                    "staticToken": null,
                                                                                                    "name": null,
                                                                                                    "key": {
                                                                                                        "kind": 144,
                                                                                                        "typeName": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "x",
                                                                                                            "rawText": "x",
                                                                                                            "flags": 96,
                                                                                                            "start": 21,
                                                                                                            "end": 22
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 20,
                                                                                                        "end": 22
                                                                                                    },
                                                                                                    "type": {
                                                                                                        "kind": 139,
                                                                                                        "bitwiseOrToken": null,
                                                                                                        "bitwiseAndToken": null,
                                                                                                        "type": {
                                                                                                            "kind": 134234347,
                                                                                                            "flags": 2097216,
                                                                                                            "start": 24,
                                                                                                            "end": 30
                                                                                                        },
                                                                                                        "flags": 2097152,
                                                                                                        "start": 24,
                                                                                                        "end": 30
                                                                                                    },
                                                                                                    "flags": 2097152,
                                                                                                    "start": 20,
                                                                                                    "end": 30
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 2097152,
                                                                                            "start": 19,
                                                                                            "end": 31
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 19,
                                                                                        "end": 31
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "start": 18,
                                                                                    "end": 33
                                                                                },
                                                                                "indexType": {
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
                                                                                                                                                        "kind": 311,
                                                                                                                                                        "objectType": {
                                                                                                                                                            "kind": 134234343,
                                                                                                                                                            "flags": 64,
                                                                                                                                                            "start": 36,
                                                                                                                                                            "end": 42
                                                                                                                                                        },
                                                                                                                                                        "indexType": {
                                                                                                                                                            "kind": 139,
                                                                                                                                                            "bitwiseOrToken": null,
                                                                                                                                                            "bitwiseAndToken": null,
                                                                                                                                                            "type": {
                                                                                                                                                                "kind": 134234353,
                                                                                                                                                                "properties": [
                                                                                                                                                                    {
                                                                                                                                                                        "kind": 195,
                                                                                                                                                                        "protoKeyword": null,
                                                                                                                                                                        "staticToken": null,
                                                                                                                                                                        "name": null,
                                                                                                                                                                        "key": {
                                                                                                                                                                            "kind": 144,
                                                                                                                                                                            "typeName": {
                                                                                                                                                                                "kind": 134299649,
                                                                                                                                                                                "text": "x",
                                                                                                                                                                                "rawText": "x",
                                                                                                                                                                                "flags": 96,
                                                                                                                                                                                "start": 45,
                                                                                                                                                                                "end": 46
                                                                                                                                                                            },
                                                                                                                                                                            "typeParameters": null,
                                                                                                                                                                            "flags": 2097152,
                                                                                                                                                                            "start": 44,
                                                                                                                                                                            "end": 46
                                                                                                                                                                        },
                                                                                                                                                                        "type": {
                                                                                                                                                                            "kind": 139,
                                                                                                                                                                            "bitwiseOrToken": null,
                                                                                                                                                                            "bitwiseAndToken": null,
                                                                                                                                                                            "type": {
                                                                                                                                                                                "kind": 134234347,
                                                                                                                                                                                "flags": 2097216,
                                                                                                                                                                                "start": 48,
                                                                                                                                                                                "end": 54
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 2097152,
                                                                                                                                                                            "start": 48,
                                                                                                                                                                            "end": 54
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 2097152,
                                                                                                                                                                        "start": 44,
                                                                                                                                                                        "end": 54
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                "flags": 2097152,
                                                                                                                                                                "start": 43,
                                                                                                                                                                "end": 55
                                                                                                                                                            },
                                                                                                                                                            "flags": 2097152,
                                                                                                                                                            "start": 43,
                                                                                                                                                            "end": 55
                                                                                                                                                        },
                                                                                                                                                        "flags": 0,
                                                                                                                                                        "start": 42,
                                                                                                                                                        "end": 57
                                                                                                                                                    },
                                                                                                                                                    "flags": 2097152,
                                                                                                                                                    "start": 42,
                                                                                                                                                    "end": 58
                                                                                                                                                },
                                                                                                                                                "flags": 2097152,
                                                                                                                                                "start": 42,
                                                                                                                                                "end": 60
                                                                                                                                            },
                                                                                                                                            "flags": 2097152,
                                                                                                                                            "start": 42,
                                                                                                                                            "end": 62
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
                                                                                                                                                                                "start": 67,
                                                                                                                                                                                "end": 68
                                                                                                                                                                            },
                                                                                                                                                                            "typeParameters": null,
                                                                                                                                                                            "flags": 2097152,
                                                                                                                                                                            "start": 64,
                                                                                                                                                                            "end": 68
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
                                                                                                                                                                                                            "start": 74,
                                                                                                                                                                                                            "end": 75
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "typeParameters": null,
                                                                                                                                                                                                        "flags": 2097152,
                                                                                                                                                                                                        "start": 72,
                                                                                                                                                                                                        "end": 75
                                                                                                                                                                                                    }
                                                                                                                                                                                                ],
                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                "flags": 2097152,
                                                                                                                                                                                                "start": 72,
                                                                                                                                                                                                "end": 79
                                                                                                                                                                                            },
                                                                                                                                                                                            "arrowToken": {
                                                                                                                                                                                                "kind": 10,
                                                                                                                                                                                                "flags": 64,
                                                                                                                                                                                                "start": 76,
                                                                                                                                                                                                "end": 79
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
                                                                                                                                                                                                        "start": 79,
                                                                                                                                                                                                        "end": 81
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "typeParameters": null,
                                                                                                                                                                                                    "flags": 2097152,
                                                                                                                                                                                                    "start": 79,
                                                                                                                                                                                                    "end": 81
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 2097152,
                                                                                                                                                                                                "start": 79,
                                                                                                                                                                                                "end": 81
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 2097152,
                                                                                                                                                                                            "start": 72,
                                                                                                                                                                                            "end": 81
                                                                                                                                                                                        },
                                                                                                                                                                                        "flags": 2097152,
                                                                                                                                                                                        "start": 72,
                                                                                                                                                                                        "end": 82
                                                                                                                                                                                    },
                                                                                                                                                                                    "flags": 2097152,
                                                                                                                                                                                    "start": 72,
                                                                                                                                                                                    "end": 82
                                                                                                                                                                                }
                                                                                                                                                                            ],
                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                            "flags": 2097152,
                                                                                                                                                                            "start": 70,
                                                                                                                                                                            "end": 83
                                                                                                                                                                        }
                                                                                                                                                                    ],
                                                                                                                                                                    "flags": 2097152,
                                                                                                                                                                    "start": 68,
                                                                                                                                                                    "end": 83
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                            "trailingComma": false,
                                                                                                                                                            "flags": 2097152,
                                                                                                                                                            "start": 64,
                                                                                                                                                            "end": 87
                                                                                                                                                        },
                                                                                                                                                        "arrowToken": {
                                                                                                                                                            "kind": 10,
                                                                                                                                                            "flags": 64,
                                                                                                                                                            "start": 84,
                                                                                                                                                            "end": 87
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
                                                                                                                                                                    "start": 87,
                                                                                                                                                                    "end": 89
                                                                                                                                                                },
                                                                                                                                                                "typeParameters": null,
                                                                                                                                                                "flags": 2097152,
                                                                                                                                                                "start": 87,
                                                                                                                                                                "end": 89
                                                                                                                                                            },
                                                                                                                                                            "flags": 2097152,
                                                                                                                                                            "start": 87,
                                                                                                                                                            "end": 89
                                                                                                                                                        },
                                                                                                                                                        "flags": 2097152,
                                                                                                                                                        "start": 64,
                                                                                                                                                        "end": 89
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "trailingComma": false,
                                                                                                                                                "flags": 2097152,
                                                                                                                                                "start": 64,
                                                                                                                                                "end": 90
                                                                                                                                            },
                                                                                                                                            "arrowToken": {
                                                                                                                                                "kind": 10,
                                                                                                                                                "flags": 64,
                                                                                                                                                "start": 90,
                                                                                                                                                "end": 93
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
                                                                                                                                                        "start": 93,
                                                                                                                                                        "end": 95
                                                                                                                                                    },
                                                                                                                                                    "typeParameters": null,
                                                                                                                                                    "flags": 2097152,
                                                                                                                                                    "start": 93,
                                                                                                                                                    "end": 95
                                                                                                                                                },
                                                                                                                                                "flags": 2097152,
                                                                                                                                                "start": 93,
                                                                                                                                                "end": 95
                                                                                                                                            },
                                                                                                                                            "flags": 2097152,
                                                                                                                                            "start": 64,
                                                                                                                                            "end": 95
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                    "flags": 2097152,
                                                                                                                                    "start": 62,
                                                                                                                                    "end": 95
                                                                                                                                },
                                                                                                                                "optionalToken": null,
                                                                                                                                "types": null,
                                                                                                                                "flags": 2097152,
                                                                                                                                "start": 35,
                                                                                                                                "end": 96
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 2097152,
                                                                                                                        "start": 35,
                                                                                                                        "end": 96
                                                                                                                    },
                                                                                                                    "arrowToken": {
                                                                                                                        "kind": 10,
                                                                                                                        "flags": 64,
                                                                                                                        "start": 96,
                                                                                                                        "end": 99
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
                                                                                                                                "start": 99,
                                                                                                                                "end": 101
                                                                                                                            },
                                                                                                                            "typeParameters": null,
                                                                                                                            "flags": 2097152,
                                                                                                                            "start": 99,
                                                                                                                            "end": 101
                                                                                                                        },
                                                                                                                        "flags": 2097152,
                                                                                                                        "start": 99,
                                                                                                                        "end": 101
                                                                                                                    },
                                                                                                                    "flags": 2097152,
                                                                                                                    "start": 35,
                                                                                                                    "end": 101
                                                                                                                },
                                                                                                                "flags": 2097152,
                                                                                                                "start": 35,
                                                                                                                "end": 101
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 33,
                                                                                                        "end": 105
                                                                                                    },
                                                                                                    "arrowToken": {
                                                                                                        "kind": 10,
                                                                                                        "flags": 64,
                                                                                                        "start": 102,
                                                                                                        "end": 105
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
                                                                                                                "start": 105,
                                                                                                                "end": 107
                                                                                                            },
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 2097152,
                                                                                                            "start": 105,
                                                                                                            "end": 107
                                                                                                        },
                                                                                                        "flags": 2097152,
                                                                                                        "start": 105,
                                                                                                        "end": 107
                                                                                                    },
                                                                                                    "flags": 2097152,
                                                                                                    "start": 33,
                                                                                                    "end": 107
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 2097152,
                                                                                            "start": 33,
                                                                                            "end": 108
                                                                                        },
                                                                                        "arrowToken": {
                                                                                            "kind": 10,
                                                                                            "flags": 64,
                                                                                            "start": 108,
                                                                                            "end": 111
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
                                                                                                    "start": 111,
                                                                                                    "end": 113
                                                                                                },
                                                                                                "typeParameters": null,
                                                                                                "flags": 2097152,
                                                                                                "start": 111,
                                                                                                "end": 113
                                                                                            },
                                                                                            "flags": 2097152,
                                                                                            "start": 111,
                                                                                            "end": 113
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 33,
                                                                                        "end": 113
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 33,
                                                                                    "end": 113
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 18,
                                                                                "end": 115
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 18,
                                                                            "end": 116
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 18,
                                                                        "end": 118
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
                                                                                                            "start": 123,
                                                                                                            "end": 124
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 120,
                                                                                                        "end": 124
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
                                                                                                                                        "start": 130,
                                                                                                                                        "end": 131
                                                                                                                                    },
                                                                                                                                    "typeParameters": null,
                                                                                                                                    "flags": 2097152,
                                                                                                                                    "start": 128,
                                                                                                                                    "end": 131
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 2097152,
                                                                                                                            "start": 128,
                                                                                                                            "end": 135
                                                                                                                        },
                                                                                                                        "arrowToken": {
                                                                                                                            "kind": 10,
                                                                                                                            "flags": 64,
                                                                                                                            "start": 132,
                                                                                                                            "end": 135
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
                                                                                                                                    "start": 135,
                                                                                                                                    "end": 137
                                                                                                                                },
                                                                                                                                "typeParameters": null,
                                                                                                                                "flags": 2097152,
                                                                                                                                "start": 135,
                                                                                                                                "end": 137
                                                                                                                            },
                                                                                                                            "flags": 2097152,
                                                                                                                            "start": 135,
                                                                                                                            "end": 137
                                                                                                                        },
                                                                                                                        "flags": 2097152,
                                                                                                                        "start": 128,
                                                                                                                        "end": 137
                                                                                                                    },
                                                                                                                    "flags": 2097152,
                                                                                                                    "start": 128,
                                                                                                                    "end": 138
                                                                                                                },
                                                                                                                "flags": 2097152,
                                                                                                                "start": 128,
                                                                                                                "end": 138
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 126,
                                                                                                        "end": 139
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 2097152,
                                                                                                "start": 124,
                                                                                                "end": 139
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2097152,
                                                                                        "start": 120,
                                                                                        "end": 143
                                                                                    },
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 64,
                                                                                        "start": 140,
                                                                                        "end": 143
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
                                                                                                "start": 143,
                                                                                                "end": 145
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "start": 143,
                                                                                            "end": 145
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 143,
                                                                                        "end": 145
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 120,
                                                                                    "end": 145
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "start": 120,
                                                                            "end": 146
                                                                        },
                                                                        "arrowToken": {
                                                                            "kind": 10,
                                                                            "flags": 64,
                                                                            "start": 146,
                                                                            "end": 149
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
                                                                                    "start": 149,
                                                                                    "end": 151
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "start": 149,
                                                                                "end": 151
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 149,
                                                                            "end": 151
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 120,
                                                                        "end": 151
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 118,
                                                                "end": 151
                                                            },
                                                            "optionalToken": null,
                                                            "types": null,
                                                            "flags": 2097152,
                                                            "start": 11,
                                                            "end": 152
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 11,
                                                    "end": 152
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 152,
                                                    "end": 155
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
                                                            "start": 155,
                                                            "end": 157
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 155,
                                                        "end": 157
                                                    },
                                                    "flags": 2097152,
                                                    "start": 155,
                                                    "end": 157
                                                },
                                                "flags": 2097152,
                                                "start": 11,
                                                "end": 157
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 157
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 161
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 158,
                                    "end": 161
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
                                            "start": 161,
                                            "end": 163
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 161,
                                        "end": 163
                                    },
                                    "flags": 2097152,
                                    "start": 161,
                                    "end": 163
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 163
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 164
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 164,
                        "end": 167
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
                                "start": 167,
                                "end": 169
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 167,
                            "end": 169
                        },
                        "flags": 2097152,
                        "start": 167,
                        "end": 169
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 169
                },
                "flags": 2097152,
                "start": 8,
                "end": 169
            },
            "flags": 2097152,
            "start": 0,
            "end": 170
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{[x]:string}][(((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 170
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

