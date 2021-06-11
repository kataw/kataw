# Kataw parser test case

## Input

`````js
var b: { (): string; (x: number): string } =
  function (x?: number): string { return "hi"; };
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 3,
                            "end": 5
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
                                            "start": 10,
                                            "end": 10
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 0,
                                        "start": 8,
                                        "end": 20
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
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 24,
                                                        "end": 31
                                                    },
                                                    "flags": 0,
                                                    "start": 22,
                                                    "end": 31
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 22,
                                            "end": 31
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 33,
                                            "end": 40
                                        },
                                        "flags": 0,
                                        "start": 20,
                                        "end": 40
                                    }
                                ],
                                "flags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 42
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 44,
                                "end": 55
                            },
                            "generatorToken": null,
                            "name": null,
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
                                            "start": 57,
                                            "end": 58
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 58,
                                            "end": 59
                                        },
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 60,
                                                "end": 67
                                            },
                                            "flags": 0,
                                            "start": 59,
                                            "end": 67
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 57,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 55,
                                "end": 68
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
                                                "flags": 80,
                                                "start": 78,
                                                "end": 85
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 85,
                                                "end": 90
                                            },
                                            "flags": 80,
                                            "start": 78,
                                            "end": 91
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 78,
                                    "end": 91
                                },
                                "flags": 32,
                                "start": 76,
                                "end": 93
                            },
                            "typeParameters": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 69,
                                    "end": 76
                                },
                                "flags": 0,
                                "start": 68,
                                "end": 76
                            },
                            "flags": 32,
                            "start": 44,
                            "end": 93
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 93
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 93
            },
            "flags": 16,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "var b: { (): string; (x: number): string } =\n  function (x?: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

var b = function (x?) {
  return  "\"hi\"";
};
```

### Diagnostics

```javascript
✔ No errors
```

