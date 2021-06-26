# Kataw parser test case

## Input

`````js
type a = ([-1] | x | q & (x)) => T;
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
                                                            "start": 11,
                                                            "end": 12
                                                        },
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 2097216,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "flags": 2097152,
                                                    "start": 11,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 10,
                                            "end": 14
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 16,
                                            "end": 18
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
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 20,
                                                    "end": 22
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
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 24,
                                                        "end": 27
                                                    },
                                                    "flags": 2097152,
                                                    "start": 24,
                                                    "end": 28
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 22,
                                            "end": 28
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 14,
                                    "end": 28
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 29
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 29,
                        "end": 32
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
                                "start": 32,
                                "end": 34
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 2097152,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 34
                },
                "flags": 2097152,
                "start": 8,
                "end": 34
            },
            "flags": 64,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type a = ([-1] | x | q & (x)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

