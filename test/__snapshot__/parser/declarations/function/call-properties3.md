# Kataw parser test case

## Input

`````js
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "e",
                "rawText": "e",
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
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 27
                                    },
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
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 29,
                                                        "end": 30
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 31,
                                                        "end": 38
                                                    },
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 38
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 29,
                                            "end": 38
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 40,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "start": 27,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 13,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 49
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 49
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 50
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
                                "start": 66,
                                "end": 75
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 75,
                                "end": 77
                            },
                            "flags": 81,
                            "start": 66,
                            "end": 78
                        }
                    ],
                    "flags": 33,
                    "start": 66,
                    "end": 78
                },
                "flags": 32,
                "start": 64,
                "end": 80
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 54,
                        "end": 57
                    },
                    "parameters": {
                        "kind": 282,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 53,
                        "end": 53
                    },
                    "returnType": {
                        "kind": 134234345,
                        "flags": 64,
                        "start": 57,
                        "end": 64
                    },
                    "typeParameters": null,
                    "flags": 32,
                    "start": 51,
                    "end": 64
                },
                "flags": 32,
                "start": 0,
                "end": 64
            },
            "flags": 16,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "function e(x: { (): string; (x: number): string }): () => number {\n  return x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

function e(x) {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

