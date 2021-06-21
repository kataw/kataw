# Kataw parser test case

## Input

`````js
type a = (a[a & b[a|b|c|d|e]][c | d][(x) => T][-1][][]) => T;
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
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 55,
                        "end": 58
                    },
                    "arrowToken": {
                        "kind": 136,
                        "type": {
                            "kind": 136,
                            "type": {
                                "kind": 311,
                                "objectType": {
                                    "kind": 311,
                                    "objectType": {
                                        "kind": 311,
                                        "objectType": {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 8,
                                                "end": 11
                                            },
                                            "indexType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 138,
                                                    "types": [
                                                        {
                                                            "kind": 144,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 12,
                                                                "end": 13
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 12,
                                                            "end": 13
                                                        },
                                                        {
                                                            "kind": 311,
                                                            "objectType": {
                                                                "kind": 144,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 15,
                                                                    "end": 17
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 15,
                                                                "end": 17
                                                            },
                                                            "indexType": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 137,
                                                                    "types": [
                                                                        {
                                                                            "kind": 144,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 96,
                                                                                "start": 18,
                                                                                "end": 19
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 18,
                                                                            "end": 19
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 96,
                                                                                "start": 20,
                                                                                "end": 21
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 20,
                                                                            "end": 21
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "c",
                                                                                "rawText": "c",
                                                                                "flags": 96,
                                                                                "start": 22,
                                                                                "end": 23
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 22,
                                                                            "end": 23
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "d",
                                                                                "rawText": "d",
                                                                                "flags": 96,
                                                                                "start": 24,
                                                                                "end": 25
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 24,
                                                                            "end": 25
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "e",
                                                                                "rawText": "e",
                                                                                "flags": 96,
                                                                                "start": 26,
                                                                                "end": 27
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 26,
                                                                            "end": 27
                                                                        }
                                                                    ],
                                                                    "flags": 2097152,
                                                                    "start": 19,
                                                                    "end": 27
                                                                },
                                                                "flags": 2097152,
                                                                "start": 18,
                                                                "end": 27
                                                            },
                                                            "flags": 0,
                                                            "start": 17,
                                                            "end": 29
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 13,
                                                    "end": 28
                                                },
                                                "flags": 2097152,
                                                "start": 12,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "start": 11,
                                            "end": 30
                                        },
                                        "indexType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 144,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 30,
                                                            "end": 31
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "d",
                                                            "rawText": "d",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 33,
                                                        "end": 35
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "start": 31,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "start": 30,
                                            "end": 35
                                        },
                                        "flags": 0,
                                        "start": 11,
                                        "end": 37
                                    },
                                    "indexType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 288,
                                            "arrowTypeParameterList": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 40,
                                                "end": 43
                                            },
                                            "arrowToken": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 38,
                                                    "end": 39
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "name": {
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
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 37,
                                            "end": 45
                                        },
                                        "flags": 2097152,
                                        "start": 37,
                                        "end": 45
                                    },
                                    "flags": 0,
                                    "start": 11,
                                    "end": 47
                                },
                                "indexType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 313,
                                        "subtractionToken": {
                                            "kind": 134318643,
                                            "flags": 64,
                                            "start": 47,
                                            "end": 48
                                        },
                                        "text": 1,
                                        "flags": 2097216,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "flags": 2097152,
                                    "start": 47,
                                    "end": 49
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 51
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 52
                        },
                        "flags": 2097152,
                        "start": 11,
                        "end": 54
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 58,
                                "end": 60
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 58,
                            "end": 60
                        },
                        "flags": 2097152,
                        "start": 58,
                        "end": 60
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 60
                },
                "flags": 2097152,
                "start": 8,
                "end": 60
            },
            "flags": 2097152,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[a|b|c|d|e]][c | d][(x) => T][-1][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

