# Kataw parser test case

## Input

`````js
var f: { (): mixed } = function(): string { return "hi" } // return types
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
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
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "mixed",
                                                    "rawText": "mixed",
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 18
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 12,
                                                "end": 18
                                            },
                                            "flags": 2097152,
                                            "start": 12,
                                            "end": 18
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 20
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 20
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 22,
                                "end": 31
                            },
                            "generatorToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 31,
                                "end": 33
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
                                                "start": 43,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 55
                                            },
                                            "flags": 80,
                                            "start": 43,
                                            "end": 55
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 43,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 57
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 34,
                                    "end": 41
                                },
                                "flags": 2097152,
                                "start": 34,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 57
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 57
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "var f: { (): mixed } = function(): string { return \"hi\" } // return types",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

var f:  = function (): string {
  return  "\"hi\"";
}; // return types
```

### Diagnostics

```javascript
✔ No errors
```

