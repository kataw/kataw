# Kataw parser test case

## Input

`````js
async function x() {
  await {y: [11]}?.z[0];
}
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
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
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
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
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    "right": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 201392130,
                                                                    "text": 11,
                                                                    "rawText": "11",
                                                                    "flags": 96,
                                                                    "start": 34,
                                                                    "end": 36
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "flags": 32,
                                                        "start": 32,
                                                        "end": 37
                                                    },
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "flags": 48,
                                        "start": 28,
                                        "end": 38
                                    },
                                    "chain": {
                                        "kind": 203,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "flags": 536870944,
                                                "start": 40,
                                                "end": 41
                                            },
                                            "flags": 32,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "flags": 536870944,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 45
                },
                "flags": 32,
                "start": 18,
                "end": 47
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function x() {\n  await {y: [11]}?.z[0];\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

async function x() {
  await ;
}
```

### Diagnostics

```javascript
✔ No errors
```

