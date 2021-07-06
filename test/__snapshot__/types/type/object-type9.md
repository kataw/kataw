# Kataw parser test case

## Input

`````js
type a = {await:y.z[][][]};
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
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 145,
                                                    "qualification": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 17
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 19
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 21
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 25
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 25
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 26
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 26
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = {await:y.z[][][]};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

type a = { await: y.z[][][] }
```

### Diagnostics

```javascript
✔ No errors
```

