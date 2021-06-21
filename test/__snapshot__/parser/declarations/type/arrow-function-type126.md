# Kataw parser test case

## Input

`````js
type a = (|2&3,symbol['string']) => T;
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
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 139,
                                    "bitwiseOrToken": {
                                        "kind": 134251592,
                                        "flags": 64,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138,
                                        "types": [
                                            {
                                                "kind": 134217968,
                                                "text": 2,
                                                "flags": 2097216,
                                                "start": 11,
                                                "end": 12
                                            },
                                            {
                                                "kind": 134217968,
                                                "text": 3,
                                                "flags": 2097216,
                                                "start": 13,
                                                "end": 14
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 14
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 14
                            },
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 311,
                                    "objectType": {
                                        "kind": 134234343,
                                        "flags": 64,
                                        "start": 15,
                                        "end": 21
                                    },
                                    "indexType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217967,
                                            "text": "string",
                                            "flags": 2097216,
                                            "start": 22,
                                            "end": 30
                                        },
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 30
                                    },
                                    "flags": 0,
                                    "start": 21,
                                    "end": 32
                                },
                                "flags": 2097152,
                                "start": 15,
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
                        "start": 32,
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
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 37
                },
                "flags": 2097152,
                "start": 8,
                "end": 37
            },
            "flags": 2097152,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "type a = (|2&3,symbol['string']) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

