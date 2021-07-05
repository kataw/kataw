# Kataw parser test case

## Input

`````js
function f() {
  a
  /* eslint-disable */
}

function f() {
  a

  /* eslint-disable */
}

function name() {
  // comment1
  func1()

  // comment2
  func2()

  // comment3 why func3 commented
  // func3()
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
                "text": "f",
                "rawText": "f",
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
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 18
                },
                "flags": 32,
                "start": 12,
                "end": 43
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 43
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 43,
                "end": 53
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 53,
                "end": 55
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 56,
                "end": 56
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
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "start": 59,
                                "end": 63
                            },
                            "flags": 16,
                            "start": 59,
                            "end": 63
                        }
                    ],
                    "flags": 33,
                    "start": 59,
                    "end": 63
                },
                "flags": 32,
                "start": 57,
                "end": 89
            },
            "returnType": null,
            "flags": 16,
            "start": 43,
            "end": 89
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 89,
                "end": 99
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "name",
                "rawText": "name",
                "flags": 96,
                "start": 99,
                "end": 104
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 105,
                "end": 105
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
                                    "kind": 134299649,
                                    "text": "func1",
                                    "rawText": "func1",
                                    "flags": 97,
                                    "start": 108,
                                    "end": 130
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 131,
                                    "end": 131
                                },
                                "flags": 268435488,
                                "start": 108,
                                "end": 132
                            },
                            "flags": 16,
                            "start": 108,
                            "end": 132
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "func2",
                                    "rawText": "func2",
                                    "flags": 97,
                                    "start": 132,
                                    "end": 155
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 156,
                                    "end": 156
                                },
                                "flags": 268435488,
                                "start": 132,
                                "end": 157
                            },
                            "flags": 16,
                            "start": 132,
                            "end": 157
                        }
                    ],
                    "flags": 33,
                    "start": 108,
                    "end": 157
                },
                "flags": 32,
                "start": 106,
                "end": 207
            },
            "returnType": null,
            "flags": 16,
            "start": 89,
            "end": 207
        }
    ],
    "isModule": false,
    "source": "function f() {\n  a\n  /* eslint-disable */\n}\n\nfunction f() {\n  a\n\n  /* eslint-disable */\n}\n\nfunction name() {\n  // comment1\n  func1()\n\n  // comment2\n  func2()\n\n  // comment3 why func3 commented\n  // func3()\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 207
}
```

### Printed

```javascript

function f() {
  a;
}
function f() {
  a;
}
function name() {
  func1();
  func2();
}
```

### Diagnostics

```javascript
✔ No errors
```

