# Kataw parser test case

## Input

`````js
type X = (x | y & z, q[t]) => T;
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
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
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
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 10,
                                                            "end": 11
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 8,
                                                        "end": 11
                                                    },
                                                    {
                                                        "kind": 138,
                                                        "types": [
                                                            {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 13,
                                                                    "end": 15
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 13,
                                                                "end": 15
                                                            },
                                                            {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "z",
                                                                    "rawText": "z",
                                                                    "flags": 96,
                                                                    "start": 17,
                                                                    "end": 19
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 17,
                                                                "end": 19
                                                            }
                                                        ],
                                                        "flags": 2097152,
                                                        "start": 15,
                                                        "end": 19
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "start": 11,
                                                "end": 19
                                            },
                                            "optionalToken": null,
                                            "types": null,
                                            "flags": 2097152,
                                            "start": 8,
                                            "end": 19
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 311,
                                                "objectType": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "q",
                                                        "rawText": "q",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 20,
                                                    "end": 22
                                                },
                                                "indexType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "t",
                                                            "rawText": "t",
                                                            "flags": 96,
                                                            "start": 23,
                                                            "end": 24
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    "flags": 2097152,
                                                    "start": 23,
                                                    "end": 24
                                                },
                                                "flags": 0,
                                                "start": 22,
                                                "end": 26
                                            },
                                            "flags": 2097152,
                                            "start": 20,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 25
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 26
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 26,
                        "end": 29
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
                                "start": 29,
                                "end": 31
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 29,
                            "end": 31
                        },
                        "flags": 2097152,
                        "start": 29,
                        "end": 31
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 31
                },
                "flags": 2097152,
                "start": 8,
                "end": 31
            },
            "flags": 64,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type X = (x | y & z, q[t]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

type X = (x | y & z, q[t]) => T

```

### Diagnostics

```javascript
✔ No errors
```

