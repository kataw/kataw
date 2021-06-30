# Kataw parser test case

## Input

`````js
var d: { (): string } = function (x: number): string { return "hi"; };
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
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
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
                                                "start": 12,
                                                "end": 19
                                            },
                                            "flags": 2097152,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 21
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 23,
                                "end": 32
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
                                            "start": 34,
                                            "end": 35
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 36,
                                                "end": 43
                                            },
                                            "flags": 2097152,
                                            "start": 36,
                                            "end": 43
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 34,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 43
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
                                                "start": 54,
                                                "end": 61
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 61,
                                                "end": 66
                                            },
                                            "flags": 80,
                                            "start": 54,
                                            "end": 67
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 54,
                                    "end": 67
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 69
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
                            "flags": 32,
                            "start": 23,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 69
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 69
            },
            "flags": 16,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "var d: { (): string } = function (x: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

var d: { (): string } = function (x: number): string { return '"hi"'; };

```

### Diagnostics

```javascript
✔ No errors
```

