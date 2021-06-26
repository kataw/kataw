# Kataw parser test case

## Input

`````js
function *f() {
  (yield a => a);
  (yield async a => a);
  (yield async (a) => a);
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
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
                                "kind": 121,
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 33
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 37,
                                        "end": 42
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 50,
                                            "end": 53
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 53,
                                            "end": 55
                                        },
                                        "flags": 288,
                                        "start": 42,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 56
                            },
                            "flags": 16,
                            "start": 33,
                            "end": 57
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 61,
                                        "end": 66
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 66,
                                            "end": 72
                                        },
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 74,
                                                    "end": 75
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 74,
                                            "end": 76
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 76,
                                            "end": 79
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 79,
                                            "end": 81
                                        },
                                        "flags": 288,
                                        "start": 66,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "start": 61,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 57,
                                "end": 82
                            },
                            "flags": 16,
                            "start": 57,
                            "end": 83
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 83
                },
                "flags": 32,
                "start": 13,
                "end": 85
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "function *f() {\n  (yield a => a);\n  (yield async a => a);\n  (yield async (a) => a);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

function * f() {
  (yield a =>  a);
  (yield async a =>  a);
  (yield async  =>  a);
}
```

### Diagnostics

```javascript
✔ No errors
```

