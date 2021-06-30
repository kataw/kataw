# Kataw parser test case

## Input

`````js
type a = (...x: string & foo | (...x: string & foo | bar) => T) => T;
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
                                    "start": 10,
                                    "end": 13
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
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
                                                        "start": 15,
                                                        "end": 22
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 28
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 24,
                                                        "end": 28
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "start": 22,
                                                "end": 28
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
                                                                "start": 32,
                                                                "end": 35
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 35,
                                                                "end": 36
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
                                                                                    "start": 37,
                                                                                    "end": 44
                                                                                },
                                                                                {
                                                                                    "kind": 144,
                                                                                    "typeName": {
                                                                                        "kind": 134299649,
                                                                                        "text": "foo",
                                                                                        "rawText": "foo",
                                                                                        "flags": 96,
                                                                                        "start": 46,
                                                                                        "end": 50
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "start": 46,
                                                                                    "end": 50
                                                                                }
                                                                            ],
                                                                            "flags": 2097152,
                                                                            "start": 44,
                                                                            "end": 50
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "typeName": {
                                                                                "kind": 134299649,
                                                                                "text": "bar",
                                                                                "rawText": "bar",
                                                                                "flags": 96,
                                                                                "start": 52,
                                                                                "end": 56
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 52,
                                                                            "end": 56
                                                                        }
                                                                    ],
                                                                    "flags": 2097152,
                                                                    "start": 50,
                                                                    "end": 56
                                                                },
                                                                "flags": 2097152,
                                                                "start": 37,
                                                                "end": 56
                                                            },
                                                            "flags": 2097152,
                                                            "start": 32,
                                                            "end": 56
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 32,
                                                    "end": 56
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 57,
                                                    "end": 60
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
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "flags": 2097152,
                                                    "start": 60,
                                                    "end": 62
                                                },
                                                "flags": 2097152,
                                                "start": 30,
                                                "end": 62
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 28,
                                        "end": 62
                                    },
                                    "flags": 2097152,
                                    "start": 15,
                                    "end": 62
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 62
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 10,
                        "end": 62
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 63,
                        "end": 66
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
                                "start": 66,
                                "end": 68
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 66,
                            "end": 68
                        },
                        "flags": 2097152,
                        "start": 66,
                        "end": 68
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 68
                },
                "flags": 2097152,
                "start": 8,
                "end": 68
            },
            "flags": 64,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "type a = (...x: string & foo | (...x: string & foo | bar) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

type a = (...x: string & foo | (...x: string & foo | bar) => T) => T

```

### Diagnostics

```javascript
✔ No errors
```

