# Kataw parser test case

## Input

`````js
function b(x: { (z: number): string }): (z: number) => number {
  return x;
}
`````

## Options

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
                "text": "b",
                "rawText": "b",
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
                                        "staticToken": null,
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
                "start": 11,
                "end": 37
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
                                "start": 63,
                                "end": 72
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 72,
                                "end": 74
                            },
                            "flags": 81,
                            "start": 63,
                            "end": 75
                        }
                    ],
                    "flags": 33,
                    "start": 63,
                    "end": 75
                },
                "flags": 32,
                "start": 61,
                "end": 77
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 42
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 43,
                                        "end": 50
                                    },
                                    "flags": 2097152,
                                    "start": 43,
                                    "end": 50
                                },
                                "flags": 2097152,
                                "start": 39,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 39,
                        "end": 50
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 51,
                        "end": 54
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 54,
                            "end": 61
                        },
                        "flags": 2097152,
                        "start": 54,
                        "end": 61
                    },
                    "flags": 2097152,
                    "start": 39,
                    "end": 61
                },
                "flags": 2097152,
                "start": 39,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 77
        }
    ],
    "isModule": false,
    "source": "function b(x: { (z: number): string }): (z: number) => number {\n  return x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

function b():  {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

