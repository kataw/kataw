# Kataw parser test case

## Input

`````js
type X = (x | y & z, q: string) => T;
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
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "q",
                                                "rawText": "q",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 23,
                                                    "end": 30
                                                },
                                                "flags": 2097152,
                                                "start": 23,
                                                "end": 30
                                            },
                                            "flags": 2097152,
                                            "start": 20,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 30
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 31
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 31,
                        "end": 34
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
                                "start": 34,
                                "end": 36
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 2097152,
                        "start": 34,
                        "end": 36
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 36
                },
                "flags": 2097152,
                "start": 8,
                "end": 36
            },
            "flags": 64,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "type X = (x | y & z, q: string) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

type X = (x | y & z,
q: string ) =>  T
```

### Diagnostics

```javascript
✔ No errors
```

