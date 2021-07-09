# Kataw parser test case

## Input

`````js
type a = (a[b][]) => T;
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
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
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
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 15
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 16
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 20
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
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 22
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 22
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type a = (a[b][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
type a = (a[b][]) => T
```

### Diagnostics

```javascript
✔ No errors
```

