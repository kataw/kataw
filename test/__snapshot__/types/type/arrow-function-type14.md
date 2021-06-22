# Kataw parser test case

## Input

`````js
type a = (?c & a | b) => T;
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
                        "kind": 10,
                        "flags": 64,
                        "start": 21,
                        "end": 24
                    },
                    "arrowToken": {
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
                                            "kind": 138,
                                            "types": [
                                                {
                                                    "kind": 134217970,
                                                    "nullableToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 11,
                                                            "end": 12
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "flags": 2097152,
                                                    "start": 10,
                                                    "end": 12
                                                },
                                                {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 14,
                                                    "end": 16
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 12,
                                            "end": 16
                                        },
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 20
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 24
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
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 24,
                        "end": 26
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 26
                },
                "flags": 2097152,
                "start": 8,
                "end": 26
            },
            "flags": 2097152,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = (?c & a | b) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

