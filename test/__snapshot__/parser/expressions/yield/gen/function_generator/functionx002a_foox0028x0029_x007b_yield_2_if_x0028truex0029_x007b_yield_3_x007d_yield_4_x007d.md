# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
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
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 49,
                                                "end": 53
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 54,
                                                "end": 55
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
                                                                    "kind": 81921,
                                                                    "value": 2,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 63,
                                                                    "end": 65
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 57,
                                                                "end": 65
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 57,
                                                            "end": 66
                                                        },
                                                        {
                                                            "kind": 164,
                                                            "expression": {
                                                                "kind": 134,
                                                                "value": true,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 71,
                                                                "end": 75
                                                            },
                                                            "consequent": {
                                                                "kind": 249,
                                                                "block": {
                                                                    "kind": 124,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 229,
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 81921,
                                                                                    "value": 3,
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 84,
                                                                                    "end": 86
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 78,
                                                                                "end": 86
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 78,
                                                                            "end": 86
                                                                        }
                                                                    ],
                                                                    "multiLine": false,
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 78,
                                                                    "end": 86
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 76,
                                                                "end": 88
                                                            },
                                                            "alternate": null,
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 66,
                                                            "end": 88
                                                        },
                                                        {
                                                            "kind": 168,
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 88,
                                                            "end": 89
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": 4,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 95,
                                                                    "end": 97
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 89,
                                                                "end": 97
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 89,
                                                            "end": 97
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 97
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 55,
                                                "end": 99
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 99
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 99
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 101
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 101
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 102
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 102
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
`````
```

