# Kataw parser test case

## Input

`````js
type a = (1 | 1[symbol & string]) => T;
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
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134217968,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 2097216,
                                            "start": 10,
                                            "end": 11
                                        },
                                        {
                                            "kind": 311,
                                            "objectType": {
                                                "kind": 134217968,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 2097216,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "indexType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 138,
                                                    "types": [
                                                        {
                                                            "kind": 134234343,
                                                            "flags": 2097216,
                                                            "start": 16,
                                                            "end": 22
                                                        },
                                                        {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "start": 24,
                                                            "end": 31
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 22,
                                                    "end": 31
                                                },
                                                "flags": 2097152,
                                                "start": 16,
                                                "end": 31
                                            },
                                            "flags": 0,
                                            "start": 13,
                                            "end": 33
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 32
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 33
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 33,
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
                                "start": 36,
                                "end": 38
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 36,
                            "end": 38
                        },
                        "flags": 2097152,
                        "start": 36,
                        "end": 38
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 38
                },
                "flags": 2097152,
                "start": 8,
                "end": 38
            },
            "flags": 64,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "type a = (1 | 1[symbol & string]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  type a = (1 | 1[ symbol & string]) => T

```

### Diagnostics

```javascript
✔ No errors
```

