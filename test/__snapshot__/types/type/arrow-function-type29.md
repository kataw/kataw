# Kataw parser test case

## Input

`````js
type a = ((q | y, x?:string | (x?:string)=> T)=> T) => T;
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
                                            "kind": 292,
                                            "parameters": [
                                                {
                                                    "kind": 284,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 137,
                                                        "types": [
                                                            {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "q",
                                                                    "rawText": "q",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 11,
                                                                    "end": 12
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 8,
                                                                "end": 12
                                                            },
                                                            {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 14,
                                                                    "end": 16
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 14,
                                                                "end": 16
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 16
                                                    },
                                                    "optionalToken": null,
                                                    "types": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 16
                                                },
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "optionalToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 20
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
                                                                    "start": 21,
                                                                    "end": 27
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
                                                                                    "start": 31,
                                                                                    "end": 32
                                                                                },
                                                                                "optionalToken": {
                                                                                    "kind": 134217750,
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 32,
                                                                                    "end": 33
                                                                                },
                                                                                "types": {
                                                                                    "kind": 139,
                                                                                    "bitwiseOrToken": null,
                                                                                    "bitwiseAndToken": null,
                                                                                    "type": {
                                                                                        "kind": 134234347,
                                                                                        "flags": 2097216,
                                                                                        "transformFlags": 0,
                                                                                        "start": 34,
                                                                                        "end": 40
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 34,
                                                                                    "end": 40
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 29,
                                                                                "end": 40
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 29,
                                                                        "end": 40
                                                                    },
                                                                    "arrowToken": {
                                                                        "kind": 10,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 41,
                                                                        "end": 43
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
                                                                                "start": 43,
                                                                                "end": 45
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 43,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 43,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 45
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 27,
                                                            "end": 45
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 45
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 45
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 45
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 48
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 48
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
                                            "start": 48,
                                            "end": 50
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 51
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 54
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
                                "start": 54,
                                "end": 56
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 56
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 56
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 56
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 56
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "type a = ((q | y, x?:string | (x?:string)=> T)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
type a = ((q | y,
x? : string | (x?: string) => T) => T) => T
```

### Diagnostics

```javascript
✔ No errors
```

