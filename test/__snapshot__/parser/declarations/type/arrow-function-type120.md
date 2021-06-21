# Kataw parser test case

## Input

`````js
type a = (((| x )=> T) => T);
`````

## Options


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
                "text": "a",
                "rawText": "a",
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
                    "kind": 290,
                    "type": {
                        "kind": 288,
                        "arrowTypeParameterList": {
                            "kind": 10,
                            "flags": 64,
                            "start": 22,
                            "end": 25
                        },
                        "arrowToken": {
                            "kind": 292,
                            "parameters": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 288,
                                        "arrowTypeParameterList": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "arrowToken": {
                                            "kind": 292,
                                            "parameters": [
                                                {
                                                    "kind": 139,
                                                    "bitwiseOrToken": {
                                                        "kind": 134251592,
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "flags": 2097152,
                                                    "start": 12,
                                                    "end": 15
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 19
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 21
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 8,
                            "end": 25
                        },
                        "returnType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 25,
                            "end": 27
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 8,
                        "end": 27
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 28
                },
                "flags": 2097152,
                "start": 8,
                "end": 28
            },
            "flags": 2097152,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type a = (((| x )=> T) => T);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

 type a = () 
```

### Diagnostics

```javascript
✔ No errors
```

