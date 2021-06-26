# Kataw parser test case

## Input

`````js
function f1() {
  yield / 1 /g
  yield
  / 1 /g
}
function f2() {
  yield /=2 /i
  yield
  /=2 /i
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
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "start": 8,
                "end": 11
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
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 30
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 97,
                                        "start": 38,
                                        "end": 42
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 44
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 46,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 47
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 47
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 47
                },
                "flags": 32,
                "start": 13,
                "end": 49
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 49
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 49,
                "end": 58
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 58,
                "end": 61
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 61,
                "end": 61
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 65,
                                    "end": 73
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 96,
                                    "start": 73,
                                    "end": 76
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 76,
                                        "end": 77
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "start": 77,
                                        "end": 79
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "i",
                                        "rawText": "i",
                                        "flags": 96,
                                        "start": 79,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "start": 76,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 65,
                                "end": 80
                            },
                            "flags": 16,
                            "start": 65,
                            "end": 80
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 80,
                                    "end": 88
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 97,
                                    "start": 88,
                                    "end": 93
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 93,
                                        "end": 94
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "start": 94,
                                        "end": 96
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "i",
                                        "rawText": "i",
                                        "flags": 96,
                                        "start": 96,
                                        "end": 97
                                    },
                                    "flags": 32,
                                    "start": 93,
                                    "end": 97
                                },
                                "flags": 32,
                                "start": 80,
                                "end": 97
                            },
                            "flags": 16,
                            "start": 80,
                            "end": 97
                        }
                    ],
                    "flags": 33,
                    "start": 65,
                    "end": 97
                },
                "flags": 32,
                "start": 63,
                "end": 99
            },
            "returnType": null,
            "flags": 16,
            "start": 49,
            "end": 99
        }
    ],
    "isModule": false,
    "source": "function f1() {\n  yield / 1 /g\n  yield\n  / 1 /g\n}\nfunction f2() {\n  yield /=2 /i\n  yield\n  /=2 /i\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript

function f1() {
  yield / 1 / g;
  yield / 1 / g;
}
function f2() {
  yield /= 2 / i;
  yield /= 2 / i;
}
```

### Diagnostics

```javascript
✔ No errors
```

