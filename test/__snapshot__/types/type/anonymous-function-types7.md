# Kataw parser test case

## Input

`````js
type A = (...Array<string>) => void
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
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 18
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
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 25
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 18,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 26
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 26
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 30
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 35
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 30,
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
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type A = (...Array<string>) => void",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
type A = (...Array<string>) => void
```

### Diagnostics

```javascript
✔ No errors
```

