# Kataw parser test case

## Input

`````js
type a = (...b[([x])=> c] | d) => c;
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
                "text": "a",
                "rawText": "a",
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
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 13
                                },
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 14
                                            },
                                            "indexType": {
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
                                                                                    "transformFlags": 0,
                                                                                    "start": 17,
                                                                                    "end": 18
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 17,
                                                                                "end": 18
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 17,
                                                                            "end": 18
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 16,
                                                                    "end": 19
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 16,
                                                                "end": 19
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 20
                                                    },
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "returnType": {
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
                                                                "transformFlags": 0,
                                                                "start": 22,
                                                                "end": 24
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 24
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 24
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 24
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 27
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 29
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 29
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 35
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 35
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 35
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 35
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = (...b[([x])=> c] | d) => c;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
type a = (...b[([x]) =>  c] | d) =>  c
```

### Diagnostics

```javascript
✔ No errors
```

