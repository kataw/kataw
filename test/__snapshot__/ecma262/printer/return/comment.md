# Kataw parser test case

## Input

`````js
function f() {
  return /* a */;
}

function f() {
  return // a
  ;
}

function f() {
  return // a
  /* b */;
}

function f() {
  return /* a */
  // b
  ;
}

function x() {
  return func2
      //comment
      .bar();
}

function f() {
  return (
    foo
      // comment
      .bar()
  );
}

fn(function f() {
  return (
    foo
      // comment
      .bar()
  );
});

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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                                "transformFlags": 0,
                                "start": 14,
                                "end": 23
                            },
                            "expression": null,
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 32
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 34
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 34,
                "end": 44
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 44,
                "end": 46
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 47,
                "end": 47
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
                                "transformFlags": 0,
                                "start": 50,
                                "end": 59
                            },
                            "expression": null,
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 50,
                            "end": 68
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 68
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 48,
                "end": 70
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 34,
            "end": 70
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 70,
                "end": 80
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 80,
                "end": 82
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 83,
                "end": 83
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
                                "transformFlags": 0,
                                "start": 86,
                                "end": 95
                            },
                            "expression": null,
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 86,
                            "end": 111
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 111
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 84,
                "end": 113
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 70,
            "end": 113
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 113,
                "end": 123
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 123,
                "end": 125
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 126,
                "end": 126
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
                                "transformFlags": 0,
                                "start": 129,
                                "end": 138
                            },
                            "expression": null,
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 129,
                            "end": 157
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 157
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 127,
                "end": 159
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 113,
            "end": 159
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 159,
                "end": 169
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 169,
                "end": 171
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 172,
                "end": 172
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
                                "transformFlags": 0,
                                "start": 175,
                                "end": 184
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "func2",
                                        "rawText": "func2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 184,
                                        "end": 190
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 214,
                                        "end": 217
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 184,
                                    "end": 217
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 218
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 184,
                                "end": 219
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 175,
                            "end": 220
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 220
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 173,
                "end": 222
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 159,
            "end": 222
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 222,
                "end": 232
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 232,
                "end": 234
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 235,
                "end": 235
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
                                "transformFlags": 0,
                                "start": 238,
                                "end": 247
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 249,
                                            "end": 257
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 282,
                                            "end": 285
                                        },
                                        "flags": 97,
                                        "transformFlags": 2,
                                        "start": 247,
                                        "end": 285
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 286,
                                        "end": 286
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 247,
                                    "end": 287
                                },
                                "flags": 247,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 291
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 238,
                            "end": 292
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 238,
                    "end": 292
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 236,
                "end": 294
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 222,
            "end": 294
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 294,
                    "end": 298
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 299,
                                "end": 307
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 307,
                                "end": 309
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 310
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
                                                "transformFlags": 0,
                                                "start": 313,
                                                "end": 322
                                            },
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 324,
                                                            "end": 332
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 357,
                                                            "end": 360
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 322,
                                                        "end": 360
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 361,
                                                        "end": 361
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 322,
                                                    "end": 362
                                                },
                                                "flags": 322,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 366
                                            },
                                            "flags": 81,
                                            "transformFlags": 256,
                                            "start": 313,
                                            "end": 367
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 313,
                                    "end": 367
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 311,
                                "end": 369
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 299,
                            "end": 369
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 299,
                    "end": 369
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 294,
                "end": 370
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 294,
            "end": 371
        }
    ],
    "isModule": false,
    "source": "function f() {\n  return /* a */;\n}\n\nfunction f() {\n  return // a\n  ;\n}\n\nfunction f() {\n  return // a\n  /* b */;\n}\n\nfunction f() {\n  return /* a */\n  // b\n  ;\n}\n\nfunction x() {\n  return func2\n      //comment\n      .bar();\n}\n\nfunction f() {\n  return (\n    foo\n      // comment\n      .bar()\n  );\n}\n\nfn(function f() {\n  return (\n    foo\n      // comment\n      .bar()\n  );\n});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 372
}
```

### Printed

```javascript
function f() {
  return/* a */ ;
}
function f() {
  return// a
  ;
}

function f() {
  return// a
  ;
}

function f() {
  return/* a */ ;
}

function x() {
  return func2//comment
  .bar();
}

function f() {
  return (foo// comment
    .bar());
}

fn(function f() {
  return (foo// comment
    .bar());
});

```

### Diagnostics

```javascript
✔ No errors
```

