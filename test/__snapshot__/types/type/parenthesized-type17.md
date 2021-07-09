# Kataw parser test case

## Input

`````js
type a = (bj[c])[d];
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
                    "kind": 311,
                    "objectType": {
                        "kind": 290,
                        "type": {
                            "kind": 311,
                            "objectType": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "bj",
                                    "rawText": "bj",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 14
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 16
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
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
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 20
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 19
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c])[d];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
type a = (bj[c])[d]
```

### Diagnostics

```javascript
✔ No errors
```

