# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function f() { class C { yield() { } } } }}
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
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 48,
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
                                                            "kind": 178,
                                                            "decorators": null,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "C",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 60,
                                                                "end": 62
                                                            },
                                                            "typeParameters": null,
                                                            "classHeritage": null,
                                                            "members": {
                                                                "kind": 277,
                                                                "elements": [
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
                                                                                "start": 64,
                                                                                "end": 70
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 71,
                                                                                "end": 72
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
                                                                                    "start": 74,
                                                                                    "end": 74
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 72,
                                                                                "end": 76
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 70,
                                                                            "end": 76
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 64,
                                                                        "end": 76
                                                                    }
                                                                ],
                                                                "flags": 256,
                                                                "start": 64,
                                                                "end": 78
                                                            },
                                                            "flags": 128,
                                                            "start": 54,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 54,
                                                    "end": 78
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 80
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 80
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 82
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 83
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function f() { class C { yield() { } } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function f() { class C { yield() { } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function f() { class C { yield() { } } } }}
`````
```

