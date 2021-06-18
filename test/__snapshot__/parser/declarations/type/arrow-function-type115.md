# Kataw parser test case

## Input

`````js
type a = (1,2, 3) => T;
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
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134217968,
                                        "text": 1,
                                        "flags": 2097216,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 11
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 11
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
                                        "kind": 134217968,
                                        "text": 2,
                                        "flags": 2097216,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 13
                                },
                                "flags": 2097152,
                                "start": 12,
                                "end": 13
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
                                        "kind": 134217968,
                                        "text": 3,
                                        "flags": 2097216,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "flags": 2097152,
                                    "start": 14,
                                    "end": 16
                                },
                                "flags": 2097152,
                                "start": 14,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 16
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 17,
                        "end": 20
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
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 2097152,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 22
                },
                "flags": 2097152,
                "start": 8,
                "end": 22
            },
            "flags": 2097152,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type a = (1,2, 3) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

