# Kataw parser test case

## Input

`````js
function x() {
  throw func2
      //comment
      .bar();
}

function f() {
  throw (
    foo
      // comment
      .bar()
  );
}

fn(function f() {
  throw (
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
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 81,
                                "start": 14,
                                "end": 22
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
                                        "start": 22,
                                        "end": 28
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 52,
                                        "end": 55
                                    },
                                    "flags": 96,
                                    "start": 22,
                                    "end": 55
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 56,
                                    "end": 56
                                },
                                "flags": 268435488,
                                "start": 22,
                                "end": 57
                            },
                            "flags": 81,
                            "start": 14,
                            "end": 58
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 58
                },
                "flags": 32,
                "start": 12,
                "end": 60
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 60
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 60,
                "end": 70
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 70,
                "end": 72
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 73,
                "end": 73
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 81,
                                "start": 76,
                                "end": 84
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
                                            "start": 86,
                                            "end": 94
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 119,
                                            "end": 122
                                        },
                                        "flags": 97,
                                        "start": 84,
                                        "end": 122
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 123,
                                        "end": 123
                                    },
                                    "flags": 268435488,
                                    "start": 84,
                                    "end": 124
                                },
                                "flags": 84,
                                "start": 32,
                                "end": 128
                            },
                            "flags": 81,
                            "start": 76,
                            "end": 129
                        }
                    ],
                    "flags": 33,
                    "start": 76,
                    "end": 129
                },
                "flags": 32,
                "start": 74,
                "end": 131
            },
            "returnType": null,
            "flags": 16,
            "start": 60,
            "end": 131
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
                    "start": 131,
                    "end": 135
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
                                "start": 136,
                                "end": 144
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 144,
                                "end": 146
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 147,
                                "end": 147
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 158,
                                            "throwKeyword": {
                                                "kind": 37757026,
                                                "flags": 81,
                                                "start": 150,
                                                "end": 158
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
                                                            "start": 160,
                                                            "end": 168
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "start": 193,
                                                            "end": 196
                                                        },
                                                        "flags": 97,
                                                        "start": 158,
                                                        "end": 196
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 197,
                                                        "end": 197
                                                    },
                                                    "flags": 268435488,
                                                    "start": 158,
                                                    "end": 198
                                                },
                                                "flags": 158,
                                                "start": 32,
                                                "end": 202
                                            },
                                            "flags": 81,
                                            "start": 150,
                                            "end": 203
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 150,
                                    "end": 203
                                },
                                "flags": 32,
                                "start": 148,
                                "end": 205
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 136,
                            "end": 205
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 136,
                    "end": 205
                },
                "flags": 268435488,
                "start": 131,
                "end": 206
            },
            "flags": 16,
            "start": 131,
            "end": 207
        }
    ],
    "isModule": false,
    "source": "function x() {\n  throw func2\n      //comment\n      .bar();\n}\n\nfunction f() {\n  throw (\n    foo\n      // comment\n      .bar()\n  );\n}\n\nfn(function f() {\n  throw (\n    foo\n      // comment\n      .bar()\n  );\n});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 207
}
```

### Printed

```javascript

function x() {
  throw func2.bar();
}
function f() {
  throw (foo.bar());
}
fn(
  function f() {
    throw (foo.bar());
  }
);
```

### Diagnostics

```javascript
✔ No errors
```

