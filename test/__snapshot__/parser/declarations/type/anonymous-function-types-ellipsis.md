# Kataw parser test case

## Input

`````js
type A = (Array<string>, ...Array<string>) => void
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
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 42,
                        "end": 45
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "typeParameters": {
                                        "kind": 309,
                                        "parameters": [
                                            {
                                                "kind": 310,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "start": 16,
                                                        "end": 22
                                                    },
                                                    "flags": 2097152,
                                                    "start": 16,
                                                    "end": 22
                                                },
                                                "flags": 2097152,
                                                "start": 16,
                                                "end": 22
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 23
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 23
                            },
                            {
                                "kind": 284,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 28
                                },
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 33
                                    },
                                    "typeParameters": {
                                        "kind": 309,
                                        "parameters": [
                                            {
                                                "kind": 310,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "start": 34,
                                                        "end": 40
                                                    },
                                                    "flags": 2097152,
                                                    "start": 34,
                                                    "end": 40
                                                },
                                                "flags": 2097152,
                                                "start": 34,
                                                "end": 40
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "flags": 2097152,
                                    "start": 24,
                                    "end": 41
                                },
                                "flags": 2097152,
                                "start": 24,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 41
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "start": 45,
                            "end": 50
                        },
                        "flags": 2097152,
                        "start": 45,
                        "end": 50
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 50
                },
                "flags": 2097152,
                "start": 8,
                "end": 50
            },
            "flags": 2097152,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "type A = (Array<string>, ...Array<string>) => void",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

