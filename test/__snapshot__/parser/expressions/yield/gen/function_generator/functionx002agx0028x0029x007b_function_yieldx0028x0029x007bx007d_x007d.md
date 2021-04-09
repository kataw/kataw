# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function*g(){ function yield(){}; }
## Input

`````js
function * gen() { function not_gen() { function*g(){ function yield(){}; } }}
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
                                                "end": 50
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 51,
                                                "end": 52
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
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 62,
                                                                "end": 68
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 69,
                                                                "end": 70
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 71,
                                                                    "end": 71
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 70,
                                                                "end": 72
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 53,
                                                            "end": 72
                                                        },
                                                        {
                                                            "kind": 168,
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 72,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 53,
                                                    "end": 73
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 75
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 39,
                                            "end": 75
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 75
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 77
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 77
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 77
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 78
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function*g(){ function yield(){}; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function*g(){ function yield(){}; }
## Input

`````js
function * gen() { function not_gen() { function*g(){ function yield(){}; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function*g(){ function yield(){}; }
## Input

`````js
function * gen() { function not_gen() { function*g(){ function yield(){}; } }}
`````
```

