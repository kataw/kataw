# Kataw parser test case

## Input

`````js
type a = ((1) => T) => T
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
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217968,
                                                "text": 1,
                                                "flags": 2097216,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 12
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
                                    "start": 13,
                                    "end": 16
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
                                            "start": 16,
                                            "end": 18
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 19
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 19,
                        "end": 22
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
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 22,
                            "end": 24
                        },
                        "flags": 2097152,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 24
                },
                "flags": 2097152,
                "start": 8,
                "end": 24
            },
            "flags": 2097152,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type a = ((1) => T) => T",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

