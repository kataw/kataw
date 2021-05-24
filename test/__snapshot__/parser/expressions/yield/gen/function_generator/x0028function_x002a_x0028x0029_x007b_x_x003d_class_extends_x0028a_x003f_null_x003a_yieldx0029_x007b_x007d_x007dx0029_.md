# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: r
> :: test: function generator
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
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
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 0,
                                                        "start": 41,
                                                        "end": 49
                                                    },
                                                    "generatorToken": {
                                                        "kind": 67143222,
                                                        "flags": 64,
                                                        "start": 49,
                                                        "end": 51
                                                    },
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 51,
                                                        "end": 54
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
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 56,
                                                                            "end": 58
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 64,
                                                                            "start": 58,
                                                                            "end": 60
                                                                        },
                                                                        "right": {
                                                                            "kind": 189,
                                                                            "decorators": null,
                                                                            "classKeyword": {
                                                                                "kind": 37822544,
                                                                                "flags": 0,
                                                                                "start": 60,
                                                                                "end": 66
                                                                            },
                                                                            "name": null,
                                                                            "typeParameters": null,
                                                                            "tail": {
                                                                                "kind": 277,
                                                                                "classHeritage": {
                                                                                    "kind": 279,
                                                                                    "extendsKeyword": {
                                                                                        "kind": 4194391,
                                                                                        "flags": 0,
                                                                                        "start": 66,
                                                                                        "end": 74
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 121,
                                                                                        "expression": {
                                                                                            "kind": 197,
                                                                                            "shortCircuit": {
                                                                                                "kind": 134299649,
                                                                                                "text": "a",
                                                                                                "rawText": "a",
                                                                                                "flags": 96,
                                                                                                "start": 76,
                                                                                                "end": 77
                                                                                            },
                                                                                            "questionToken": {
                                                                                                "kind": 134217750,
                                                                                                "flags": 64,
                                                                                                "start": 77,
                                                                                                "end": 79
                                                                                            },
                                                                                            "consequent": {
                                                                                                "kind": 269,
                                                                                                "text": null,
                                                                                                "flags": 96,
                                                                                                "start": 79,
                                                                                                "end": 84
                                                                                            },
                                                                                            "colonToken": {
                                                                                                "kind": 21,
                                                                                                "flags": 0,
                                                                                                "start": 84,
                                                                                                "end": 86
                                                                                            },
                                                                                            "alternate": {
                                                                                                "kind": 229,
                                                                                                "yieldKeyword": {
                                                                                                    "kind": 8454253,
                                                                                                    "flags": 0,
                                                                                                    "start": 86,
                                                                                                    "end": 92
                                                                                                },
                                                                                                "delegate": false,
                                                                                                "asteriskToken": null,
                                                                                                "expression": null,
                                                                                                "flags": 32,
                                                                                                "start": 86,
                                                                                                "end": 92
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 74,
                                                                                            "end": 92
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 74,
                                                                                        "end": 93
                                                                                    },
                                                                                    "typeParameter": null,
                                                                                    "flags": 16,
                                                                                    "start": 74,
                                                                                    "end": 93
                                                                                },
                                                                                "body": {
                                                                                    "kind": 262,
                                                                                    "elements": [],
                                                                                    "flags": 32,
                                                                                    "start": 95,
                                                                                    "end": 95
                                                                                },
                                                                                "flags": 66,
                                                                                "start": 32,
                                                                                "end": 97
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 60,
                                                                            "end": 97
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 56,
                                                                        "end": 97
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 56,
                                                                    "end": 97
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 56,
                                                            "end": 97
                                                        },
                                                        "flags": 32,
                                                        "start": 54,
                                                        "end": 99
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 288,
                                                    "start": 41,
                                                    "end": 99
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 100
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 101
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 101
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 103
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 103
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 103
                },
                "flags": 32,
                "start": 16,
                "end": 104
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    (function * () {
        x = class   {};
      });
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

