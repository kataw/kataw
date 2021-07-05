# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [((x) => T)]) => T) => T))) => T;
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
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
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
                                                                                    "start": 18,
                                                                                    "end": 19
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
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
                                                                                                                "start": 25,
                                                                                                                "end": 26
                                                                                                            },
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 2097152,
                                                                                                            "start": 23,
                                                                                                            "end": 26
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 2097152,
                                                                                                    "start": 23,
                                                                                                    "end": 30
                                                                                                },
                                                                                                "arrowToken": {
                                                                                                    "kind": 10,
                                                                                                    "flags": 64,
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
                                                                                                            "start": 30,
                                                                                                            "end": 32
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "start": 30,
                                                                                                        "end": 32
                                                                                                    },
                                                                                                    "flags": 2097152,
                                                                                                    "start": 30,
                                                                                                    "end": 32
                                                                                                },
                                                                                                "flags": 2097152,
                                                                                                "start": 23,
                                                                                                "end": 32
                                                                                            },
                                                                                            "flags": 2097152,
                                                                                            "start": 23,
                                                                                            "end": 33
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "start": 23,
                                                                                        "end": 33
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 2097152,
                                                                                "start": 21,
                                                                                "end": 34
                                                                            }
                                                                        ],
                                                                        "flags": 2097152,
                                                                        "start": 19,
                                                                        "end": 34
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 2097152,
                                                                "start": 15,
                                                                "end": 38
                                                            },
                                                            "arrowToken": {
                                                                "kind": 10,
                                                                "flags": 64,
                                                                "start": 35,
                                                                "end": 38
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
                                                                        "start": 38,
                                                                        "end": 40
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 38,
                                                                    "end": 40
                                                                },
                                                                "flags": 2097152,
                                                                "start": 38,
                                                                "end": 40
                                                            },
                                                            "flags": 2097152,
                                                            "start": 15,
                                                            "end": 40
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 15,
                                                    "end": 41
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 41,
                                                    "end": 44
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
                                                            "start": 44,
                                                            "end": 46
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "flags": 2097152,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 46
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 46
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 47
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 49
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 49,
                        "end": 52
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
                                "start": 52,
                                "end": 54
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 52,
                            "end": 54
                        },
                        "flags": 2097152,
                        "start": 52,
                        "end": 54
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 54
                },
                "flags": 2097152,
                "start": 8,
                "end": 54
            },
            "flags": 64,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [((x) => T)]) => T) => T))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

type a = ((x | ((y & [((x) =>  T)]) =>  T) =>  T)) =>  T
```

### Diagnostics

```javascript
✔ No errors
```

