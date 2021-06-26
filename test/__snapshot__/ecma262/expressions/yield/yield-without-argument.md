# Kataw parser test case

## Input

`````js
function* f() {
  (yield);
  [yield];
  { yield };
  yield;
  true ? yield : 1;
  yield, 1;
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 9,
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
                                    "expression": null,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 26
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 30,
                                                "end": 35
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 30,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 30,
                                    "end": 35
                                },
                                "flags": 33,
                                "start": 26,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 26,
                            "end": 37
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 41,
                                                "end": 47
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 41,
                                            "end": 47
                                        },
                                        "flags": 16,
                                        "start": 41,
                                        "end": 47
                                    }
                                ],
                                "flags": 16,
                                "start": 41,
                                "end": 47
                            },
                            "flags": 17,
                            "start": 37,
                            "end": 49
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 49,
                            "end": 50
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "start": 50,
                                    "end": 58
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 50,
                                "end": 58
                            },
                            "flags": 16,
                            "start": 50,
                            "end": 59
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 24752947,
                                    "flags": 97,
                                    "start": 59,
                                    "end": 66
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 66,
                                    "end": 68
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 68,
                                        "end": 74
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 68,
                                    "end": 74
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 74,
                                    "end": 76
                                },
                                "alternate": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 76,
                                    "end": 78
                                },
                                "flags": 32,
                                "start": 59,
                                "end": 78
                            },
                            "flags": 16,
                            "start": 59,
                            "end": 79
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 65,
                                            "start": 79,
                                            "end": 87
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 79,
                                        "end": 87
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 88,
                                        "end": 90
                                    }
                                ],
                                "flags": 32,
                                "start": 79,
                                "end": 90
                            },
                            "flags": 16,
                            "start": 79,
                            "end": 91
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 91
                },
                "flags": 32,
                "start": 13,
                "end": 93
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 93
        }
    ],
    "isModule": false,
    "source": "function* f() {\n  (yield);\n  [yield];\n  { yield };\n  yield;\n  true ? yield : 1;\n  yield, 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript

function * f() {
  ( yield);
  [ yield];
  {
     yield;
  }
   yield;
  true ?  yield : 1;
   yield, 1;
}
```

### Diagnostics

```javascript
✔ No errors
```

