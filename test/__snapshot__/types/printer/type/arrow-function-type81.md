# Kataw parser test case

## Input

`````js
type a = (([-1] | x | q & (x)) => T) => T
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
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 147,
                                                        "elementTypes": [
                                                            {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 313,
                                                                    "subtractionToken": {
                                                                        "kind": 134318643,
                                                                        "flags": 64,
                                                                        "start": 12,
                                                                        "end": 13
                                                                    },
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 2097216,
                                                                    "start": 12,
                                                                    "end": 14
                                                                },
                                                                "flags": 2097152,
                                                                "start": 12,
                                                                "end": 14
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 11,
                                                        "end": 15
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 19
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    {
                                                        "kind": 138,
                                                        "types": [
                                                            {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "q",
                                                                    "rawText": "q",
                                                                    "flags": 96,
                                                                    "start": 21,
                                                                    "end": 23
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 21,
                                                                "end": 23
                                                            },
                                                            {
                                                                "kind": 290,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "typeName": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 27,
                                                                        "end": 28
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 25,
                                                                    "end": 28
                                                                },
                                                                "flags": 2097152,
                                                                "start": 25,
                                                                "end": 29
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 23,
                                                        "end": 29
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 29
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 33
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 33
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
                                            "start": 33,
                                            "end": 35
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 2097152,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 36
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 36,
                        "end": 39
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
                                "start": 39,
                                "end": 41
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 39,
                            "end": 41
                        },
                        "flags": 2097152,
                        "start": 39,
                        "end": 41
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 41
                },
                "flags": 2097152,
                "start": 8,
                "end": 41
            },
            "flags": 64,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "type a = (([-1] | x | q & (x)) => T) => T",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

type a = (([-1] | x | q & (x)) => T) => T

```

### Diagnostics

```javascript
✔ No errors
```

