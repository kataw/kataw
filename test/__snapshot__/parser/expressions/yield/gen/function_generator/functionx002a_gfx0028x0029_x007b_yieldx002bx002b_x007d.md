# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { yield++; }
## Input

`````js
function * gen() { function not_gen() { function* gf() { yield++; } }}
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
                                                "value": "gf",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 49,
                                                "end": 52
                                            },
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
                                                                "kind": 229,
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 128,
                                                                    "operandToken": {
                                                                        "kind": 196635,
                                                                        "autofix": 0,
                                                                        "flags": 0,
                                                                        "start": 62,
                                                                        "end": 64
                                                                    },
                                                                    "expression": {
                                                                        "kind": 253,
                                                                        "text": "",
                                                                        "autofix": 0,
                                                                        "flags": 12,
                                                                        "start": 64,
                                                                        "end": 64
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 62,
                                                                    "end": 64
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 56,
                                                                "end": 64
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 56,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 65
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 54,
                                                "end": 67
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 67
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 67
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 69
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 69
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 69
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 70
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* gf() { yield++; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 64,
            "end": 65
        }
    ],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { yield++; }
## Input

`````js
function * gen() { function not_gen() { function* gf() { yield++; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { yield++; }
## Input

`````js
function * gen() { function not_gen() { function* gf() { yield++; } }}
`````
```

