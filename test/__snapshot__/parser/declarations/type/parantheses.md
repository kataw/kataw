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
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
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
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 13
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
                                                "start": 16,
                                                "end": 19
                                            },
                                            "arrowToken": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "$Foo",
                                                        "rawText": "$Foo",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "typeParameters": {
                                                        "kind": 309,
                                                        "parameters": [
                                                            {
                                                                "kind": 310,
                                                                "type": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 25,
                                                                            "end": 26
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 25,
                                                                        "end": 26
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 25,
                                                                    "end": 26
                                                                },
                                                                "flags": 2097152,
                                                                "start": 25,
                                                                "end": 26
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 24,
                                                        "end": 27
                                                    },
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 27
                                                },
                                                "flags": 2097152,
                                                "start": 19,
                                                "end": 27
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 13,
                                            "end": 27
                                        },
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 27
                                    },
                                    "typeParameters": {
                                        "kind": 307,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 11,
                                                "end": 12
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 27
                            },
                            "flags": 2097152,
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
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 35,
                                        "end": 35
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
                                                "start": 38,
                                                "end": 41
                                            },
                                            "arrowToken": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 36,
                                                    "end": 37
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "$Foo",
                                                        "rawText": "$Foo",
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 46
                                                    },
                                                    "typeParameters": {
                                                        "kind": 309,
                                                        "parameters": [
                                                            {
                                                                "kind": 310,
                                                                "type": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 47,
                                                                            "end": 48
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 47,
                                                                        "end": 48
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 47,
                                                                    "end": 48
                                                                },
                                                                "flags": 2097152,
                                                                "start": 47,
                                                                "end": 48
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 46,
                                                        "end": 49
                                                    },
                                                    "flags": 2097152,
                                                    "start": 41,
                                                    "end": 49
                                                },
                                                "flags": 2097152,
                                                "start": 41,
                                                "end": 49
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 35,
                                            "end": 49
                                        },
                                        "flags": 2097152,
                                        "start": 35,
                                        "end": 49
                                    },
                                    "typeParameters": {
                                        "kind": 307,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 33,
                                                    "end": 34
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 33,
                                                "end": 34
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "flags": 2097152,
                                    "start": 32,
                                    "end": 49
                                },
                                "flags": 2097152,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 2097152,
                            "start": 30,
                            "end": 50
                        }
                    ],
                    "flags": 2097152,
                    "start": 28,
                    "end": 50
                },
                "flags": 2097152,
                "start": 8,
                "end": 50
            },
            "flags": 2097152,
            "start": 0,
            "end": 51
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 51,
                "end": 58
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 56,
                "end": 58
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
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
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 65,
                                        "end": 65
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
                                                "start": 68,
                                                "end": 71
                                            },
                                            "arrowToken": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 66,
                                                    "end": 67
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "$Foo",
                                                        "rawText": "$Foo",
                                                        "flags": 96,
                                                        "start": 71,
                                                        "end": 76
                                                    },
                                                    "typeParameters": {
                                                        "kind": 309,
                                                        "parameters": [
                                                            {
                                                                "kind": 310,
                                                                "type": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 77,
                                                                            "end": 78
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 77,
                                                                        "end": 78
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 77,
                                                                    "end": 78
                                                                },
                                                                "flags": 2097152,
                                                                "start": 77,
                                                                "end": 78
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 76,
                                                        "end": 79
                                                    },
                                                    "flags": 2097152,
                                                    "start": 71,
                                                    "end": 79
                                                },
                                                "flags": 2097152,
                                                "start": 71,
                                                "end": 79
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 65,
                                            "end": 79
                                        },
                                        "flags": 2097152,
                                        "start": 65,
                                        "end": 79
                                    },
                                    "typeParameters": {
                                        "kind": 307,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 63,
                                                    "end": 64
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 63,
                                                "end": 64
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 62,
                                        "end": 65
                                    },
                                    "flags": 2097152,
                                    "start": 62,
                                    "end": 79
                                },
                                "flags": 2097152,
                                "start": 62,
                                "end": 79
                            },
                            "flags": 2097152,
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
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 87,
                                        "end": 87
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
                                                "start": 90,
                                                "end": 93
                                            },
                                            "arrowToken": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 88,
                                                    "end": 89
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "$Foo",
                                                        "rawText": "$Foo",
                                                        "flags": 96,
                                                        "start": 93,
                                                        "end": 98
                                                    },
                                                    "typeParameters": {
                                                        "kind": 309,
                                                        "parameters": [
                                                            {
                                                                "kind": 310,
                                                                "type": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 99,
                                                                            "end": 100
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 99,
                                                                        "end": 100
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 99,
                                                                    "end": 100
                                                                },
                                                                "flags": 2097152,
                                                                "start": 99,
                                                                "end": 100
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 98,
                                                        "end": 101
                                                    },
                                                    "flags": 2097152,
                                                    "start": 93,
                                                    "end": 101
                                                },
                                                "flags": 2097152,
                                                "start": 93,
                                                "end": 101
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 87,
                                            "end": 101
                                        },
                                        "flags": 2097152,
                                        "start": 87,
                                        "end": 101
                                    },
                                    "typeParameters": {
                                        "kind": 307,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 85,
                                                    "end": 86
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 85,
                                                "end": 86
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 84,
                                        "end": 87
                                    },
                                    "flags": 2097152,
                                    "start": 84,
                                    "end": 101
                                },
                                "flags": 2097152,
                                "start": 84,
                                "end": 101
                            },
                            "flags": 2097152,
                            "start": 82,
                            "end": 102
                        }
                    ],
                    "flags": 2097152,
                    "start": 80,
                    "end": 102
                },
                "flags": 2097152,
                "start": 60,
                "end": 102
            },
            "flags": 2097153,
            "start": 51,
            "end": 103
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 103,
                "end": 110
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 108,
                "end": 110
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
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
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 117,
                                    "end": 117
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
                                            "start": 120,
                                            "end": 123
                                        },
                                        "arrowToken": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 118,
                                                "end": 119
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 117,
                                            "end": 119
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "$Foo",
                                                    "rawText": "$Foo",
                                                    "flags": 96,
                                                    "start": 123,
                                                    "end": 128
                                                },
                                                "typeParameters": {
                                                    "kind": 309,
                                                    "parameters": [
                                                        {
                                                            "kind": 310,
                                                            "type": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 129,
                                                                        "end": 130
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 129,
                                                                    "end": 130
                                                                },
                                                                "flags": 2097152,
                                                                "start": 129,
                                                                "end": 130
                                                            },
                                                            "flags": 2097152,
                                                            "start": 129,
                                                            "end": 130
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 128,
                                                    "end": 131
                                                },
                                                "flags": 2097152,
                                                "start": 123,
                                                "end": 131
                                            },
                                            "flags": 2097152,
                                            "start": 123,
                                            "end": 131
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 117,
                                        "end": 131
                                    },
                                    "flags": 2097152,
                                    "start": 117,
                                    "end": 131
                                },
                                "typeParameters": {
                                    "kind": 307,
                                    "typeParameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 115,
                                                "end": 116
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 115,
                                            "end": 116
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 114,
                                    "end": 117
                                },
                                "flags": 2097152,
                                "start": 114,
                                "end": 131
                            },
                            "flags": 2097152,
                            "start": 114,
                            "end": 131
                        },
                        "flags": 2097152,
                        "start": 112,
                        "end": 132
                    },
                    "flags": 2097152,
                    "start": 112,
                    "end": 134
                },
                "flags": 2097152,
                "start": 112,
                "end": 134
            },
            "flags": 2097153,
            "start": 103,
            "end": 135
        }
    ],
    "isModule": false,
    "source": "type A = (<T>(T) => $Foo<T>) & (<T>(T) => $Foo<T>);\ntype B = (<T>(T) => $Foo<T>) | (<T>(T) => $Foo<T>);\ntype C = (<T>(T) => $Foo<T>)[];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 135
}
```

### Printed

```javascript




```

### Diagnostics

```javascript
✔ No errors
```

