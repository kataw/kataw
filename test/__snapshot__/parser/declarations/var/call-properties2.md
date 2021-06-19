# Kataw parser test case

## Input

`````js
// It should be fine when a function satisfies them all
var b: { (): string; (x: number): string } =
  function (x?: number): string { return "hi"; };

// ...but should notice when a function doesn't satisfy them all
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
                "flags": 81,
                "start": 0,
                "end": 59
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
                            "start": 59,
                            "end": 61
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
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 66,
                                            "end": 66
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 68,
                                                "end": 75
                                            },
                                            "flags": 2097152,
                                            "start": 68,
                                            "end": 75
                                        },
                                        "flags": 2097152,
                                        "start": 64,
                                        "end": 76
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
                                                        "start": 78,
                                                        "end": 79
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "start": 80,
                                                            "end": 87
                                                        },
                                                        "flags": 2097152,
                                                        "start": 80,
                                                        "end": 87
                                                    },
                                                    "flags": 2097152,
                                                    "start": 78,
                                                    "end": 87
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 78,
                                            "end": 87
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 89,
                                                "end": 96
                                            },
                                            "flags": 2097152,
                                            "start": 89,
                                            "end": 96
                                        },
                                        "flags": 2097152,
                                        "start": 76,
                                        "end": 96
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 62,
                                "end": 98
                            },
                            "flags": 2097152,
                            "start": 62,
                            "end": 98
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 100,
                                "end": 111
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
                                            "start": 113,
                                            "end": 114
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 114,
                                            "end": 115
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 116,
                                                "end": 123
                                            },
                                            "flags": 2097152,
                                            "start": 116,
                                            "end": 123
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 113,
                                        "end": 123
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 111,
                                "end": 124
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
                                                "start": 134,
                                                "end": 141
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 141,
                                                "end": 146
                                            },
                                            "flags": 80,
                                            "start": 134,
                                            "end": 147
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 134,
                                    "end": 147
                                },
                                "flags": 32,
                                "start": 132,
                                "end": 149
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 125,
                                    "end": 132
                                },
                                "flags": 2097152,
                                "start": 125,
                                "end": 132
                            },
                            "flags": 32,
                            "start": 100,
                            "end": 149
                        },
                        "flags": 16,
                        "start": 59,
                        "end": 149
                    }
                ],
                "flags": 16,
                "start": 59,
                "end": 149
            },
            "flags": 16,
            "start": 0,
            "end": 150
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 150,
                "end": 220
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
                            "start": 220,
                            "end": 222
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
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 227,
                                            "end": 227
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 229,
                                                "end": 236
                                            },
                                            "flags": 2097152,
                                            "start": 229,
                                            "end": 236
                                        },
                                        "flags": 2097152,
                                        "start": 225,
                                        "end": 237
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
                                                        "start": 239,
                                                        "end": 240
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "start": 241,
                                                            "end": 248
                                                        },
                                                        "flags": 2097152,
                                                        "start": 241,
                                                        "end": 248
                                                    },
                                                    "flags": 2097152,
                                                    "start": 239,
                                                    "end": 248
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 239,
                                            "end": 248
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 250,
                                                "end": 257
                                            },
                                            "flags": 2097152,
                                            "start": 250,
                                            "end": 257
                                        },
                                        "flags": 2097152,
                                        "start": 237,
                                        "end": 257
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 223,
                                "end": 259
                            },
                            "flags": 2097152,
                            "start": 223,
                            "end": 259
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 261,
                                "end": 272
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
                                            "start": 274,
                                            "end": 275
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 276,
                                                "end": 283
                                            },
                                            "flags": 2097152,
                                            "start": 276,
                                            "end": 283
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 274,
                                        "end": 283
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 272,
                                "end": 284
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
                                                "start": 294,
                                                "end": 301
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 301,
                                                "end": 306
                                            },
                                            "flags": 80,
                                            "start": 294,
                                            "end": 307
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 294,
                                    "end": 307
                                },
                                "flags": 32,
                                "start": 292,
                                "end": 309
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 285,
                                    "end": 292
                                },
                                "flags": 2097152,
                                "start": 285,
                                "end": 292
                            },
                            "flags": 32,
                            "start": 261,
                            "end": 309
                        },
                        "flags": 16,
                        "start": 220,
                        "end": 309
                    }
                ],
                "flags": 16,
                "start": 220,
                "end": 309
            },
            "flags": 16,
            "start": 150,
            "end": 310
        }
    ],
    "isModule": false,
    "source": "// It should be fine when a function satisfies them all\nvar b: { (): string; (x: number): string } =\n  function (x?: number): string { return \"hi\"; };\n\n// ...but should notice when a function doesn't satisfy them all\nvar c: { (): string; (x: number): string } =\n  function (x: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 310
}
```

### Printed

```javascript
// It should be fine when a function satisfies them all

var b:  = function (): string {
  return  "\"hi\"";
};
// ...but should notice when a function doesn't satisfy them all
var c:  = function (): string {
  return  "\"hi\"";
};
```

### Diagnostics

```javascript
✔ No errors
```

