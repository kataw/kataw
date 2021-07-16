# Kataw parser test case

## Input

`````js
type A = (string) => void
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
                                    "kind": 134234347,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 10,
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
                            "kind": 138477615,
                            "flags": 2097216,
                            "transformFlags": 8192,
                            "start": 20,
                            "end": 25
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 25
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 25
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 25
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "type A = (string) => void",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
type A = (string) => void
```

### Diagnostics

```javascript
✔ No errors
```

