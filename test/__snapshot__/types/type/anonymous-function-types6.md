# Kataw parser test case

## Input

`````js
type A = (x: string, number) => void
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
                "text": "A",
                "rawText": "A",
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 19
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 19
                            },
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 27
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 31
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 36
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 36
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 36
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 36
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type A = (x: string, number) => void",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
type A = (x: string, number) => void
```

### Diagnostics

```javascript
✔ No errors
```

