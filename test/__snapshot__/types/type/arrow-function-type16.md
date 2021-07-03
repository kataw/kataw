# Kataw parser test case

## Input

`````js
type a = (bj[c] & a | b) => T;
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
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 138,
                                            "types": [
                                                {
                                                    "kind": 311,
                                                    "objectType": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "bj",
                                                            "rawText": "bj",
                                                            "flags": 96,
                                                            "start": 10,
                                                            "end": 12
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 8,
                                                        "end": 12
                                                    },
                                                    "indexType": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 13,
                                                                "end": 14
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 13,
                                                            "end": 14
                                                        },
                                                        "flags": 2097152,
                                                        "start": 13,
                                                        "end": 14
                                                    },
                                                    "flags": 0,
                                                    "start": 12,
                                                    "end": 17
                                                },
                                                {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 17,
                                                    "end": 19
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 15,
                                            "end": 19
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 21,
                                            "end": 23
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 23
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 24
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 24,
                        "end": 27
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
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 2097152,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 29
                },
                "flags": 2097152,
                "start": 8,
                "end": 29
            },
            "flags": 64,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c] & a | b) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

type a = (bj[ c] & a | b) => T

```

### Diagnostics

```javascript
✔ No errors
```

