# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}
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
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 39,
                                                    "end": 41
                                                },
                                                "operatorToken": {
                                                    "kind": 37814352,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 39,
                                                    "end": 43
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
                                                                    "start": 59,
                                                                    "end": 60
                                                                },
                                                                "questionToken": {
                                                                    "kind": 22,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 60,
                                                                    "end": 62
                                                                },
                                                                "consequent": {
                                                                    "kind": 269,
                                                                    "value": null,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 62,
                                                                    "end": 67
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 67,
                                                                    "end": 69
                                                                },
                                                                "alternate": {
                                                                    "kind": 81921,
                                                                    "value": "yield",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 69,
                                                                    "end": 75
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 57,
                                                                "end": 75
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 57,
                                                            "end": 76
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 128,
                                                        "start": 57,
                                                        "end": 76
                                                    },
                                                    "members": {
                                                        "kind": 277,
                                                        "elements": [],
                                                        "flags": 256,
                                                        "start": 78,
                                                        "end": 80
                                                    },
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 80
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 80
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 80
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 82
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 83
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}
`````
```

