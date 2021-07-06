# Kataw parser test case

## Input

`````js
type T = Array<(string) => number>
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
                "text": "T",
                "rawText": "T",
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
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
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
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 22
                                                    },
                                                    "optionalToken": null,
                                                    "types": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 23
                                        },
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 33
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 33
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 33
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 33
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 14,
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
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type T = Array<(string) => number>",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

type T = Array<(string) =>  number>
```

### Diagnostics

```javascript
✔ No errors
```

