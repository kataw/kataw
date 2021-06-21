# Kataw parser test case

## Input

`````js
async <A = B, C = D>(x) => y;

(async <A = B, C = D>(x) => y);
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 2097152,
                                "start": 0,
                                "end": 12
                            },
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "type": null,
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "D",
                                            "rawText": "D",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 0,
                        "end": 20
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 20
                },
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 21,
                        "end": 22
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 23,
                    "end": 26
                },
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 26,
                    "end": 28
                },
                "flags": 288,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 32,
                        "end": 37
                    },
                    "typeParameters": {
                        "kind": 307,
                        "declarations": {
                            "kind": 337,
                            "parameters": [
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "type": null,
                                    "defaultType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 44
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 42,
                                            "end": 44
                                        },
                                        "flags": 2097152,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 2097152,
                                    "start": 32,
                                    "end": 44
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 96,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "type": null,
                                    "defaultType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 96,
                                                "start": 49,
                                                "end": 51
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 49,
                                            "end": 51
                                        },
                                        "flags": 2097152,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "flags": 2097152,
                                    "start": 45,
                                    "end": 51
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 32,
                            "end": 52
                        },
                        "flags": 2097152,
                        "start": 32,
                        "end": 52
                    },
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 53,
                            "end": 54
                        }
                    ],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 55,
                        "end": 58
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 58,
                        "end": 60
                    },
                    "flags": 288,
                    "start": 32,
                    "end": 60
                },
                "flags": 32,
                "start": 29,
                "end": 61
            },
            "flags": 16,
            "start": 29,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "async <A = B, C = D>(x) => y;\n\n(async <A = B, C = D>(x) => y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

 (x) =>y;, ((x) =>y); 
```

### Diagnostics

```javascript
✔ No errors
```

