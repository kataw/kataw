# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}
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
                                                            "kind": 155,
                                                            "declarationList": {
                                                                "kind": 156,
                                                                "declarations": [
                                                                    {
                                                                        "kind": 157,
                                                                        "binding": {
                                                                            "kind": 81921,
                                                                            "value": "fe",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 60,
                                                                            "end": 63
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 177,
                                                                            "asyncToken": null,
                                                                            "generatorToken": null,
                                                                            "name": {
                                                                                "kind": 81921,
                                                                                "value": "yield",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 81,
                                                                                "end": 82
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "statements": [],
                                                                                    "multiline": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 84,
                                                                                    "end": 84
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 82,
                                                                                "end": 86
                                                                            },
                                                                            "typeParameters": null,
                                                                            "returnType": null,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 65,
                                                                            "end": 86
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 60,
                                                                        "end": 86
                                                                    }
                                                                ],
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 60,
                                                                "end": 86
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 56,
                                                            "end": 86
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 86
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 54,
                                                "end": 88
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 88
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 88
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 90
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 90
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 90
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 91
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 91
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 91
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}
`````
```

