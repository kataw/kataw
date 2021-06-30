# Kataw parser test case

## Input

`````js
function foo() {
  return this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right;
}

function foo2() {
  return this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right
    ? true
    : false;
}

function foo3() {
  return this.calculate().compute().first.numberOfThings > this.calculate().compute().last.numberOfThings
    ? true
    : false;
}
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
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
                                "start": 16,
                                "end": 25
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "hasPlugin",
                                            "rawText": "hasPlugin",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 40
                                        },
                                        "flags": 96,
                                        "start": 25,
                                        "end": 40
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 201392131,
                                                "text": "dynamicImports",
                                                "rawText": "\"dynamicImports\"",
                                                "flags": 96,
                                                "start": 41,
                                                "end": 57
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 41,
                                        "end": 57
                                    },
                                    "flags": 268435488,
                                    "start": 25,
                                    "end": 58
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 58,
                                    "end": 61
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "start": 61,
                                                    "end": 66
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "lookahead",
                                                    "rawText": "lookahead",
                                                    "flags": 96,
                                                    "start": 67,
                                                    "end": 76
                                                },
                                                "flags": 96,
                                                "start": 61,
                                                "end": 76
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 77,
                                                "end": 77
                                            },
                                            "flags": 268435488,
                                            "start": 61,
                                            "end": 78
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "type",
                                            "rawText": "type",
                                            "flags": 96,
                                            "start": 79,
                                            "end": 83
                                        },
                                        "flags": 268435488,
                                        "start": 61,
                                        "end": 83
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "start": 83,
                                        "end": 87
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "tt",
                                                "rawText": "tt",
                                                "flags": 96,
                                                "start": 87,
                                                "end": 90
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "parenLeft",
                                                "rawText": "parenLeft",
                                                "flags": 96,
                                                "start": 91,
                                                "end": 100
                                            },
                                            "flags": 96,
                                            "start": 87,
                                            "end": 100
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "right",
                                            "rawText": "right",
                                            "flags": 96,
                                            "start": 101,
                                            "end": 106
                                        },
                                        "flags": 96,
                                        "start": 87,
                                        "end": 106
                                    },
                                    "flags": 32,
                                    "start": 83,
                                    "end": 106
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 106
                            },
                            "flags": 81,
                            "start": 16,
                            "end": 107
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 107
                },
                "flags": 32,
                "start": 14,
                "end": 109
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 109
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 109,
                "end": 119
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 119,
                "end": 124
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 125,
                "end": 125
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
                                "start": 128,
                                "end": 137
                            },
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 4276321,
                                                "flags": 96,
                                                "start": 137,
                                                "end": 142
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "hasPlugin",
                                                "rawText": "hasPlugin",
                                                "flags": 96,
                                                "start": 143,
                                                "end": 152
                                            },
                                            "flags": 96,
                                            "start": 137,
                                            "end": 152
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "dynamicImports",
                                                    "rawText": "\"dynamicImports\"",
                                                    "flags": 96,
                                                    "start": 153,
                                                    "end": 169
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 153,
                                            "end": 169
                                        },
                                        "flags": 268435488,
                                        "start": 137,
                                        "end": 170
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 170,
                                        "end": 173
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 173,
                                                        "end": 178
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "lookahead",
                                                        "rawText": "lookahead",
                                                        "flags": 96,
                                                        "start": 179,
                                                        "end": 188
                                                    },
                                                    "flags": 96,
                                                    "start": 173,
                                                    "end": 188
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 189,
                                                    "end": 189
                                                },
                                                "flags": 268435488,
                                                "start": 173,
                                                "end": 190
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 96,
                                                "start": 191,
                                                "end": 195
                                            },
                                            "flags": 268435488,
                                            "start": 173,
                                            "end": 195
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 195,
                                            "end": 199
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "tt",
                                                    "rawText": "tt",
                                                    "flags": 96,
                                                    "start": 199,
                                                    "end": 202
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "parenLeft",
                                                    "rawText": "parenLeft",
                                                    "flags": 96,
                                                    "start": 203,
                                                    "end": 212
                                                },
                                                "flags": 96,
                                                "start": 199,
                                                "end": 212
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "right",
                                                "rawText": "right",
                                                "flags": 96,
                                                "start": 213,
                                                "end": 218
                                            },
                                            "flags": 96,
                                            "start": 199,
                                            "end": 218
                                        },
                                        "flags": 32,
                                        "start": 195,
                                        "end": 218
                                    },
                                    "flags": 32,
                                    "start": 137,
                                    "end": 218
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "start": 218,
                                    "end": 224
                                },
                                "consequent": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 224,
                                    "end": 229
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 65,
                                    "start": 229,
                                    "end": 235
                                },
                                "alternate": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "start": 235,
                                    "end": 241
                                },
                                "flags": 32,
                                "start": 137,
                                "end": 241
                            },
                            "flags": 81,
                            "start": 128,
                            "end": 242
                        }
                    ],
                    "flags": 33,
                    "start": 128,
                    "end": 242
                },
                "flags": 32,
                "start": 126,
                "end": 244
            },
            "returnType": null,
            "flags": 16,
            "start": 109,
            "end": 244
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 244,
                "end": 254
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "start": 254,
                "end": 259
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 260,
                "end": 260
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
                                "start": 263,
                                "end": 272
                            },
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "start": 272,
                                                                "end": 277
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "calculate",
                                                                "rawText": "calculate",
                                                                "flags": 96,
                                                                "start": 278,
                                                                "end": 287
                                                            },
                                                            "flags": 96,
                                                            "start": 272,
                                                            "end": 287
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 288,
                                                            "end": 288
                                                        },
                                                        "flags": 268435488,
                                                        "start": 272,
                                                        "end": 289
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "compute",
                                                        "rawText": "compute",
                                                        "flags": 96,
                                                        "start": 290,
                                                        "end": 297
                                                    },
                                                    "flags": 268435488,
                                                    "start": 272,
                                                    "end": 297
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 298,
                                                    "end": 298
                                                },
                                                "flags": 268435488,
                                                "start": 272,
                                                "end": 299
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "first",
                                                "rawText": "first",
                                                "flags": 96,
                                                "start": 300,
                                                "end": 305
                                            },
                                            "flags": 268435488,
                                            "start": 272,
                                            "end": 305
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "numberOfThings",
                                            "rawText": "numberOfThings",
                                            "flags": 96,
                                            "start": 306,
                                            "end": 320
                                        },
                                        "flags": 268435488,
                                        "start": 272,
                                        "end": 320
                                    },
                                    "operatorToken": {
                                        "kind": 34883,
                                        "flags": 96,
                                        "start": 320,
                                        "end": 322
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "start": 322,
                                                                "end": 327
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "calculate",
                                                                "rawText": "calculate",
                                                                "flags": 96,
                                                                "start": 328,
                                                                "end": 337
                                                            },
                                                            "flags": 96,
                                                            "start": 322,
                                                            "end": 337
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 338,
                                                            "end": 338
                                                        },
                                                        "flags": 268435488,
                                                        "start": 322,
                                                        "end": 339
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "compute",
                                                        "rawText": "compute",
                                                        "flags": 96,
                                                        "start": 340,
                                                        "end": 347
                                                    },
                                                    "flags": 268435488,
                                                    "start": 322,
                                                    "end": 347
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 348,
                                                    "end": 348
                                                },
                                                "flags": 268435488,
                                                "start": 322,
                                                "end": 349
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "last",
                                                "rawText": "last",
                                                "flags": 96,
                                                "start": 350,
                                                "end": 354
                                            },
                                            "flags": 268435488,
                                            "start": 322,
                                            "end": 354
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "numberOfThings",
                                            "rawText": "numberOfThings",
                                            "flags": 96,
                                            "start": 355,
                                            "end": 369
                                        },
                                        "flags": 268435488,
                                        "start": 322,
                                        "end": 369
                                    },
                                    "flags": 32,
                                    "start": 272,
                                    "end": 369
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "start": 369,
                                    "end": 375
                                },
                                "consequent": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 375,
                                    "end": 380
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 65,
                                    "start": 380,
                                    "end": 386
                                },
                                "alternate": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "start": 386,
                                    "end": 392
                                },
                                "flags": 32,
                                "start": 272,
                                "end": 392
                            },
                            "flags": 81,
                            "start": 263,
                            "end": 393
                        }
                    ],
                    "flags": 33,
                    "start": 263,
                    "end": 393
                },
                "flags": 32,
                "start": 261,
                "end": 395
            },
            "returnType": null,
            "flags": 16,
            "start": 244,
            "end": 395
        }
    ],
    "isModule": false,
    "source": "function foo() {\n  return this.hasPlugin(\"dynamicImports\") && this.lookahead().type === tt.parenLeft.right;\n}\n\nfunction foo2() {\n  return this.hasPlugin(\"dynamicImports\") && this.lookahead().type === tt.parenLeft.right\n    ? true\n    : false;\n}\n\nfunction foo3() {\n  return this.calculate().compute().first.numberOfThings > this.calculate().compute().last.numberOfThings\n    ? true\n    : false;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 395
}
```

### Printed

```javascript

function foo() {
  return this.hasPlugin("\"dynamicImports\"") && this.lookahead().type === tt.parenLeft.right;
}
function foo2() {
  return this.hasPlugin("\"dynamicImports\"") && this.lookahead().type === tt.parenLeft.right ? true : false;
}
function foo3() {
  return this.calculate().compute().first.numberOfThings > this.calculate().compute().last.numberOfThings ? true : false;
}

```

### Diagnostics

```javascript
✔ No errors
```

