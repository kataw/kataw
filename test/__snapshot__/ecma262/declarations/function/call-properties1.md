# Kataw parser test case

## Input

`````js
function a(f: { (): string; (x: number): string }): string {
  return f() + f(123);
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
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
                                        "staticKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 19,
                                                "end": 26
                                            },
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 27
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
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
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "start": 31,
                                                            "end": 38
                                                        },
                                                        "flags": 2097152,
                                                        "start": 31,
                                                        "end": 38
                                                    },
                                                    "flags": 2097152,
                                                    "start": 29,
                                                    "end": 38
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 29,
                                            "end": 38
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 40,
                                                "end": 47
                                            },
                                            "flags": 2097152,
                                            "start": 40,
                                            "end": 47
                                        },
                                        "flags": 2097152,
                                        "start": 27,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 13,
                                "end": 49
                            },
                            "flags": 2097152,
                            "start": 13,
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
                "start": 11,
                "end": 49
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
                                "start": 60,
                                "end": 69
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 69,
                                        "end": 71
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 72,
                                        "end": 72
                                    },
                                    "flags": 268435488,
                                    "start": 69,
                                    "end": 73
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 73,
                                    "end": 75
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 75,
                                        "end": 77
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 96,
                                                "start": 78,
                                                "end": 81
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 78,
                                        "end": 81
                                    },
                                    "flags": 268435488,
                                    "start": 75,
                                    "end": 82
                                },
                                "flags": 268435488,
                                "start": 69,
                                "end": 82
                            },
                            "flags": 81,
                            "start": 60,
                            "end": 83
                        }
                    ],
                    "flags": 33,
                    "start": 60,
                    "end": 83
                },
                "flags": 32,
                "start": 58,
                "end": 85
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "start": 51,
                    "end": 58
                },
                "flags": 2097152,
                "start": 51,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "function a(f: { (): string; (x: number): string }): string {\n  return f() + f(123);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

function a(f: { (): string, (x: number): string }): string {
  return f() + f(123);
}

```

### Diagnostics

```javascript
✔ No errors
```

