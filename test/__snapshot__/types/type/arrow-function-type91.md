# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [x]))))) => T;
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
                                                "kind": 290,
                                                "type": {
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
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 23,
                                                                            "end": 24
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 23,
                                                                        "end": 24
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 23,
                                                                    "end": 24
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "start": 21,
                                                            "end": 25
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 25
                                                },
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 27
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 28
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 30
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
                },
                "flags": 2097152,
                "start": 8,
                "end": 35
            },
            "flags": 64,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [x]))))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

type a = ((x | (y & [[x]]))) => T

```

### Diagnostics

```javascript
✔ No errors
```

