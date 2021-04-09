# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function * gen() { function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
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
                                                            "kind": 155,
                                                            "declarationList": {
                                                                "kind": 156,
                                                                "declarations": [
                                                                    {
                                                                        "kind": 157,
                                                                        "binding": {
                                                                            "kind": 81921,
                                                                            "value": "x",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 61,
                                                                            "end": 63
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 81921,
                                                                            "value": 10,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 65,
                                                                            "end": 68
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 61,
                                                                        "end": 68
                                                                    }
                                                                ],
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 61,
                                                                "end": 68
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 57,
                                                            "end": 69
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": 1,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 75,
                                                                    "end": 77
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 69,
                                                                "end": 77
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 69,
                                                            "end": 78
                                                        },
                                                        {
                                                            "kind": 161,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 85,
                                                                "end": 87
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 0,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 88
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 55,
                                                "end": 90
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 90
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 90
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 92
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 92
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 92
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 93
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 93
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 93
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function * gen() { function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function * gen() { function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
`````
```

