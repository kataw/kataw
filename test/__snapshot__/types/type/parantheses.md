# Kataw parser test case

## Input

`````js
type A = (<T>(T) => $Foo<T>) & (<T>(T) => $Foo<T>);
type B = (<T>(T) => $Foo<T>) | (<T>(T) => $Foo<T>);
type C = (<T>(T) => $Foo<T>)[];
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
                "text": "A",
                "rawText": "A",
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
                                        "declarations": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 12
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 11,
                                        "end": 12
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
                                                        "start": 14,
                                                        "end": 15
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 15
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "$Foo",
                                                "rawText": "$Foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 24
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "types": [
                                                    {
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
                                                                "end": 26
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 26
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 26
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 27
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 27
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
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
                                        "declarations": [
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
                                        "transformFlags": 512,
                                        "start": 33,
                                        "end": 34
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
                                                "text": "$Foo",
                                                "rawText": "$Foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 46
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "types": [
                                                    {
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
                                                                "start": 47,
                                                                "end": 48
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 48
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 48
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 47,
                                                "end": 48
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 49
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 49
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 49
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 50
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 50
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 50
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 51,
                "end": 56
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 56,
                "end": 58
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 58,
                "end": 60
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
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
                                        "declarations": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 63,
                                                    "end": 64
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 64
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 63,
                                        "end": 64
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
                                                        "start": 66,
                                                        "end": 67
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 66,
                                                    "end": 67
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 66,
                                                "end": 67
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 66,
                                        "end": 67
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 71
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "$Foo",
                                                "rawText": "$Foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 71,
                                                "end": 76
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "types": [
                                                    {
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
                                                                "start": 77,
                                                                "end": 78
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 77,
                                                            "end": 78
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 77,
                                                        "end": 78
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 77,
                                                "end": 78
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 79
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 71,
                                        "end": 79
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 79
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 79
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 80
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
                                        "declarations": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 86
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 86
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 85,
                                        "end": 86
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
                                                        "start": 88,
                                                        "end": 89
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 89
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 88,
                                                "end": 89
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 89
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
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
                                                "text": "$Foo",
                                                "rawText": "$Foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 93,
                                                "end": 98
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "types": [
                                                    {
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
                                                                "start": 99,
                                                                "end": 100
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 99,
                                                            "end": 100
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 99,
                                                        "end": 100
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 99,
                                                "end": 100
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 93,
                                            "end": 101
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 93,
                                        "end": 101
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 101
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 101
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 102
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 102
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 60,
                "end": 102
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 51,
            "end": 103
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 103,
                "end": 108
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 108,
                "end": 110
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 110,
                "end": 112
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 136,
                    "type": {
                        "kind": 290,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": {
                                    "kind": 307,
                                    "declarations": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 115,
                                                "end": 116
                                            },
                                            "type": null,
                                            "assignToken": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 115,
                                            "end": 116
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 115,
                                    "end": 116
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
                                                    "start": 118,
                                                    "end": 119
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 118,
                                                "end": 119
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 119
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 118,
                                    "end": 119
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 123
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "$Foo",
                                            "rawText": "$Foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 128
                                        },
                                        "typeParameters": {
                                            "kind": 310,
                                            "types": [
                                                {
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
                                                            "start": 129,
                                                            "end": 130
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 129,
                                                        "end": 130
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 129,
                                                    "end": 130
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 512,
                                            "start": 129,
                                            "end": 130
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 123,
                                        "end": 131
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 131
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 131
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 131
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 112,
                        "end": 132
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 134
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 112,
                "end": 134
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 103,
            "end": 135
        }
    ],
    "isModule": false,
    "source": "type A = (<T>(T) => $Foo<T>) & (<T>(T) => $Foo<T>);\ntype B = (<T>(T) => $Foo<T>) | (<T>(T) => $Foo<T>);\ntype C = (<T>(T) => $Foo<T>)[];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 135
}
```

### Printed

```javascript
type A = ((T) => $Foo<T>) & ((T) => $Foo<T>)
type B = ((T) => $Foo<T>) | ((T) => $Foo<T>)

type C = ((T) => $Foo<T>)[]

```

### Diagnostics

```javascript
✔ No errors
```

