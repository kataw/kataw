# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
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
                                            "kind": 155,
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "value": "o",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 81921,
                                                                            "value": "gf",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 51,
                                                                            "end": 53
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 54,
                                                                            "end": 55
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "statements": [
                                                                                    {
                                                                                        "kind": 160,
                                                                                        "expression": {
                                                                                            "kind": 81921,
                                                                                            "value": 1,
                                                                                            "autofix": 0,
                                                                                            "flags": 768,
                                                                                            "start": 66,
                                                                                            "end": 67
                                                                                        },
                                                                                        "caseBlock": {
                                                                                            "kind": 152,
                                                                                            "clauses": [
                                                                                                {
                                                                                                    "kind": 175,
                                                                                                    "expression": {
                                                                                                        "kind": 229,
                                                                                                        "delegate": false,
                                                                                                        "asteriskToken": null,
                                                                                                        "expression": null,
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 75,
                                                                                                        "end": 81
                                                                                                    },
                                                                                                    "statements": [
                                                                                                        {
                                                                                                            "kind": 150,
                                                                                                            "label": null,
                                                                                                            "autofix": 0,
                                                                                                            "flags": 128,
                                                                                                            "start": 82,
                                                                                                            "end": 89
                                                                                                        }
                                                                                                    ],
                                                                                                    "autofix": 0,
                                                                                                    "flags": 128,
                                                                                                    "start": 70,
                                                                                                    "end": 89
                                                                                                }
                                                                                            ],
                                                                                            "autofix": 0,
                                                                                            "flags": 128,
                                                                                            "start": 68,
                                                                                            "end": 91
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 128,
                                                                                        "start": 57,
                                                                                        "end": 91
                                                                                    }
                                                                                ],
                                                                                "multiline": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 57,
                                                                                "end": 91
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 55,
                                                                            "end": 93
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 1280,
                                                                        "start": 53,
                                                                        "end": 93
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 49,
                                                                "end": 93
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 47,
                                                            "end": 95
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 95
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 43,
                                                "end": 95
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 95
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 95
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 97
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 97
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 97
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 98
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 98
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````
```

