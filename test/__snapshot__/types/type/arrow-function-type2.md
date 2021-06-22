# Kataw parser test case

## Input

`````js
type X = (x: y) => T;
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
                "text": "X",
                "rawText": "X",
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
                        "start": 15,
                        "end": 18
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 14
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
                                "start": 18,
                                "end": 20
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 2097152,
                        "start": 18,
                        "end": 20
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 20
                },
                "flags": 2097152,
                "start": 8,
                "end": 20
            },
            "flags": 2097152,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type X = (x: y) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

