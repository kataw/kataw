# Kataw parser test case

## Input

`````js
function *stmt_yield(): Generator<number, void, void> {
  yield 0;
  yield "";
}

function *stmt_return_ok(): Generator<void, number, void> {
  return 0;
}

function *stmt_return_err(): Generator<void, number, void> {
  return "";
}

function *infer_stmt() {
  var x: boolean = yield 0;
  return "";
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "stmt_yield",
                "rawText": "stmt_yield",
                "flags": 96,
                "start": 10,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 21,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 55,
                                    "end": 63
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 63,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 55,
                                "end": 65
                            },
                            "flags": 16,
                            "start": 55,
                            "end": 66
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 66,
                                    "end": 74
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "",
                                    "rawText": "\"\"",
                                    "flags": 96,
                                    "start": 74,
                                    "end": 77
                                },
                                "flags": 32,
                                "start": 66,
                                "end": 77
                            },
                            "flags": 16,
                            "start": 66,
                            "end": 78
                        }
                    ],
                    "flags": 33,
                    "start": 55,
                    "end": 78
                },
                "flags": 32,
                "start": 53,
                "end": 80
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Generator",
                        "rawText": "Generator",
                        "flags": 96,
                        "start": 23,
                        "end": 33
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 34,
                                        "end": 40
                                    },
                                    "flags": 2097152,
                                    "start": 34,
                                    "end": 40
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 41,
                                        "end": 46
                                    },
                                    "flags": 2097152,
                                    "start": 41,
                                    "end": 46
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 47,
                                        "end": 52
                                    },
                                    "flags": 2097152,
                                    "start": 47,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 34,
                            "end": 52
                        },
                        "flags": 2097152,
                        "start": 33,
                        "end": 53
                    },
                    "flags": 2097152,
                    "start": 23,
                    "end": 53
                },
                "flags": 2097152,
                "start": 23,
                "end": 53
            },
            "flags": 272,
            "start": 0,
            "end": 80
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 80,
                "end": 90
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 90,
                "end": 92
            },
            "name": {
                "kind": 134299649,
                "text": "stmt_return_ok",
                "rawText": "stmt_return_ok",
                "flags": 96,
                "start": 92,
                "end": 106
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 107,
                "end": 107
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
                                "start": 141,
                                "end": 150
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 150,
                                "end": 152
                            },
                            "flags": 81,
                            "start": 141,
                            "end": 153
                        }
                    ],
                    "flags": 33,
                    "start": 141,
                    "end": 153
                },
                "flags": 32,
                "start": 139,
                "end": 155
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Generator",
                        "rawText": "Generator",
                        "flags": 96,
                        "start": 109,
                        "end": 119
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 120,
                                        "end": 124
                                    },
                                    "flags": 2097152,
                                    "start": 120,
                                    "end": 124
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 125,
                                        "end": 132
                                    },
                                    "flags": 2097152,
                                    "start": 125,
                                    "end": 132
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 133,
                                        "end": 138
                                    },
                                    "flags": 2097152,
                                    "start": 133,
                                    "end": 138
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 120,
                            "end": 138
                        },
                        "flags": 2097152,
                        "start": 119,
                        "end": 139
                    },
                    "flags": 2097152,
                    "start": 109,
                    "end": 139
                },
                "flags": 2097152,
                "start": 109,
                "end": 139
            },
            "flags": 272,
            "start": 80,
            "end": 155
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 155,
                "end": 165
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 165,
                "end": 167
            },
            "name": {
                "kind": 134299649,
                "text": "stmt_return_err",
                "rawText": "stmt_return_err",
                "flags": 96,
                "start": 167,
                "end": 182
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 183,
                "end": 183
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
                                "start": 217,
                                "end": 226
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "",
                                "rawText": "\"\"",
                                "flags": 96,
                                "start": 226,
                                "end": 229
                            },
                            "flags": 81,
                            "start": 217,
                            "end": 230
                        }
                    ],
                    "flags": 33,
                    "start": 217,
                    "end": 230
                },
                "flags": 32,
                "start": 215,
                "end": 232
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Generator",
                        "rawText": "Generator",
                        "flags": 96,
                        "start": 185,
                        "end": 195
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 196,
                                        "end": 200
                                    },
                                    "flags": 2097152,
                                    "start": 196,
                                    "end": 200
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 201,
                                        "end": 208
                                    },
                                    "flags": 2097152,
                                    "start": 201,
                                    "end": 208
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 209,
                                        "end": 214
                                    },
                                    "flags": 2097152,
                                    "start": 209,
                                    "end": 214
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 196,
                            "end": 214
                        },
                        "flags": 2097152,
                        "start": 195,
                        "end": 215
                    },
                    "flags": 2097152,
                    "start": 185,
                    "end": 215
                },
                "flags": 2097152,
                "start": 185,
                "end": 215
            },
            "flags": 272,
            "start": 155,
            "end": 232
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 232,
                "end": 242
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 242,
                "end": 244
            },
            "name": {
                "kind": 134299649,
                "text": "infer_stmt",
                "rawText": "infer_stmt",
                "flags": 96,
                "start": 244,
                "end": 254
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 255,
                "end": 255
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 258,
                                "end": 264
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 264,
                                            "end": 266
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234254,
                                                "flags": 2097216,
                                                "start": 267,
                                                "end": 275
                                            },
                                            "flags": 2097152,
                                            "start": 267,
                                            "end": 275
                                        },
                                        "initializer": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 277,
                                                "end": 283
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 283,
                                                "end": 285
                                            },
                                            "flags": 32,
                                            "start": 277,
                                            "end": 285
                                        },
                                        "flags": 16,
                                        "start": 264,
                                        "end": 285
                                    }
                                ],
                                "flags": 16,
                                "start": 264,
                                "end": 285
                            },
                            "flags": 16,
                            "start": 258,
                            "end": 286
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 286,
                                "end": 295
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "",
                                "rawText": "\"\"",
                                "flags": 96,
                                "start": 295,
                                "end": 298
                            },
                            "flags": 81,
                            "start": 286,
                            "end": 299
                        }
                    ],
                    "flags": 33,
                    "start": 258,
                    "end": 299
                },
                "flags": 32,
                "start": 256,
                "end": 301
            },
            "returnType": null,
            "flags": 272,
            "start": 232,
            "end": 301
        }
    ],
    "isModule": false,
    "source": "function *stmt_yield(): Generator<number, void, void> {\n  yield 0;\n  yield \"\";\n}\n\nfunction *stmt_return_ok(): Generator<void, number, void> {\n  return 0;\n}\n\nfunction *stmt_return_err(): Generator<void, number, void> {\n  return \"\";\n}\n\nfunction *infer_stmt() {\n  var x: boolean = yield 0;\n  return \"\";\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 301
}
```

### Printed

```javascript

function * stmt_yield(): Generator<number, void, void> {
  yield  0;
  yield  "\"\"";
}
function * stmt_return_ok(): Generator<void, number, void> {
  return 0;
}
function * stmt_return_err(): Generator<void, number, void> {
  return "\"\"";
}
function * infer_stmt() {
  var x: boolean = yield  0;
  return "\"\"";
}

```

### Diagnostics

```javascript
✔ No errors
```

