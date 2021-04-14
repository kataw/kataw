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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
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
                "kind": 81921,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
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
                                            "kind": 176,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37814362,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 81921,
                                                "text": "gen",
                                                "rawText": "gen",
                                                "flags": 768,
                                                "start": 50,
                                                "end": 54
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
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
                                                                            "flags": 768,
                                                                            "start": 60,
                                                                            "end": 65
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 256,
                                                                        "start": 60,
                                                                        "end": 65
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 58,
                                                                    "end": 66
                                                                },
                                                                "questionToken": {
                                                                    "kind": 22,
                                                                    "flags": 768,
                                                                    "start": 66,
                                                                    "end": 68
                                                                },
                                                                "consequent": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 768,
                                                                        "start": 68,
                                                                        "end": 74
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 256,
                                                                    "start": 68,
                                                                    "end": 74
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 768,
                                                                    "start": 74,
                                                                    "end": 76
                                                                },
                                                                "alternate": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 768,
                                                                        "start": 76,
                                                                        "end": 82
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 256,
                                                                    "start": 76,
                                                                    "end": 82
                                                                },
                                                                "flags": 256,
                                                                "start": 58,
                                                                "end": 82
                                                            },
                                                            "flags": 128,
                                                            "start": 58,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 58,
                                                    "end": 82
                                                },
                                                "flags": 256,
                                                "start": 56,
                                                "end": 84
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 86
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 86
                },
                "flags": 256,
                "start": 16,
                "end": 87
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}
`````
```

