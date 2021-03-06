# Kataw parser test case

## Input

`````js
type a = (a[a & b][][][][][]) => T;
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
                                                        "kind": 311,
                                                        "objectType": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 10,
                                                                "end": 11
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
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
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 12,
                                                                            "end": 13
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 12,
                                                                        "end": 13
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 15,
                                                                            "end": 17
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 15,
                                                                        "end": 17
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 13,
                                                                "end": 17
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 17
                                                        },
                                                        "flags": 0,
                                                        "transformFlags": 0,
                                                        "start": 11,
                                                        "end": 19
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 20
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 22
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 24
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 28
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 29
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 34
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 34
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b][][][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
type a = (a[a & b][][][][][]) => T
```

### Diagnostics

```javascript
✔ No errors
```

