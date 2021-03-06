# Kataw parser test case

## Input

`````js
type a = ((x?:string | (x?:string)=> T)=> T) => T;
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
                                                        "transformFlags": 0,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "optionalToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 137,
                                                            "types": [
                                                                {
                                                                    "kind": 134234347,
                                                                    "flags": 2097216,
                                                                    "transformFlags": 0,
                                                                    "start": 14,
                                                                    "end": 20
                                                                },
                                                                {
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
                                                                                    "start": 24,
                                                                                    "end": 25
                                                                                },
                                                                                "optionalToken": {
                                                                                    "kind": 134217750,
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 25,
                                                                                    "end": 26
                                                                                },
                                                                                "types": {
                                                                                    "kind": 139,
                                                                                    "bitwiseOrToken": null,
                                                                                    "bitwiseAndToken": null,
                                                                                    "type": {
                                                                                        "kind": 134234347,
                                                                                        "flags": 2097216,
                                                                                        "transformFlags": 0,
                                                                                        "start": 27,
                                                                                        "end": 33
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 27,
                                                                                    "end": 33
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 22,
                                                                                "end": 33
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 33
                                                                    },
                                                                    "arrowToken": {
                                                                        "kind": 10,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 34,
                                                                        "end": 36
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
                                                                                "start": 36,
                                                                                "end": 38
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 36,
                                                                            "end": 38
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 36,
                                                                        "end": 38
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 38
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 38
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 38
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 38
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 38
                                        },
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 41
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
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 43
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 43
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 47
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 47
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
                                    "start": 47,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 49
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 49
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 49
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 49
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 49
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "type a = ((x?:string | (x?:string)=> T)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
type a = (((x?: string | (x?: string) => T) => T) => T)
```

### Diagnostics

```javascript
✔ No errors
```

