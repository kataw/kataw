# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}
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
                                            "asyncToken": {
                                                "kind": 82031,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "wrap",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 54,
                                                "end": 59
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 60,
                                                "end": 61
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [
                                                        {
                                                            "kind": 176,
                                                            "asyncToken": {
                                                                "kind": 82031,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 63,
                                                                "end": 69
                                                            },
                                                            "generatorToken": null,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "await",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 78,
                                                                "end": 84
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 85,
                                                                "end": 86
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 88,
                                                                    "end": 88
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 86,
                                                                "end": 90
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 1280,
                                                            "start": 63,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 63,
                                                    "end": 90
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 61,
                                                "end": 92
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 1280,
                                            "start": 39,
                                            "end": 92
                                        },
                                        {
                                            "kind": 168,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 92,
                                            "end": 93
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 93
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 95
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 95
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 95
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 96
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}
`````
```

