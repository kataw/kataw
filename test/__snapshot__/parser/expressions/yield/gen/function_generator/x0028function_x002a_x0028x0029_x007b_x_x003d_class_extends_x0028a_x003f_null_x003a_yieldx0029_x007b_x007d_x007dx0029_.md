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
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "not_gen",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncToken": null,
                                                    "generatorToken": {
                                                        "kind": 67143222,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 49,
                                                        "end": 51
                                                    },
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 53,
                                                        "end": 54
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "statements": [
                                                                {
                                                                    "kind": 120,
                                                                    "expression": {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 81921,
                                                                            "value": "x",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 56,
                                                                            "end": 58
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 37814352,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 56,
                                                                            "end": 60
                                                                        },
                                                                        "right": {
                                                                            "kind": 189,
                                                                            "decorators": null,
                                                                            "name": null,
                                                                            "typeParameters": null,
                                                                            "classHeritage": {
                                                                                "kind": 279,
                                                                                "expression": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 197,
                                                                                        "shortCircuit": {
                                                                                            "kind": 81921,
                                                                                            "value": "a",
                                                                                            "autofix": 0,
                                                                                            "flags": 768,
                                                                                            "start": 76,
                                                                                            "end": 77
                                                                                        },
                                                                                        "questionToken": {
                                                                                            "kind": 22,
                                                                                            "autofix": 0,
                                                                                            "flags": 0,
                                                                                            "start": 77,
                                                                                            "end": 79
                                                                                        },
                                                                                        "consequent": {
                                                                                            "kind": 269,
                                                                                            "value": null,
                                                                                            "autofix": 0,
                                                                                            "flags": 768,
                                                                                            "start": 79,
                                                                                            "end": 84
                                                                                        },
                                                                                        "colonToken": {
                                                                                            "kind": 21,
                                                                                            "autofix": 0,
                                                                                            "flags": 0,
                                                                                            "start": 84,
                                                                                            "end": 86
                                                                                        },
                                                                                        "alternate": {
                                                                                            "kind": 229,
                                                                                            "delegate": false,
                                                                                            "asteriskToken": null,
                                                                                            "expression": null,
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 86,
                                                                                            "end": 92
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 74,
                                                                                        "end": 92
                                                                                    },
                                                                                    "autofix": 0,
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
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 56,
                                                                        "end": 97
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 56,
                                                                    "end": 97
                                                                }
                                                            ],
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 56,
                                                            "end": 97
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 99
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "autofix": 0,
                                                    "flags": 2304,
                                                    "start": 41,
                                                    "end": 99
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 100
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 101
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 101
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 103
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 103
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 103
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 104
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 104
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````
```

