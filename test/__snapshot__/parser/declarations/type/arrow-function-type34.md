# Kataw parser test case

## Input

`````js
type a = (a[a & b][c | d][{a():string}][][][]) => T;
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
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 46,
                    "end": 49
                },
                "parameters": {
                    "kind": 136,
                    "type": {
                        "kind": 136,
                        "type": {
                            "kind": 136,
                            "type": {
                                "kind": 268,
                                "objectType": {
                                    "kind": 268,
                                    "objectType": {
                                        "kind": 268,
                                        "objectType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "indexType": {
                                            "kind": 138,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 17
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 15,
                                                    "end": 17
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 13,
                                            "end": 17
                                        },
                                        "flags": 0,
                                        "start": 12,
                                        "end": 19
                                    },
                                    "indexType": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 19,
                                                "end": 20
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 22,
                                                "end": 24
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "flags": 0,
                                    "start": 19,
                                    "end": 26
                                },
                                "indexType": {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "protoKeyword": null,
                                            "staticToken": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "value": {
                                                "kind": 148,
                                                "parameters": {
                                                    "kind": 208,
                                                    "parameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "returnType": {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "start": 31,
                                                    "end": 37
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 28,
                                                "end": 37
                                            },
                                            "flags": 0,
                                            "start": 27,
                                            "end": 37
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 38
                                },
                                "flags": 0,
                                "start": 26,
                                "end": 40
                            },
                            "flags": 0,
                            "start": 40,
                            "end": 41
                        },
                        "flags": 0,
                        "start": 42,
                        "end": 43
                    },
                    "flags": 0,
                    "start": 44,
                    "end": 45
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 49,
                        "end": 51
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 49,
                    "end": 51
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b][c | d][{a():string}][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

