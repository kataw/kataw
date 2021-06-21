# Kataw parser test case

## Input

`````js
type X = {[|(x) =>x&symbol[][x|y]]: string,};
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
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 139,
                                "bitwiseOrToken": {
                                    "kind": 134251592,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 12
                                },
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
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 138,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 18,
                                                    "end": 19
                                                },
                                                {
                                                    "kind": 311,
                                                    "objectType": {
                                                        "kind": 136,
                                                        "type": {
                                                            "kind": 134234343,
                                                            "flags": 2097216,
                                                            "start": 20,
                                                            "end": 26
                                                        },
                                                        "flags": 2097152,
                                                        "start": 26,
                                                        "end": 28
                                                    },
                                                    "indexType": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 137,
                                                            "types": [
                                                                {
                                                                    "kind": 144,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 29,
                                                                        "end": 30
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 29,
                                                                    "end": 30
                                                                },
                                                                {
                                                                    "kind": 144,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 96,
                                                                        "start": 31,
                                                                        "end": 32
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 31,
                                                                    "end": 32
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "flags": 2097152,
                                                        "start": 29,
                                                        "end": 32
                                                    },
                                                    "flags": 0,
                                                    "start": 26,
                                                    "end": 34
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 33
                                        },
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 33
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 33
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 35,
                                    "end": 42
                                },
                                "flags": 2097152,
                                "start": 35,
                                "end": 42
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 44
                },
                "flags": 2097152,
                "start": 8,
                "end": 44
            },
            "flags": 2097152,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "type X = {[|(x) =>x&symbol[][x|y]]: string,};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

