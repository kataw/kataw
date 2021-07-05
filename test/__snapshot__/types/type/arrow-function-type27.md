# Kataw parser test case

## Input

`````js
type a = ((x?:string, (x?:string)=> T)=> T) => T;
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
                "end": 4
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
                        "typeParameters": null,
                        "arrowTypeParameterList": {
                            "kind": 292,
                            "parameters": [
                                {
                                    "kind": 144,
                                    "typeName": {
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
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "optionalToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "start": 14,
                                                            "end": 20
                                                        },
                                                        "flags": 2097152,
                                                        "start": 14,
                                                        "end": 20
                                                    },
                                                    "flags": 2097152,
                                                    "start": 8,
                                                    "end": 20
                                                },
                                                {
                                                    "kind": 284,
                                                    "ellipsisToken": null,
                                                    "name": null,
                                                    "optionalToken": null,
                                                    "types": {
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
                                                                            "start": 23,
                                                                            "end": 24
                                                                        },
                                                                        "optionalToken": {
                                                                            "kind": 134217750,
                                                                            "flags": 64,
                                                                            "start": 24,
                                                                            "end": 25
                                                                        },
                                                                        "types": {
                                                                            "kind": 139,
                                                                            "bitwiseOrToken": null,
                                                                            "bitwiseAndToken": null,
                                                                            "type": {
                                                                                "kind": 134234347,
                                                                                "flags": 2097216,
                                                                                "start": 26,
                                                                                "end": 32
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 26,
                                                                            "end": 32
                                                                        },
                                                                        "flags": 2097152,
                                                                        "start": 21,
                                                                        "end": 32
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 2097152,
                                                                "start": 21,
                                                                "end": 32
                                                            },
                                                            "arrowToken": {
                                                                "kind": 10,
                                                                "flags": 64,
                                                                "start": 33,
                                                                "end": 35
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
                                                                        "start": 35,
                                                                        "end": 37
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 35,
                                                                    "end": 37
                                                                },
                                                                "flags": 2097152,
                                                                "start": 35,
                                                                "end": 37
                                                            },
                                                            "flags": 2097152,
                                                            "start": 21,
                                                            "end": 37
                                                        },
                                                        "flags": 2097152,
                                                        "start": 21,
                                                        "end": 37
                                                    },
                                                    "flags": 2097152,
                                                    "start": 21,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 8,
                                            "end": 37
                                        },
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 38,
                                            "end": 40
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
                                                    "start": 40,
                                                    "end": 42
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "flags": 2097152,
                                            "start": 40,
                                            "end": 42
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 42
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 42
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 8,
                            "end": 46
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 43,
                            "end": 46
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
                                    "start": 46,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 2097152,
                            "start": 46,
                            "end": 48
                        },
                        "flags": 2097152,
                        "start": 8,
                        "end": 48
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 48
                },
                "flags": 2097152,
                "start": 8,
                "end": 48
            },
            "flags": 64,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "type a = ((x?:string, (x?:string)=> T)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

type a = (((x?: string ,
(x?: string ) =>  T) =>  T) =>  T)
```

### Diagnostics

```javascript
✔ No errors
```

