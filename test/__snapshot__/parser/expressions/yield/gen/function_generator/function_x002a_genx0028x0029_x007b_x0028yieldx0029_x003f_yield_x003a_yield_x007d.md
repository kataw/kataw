# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}
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
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gen",
                                                "rawText": "gen",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 54
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 54,
                                                "end": 56
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
                                                                "kind": 197,
                                                                "shortCircuit": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 0,
                                                                            "start": 60,
                                                                            "end": 65
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 32,
                                                                        "start": 60,
                                                                        "end": 65
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 58,
                                                                    "end": 66
                                                                },
                                                                "questionToken": {
                                                                    "kind": 134217750,
                                                                    "flags": 0,
                                                                    "start": 66,
                                                                    "end": 68
                                                                },
                                                                "consequent": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 0,
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
                                                                    "flags": 0,
                                                                    "start": 74,
                                                                    "end": 76
                                                                },
                                                                "alternate": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 0,
                                                                        "start": 76,
                                                                        "end": 82
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "start": 76,
                                                                    "end": 82
                                                                },
                                                                "flags": 32,
                                                                "start": 58,
                                                                "end": 82
                                                            },
                                                            "flags": 16,
                                                            "start": 58,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 58,
                                                    "end": 82
                                                },
                                                "flags": 32,
                                                "start": 56,
                                                "end": 84
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 86
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 86
                },
                "flags": 32,
                "start": 16,
                "end": 87
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 87
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

