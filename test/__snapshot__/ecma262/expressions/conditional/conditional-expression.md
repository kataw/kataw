# Kataw parser test case

## Input

`````js
async function f() {
  const result = typeof fn === 'function' ? await fn() : null;
}

(async function() {
  console.log(
    await (true ? Promise.resolve("A") : Promise.resolve("B"))
  );
})()

async function f2() {
  await (spellcheck && spellcheck.setChecking(false));
  await spellcheck && spellcheck.setChecking(false)
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 81,
                                "start": 20,
                                "end": 28
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "result",
                                            "rawText": "result",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 197,
                                            "shortCircuit": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 138477613,
                                                        "flags": 96,
                                                        "start": 37,
                                                        "end": 44
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "fn",
                                                        "rawText": "fn",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 47
                                                    },
                                                    "flags": 32,
                                                    "start": 37,
                                                    "end": 47
                                                },
                                                "operatorToken": {
                                                    "kind": 34620,
                                                    "flags": 96,
                                                    "start": 47,
                                                    "end": 51
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "function",
                                                    "rawText": "'function'",
                                                    "flags": 4194400,
                                                    "start": 51,
                                                    "end": 62
                                                },
                                                "flags": 32,
                                                "start": 37,
                                                "end": 62
                                            },
                                            "questionToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 62,
                                                "end": 64
                                            },
                                            "consequent": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 64,
                                                    "end": 70
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "fn",
                                                        "rawText": "fn",
                                                        "flags": 96,
                                                        "start": 70,
                                                        "end": 73
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 74,
                                                        "end": 74
                                                    },
                                                    "flags": 268435488,
                                                    "start": 70,
                                                    "end": 75
                                                },
                                                "flags": 32,
                                                "start": 64,
                                                "end": 75
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 75,
                                                "end": 77
                                            },
                                            "alternate": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "start": 77,
                                                "end": 82
                                            },
                                            "flags": 32,
                                            "start": 37,
                                            "end": 82
                                        },
                                        "flags": 16,
                                        "start": 28,
                                        "end": 82
                                    }
                                ],
                                "flags": 16777232,
                                "start": 28,
                                "end": 82
                            },
                            "flags": 33554448,
                            "start": 20,
                            "end": 83
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 83
                },
                "flags": 32,
                "start": 18,
                "end": 85
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 88,
                            "end": 93
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 93,
                            "end": 102
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 103,
                            "end": 103
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
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "console",
                                                    "rawText": "console",
                                                    "flags": 96,
                                                    "start": 106,
                                                    "end": 116
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "log",
                                                    "rawText": "log",
                                                    "flags": 96,
                                                    "start": 117,
                                                    "end": 120
                                                },
                                                "flags": 96,
                                                "start": 106,
                                                "end": 120
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 65,
                                                            "start": 121,
                                                            "end": 131
                                                        },
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 197,
                                                                "shortCircuit": {
                                                                    "kind": 24752947,
                                                                    "flags": 96,
                                                                    "start": 133,
                                                                    "end": 137
                                                                },
                                                                "questionToken": {
                                                                    "kind": 134217750,
                                                                    "flags": 64,
                                                                    "start": 137,
                                                                    "end": 139
                                                                },
                                                                "consequent": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "Promise",
                                                                            "rawText": "Promise",
                                                                            "flags": 96,
                                                                            "start": 139,
                                                                            "end": 147
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "resolve",
                                                                            "rawText": "resolve",
                                                                            "flags": 96,
                                                                            "start": 148,
                                                                            "end": 155
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 139,
                                                                        "end": 155
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "A",
                                                                                "rawText": "\"A\"",
                                                                                "flags": 96,
                                                                                "start": 156,
                                                                                "end": 159
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 156,
                                                                        "end": 159
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 139,
                                                                    "end": 160
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 64,
                                                                    "start": 160,
                                                                    "end": 162
                                                                },
                                                                "alternate": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "Promise",
                                                                            "rawText": "Promise",
                                                                            "flags": 96,
                                                                            "start": 162,
                                                                            "end": 170
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "resolve",
                                                                            "rawText": "resolve",
                                                                            "flags": 96,
                                                                            "start": 171,
                                                                            "end": 178
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 162,
                                                                        "end": 178
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392131,
                                                                                "text": "B",
                                                                                "rawText": "\"B\"",
                                                                                "flags": 96,
                                                                                "start": 179,
                                                                                "end": 182
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 179,
                                                                        "end": 182
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 162,
                                                                    "end": 183
                                                                },
                                                                "flags": 32,
                                                                "start": 133,
                                                                "end": 183
                                                            },
                                                            "flags": 32,
                                                            "start": 131,
                                                            "end": 184
                                                        },
                                                        "flags": 32,
                                                        "start": 121,
                                                        "end": 184
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 121,
                                                "end": 184
                                            },
                                            "flags": 268435488,
                                            "start": 106,
                                            "end": 188
                                        },
                                        "flags": 16,
                                        "start": 106,
                                        "end": 189
                                    }
                                ],
                                "flags": 33,
                                "start": 106,
                                "end": 189
                            },
                            "flags": 32,
                            "start": 104,
                            "end": 191
                        },
                        "returnType": null,
                        "flags": 160,
                        "start": 88,
                        "end": 191
                    },
                    "flags": 32,
                    "start": 85,
                    "end": 192
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 193,
                    "end": 193
                },
                "flags": 268435488,
                "start": 85,
                "end": 194
            },
            "flags": 16,
            "start": 85,
            "end": 194
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 194,
                "end": 201
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 201,
                "end": 210
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 210,
                "end": 213
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 214,
                "end": 214
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
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "start": 217,
                                    "end": 225
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "spellcheck",
                                            "rawText": "spellcheck",
                                            "flags": 96,
                                            "start": 227,
                                            "end": 237
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "start": 237,
                                            "end": 240
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "spellcheck",
                                                    "rawText": "spellcheck",
                                                    "flags": 96,
                                                    "start": 240,
                                                    "end": 251
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "setChecking",
                                                    "rawText": "setChecking",
                                                    "flags": 96,
                                                    "start": 252,
                                                    "end": 263
                                                },
                                                "flags": 96,
                                                "start": 240,
                                                "end": 263
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 205586437,
                                                        "flags": 96,
                                                        "start": 264,
                                                        "end": 269
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 264,
                                                "end": 269
                                            },
                                            "flags": 268435488,
                                            "start": 240,
                                            "end": 270
                                        },
                                        "flags": 32,
                                        "start": 225,
                                        "end": 270
                                    },
                                    "flags": 32,
                                    "start": 225,
                                    "end": 271
                                },
                                "flags": 32,
                                "start": 217,
                                "end": 271
                            },
                            "flags": 16,
                            "start": 217,
                            "end": 272
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 65,
                                        "start": 272,
                                        "end": 280
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "spellcheck",
                                        "rawText": "spellcheck",
                                        "flags": 96,
                                        "start": 280,
                                        "end": 291
                                    },
                                    "flags": 32,
                                    "start": 272,
                                    "end": 291
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 291,
                                    "end": 294
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "spellcheck",
                                            "rawText": "spellcheck",
                                            "flags": 96,
                                            "start": 294,
                                            "end": 305
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "setChecking",
                                            "rawText": "setChecking",
                                            "flags": 96,
                                            "start": 306,
                                            "end": 317
                                        },
                                        "flags": 96,
                                        "start": 294,
                                        "end": 317
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "start": 318,
                                                "end": 323
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 318,
                                        "end": 323
                                    },
                                    "flags": 268435488,
                                    "start": 294,
                                    "end": 324
                                },
                                "flags": 32,
                                "start": 272,
                                "end": 324
                            },
                            "flags": 16,
                            "start": 272,
                            "end": 324
                        }
                    ],
                    "flags": 33,
                    "start": 217,
                    "end": 324
                },
                "flags": 32,
                "start": 215,
                "end": 326
            },
            "returnType": null,
            "flags": 144,
            "start": 194,
            "end": 326
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  const result = typeof fn === 'function' ? await fn() : null;\n}\n\n(async function() {\n  console.log(\n    await (true ? Promise.resolve(\"A\") : Promise.resolve(\"B\"))\n  );\n})()\n\nasync function f2() {\n  await (spellcheck && spellcheck.setChecking(false));\n  await spellcheck && spellcheck.setChecking(false)\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 326
}
```

### Printed

```javascript

async function f() {
  const result = typeof fn === "'function'" ? await fn() : null;
}
(async function () {
    console.log(await (true ? Promise.resolve("\"A\"") : Promise.resolve("\"B\"")));
  })();
async function f2() {
  await (spellcheck && spellcheck.setChecking(false));
  await spellcheck && spellcheck.setChecking(false);
}
```

### Diagnostics

```javascript
✔ No errors
```

