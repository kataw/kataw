# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "unction",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 47,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "gf",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 48,
                                                        "end": 51
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 52,
                                                        "end": 52
                                                    },
                                                    "flags": 256,
                                                    "start": 48,
                                                    "end": 53
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 53
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 53
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
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
                                                                        "value": "a",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 59,
                                                                        "end": 61
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 81921,
                                                                        "value": "yield",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 63,
                                                                        "end": 69
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 59,
                                                                    "end": 69
                                                                }
                                                            ],
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 59,
                                                            "end": 69
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 55,
                                                        "end": 69
                                                    }
                                                ],
                                                "multiLine": false,
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 55,
                                                "end": 69
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 53,
                                            "end": 69
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 67174403,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 69,
                                                "end": 75
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 69,
                                            "end": 76
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 76
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 78
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 78
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 78
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 80
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 69,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 69,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 69,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 80,
            "end": 81
        }
    ],
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}
`````
```

