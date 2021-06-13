# Kataw parser test case

## Input

`````js
type a = ({set y(y): string}) => T;
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
                "kind": 261,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 29,
                    "end": 32
                },
                "arrowToken": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 134234353,
                            "properties": [
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticToken": null,
                                    "getKeyword": null,
                                    "setKeyword": {
                                        "kind": 16499,
                                        "flags": 96,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "key": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 148,
                                        "functionTypeParameterList": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 284,
                                                    "ellipsisToken": null,
                                                    "name": null,
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 18
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "flags": 2097152,
                                                    "start": 17,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 20,
                                            "end": 27
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 10,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 32
                },
                "returnType": {
                    "kind": 144,
                    "id": {
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
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 34
            },
            "flags": 2097152,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type a = ({set y(y): string}) => T;",
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

