# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}
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
                                                            "kind": 178,
                                                            "decorators": null,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "C",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 62,
                                                                "end": 64
                                                            },
                                                            "typeParameters": null,
                                                            "classHeritage": null,
                                                            "members": {
                                                                "kind": 277,
                                                                "elements": [
                                                                    {
                                                                        "kind": 280,
                                                                        "decorators": null,
                                                                        "declaredToken": null,
                                                                        "staticToken": null,
                                                                        "key": {
                                                                            "kind": 253,
                                                                            "text": "",
                                                                            "autofix": 0,
                                                                            "flags": 12,
                                                                            "start": 66,
                                                                            "end": 66
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 66,
                                                                        "end": 68
                                                                    },
                                                                    {
                                                                        "kind": 278,
                                                                        "decorators": null,
                                                                        "staticToken": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 81921,
                                                                                "value": "yield",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 68,
                                                                                "end": 73
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 74,
                                                                                "end": 75
                                                                            },
                                                                            "type": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "statements": [],
                                                                                    "multiline": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 77,
                                                                                    "end": 77
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 75,
                                                                                "end": 79
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 73,
                                                                            "end": 79
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 68,
                                                                        "end": 79
                                                                    }
                                                                ],
                                                                "flags": 256,
                                                                "start": 66,
                                                                "end": 81
                                                            },
                                                            "flags": 128,
                                                            "start": 56,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 81
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 54,
                                                "end": 83
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 83
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 83
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 85
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 85
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 85
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 86
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 66,
            "end": 68
        }
    ],
    "start": 0,
    "end": 86
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}
`````
```

