# Kataw parser test case

## Input

`````js
// Only one call property needs to match the function
function d(x: { (): string; (x: number): string }): () => string {
  return x;
}

// ...but you need at least one
function e(x: { (): string; (x: number): string }): () => number {
  return x;
}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 0,
                "end": 62
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 62,
                "end": 64
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 65,
                            "end": 66
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 71,
                                            "end": 71
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 73,
                                            "end": 80
                                        },
                                        "flags": 0,
                                        "start": 69,
                                        "end": 81
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 83,
                                                        "end": 84
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 85,
                                                        "end": 92
                                                    },
                                                    "flags": 0,
                                                    "start": 83,
                                                    "end": 92
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 83,
                                            "end": 92
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 94,
                                            "end": 101
                                        },
                                        "flags": 0,
                                        "start": 81,
                                        "end": 101
                                    }
                                ],
                                "flags": 0,
                                "start": 67,
                                "end": 103
                            },
                            "flags": 0,
                            "start": 66,
                            "end": 103
                        },
                        "right": null,
                        "flags": 32,
                        "start": 65,
                        "end": 103
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 64,
                "end": 104
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 120,
                                "end": 129
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 129,
                                "end": 131
                            },
                            "flags": 81,
                            "start": 120,
                            "end": 132
                        }
                    ],
                    "flags": 33,
                    "start": 120,
                    "end": 132
                },
                "flags": 32,
                "start": 118,
                "end": 134
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 108,
                        "end": 111
                    },
                    "parameters": {
                        "kind": 208,
                        "functionTypeParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 107,
                        "end": 107
                    },
                    "returnType": {
                        "kind": 134234347,
                        "flags": 64,
                        "start": 111,
                        "end": 118
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 107,
                    "end": 118
                },
                "flags": 0,
                "start": 0,
                "end": 118
            },
            "flags": 16,
            "start": 0,
            "end": 134
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 134,
                "end": 176
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "e",
                "rawText": "e",
                "flags": 96,
                "start": 176,
                "end": 178
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 179,
                            "end": 180
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 185,
                                            "end": 185
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 187,
                                            "end": 194
                                        },
                                        "flags": 0,
                                        "start": 183,
                                        "end": 195
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 197,
                                                        "end": 198
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 199,
                                                        "end": 206
                                                    },
                                                    "flags": 0,
                                                    "start": 197,
                                                    "end": 206
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 197,
                                            "end": 206
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 208,
                                            "end": 215
                                        },
                                        "flags": 0,
                                        "start": 195,
                                        "end": 215
                                    }
                                ],
                                "flags": 0,
                                "start": 181,
                                "end": 217
                            },
                            "flags": 0,
                            "start": 180,
                            "end": 217
                        },
                        "right": null,
                        "flags": 32,
                        "start": 179,
                        "end": 217
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 178,
                "end": 218
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 234,
                                "end": 243
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 243,
                                "end": 245
                            },
                            "flags": 81,
                            "start": 234,
                            "end": 246
                        }
                    ],
                    "flags": 33,
                    "start": 234,
                    "end": 246
                },
                "flags": 32,
                "start": 232,
                "end": 248
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 222,
                        "end": 225
                    },
                    "parameters": {
                        "kind": 208,
                        "functionTypeParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 221,
                        "end": 221
                    },
                    "returnType": {
                        "kind": 134234345,
                        "flags": 64,
                        "start": 225,
                        "end": 232
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 221,
                    "end": 232
                },
                "flags": 0,
                "start": 134,
                "end": 232
            },
            "flags": 16,
            "start": 134,
            "end": 248
        }
    ],
    "isModule": false,
    "source": "// Only one call property needs to match the function\nfunction d(x: { (): string; (x: number): string }): () => string {\n  return x;\n}\n\n// ...but you need at least one\nfunction e(x: { (): string; (x: number): string }): () => number {\n  return x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 248
}
```

### Printed

```javascript
// Only one call property needs to match the function

function d(x) {
  return  x;
}
// ...but you need at least one
function e(x) {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

