# Kataw parser test case

## Input

`````js
type A = (T & S)['bar'];
type B = (T | S)['bar'];
type C = (?T)['bar'];
type D = (typeof x)['bar'];
type E = (string => void)['bar'];
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
                    "kind": 311,
                    "objectType": {
                        "kind": 290,
                        "type": {
                            "kind": 138,
                            "types": [
                                {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 11
                                },
                                {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                }
                            ],
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 16
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217967,
                            "text": "bar",
                            "rawText": "'bar'",
                            "flags": 6291520,
                            "transformFlags": 1024,
                            "start": 17,
                            "end": 22
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 22
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 24
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 23
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 24,
                "end": 29
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 31,
                "end": 33
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 311,
                    "objectType": {
                        "kind": 290,
                        "type": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 36
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 36
                                },
                                {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                }
                            ],
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 40
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 41
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217967,
                            "text": "bar",
                            "rawText": "'bar'",
                            "flags": 6291520,
                            "transformFlags": 1024,
                            "start": 42,
                            "end": 47
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 47
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 49
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 33,
                "end": 48
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 24,
            "end": 49
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 49,
                "end": 54
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 54,
                "end": 56
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 56,
                "end": 58
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 311,
                    "objectType": {
                        "kind": 290,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 61
                                },
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 62
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 62
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 62
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 63
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217967,
                            "text": "bar",
                            "rawText": "'bar'",
                            "flags": 6291520,
                            "transformFlags": 1024,
                            "start": 64,
                            "end": 69
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 69
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 71
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 58,
                "end": 70
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 49,
            "end": 71
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 71,
                "end": 76
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "transformFlags": 0,
                "start": 76,
                "end": 78
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 78,
                "end": 80
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 311,
                    "objectType": {
                        "kind": 290,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134299891,
                                "typeOfKeyword": {
                                    "kind": 138477613,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 88
                                },
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 90
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 90
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 90
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 91
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217967,
                            "text": "bar",
                            "rawText": "'bar'",
                            "flags": 6291520,
                            "transformFlags": 1024,
                            "start": 92,
                            "end": 97
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 92,
                        "end": 97
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 99
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 80,
                "end": 98
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 71,
            "end": 99
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 99,
                "end": 104
            },
            "name": {
                "kind": 134299649,
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "transformFlags": 0,
                "start": 104,
                "end": 106
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 106,
                "end": 108
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
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 110,
                                    "end": 116
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 116
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 108,
                        "end": 116
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 116,
                        "end": 119
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 124
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 124
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 124
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 108,
                "end": 124
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 99,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392131,
                            "text": "bar",
                            "rawText": "'bar'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 131
                        }
                    ],
                    "trailingComma": false,
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 126,
                    "end": 131
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 125,
                "end": 132
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 125,
            "end": 133
        }
    ],
    "isModule": false,
    "source": "type A = (T & S)['bar'];\ntype B = (T | S)['bar'];\ntype C = (?T)['bar'];\ntype D = (typeof x)['bar'];\ntype E = (string => void)['bar'];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 133
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 117, end: 119
✖ ')' is not allowed here. Did you mean ';'? - start: 124, end: 125

```

