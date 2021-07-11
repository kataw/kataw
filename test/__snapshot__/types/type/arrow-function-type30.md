# Kataw parser test case

## Input

`````js
type a = (a[][][][][][]) => T;
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
                                    "kind": 136,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 136,
                                                "type": {
                                                    "kind": 136,
                                                    "type": {
                                                        "kind": 136,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
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
                                                        "flags": 2097152,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "flags": 2097152,
                                                    "start": 11,
                                                    "end": 15
                                                },
                                                "flags": 2097152,
                                                "start": 11,
                                                "end": 17
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 11,
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
    "source": "type a = (a[][][][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  type a = (a[][][][][][]) => T

```

### Diagnostics

```javascript
✔ No errors
```

