# Kataw parser test case

## Input

`````js
function d(x: { (z: number): string }): () => string {
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 8,
                "end": 10
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
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "start": 19,
                                                            "end": 26
                                                        },
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 26
                                                    },
                                                    "flags": 2097152,
                                                    "start": 17,
                                                    "end": 26
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 28,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 13,
                                "end": 37
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 37
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 37
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 38
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
                                "start": 54,
                                "end": 63
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 63,
                                "end": 65
                            },
                            "flags": 81,
                            "start": 54,
                            "end": 66
                        }
                    ],
                    "flags": 33,
                    "start": 54,
                    "end": 66
                },
                "flags": 32,
                "start": 52,
                "end": 68
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 288,
                        "arrowTypeParameterList": {
                            "kind": 292,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 41,
                            "end": 41
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 42,
                            "end": 45
                        },
                        "returnType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 45,
                                "end": 52
                            },
                            "flags": 2097152,
                            "start": 45,
                            "end": 52
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 39,
                        "end": 52
                    },
                    "flags": 2097152,
                    "start": 39,
                    "end": 52
                },
                "flags": 2097152,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "function d(x: { (z: number): string }): () => string {\n  return x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

function d(x) {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

