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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
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
                                            "kind": 208,
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
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 19,
                                                        "end": 26
                                                    },
                                                    "flags": 0,
                                                    "start": 17,
                                                    "end": 26
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 13,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 12,
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
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 51,
                        "end": 54
                    },
                    "parameters": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 149,
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
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 43,
                                    "end": 50
                                },
                                "flags": 0,
                                "start": 39,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 39,
                        "end": 50
                    },
                    "returnType": {
                        "kind": 134234345,
                        "flags": 64,
                        "start": 54,
                        "end": 61
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 39,
                    "end": 61
                },
                "flags": 0,
                "start": 0,
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

function b(x) {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

