# Kataw parser test case

## Input

`````js
async <T: U>(x) => y;

(async <T: U>(x) => y);
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 15,
                    "end": 18
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
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 2097152,
                                    "start": 9,
                                    "end": 11
                                },
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 0,
                                "end": 11
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
                        "start": 13,
                        "end": 14
                    }
                ],
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 288,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 39,
                        "end": 42
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
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 32
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "U",
                                                "rawText": "U",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 33,
                                            "end": 35
                                        },
                                        "flags": 2097152,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 24,
                                    "end": 35
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 24,
                            "end": 44
                        },
                        "flags": 2097152,
                        "start": 24,
                        "end": 44
                    },
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 37,
                            "end": 38
                        }
                    ],
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 24,
                        "end": 29
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 42,
                        "end": 44
                    },
                    "flags": 288,
                    "start": 24,
                    "end": 44
                },
                "flags": 32,
                "start": 21,
                "end": 45
            },
            "flags": 16,
            "start": 21,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async <T: U>(x) => y;\n\n(async <T: U>(x) => y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

async (x) =>  y;
(async (x) =>  y);
```

### Diagnostics

```javascript
✔ No errors
```

