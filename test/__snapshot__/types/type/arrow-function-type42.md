# Kataw parser test case

## Input

`````js
type a = (...x?: string & foo | (...x: string & foo | bar) => T) => T;
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
                                "kind": 149,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 13
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 14
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 138,
                                                "types": [
                                                    {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 23
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 29
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 29
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 29
                                            },
                                            {
                                                "kind": 288,
                                                "typeParameters": null,
                                                "arrowTypeParameterList": {
                                                    "kind": 292,
                                                    "parameters": [
                                                        {
                                                            "kind": 149,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 33,
                                                                "end": 36
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 36,
                                                                "end": 37
                                                            },
                                                            "optionalToken": null,
                                                            "types": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 137,
                                                                    "types": [
                                                                        {
                                                                            "kind": 138,
                                                                            "types": [
                                                                                {
                                                                                    "kind": 134234347,
                                                                                    "flags": 2097216,
                                                                                    "transformFlags": 0,
                                                                                    "start": 38,
                                                                                    "end": 45
                                                                                },
                                                                                {
                                                                                    "kind": 144,
                                                                                    "typeName": {
                                                                                        "kind": 134299649,
                                                                                        "text": "foo",
                                                                                        "rawText": "foo",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 47,
                                                                                        "end": 51
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 47,
                                                                                    "end": 51
                                                                                }
                                                                            ],
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "typeName": {
                                                                                "kind": 134299649,
                                                                                "text": "bar",
                                                                                "rawText": "bar",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 53,
                                                                                "end": 57
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 53,
                                                                            "end": 57
                                                                        }
                                                                    ],
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 51,
                                                                    "end": 57
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 38,
                                                                "end": 57
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 57
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 61
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
                                                            "start": 61,
                                                            "end": 63
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 63
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 61,
                                                    "end": 63
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 63
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 63
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 63
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 63
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 67
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
                                "start": 67,
                                "end": 69
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 69
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 69
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 69
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 69
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "type a = (...x?: string & foo | (...x: string & foo | bar) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
type a = (...x? : string & foo | (...x: string & foo | bar) => T) => T
```

### Diagnostics

```javascript
✔ No errors
```

