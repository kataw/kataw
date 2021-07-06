# Kataw parser test case

## Input

`````js
var c: { (): string; (x: number): string } =
  function (x: number): string { return "hi"; };
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
                "transformFlags": 0,
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
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
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 19
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 20
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
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "transformFlags": 0,
                                                            "start": 24,
                                                            "end": 31
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 31
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 31
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 31
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 40
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 42
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 55
                            },
                            "asteriskToken": null,
                            "name": null,
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
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 58
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 66
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 66
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 66
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
                                                "transformFlags": 0,
                                                "start": 77,
                                                "end": 84
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 89
                                            },
                                            "flags": 80,
                                            "transformFlags": 256,
                                            "start": 77,
                                            "end": 90
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 77,
                                    "end": 90
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 92
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 75
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 75
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 92
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 92
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 92
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 93
        }
    ],
    "isModule": false,
    "source": "var c: { (): string; (x: number): string } =\n  function (x: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript

var c: { (): string , (x: number ): string  } = function (x: number ): string  {
    return "\"hi\"";
  };
```

### Diagnostics

```javascript
✔ No errors
```

