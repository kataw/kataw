# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function * gen() { function not_gen() { function* g(){ x ? yield : y } }}
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
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 48,
                                                "end": 49
                                            },
                                            "name": {
                                                "kind": 81921,
                                                "value": "g",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 49,
                                                "end": 51
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 53
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 197,
                                                                "shortCircuit": {
                                                                    "kind": 81921,
                                                                    "value": "x",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 54,
                                                                    "end": 56
                                                                },
                                                                "questionToken": {
                                                                    "kind": 22,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 56,
                                                                    "end": 58
                                                                },
                                                                "consequent": {
                                                                    "kind": 229,
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 58,
                                                                    "end": 64
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 64,
                                                                    "end": 66
                                                                },
                                                                "alternate": {
                                                                    "kind": 81921,
                                                                    "value": "y",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 66,
                                                                    "end": 68
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 54,
                                                                "end": 68
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 54,
                                                            "end": 68
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 54,
                                                    "end": 68
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 53,
                                                "end": 70
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 70
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 70
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 72
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 72
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 72
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* g(){ x ? yield : y } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function * gen() { function not_gen() { function* g(){ x ? yield : y } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function * gen() { function not_gen() { function* g(){ x ? yield : y } }}
`````
```

