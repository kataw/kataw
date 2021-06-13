# Kataw parser test case

## Input

`````js
var a: { (x: number): string } = function (x: number): string { return "hi"; };
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
                            "text": "a",
                            "rawText": "a",
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
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 2097216,
                                                        "start": 12,
                                                        "end": 19
                                                    },
                                                    "flags": 2097152,
                                                    "start": 10,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 10,
                                            "end": 19
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 30
                            },
                            "flags": 2097152,
                            "start": 5,
                            "end": 30
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 32,
                                "end": 41
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
                                            "start": 43,
                                            "end": 44
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 45,
                                                "end": 52
                                            },
                                            "flags": 2097152,
                                            "start": 44,
                                            "end": 52
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 43,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 41,
                                "end": 53
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
                                                "start": 63,
                                                "end": 70
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 70,
                                                "end": 75
                                            },
                                            "flags": 80,
                                            "start": 63,
                                            "end": 76
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 63,
                                    "end": 76
                                },
                                "flags": 32,
                                "start": 61,
                                "end": 78
                            },
                            "typeParameters": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 54,
                                    "end": 61
                                },
                                "flags": 2097152,
                                "start": 53,
                                "end": 61
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 78
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 78
            },
            "flags": 16,
            "start": 0,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "var a: { (x: number): string } = function (x: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

var a = function (x) {
  return  "\"hi\"";
};
```

### Diagnostics

```javascript
✔ No errors
```

