# Kataw parser test case

## Input

`````js
async function x() {
  await {y: [11]}?.z[0];
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 512,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 1,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 201392130,
                                                                    "text": 11,
                                                                    "rawText": "11",
                                                                    "flags": 768,
                                                                    "start": 34,
                                                                    "end": 36
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "flags": 256,
                                                        "start": 32,
                                                        "end": 37
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    "flags": 256,
                                                    "start": 30,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "flags": 256,
                                        "start": 28,
                                        "end": 38
                                    },
                                    "chain": {
                                        "kind": 203,
                                        "chain": {
                                            "kind": 206,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 768,
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "flags": 256,
                                                "start": 40,
                                                "end": 41
                                            },
                                            "flags": 256,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "flags": 256,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "flags": 256,
                                    "start": 28,
                                    "end": 44
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 44
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 45
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 20,
                    "end": 45
                },
                "flags": 256,
                "start": 18,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "async function x() {\n  await {y: [11]}?.z[0];\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

