# Kataw parser test case

## Input

`````js
try {} catch (e) { if (0) ; else function e() {} }

try {} catch (e) { if (1) function e() {} }

try {} catch (e) { if (1) function e() {} }

try {} catch (e) { { function e() {} } }

try {} catch (e) { { function e() {} } }

try { var e } catch (e) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 21
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "consequent": {
                                    "kind": 168,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "elseKeyword": {
                                    "kind": 4194389,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 32
                                },
                                "alternate": {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 41
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "returnType": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 48
                                },
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 48
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 48
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 50
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 50
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 50,
                "end": 55
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 57
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 55,
                "end": 58
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 64
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 67
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 73
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 76
                                },
                                "consequent": {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 77,
                                        "end": 86
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 88
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 89
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 92,
                                            "end": 92
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 90,
                                        "end": 93
                                    },
                                    "returnType": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 77,
                                    "end": 93
                                },
                                "elseKeyword": null,
                                "alternate": null,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 93
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 93
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 95
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 58,
                "end": 95
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 50,
            "end": 95
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 95,
                "end": 100
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 102,
                    "end": 102
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 100,
                "end": 103
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 109
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 112
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 118
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 121
                                },
                                "consequent": {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 131
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 131,
                                        "end": 133
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 134,
                                        "end": 134
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 137,
                                            "end": 137
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 135,
                                        "end": 138
                                    },
                                    "returnType": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 122,
                                    "end": 138
                                },
                                "elseKeyword": null,
                                "alternate": null,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 138
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 115,
                        "end": 138
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 140
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 103,
                "end": 140
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 95,
            "end": 140
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 140,
                "end": 145
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 147
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 145,
                "end": 148
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 148,
                    "end": 154
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 157
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 162,
                                                "end": 171
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 171,
                                                "end": 173
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 174,
                                                "end": 174
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 177,
                                                    "end": 177
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 175,
                                                "end": 178
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 178
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 162,
                                    "end": 178
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 160,
                                "end": 180
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 160,
                        "end": 180
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 182
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 148,
                "end": 182
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 140,
            "end": 182
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 182,
                "end": 187
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 189
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 187,
                "end": 190
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 190,
                    "end": 196
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 198,
                    "end": 199
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 204,
                                                "end": 213
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 213,
                                                "end": 215
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 216
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 219,
                                                    "end": 219
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 217,
                                                "end": 220
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 204,
                                            "end": 220
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 204,
                                    "end": 220
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 222
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 202,
                        "end": 222
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 224
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 190,
                "end": 224
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 182,
            "end": 224
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 224,
                "end": 229
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 231,
                                "end": 235
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 235,
                                            "end": 237
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 235,
                                        "end": 237
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 235,
                                "end": 237
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 231,
                            "end": 237
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 231,
                    "end": 237
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 229,
                "end": 239
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 239,
                    "end": 245
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 247,
                    "end": 248
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 251,
                        "end": 251
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 249,
                    "end": 252
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 239,
                "end": 252
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 224,
            "end": 252
        }
    ],
    "isModule": false,
    "source": "try {} catch (e) { if (0) ; else function e() {} }\n\ntry {} catch (e) { if (1) function e() {} }\n\ntry {} catch (e) { if (1) function e() {} }\n\ntry {} catch (e) { { function e() {} } }\n\ntry {} catch (e) { { function e() {} } }\n\ntry { var e } catch (e) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 252
}
```

### Printed

```javascript
try {} catch (e) {
  if (0);
  else  function e() {}
}
try {} catch (e) {
  if (1) function e() {}
}

try {} catch (e) {
  if (1) function e() {}
}

try {} catch (e) {
  {
    function e() {}
  }
}

try {} catch (e) {
  {
    function e() {}
  }
}

try {
  var e;
} catch (e) {}

```

### Diagnostics

```javascript
✔ No errors
```

