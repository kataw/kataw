# Kataw parser test case

## Input

`````js
type a = {[((({[(((-1) => [c|d]))]:string}) => [c|d]))]:string};
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
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "name": null,
                            "key": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
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
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234353,
                                                            "properties": [
                                                                {
                                                                    "kind": 195,
                                                                    "protoKeyword": null,
                                                                    "staticKeyword": null,
                                                                    "name": null,
                                                                    "key": {
                                                                        "kind": 139,
                                                                        "bitwiseOrToken": null,
                                                                        "bitwiseAndToken": null,
                                                                        "type": {
                                                                            "kind": 290,
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
                                                                                                "kind": 139,
                                                                                                "bitwiseOrToken": null,
                                                                                                "bitwiseAndToken": null,
                                                                                                "type": {
                                                                                                    "kind": 313,
                                                                                                    "subtractionToken": {
                                                                                                        "kind": 134318643,
                                                                                                        "flags": 64,
                                                                                                        "start": 19,
                                                                                                        "end": 20
                                                                                                    },
                                                                                                    "text": 1,
                                                                                                    "rawText": "1",
                                                                                                    "flags": 2097216,
                                                                                                    "start": 19,
                                                                                                    "end": 21
                                                                                                },
                                                                                                "flags": 2097152,
                                                                                                "start": 19,
                                                                                                "end": 21
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2097152,
                                                                                        "start": 18,
                                                                                        "end": 22
                                                                                    },
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 64,
                                                                                        "start": 22,
                                                                                        "end": 25
                                                                                    },
                                                                                    "returnType": {
                                                                                        "kind": 139,
                                                                                        "bitwiseOrToken": null,
                                                                                        "bitwiseAndToken": null,
                                                                                        "type": {
                                                                                            "kind": 147,
                                                                                            "elementTypes": [
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
                                                                                                                    "text": "c",
                                                                                                                    "rawText": "c",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 27,
                                                                                                                    "end": 28
                                                                                                                },
                                                                                                                "typeParameters": null,
                                                                                                                "flags": 2097152,
                                                                                                                "start": 27,
                                                                                                                "end": 28
                                                                                                            },
                                                                                                            {
                                                                                                                "kind": 144,
                                                                                                                "typeName": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "d",
                                                                                                                    "rawText": "d",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 29,
                                                                                                                    "end": 30
                                                                                                                },
                                                                                                                "typeParameters": null,
                                                                                                                "flags": 2097152,
                                                                                                                "start": 29,
                                                                                                                "end": 30
                                                                                                            }
                                                                                                        ],
                                                                                                        "flags": 2097152,
                                                                                                        "start": 28,
                                                                                                        "end": 30
                                                                                                    },
                                                                                                    "flags": 2097152,
                                                                                                    "start": 27,
                                                                                                    "end": 30
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 2097152,
                                                                                            "start": 25,
                                                                                            "end": 31
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 25,
                                                                                        "end": 31
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 18,
                                                                                    "end": 31
                                                                                },
                                                                                "flags": 2097152,
                                                                                "start": 18,
                                                                                "end": 31
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 16,
                                                                            "end": 33
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 16,
                                                                        "end": 33
                                                                    },
                                                                    "type": {
                                                                        "kind": 139,
                                                                        "bitwiseOrToken": null,
                                                                        "bitwiseAndToken": null,
                                                                        "type": {
                                                                            "kind": 134234347,
                                                                            "flags": 2097216,
                                                                            "start": 35,
                                                                            "end": 41
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 35,
                                                                        "end": 41
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 15,
                                                                    "end": 41
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "start": 14,
                                                            "end": 42
                                                        },
                                                        "flags": 2097152,
                                                        "start": 14,
                                                        "end": 42
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 13,
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
                                                    "kind": 147,
                                                    "elementTypes": [
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
                                                                            "text": "c",
                                                                            "rawText": "c",
                                                                            "flags": 96,
                                                                            "start": 48,
                                                                            "end": 49
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 48,
                                                                        "end": 49
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "d",
                                                                            "rawText": "d",
                                                                            "flags": 96,
                                                                            "start": 50,
                                                                            "end": 51
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 50,
                                                                        "end": 51
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 49,
                                                                "end": 51
                                                            },
                                                            "flags": 2097152,
                                                            "start": 48,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 46,
                                                    "end": 52
                                                },
                                                "flags": 2097152,
                                                "start": 46,
                                                "end": 52
                                            },
                                            "flags": 2097152,
                                            "start": 13,
                                            "end": 52
                                        },
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 52
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 54
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 54
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 56,
                                    "end": 62
                                },
                                "flags": 2097152,
                                "start": 56,
                                "end": 62
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 62
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 63
                },
                "flags": 2097152,
                "start": 8,
                "end": 63
            },
            "flags": 64,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "type a = {[((({[(((-1) => [c|d]))]:string}) => [c|d]))]:string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  type a = { [(({ [((-1) => [[c | d]])]:  string }) => [[c | d]])]:  string }

```

### Diagnostics

```javascript
✔ No errors
```

