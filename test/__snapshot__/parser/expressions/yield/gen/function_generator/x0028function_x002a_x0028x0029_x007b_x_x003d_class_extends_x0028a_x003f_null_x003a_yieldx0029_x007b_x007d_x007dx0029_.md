# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                        "flags": 768,
                                                        "start": 41,
                                                        "end": 49
                                                    },
                                                    "generatorToken": {
                                                        "kind": 67143222,
                                                        "flags": 768,
                                                        "start": 49,
                                                        "end": 51
                                                    },
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
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
                                                                            "flags": 768,
                                                                            "start": 56,
                                                                            "end": 58
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 768,
                                                                            "start": 58,
                                                                            "end": 60
                                                                        },
                                                                        "right": {
                                                                            "kind": 189,
                                                                            "decorators": null,
                                                                            "classKeyword": {
                                                                                "kind": 37822544,
                                                                                "flags": 768,
                                                                                "start": 60,
                                                                                "end": 66
                                                                            },
                                                                            "name": null,
                                                                            "typeParameters": null,
                                                                            "classHeritage": {
                                                                                "kind": 279,
                                                                                "extendsKeyword": {
                                                                                    "kind": 4194391,
                                                                                    "flags": 768,
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
                                                                                            "flags": 768,
                                                                                            "start": 76,
                                                                                            "end": 77
                                                                                        },
                                                                                        "questionToken": {
                                                                                            "kind": 134217750,
                                                                                            "flags": 768,
                                                                                            "start": 77,
                                                                                            "end": 79
                                                                                        },
                                                                                        "consequent": {
                                                                                            "kind": 269,
                                                                                            "text": null,
                                                                                            "flags": 768,
                                                                                            "start": 79,
                                                                                            "end": 84
                                                                                        },
                                                                                        "colonToken": {
                                                                                            "kind": 21,
                                                                                            "flags": 768,
                                                                                            "start": 84,
                                                                                            "end": 86
                                                                                        },
                                                                                        "alternate": {
                                                                                            "kind": 229,
                                                                                            "yieldKeyword": {
                                                                                                "kind": 8454253,
                                                                                                "flags": 768,
                                                                                                "start": 86,
                                                                                                "end": 92
                                                                                            },
                                                                                            "delegate": false,
                                                                                            "asteriskToken": null,
                                                                                            "expression": null,
                                                                                            "flags": 256,
                                                                                            "start": 86,
                                                                                            "end": 92
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 74,
                                                                                        "end": 92
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 74,
                                                                                    "end": 93
                                                                                },
                                                                                "typeParameter": null,
                                                                                "flags": 128,
                                                                                "start": 74,
                                                                                "end": 93
                                                                            },
                                                                            "members": {
                                                                                "kind": 277,
                                                                                "elements": [],
                                                                                "flags": 256,
                                                                                "start": 95,
                                                                                "end": 97
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 60,
                                                                            "end": 97
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 56,
                                                                        "end": 97
                                                                    },
                                                                    "flags": 128,
                                                                    "start": 56,
                                                                    "end": 97
                                                                }
                                                            ],
                                                            "multiline": false,
                                                            "flags": 256,
                                                            "start": 56,
                                                            "end": 97
                                                        },
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 99
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 2304,
                                                    "start": 41,
                                                    "end": 99
                                                },
                                                "flags": 256,
                                                "start": 39,
                                                "end": 100
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 101
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 101
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 103
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 103
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 103
                },
                "flags": 256,
                "start": 16,
                "end": 104
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 104
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

