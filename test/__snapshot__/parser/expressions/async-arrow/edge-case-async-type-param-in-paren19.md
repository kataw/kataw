# Kataw parser test case

## Input

`````js
async <T, U,>(x) => y;

(async <T, U,>(x) => y);
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 0,
                            "end": 8
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 9,
                            "end": 11
                        }
                    ],
                    "trailingComma": true,
                    "flags": 2097152,
                    "start": 0,
                    "end": 12
                },
                "flags": 2097152,
                "start": 0,
                "end": 13
            },
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 16,
                "end": 19
            },
            "contents": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "flags": 288,
            "start": 0,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 21,
            "end": 22
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
                        "start": 25,
                        "end": 30
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
                                        "start": 32,
                                        "end": 33
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 25,
                                    "end": 33
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 34,
                                    "end": 36
                                }
                            ],
                            "trailingComma": true,
                            "flags": 2097152,
                            "start": 25,
                            "end": 37
                        },
                        "flags": 2097152,
                        "start": 25,
                        "end": 38
                    },
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 39,
                            "end": 40
                        }
                    ],
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 41,
                        "end": 44
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 44,
                        "end": 46
                    },
                    "flags": 288,
                    "start": 25,
                    "end": 46
                },
                "flags": 32,
                "start": 22,
                "end": 47
            },
            "flags": 16,
            "start": 22,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async <T, U,>(x) => y;\n\n(async <T, U,>(x) => y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

 (x) =>y ; ((x) =>y); 
```

### Diagnostics

```javascript
✔ No errors
```

