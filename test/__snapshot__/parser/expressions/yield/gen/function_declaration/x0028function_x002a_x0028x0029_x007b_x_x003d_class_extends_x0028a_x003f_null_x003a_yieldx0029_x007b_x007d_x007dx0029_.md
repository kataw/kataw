# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
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
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                        "start": 30,
                                        "end": 32
                                    },
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 35
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
                                                            "start": 37,
                                                            "end": 39
                                                        },
                                                        "operatorToken": {
                                                            "kind": 37814352,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 37,
                                                            "end": 41
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
                                                                            "start": 57,
                                                                            "end": 58
                                                                        },
                                                                        "questionToken": {
                                                                            "kind": 22,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 58,
                                                                            "end": 60
                                                                        },
                                                                        "consequent": {
                                                                            "kind": 269,
                                                                            "value": null,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 60,
                                                                            "end": 65
                                                                        },
                                                                        "colonToken": {
                                                                            "kind": 21,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 65,
                                                                            "end": 67
                                                                        },
                                                                        "alternate": {
                                                                            "kind": 229,
                                                                            "delegate": false,
                                                                            "asteriskToken": null,
                                                                            "expression": null,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 67,
                                                                            "end": 73
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 55,
                                                                        "end": 73
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 55,
                                                                    "end": 74
                                                                },
                                                                "typeParameter": null,
                                                                "flags": 128,
                                                                "start": 55,
                                                                "end": 74
                                                            },
                                                            "members": {
                                                                "kind": 277,
                                                                "elements": [],
                                                                "flags": 256,
                                                                "start": 76,
                                                                "end": 78
                                                            },
                                                            "flags": 256,
                                                            "start": 41,
                                                            "end": 78
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 37,
                                                        "end": 78
                                                    },
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 37,
                                                    "end": 78
                                                }
                                            ],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 37,
                                            "end": 78
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 35,
                                        "end": 80
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "autofix": 0,
                                    "flags": 2304,
                                    "start": 22,
                                    "end": 80
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 81
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 82
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 84
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "text": "function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 84,
            "end": 85
        }
    ],
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````
```

