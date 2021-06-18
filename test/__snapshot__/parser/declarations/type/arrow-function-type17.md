# Kataw parser test case

## Input

`````js
type a = (bj[c], a | b) => T;
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
                        "start": 23,
                        "end": 26
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 311,
                                    "objectType": {
                                        "kind": 144,
                                        "name": {
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
                                            "name": {
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
                                    "end": 16
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 15
                            },
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
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
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 20,
                                            "end": 22
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 2097152,
                                "start": 16,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 22
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
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 26,
                            "end": 28
                        },
                        "flags": 2097152,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 28
                },
                "flags": 2097152,
                "start": 8,
                "end": 28
            },
            "flags": 2097152,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c], a | b) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

