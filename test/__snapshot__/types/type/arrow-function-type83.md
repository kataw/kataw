# Kataw parser test case

## Input

`````js
type a = (([-1]) => T) => T
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
                                                            "kind": 313,
                                                            "subtractionToken": {
                                                                "kind": 134318643,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 12,
                                                                "end": 13
                                                            },
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 2097216,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 14
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 14
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 19
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 19
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
                                            "start": 19,
                                            "end": 21
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 22
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 25
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
                                "start": 25,
                                "end": 27
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 27
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 27
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = (([-1]) => T) => T",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
type a = (([-1]) => T) => T
```

### Diagnostics

```javascript
✔ No errors
```

